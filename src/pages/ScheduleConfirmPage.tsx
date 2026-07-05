import React, { useMemo, useRef, useCallback, useState } from "react";
import { Button, Select, Modal, Form, InputNumber, Input, Tag, message } from "antd";
import { CheckOutlined, EditOutlined, CheckCircleOutlined, ClearOutlined } from "@ant-design/icons";
import { useMasterDataStore } from "../store/useMasterDataStore";
import { useScheduleStore } from "../store/useScheduleStore";
import { generateDateShifts, getToday } from "../utils/dateShift";
import type { ScheduleTask } from "../types";

const { Option } = Select;
const ROW_HEIGHT = 40;
const CELL_WIDTH = 90;

const ScheduleConfirmPage: React.FC = () => {
  const store = useMasterDataStore();
  const scheduleStore = useScheduleStore();
  const [workshopFilter, setWorkshopFilter] = useState<string | null>(null);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackTask, setFeedbackTask] = useState<ScheduleTask | null>(null);
  const [feedbackForm] = Form.useForm();
  const [role, setRole] = useState<"planner" | "workshop">("planner");
  const [selectedShifts, setSelectedShifts] = useState<Set<string>>(new Set());
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [cancelDate, setCancelDate] = useState<string>("");
  const [cancelShift, setCancelShift] = useState<string>("");
  const [cancelForm] = Form.useForm();

  const dateShifts = useMemo(() => generateDateShifts(getToday()), []);

  const leftListRef = useRef<HTMLDivElement>(null);
  const ganttScrollRef = useRef<HTMLDivElement>(null);
  const syncingRef = useRef(false);

  const [leftWidth, setLeftWidth] = useState(280);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const draggingRef = React.useRef(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const w = e.clientX - rect.left;
      setLeftWidth(Math.min(450, Math.max(200, w)));
    };
    const handleMouseUp = () => {
      draggingRef.current = false;
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

  /* 获取有排产任务的品相 */
  const scheduledProducts = useMemo(() => {
    let tasks = scheduleStore.tasks;
    if (workshopFilter && role === "workshop") {
      tasks = tasks.filter((t) => t.workshopId === workshopFilter);
    }
    const productIds = [...new Set(tasks.map((t) => t.productId))];
    return productIds
      .map((pid) => store.products.find((p) => p.productId === pid))
      .filter(Boolean)
      .map((p) => p!);
  }, [scheduleStore.tasks, store.products, workshopFilter, role]);

  /* 甘特图数据 */
  const confirmGanttData = useMemo(() => {
    let tasks = scheduleStore.tasks;
    if (workshopFilter && role === "workshop") {
      tasks = tasks.filter((t) => t.workshopId === workshopFilter);
    }
    return scheduledProducts.map((product) => {
      const cells = dateShifts.map((ds) => {
        const cellTasks = tasks.filter(
          (t) => t.productId === product.productId && t.date === ds.date && t.shift === ds.shift);
        const formingTask = cellTasks.find((t) => t.processType === "成型") || null;
        return { date: ds.date, shift: ds.shift, task: formingTask };
      });
      return { product, cells };
    });
  }, [scheduledProducts, scheduleStore.tasks, dateShifts, workshopFilter, role]);

  /* 滚动同步（双向 + 防循环） */
  const handleGanttScroll = useCallback(() => {
    if (syncingRef.current) return;
    syncingRef.current = true;
    const gantt = ganttScrollRef.current;
    const left = leftListRef.current;
    if (gantt && left) left.scrollTop = gantt.scrollTop;
    requestAnimationFrame(() => { syncingRef.current = false; });
  }, []);

  const handleLeftListScroll = useCallback(() => {
    if (syncingRef.current) return;
    syncingRef.current = true;
    const left = leftListRef.current;
    const gantt = ganttScrollRef.current;
    if (left && gantt) gantt.scrollTop = left.scrollTop;
    requestAnimationFrame(() => { syncingRef.current = false; });
  }, []);

  /* 颜色逻辑 */
  const getStatusColor = (task: ScheduleTask | null): string => {
    if (!task) return "transparent";
    const isConfirmed = task.status === "待车间确认" || task.status === "车间已确认" || task.status === "最终确认";
    return isConfirmed ? "#dcfce7" : "#fef9c3";
  };

  const getStatusTextColor = (task: ScheduleTask | null): string => {
    if (!task) return "#000";
    if (task.status === "最终确认") return "#166534";
    return "#000";
  };

  /* 操作 */
  const toggleShift = (dsKey: string) => {
    setSelectedShifts((prev) => { const next = new Set(prev); if (next.has(dsKey)) next.delete(dsKey); else next.add(dsKey); return next; });
  };

  const handlePlannerConfirm = () => {
    if (selectedShifts.size === 0) { message.warning("请先点击表头选择要确认的日期班次"); return; }
    const drafts = scheduleStore.tasks.filter((t) =>
      (t.status === "草稿" || t.status === "自动生成草稿") &&
      selectedShifts.has(`${t.date}-${t.shift}`)
    );
    if (drafts.length === 0) { message.warning("选中班次没有可确认的任务"); return; }
    drafts.forEach((t) => scheduleStore.updateTaskStatus(t.taskId, "待车间确认"));
    message.success(`已提交 ${drafts.length} 个任务`);
    setSelectedShifts(new Set());
  };

  const handlePlannerFinalConfirm = (task: ScheduleTask) => {
    if (task.status !== "车间反馈调整") { message.warning("只能对车间反馈调整的任务进行最终确认"); return; }
    scheduleStore.updateTaskStatus(task.taskId, "最终确认");
    message.success("已标记为最终确认");
  };

  const handleWorkshopConfirm = (task: ScheduleTask) => {
    if (task.status !== "待车间确认") { message.warning("只能对待车间确认的任务进行确认"); return; }
    scheduleStore.updateTaskStatus(task.taskId, "车间已确认");
    message.success("已确认可执行");
  };

  const handleOpenFeedback = (task: ScheduleTask) => {
    setFeedbackTask(task);
    feedbackForm.resetFields();
    feedbackForm.setFieldsValue({
      productName: task.productName,
      dateShift: `${task.date} ${task.shift}`,
      originalQty: task.quantity,
      workshopName: task.workshopName,
    });
    setFeedbackModalOpen(true);
  };

  /* ========== 取消确认 ========== */
  const handleOpenCancel = () => {
    cancelForm.resetFields();
    setCancelDate("");
    setCancelShift("");
    setCancelModalOpen(true);
  };

  const handleCancelConfirm = () => {
    if (!cancelDate || !cancelShift) { message.warning("请选择日期和班次"); return; }
    const tasksToCancel = scheduleStore.tasks.filter(
      (t) => t.date === cancelDate && t.shift === cancelShift &&
        (t.status === "待车间确认" || t.status === "车间已确认")
    );
    if (tasksToCancel.length === 0) {
      message.warning("该日期班次没有可取消的确认任务");
      return;
    }
    tasksToCancel.forEach((t) => {
      scheduleStore.updateTaskStatus(t.taskId, t.source === "自动排产" ? "自动生成草稿" : "草稿");
    });
    message.success(`已取消确认 ${tasksToCancel.length} 个任务，恢复为草稿`);
    setCancelModalOpen(false);
  };

  const handleSubmitFeedback = () => {
    feedbackForm.validateFields().then((values: Record<string, unknown>) => {
      if (!feedbackTask) return;
      if ((values.feedbackQty as number) > feedbackTask.quantity) {
        message.error("可完成数量不能大于原计划数量"); return;
      }
      scheduleStore.updateTask(feedbackTask.taskId, {
        feedbackQuantity: values.feedbackQty as number,
        feedbackComment: values.feedbackReason as string,
        status: "车间反馈调整",
      });
      message.success("反馈方案已提交");
      setFeedbackModalOpen(false);
    });
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "8px 12px", overflow: "hidden" }}>
      {/* 顶部工具栏 */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap", flexShrink: 0 }}>
        <span style={{ fontWeight: 600, fontSize: 15, color: "#16a34a", marginRight: 8 }}>排产确认</span>
        <Select value={role} onChange={(v) => { setRole(v); setWorkshopFilter(null); }} style={{ width: 130 }}>
          <Option value="planner">计划员视角</Option>
          <Option value="workshop">车间主任视角</Option>
        </Select>
        {role === "workshop" && (
          <Select placeholder="选择车间" allowClear style={{ width: 150 }} value={workshopFilter} onChange={setWorkshopFilter}>
            {store.workshops.map((w) => <Option key={w.workshopId} value={w.workshopId}>{w.workshopName}</Option>)}
          </Select>
        )}
        {role === "planner" && (
          <>
            <Button type="primary" icon={<CheckOutlined />} onClick={handlePlannerConfirm}>确认</Button>
            <Button icon={<ClearOutlined />} onClick={handleOpenCancel}>取消确认</Button>
          </>
        )}
        <div style={{ marginLeft: "auto", display: "flex", gap: 4, alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "#999" }}>图例：</span>
          <Tag color="gold" style={{ fontSize: 10 }}>未确认</Tag>
          <Tag color="green" style={{ fontSize: 10 }}>已确认</Tag>
        </div>
      </div>

      {/* 左右布局：品相列表 + 甘特图，共享垂直滚动 */}
      <div ref={containerRef} style={{ flex: 1, display: "flex", minHeight: 0, border: "1px solid #e8e8e8", borderRadius: 4, background: "#fff", overflow: "hidden" }}>
        {/* 左侧：品相列表 */}
        <div ref={leftListRef} onScroll={handleLeftListScroll}
          style={{ width: leftWidth, minWidth: leftWidth, overflow: "auto", borderRight: "2px solid #e8e8e8" }}>
          <table style={{ minWidth: 320, borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ position: "sticky", top: 0, zIndex: 2, background: "#fafafa" }}>
                <th style={{ height: 36, borderBottom: "2px solid #d9d9d9", padding: "0 6px", fontWeight: 600, fontSize: 11, textAlign: "left" }}>品相</th>
                <th style={{ height: 36, borderBottom: "2px solid #d9d9d9", padding: "0 6px", fontWeight: 600, fontSize: 11, textAlign: "center", width: 50 }}>库存</th>
                <th style={{ height: 36, borderBottom: "2px solid #d9d9d9", padding: "0 6px", fontWeight: 600, fontSize: 11, textAlign: "center", width: 50 }}>待排</th>
                <th style={{ height: 36, borderBottom: "2px solid #d9d9d9", padding: "0 6px", fontWeight: 600, fontSize: 11, textAlign: "center", width: 50 }}>已排</th>
              </tr>
            </thead>
            <tbody>
              {confirmGanttData.map(({ product }) => {
                const sq = scheduleStore.getScheduledQty(product.productId);
                return (
                <tr key={product.productId} style={{ height: ROW_HEIGHT }}>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #f0f0f0", fontSize: 11 }}>{product.productName}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #f0f0f0", fontSize: 11, textAlign: "center", color: product.stock < product.safetyStock ? "#eab308" : undefined, fontWeight: product.stock < product.safetyStock ? 600 : undefined }}>{product.stock}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #f0f0f0", fontSize: 11, textAlign: "center" }}>{product.pendingQty}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #f0f0f0", fontSize: 11, textAlign: "center", color: sq > 0 ? "#16a34a" : "#999" }}>{sq}</td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 左右拖拽分隔线 */}
        <div
          onMouseDown={(e) => { e.preventDefault(); draggingRef.current = true; document.body.style.cursor = "col-resize"; document.body.style.userSelect = "none"; }}
          style={{ width: 5, cursor: "col-resize", flexShrink: 0, background: "transparent", borderRadius: 3 }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#16a34a"; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; }}
        />

        {/* 右侧：甘特图 */}
        <div ref={ganttScrollRef} onScroll={handleGanttScroll} style={{ flex: 1, overflow: "auto" }}>
          <table style={{ borderCollapse: "collapse", minWidth: dateShifts.length * CELL_WIDTH }}>
            <thead>
              <tr>
                {dateShifts.map((ds) => {
                  const dsKey = `${ds.date}-${ds.shift}`;
                  const sel = selectedShifts.has(dsKey);
                  return (
                  <th key={dsKey} onClick={() => toggleShift(dsKey)}
                    style={{
                      width: CELL_WIDTH, position: "sticky", top: 0, zIndex: 10,
                      height: 36, padding: 4, fontSize: 12, fontWeight: 600, textAlign: "center",
                      borderRight: "1px solid #d9d9d9", borderBottom: "2px solid #d9d9d9",
                      background: sel ? "#bbf7d0" : "#fafafa", cursor: "pointer",
                    }}>
                    <div>{ds.label.split(" ")[0]}</div>
                    <div style={{ fontSize: 10, color: sel ? "#16a34a" : "#888" }}>{ds.label.split(" ")[1]}</div>
                  </th>
                );})}
              </tr>
            </thead>
            <tbody>
              {confirmGanttData.map(({ product, cells }) => (
                <tr key={product.productId} style={{ height: ROW_HEIGHT }}>
                  {cells.map((cell) => {
                    const bg = getStatusColor(cell.task);
                    const txt = getStatusTextColor(cell.task);
                    return (
                      <td key={`${cell.date}-${cell.shift}`}
                        style={{
                          width: CELL_WIDTH, height: ROW_HEIGHT, background: bg, color: txt,
                          borderRight: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8",
                          textAlign: "center", fontSize: 13, fontWeight: 600, cursor: cell.task ? "pointer" : "default",
                          verticalAlign: "middle",
                        }}
                        onClick={() => {
                          if (!cell.task) return;
                          if (role === "planner" && cell.task.status === "车间反馈调整") {
                            handlePlannerFinalConfirm(cell.task);
                          }
                        }}
                        onDoubleClick={() => {
                          if (!cell.task) return;
                          if (role === "workshop" && cell.task.status === "待车间确认") {
                            handleWorkshopConfirm(cell.task);
                          }
                        }}>
                        {cell.task ? (
                          <div>
                            <div style={{ fontSize: 14 }}>+{cell.task.quantity}</div>
                            {role === "workshop" && cell.task.status === "待车间确认" && (
                              <Button size="small" type="link"
                                style={{ fontSize: 10, height: 18, padding: 0 }}
                                icon={<EditOutlined />}
                                onClick={(e) => { e.stopPropagation(); handleOpenFeedback(cell.task!); }}>
                                反馈
                              </Button>
                            )}
                            {role === "planner" && cell.task.status === "车间反馈调整" && (
                              <Button size="small" type="link"
                                style={{ fontSize: 10, height: 18, padding: 0, color: "#16a34a" }}
                                icon={<CheckCircleOutlined />}
                                onClick={(e) => { e.stopPropagation(); handlePlannerFinalConfirm(cell.task!); }}>
                                确认
                              </Button>
                            )}
                            {cell.task.feedbackQuantity != null && (
                              <div style={{ fontSize: 9, color: "#ea580c" }}>反馈: {cell.task.feedbackQuantity}</div>
                            )}
                          </div>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 反馈弹窗 */}
      <Modal title="车间反馈方案" open={feedbackModalOpen} onOk={handleSubmitFeedback}
        onCancel={() => setFeedbackModalOpen(false)} okText="提交反馈">
        <Form form={feedbackForm} layout="vertical" size="small">
          <Form.Item name="productName" label="产品名"><Input disabled /></Form.Item>
          <Form.Item name="dateShift" label="日期班次"><Input disabled /></Form.Item>
          <Form.Item name="workshopName" label="车间"><Input disabled /></Form.Item>
          <Form.Item name="originalQty" label="原计划数量"><InputNumber disabled style={{ width: "100%" }} /></Form.Item>
          <Form.Item name="feedbackQty" label="可完成数量" rules={[{ required: true, message: "请输入可完成数量" }]}>
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="feedbackReason" label="反馈原因" rules={[{ required: true, message: "请输入反馈原因" }]}>
            <Input.TextArea rows={3} placeholder="请输入无法按计划完成的原因" />
          </Form.Item>
        </Form>
      </Modal>

      {/* 取消确认弹窗 */}
      <Modal title="取消确认" open={cancelModalOpen}
        onOk={handleCancelConfirm} onCancel={() => setCancelModalOpen(false)}
        okText="取消确认" okButtonProps={{ danger: true }}>
        <div style={{ marginBottom: 16, color: "#666", fontSize: 13 }}>
          选择要取消确认的日期和班次，该日期班次下所有「待车间确认」和「车间已确认」的任务将恢复为草稿状态。
        </div>
        <Form form={cancelForm} layout="inline" size="middle">
          <Form.Item label="日期">
            <Select placeholder="选择日期" style={{ width: 140 }} value={cancelDate || undefined} onChange={(v) => setCancelDate(v)}>
              {[...new Set(scheduleStore.tasks.map((t) => t.date))].sort().map((d) => (
                <Option key={d} value={d}>{d}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="班次">
            <Select placeholder="选择班次" style={{ width: 100 }} value={cancelShift || undefined} onChange={(v) => setCancelShift(v)}>
              <Option value="白班">白班</Option>
              <Option value="晚班">晚班</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ScheduleConfirmPage;
