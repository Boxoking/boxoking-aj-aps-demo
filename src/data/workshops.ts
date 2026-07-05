import type { Workshop } from "../types";

export const workshops: Workshop[] = [
  { workshopId: "WS01", workshopName: "一车间", type: "综合成型车间" },
  { workshopId: "WS02", workshopName: "二车间", type: "丸类成型车间" },
  { workshopId: "WS03", workshopName: "三车间", type: "调理食品车间" },
  { workshopId: "WS04", workshopName: "四车间", type: "面点车间" },
  { workshopId: "WS05", workshopName: "五车间", type: "包装与补产车间" }
];

export const factory = {
  factoryId: "F001",
  factoryName: "安井华东生产工厂",
};
