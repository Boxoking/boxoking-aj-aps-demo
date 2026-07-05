import { create } from "zustand";

type UIStore = {
  selectedProductId: string | null;
  selectedWorkshopId: string | null;
  activeProcessTab: "成型" | "速冻" | "包装";
  scheduleDateRange: [string, string]; // YYYY-MM-DD

  setSelectedProductId: (id: string | null) => void;
  setSelectedWorkshopId: (id: string | null) => void;
  setActiveProcessTab: (tab: "成型" | "速冻" | "包装") => void;
  setScheduleDateRange: (range: [string, string]) => void;
};

export const useUIStore = create<UIStore>((set) => ({
  selectedProductId: null,
  selectedWorkshopId: null,
  activeProcessTab: "成型",
  scheduleDateRange: ["2026-07-02", "2026-07-06"],

  setSelectedProductId: (id) => set({ selectedProductId: id }),
  setSelectedWorkshopId: (id) => set({ selectedWorkshopId: id }),
  setActiveProcessTab: (tab) => set({ activeProcessTab: tab }),
  setScheduleDateRange: (range) => set({ scheduleDateRange: range }),
}));
