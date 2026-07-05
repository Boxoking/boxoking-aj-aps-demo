import type { FormingSpeed, ScheduleTask } from "../types";
import { useScheduleStore } from "../store/useScheduleStore";

/**
 * 计算成型班次产能
 * 成型班次产能 = 单机产能 × 开机数 + 单机增产 × 连产标识 × 开机数
 * 连产：同一品相、同一机台、连续两个班次生产时，连产标识 = 1
 */
export function calcFormingCapacity(
  speed: FormingSpeed,
  machineCount: number,
  isContinuous: boolean
): number {
  const bonus = isContinuous ? speed.bonusPerMachine : 0;
  return speed.singleCapacity * machineCount + bonus * machineCount;
}

/**
 * 判断某品相某机台某班次是否为连产
 * 规则：前一个班次同一品相同一机台有排产任务
 */
export function isContinuousProduction(
  productId: string,
  machineId: string,
  date: string,
  shift: "白班" | "晚班"
): boolean {
  const tasks = useScheduleStore.getState().tasks;
  // 找到前一个班次
  let prevDate = date;
  let prevShift: "白班" | "晚班";
  if (shift === "晚班") {
    prevShift = "白班";
  } else {
    // 前一天晚班
    const d = new Date(date);
    d.setDate(d.getDate() - 1);
    prevDate = d.toISOString().slice(0, 10);
    prevShift = "晚班";
  }

  return tasks.some(
    (t) =>
      t.productId === productId &&
      t.machineId === machineId &&
      t.date === prevDate &&
      t.shift === prevShift &&
      t.processType === "成型"
  );
}

/**
 * 获取某机台在某日期班次的已占用台数
 */
export function getUsedMachineCount(
  machineId: string,
  date: string,
  shift: "白班" | "晚班"
): number {
  const tasks = useScheduleStore.getState().tasks;
  return tasks
    .filter(
      (t) =>
        t.machineId === machineId &&
        t.date === date &&
        t.shift === shift &&
        t.processType === "成型"
    )
    .reduce((sum, t) => sum + t.machineCount, 0);
}

/**
 * 获取某机台在某日期班次的已占用分组数
 */
export function getUsedGroupCount(
  machineId: string,
  date: string,
  shift: "白班" | "晚班"
): number {
  const tasks = useScheduleStore.getState().tasks;
  const groups = new Set(
    tasks
      .filter(
        (t) =>
          t.machineId === machineId &&
          t.date === date &&
          t.shift === shift &&
          t.processType === "成型"
      )
      .map((t) => t.groupIndex)
  );
  return groups.size;
}
