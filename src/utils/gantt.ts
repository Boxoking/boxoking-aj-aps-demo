import type {
  ProductSKU,
  ScheduleTask,
  GanttCell,
  MachineGanttRow,
  MachineGanttCell,
  DateShift,
  FormingMachine,
  FormingSpeed,
} from "../types";
import { useScheduleStore } from "../store/useScheduleStore";
import { useMasterDataStore } from "../store/useMasterDataStore";
import { getUsedMachineCount, getUsedGroupCount } from "./capacity";

/**
 * 计算品相甘特图单元格数据
 * 库存推算：初始库存 - 已排任务消耗 + 排产产出
 */
export function buildProductGanttCells(
  product: ProductSKU,
  dateShifts: DateShift[]
): GanttCell[] {
  const tasks = useScheduleStore.getState().tasks;
  let runningStock = product.stock;

  return dateShifts.map((ds) => {
    // 找到该品相该日期班次该工序的排产任务
    const cellTasks = tasks.filter(
      (t) =>
        t.productId === product.productId &&
        t.date === ds.date &&
        t.shift === ds.shift
    );

    // 成型产量（仅成型工序增加库存）
    const formingQty = cellTasks
      .filter((t) => t.processType === "成型")
      .reduce((sum, t) => sum + t.quantity, 0);

    // 先消耗再增加：这个班次的排产会增加库存
    runningStock += formingQty;

    // 找到主要的成型任务
    const formingTask = cellTasks.find((t) => t.processType === "成型") || null;

    // 检查冲突
    const conflicting = checkConflict(product.productId, ds.date, ds.shift);

    return {
      productId: product.productId,
      date: ds.date,
      shift: ds.shift,
      stock: runningStock,
      task: formingTask,
      conflicting,
    };
  });
}

/** 检查冲突 */
function checkConflict(
  productId: string,
  date: string,
  shift: "白班" | "晚班"
): boolean {
  const tasks = useScheduleStore.getState().tasks;
  const store = useMasterDataStore.getState();

  const myTasks = tasks.filter(
    (t) =>
      t.productId === productId &&
      t.date === date &&
      t.shift === shift &&
      t.processType === "成型"
  );

  for (const task of myTasks) {
    const machine = store.formingMachines.find(
      (m) => m.machineId === task.machineId
    );
    if (!machine) continue;

    const used = getUsedMachineCount(machine.machineId, date, shift);
    if (used > machine.quantity) return true;

    const usedGroups = getUsedGroupCount(machine.machineId, date, shift);
    if (usedGroups > machine.maxGroups) return true;
  }

  return false;
}

/**
 * 构建机台甘特图行数据
 */
export function buildMachineGanttRows(
  productId: string,
  processType: "成型" | "速冻" | "包装",
  dateShifts: DateShift[]
): MachineGanttRow[] {
  const store = useMasterDataStore.getState();
  const tasks = useScheduleStore.getState().tasks;

  if (processType === "成型") {
    const speeds = store.formingSpeeds.filter(
      (s) => s.productId === productId
    );
    const machineIds = [...new Set(speeds.map((s) => s.machineId))];

    return machineIds.flatMap((mid) => {
      const machine = store.formingMachines.find((m) => m.machineId === mid);
      if (!machine) return [];

      // 查找所有已用分组
      const usedGroupsSet = new Set<number>();
      dateShifts.forEach((ds) => {
        tasks
          .filter(
            (t) =>
              t.machineId === mid &&
              t.date === ds.date &&
              t.shift === ds.shift &&
              t.processType === "成型"
          )
          .forEach((t) => usedGroupsSet.add(t.groupIndex));
      });

      const maxUsedGroup = usedGroupsSet.size > 0 ? Math.max(...usedGroupsSet) : 0;
      const totalGroups = Math.max(maxUsedGroup + 1, 1);
      const effectiveGroups = Math.min(totalGroups + 1, machine.maxGroups + 1);

      return Array.from({ length: effectiveGroups }, (_, gi) => {
        const speed = speeds.find((s) => s.machineId === mid);
        const cells: MachineGanttCell[] = dateShifts.map((ds) => {
          const cellTasks = tasks.filter(
            (t) =>
              t.machineId === mid &&
              t.date === ds.date &&
              t.shift === ds.shift &&
              t.processType === "成型" &&
              t.groupIndex === gi
          );
          const allShiftTasks = tasks.filter(
            (t) =>
              t.machineId === mid &&
              t.date === ds.date &&
              t.shift === ds.shift &&
              t.processType === "成型"
          );
          const totalUsed = allShiftTasks.reduce(
            (sum, t) => sum + t.machineCount,
            0
          );

          return {
            date: ds.date,
            shift: ds.shift,
            task: cellTasks[0] || null,
            available: machine.quantity - totalUsed,
            total: machine.quantity,
          };
        });

        return {
          machineId: machine.machineId,
          machineName: machine.machineName,
          groupIndex: gi,
          totalGroups: effectiveGroups,
          cells,
        };
      });
    });
  }

  // 速冻 / 包装 简化处理
  return [];
}

/**
 * 获取品相状态标签
 */
export function getProductStatusLabel(
  product: ProductSKU,
  scheduledQty: number
): { text: string; color: string } {
  if (scheduledQty >= product.pendingQty) {
    return { text: "已排满", color: "green" };
  }
  if (product.stock < product.safetyStock) {
    return { text: "库存低", color: "orange" };
  }
  if (scheduledQty > 0) {
    return { text: "待排", color: "blue" };
  }
  return { text: "正常", color: "default" };
}
