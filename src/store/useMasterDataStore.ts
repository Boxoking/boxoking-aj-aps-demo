import { create } from "zustand";
import type {
  Workshop,
  ProductSKU,
  FormingMachine,
  FreezingMachine,
  PackagingMachine,
  FormingSpeed,
  FreezingSpeed,
  PackagingSpeed,
} from "../types";
import { workshops as initWorkshops } from "../data/workshops";
import { products as initProducts } from "../data/products";
import {
  formingMachines as initFormingMachines,
  freezingMachines as initFreezingMachines,
  packagingMachines as initPackagingMachines,
} from "../data/machines";
import {
  formingSpeeds as initFormingSpeeds,
  freezingSpeeds as initFreezingSpeeds,
  packagingSpeeds as initPackagingSpeeds,
} from "../data/speeds";

type MasterDataStore = {
  workshops: Workshop[];
  products: ProductSKU[];
  formingMachines: FormingMachine[];
  freezingMachines: FreezingMachine[];
  packagingMachines: PackagingMachine[];
  formingSpeeds: FormingSpeed[];
  freezingSpeeds: FreezingSpeed[];
  packagingSpeeds: PackagingSpeed[];

  // workshops
  setWorkshops: (ws: Workshop[]) => void;
  // products
  setProducts: (p: ProductSKU[]) => void;
  // forming machines
  setFormingMachines: (fm: FormingMachine[]) => void;
  addFormingMachine: (fm: FormingMachine) => void;
  updateFormingMachine: (id: string, fm: Partial<FormingMachine>) => void;
  deleteFormingMachine: (id: string) => void;
  // forming speeds
  setFormingSpeeds: (fs: FormingSpeed[]) => void;
  addFormingSpeed: (fs: FormingSpeed) => void;
  updateFormingSpeed: (id: string, fs: Partial<FormingSpeed>) => void;
  deleteFormingSpeed: (id: string) => void;
  // freezing machines
  addFreezingMachine: (fm: FreezingMachine) => void;
  updateFreezingMachine: (id: string, fm: Partial<FreezingMachine>) => void;
  deleteFreezingMachine: (id: string) => void;
  // freezing speeds
  addFreezingSpeed: (fs: FreezingSpeed) => void;
  updateFreezingSpeed: (id: string, fs: Partial<FreezingSpeed>) => void;
  deleteFreezingSpeed: (id: string) => void;
  // packaging machines
  addPackagingMachine: (pm: PackagingMachine) => void;
  updatePackagingMachine: (id: string, pm: Partial<PackagingMachine>) => void;
  deletePackagingMachine: (id: string) => void;
  // packaging speeds
  addPackagingSpeed: (ps: PackagingSpeed) => void;
  updatePackagingSpeed: (id: string, ps: Partial<PackagingSpeed>) => void;
  deletePackagingSpeed: (id: string) => void;

  resetMasterData: () => void;
};

export const useMasterDataStore = create<MasterDataStore>((set) => ({
  workshops: initWorkshops,
  products: initProducts,
  formingMachines: initFormingMachines,
  freezingMachines: initFreezingMachines,
  packagingMachines: initPackagingMachines,
  formingSpeeds: initFormingSpeeds,
  freezingSpeeds: initFreezingSpeeds,
  packagingSpeeds: initPackagingSpeeds,

  setWorkshops: (ws) => set({ workshops: ws }),
  setProducts: (p) => set({ products: p }),

  setFormingMachines: (fm) => set({ formingMachines: fm }),
  addFormingMachine: (fm) =>
    set((s) => ({ formingMachines: [...s.formingMachines, fm] })),
  updateFormingMachine: (id, fm) =>
    set((s) => ({
      formingMachines: s.formingMachines.map((m) =>
        m.machineId === id ? { ...m, ...fm } : m
      ),
    })),
  deleteFormingMachine: (id) =>
    set((s) => ({
      formingMachines: s.formingMachines.filter((m) => m.machineId !== id),
    })),

  setFormingSpeeds: (fs) => set({ formingSpeeds: fs }),
  addFormingSpeed: (fs) =>
    set((s) => ({ formingSpeeds: [...s.formingSpeeds, fs] })),
  updateFormingSpeed: (id, fs) =>
    set((s) => ({
      formingSpeeds: s.formingSpeeds.map((sp) =>
        sp.id === id ? { ...sp, ...fs } : sp
      ),
    })),
  deleteFormingSpeed: (id) =>
    set((s) => ({
      formingSpeeds: s.formingSpeeds.filter((sp) => sp.id !== id),
    })),

  addFreezingMachine: (fm) =>
    set((s) => ({ freezingMachines: [...s.freezingMachines, fm] })),
  updateFreezingMachine: (id, fm) =>
    set((s) => ({
      freezingMachines: s.freezingMachines.map((m) =>
        m.machineId === id ? { ...m, ...fm } : m
      ),
    })),
  deleteFreezingMachine: (id) =>
    set((s) => ({
      freezingMachines: s.freezingMachines.filter((m) => m.machineId !== id),
    })),

  addFreezingSpeed: (fs) =>
    set((s) => ({ freezingSpeeds: [...s.freezingSpeeds, fs] })),
  updateFreezingSpeed: (id, fs) =>
    set((s) => ({
      freezingSpeeds: s.freezingSpeeds.map((sp) =>
        sp.id === id ? { ...sp, ...fs } : sp
      ),
    })),
  deleteFreezingSpeed: (id) =>
    set((s) => ({
      freezingSpeeds: s.freezingSpeeds.filter((sp) => sp.id !== id),
    })),

  addPackagingMachine: (pm) =>
    set((s) => ({ packagingMachines: [...s.packagingMachines, pm] })),
  updatePackagingMachine: (id, pm) =>
    set((s) => ({
      packagingMachines: s.packagingMachines.map((m) =>
        m.machineId === id ? { ...m, ...pm } : m
      ),
    })),
  deletePackagingMachine: (id) =>
    set((s) => ({
      packagingMachines: s.packagingMachines.filter((m) => m.machineId !== id),
    })),

  addPackagingSpeed: (ps) =>
    set((s) => ({ packagingSpeeds: [...s.packagingSpeeds, ps] })),
  updatePackagingSpeed: (id, ps) =>
    set((s) => ({
      packagingSpeeds: s.packagingSpeeds.map((sp) =>
        sp.id === id ? { ...sp, ...ps } : sp
      ),
    })),
  deletePackagingSpeed: (id) =>
    set((s) => ({
      packagingSpeeds: s.packagingSpeeds.filter((sp) => sp.id !== id),
    })),

  resetMasterData: () =>
    set({
      workshops: initWorkshops,
      products: initProducts,
      formingMachines: initFormingMachines,
      freezingMachines: initFreezingMachines,
      packagingMachines: initPackagingMachines,
      formingSpeeds: initFormingSpeeds,
      freezingSpeeds: initFreezingSpeeds,
      packagingSpeeds: initPackagingSpeeds,
    }),
}));
