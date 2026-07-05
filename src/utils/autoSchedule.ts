import type { ScheduleTask, ProductSKU, FormingSpeed, DateShift } from "../types";
import { useMasterDataStore } from "../store/useMasterDataStore";
import { useScheduleStore } from "../store/useScheduleStore";
import { generateDateShifts, getToday } from "./dateShift";
import { calcFormingCapacity, isContinuousProduction, getUsedMachineCount, getUsedGroupCount } from "./capacity";

let taskIdCounter = 0;

/**
 * 自动排产 — 规则型 Demo
 * 返回生成的排产草稿任务列表
 */
export function runAutoSchedule(startDate?: string, shiftCount?: number): ScheduleTask[] {
  const store = useMasterDataStore.getState();
  const scheduleStore = useScheduleStore.getState();
  const products = store.products.filter((p) => p.status === "启用" && p.pendingQty > 0);
  const allDateShifts = generateDateShifts(startDate || getToday());
  const dateShifts = shiftCount ? allDateShifts.slice(0, shiftCount) : allDateShifts;

  // 1. 排序
  const sorted = [...products].sort((a, b) => {
    // 订单类型优先级：特通 > 出口 > 普通
    const orderPriority = { 特通: 3, 出口: 2, 普通: 1 };
    const pa = orderPriority[a.orderType];
    const pb = orderPriority[b.orderType];
    if (pa !== pb) return pb - pa;

    // 库存低于安全库存优先
    const aLow = a.stock < a.safetyStock ? 1 : 0;
    const bLow = b.stock < b.safetyStock ? 1 : 0;
    if (aLow !== bLow) return bLow - aLow;

    // 交付日期近的优先
    if (a.deliveryDate !== b.deliveryDate) return a.deliveryDate.localeCompare(b.deliveryDate);

    // 待排数量大的优先
    return b.pendingQty - a.pendingQty;
  });

  const newTasks: ScheduleTask[] = [];
  const machineUsage: Record<string, Record<string, Record<string, { used: number; groups: Set<number> }>>> = {};

  // 初始化机器使用情况追踪
  function getMachineUsage(machineId: string, date: string, shift: string) {
    if (!machineUsage[machineId]) machineUsage[machineId] = {};
    if (!machineUsage[machineId][date]) machineUsage[machineId][date] = {};
    if (!machineUsage[machineId][date][shift]) {
      // 从已有任务中获取初始使用情况
      const existingTasks = scheduleStore.tasks.filter(
        (t) => t.machineId === machineId && t.date === date && t.shift === shift && t.processType === "成型"
      );
      const used = existingTasks.reduce((s, t) => s + t.machineCount, 0);
      const groups = new Set(existingTasks.map((t) => t.groupIndex));
      machineUsage[machineId][date][shift] = { used, groups };
    }
    return machineUsage[machineId][date][shift];
  }

  // 初始化
  dateShifts.forEach((ds) => {
    store.formingMachines.forEach((m) => {
      getMachineUsage(m.machineId, ds.date, ds.shift);
    });
  });

  for (const product of sorted) {
    let remaining = product.pendingQty;
    // 减去已有排产任务
    const existingQty = scheduleStore.tasks
      .filter((t) => t.productId === product.productId && t.processType === "成型")
      .reduce((s, t) => s + t.quantity, 0);
    remaining -= existingQty;
    if (remaining <= 0) continue;

    // 找到该品相的成型速度（优先主制车间）
    const speeds = store.formingSpeeds
      .filter((s) => s.productId === product.productId)
      .sort((a, b) => {
        if (a.mainWorkshop === product.mainWorkshopId) return -1;
        if (b.mainWorkshop === product.mainWorkshopId) return 1;
        return 0;
      });

    if (speeds.length === 0) continue;

    for (const speed of speeds) {
      if (remaining <= 0) break;

      const machine = store.formingMachines.find((m) => m.machineId === speed.machineId && m.status === "可用");
      if (!machine) continue;

      for (let di = 0; di < dateShifts.length && remaining > 0; di++) {
        const ds = dateShifts[di];
        const usage = getMachineUsage(machine.machineId, ds.date, ds.shift);

        // 检查还有多少台可用
        const available = machine.quantity - usage.used;
        if (available < speed.minMachineCount) continue;

        // 检查分组是否超限
        if (usage.groups.size >= machine.maxGroups) continue;

        // 决定用多少台
        let useMachines = Math.min(speed.defaultMachineCount, available);
        useMachines = Math.max(useMachines, speed.minMachineCount);
        useMachines = Math.min(useMachines, speed.maxMachineCount);
        if (useMachines > available) continue;

        // 找可用分组
        let groupIdx = 0;
        while (usage.groups.has(groupIdx) && groupIdx < machine.maxGroups) {
          groupIdx++;
        }
        if (groupIdx >= machine.maxGroups) continue;

        // 计算连产
        const continuous = isContinuousProduction(
          product.productId,
          machine.machineId,
          ds.date,
          ds.shift
        );

        // 计算产能
        const capacity = calcFormingCapacity(speed, useMachines, continuous);
        const qty = Math.min(capacity, remaining);

        if (qty <= 0) continue;

        // 创建任务
        const task: ScheduleTask = {
          taskId: `AUTO-${Date.now()}-${taskIdCounter++}`,
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
          machineCount: useMachines,
          groupIndex: groupIdx,
          source: "自动排产",
          status: "自动生成草稿",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        newTasks.push(task);

        // 更新使用追踪
        usage.used += useMachines;
        usage.groups.add(groupIdx);
        remaining -= qty;
      }
    }
  }

  // 为每个成型任务自动生成对应的速冻和包装任务
  const extraTasks: ScheduleTask[] = [];
  for (const task of newTasks) {
    const product = store.products.find(p => p.productId === task.productId);
    // 速冻
    const freezingSpeed = store.freezingSpeeds.find(
      (s) => s.productId === task.productId && s.mainWorkshop === product?.mainWorkshopId
    );
    if (freezingSpeed) {
      const fzMachine = store.freezingMachines.find(
        (m) => m.machineId === freezingSpeed.machineId && m.status === "可用"
      );
      if (fzMachine) {
        extraTasks.push({
          taskId: `AUTO-FZ-${Date.now()}-${taskIdCounter++}`,
          productId: task.productId, productName: task.productName,
          processType: "速冻", workshopId: fzMachine.workshopId, workshopName: fzMachine.workshopName,
          machineId: fzMachine.machineId, machineName: fzMachine.machineName,
          date: task.date, shift: task.shift, quantity: task.quantity, machineCount: 1, groupIndex: 0,
          source: "自动排产", status: "自动生成草稿",
          createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
        });
      }
    }

    // 包装
    const packagingSpeed = store.packagingSpeeds.find(
      (s) => s.productId === task.productId && s.mainWorkshop === product?.mainWorkshopId
    );
    if (packagingSpeed) {
      const pkMachine = store.packagingMachines.find(
        (m) => m.machineId === packagingSpeed.machineId && m.status === "可用"
      );
      if (pkMachine) {
        extraTasks.push({
          taskId: `AUTO-PK-${Date.now()}-${taskIdCounter++}`,
          productId: task.productId, productName: task.productName,
          processType: "包装", workshopId: pkMachine.workshopId, workshopName: pkMachine.workshopName,
          machineId: pkMachine.machineId, machineName: pkMachine.machineName,
          date: task.date, shift: task.shift, quantity: task.quantity, machineCount: 1, groupIndex: 0,
          source: "自动排产", status: "自动生成草稿",
          createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
        });
      }
    }
  }

  return [...newTasks, ...extraTasks];
}
