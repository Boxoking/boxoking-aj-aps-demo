import type { FormingMachine, FreezingMachine, PackagingMachine } from "../types";

export const formingMachines: FormingMachine[] = [
  {
    machineId: "FM-001", machineName: "鱼丸成型机", workshopId: "WS01",
    workshopName: "一车间", quantity: 6, maxGroups: 1, status: "可用"
  },
  {
    machineId: "FM-002", machineName: "鱼丸成型机", workshopId: "WS02",
    workshopName: "二车间", quantity: 5, maxGroups: 3, status: "可用"
  },
  {
    machineId: "FM-003", machineName: "鱼丸成型机", workshopId: "WS05",
    workshopName: "五车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-004", machineName: "鱼豆腐成型机", workshopId: "WS01",
    workshopName: "一车间", quantity: 4, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-005", machineName: "鱼豆腐成型机", workshopId: "WS05",
    workshopName: "五车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-006", machineName: "蟹排成型机", workshopId: "WS01",
    workshopName: "一车间", quantity: 3, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-007", machineName: "蟹排成型机", workshopId: "WS02",
    workshopName: "二车间", quantity: 6, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-008", machineName: "鱼排成型机", workshopId: "WS01",
    workshopName: "一车间", quantity: 3, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-009", machineName: "包心丸成型机", workshopId: "WS01",
    workshopName: "一车间", quantity: 3, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-010", machineName: "包心丸成型机", workshopId: "WS02",
    workshopName: "二车间", quantity: 2, maxGroups: 1, status: "可用"
  },
  {
    machineId: "FM-011", machineName: "包心丸成型机", workshopId: "WS05",
    workshopName: "五车间", quantity: 6, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-012", machineName: "肉丸成型机", workshopId: "WS02",
    workshopName: "二车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-013", machineName: "肉丸成型机", workshopId: "WS05",
    workshopName: "五车间", quantity: 4, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-014", machineName: "贡丸成型机", workshopId: "WS02",
    workshopName: "二车间", quantity: 5, maxGroups: 3, status: "可用"
  },
  {
    machineId: "FM-015", machineName: "贡丸成型机", workshopId: "WS05",
    workshopName: "五车间", quantity: 6, maxGroups: 1, status: "可用"
  },
  {
    machineId: "FM-016", machineName: "虾味球成型机", workshopId: "WS02",
    workshopName: "二车间", quantity: 4, maxGroups: 3, status: "可用"
  },
  {
    machineId: "FM-017", machineName: "虾滑成型线", workshopId: "WS02",
    workshopName: "二车间", quantity: 4, maxGroups: 3, status: "可用"
  },
  {
    machineId: "FM-018", machineName: "虾滑成型线", workshopId: "WS05",
    workshopName: "五车间", quantity: 6, maxGroups: 3, status: "可用"
  },
  {
    machineId: "FM-019", machineName: "鱼籽福袋成型线", workshopId: "WS01",
    workshopName: "一车间", quantity: 5, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-020", machineName: "组合丸成型线", workshopId: "WS02",
    workshopName: "二车间", quantity: 5, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-021", machineName: "组合丸成型线", workshopId: "WS05",
    workshopName: "五车间", quantity: 5, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-022", machineName: "小酥肉成型线", workshopId: "WS03",
    workshopName: "三车间", quantity: 6, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-023", machineName: "小酥肉成型线", workshopId: "WS05",
    workshopName: "五车间", quantity: 5, maxGroups: 3, status: "可用"
  },
  {
    machineId: "FM-024", machineName: "盐酥鸡成型线", workshopId: "WS03",
    workshopName: "三车间", quantity: 5, maxGroups: 1, status: "可用"
  },
  {
    machineId: "FM-025", machineName: "鸡柳成型线", workshopId: "WS03",
    workshopName: "三车间", quantity: 5, maxGroups: 3, status: "可用"
  },
  {
    machineId: "FM-026", machineName: "鸡柳成型线", workshopId: "WS05",
    workshopName: "五车间", quantity: 6, maxGroups: 3, status: "可用"
  },
  {
    machineId: "FM-027", machineName: "烤肠成型线", workshopId: "WS03",
    workshopName: "三车间", quantity: 5, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-028", machineName: "藕盒成型线", workshopId: "WS03",
    workshopName: "三车间", quantity: 4, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-029", machineName: "藕盒成型线", workshopId: "WS05",
    workshopName: "五车间", quantity: 4, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-030", machineName: "茄盒成型线", workshopId: "WS03",
    workshopName: "三车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-031", machineName: "茄盒成型线", workshopId: "WS05",
    workshopName: "五车间", quantity: 5, maxGroups: 3, status: "可用"
  },
  {
    machineId: "FM-032", machineName: "鸡排成型线", workshopId: "WS03",
    workshopName: "三车间", quantity: 3, maxGroups: 1, status: "可用"
  },
  {
    machineId: "FM-033", machineName: "牛排成型线", workshopId: "WS03",
    workshopName: "三车间", quantity: 3, maxGroups: 1, status: "可用"
  },
  {
    machineId: "FM-034", machineName: "培根卷成型线", workshopId: "WS03",
    workshopName: "三车间", quantity: 5, maxGroups: 1, status: "可用"
  },
  {
    machineId: "FM-035", machineName: "调理串成型线", workshopId: "WS03",
    workshopName: "三车间", quantity: 5, maxGroups: 3, status: "可用"
  },
  {
    machineId: "FM-036", machineName: "调理串成型线", workshopId: "WS05",
    workshopName: "五车间", quantity: 4, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-037", machineName: "酥皮卷成型线", workshopId: "WS04",
    workshopName: "四车间", quantity: 6, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-038", machineName: "手抓饼生产线", workshopId: "WS04",
    workshopName: "四车间", quantity: 5, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-039", machineName: "面点成型线", workshopId: "WS04",
    workshopName: "四车间", quantity: 6, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-040", machineName: "面点成型线", workshopId: "WS05",
    workshopName: "五车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-041", machineName: "烧麦成型线", workshopId: "WS04",
    workshopName: "四车间", quantity: 5, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-042", machineName: "馅饼成型线", workshopId: "WS04",
    workshopName: "四车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-043", machineName: "蒸饺成型线", workshopId: "WS04",
    workshopName: "四车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-044", machineName: "汤圆成型线", workshopId: "WS04",
    workshopName: "四车间", quantity: 2, maxGroups: 1, status: "可用"
  },
  {
    machineId: "FM-045", machineName: "馄饨成型线", workshopId: "WS04",
    workshopName: "四车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-046", machineName: "春卷成型线", workshopId: "WS04",
    workshopName: "四车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-047", machineName: "春卷成型线", workshopId: "WS05",
    workshopName: "五车间", quantity: 3, maxGroups: 1, status: "可用"
  },
  {
    machineId: "FM-048", machineName: "芝士丸成型机", workshopId: "WS02",
    workshopName: "二车间", quantity: 3, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-049", machineName: "芝士丸成型机", workshopId: "WS05",
    workshopName: "五车间", quantity: 4, maxGroups: 3, status: "可用"
  },
  {
    machineId: "FM-050", machineName: "龙虾球成型机", workshopId: "WS01",
    workshopName: "一车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-051", machineName: "龙虾球成型机", workshopId: "WS02",
    workshopName: "二车间", quantity: 5, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-052", machineName: "鳕鱼排成型机", workshopId: "WS01",
    workshopName: "一车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-053", machineName: "海胆包成型线", workshopId: "WS01",
    workshopName: "一车间", quantity: 3, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-054", machineName: "海胆包成型线", workshopId: "WS02",
    workshopName: "二车间", quantity: 4, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-055", machineName: "玉米肠成型线", workshopId: "WS03",
    workshopName: "三车间", quantity: 5, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-056", machineName: "蔬菜丸成型机", workshopId: "WS02",
    workshopName: "二车间", quantity: 5, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-057", machineName: "蔬菜丸成型机", workshopId: "WS05",
    workshopName: "五车间", quantity: 6, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-058", machineName: "米汉堡成型线", workshopId: "WS04",
    workshopName: "四车间", quantity: 3, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-059", machineName: "年糕成型线", workshopId: "WS04",
    workshopName: "四车间", quantity: 2, maxGroups: 2, status: "可用"
  },
  {
    machineId: "FM-060", machineName: "年糕成型线", workshopId: "WS05",
    workshopName: "五车间", quantity: 2, maxGroups: 2, status: "可用"
  }
];

export const freezingMachines: FreezingMachine[] = [
  {
    machineId: "FZ-001", machineName: "螺旋速冻线A", workshopId: "WS01",
    workshopName: "一车间", quantity: 2, status: "可用"
  },
  {
    machineId: "FZ-002", machineName: "螺旋速冻线B", workshopId: "WS02",
    workshopName: "二车间", quantity: 3, status: "可用"
  },
  {
    machineId: "FZ-003", machineName: "隧道速冻线A", workshopId: "WS03",
    workshopName: "三车间", quantity: 4, status: "可用"
  },
  {
    machineId: "FZ-004", machineName: "隧道速冻线B", workshopId: "WS04",
    workshopName: "四车间", quantity: 4, status: "可用"
  },
  {
    machineId: "FZ-005", machineName: "网带速冻线A", workshopId: "WS05",
    workshopName: "五车间", quantity: 2, status: "可用"
  },
  {
    machineId: "FZ-006", machineName: "网带速冻线B", workshopId: "WS01",
    workshopName: "一车间", quantity: 1, status: "可用"
  },
  {
    machineId: "FZ-007", machineName: "流态化速冻线", workshopId: "WS02",
    workshopName: "二车间", quantity: 3, status: "可用"
  },
  {
    machineId: "FZ-008", machineName: "平板速冻线", workshopId: "WS03",
    workshopName: "三车间", quantity: 3, status: "可用"
  },
  {
    machineId: "FZ-009", machineName: "低温速冻线", workshopId: "WS04",
    workshopName: "四车间", quantity: 4, status: "可用"
  },
  {
    machineId: "FZ-010", machineName: "综合速冻线", workshopId: "WS05",
    workshopName: "五车间", quantity: 2, status: "可用"
  },
  {
    machineId: "FZ-011", machineName: "调理品速冻线", workshopId: "WS03",
    workshopName: "三车间", quantity: 3, status: "可用"
  },
  {
    machineId: "FZ-012", machineName: "鱼糜品速冻线", workshopId: "WS01",
    workshopName: "一车间", quantity: 2, status: "可用"
  },
  {
    machineId: "FZ-013", machineName: "面点速冻线", workshopId: "WS04",
    workshopName: "四车间", quantity: 4, status: "可用"
  },
  {
    machineId: "FZ-014", machineName: "丸类速冻线", workshopId: "WS02",
    workshopName: "二车间", quantity: 2, status: "可用"
  },
  {
    machineId: "FZ-015", machineName: "出口品速冻线", workshopId: "WS05",
    workshopName: "五车间", quantity: 2, status: "可用"
  },
  {
    machineId: "FZ-016", machineName: "特通品速冻线", workshopId: "WS01",
    workshopName: "一车间", quantity: 1, status: "可用"
  },
  {
    machineId: "FZ-017", machineName: "小包装速冻线", workshopId: "WS02",
    workshopName: "二车间", quantity: 1, status: "可用"
  },
  {
    machineId: "FZ-018", machineName: "大包装速冻线", workshopId: "WS03",
    workshopName: "三车间", quantity: 3, status: "可用"
  },
  {
    machineId: "FZ-019", machineName: "补产速冻线", workshopId: "WS05",
    workshopName: "五车间", quantity: 1, status: "可用"
  },
  {
    machineId: "FZ-020", machineName: "备用速冻线", workshopId: "WS05",
    workshopName: "五车间", quantity: 4, status: "可用"
  },
  {
    machineId: "FZ-021", machineName: "高产速冻线", workshopId: "WS01",
    workshopName: "一车间", quantity: 3, status: "可用"
  },
  {
    machineId: "FZ-022", machineName: "低温预冷线", workshopId: "WS02",
    workshopName: "二车间", quantity: 1, status: "可用"
  },
  {
    machineId: "FZ-023", machineName: "单冻速冻线", workshopId: "WS03",
    workshopName: "三车间", quantity: 4, status: "可用"
  },
  {
    machineId: "FZ-024", machineName: "连续速冻线", workshopId: "WS04",
    workshopName: "四车间", quantity: 2, status: "可用"
  },
  {
    machineId: "FZ-025", machineName: "冷却定型线", workshopId: "WS05",
    workshopName: "五车间", quantity: 2, status: "可用"
  }
];

export const packagingMachines: PackagingMachine[] = [
  {
    machineId: "PK-001", machineName: "枕式包装机A", workshopId: "WS01",
    workshopName: "一车间", quantity: 1, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-002", machineName: "枕式包装机B", workshopId: "WS02",
    workshopName: "二车间", quantity: 4, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-003", machineName: "立式包装机A", workshopId: "WS03",
    workshopName: "三车间", quantity: 5, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-004", machineName: "立式包装机B", workshopId: "WS04",
    workshopName: "四车间", quantity: 5, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-005", machineName: "给袋式包装机A", workshopId: "WS05",
    workshopName: "五车间", quantity: 1, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-006", machineName: "给袋式包装机B", workshopId: "WS01",
    workshopName: "一车间", quantity: 1, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-007", machineName: "盒装包装机", workshopId: "WS02",
    workshopName: "二车间", quantity: 2, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-008", machineName: "托盒封膜机", workshopId: "WS03",
    workshopName: "三车间", quantity: 4, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-009", machineName: "真空包装机A", workshopId: "WS04",
    workshopName: "四车间", quantity: 5, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-010", machineName: "真空包装机B", workshopId: "WS05",
    workshopName: "五车间", quantity: 4, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-011", machineName: "称重包装机", workshopId: "WS01",
    workshopName: "一车间", quantity: 3, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-012", machineName: "高速装袋机", workshopId: "WS02",
    workshopName: "二车间", quantity: 1, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-013", machineName: "组合称包装线", workshopId: "WS03",
    workshopName: "三车间", quantity: 1, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-014", machineName: "大袋包装线", workshopId: "WS04",
    workshopName: "四车间", quantity: 4, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-015", machineName: "小袋包装线", workshopId: "WS05",
    workshopName: "五车间", quantity: 2, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-016", machineName: "特通自动包装线", workshopId: "WS01",
    workshopName: "一车间", quantity: 1, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-017", machineName: "出口自动包装线", workshopId: "WS02",
    workshopName: "二车间", quantity: 4, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-018", machineName: "面点包装线", workshopId: "WS04",
    workshopName: "四车间", quantity: 5, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-019", machineName: "丸类包装线", workshopId: "WS02",
    workshopName: "二车间", quantity: 3, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-020", machineName: "调理品包装线", workshopId: "WS03",
    workshopName: "三车间", quantity: 1, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-021", machineName: "鱼糜品包装线", workshopId: "WS01",
    workshopName: "一车间", quantity: 2, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-022", machineName: "手动包装一组", workshopId: "WS05",
    workshopName: "五车间", quantity: 1, manualPackaging: true, status: "可用"
  },
  {
    machineId: "PK-023", machineName: "手动包装二组", workshopId: "WS05",
    workshopName: "五车间", quantity: 1, manualPackaging: true, status: "可用"
  },
  {
    machineId: "PK-024", machineName: "补产包装线", workshopId: "WS05",
    workshopName: "五车间", quantity: 1, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-025", machineName: "贴标装箱线", workshopId: "WS05",
    workshopName: "五车间", quantity: 5, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-026", machineName: "综合包装线A", workshopId: "WS05",
    workshopName: "五车间", quantity: 4, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-027", machineName: "综合包装线B", workshopId: "WS05",
    workshopName: "五车间", quantity: 5, manualPackaging: false, status: "可用"
  },
  {
    machineId: "PK-028", machineName: "周转箱包装线", workshopId: "WS03",
    workshopName: "三车间", quantity: 4, manualPackaging: false, status: "可用"
  }
];
