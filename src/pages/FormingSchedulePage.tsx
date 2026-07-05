import React, { useMemo, useRef, useCallback, useState } from "react";
import {
  Button, Select, Input, Tag, Dropdown, Modal, Form, InputNumber, DatePicker, Tabs, message, Space,
} from "antd";
import {
  PlusOutlined, DeleteOutlined, ThunderboltOutlined, EditOutlined,
  CheckOutlined, ClearOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useMasterDataStore } from "../store/useMasterDataStore";
import { useScheduleStore } from "../store/useScheduleStore";
import { useUIStore } from "../store/useUIStore";
import { useSlurryMutexStore } from "../store/useSlurryMutexStore";
import { generateDateShifts, getToday } from "../utils/dateShift";
import type { ProductSKU, ScheduleTask, DateShift, ProcessType, ShiftType, BOMItem } from "../types";
import { runAutoSchedule } from "../utils/autoSchedule";
import { isContinuousProduction, calcFormingCapacity } from "../utils/capacity";
import { Tree, Modal as AntModal } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

const { Option } = Select;

const ROW_HEIGHT = 52;
const CELL_WIDTH = 110;

const FormingSchedulePage: React.FC = () => {
  const store = useMasterDataStore();
  const scheduleStore = useScheduleStore();
  const uiStore = useUIStore();

  const [workshopFilter, setWorkshopFilter] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [orderTypeFilter, setOrderTypeFilter] = useState<string | null>(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [scheduleEditTask, setScheduleEditTask] = useState<ScheduleTask | null>(null);
  const [selectedMachineTask, setSelectedMachineTask] = useState<ScheduleTask | null>(null);
  const [scheduleForm] = Form.useForm();
  const [bomModalOpen, setBomModalOpen] = useState(false);
  const [autoStartDate, setAutoStartDate] = useState<dayjs.Dayjs>(dayjs());
  const [autoShiftCount, setAutoShiftCount] = useState<number>(10);
  const slurryStore = useSlurryMutexStore();

  // 可调整面板大小
  const [upperRatio, setUpperRatio] = useState(0.5);         // 上半部分占比
  const [leftWidth, setLeftWidth] = useState(340);            // 左侧面板宽度
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<"h" | "v" | null>(null);

  // 甘特图区域 refs
  const ganttBodyRef = useRef<HTMLDivElement>(null);       // 上右甘特图滚动容器
  const bottomGanttRef = useRef<HTMLDivElement>(null);      // 下右甘特图滚动容器
  const productListRef = useRef<HTMLDivElement>(null);      // 上左品相列表
  const syncingRef = useRef(false);                          // 防循环标志

  /* ========== 面板拖拽调整大小 ========== */
  const handleMouseDown = useCallback((e: React.MouseEvent, dir: "h" | "v") => {
    e.preventDefault();
    draggingRef.current = dir;
    document.body.style.cursor = dir === "h" ? "row-resize" : "col-resize";
    document.body.style.userSelect = "none";
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (draggingRef.current === "h") {
        const ratio = (e.clientY - rect.top) / rect.height;
        setUpperRatio(Math.min(0.75, Math.max(0.25, ratio)));
      } else {
        const w = e.clientX - rect.left;
        setLeftWidth(Math.min(500, Math.max(200, w)));
      }
    };
    const handleMouseUp = () => {
      draggingRef.current = null;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const dateShifts = useMemo(() => generateDateShifts(getToday()), []);

  /* ========== 品相过滤 ========== */
  const filteredProducts = useMemo(() => {
    let list = store.products.filter((p) => p.status === "启用");
    if (workshopFilter) list = list.filter((p) => p.mainWorkshopId === workshopFilter);
    if (orderTypeFilter) list = list.filter((p) => p.orderType === orderTypeFilter);
    if (searchText) {
      const s = searchText.toLowerCase();
      list = list.filter((p) =>
        p.productName.toLowerCase().includes(s) || p.productId.toLowerCase().includes(s));
    }
    return list;
  }, [store.products, workshopFilter, searchText, orderTypeFilter]);

  const selectedProduct = useMemo(() => {
    if (!uiStore.selectedProductId) return null;
    return store.products.find((p) => p.productId === uiStore.selectedProductId) || null;
  }, [uiStore.selectedProductId, store.products]);

  /* ========== 甘特图数据 ========== */
  const ganttData = useMemo(() => {
    const tasks = scheduleStore.tasks;
    return filteredProducts.map((product) => {
      let runningStock = product.stock;
      const cells = dateShifts.map((ds) => {
        const cellTasks = tasks.filter(
          (t) => t.productId === product.productId && t.date === ds.date && t.shift === ds.shift);
        const formingQty = cellTasks.filter((t) => t.processType === "成型")
          .reduce((sum, t) => sum + t.quantity, 0);
        runningStock += formingQty;
        const formingTask = cellTasks.find((t) => t.processType === "成型") || null;

        let conflicting = false;
        if (formingTask) {
          const machine = store.formingMachines.find((m) => m.machineId === formingTask.machineId);
          if (machine) {
            const sameSlot = tasks.filter(
              (t) => t.machineId === formingTask.machineId && t.date === ds.date &&
                t.shift === ds.shift && t.processType === "成型");
            const totalUsed = sameSlot.reduce((s, t) => s + t.machineCount, 0);
            const groupCount = new Set(sameSlot.map((t) => t.groupIndex)).size;
            if (totalUsed > machine.quantity || groupCount > machine.maxGroups) conflicting = true;
          }
        }
        return { date: ds.date, shift: ds.shift, stock: runningStock, task: formingTask, conflicting };
      });
      return { product, cells };
    });
  }, [filteredProducts, scheduleStore.tasks, dateShifts, store.formingMachines]);

  /* ========== 联动滚动（双向 + 防循环） ========== */
  const handleGanttScroll = useCallback(() => {
    if (syncingRef.current) return;
    syncingRef.current = true;
    const gantt = ganttBodyRef.current;
    const prodList = productListRef.current;
    const bottom = bottomGanttRef.current;
    if (gantt) {
      if (prodList) prodList.scrollTop = gantt.scrollTop;
      if (bottom) bottom.scrollLeft = gantt.scrollLeft;
    }
    requestAnimationFrame(() => { syncingRef.current = false; });
  }, []);

  const handleProductListScroll = useCallback(() => {
    if (syncingRef.current) return;
    syncingRef.current = true;
    const prodList = productListRef.current;
    const gantt = ganttBodyRef.current;
    if (prodList && gantt) gantt.scrollTop = prodList.scrollTop;
    requestAnimationFrame(() => { syncingRef.current = false; });
  }, []);

  const handleBottomGanttScroll = useCallback(() => {
    if (syncingRef.current) return;
    syncingRef.current = true;
    const bottom = bottomGanttRef.current;
    const gantt = ganttBodyRef.current;
    if (bottom && gantt) gantt.scrollLeft = bottom.scrollLeft;
    requestAnimationFrame(() => { syncingRef.current = false; });
  }, []);

  /* ========== 选中品相 ========== */
  const handleSelectProduct = (productId: string) => {
    uiStore.setSelectedProductId(productId);
  };

  /* ========== 单击甘特图格子 - 仅选中品相 ========== */
  const handleCellClick = useCallback((product: ProductSKU) => {
    uiStore.setSelectedProductId(product.productId);
  }, [uiStore]);

  /* ========== 双击甘特图格子 - 自动排产 ========== */
  const handleCellDoubleClick = useCallback((product: ProductSKU, ds: DateShift, existingTask: ScheduleTask | null) => {
    uiStore.setSelectedProductId(product.productId);

    if (existingTask) {
      // 有已有任务 → 不做操作（右键可编辑/删除）
      return;
    }

    // 无任务 → 自动排产
    // 互斥校验
    const wsMutexGroups = slurryStore.mutexGroups.filter((g) => g.mutexType === "车间互斥");
    const mcMutexGroups = slurryStore.mutexGroups.filter((g) => g.mutexType === "机台互斥");
    for (const group of wsMutexGroups) {
      const items = slurryStore.mutexItems.filter((i) => i.groupId === group.groupId);
      const inGroup = items.some((i) => i.productId === product.productId);
      if (!inGroup) continue;
      const conflict = scheduleStore.tasks.some((t) =>
        t.date === ds.date && t.shift === ds.shift && t.processType === "成型" &&
        items.some((i) => i.productId === t.productId && i.productId !== product.productId)
      );
      if (conflict) {
        const conflictProduct = scheduleStore.tasks.find((t) =>
          t.date === ds.date && t.shift === ds.shift && t.processType === "成型" &&
          items.some((i) => i.productId === t.productId && i.productId !== product.productId)
        );
        message.warning(`当前品相与"${conflictProduct?.productName}"属于车间互斥组"${group.groupName}"，不可在 ${ds.date} ${ds.shift} 同时排产`);
        return;
      }
    }
    for (const group of mcMutexGroups) {
      const items = slurryStore.mutexItems.filter((i) => i.groupId === group.groupId);
      const inGroup = items.some((i) => i.productId === product.productId);
      if (!inGroup) continue;
      const speed = store.formingSpeeds.find(
        (s) => s.productId === product.productId && s.mainWorkshop === product.mainWorkshopId
      );
      if (!speed) continue;
      const conflict = scheduleStore.tasks.some((t) =>
        t.date === ds.date && t.shift === ds.shift && t.processType === "成型" &&
        t.machineId === speed.machineId &&
        items.some((i) => i.productId === t.productId && i.productId !== product.productId)
      );
      if (conflict) {
        const conflictProduct = scheduleStore.tasks.find((t) =>
          t.date === ds.date && t.shift === ds.shift && t.processType === "成型" &&
          t.machineId === speed.machineId &&
          items.some((i) => i.productId === t.productId && i.productId !== product.productId)
        );
        message.warning(`当前品相与"${conflictProduct?.productName}"属于机台互斥组"${group.groupName}"，不可在 ${ds.date} ${ds.shift} 同机台排产`);
        return;
      }
    }

    const speed = store.formingSpeeds.find(
      (s) => s.productId === product.productId && s.mainWorkshop === product.mainWorkshopId
    );
    if (!speed) {
      message.warning("该品相无可用成型机台配置");
      return;
    }

    const machine = store.formingMachines.find(
      (m) => m.machineId === speed.machineId && m.status === "可用"
    );
    if (!machine) {
      message.warning("无可用成型机台");
      return;
    }

    const mCount = Math.min(product.defaultMachineCount, machine.quantity);
    if (mCount < product.minMachineCount) {
      message.warning(`机台数不足，最少需要${product.minMachineCount}台`);
      return;
    }

    // 检查机台剩余
    const existingTasks = scheduleStore.tasks.filter(
      (t) => t.machineId === machine.machineId && t.date === ds.date &&
        t.shift === ds.shift && t.processType === "成型"
    );
    const used = existingTasks.reduce((s, t) => s + t.machineCount, 0);
    if (used + mCount > machine.quantity) {
      message.warning(`机台数量不足，剩余${machine.quantity - used}台可用`);
      return;
    }

    // 检查分组
    const groupSet = new Set(existingTasks.map((t) => t.groupIndex));
    let groupIdx = 0;
    while (groupSet.has(groupIdx) && groupIdx < machine.maxGroups) groupIdx++;
    if (groupIdx >= machine.maxGroups) {
      message.warning("分组数已满");
      return;
    }

    // 计算连产和产能
    const continuous = isContinuousProduction(product.productId, machine.machineId, ds.date, ds.shift);
    const capacity = calcFormingCapacity(speed, mCount, continuous);
    const qty = Math.min(capacity, product.pendingQty - scheduleStore.getScheduledQty(product.productId));
    if (qty <= 0) {
      message.warning("该品相已完成排产");
      return;
    }

    const newTask: ScheduleTask = {
      taskId: "",
      productId: product.productId,
      productName: product.productName,
      processType: "成型",
      workshopId: machine.workshopId,
      workshopName: machine.workshopName,
      machineId: machine.machineId,
      machineName: machine.machineName,
      date: ds.date,
      shift: ds.shift,
      quantity: qty,
      machineCount: mCount,
      groupIndex: groupIdx,
      source: "手动排产",
      status: "草稿",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    scheduleStore.addTask(newTask);

    // 自动生成速冻任务
    const freezingSpeed = store.freezingSpeeds.find(
      (s) => s.productId === product.productId && s.mainWorkshop === product.mainWorkshopId
    );
    if (freezingSpeed) {
      const fzMachine = store.freezingMachines.find(
        (m) => m.machineId === freezingSpeed.machineId && m.status === "可用"
      );
      if (fzMachine) {
        scheduleStore.addTask({
          taskId: "", productId: product.productId, productName: product.productName,
          processType: "速冻", workshopId: fzMachine.workshopId, workshopName: fzMachine.workshopName,
          machineId: fzMachine.machineId, machineName: fzMachine.machineName,
          date: ds.date, shift: ds.shift, quantity: qty, machineCount: 1, groupIndex: 0,
          source: "自动排产", status: "自动生成草稿",
          createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
        });
      }
    }

    // 自动生成包装任务
    const packagingSpeed = store.packagingSpeeds.find(
      (s) => s.productId === product.productId && s.mainWorkshop === product.mainWorkshopId
    );
    if (packagingSpeed) {
      const pkMachine = store.packagingMachines.find(
        (m) => m.machineId === packagingSpeed.machineId && m.status === "可用"
      );
      if (pkMachine) {
        scheduleStore.addTask({
          taskId: "", productId: product.productId, productName: product.productName,
          processType: "包装", workshopId: pkMachine.workshopId, workshopName: pkMachine.workshopName,
          machineId: pkMachine.machineId, machineName: pkMachine.machineName,
          date: ds.date, shift: ds.shift, quantity: qty, machineCount: 1, groupIndex: 0,
          source: "自动排产", status: "自动生成草稿",
          createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
        });
      }
    }

    message.success(`已排产：${product.productName} ${ds.label} +${qty}`);
  }, [store, scheduleStore]);

  /* ========== 右键菜单 ========== */
  const handleContextMenu = useCallback((product: ProductSKU, ds: DateShift) => {
    uiStore.setSelectedProductId(product.productId);
    setScheduleEditTask(null);
    scheduleForm.resetFields();
    scheduleForm.setFieldsValue({
      productName: product.productName,
      productId: product.productId,
      processType: "成型" as ProcessType,
      workshopId: product.mainWorkshopId,
      date: dayjs(ds.date),
      shift: ds.shift,
      machineCount: product.defaultMachineCount,
    });
    const speed = store.formingSpeeds.find(
      (s) => s.productId === product.productId && s.mainWorkshop === product.mainWorkshopId
    );
    if (speed) {
      const continuous = isContinuousProduction(product.productId, speed.machineId, ds.date, ds.shift);
      const qty = calcFormingCapacity(speed, product.defaultMachineCount, continuous);
      scheduleForm.setFieldsValue({
        quantity: Math.min(qty, product.pendingQty),
        machineId: speed.machineId,
      });
    }
    setScheduleModalOpen(true);
  }, [store]);

  /* ========== 点击机台甘特图格子 → 选中并启用修改按钮 ========== */
  const handleMachineCellClick = useCallback((task: ScheduleTask | null) => {
    setSelectedMachineTask(task);
  }, []);

  /* ========== 修改机台甘特图任务 → 打开弹窗 ========== */
  const handleEditMachineTask = useCallback(() => {
    if (!selectedMachineTask) { message.warning("请先点击选择一个排产任务"); return; }
    setScheduleEditTask(selectedMachineTask);
    scheduleForm.resetFields();
    scheduleForm.setFieldsValue({
      productName: selectedMachineTask.productName,
      productId: selectedMachineTask.productId,
      processType: selectedMachineTask.processType,
      workshopId: selectedMachineTask.workshopId,
      machineId: selectedMachineTask.machineId,
      date: dayjs(selectedMachineTask.date),
      shift: selectedMachineTask.shift,
      machineCount: selectedMachineTask.machineCount,
      quantity: selectedMachineTask.quantity,
      groupIndex: selectedMachineTask.groupIndex,
    });
    setScheduleModalOpen(true);
  }, [selectedMachineTask, scheduleForm]);

  /* ========== 删除机台甘特图任务 ========== */
  const handleDeleteMachineTask = useCallback(() => {
    if (!selectedMachineTask) { message.warning("请先点击选择一个排产任务"); return; }
    scheduleStore.deleteTask(selectedMachineTask.taskId);
    message.success("排产任务已删除");
    setSelectedMachineTask(null);
  }, [selectedMachineTask, scheduleStore]);

  /* ========== 保存排产(弹窗) ========== */
  const handleSaveSchedule = () => {
    scheduleForm.validateFields().then((values: Record<string, unknown>) => {
      const product = store.products.find((p) => p.productId === values.productId as string);
      if (!product) return;
      const date = (values.date as dayjs.Dayjs).format("YYYY-MM-DD");
      const mCount = values.machineCount as number;
      const qty = values.quantity as number;

      if (mCount < product.minMachineCount || mCount > product.maxMachineCount) {
        message.error(`开机数需在 ${product.minMachineCount}-${product.maxMachineCount} 之间`);
        return;
      }

      if (scheduleEditTask) {
        scheduleStore.updateTask(scheduleEditTask.taskId, {
          date,
          quantity: qty,
          machineCount: mCount,
          workshopId: values.workshopId as string,
          machineId: values.machineId as string,
          shift: values.shift as ShiftType,
          updatedAt: new Date().toISOString(),
        } as Partial<ScheduleTask>);
        message.success("任务已更新");
      } else {
        scheduleStore.addTask({
          taskId: "",
          productId: product.productId,
          productName: product.productName,
          processType: (values.processType as ProcessType) || "成型",
          workshopId: values.workshopId as string,
          workshopName: store.workshops.find((w) => w.workshopId === (values.workshopId as string))?.workshopName || "",
          machineId: values.machineId as string,
          machineName: "",
          date,
          shift: values.shift as ShiftType,
          quantity: qty,
          machineCount: mCount,
          groupIndex: (values.groupIndex as number) || 0,
          source: "手动排产",
          status: "草稿",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        message.success("排产任务已生成");
      }
      setScheduleModalOpen(false);
    });
  };

  const handleDeleteTask = () => {
    if (!scheduleEditTask) return;
    if (scheduleEditTask.status === "车间已确认" || scheduleEditTask.status === "最终确认") {
      message.warning("已确认任务无法直接删除");
      return;
    }
    scheduleStore.deleteTask(scheduleEditTask.taskId);
    message.success("任务已删除");
    setScheduleModalOpen(false);
  };

  /* ========== 工具栏操作 ========== */
  const handleAutoSchedule = () => {
    const newTasks = runAutoSchedule(autoStartDate.format("YYYY-MM-DD"), autoShiftCount);
    newTasks.forEach((t) => scheduleStore.addTask(t));
    message.success(`自动排产完成，从${autoStartDate.format("MM/DD")}起${autoShiftCount}个班次，共生成 ${newTasks.length} 个任务`);
  };
  const handleClearDrafts = () => { scheduleStore.clearDrafts(); message.success("草稿已清空"); };

  /* ========== 打印报表 ========== */
  const handlePrintReport = () => {
    const tasks = scheduleStore.tasks.filter((t) => t.processType === "成型");
    // 只显示有排产任务的品相
    const scheduledProductIds = new Set(tasks.map((t) => t.productId));
    const reportProducts = filteredProducts.filter((p) => scheduledProductIds.has(p.productId));
    if (reportProducts.length === 0) { message.warning("暂无排产数据可打印"); return; }

    const w = window.open("", "_blank", "width=1200,height=800");
    if (!w) return;
    const totalByProduct: Record<string, number> = {};
    const totalByDateShift: Record<string, number> = {};
    const cells: Record<string, Record<string, number>> = {};

    reportProducts.forEach((p) => {
      cells[p.productId] = {};
      dateShifts.forEach((ds) => {
        const qty = tasks
          .filter((t) => t.productId === p.productId && t.date === ds.date && t.shift === ds.shift && t.processType === "成型")
          .reduce((s, t) => s + t.quantity, 0);
        cells[p.productId][`${ds.date}-${ds.shift}`] = qty;
        totalByProduct[p.productId] = (totalByProduct[p.productId] || 0) + qty;
        totalByDateShift[`${ds.date}-${ds.shift}`] = (totalByDateShift[`${ds.date}-${ds.shift}`] || 0) + qty;
      });
    });

    const grandTotal = Object.values(totalByProduct).reduce((s, v) => s + v, 0);
    let html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>安井APS排产报表</title>
<style>
  body { font-family: "Microsoft YaHei", sans-serif; margin: 20px; }
  h2 { text-align: center; color: #16a34a; }
  table { border-collapse: collapse; width: 100%; font-size: 10px; }
  th, td { border: 1px solid #999; padding: 3px 5px; text-align: center; }
  th { background: #16a34a; color: #fff; font-weight: 600; }
  .prod-name { text-align: left; min-width: 140px; }
  .total-row td, .total-col { background: #dcfce7; font-weight: 700; }
</style></head><body>
<h2>安井APS 成型排产报表</h2>
<p>日期：${getToday()}  |  品相数：${reportProducts.length}  |  总排产量：${grandTotal.toLocaleString()}</p>
<table><thead><tr><th>品相</th><th>库存</th>`;
    dateShifts.forEach((ds) => { html += `<th>${ds.label}</th>`; });
    html += `<th class="total-col">合计</th></tr></thead><tbody>`;

    reportProducts.forEach((p) => {
      html += `<tr><td class="prod-name">${p.productName}</td><td>${p.stock}</td>`;
      let rowSum = 0;
      dateShifts.forEach((ds) => {
        const qty = cells[p.productId]?.[`${ds.date}-${ds.shift}`] || 0;
        rowSum += qty;
        html += `<td>${qty > 0 ? qty.toLocaleString() : ""}</td>`;
      });
      html += `<td class="total-col">${rowSum > 0 ? rowSum.toLocaleString() : ""}</td></tr>`;
    });

    html += `<tr class="total-row"><td class="prod-name"><b>合计</b></td><td></td>`;
    dateShifts.forEach((ds) => {
      const t = totalByDateShift[`${ds.date}-${ds.shift}`] || 0;
      html += `<td>${t > 0 ? t.toLocaleString() : ""}</td>`;
    });
    html += `<td class="total-col">${grandTotal.toLocaleString()}</td></tr>`;
    html += `</tbody></table></body></html>`;

    w.document.write(html);
    w.document.close();
    setTimeout(() => w.print(), 500);
  };

  /* ========== BOM 树构建 ========== */
  const buildBomTree = React.useCallback((parentId: string): any[] => {
    const items = slurryStore.bomData.filter((b) => b.parentId === parentId);
    return items.map((b, i) => {
      let leadTimeStr = "";
      if (b.childType === "浆料") {
        const lt = slurryStore.leadTimes.find(
          (l) => l.parentId === parentId && l.childSlurryId === b.childId
        );
        if (lt) leadTimeStr = `（${lt.leadShifts}班次*${Math.round(lt.leadRatio * 100)}%）`;
      }
      return {
        title: <span style={{ color: b.childType === "浆料" ? "#16a34a" : "#2563eb", fontWeight: b.childType === "浆料" ? 600 : 400 }}>
          【{b.childType}】{b.childName} *{b.usageKg.toFixed(3)}{leadTimeStr && <span style={{ color: "#ea580c", fontSize: 11 }}> {leadTimeStr}</span>}
        </span>,
        key: `${b.childId}-${parentId}-${i}`,
        children: b.childType === "浆料" ? buildBomTree(b.childId) : undefined,
      };
    });
  }, [slurryStore.bomData, slurryStore.leadTimes]);

  /* ========== 甘特图格子样式 ========== */
  const getCellStyle = (cell: { task: ScheduleTask | null; conflicting: boolean; stock: number }): React.CSSProperties => {
    const style: React.CSSProperties = { width: CELL_WIDTH, height: ROW_HEIGHT };
    if (cell.conflicting) { style.border = "2px solid #ef4444"; }
    if (cell.task) {
      const isConfirmed = cell.task.status === "待车间确认" || cell.task.status === "车间已确认" || cell.task.status === "最终确认";
      style.background = isConfirmed ? "#dcfce7" : "#fef9c3";
      if (cell.task.status === "最终确认") style.color = "#166534";
    } else if (cell.stock < 0) {
      style.background = "#fef2f2";
    }
    return style;
  };

  /* ========== 下半部分：机台数据 ========== */
  const formingMachineData = useMemo(() => {
    if (!selectedProduct) return [];
    return store.formingSpeeds
      .filter((s) => s.productId === selectedProduct.productId)
      .map((s) => {
        const machine = store.formingMachines.find((m) => m.machineId === s.machineId);
        return { ...s, machine, isMain: s.mainWorkshop === selectedProduct.mainWorkshopId };
      });
  }, [selectedProduct, store.formingSpeeds, store.formingMachines]);

  const freezingMachineData = useMemo(() => {
    if (!selectedProduct) return [];
    return store.freezingSpeeds
      .filter((s) => s.productId === selectedProduct.productId)
      .map((s) => {
        const machine = store.freezingMachines.find((m) => m.machineId === s.machineId);
        return { ...s, machine, isMain: s.mainWorkshop === selectedProduct.mainWorkshopId };
      });
  }, [selectedProduct, store.freezingSpeeds, store.freezingMachines]);

  const packagingMachineData = useMemo(() => {
    if (!selectedProduct) return [];
    return store.packagingSpeeds
      .filter((s) => s.productId === selectedProduct.productId)
      .map((s) => {
        const machine = store.packagingMachines.find((m) => m.machineId === s.machineId);
        return { ...s, machine, isMain: s.mainWorkshop === selectedProduct.mainWorkshopId };
      });
  }, [selectedProduct, store.packagingSpeeds, store.packagingMachines]);

  /* ========== 机台甘特图数据 ========== */
  const machineGanttData = useMemo(() => {
    if (!selectedProduct || uiStore.activeProcessTab !== "成型") return [];
    const speeds = store.formingSpeeds.filter((s) => s.productId === selectedProduct.productId);
    const machineIds = [...new Set(speeds.map((s) => s.machineId))];
    const tasks = scheduleStore.tasks;

    const buildCells = (mid: string, gi: number) =>
      dateShifts.map((ds) => {
        const cellTasks = tasks.filter((t) => t.machineId === mid && t.date === ds.date &&
          t.shift === ds.shift && t.processType === "成型" && t.groupIndex === gi);
        const allShift = tasks.filter((t) => t.machineId === mid && t.date === ds.date &&
          t.shift === ds.shift && t.processType === "成型");
        const totalUsed = allShift.reduce((s, t) => s + t.machineCount, 0);
        const machine = store.formingMachines.find((m) => m.machineId === mid)!;
        return { date: ds.date, shift: ds.shift, task: cellTasks[0] || null as ScheduleTask | null,
          available: machine.quantity - totalUsed, total: machine.quantity };
      });

    return machineIds.flatMap((mid) => {
      const machine = store.formingMachines.find((m) => m.machineId === mid);
      if (!machine) return [];
      const machineTasks = tasks.filter((t) => t.machineId === mid && t.processType === "成型");
      const usedGroups = new Set(machineTasks.map((t) => t.groupIndex));

      // 没排产 → 不拆分，显示一行
      if (usedGroups.size === 0) {
        return [{
          machineId: mid, machineName: machine.machineName,
          displayName: machine.machineName, workshopName: machine.workshopName,
          groupIndex: 0, isSplit: false, machineCount: 0, totalMachines: machine.quantity,
          cells: buildCells(mid, 0),
        }];
      }

      // 已排产 → 列出每个已用分组
      const sortedGroups = [...usedGroups].sort((a, b) => a - b);
      let nextGroup = 0;
      while (usedGroups.has(nextGroup)) nextGroup++;

      const rows = sortedGroups.map((gi) => {
        const groupTasks = machineTasks.filter((t) => t.groupIndex === gi);
        return {
          machineId: mid, machineName: machine.machineName,
          displayName: `${machine.machineName}#${gi + 1}`,
          workshopName: machine.workshopName,
          groupIndex: gi, isSplit: true,
          machineCount: groupTasks[0]?.machineCount ?? 0,
          totalMachines: machine.quantity,
          cells: buildCells(mid, gi),
        };
      });

      const totalAllocated = sortedGroups.reduce((sum, gi) => {
        const gt = machineTasks.filter((t) => t.groupIndex === gi);
        return sum + (gt[0]?.machineCount ?? 0);
      }, 0);
      const remaining = machine.quantity - totalAllocated;
      if (remaining > 0) {
        rows.push({
          machineId: mid, machineName: machine.machineName,
          displayName: `${machine.machineName}#${nextGroup + 1}`,
          workshopName: machine.workshopName,
          groupIndex: nextGroup, isSplit: true,
          machineCount: remaining, totalMachines: machine.quantity,
          cells: buildCells(mid, nextGroup),
        });
      }

      return rows;
    });
  }, [selectedProduct, uiStore.activeProcessTab, store.formingSpeeds, store.formingMachines, dateShifts, scheduleStore.tasks]);

  /* ========== 速冻机台甘特图数据 ========== */
  const freezingMachineGanttData = useMemo(() => {
    if (!selectedProduct || uiStore.activeProcessTab !== "速冻") return [];
    const speeds = store.freezingSpeeds.filter((s) => s.productId === selectedProduct.productId);
    const machineIds = [...new Set(speeds.map((s) => s.machineId))];
    const tasks = scheduleStore.tasks;
    return machineIds.map((mid) => {
      const machine = store.freezingMachines.find((m) => m.machineId === mid);
      if (!machine) return null;
      const machineTasks = tasks.filter((t) => t.machineId === mid && t.processType === "速冻");
      const totalAllocated = machineTasks.reduce((s, t) => s + t.machineCount, 0);
      return {
        machineId: mid, machineName: machine.machineName,
        workshopName: machine.workshopName,
        machineCount: totalAllocated, totalMachines: machine.quantity,
        cells: dateShifts.map((ds) => {
          const cellTasks = tasks.filter((t) => t.machineId === mid && t.date === ds.date &&
            t.shift === ds.shift && t.processType === "速冻");
          const totalUsed = cellTasks.reduce((s, t) => s + t.machineCount, 0);
          return { date: ds.date, shift: ds.shift, task: cellTasks[0] || null as ScheduleTask | null,
            used: totalUsed, total: machine.quantity };
        }),
      };
    }).filter(Boolean) as Array<{
      machineId: string; machineName: string; workshopName: string;
      machineCount: number; totalMachines: number;
      cells: Array<{ date: string; shift: string; task: ScheduleTask | null; used: number; total: number }>;
    }>;
  }, [selectedProduct, uiStore.activeProcessTab, store.freezingSpeeds, store.freezingMachines, dateShifts, scheduleStore.tasks]);

  /* ========== 包装机台甘特图数据 ========== */
  const packagingMachineGanttData = useMemo(() => {
    if (!selectedProduct || uiStore.activeProcessTab !== "包装") return [];
    const speeds = store.packagingSpeeds.filter((s) => s.productId === selectedProduct.productId);
    const machineIds = [...new Set(speeds.map((s) => s.machineId))];
    const tasks = scheduleStore.tasks;
    return machineIds.map((mid) => {
      const machine = store.packagingMachines.find((m) => m.machineId === mid);
      if (!machine) return null;
      const machineTasks = tasks.filter((t) => t.machineId === mid && t.processType === "包装");
      const totalAllocated = machineTasks.reduce((s, t) => s + t.machineCount, 0);
      return {
        machineId: mid, machineName: machine.machineName,
        workshopName: machine.workshopName,
        machineCount: totalAllocated, totalMachines: machine.quantity,
        cells: dateShifts.map((ds) => {
          const cellTasks = tasks.filter((t) => t.machineId === mid && t.date === ds.date &&
            t.shift === ds.shift && t.processType === "包装");
          const totalUsed = cellTasks.reduce((s, t) => s + t.machineCount, 0);
          return { date: ds.date, shift: ds.shift, task: cellTasks[0] || null as ScheduleTask | null,
            used: totalUsed, total: machine.quantity };
        }),
      };
    }).filter(Boolean) as Array<{
      machineId: string; machineName: string; workshopName: string;
      machineCount: number; totalMachines: number;
      cells: Array<{ date: string; shift: string; task: ScheduleTask | null; used: number; total: number }>;
    }>;
  }, [selectedProduct, uiStore.activeProcessTab, store.packagingSpeeds, store.packagingMachines, dateShifts, scheduleStore.tasks]);

  /* 弹窗用机台列表 */
  const [availableMachines, setAvailableMachines] = useState<{ id: string; name: string }[]>([]);
  const handleProcessWorkshopChange = () => {
    const procType = scheduleForm.getFieldValue("processType") as ProcessType;
    const wsId = scheduleForm.getFieldValue("workshopId") as string;
    if (procType === "成型") {
      setAvailableMachines(store.formingMachines.filter((m) => m.workshopId === wsId)
        .map((m) => ({ id: m.machineId, name: m.machineName })));
    } else if (procType === "速冻") {
      setAvailableMachines(store.freezingMachines.filter((m) => m.workshopId === wsId)
        .map((m) => ({ id: m.machineId, name: m.machineName })));
    } else {
      setAvailableMachines(store.packagingMachines.filter((m) => m.workshopId === wsId)
        .map((m) => ({ id: m.machineId, name: m.machineName })));
    }
  };

  return (
    <div ref={containerRef} style={{ height: "100%", display: "flex", flexDirection: "column", padding: "8px 12px", overflow: "hidden" }}>
      {/* ===== 顶部工具栏 ===== */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, flexWrap: "nowrap", flexShrink: 0, overflow: "auto" }}>
        <span style={{ fontWeight: 600, fontSize: 15, color: "#16a34a", marginRight: 8 }}>成型排产</span>
        <Select placeholder="车间筛选" allowClear style={{ width: 130 }} value={workshopFilter} onChange={setWorkshopFilter}>
          {store.workshops.map((w) => <Option key={w.workshopId} value={w.workshopId}>{w.workshopName}</Option>)}
        </Select>
        <Select placeholder="订单类型" allowClear style={{ width: 110 }} value={orderTypeFilter} onChange={setOrderTypeFilter}>
          <Option value="普通">普通</Option><Option value="特通">特通</Option><Option value="出口">出口</Option>
        </Select>
        <Input placeholder="搜索品名/编号" style={{ width: 180 }} value={searchText}
          onChange={(e) => setSearchText(e.target.value)} allowClear />
        <span style={{ fontSize: 12, color: "#666" }}>起始</span>
        <DatePicker value={autoStartDate} onChange={(d) => d && setAutoStartDate(d)} size="small" style={{ width: 120 }} />
        <span style={{ fontSize: 12, color: "#666" }}>班次</span>
        <InputNumber value={autoShiftCount} onChange={(v) => v && setAutoShiftCount(v)} size="small" style={{ width: 70 }} min={2} max={30} />
        <Button icon={<ThunderboltOutlined />} onClick={handleAutoSchedule}>自动排产</Button>
        <Button icon={<UnorderedListOutlined />}
          disabled={!uiStore.selectedProductId}
          onClick={() => { if (!uiStore.selectedProductId) { message.warning("请先选择品相"); return; } setBomModalOpen(true); }}>BOM</Button>
        <Button icon={<ClearOutlined />} onClick={handleClearDrafts} danger>清空草稿</Button>
        <div style={{ flex: 1 }} />
        <Button icon={<CheckOutlined />} onClick={handlePrintReport}>打印报表</Button>
      </div>

      {/* ===== 上半部分：品相表格 + 品相甘特图 ===== */}
      <div style={{ flex: `0 0 ${upperRatio * 100}%`, display: "flex", minHeight: 0, border: "1px solid #e8e8e8", borderRadius: 4, background: "#fff" }}>
        {/* 上左：品相列表 */}
        <div ref={productListRef}
          onScroll={handleProductListScroll}
          style={{ width: leftWidth, minWidth: leftWidth, overflow: "auto", borderRight: "2px solid #e8e8e8" }}>
          <table style={{ minWidth: 500, borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#fafafa", position: "sticky", top: 0, zIndex: 2, height: 36 }}>
                <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>产品号</th>
                <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>产品名</th>
                <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>类型</th>
                <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>车间</th>
                <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>库存</th>
                <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>待排</th>
                <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>已排</th>
                <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>状态</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p) => {
                const sq = scheduleStore.getScheduledQty(p.productId);
                const isSel = uiStore.selectedProductId === p.productId;
                return (
                  <tr key={p.productId}
                    onClick={() => handleSelectProduct(p.productId)}
                    style={{ cursor: "pointer", background: isSel ? "#dcfce7" : undefined, height: ROW_HEIGHT }}>
                    <td style={tdStyle}><span style={{ fontSize: 10, color: "#999" }}>{p.productId}</span></td>
                    <td style={{ ...tdStyle, fontWeight: 500 }}>{p.productName}</td>
                    <td style={tdStyle}>
                      {p.orderType === "特通" ? <Tag color="purple" style={{ fontSize: 10 }}>特通</Tag>
                        : p.orderType === "出口" ? <Tag color="blue" style={{ fontSize: 10 }}>出口</Tag>
                          : <span style={{ color: "#666" }}>普通</span>}
                    </td>
                    <td style={tdStyle}>{p.mainWorkshopName}</td>
                    <td style={{ ...tdStyle, color: p.stock < p.safetyStock ? "#eab308" : undefined, fontWeight: p.stock < p.safetyStock ? 600 : undefined }}>
                      {p.stock}</td>
                    <td style={tdStyle}>{p.pendingQty}</td>
                    <td style={tdStyle}><span style={{ color: sq > 0 ? "#16a34a" : "#999" }}>{sq}</span></td>
                    <td style={tdStyle}>
                      {sq >= p.pendingQty ? <Tag color="green" style={{ fontSize: 10 }}>已排满</Tag>
                        : p.stock < p.safetyStock ? <Tag color="gold" style={{ fontSize: 10 }}>库存低</Tag>
                          : sq > 0 ? <Tag color="blue" style={{ fontSize: 10 }}>待排</Tag>
                            : <Tag style={{ fontSize: 10 }}>正常</Tag>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 左右拖拽分隔线 */}
        <div
          onMouseDown={(e) => handleMouseDown(e, "v")}
          style={{ width: 5, cursor: "col-resize", flexShrink: 0, background: "transparent" }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#16a34a"; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; }}
        />
        {/* 上右：品相甘特图（横坐标=日期班次，纵坐标=品相行与左对齐） */}
        <div ref={ganttBodyRef} onScroll={handleGanttScroll}
          style={{ flex: 1, overflow: "auto" }}>
          <table style={{ borderCollapse: "collapse", minWidth: dateShifts.length * CELL_WIDTH, tableLayout: "fixed" }}>
            <thead>
              <tr>
                {dateShifts.map((ds) => (
                  <th key={`${ds.date}-${ds.shift}`} className="gantt-header"
                    style={{ width: CELL_WIDTH, position: "sticky", top: 0, zIndex: 10 }}>
                    <div>{ds.label.split(" ")[0]}</div>
                    <div style={{ fontSize: 10, color: "#888" }}>{ds.label.split(" ")[1]}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ganttData.map(({ product, cells }) => (
                <tr key={product.productId} style={{ height: ROW_HEIGHT }}>
                  {cells.map((cell) => (
                    <td key={`${cell.date}-${cell.shift}`}
                      className="gantt-cell"
                      style={getCellStyle(cell)}
                      onClick={() => handleCellClick(product)}
                      onDoubleClick={() => handleCellDoubleClick(product,
                        { date: cell.date, shift: cell.shift, label: "" }, cell.task)}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        handleContextMenu(product, { date: cell.date, shift: cell.shift, label: "" });
                      }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                        <div style={{ fontSize: 10, color: "#999" }}>库存 {cell.stock}</div>
                        {cell.task && (
                          <div style={{ fontSize: 12, fontWeight: 600, color: cell.task.status === "车间反馈调整" ? "#ea580c" : "#16a34a" }}>
                            +{cell.task.quantity}
                          </div>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 上下拖拽分隔条 */}
      <div
        onMouseDown={(e) => handleMouseDown(e, "h")}
        style={{ height: 6, cursor: "row-resize", flexShrink: 0, background: "transparent",
          borderTop: "2px solid transparent", borderBottom: "2px solid transparent",
          margin: "2px 0" }}
        onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = "#16a34a"; }}
        onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = "transparent"; }}
      />

      {/* ===== 下半部分：机台表格 + 机台甘特图 ===== */}
      <div style={{ flex: 1, display: "flex", minHeight: 0, border: "1px solid #e8e8e8", borderRadius: 4, background: "#fff" }}>
        {/* 下左：机台 Tabs */}
        <div style={{ width: leftWidth, minWidth: leftWidth, borderRight: "2px solid #e8e8e8", display: "flex", flexDirection: "column" }}>
          <Tabs activeKey={uiStore.activeProcessTab}
            onChange={(k) => { uiStore.setActiveProcessTab(k as "成型" | "速冻" | "包装"); setSelectedMachineTask(null); }}
            size="small" className="lower-machine-tabs"
            tabBarStyle={{ marginBottom: 0, paddingLeft: 8, flexShrink: 0 }}
            items={[
              {
                key: "成型", label: "成型",
                children: (
                  <div style={{ flex: 1, minHeight: 0, overflow: "auto", fontSize: 12 }}>
                    {machineGanttData.length > 0 ? (
                      <table style={{ minWidth: 280, borderCollapse: "collapse" }}>
                        <thead><tr style={{ background: "#fafafa", height: 36 }}>
                          <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>车间</th>
                          <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>机台名称</th>
                          <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>分组</th>
                        </tr></thead>
                        <tbody>
                          {machineGanttData.map((row) => (
                            <tr key={`${row.machineId}-${row.groupIndex}`}
                              style={{ cursor: "pointer", height: ROW_HEIGHT }}>
                              <td style={tdStyle}>{row.workshopName}</td>
                              <td style={tdStyle}>{row.displayName}</td>
                              <td style={tdStyle}>{row.machineCount}/{row.totalMachines}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : <div style={{ padding: 20, color: "#999", textAlign: "center" }}>请点击上方品相查看可用机台</div>}
                  </div>
                ),
              },
              {
                key: "速冻", label: "速冻",
                children: (
                  <div style={{ flex: 1, minHeight: 0, overflow: "auto", fontSize: 12 }}>
                    {freezingMachineGanttData.length > 0 ? (
                      <table style={{ minWidth: 200, borderCollapse: "collapse" }}>
                        <thead><tr style={{ background: "#fafafa", height: 36 }}>
                          <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>车间</th>
                          <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>机台名称</th>
                        </tr></thead>
                        <tbody>
                          {freezingMachineGanttData.map((row) => (
                            <tr key={row.machineId} style={{ cursor: "pointer", height: ROW_HEIGHT }}>
                              <td style={tdStyle}>{row.workshopName}</td>
                              <td style={tdStyle}>{row.machineName}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : <div style={{ padding: 20, color: "#999", textAlign: "center" }}>请点击上方品相查看可用机台</div>}
                  </div>
                ),
              },
              {
                key: "包装", label: "包装",
                children: (
                  <div style={{ flex: 1, minHeight: 0, overflow: "auto", fontSize: 12 }}>
                    {packagingMachineGanttData.length > 0 ? (
                      <table style={{ minWidth: 200, borderCollapse: "collapse" }}>
                        <thead><tr style={{ background: "#fafafa", height: 36 }}>
                          <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>车间</th>
                          <th style={{ ...thStyle, borderBottom: "2px solid #d9d9d9" }}>机台名称</th>
                        </tr></thead>
                        <tbody>
                          {packagingMachineGanttData.map((row) => (
                            <tr key={row.machineId} style={{ cursor: "pointer", height: ROW_HEIGHT }}>
                              <td style={tdStyle}>{row.workshopName}</td>
                              <td style={tdStyle}>{row.machineName}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : <div style={{ padding: 20, color: "#999", textAlign: "center" }}>请点击上方品相查看可用机台</div>}
                  </div>
                ),
              },
            ]} />
        </div>

        {/* 左右拖拽分隔线 */}
        <div
          onMouseDown={(e) => handleMouseDown(e, "v")}
          style={{ width: 5, cursor: "col-resize", flexShrink: 0, background: "transparent" }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#16a34a"; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; }}
        />
        {/* 下右：工具栏 + 机台甘特图 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* 工具栏（与左侧 Tabs 标签栏等高） */}
          <div style={{ display: "flex", alignItems: "center", padding: "0 8px", height: 36,
            background: "#fafafa", borderBottom: "1px solid #e8e8e8", flexShrink: 0, gap: 8 }}>
            <Button size="small" icon={<EditOutlined />}
              disabled={!selectedMachineTask}
              onClick={handleEditMachineTask}>修改</Button>
            <Button size="small" danger icon={<DeleteOutlined />}
              disabled={!selectedMachineTask}
              onClick={handleDeleteMachineTask}>删除</Button>
          </div>
          {/* 甘特图 */}
          <div ref={bottomGanttRef} onScroll={handleBottomGanttScroll}
            style={{ flex: 1, overflow: "auto" }}>
            <table style={{ borderCollapse: "collapse", minWidth: dateShifts.length * CELL_WIDTH, tableLayout: "fixed" }}>
              <thead>
                <tr>
                  {dateShifts.map((ds) => (
                    <th key={`${ds.date}-${ds.shift}`} className="gantt-header"
                      style={{ width: CELL_WIDTH, position: "sticky", top: 0, zIndex: 10 }}>
                      <div>{ds.label.split(" ")[0]}</div>
                      <div style={{ fontSize: 10, color: "#888" }}>{ds.label.split(" ")[1]}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(uiStore.activeProcessTab === "成型" ? machineGanttData :
                  uiStore.activeProcessTab === "速冻" ? freezingMachineGanttData :
                  packagingMachineGanttData).length === 0 ? (
                  <tr><td colSpan={dateShifts.length} style={{ padding: 40, textAlign: "center", color: "#999" }}>
                    {selectedProduct ? "该品相当前工序无可用机台" : "请点击上方品相查看机台排产"}
                  </td></tr>
                ) : (
                  (uiStore.activeProcessTab === "成型" ? machineGanttData :
                   uiStore.activeProcessTab === "速冻" ? freezingMachineGanttData :
                   packagingMachineGanttData).map((row: any, ri: number) => (
                    <tr key={ri}>
                      {row.cells.map((cell: any, ci: number) => (
                        <td key={`${cell.date}-${cell.shift}`}
                          onClick={() => handleMachineCellClick(cell.task)}
                          style={{
                            width: CELL_WIDTH, height: ROW_HEIGHT, cursor: cell.task ? "pointer" : "default",
                            borderRight: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8",
                            background: cell.task
                              ? cell.task === selectedMachineTask ? "#bbf7d0"
                                : (cell.task.status === "待车间确认" || cell.task.status === "车间已确认" || cell.task.status === "最终确认") ? "#dcfce7"
                                : "#fef9c3"
                              : undefined,
                            fontSize: 10, verticalAlign: "middle", textAlign: "center",
                          }}>
                          {cell.task ? (
                            <div style={{ lineHeight: 1.3, wordBreak: "break-all", padding: "0 2px" }}>
                              <div>{cell.task.machineCount}台×{cell.task.productName}</div>
                              <div style={{ fontWeight: 600 }}>+{cell.task.quantity}</div>
                            </div>
                          ) : ri === 0 ? (
                            <div style={{ color: "#bbb", fontSize: 9 }}>
                              {uiStore.activeProcessTab === "成型"
                                ? `可用${cell.available ?? 0}/${cell.total ?? 0}`
                                : `可用${cell.used ?? 0}/${cell.total ?? 0}`}
                            </div>
                          ) : null}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ===== 排产弹窗（右键菜单/编辑已有任务时打开） ===== */}
      <Modal
        title={scheduleEditTask ? "修改排产" : "手动排产"}
        open={scheduleModalOpen}
        onOk={handleSaveSchedule}
        onCancel={() => setScheduleModalOpen(false)}
        width={560}
        footer={[
          <Button key="delete" danger icon={<DeleteOutlined />} onClick={handleDeleteTask}
            style={{ display: scheduleEditTask ? undefined : "none" }}>删除</Button>,
          <Button key="cancel" onClick={() => setScheduleModalOpen(false)}>取消</Button>,
          <Button key="submit" type="primary" onClick={handleSaveSchedule}>
            {scheduleEditTask ? "保存修改" : "生成草稿"}
          </Button>,
        ]}>
        <Form form={scheduleForm} layout="vertical" size="small">
          <Form.Item name="productName" label="产品名"><Input disabled /></Form.Item>
          <Form.Item name="productId" label="产品号" hidden><Input /></Form.Item>
          <Form.Item name="processType" label="工序">
            <Select onChange={handleProcessWorkshopChange}>
              <Option value="成型">成型</Option><Option value="速冻">速冻</Option><Option value="包装">包装</Option>
            </Select>
          </Form.Item>
          <Form.Item name="workshopId" label="车间">
            <Select onChange={handleProcessWorkshopChange}>
              {store.workshops.map((w) => <Option key={w.workshopId} value={w.workshopId}>{w.workshopName}</Option>)}
            </Select>
          </Form.Item>
          <Form.Item name="machineId" label="机台">
            <Select>{availableMachines.map((m) => <Option key={m.id} value={m.id}>{m.name}</Option>)}</Select>
          </Form.Item>
          <Space size="middle">
            <Form.Item name="date" label="日期" rules={[{ required: true }]}><DatePicker /></Form.Item>
            <Form.Item name="shift" label="班次" rules={[{ required: true }]}>
              <Select style={{ width: 100 }}><Option value="白班">白班</Option><Option value="晚班">晚班</Option></Select>
            </Form.Item>
          </Space>
          <Space size="middle">
            <Form.Item name="machineCount" label="开机数" rules={[{ required: true }]}><InputNumber min={1} max={10} /></Form.Item>
            <Form.Item name="quantity" label="排产数量" rules={[{ required: true }]}><InputNumber min={1} style={{ width: 160 }} /></Form.Item>
          </Space>
          <Form.Item name="groupIndex" label="分组索引" hidden><InputNumber /></Form.Item>
        </Form>
      </Modal>

      {/* BOM 弹窗 */}
      <Modal title={selectedProduct ? `${selectedProduct.productName} — BOM结构` : "BOM结构"}
        open={bomModalOpen} onCancel={() => setBomModalOpen(false)}
        footer={null} width={620}>
        {selectedProduct ? (
          <Tree treeData={buildBomTree(selectedProduct.productId)}
            defaultExpandAll showLine={{ showLeafIcon: false }}
            style={{ maxHeight: "60vh", overflow: "auto" }} />
        ) : <div style={{ color: "#999", textAlign: "center", padding: 20 }}>请先选择品相</div>}
      </Modal>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  padding: "4px 6px", fontSize: 11, fontWeight: 600,
  textAlign: "left", borderBottom: "2px solid #e8e8e8", whiteSpace: "nowrap",
};
const tdStyle: React.CSSProperties = {
  padding: "2px 6px", fontSize: 11, borderBottom: "1px solid #f0f0f0", whiteSpace: "nowrap",
};

export default FormingSchedulePage;
