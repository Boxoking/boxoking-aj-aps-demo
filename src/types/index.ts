/* ──────────────────────────────────────────────
   安井食品 APS 排产系统 — 类型定义
   ────────────────────────────────────────────── */

export type OrderType = "普通" | "特通" | "出口";
export type ShiftType = "白班" | "晚班";
export type ProcessType = "成型" | "速冻" | "包装";
export type TaskStatus =
  | "草稿"
  | "自动生成草稿"
  | "待车间确认"
  | "车间已确认"
  | "车间反馈调整"
  | "最终确认";
export type MachineStatus = "可用" | "维护" | "停用";
export type ProductStatus = "启用" | "停用";

/* ── 工厂 / 车间 ── */
export type Workshop = {
  workshopId: string;
  workshopName: string;
  type: string;
};

/* ── 品相 ── */
export type ProductSKU = {
  productId: string;
  productName: string;
  category: string;
  orderType: OrderType;
  stock: number;
  safetyStock: number;
  pendingQty: number;
  deliveryDate: string;
  mainWorkshopId: string;
  mainWorkshopName: string;
  formingMachineType: string;
  defaultMachineCount: number;
  minMachineCount: number;
  maxMachineCount: number;
  status: ProductStatus;
};

/* ── 成型机台 ── */
export type FormingMachine = {
  machineId: string;
  machineName: string;
  workshopId: string;
  workshopName: string;
  quantity: number;
  maxGroups: number;
  status: MachineStatus;
};

/* ── 速冻机台 ── */
export type FreezingMachine = {
  machineId: string;
  machineName: string;
  workshopId: string;
  workshopName: string;
  quantity: number;
  status: MachineStatus;
};

/* ── 包装机台 ── */
export type PackagingMachine = {
  machineId: string;
  machineName: string;
  workshopId: string;
  workshopName: string;
  quantity: number;
  manualPackaging: boolean;
  status: MachineStatus;
};

/* ── 成型速度关联 ── */
export type FormingSpeed = {
  id: string;
  productId: string;
  productName: string;
  machineId: string;
  machineName: string;
  singleCapacity: number; // 单班单机产能
  defaultMachineCount: number;
  maxMachineCount: number;
  minMachineCount: number;
  bonusPerMachine: number; // 单机连产增产
  mainWorkshop: string;
};

/* ── 速冻速度关联 ── */
export type FreezingSpeed = {
  id: string;
  productId: string;
  productName: string;
  machineId: string;
  machineName: string;
  dayCapacity: number;
  nightCapacity: number;
  mainWorkshop: string;
};

/* ── 包装速度关联 ── */
export type PackagingSpeed = {
  id: string;
  productId: string;
  productName: string;
  machineId: string;
  machineName: string;
  dayCapacity: number;
  nightCapacity: number;
  mainWorkshop: string;
};

/* ── 浆料/原料档案 ── */
export type MaterialType = "浆料" | "原料";

export type SlurryMaterial = {
  productId: string;
  productName: string;
  materialType: MaterialType;
  netWeight: number;
  grossWeight: number;
  unit: string;
};

/* ── BOM 结构 ── */
export type BOMItem = {
  parentType: "品相" | "浆料";
  parentId: string;
  parentName: string;
  childType: MaterialType;
  childId: string;
  childName: string;
  usageKg: number;
};

/* ── 提前期设置 ── */
export type LeadTime = {
  parentId: string;
  parentName: string;
  childSlurryId: string;
  childSlurryName: string;
  leadShifts: number;    // 提前班次
  leadRatio: number;     // 提前比例 0-1
};

/* ── 浆料排产基础数据 ── */
export type SlurryScheduleBase = {
  productId: string;
  productName: string;
  batchSize: number;     // 单元批量 kg/批
  makeWorkshop: string;  // 制浆车间
  demandWorkshop: string; // 需求车间
  stockBatches: number;   // 库存批数
  pendingBatches: number; // 待做批数
};

/* ── 浆料排产甘特图数据 ── */
export type SlurryGanttRow = {
  productId: string;
  productName: string;
  batchSize: number;
  makeWorkshop: string;
  demandWorkshop: string;
  stockBatches: number;
  pendingBatches: number;
  cells: SlurryGanttCell[];
};

export type SlurryGanttCell = {
  date: string;
  shift: ShiftType;
  produceBatches: number;  // 生产批数
  consumeBatches: number;  // 消耗批数
  status: SlurryTaskStatus;
};

export type SlurryTaskStatus = "无任务" | "待确认" | "已确认";

/* ── 成型互斥 ── */
export type MutexType = "车间互斥" | "机台互斥";

export type MutexGroup = {
  mutexType: MutexType;
  groupId: string;
  groupName: string;
};

export type MutexGroupItem = {
  groupId: string;
  productId: string;
  productName: string;
};

/* ── 排产任务 ── */
export type ScheduleTask = {
  taskId: string;
  productId: string;
  productName: string;
  processType: ProcessType;
  workshopId: string;
  workshopName: string;
  machineId: string;
  machineName: string;
  date: string; // YYYY-MM-DD
  shift: ShiftType;
  quantity: number;
  machineCount: number;
  groupIndex: number;
  source: "手动排产" | "自动排产";
  status: TaskStatus;
  feedbackQuantity?: number;
  feedbackComment?: string;
  createdAt: string;
  updatedAt: string;
};

/* ── 日期班次 ── */
export type DateShift = {
  date: string; // YYYY-MM-DD
  shift: ShiftType;
  label: string; // e.g. "09/02 白班"
};

/* ── 甘特图单元格数据 ── */
export type GanttCell = {
  productId: string;
  date: string;
  shift: ShiftType;
  stock: number;
  task: ScheduleTask | null;
  conflicting: boolean;
};

/* ── 机台甘特图行 ── */
export type MachineGanttRow = {
  machineId: string;
  machineName: string;
  groupIndex: number;
  totalGroups: number;
  cells: MachineGanttCell[];
};

export type MachineGanttCell = {
  date: string;
  shift: ShiftType;
  task: ScheduleTask | null;
  available: number;
  total: number;
};
