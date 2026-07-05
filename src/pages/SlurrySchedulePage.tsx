import React, { useState, useMemo, useCallback, useRef } from "react";
import { Button, Tag, message } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useSlurryMutexStore } from "../store/useSlurryMutexStore";
import { useScheduleStore } from "../store/useScheduleStore";
import type { SlurryGanttRow, SlurryGanttCell, SlurryTaskStatus, ShiftType } from "../types";
import { generateDateShifts, getToday } from "../utils/dateShift";

const ROW_HEIGHT = 52;
const CELL_WIDTH = 110;

const SlurrySchedulePage: React.FC = () => {
  const store = useSlurryMutexStore();
  const scheduleStore = useScheduleStore();
  const [selectedSlurryId, setSelectedSlurryId] = useState<string | null>(null);
  const [selectedShifts, setSelectedShifts] = useState<Set<string>>(new Set());
  const [leftWidth, setLeftWidth] = useState(340);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const draggingRef = React.useRef(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const w = e.clientX - rect.left;
      setLeftWidth(Math.min(500, Math.max(200, w)));
    };
    const handleMouseUp = () => { draggingRef.current = false; document.body.style.cursor = ""; document.body.style.userSelect = ""; };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => { window.removeEventListener("mousemove", handleMouseMove); window.removeEventListener("mouseup", handleMouseUp); };
  }, []);

  const dateShifts = useMemo(() => generateDateShifts(getToday()), []);

  const leftListRef = useRef<HTMLDivElement>(null);
  const ganttScrollRef = useRef<HTMLDivElement>(null);
  const syncingRef = useRef(false);

  /* ── 浆料甘特图数据（优化：Map索引，只显示有计划浆料） ── */
  const slurryGanttData = useMemo(() => {
    const tasks = scheduleStore.tasks.filter((t) => t.processType === "成型");
    if (tasks.length === 0) return [];

    // 构建 BOM Map: key = "parentId|childId", value = summed usageKg
    const bomMap = new Map<string, number>();
    store.bomData.forEach((b) => {
      if (b.childType !== "浆料") return;
      const key = `${b.parentId}|${b.childId}`;
      bomMap.set(key, (bomMap.get(key) || 0) + b.usageKg);
    });

    // 构建 提前期 Map: key = "parentId|childSlurryId"
    const ltMap = new Map<string, { leadShifts: number; leadRatio: number }>();
    store.leadTimes.forEach((lt) => {
      ltMap.set(`${lt.parentId}|${lt.childSlurryId}`, { leadShifts: lt.leadShifts, leadRatio: lt.leadRatio });
    });

    // 构建 dateShift -> index
    const dsIndex = new Map<string, number>();
    dateShifts.forEach((ds, i) => dsIndex.set(`${ds.date}-${ds.shift}`, i));

    // 收集有排产任务的浆料ID
    const activeSlurryIds = new Set<string>();
    tasks.forEach((task) => {
      store.bomData.forEach((b) => {
        if (b.parentId === task.productId && b.childType === "浆料") {
          activeSlurryIds.add(b.childId);
        }
      });
    });

    return store.slurryBases
      .filter((base) => activeSlurryIds.has(base.productId))
      .map((base) => {
        const cells: SlurryGanttCell[] = dateShifts.map((ds) => ({
          date: ds.date, shift: ds.shift, produceBatches: 0, consumeBatches: 0, status: "无任务",
        }));

        tasks.forEach((task) => {
          const taskIdx = dsIndex.get(`${task.date}-${task.shift}`);
          if (taskIdx == null) return;

          const usageKg = bomMap.get(`${task.productId}|${base.productId}`);
          if (!usageKg) return;

          const demandKg = task.quantity * usageKg;
          const demandBatches = demandKg / base.batchSize;
          const lt = ltMap.get(`${task.productId}|${base.productId}`);

          if (lt && lt.leadShifts > 0) {
            const shifted = demandBatches * lt.leadRatio;
            const targetIdx = Math.max(0, Math.min(taskIdx - lt.leadShifts, dateShifts.length - 1));
            cells[targetIdx].produceBatches += shifted;
            const remaining = demandBatches - shifted;
            if (remaining > 0) cells[taskIdx].produceBatches += remaining;
            cells[taskIdx].consumeBatches += demandBatches;
          } else {
            cells[taskIdx].produceBatches += demandBatches;
            cells[taskIdx].consumeBatches += demandBatches;
          }
        });

        cells.forEach((cell) => {
          cell.produceBatches = +cell.produceBatches.toFixed(2);
          cell.consumeBatches = +cell.consumeBatches.toFixed(2);
          const st = store.slurryTasks.find(
            (t) => t.slurryId === base.productId && t.date === cell.date && t.shift === cell.shift
          );
          cell.status = st ? (st.status === "已确认" ? "已确认" : "待确认")
            : (cell.produceBatches > 0 || cell.consumeBatches > 0) ? "待确认" : "无任务";
        });

        return { ...base, cells } as SlurryGanttRow;
      });
  }, [store.slurryBases, scheduleStore.tasks, dateShifts, store.bomData, store.leadTimes, store.slurryTasks]);

  /* ── 滚动同步 ── */
  const handleGanttScroll = useCallback(() => {
    if (syncingRef.current) return;
    syncingRef.current = true;
    const gantt = ganttScrollRef.current;
    const left = leftListRef.current;
    if (gantt && left) left.scrollTop = gantt.scrollTop;
    requestAnimationFrame(() => {
      syncingRef.current = false;
    });
  }, []);

  const handleLeftScroll = useCallback(() => {
    if (syncingRef.current) return;
    syncingRef.current = true;
    const left = leftListRef.current;
    const gantt = ganttScrollRef.current;
    if (left && gantt) gantt.scrollTop = left.scrollTop;
    requestAnimationFrame(() => {
      syncingRef.current = false;
    });
  }, []);

  /* ── 切换班次选中 ── */
  const toggleShift = (dsKey: string) => {
    setSelectedShifts((prev) => {
      const next = new Set(prev);
      if (next.has(dsKey)) next.delete(dsKey); else next.add(dsKey);
      return next;
    });
  };

  /* ── 确认浆料任务（仅选中班次） ── */
  const handleConfirm = () => {
    if (selectedShifts.size === 0) { message.warning("请先点击表头选择要确认的日期班次"); return; }
    let count = 0;
    slurryGanttData.forEach((row) => {
      row.cells.forEach((cell) => {
        const key = `${cell.date}-${cell.shift}`;
        if (selectedShifts.has(key) && cell.status === "待确认") {
          store.setSlurryTaskStatus(row.productId, cell.date, cell.shift, "已确认");
          count++;
        }
      });
    });
    if (count > 0) message.success(`已确认 ${count} 个浆料任务`);
    else message.warning("选中班次没有待确认的浆料任务");
    setSelectedShifts(new Set());
  };

  /* ── 格子背景色 ── */
  const getCellBg = (cell: SlurryGanttCell): string | undefined => {
    if (cell.status === "已确认") return "#dcfce7";
    if (cell.status === "待确认") return "#fef9c3";
    return undefined; /* 无任务 → transparent */
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px",
        overflow: "hidden",
      }}
    >
      {/* ===== 顶部工具栏 ===== */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 8,
          flexShrink: 0,
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 15, color: "#16a34a" }}>
          浆料排产
        </span>
        <Button
          type="primary"
          size="small"
          icon={<CheckOutlined />}
          onClick={handleConfirm}
        >
          确认
        </Button>
      </div>

      {/* ===== 主体：左列表 + 右甘特图 ===== */}
      <div ref={containerRef}
        style={{
          flex: 1,
          display: "flex",
          minHeight: 0,
          border: "1px solid #e8e8e8",
          borderRadius: 4,
          background: "#fff",
        }}
      >
        {/* ── 左侧：浆料基础信息表 ── */}
        <div
          ref={leftListRef}
          onScroll={handleLeftScroll}
          style={{
            width: leftWidth,
            minWidth: leftWidth,
            overflow: "auto",
            borderRight: "2px solid #e8e8e8",
          }}
        >
          <table
            style={{
              minWidth: 530,
              borderCollapse: "collapse",
              fontSize: 12,
              tableLayout: "fixed",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#fafafa",
                  position: "sticky",
                  top: 0,
                  zIndex: 2,
                  height: 36,
                }}
              >
                <th style={{ ...thStyle, width: 120 }}>产品名</th>
                <th style={{ ...thStyle, width: 80 }}>产品号</th>
                <th style={{ ...thStyle, width: 70 }}>单元批量</th>
                <th style={{ ...thStyle, width: 70 }}>制浆车间</th>
                <th style={{ ...thStyle, width: 70 }}>需求车间</th>
                <th style={{ ...thStyle, width: 60 }}>库存</th>
                <th style={{ ...thStyle, width: 60 }}>待做</th>
              </tr>
            </thead>
            <tbody>
              {slurryGanttData.map((row) => (
                <tr
                  key={row.productId}
                  onClick={() => setSelectedSlurryId(row.productId)}
                  style={{
                    cursor: "pointer",
                    background:
                      selectedSlurryId === row.productId
                        ? "#dcfce7"
                        : undefined,
                    height: ROW_HEIGHT,
                  }}
                >
                  <td style={{ ...tdStyle, width: 120, fontWeight: 500 }}>
                    {row.productName}
                  </td>
                  <td style={{ ...tdStyle, width: 80 }}>
                    <span style={{ fontSize: 10, color: "#999" }}>
                      {row.productId}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, width: 70 }}>
                    {row.batchSize}kg/批
                  </td>
                  <td style={{ ...tdStyle, width: 70 }}>
                    {row.makeWorkshop}
                  </td>
                  <td style={{ ...tdStyle, width: 70 }}>
                    {row.demandWorkshop}
                  </td>
                  <td style={{ ...tdStyle, width: 60 }}>
                    {row.stockBatches.toFixed(1)}
                  </td>
                  <td style={{ ...tdStyle, width: 60 }}>
                    {row.pendingBatches.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 左右拖拽分隔线 */}
        <div
          onMouseDown={(e) => { e.preventDefault(); draggingRef.current = true; document.body.style.cursor = "col-resize"; document.body.style.userSelect = "none"; }}
          style={{ width: 5, cursor: "col-resize", flexShrink: 0, background: "transparent", borderRadius: 3 }}
          onMouseEnter={(e) => { (e.target as HTMLDivElement).style.background = "#16a34a"; }}
          onMouseLeave={(e) => { (e.target as HTMLDivElement).style.background = "transparent"; }}
        />

        {/* ── 右侧：甘特图 ── */}
        <div
          ref={ganttScrollRef}
          onScroll={handleGanttScroll}
          style={{ flex: 1, overflow: "auto" }}
        >
          <table
            style={{
              borderCollapse: "collapse",
              minWidth: dateShifts.length * CELL_WIDTH,
              tableLayout: "fixed",
            }}
          >
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
                    }}
                  >
                    <div>{ds.label.split(" ")[0]}</div>
                    <div style={{ fontSize: 10, color: sel ? "#16a34a" : "#888" }}>
                      {ds.label.split(" ")[1]}
                    </div>
                  </th>
                );})}
              </tr>
            </thead>
            <tbody>
              {slurryGanttData.map((row) => (
                <tr key={row.productId} style={{ height: ROW_HEIGHT }}>
                  {row.cells.map((cell) => (
                    <td
                      key={`${cell.date}-${cell.shift}`}
                      style={{
                        width: CELL_WIDTH,
                        height: ROW_HEIGHT,
                        background: getCellBg(cell),
                        borderRight: "1px solid #e8e8e8",
                        borderBottom: "1px solid #e8e8e8",
                        fontSize: 11,
                        verticalAlign: "middle",
                        textAlign: "center",
                        cursor:
                          cell.status === "无任务" ? "default" : "pointer",
                      }}
                      onClick={() => {
                        if (cell.status === "无任务") return;
                        const newStatus: SlurryTaskStatus =
                          cell.status === "已确认" ? "待确认" : "已确认";
                        store.setSlurryTaskStatus(
                          row.productId,
                          cell.date,
                          cell.shift,
                          newStatus,
                        );
                      }}
                    >
                      {(cell.produceBatches > 0 ||
                        cell.consumeBatches > 0) && (
                        <div style={{ lineHeight: 1.3 }}>
                          {cell.produceBatches > 0 && (
                            <div style={{ color: "#16a34a" }}>
                              +{cell.produceBatches.toFixed(1)}批
                            </div>
                          )}
                          {cell.consumeBatches > 0 && (
                            <div style={{ color: "#ea580c" }}>
                              -{cell.consumeBatches.toFixed(1)}批
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* ── 共享样式 ── */
const thStyle: React.CSSProperties = {
  padding: "4px 6px",
  fontSize: 11,
  fontWeight: 600,
  textAlign: "left",
  borderBottom: "2px solid #e8e8e8",
  whiteSpace: "nowrap",
};

const tdStyle: React.CSSProperties = {
  padding: "2px 6px",
  fontSize: 11,
  borderBottom: "1px solid #f0f0f0",
  whiteSpace: "nowrap",
};

export default SlurrySchedulePage;
