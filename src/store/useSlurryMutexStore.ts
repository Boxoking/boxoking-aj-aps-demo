import { create } from "zustand";
import type { SlurryMaterial, BOMItem, LeadTime, SlurryScheduleBase, MutexGroup, MutexGroupItem, SlurryTaskStatus } from "../types";
import { slurryMaterials as initMaterials } from "../data/slurryMaterials";
import { bomData as initBom } from "../data/bomData";
import { leadTimeData as initLeadTime } from "../data/leadTimeData";
import { slurryScheduleBase as initSlurryBase } from "../data/slurryScheduleBase";
import { mutexGroups as initMutexGroups } from "../data/mutexData";
import { mutexGroupItems as initMutexItems } from "../data/mutexData";

type SlurryTaskState = {
  slurryId: string;
  date: string;
  shift: string;
  status: SlurryTaskStatus;
};

type SlurryMutexStore = {
  materials: SlurryMaterial[];
  bomData: BOMItem[];
  leadTimes: LeadTime[];
  slurryBases: SlurryScheduleBase[];
  mutexGroups: MutexGroup[];
  mutexItems: MutexGroupItem[];
  slurryTasks: SlurryTaskState[];

  // Mutex
  addMutexGroup: (g: MutexGroup) => void;
  updateMutexGroup: (id: string, g: Partial<MutexGroup>) => void;
  deleteMutexGroup: (id: string) => void;
  addMutexItem: (item: MutexGroupItem) => void;
  updateMutexItem: (idx: number, item: Partial<MutexGroupItem>) => void;
  deleteMutexItem: (idx: number) => void;

  // Slurry tasks
  setSlurryTaskStatus: (slurryId: string, date: string, shift: string, status: SlurryTaskStatus) => void;
  getSlurryTasksByDateShift: (date: string, shift: string) => SlurryTaskState[];

  resetAll: () => void;
};

export const useSlurryMutexStore = create<SlurryMutexStore>((set, get) => ({
  materials: initMaterials,
  bomData: initBom,
  leadTimes: initLeadTime,
  slurryBases: initSlurryBase,
  mutexGroups: initMutexGroups,
  mutexItems: initMutexItems,
  slurryTasks: [],

  addMutexGroup: (g) => set((s) => ({ mutexGroups: [...s.mutexGroups, g] })),
  updateMutexGroup: (id, g) => set((s) => ({
    mutexGroups: s.mutexGroups.map((m) => m.groupId === id ? { ...m, ...g } : m),
  })),
  deleteMutexGroup: (id) => set((s) => ({
    mutexGroups: s.mutexGroups.filter((m) => m.groupId !== id),
    mutexItems: s.mutexItems.filter((m) => m.groupId !== id),
  })),

  addMutexItem: (item) => set((s) => ({ mutexItems: [...s.mutexItems, item] })),
  updateMutexItem: (idx, item) => set((s) => ({
    mutexItems: s.mutexItems.map((m, i) => i === idx ? { ...m, ...item } : m),
  })),
  deleteMutexItem: (idx) => set((s) => ({
    mutexItems: s.mutexItems.filter((_, i) => i !== idx),
  })),

  setSlurryTaskStatus: (slurryId, date, shift, status) => set((s) => {
    const others = s.slurryTasks.filter(
      (t) => !(t.slurryId === slurryId && t.date === date && t.shift === shift)
    );
    if (status === "无任务") return { slurryTasks: others };
    return { slurryTasks: [...others, { slurryId, date, shift, status }] };
  }),

  getSlurryTasksByDateShift: (date, shift) =>
    get().slurryTasks.filter((t) => t.date === date && t.shift === shift),

  resetAll: () => set({
    materials: initMaterials,
    bomData: initBom,
    leadTimes: initLeadTime,
    slurryBases: initSlurryBase,
    mutexGroups: initMutexGroups,
    mutexItems: initMutexItems,
    slurryTasks: [],
  }),
}));
