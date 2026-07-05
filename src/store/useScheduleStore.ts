import { create } from "zustand";
import type { ScheduleTask, TaskStatus, ProcessType } from "../types";
import { initialTasks } from "../data/initialTasks";

type ScheduleStore = {
  tasks: ScheduleTask[];

  setTasks: (tasks: ScheduleTask[]) => void;
  addTask: (task: ScheduleTask) => void;
  updateTask: (taskId: string, updates: Partial<ScheduleTask>) => void;
  deleteTask: (taskId: string) => void;
  updateTaskStatus: (taskId: string, status: TaskStatus) => void;
  clearDrafts: () => void;
  resetTasks: () => void;

  // 获取某品相-日期-班次-工序 的所有任务
  getTasksByProductDateShiftProcess: (
    productId: string,
    date: string,
    shift: string,
    processType: ProcessType
  ) => ScheduleTask[];

  // 获取某品相所有已排数量
  getScheduledQty: (productId: string) => number;
};

let taskCounter = 0;
const generateTaskId = () => {
  taskCounter++;
  return `TASK-${Date.now()}-${taskCounter.toString().padStart(4, "0")}`;
};

export const useScheduleStore = create<ScheduleStore>((set, get) => ({
  tasks: [...initialTasks],

  setTasks: (tasks) => set({ tasks }),

  addTask: (task) => {
    const newTask = { ...task, taskId: task.taskId || generateTaskId() };
    set((s) => ({ tasks: [...s.tasks, newTask] }));
  },

  updateTask: (taskId, updates) =>
    set((s) => ({
      tasks: s.tasks.map((t) =>
        t.taskId === taskId
          ? { ...t, ...updates, updatedAt: new Date().toISOString() }
          : t
      ),
    })),

  deleteTask: (taskId) =>
    set((s) => ({
      tasks: s.tasks.filter((t) => t.taskId !== taskId),
    })),

  updateTaskStatus: (taskId, status) =>
    set((s) => ({
      tasks: s.tasks.map((t) =>
        t.taskId === taskId
          ? { ...t, status, updatedAt: new Date().toISOString() }
          : t
      ),
    })),

  clearDrafts: () =>
    set((s) => ({
      tasks: s.tasks.filter(
        (t) => t.status !== "草稿" && t.status !== "自动生成草稿"
      ),
    })),

  resetTasks: () => set({ tasks: [...initialTasks] }),

  getTasksByProductDateShiftProcess: (
    productId,
    date,
    shift,
    processType
  ) => {
    return get().tasks.filter(
      (t) =>
        t.productId === productId &&
        t.date === date &&
        t.shift === shift &&
        t.processType === processType
    );
  },

  getScheduledQty: (productId) => {
    return get()
      .tasks.filter((t) => t.productId === productId)
      .reduce((sum, t) => sum + t.quantity, 0);
  },
}));
