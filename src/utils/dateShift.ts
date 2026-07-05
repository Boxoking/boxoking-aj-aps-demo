import dayjs from "dayjs";
import type { DateShift, ShiftType } from "../types";

/** 生成未来15天的日期班次列表（从startDate开始） */
export function generateDateShifts(startDate: string): DateShift[] {
  const dateShifts: DateShift[] = [];
  for (let i = 0; i < 15; i++) {
    const d = dayjs(startDate).add(i, "day");
    const dateStr = d.format("YYYY-MM-DD");
    const labelPrefix = d.format("MM/DD");
    dateShifts.push({ date: dateStr, shift: "白班", label: `${labelPrefix} 白班` });
    dateShifts.push({ date: dateStr, shift: "晚班", label: `${labelPrefix} 晚班` });
  }
  return dateShifts;
}

/** 格式化日期为 MM/DD */
export function formatDateShort(date: string): string {
  return dayjs(date).format("MM/DD");
}

/** 获取今天的日期字符串 */
export function getToday(): string {
  return dayjs().format("YYYY-MM-DD");
}
