import type { FormingSpeed, FreezingSpeed, PackagingSpeed } from "../types";

/* ── 成型速度关联 ── */
export const formingSpeeds: FormingSpeed[] = [
  {
    id: "FS-0001", productId: "AJ-SKU-001", productName: "1kg×10袋装脆骨丸黑椒味", machineId: "FM-013",
    machineName: "肉丸成型机", singleCapacity: 741, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 60,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0002", productId: "AJ-SKU-002", productName: "200g×30袋装牛肉丸原味", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 741, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 133,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0003", productId: "AJ-SKU-003", productName: "1kg×10袋装鲜虾滑餐饮装", machineId: "FM-017",
    machineName: "虾滑成型线", singleCapacity: 752, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 176,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0004", productId: "AJ-SKU-004", productName: "1kg×10袋装贡丸轻享装", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 1063, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 91,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0005", productId: "AJ-SKU-004", productName: "1kg×10袋装贡丸轻享装", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 838, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 76,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0006", productId: "AJ-SKU-005", productName: "2.5kg×4袋装茄盒出口版", machineId: "FM-036",
    machineName: "调理串成型线", singleCapacity: 932, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 165,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0007", productId: "AJ-SKU-006", productName: "400g×20袋装墨鱼丸餐饮装", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 1203, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 168,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0008", productId: "AJ-SKU-007", productName: "200g×30袋装牛排", machineId: "FM-034",
    machineName: "培根卷成型线", singleCapacity: 744, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 166,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0009", productId: "AJ-SKU-008", productName: "400g×20袋装鱼肉丸香辣味", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 713, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 162,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0010", productId: "AJ-SKU-009", productName: "5kg×2袋装包心鱼丸香辣味", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 1196, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 152,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0011", productId: "AJ-SKU-009", productName: "5kg×2袋装包心鱼丸香辣味", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 1092, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 125,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0012", productId: "AJ-SKU-010", productName: "20片×10袋装烧麦餐饮装", machineId: "FM-060",
    machineName: "年糕成型线", singleCapacity: 1135, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 43,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0013", productId: "AJ-SKU-011", productName: "300g×30袋装香辣虾滑家庭装", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 789, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 99,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0014", productId: "AJ-SKU-012", productName: "500g×20袋装鱼豆腐家庭装", machineId: "FM-008",
    machineName: "鱼排成型机", singleCapacity: 867, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 58,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0015", productId: "AJ-SKU-013", productName: "1kg×10袋装海鲜组合包藤椒味", machineId: "FM-054",
    machineName: "海胆包成型线", singleCapacity: 606, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 141,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0016", productId: "AJ-SKU-013", productName: "1kg×10袋装海鲜组合包藤椒味", machineId: "FM-053",
    machineName: "海胆包成型线", singleCapacity: 567, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 118,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0017", productId: "AJ-SKU-014", productName: "200g×30袋装火山石烤肠香辣味", machineId: "FM-028",
    machineName: "藕盒成型线", singleCapacity: 453, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 42,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0018", productId: "AJ-SKU-014", productName: "200g×30袋装火山石烤肠香辣味", machineId: "FM-029",
    machineName: "藕盒成型线", singleCapacity: 910, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 132,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0019", productId: "AJ-SKU-015", productName: "2.5kg×4袋装小酥肉香辣味", machineId: "FM-030",
    machineName: "茄盒成型线", singleCapacity: 510, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 107,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0020", productId: "AJ-SKU-015", productName: "2.5kg×4袋装小酥肉香辣味", machineId: "FM-031",
    machineName: "茄盒成型线", singleCapacity: 637, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 64,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0021", productId: "AJ-SKU-016", productName: "2.5kg×4袋装丸类组合包黑椒味", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 776, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 64,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0022", productId: "AJ-SKU-017", productName: "500g×20袋装鱼肉丸藤椒味", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 1043, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 65,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0023", productId: "AJ-SKU-018", productName: "350g×20袋装玉米肠", machineId: "FM-030",
    machineName: "茄盒成型线", singleCapacity: 745, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 148,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0024", productId: "AJ-SKU-018", productName: "350g×20袋装玉米肠", machineId: "FM-031",
    machineName: "茄盒成型线", singleCapacity: 545, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 176,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0025", productId: "AJ-SKU-019", productName: "5kg×2袋装墨鱼丸香辣味", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 1072, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 99,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0026", productId: "AJ-SKU-020", productName: "800g×12袋装丸类组合包盒马定制", machineId: "FM-054",
    machineName: "海胆包成型线", singleCapacity: 640, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 116,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0027", productId: "AJ-SKU-021", productName: "1kg×10袋装芝士肉丸藤椒味", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 824, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 148,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0028", productId: "AJ-SKU-021", productName: "1kg×10袋装芝士肉丸藤椒味", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 865, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 87,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0029", productId: "AJ-SKU-022", productName: "1kg×10袋装龙虾球经典款", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 1045, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 138,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0030", productId: "AJ-SKU-022", productName: "1kg×10袋装龙虾球经典款", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 788, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 116,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0031", productId: "AJ-SKU-023", productName: "350g×20袋装小酥肉盒马定制", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 770, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 71,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0032", productId: "AJ-SKU-024", productName: "500g×20袋装米汉堡餐饮装", machineId: "FM-042",
    machineName: "馅饼成型线", singleCapacity: 1260, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 169,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0033", productId: "AJ-SKU-025", productName: "240g×20袋装鱼竹轮香辣味", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 870, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 83,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0034", productId: "AJ-SKU-026", productName: "2.5kg×4袋装鲜虾滑家庭装", machineId: "FM-017",
    machineName: "虾滑成型线", singleCapacity: 429, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 114,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0035", productId: "AJ-SKU-027", productName: "500g×20袋装藕盒", machineId: "FM-035",
    machineName: "调理串成型线", singleCapacity: 784, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 155,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0036", productId: "AJ-SKU-028", productName: "1kg×10袋装牛肉馅饼藤椒味", machineId: "FM-042",
    machineName: "馅饼成型线", singleCapacity: 644, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 125,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0037", productId: "AJ-SKU-029", productName: "10片×20袋装葱油饼盒马定制", machineId: "FM-039",
    machineName: "面点成型线", singleCapacity: 636, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 47,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0038", productId: "AJ-SKU-029", productName: "10片×20袋装葱油饼盒马定制", machineId: "FM-045",
    machineName: "馄饨成型线", singleCapacity: 1235, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 172,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0039", productId: "AJ-SKU-030", productName: "2.5kg×4袋装盐酥鸡黑椒味", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 534, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 97,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0040", productId: "AJ-SKU-031", productName: "400g×20袋装包心鱼丸轻享装", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 744, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 150,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0041", productId: "AJ-SKU-032", productName: "2.5kg×4袋装汤圆盒马定制", machineId: "FM-041",
    machineName: "烧麦成型线", singleCapacity: 1276, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 133,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0042", productId: "AJ-SKU-032", productName: "2.5kg×4袋装汤圆盒马定制", machineId: "FM-037",
    machineName: "酥皮卷成型线", singleCapacity: 1281, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 56,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0043", productId: "AJ-SKU-033", productName: "1kg×10袋装手抓饼家庭装", machineId: "FM-047",
    machineName: "春卷成型线", singleCapacity: 1213, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 78,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0044", productId: "AJ-SKU-034", productName: "1kg×10袋装年糕餐饮装", machineId: "FM-058",
    machineName: "米汉堡成型线", singleCapacity: 739, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 87,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0045", productId: "AJ-SKU-035", productName: "400g×20袋装馅饼黑椒味", machineId: "FM-047",
    machineName: "春卷成型线", singleCapacity: 1053, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 115,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0046", productId: "AJ-SKU-036", productName: "200g×30袋装黄金鱼板藤椒味", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 739, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 73,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0047", productId: "AJ-SKU-037", productName: "1kg×10袋装鱼肉丸香辣味", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 1149, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 126,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0048", productId: "AJ-SKU-038", productName: "6kg×1零称鱼丸", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 1027, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 51,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0049", productId: "AJ-SKU-038", productName: "6kg×1零称鱼丸", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 1116, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 101,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0050", productId: "AJ-SKU-039", productName: "6kg×1零称鱼排大客户版", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 839, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 165,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0051", productId: "AJ-SKU-040", productName: "350g×20袋装火山石烤肠原味", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 787, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 140,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0052", productId: "AJ-SKU-040", productName: "350g×20袋装火山石烤肠原味", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 758, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 102,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0053", productId: "AJ-SKU-041", productName: "200g×30袋装鱼竹轮大客户版", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 1320, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 83,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0054", productId: "AJ-SKU-042", productName: "1kg×10袋装鱼肉丸原味", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 677, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 74,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0055", productId: "AJ-SKU-043", productName: "300g×30袋装鱼籽虾滑盒马定制", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 473, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 139,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0056", productId: "AJ-SKU-044", productName: "500g×20袋装黑椒牛肉条出口版", machineId: "FM-022",
    machineName: "小酥肉成型线", singleCapacity: 834, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 120,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0057", productId: "AJ-SKU-044", productName: "500g×20袋装黑椒牛肉条出口版", machineId: "FM-023",
    machineName: "小酥肉成型线", singleCapacity: 674, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 144,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0058", productId: "AJ-SKU-045", productName: "1kg×10袋装蟹籽福袋香辣味", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 715, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 52,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0059", productId: "AJ-SKU-046", productName: "2.5kg×4袋装包心鱼丸轻享装", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 759, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 177,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0060", productId: "AJ-SKU-047", productName: "1kg×10袋装香辣鱼丸家庭装", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 1047, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 60,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0061", productId: "AJ-SKU-047", productName: "1kg×10袋装香辣鱼丸家庭装", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 1228, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 129,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0062", productId: "AJ-SKU-048", productName: "200g×30袋装茄盒盒马定制", machineId: "FM-029",
    machineName: "藕盒成型线", singleCapacity: 700, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 144,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0063", productId: "AJ-SKU-049", productName: "500g×20袋装培根卷出口版", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 655, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 177,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0064", productId: "AJ-SKU-050", productName: "1kg×10袋装火锅组合丸香辣味", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 458, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 155,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0065", productId: "AJ-SKU-051", productName: "2.5kg×4袋装蒸饺出口版", machineId: "FM-058",
    machineName: "米汉堡成型线", singleCapacity: 886, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 57,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0066", productId: "AJ-SKU-052", productName: "2.5kg×4袋装脆骨丸盒马定制", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 691, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 138,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0067", productId: "AJ-SKU-052", productName: "2.5kg×4袋装脆骨丸盒马定制", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 1079, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 77,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0068", productId: "AJ-SKU-053", productName: "1kg×10袋装黑椒牛肉条经典款", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 949, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 151,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0069", productId: "AJ-SKU-054", productName: "150g×40袋装虾滑出口版", machineId: "FM-018",
    machineName: "虾滑成型线", singleCapacity: 374, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 101,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0070", productId: "AJ-SKU-055", productName: "2.5kg×4袋装香辣虾滑黑椒味", machineId: "FM-017",
    machineName: "虾滑成型线", singleCapacity: 356, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 87,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0071", productId: "AJ-SKU-056", productName: "1kg×10袋装鱼豆腐黑椒味", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 709, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 83,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0072", productId: "AJ-SKU-057", productName: "500g×20袋装鳕鱼排", machineId: "FM-008",
    machineName: "鱼排成型机", singleCapacity: 818, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 43,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0073", productId: "AJ-SKU-058", productName: "200g×30袋装鱼丸出口版", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 1282, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 170,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0074", productId: "AJ-SKU-059", productName: "500g×20袋装虾滑家庭装", machineId: "FM-017",
    machineName: "虾滑成型线", singleCapacity: 458, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 161,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0075", productId: "AJ-SKU-060", productName: "5kg×2袋装猪肉丸香辣味", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 907, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 149,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0076", productId: "AJ-SKU-061", productName: "5kg×2袋装奥尔良鸡柳黑椒味", machineId: "FM-055",
    machineName: "玉米肠成型线", singleCapacity: 615, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 179,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0077", productId: "AJ-SKU-062", productName: "500g×20袋装鱼豆腐大客户版", machineId: "FM-052",
    machineName: "鳕鱼排成型机", singleCapacity: 1061, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 46,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0078", productId: "AJ-SKU-062", productName: "500g×20袋装鱼豆腐大客户版", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 1199, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 42,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0079", productId: "AJ-SKU-063", productName: "10片×20袋装猪肉大葱水饺出口版", machineId: "FM-037",
    machineName: "酥皮卷成型线", singleCapacity: 792, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 93,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0080", productId: "AJ-SKU-064", productName: "300g×30袋装香辣虾滑零售装", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 683, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 161,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0081", productId: "AJ-SKU-064", productName: "300g×30袋装香辣虾滑零售装", machineId: "FM-018",
    machineName: "虾滑成型线", singleCapacity: 579, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 91,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0082", productId: "AJ-SKU-065", productName: "200g×30袋装虾味球家庭装", machineId: "FM-052",
    machineName: "鳕鱼排成型机", singleCapacity: 1094, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 93,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0083", productId: "AJ-SKU-066", productName: "200g×30袋装黄金鱼板香辣味", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 1132, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 71,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0084", productId: "AJ-SKU-067", productName: "200g×30袋装牛排出口版", machineId: "FM-031",
    machineName: "茄盒成型线", singleCapacity: 477, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 120,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0085", productId: "AJ-SKU-068", productName: "300g×30袋装丸类组合包出口版", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 457, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 135,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0086", productId: "AJ-SKU-069", productName: "200g×30袋装包心鱼丸餐饮装", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 787, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 117,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0087", productId: "AJ-SKU-070", productName: "2.5kg×4袋装麻辣烫组合家庭装", machineId: "FM-053",
    machineName: "海胆包成型线", singleCapacity: 870, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 47,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0088", productId: "AJ-SKU-071", productName: "200g×30袋装火山石烤肠经典款", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 703, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 146,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0089", productId: "AJ-SKU-072", productName: "120g×50袋装鱼丸家庭装", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 822, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 122,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0090", productId: "AJ-SKU-073", productName: "500g×20袋装小酥肉轻享装", machineId: "FM-029",
    machineName: "藕盒成型线", singleCapacity: 609, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 74,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0091", productId: "AJ-SKU-073", productName: "500g×20袋装小酥肉轻享装", machineId: "FM-028",
    machineName: "藕盒成型线", singleCapacity: 885, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 99,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0092", productId: "AJ-SKU-074", productName: "400g×20袋装牛肉馅饼轻享装", machineId: "FM-041",
    machineName: "烧麦成型线", singleCapacity: 1440, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 65,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0093", productId: "AJ-SKU-075", productName: "5kg×2袋装小酥肉经典款", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 487, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 143,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0094", productId: "AJ-SKU-076", productName: "200g×30袋装脆骨丸", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 1074, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 120,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0095", productId: "AJ-SKU-077", productName: "1kg×10袋装黄金鱼板原味", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 1177, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 54,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0096", productId: "AJ-SKU-077", productName: "1kg×10袋装黄金鱼板原味", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 919, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 75,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0097", productId: "AJ-SKU-078", productName: "2.5kg×4袋装蔬菜丸藤椒味", machineId: "FM-049",
    machineName: "芝士丸成型机", singleCapacity: 751, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 149,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0098", productId: "AJ-SKU-079", productName: "200g×30袋装芝士肉丸大客户版", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 995, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 147,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0099", productId: "AJ-SKU-080", productName: "1kg×10袋装蟹味排黑椒味", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 894, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 168,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0100", productId: "AJ-SKU-081", productName: "10片×20袋装牛肉馅饼香辣味", machineId: "FM-047",
    machineName: "春卷成型线", singleCapacity: 647, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 47,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0101", productId: "AJ-SKU-081", productName: "10片×20袋装牛肉馅饼香辣味", machineId: "FM-046",
    machineName: "春卷成型线", singleCapacity: 1267, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 178,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0102", productId: "AJ-SKU-082", productName: "2.5kg×4袋装蟹籽虾滑出口版", machineId: "FM-017",
    machineName: "虾滑成型线", singleCapacity: 794, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 69,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0103", productId: "AJ-SKU-082", productName: "2.5kg×4袋装蟹籽虾滑出口版", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 575, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 136,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0104", productId: "AJ-SKU-083", productName: "1kg×10袋装鸡排出口版", machineId: "FM-034",
    machineName: "培根卷成型线", singleCapacity: 473, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 94,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0105", productId: "AJ-SKU-084", productName: "20片×10袋装猪肉大葱水饺盒马定制", machineId: "FM-059",
    machineName: "年糕成型线", singleCapacity: 942, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 126,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0106", productId: "AJ-SKU-085", productName: "10片×20袋装馄饨经典款", machineId: "FM-043",
    machineName: "蒸饺成型线", singleCapacity: 1394, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 175,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0107", productId: "AJ-SKU-086", productName: "120g×50袋装鱼竹轮香辣味", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 1198, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 58,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0108", productId: "AJ-SKU-087", productName: "400g×20袋装墨鱼丸出口版", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 1174, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 170,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0109", productId: "AJ-SKU-088", productName: "120g×50袋装蟹棒原味", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 1136, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 174,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0110", productId: "AJ-SKU-088", productName: "120g×50袋装蟹棒原味", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 1353, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 93,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0111", productId: "AJ-SKU-089", productName: "350g×20袋装盐酥鸡盒马定制", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 920, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 119,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0112", productId: "AJ-SKU-089", productName: "350g×20袋装盐酥鸡盒马定制", machineId: "FM-028",
    machineName: "藕盒成型线", singleCapacity: 735, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 108,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0113", productId: "AJ-SKU-090", productName: "2.5kg×4袋装酥皮卷原味", machineId: "FM-038",
    machineName: "手抓饼生产线", singleCapacity: 630, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 60,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0114", productId: "AJ-SKU-091", productName: "500g×20袋装培根卷", machineId: "FM-024",
    machineName: "盐酥鸡成型线", singleCapacity: 598, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 105,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0115", productId: "AJ-SKU-092", productName: "1kg×10袋装酥皮卷家庭装", machineId: "FM-058",
    machineName: "米汉堡成型线", singleCapacity: 1149, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 150,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0116", productId: "AJ-SKU-092", productName: "1kg×10袋装酥皮卷家庭装", machineId: "FM-059",
    machineName: "年糕成型线", singleCapacity: 954, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 97,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0117", productId: "AJ-SKU-093", productName: "400g×20袋装芝士肉丸盒马定制", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 1089, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 79,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0118", productId: "AJ-SKU-094", productName: "1kg×10袋装香辣虾滑大客户版", machineId: "FM-017",
    machineName: "虾滑成型线", singleCapacity: 518, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 67,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0119", productId: "AJ-SKU-095", productName: "240g×20袋装鱼竹轮原味", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 853, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 42,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0120", productId: "AJ-SKU-095", productName: "240g×20袋装鱼竹轮原味", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 1354, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 93,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0121", productId: "AJ-SKU-096", productName: "1kg×10袋装鱼排", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 1353, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 58,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0122", productId: "AJ-SKU-097", productName: "1kg×10袋装牛肉丸经典款", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 806, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 88,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0123", productId: "AJ-SKU-098", productName: "1kg×10袋装芝士鱼丸原味", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 801, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 78,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0124", productId: "AJ-SKU-098", productName: "1kg×10袋装芝士鱼丸原味", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 1121, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 59,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0125", productId: "AJ-SKU-099", productName: "2.5kg×4袋装芝士虾滑大客户版", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 656, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 67,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0126", productId: "AJ-SKU-100", productName: "1kg×10袋装鱼籽福袋香辣味", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 777, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 46,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0127", productId: "AJ-SKU-100", productName: "1kg×10袋装鱼籽福袋香辣味", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 856, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 150,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0128", productId: "AJ-SKU-101", productName: "120g×50袋装鱼丸", machineId: "FM-008",
    machineName: "鱼排成型机", singleCapacity: 750, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 58,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0129", productId: "AJ-SKU-102", productName: "500g×20袋装鲜虾滑轻享装", machineId: "FM-017",
    machineName: "虾滑成型线", singleCapacity: 490, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 113,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0130", productId: "AJ-SKU-103", productName: "200g×30袋装撒尿肉丸经典款", machineId: "FM-013",
    machineName: "肉丸成型机", singleCapacity: 826, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 114,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0131", productId: "AJ-SKU-103", productName: "200g×30袋装撒尿肉丸经典款", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 1148, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 153,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0132", productId: "AJ-SKU-104", productName: "500g×20袋装鱼豆腐升级款", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 1384, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 114,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0133", productId: "AJ-SKU-105", productName: "500g×20袋装贡丸餐饮装", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 851, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 147,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0134", productId: "AJ-SKU-106", productName: "120g×50袋装龙虾球经典款", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 1396, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 68,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0135", productId: "AJ-SKU-107", productName: "1kg×10袋装鸡排家庭装", machineId: "FM-030",
    machineName: "茄盒成型线", singleCapacity: 800, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 108,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0136", productId: "AJ-SKU-108", productName: "6kg×1零称芝士鱼丸大客户版", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 1052, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 54,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0137", productId: "AJ-SKU-109", productName: "200g×30袋装鸡柳大客户版", machineId: "FM-024",
    machineName: "盐酥鸡成型线", singleCapacity: 587, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 143,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0138", productId: "AJ-SKU-110", productName: "800g×12袋装关东煮组合盒马定制", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 684, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 131,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0139", productId: "AJ-SKU-111", productName: "5kg×2袋装鱼肉丸家庭装", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 913, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 108,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0140", productId: "AJ-SKU-112", productName: "200g×30袋装鱼豆腐黑椒味", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 1258, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 61,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0141", productId: "AJ-SKU-113", productName: "500g×20袋装酥皮卷家庭装", machineId: "FM-046",
    machineName: "春卷成型线", singleCapacity: 645, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 70,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0142", productId: "AJ-SKU-113", productName: "500g×20袋装酥皮卷家庭装", machineId: "FM-041",
    machineName: "烧麦成型线", singleCapacity: 1397, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 80,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0143", productId: "AJ-SKU-114", productName: "500g×20袋装小酥肉餐饮装", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 520, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 62,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0144", productId: "AJ-SKU-114", productName: "500g×20袋装小酥肉餐饮装", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 466, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 60,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0145", productId: "AJ-SKU-115", productName: "300g×30袋装麻辣烫组合轻享装", machineId: "FM-021",
    machineName: "组合丸成型线", singleCapacity: 696, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 73,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0146", productId: "AJ-SKU-116", productName: "200g×30袋装香菇贡丸出口版", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 1239, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 151,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0147", productId: "AJ-SKU-116", productName: "200g×30袋装香菇贡丸出口版", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 1183, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 89,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0148", productId: "AJ-SKU-117", productName: "1kg×10袋装蟹味排香辣味", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 703, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 105,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0149", productId: "AJ-SKU-118", productName: "350g×20袋装奥尔良鸡柳", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 536, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 151,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0150", productId: "AJ-SKU-119", productName: "120g×50袋装鱼豆腐家庭装", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 870, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 146,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0151", productId: "AJ-SKU-119", productName: "120g×50袋装鱼豆腐家庭装", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 869, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 174,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0152", productId: "AJ-SKU-120", productName: "350g×20袋装玉米肠盒马定制", machineId: "FM-028",
    machineName: "藕盒成型线", singleCapacity: 677, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 157,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0153", productId: "AJ-SKU-121", productName: "240g×20袋装香辣鱼丸原味", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 1076, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 123,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0154", productId: "AJ-SKU-121", productName: "240g×20袋装香辣鱼丸原味", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 1095, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 178,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0155", productId: "AJ-SKU-122", productName: "800g×12袋装丸类组合包经典款", machineId: "FM-021",
    machineName: "组合丸成型线", singleCapacity: 805, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 98,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0156", productId: "AJ-SKU-123", productName: "400g×20袋装猪肉丸藤椒味", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 650, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 104,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0157", productId: "AJ-SKU-123", productName: "400g×20袋装猪肉丸藤椒味", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 759, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 55,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0158", productId: "AJ-SKU-124", productName: "2.5kg×4袋装牛肉馅饼大客户版", machineId: "FM-039",
    machineName: "面点成型线", singleCapacity: 1051, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 123,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0159", productId: "AJ-SKU-125", productName: "2.5kg×4袋装猪肉丸盒马定制", machineId: "FM-013",
    machineName: "肉丸成型机", singleCapacity: 826, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 136,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0160", productId: "AJ-SKU-126", productName: "200g×30袋装鸡柳藤椒味", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 824, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 115,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0161", productId: "AJ-SKU-127", productName: "1kg×10袋装鱼丸轻享装", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 967, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 99,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0162", productId: "AJ-SKU-127", productName: "1kg×10袋装鱼丸轻享装", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 1190, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 161,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0163", productId: "AJ-SKU-128", productName: "120g×50袋装鱼排出口版", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 982, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 49,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0164", productId: "AJ-SKU-129", productName: "300g×30袋装关东煮组合出口版", machineId: "FM-021",
    machineName: "组合丸成型线", singleCapacity: 844, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 126,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0165", productId: "AJ-SKU-130", productName: "1kg×10袋装龙虾球精选款", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 887, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 101,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0166", productId: "AJ-SKU-131", productName: "500g×20袋装香辣虾滑轻享装", machineId: "FM-017",
    machineName: "虾滑成型线", singleCapacity: 635, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 102,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0167", productId: "AJ-SKU-132", productName: "2.5kg×4袋装锅贴家庭装", machineId: "FM-046",
    machineName: "春卷成型线", singleCapacity: 1074, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 158,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0168", productId: "AJ-SKU-133", productName: "20片×10袋装汤圆原味", machineId: "FM-040",
    machineName: "面点成型线", singleCapacity: 727, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 173,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0169", productId: "AJ-SKU-134", productName: "2.5kg×4袋装鱼籽福袋大客户版", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 630, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 149,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0170", productId: "AJ-SKU-134", productName: "2.5kg×4袋装鱼籽福袋大客户版", machineId: "FM-053",
    machineName: "海胆包成型线", singleCapacity: 703, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 102,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0171", productId: "AJ-SKU-135", productName: "350g×20袋装培根卷家庭装", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 749, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 85,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0172", productId: "AJ-SKU-136", productName: "2.5kg×4袋装香酥鸡块轻享装", machineId: "FM-028",
    machineName: "藕盒成型线", singleCapacity: 691, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 136,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0173", productId: "AJ-SKU-136", productName: "2.5kg×4袋装香酥鸡块轻享装", machineId: "FM-029",
    machineName: "藕盒成型线", singleCapacity: 636, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 134,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0174", productId: "AJ-SKU-137", productName: "300g×30袋装芝士虾滑出口版", machineId: "FM-017",
    machineName: "虾滑成型线", singleCapacity: 461, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 166,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0175", productId: "AJ-SKU-138", productName: "5kg×2袋装包心贡丸", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 660, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 76,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0176", productId: "AJ-SKU-138", productName: "5kg×2袋装包心贡丸", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 1064, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 118,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0177", productId: "AJ-SKU-139", productName: "2.5kg×4袋装墨鱼丸经典款", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 832, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 50,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0178", productId: "AJ-SKU-139", productName: "2.5kg×4袋装墨鱼丸经典款", machineId: "FM-013",
    machineName: "肉丸成型机", singleCapacity: 1051, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 178,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0179", productId: "AJ-SKU-140", productName: "500g×20袋装虾味球黑椒味", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 1163, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 120,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0180", productId: "AJ-SKU-141", productName: "150g×40袋装蟹籽虾滑出口版", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 356, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 180,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0181", productId: "AJ-SKU-141", productName: "150g×40袋装蟹籽虾滑出口版", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 758, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 168,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0182", productId: "AJ-SKU-142", productName: "500g×20袋装葱油饼黑椒味", machineId: "FM-045",
    machineName: "馄饨成型线", singleCapacity: 1400, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 105,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0183", productId: "AJ-SKU-142", productName: "500g×20袋装葱油饼黑椒味", machineId: "FM-042",
    machineName: "馅饼成型线", singleCapacity: 722, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 179,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0184", productId: "AJ-SKU-143", productName: "1kg×10袋装牛肉馅饼香辣味", machineId: "FM-058",
    machineName: "米汉堡成型线", singleCapacity: 703, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 61,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0185", productId: "AJ-SKU-143", productName: "1kg×10袋装牛肉馅饼香辣味", machineId: "FM-037",
    machineName: "酥皮卷成型线", singleCapacity: 1421, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 103,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0186", productId: "AJ-SKU-144", productName: "500g×20袋装调理串轻享装", machineId: "FM-032",
    machineName: "鸡排成型线", singleCapacity: 579, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 134,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0187", productId: "AJ-SKU-145", productName: "2.5kg×4袋装香酥鸡块黑椒味", machineId: "FM-035",
    machineName: "调理串成型线", singleCapacity: 803, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 119,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0188", productId: "AJ-SKU-146", productName: "300g×30袋装鱼籽福袋盒马定制", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 502, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 154,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0189", productId: "AJ-SKU-147", productName: "2.5kg×4袋装盐酥鸡大客户版", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 742, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 106,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0190", productId: "AJ-SKU-147", productName: "2.5kg×4袋装盐酥鸡大客户版", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 563, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 133,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0191", productId: "AJ-SKU-148", productName: "1kg×10袋装鱼肉丸出口版", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 659, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 111,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0192", productId: "AJ-SKU-149", productName: "500g×20袋装龙虾球经典款", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 921, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 112,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0193", productId: "AJ-SKU-150", productName: "10片×20袋装馄饨轻享装", machineId: "FM-037",
    machineName: "酥皮卷成型线", singleCapacity: 1371, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 81,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0194", productId: "AJ-SKU-151", productName: "150g×40袋装虾滑香辣味", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 614, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 81,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0195", productId: "AJ-SKU-151", productName: "150g×40袋装虾滑香辣味", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 551, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 172,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0196", productId: "AJ-SKU-152", productName: "500g×20袋装牛肉馅饼出口版", machineId: "FM-045",
    machineName: "馄饨成型线", singleCapacity: 1212, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 130,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0197", productId: "AJ-SKU-153", productName: "1kg×10袋装关东煮组合香辣味", machineId: "FM-021",
    machineName: "组合丸成型线", singleCapacity: 510, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 141,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0198", productId: "AJ-SKU-154", productName: "200g×30袋装培根卷餐饮装", machineId: "FM-034",
    machineName: "培根卷成型线", singleCapacity: 620, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 86,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0199", productId: "AJ-SKU-155", productName: "2.5kg×4袋装海胆包", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 523, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 59,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0200", productId: "AJ-SKU-156", productName: "300g×30袋装香辣虾滑盒马定制", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 584, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 70,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0201", productId: "AJ-SKU-156", productName: "300g×30袋装香辣虾滑盒马定制", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 726, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 104,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0202", productId: "AJ-SKU-157", productName: "2.5kg×4袋装馅饼黑椒味", machineId: "FM-040",
    machineName: "面点成型线", singleCapacity: 832, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 93,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0203", productId: "AJ-SKU-157", productName: "2.5kg×4袋装馅饼黑椒味", machineId: "FM-039",
    machineName: "面点成型线", singleCapacity: 1461, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 86,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0204", productId: "AJ-SKU-158", productName: "5kg×2袋装火山石烤肠原味", machineId: "FM-024",
    machineName: "盐酥鸡成型线", singleCapacity: 655, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 170,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0205", productId: "AJ-SKU-158", productName: "5kg×2袋装火山石烤肠原味", machineId: "FM-027",
    machineName: "烤肠成型线", singleCapacity: 759, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 159,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0206", productId: "AJ-SKU-159", productName: "200g×30袋装芝士肉丸盒马定制", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 964, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 118,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0207", productId: "AJ-SKU-160", productName: "20片×10袋装蒸饺餐饮装", machineId: "FM-047",
    machineName: "春卷成型线", singleCapacity: 1206, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 87,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0208", productId: "AJ-SKU-161", productName: "500g×20袋装黄金鱼板藤椒味", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 947, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 42,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0209", productId: "AJ-SKU-161", productName: "500g×20袋装黄金鱼板藤椒味", machineId: "FM-052",
    machineName: "鳕鱼排成型机", singleCapacity: 777, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 52,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0210", productId: "AJ-SKU-162", productName: "350g×20袋装藕盒出口版", machineId: "FM-027",
    machineName: "烤肠成型线", singleCapacity: 861, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 172,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0211", productId: "AJ-SKU-163", productName: "2.5kg×4袋装馄饨家庭装", machineId: "FM-040",
    machineName: "面点成型线", singleCapacity: 611, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 94,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0212", productId: "AJ-SKU-163", productName: "2.5kg×4袋装馄饨家庭装", machineId: "FM-039",
    machineName: "面点成型线", singleCapacity: 1395, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 48,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0213", productId: "AJ-SKU-164", productName: "240g×20袋装虾味球藤椒味", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 844, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 92,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0214", productId: "AJ-SKU-165", productName: "2.5kg×4袋装麻辣烫组合", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 669, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 61,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0215", productId: "AJ-SKU-166", productName: "350g×20袋装鸡柳香辣味", machineId: "FM-022",
    machineName: "小酥肉成型线", singleCapacity: 486, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 153,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0216", productId: "AJ-SKU-167", productName: "240g×20袋装黄金鱼板", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 1289, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 71,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0217", productId: "AJ-SKU-168", productName: "1kg×10袋装关东煮组合盒马定制", machineId: "FM-049",
    machineName: "芝士丸成型机", singleCapacity: 637, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 68,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0218", productId: "AJ-SKU-169", productName: "6kg×1零称蟹味排经典款", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 1044, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 141,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0219", productId: "AJ-SKU-170", productName: "5kg×2袋装藕盒经典款", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 772, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 54,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0220", productId: "AJ-SKU-171", productName: "500g×20袋装麻辣烫组合经典款", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 421, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 77,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0221", productId: "AJ-SKU-172", productName: "1kg×10袋装虾味球轻享装", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 1204, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 168,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0222", productId: "AJ-SKU-172", productName: "1kg×10袋装虾味球轻享装", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 1342, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 141,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0223", productId: "AJ-SKU-173", productName: "2.5kg×4袋装蒸饺餐饮装", machineId: "FM-047",
    machineName: "春卷成型线", singleCapacity: 1303, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 130,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0224", productId: "AJ-SKU-174", productName: "5kg×2袋装猪肉丸轻享装", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 652, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 146,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0225", productId: "AJ-SKU-175", productName: "1kg×10袋装藕盒经典款", machineId: "FM-022",
    machineName: "小酥肉成型线", singleCapacity: 611, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 49,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0226", productId: "AJ-SKU-175", productName: "1kg×10袋装藕盒经典款", machineId: "FM-023",
    machineName: "小酥肉成型线", singleCapacity: 563, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 109,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0227", productId: "AJ-SKU-176", productName: "240g×20袋装龙虾球黑椒味", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 927, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 104,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0228", productId: "AJ-SKU-177", productName: "120g×50袋装香辣鱼丸大客户版", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 713, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 126,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0229", productId: "AJ-SKU-177", productName: "120g×50袋装香辣鱼丸大客户版", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 1135, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 100,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0230", productId: "AJ-SKU-178", productName: "500g×20袋装盐酥鸡黑椒味", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 872, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 57,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0231", productId: "AJ-SKU-179", productName: "500g×20袋装酥皮卷", machineId: "FM-037",
    machineName: "酥皮卷成型线", singleCapacity: 926, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 172,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0232", productId: "AJ-SKU-180", productName: "20片×10袋装年糕黑椒味", machineId: "FM-039",
    machineName: "面点成型线", singleCapacity: 1358, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 61,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0233", productId: "AJ-SKU-180", productName: "20片×10袋装年糕黑椒味", machineId: "FM-040",
    machineName: "面点成型线", singleCapacity: 1258, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 120,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0234", productId: "AJ-SKU-181", productName: "500g×20袋装鸡排香辣味", machineId: "FM-034",
    machineName: "培根卷成型线", singleCapacity: 714, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 173,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0235", productId: "AJ-SKU-181", productName: "500g×20袋装鸡排香辣味", machineId: "FM-030",
    machineName: "茄盒成型线", singleCapacity: 937, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 90,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0236", productId: "AJ-SKU-182", productName: "2.5kg×4袋装藕盒", machineId: "FM-032",
    machineName: "鸡排成型线", singleCapacity: 593, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 66,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0237", productId: "AJ-SKU-183", productName: "200g×30袋装撒尿肉丸原味", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 994, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 114,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0238", productId: "AJ-SKU-183", productName: "200g×30袋装撒尿肉丸原味", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 1191, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 176,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0239", productId: "AJ-SKU-184", productName: "5kg×2袋装牛排", machineId: "FM-027",
    machineName: "烤肠成型线", singleCapacity: 536, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 104,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0240", productId: "AJ-SKU-185", productName: "200g×30袋装奥尔良鸡柳家庭装", machineId: "FM-022",
    machineName: "小酥肉成型线", singleCapacity: 488, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 146,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0241", productId: "AJ-SKU-186", productName: "240g×20袋装鱼丸经典款", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 903, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 76,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0242", productId: "AJ-SKU-187", productName: "5kg×2袋装黑椒牛肉条香辣味", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 506, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 120,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0243", productId: "AJ-SKU-188", productName: "200g×30袋装鳕鱼排香辣味", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 1391, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 149,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0244", productId: "AJ-SKU-189", productName: "6kg×1零称芝士鱼丸家庭装", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 807, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 156,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0245", productId: "AJ-SKU-190", productName: "5kg×2袋装火山石烤肠家庭装", machineId: "FM-023",
    machineName: "小酥肉成型线", singleCapacity: 832, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 63,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0246", productId: "AJ-SKU-191", productName: "400g×20袋装馅饼经典款", machineId: "FM-042",
    machineName: "馅饼成型线", singleCapacity: 794, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 167,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0247", productId: "AJ-SKU-191", productName: "400g×20袋装馅饼经典款", machineId: "FM-045",
    machineName: "馄饨成型线", singleCapacity: 985, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 114,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0248", productId: "AJ-SKU-192", productName: "200g×30袋装香酥鸡块餐饮装", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 516, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 161,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0249", productId: "AJ-SKU-193", productName: "2.5kg×4袋装香菇贡丸黑椒味", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 1053, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 66,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0250", productId: "AJ-SKU-194", productName: "5kg×2袋装培根卷", machineId: "FM-029",
    machineName: "藕盒成型线", singleCapacity: 696, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 180,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0251", productId: "AJ-SKU-195", productName: "1kg×10袋装虾滑出口版", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 551, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 76,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0252", productId: "AJ-SKU-196", productName: "5kg×2袋装藕盒藤椒味", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 872, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 81,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0253", productId: "AJ-SKU-197", productName: "800g×12袋装鱼籽福袋大客户版", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 817, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 153,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0254", productId: "AJ-SKU-198", productName: "120g×50袋装龙虾球黑椒味", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 840, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 40,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0255", productId: "AJ-SKU-198", productName: "120g×50袋装龙虾球黑椒味", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 770, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 109,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0256", productId: "AJ-SKU-199", productName: "240g×20袋装芝士鱼丸家庭装", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 906, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 105,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0257", productId: "AJ-SKU-200", productName: "2.5kg×4袋装馅饼B版", machineId: "FM-045",
    machineName: "馄饨成型线", singleCapacity: 1072, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 156,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0258", productId: "AJ-SKU-201", productName: "1kg×10袋装鲜虾滑经典款", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 363, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 118,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0259", productId: "AJ-SKU-202", productName: "300g×30袋装鱼籽虾滑黑椒味", machineId: "FM-018",
    machineName: "虾滑成型线", singleCapacity: 432, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 144,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0260", productId: "AJ-SKU-203", productName: "1kg×10袋装海鲜组合包黑椒味", machineId: "FM-057",
    machineName: "蔬菜丸成型机", singleCapacity: 458, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 119,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0261", productId: "AJ-SKU-204", productName: "500g×20袋装鱼竹轮香辣味", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 1351, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 169,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0262", productId: "AJ-SKU-205", productName: "500g×20袋装烧麦盒马定制", machineId: "FM-045",
    machineName: "馄饨成型线", singleCapacity: 908, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 87,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0263", productId: "AJ-SKU-206", productName: "500g×20袋装培根卷B版", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 788, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 66,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0264", productId: "AJ-SKU-207", productName: "2.5kg×4袋装墨鱼丸藤椒味", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 1200, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 76,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0265", productId: "AJ-SKU-208", productName: "200g×30袋装贡丸黑椒味", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 1207, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 46,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0266", productId: "AJ-SKU-209", productName: "200g×30袋装黄金鱼板经典款", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 952, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 100,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0267", productId: "AJ-SKU-210", productName: "200g×30袋装小酥肉香辣味", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 821, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 144,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0268", productId: "AJ-SKU-211", productName: "500g×20袋装小酥肉盒马定制", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 866, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 152,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0269", productId: "AJ-SKU-211", productName: "500g×20袋装小酥肉盒马定制", machineId: "FM-023",
    machineName: "小酥肉成型线", singleCapacity: 468, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 59,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0270", productId: "AJ-SKU-212", productName: "500g×20袋装蟹籽福袋经典款", machineId: "FM-019",
    machineName: "鱼籽福袋成型线", singleCapacity: 433, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 161,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0271", productId: "AJ-SKU-213", productName: "1kg×10袋装芝士鱼丸盒马定制", machineId: "FM-008",
    machineName: "鱼排成型机", singleCapacity: 765, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 128,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0272", productId: "AJ-SKU-214", productName: "200g×30袋装包心鱼丸藤椒味", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 1258, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 132,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0273", productId: "AJ-SKU-215", productName: "10片×20袋装牛肉馅饼轻享装", machineId: "FM-058",
    machineName: "米汉堡成型线", singleCapacity: 751, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 54,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0274", productId: "AJ-SKU-216", productName: "6kg×1零称芝士鱼丸B版", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 1012, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 157,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0275", productId: "AJ-SKU-216", productName: "6kg×1零称芝士鱼丸B版", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 1350, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 64,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0276", productId: "AJ-SKU-217", productName: "1kg×10袋装香菇贡丸餐饮装", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 1105, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 60,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0277", productId: "AJ-SKU-218", productName: "500g×20袋装包心鱼丸餐饮装", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 1101, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 108,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0278", productId: "AJ-SKU-219", productName: "2.5kg×4袋装葱油饼餐饮装", machineId: "FM-060",
    machineName: "年糕成型线", singleCapacity: 744, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 169,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0279", productId: "AJ-SKU-219", productName: "2.5kg×4袋装葱油饼餐饮装", machineId: "FM-059",
    machineName: "年糕成型线", singleCapacity: 968, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 110,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0280", productId: "AJ-SKU-220", productName: "2.5kg×4袋装茄盒盒马定制", machineId: "FM-031",
    machineName: "茄盒成型线", singleCapacity: 768, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 148,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0281", productId: "AJ-SKU-221", productName: "400g×20袋装香菇贡丸黑椒味", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 899, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 144,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0282", productId: "AJ-SKU-222", productName: "1kg×10袋装龙虾球轻享装", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 777, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 67,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0283", productId: "AJ-SKU-223", productName: "1kg×10袋装墨鱼丸轻享装", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 1141, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 61,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0284", productId: "AJ-SKU-223", productName: "1kg×10袋装墨鱼丸轻享装", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 1123, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 90,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0285", productId: "AJ-SKU-224", productName: "2.5kg×4袋装鱼籽福袋盒马定制", machineId: "FM-053",
    machineName: "海胆包成型线", singleCapacity: 535, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 49,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0286", productId: "AJ-SKU-224", productName: "2.5kg×4袋装鱼籽福袋盒马定制", machineId: "FM-054",
    machineName: "海胆包成型线", singleCapacity: 517, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 175,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0287", productId: "AJ-SKU-225", productName: "500g×20袋装香菇贡丸轻享装", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 988, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 105,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0288", productId: "AJ-SKU-225", productName: "500g×20袋装香菇贡丸轻享装", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 956, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 142,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0289", productId: "AJ-SKU-226", productName: "1kg×10袋装虾滑餐饮装", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 397, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 117,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0290", productId: "AJ-SKU-227", productName: "2.5kg×4袋装香辣虾滑藤椒味", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 367, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 179,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0291", productId: "AJ-SKU-227", productName: "2.5kg×4袋装香辣虾滑藤椒味", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 665, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 178,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0292", productId: "AJ-SKU-228", productName: "500g×20袋装海胆包原味", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 845, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 108,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0293", productId: "AJ-SKU-229", productName: "400g×20袋装蒸饺原味", machineId: "FM-043",
    machineName: "蒸饺成型线", singleCapacity: 990, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 86,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0294", productId: "AJ-SKU-230", productName: "5kg×2袋装脆骨丸家庭装", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 1167, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 66,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0295", productId: "AJ-SKU-231", productName: "2.5kg×4袋装香菇贡丸盒马定制", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 928, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 51,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0296", productId: "AJ-SKU-232", productName: "10片×20袋装烧麦黑椒味", machineId: "FM-059",
    machineName: "年糕成型线", singleCapacity: 1281, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 134,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0297", productId: "AJ-SKU-233", productName: "500g×20袋装培根卷黑椒味", machineId: "FM-028",
    machineName: "藕盒成型线", singleCapacity: 774, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 89,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0298", productId: "AJ-SKU-234", productName: "2.5kg×4袋装鲜虾滑餐饮装", machineId: "FM-017",
    machineName: "虾滑成型线", singleCapacity: 535, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 120,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0299", productId: "AJ-SKU-235", productName: "300g×30袋装丸类组合包原味", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 816, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 171,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0300", productId: "AJ-SKU-236", productName: "240g×20袋装虾味球餐饮装", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 871, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 135,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0301", productId: "AJ-SKU-237", productName: "400g×20袋装春卷盒马定制", machineId: "FM-047",
    machineName: "春卷成型线", singleCapacity: 1475, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 157,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0302", productId: "AJ-SKU-238", productName: "2.5kg×4袋装鱼肉丸原味", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 1073, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 76,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0303", productId: "AJ-SKU-238", productName: "2.5kg×4袋装鱼肉丸原味", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 961, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 170,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0304", productId: "AJ-SKU-239", productName: "500g×20袋装鲜虾滑团餐装", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 494, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 47,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0305", productId: "AJ-SKU-240", productName: "1kg×10袋装香辣虾滑藤椒味", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 713, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 180,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0306", productId: "AJ-SKU-240", productName: "1kg×10袋装香辣虾滑藤椒味", machineId: "FM-018",
    machineName: "虾滑成型线", singleCapacity: 517, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 130,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0307", productId: "AJ-SKU-241", productName: "1kg×10袋装葱油饼经典款", machineId: "FM-041",
    machineName: "烧麦成型线", singleCapacity: 1024, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 118,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0308", productId: "AJ-SKU-242", productName: "2.5kg×4袋装包心贡丸藤椒味", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 680, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 135,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0309", productId: "AJ-SKU-243", productName: "500g×20袋装蟹味排出口版", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 1097, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 129,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0310", productId: "AJ-SKU-244", productName: "240g×20袋装龙虾球团餐装", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 821, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 99,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0311", productId: "AJ-SKU-245", productName: "200g×30袋装鱼肉丸藤椒味", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 1019, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 96,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0312", productId: "AJ-SKU-245", productName: "200g×30袋装鱼肉丸藤椒味", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 753, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 170,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0313", productId: "AJ-SKU-246", productName: "500g×20袋装脆皮鸡米花黑椒味", machineId: "FM-055",
    machineName: "玉米肠成型线", singleCapacity: 838, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 50,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0314", productId: "AJ-SKU-247", productName: "5kg×2袋装小酥肉轻享装", machineId: "FM-023",
    machineName: "小酥肉成型线", singleCapacity: 781, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 167,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0315", productId: "AJ-SKU-248", productName: "300g×30袋装丸类组合包升级款", machineId: "FM-053",
    machineName: "海胆包成型线", singleCapacity: 412, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 47,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0316", productId: "AJ-SKU-249", productName: "300g×30袋装鱼籽福袋黑椒味", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 510, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 45,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0317", productId: "AJ-SKU-250", productName: "350g×20袋装玉米肠藤椒味", machineId: "FM-031",
    machineName: "茄盒成型线", singleCapacity: 522, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 171,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0318", productId: "AJ-SKU-251", productName: "5kg×2袋装盐酥鸡经典款", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 805, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 159,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0319", productId: "AJ-SKU-252", productName: "500g×20袋装茄盒出口版", machineId: "FM-030",
    machineName: "茄盒成型线", singleCapacity: 739, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 149,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0320", productId: "AJ-SKU-253", productName: "500g×20袋装蟹籽虾滑餐饮装", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 561, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 118,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0321", productId: "AJ-SKU-253", productName: "500g×20袋装蟹籽虾滑餐饮装", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 714, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 148,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0322", productId: "AJ-SKU-254", productName: "1kg×10袋装海胆包餐饮装", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 488, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 80,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0323", productId: "AJ-SKU-255", productName: "1kg×10袋装鱼豆腐", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 1233, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 131,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0324", productId: "AJ-SKU-256", productName: "10片×20袋装米汉堡盒马定制", machineId: "FM-039",
    machineName: "面点成型线", singleCapacity: 651, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 71,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0325", productId: "AJ-SKU-256", productName: "10片×20袋装米汉堡盒马定制", machineId: "FM-040",
    machineName: "面点成型线", singleCapacity: 670, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 138,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0326", productId: "AJ-SKU-257", productName: "240g×20袋装鱼竹轮经典款", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 1121, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 92,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0327", productId: "AJ-SKU-257", productName: "240g×20袋装鱼竹轮经典款", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 1210, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 45,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0328", productId: "AJ-SKU-258", productName: "20片×10袋装锅贴餐饮装", machineId: "FM-043",
    machineName: "蒸饺成型线", singleCapacity: 864, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 145,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0329", productId: "AJ-SKU-259", productName: "2.5kg×4袋装蔬菜丸餐饮装", machineId: "FM-021",
    machineName: "组合丸成型线", singleCapacity: 661, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 106,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0330", productId: "AJ-SKU-260", productName: "2.5kg×4袋装香酥鸡块餐饮装", machineId: "FM-031",
    machineName: "茄盒成型线", singleCapacity: 703, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 96,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0331", productId: "AJ-SKU-261", productName: "500g×20袋装藕盒餐饮装", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 649, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 62,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0332", productId: "AJ-SKU-262", productName: "800g×12袋装蟹籽福袋餐饮装", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 574, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 46,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0333", productId: "AJ-SKU-262", productName: "800g×12袋装蟹籽福袋餐饮装", machineId: "FM-020",
    machineName: "组合丸成型线", singleCapacity: 570, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 59,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0334", productId: "AJ-SKU-263", productName: "2.5kg×4袋装手抓饼经典款", machineId: "FM-060",
    machineName: "年糕成型线", singleCapacity: 1240, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 99,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0335", productId: "AJ-SKU-264", productName: "800g×12袋装芝士丸餐饮装", machineId: "FM-057",
    machineName: "蔬菜丸成型机", singleCapacity: 424, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 169,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0336", productId: "AJ-SKU-265", productName: "2.5kg×4袋装撒尿肉丸黑椒味", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 684, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 60,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0337", productId: "AJ-SKU-266", productName: "350g×20袋装奥尔良鸡柳藤椒味", machineId: "FM-036",
    machineName: "调理串成型线", singleCapacity: 876, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 141,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0338", productId: "AJ-SKU-267", productName: "1kg×10袋装虾滑香辣味", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 786, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 179,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0339", productId: "AJ-SKU-268", productName: "200g×30袋装香菇贡丸盒马定制", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 802, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 58,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0340", productId: "AJ-SKU-269", productName: "1kg×10袋装藕盒B版", machineId: "FM-055",
    machineName: "玉米肠成型线", singleCapacity: 756, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 100,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0341", productId: "AJ-SKU-269", productName: "1kg×10袋装藕盒B版", machineId: "FM-023",
    machineName: "小酥肉成型线", singleCapacity: 625, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 54,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0342", productId: "AJ-SKU-270", productName: "240g×20袋装蟹棒原味", machineId: "FM-008",
    machineName: "鱼排成型机", singleCapacity: 1056, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 173,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0343", productId: "AJ-SKU-270", productName: "240g×20袋装蟹棒原味", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 1027, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 84,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0344", productId: "AJ-SKU-271", productName: "1kg×10袋装芝士鱼丸升级款", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 1274, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 40,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0345", productId: "AJ-SKU-272", productName: "1kg×10袋装鱼豆腐盒马定制", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 1007, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 86,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0346", productId: "AJ-SKU-273", productName: "200g×30袋装牛排黑椒味", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 725, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 107,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0347", productId: "AJ-SKU-274", productName: "5kg×2袋装脆骨丸经典款", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 1226, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 147,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0348", productId: "AJ-SKU-275", productName: "240g×20袋装鱼豆腐餐饮装", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 1264, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 56,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0349", productId: "AJ-SKU-275", productName: "240g×20袋装鱼豆腐餐饮装", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 957, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 107,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0350", productId: "AJ-SKU-276", productName: "6kg×1零称鱼丸黑椒味", machineId: "FM-008",
    machineName: "鱼排成型机", singleCapacity: 1301, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 116,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0351", productId: "AJ-SKU-277", productName: "200g×30袋装藕盒藤椒味", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 814, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 162,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0352", productId: "AJ-SKU-278", productName: "1kg×10袋装锅贴原味", machineId: "FM-045",
    machineName: "馄饨成型线", singleCapacity: 615, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 52,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0353", productId: "AJ-SKU-278", productName: "1kg×10袋装锅贴原味", machineId: "FM-058",
    machineName: "米汉堡成型线", singleCapacity: 646, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 177,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0354", productId: "AJ-SKU-279", productName: "500g×20袋装藕盒家庭装", machineId: "FM-023",
    machineName: "小酥肉成型线", singleCapacity: 575, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 169,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0355", productId: "AJ-SKU-279", productName: "500g×20袋装藕盒家庭装", machineId: "FM-022",
    machineName: "小酥肉成型线", singleCapacity: 663, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 59,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0356", productId: "AJ-SKU-280", productName: "1kg×10袋装虾滑", machineId: "FM-018",
    machineName: "虾滑成型线", singleCapacity: 665, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 90,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0357", productId: "AJ-SKU-281", productName: "1kg×10袋装藕盒家庭装", machineId: "FM-031",
    machineName: "茄盒成型线", singleCapacity: 635, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 163,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0358", productId: "AJ-SKU-282", productName: "6kg×1零称蟹棒轻享装", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 1111, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 179,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0359", productId: "AJ-SKU-283", productName: "300g×30袋装鲜虾滑盒马定制", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 486, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 51,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0360", productId: "AJ-SKU-284", productName: "500g×20袋装茄盒香辣味", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 835, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 49,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0361", productId: "AJ-SKU-284", productName: "500g×20袋装茄盒香辣味", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 791, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 76,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0362", productId: "AJ-SKU-285", productName: "500g×20袋装芝士虾滑经典款", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 725, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 81,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0363", productId: "AJ-SKU-286", productName: "400g×20袋装包心贡丸原味", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 761, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 116,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0364", productId: "AJ-SKU-287", productName: "300g×30袋装蟹籽福袋经典款", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 626, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 148,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0365", productId: "AJ-SKU-288", productName: "350g×20袋装玉米肠经典款", machineId: "FM-024",
    machineName: "盐酥鸡成型线", singleCapacity: 563, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 137,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0366", productId: "AJ-SKU-288", productName: "350g×20袋装玉米肠经典款", machineId: "FM-036",
    machineName: "调理串成型线", singleCapacity: 532, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 74,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0367", productId: "AJ-SKU-289", productName: "5kg×2袋装香酥鸡块盒马定制", machineId: "FM-031",
    machineName: "茄盒成型线", singleCapacity: 569, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 143,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0368", productId: "AJ-SKU-290", productName: "1kg×10袋装包心鱼丸出口版", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 1185, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 48,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0369", productId: "AJ-SKU-291", productName: "500g×20袋装猪肉丸黑椒味", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 663, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 109,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0370", productId: "AJ-SKU-292", productName: "1kg×10袋装猪肉大葱水饺原味", machineId: "FM-045",
    machineName: "馄饨成型线", singleCapacity: 1033, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 72,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0371", productId: "AJ-SKU-293", productName: "1kg×10袋装蟹籽虾滑大客户版", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 729, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 46,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0372", productId: "AJ-SKU-293", productName: "1kg×10袋装蟹籽虾滑大客户版", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 646, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 161,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0373", productId: "AJ-SKU-294", productName: "20片×10袋装猪肉大葱水饺香辣味", machineId: "FM-046",
    machineName: "春卷成型线", singleCapacity: 1355, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 52,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0374", productId: "AJ-SKU-295", productName: "120g×50袋装龙虾球出口版", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 1381, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 179,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0375", productId: "AJ-SKU-295", productName: "120g×50袋装龙虾球出口版", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 1370, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 128,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0376", productId: "AJ-SKU-296", productName: "1kg×10袋装火锅组合丸藤椒味", machineId: "FM-019",
    machineName: "鱼籽福袋成型线", singleCapacity: 431, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 121,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0377", productId: "AJ-SKU-296", productName: "1kg×10袋装火锅组合丸藤椒味", machineId: "FM-054",
    machineName: "海胆包成型线", singleCapacity: 482, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 59,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0378", productId: "AJ-SKU-297", productName: "200g×30袋装猪肉丸", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 947, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 163,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0379", productId: "AJ-SKU-298", productName: "500g×20袋装脆皮鸡米花出口版", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 754, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 69,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0380", productId: "AJ-SKU-298", productName: "500g×20袋装脆皮鸡米花出口版", machineId: "FM-035",
    machineName: "调理串成型线", singleCapacity: 538, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 122,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0381", productId: "AJ-SKU-299", productName: "200g×30袋装贡丸出口版", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 1191, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 42,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0382", productId: "AJ-SKU-299", productName: "200g×30袋装贡丸出口版", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 709, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 43,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0383", productId: "AJ-SKU-300", productName: "6kg×1零称鳕鱼排家庭装", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 839, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 134,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0384", productId: "AJ-SKU-301", productName: "200g×30袋装鸡排藤椒味", machineId: "FM-055",
    machineName: "玉米肠成型线", singleCapacity: 733, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 54,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0385", productId: "AJ-SKU-301", productName: "200g×30袋装鸡排藤椒味", machineId: "FM-029",
    machineName: "藕盒成型线", singleCapacity: 478, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 111,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0386", productId: "AJ-SKU-302", productName: "5kg×2袋装脆皮鸡米花餐饮装", machineId: "FM-027",
    machineName: "烤肠成型线", singleCapacity: 701, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 77,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0387", productId: "AJ-SKU-303", productName: "500g×20袋装调理串盒马定制", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 573, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 94,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0388", productId: "AJ-SKU-304", productName: "240g×20袋装龙虾球轻享装", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 1009, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 117,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0389", productId: "AJ-SKU-305", productName: "2.5kg×4袋装虾滑轻享装", machineId: "FM-018",
    machineName: "虾滑成型线", singleCapacity: 773, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 159,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0390", productId: "AJ-SKU-306", productName: "500g×20袋装火山石烤肠家庭装", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 493, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 104,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0391", productId: "AJ-SKU-307", productName: "5kg×2袋装牛肉丸餐饮装", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 792, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 162,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0392", productId: "AJ-SKU-308", productName: "1kg×10袋装关东煮组合大客户版", machineId: "FM-057",
    machineName: "蔬菜丸成型机", singleCapacity: 856, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 102,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0393", productId: "AJ-SKU-309", productName: "240g×20袋装芝士鱼丸香辣味", machineId: "FM-008",
    machineName: "鱼排成型机", singleCapacity: 1318, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 90,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0394", productId: "AJ-SKU-309", productName: "240g×20袋装芝士鱼丸香辣味", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 1129, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 155,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0395", productId: "AJ-SKU-310", productName: "2.5kg×4袋装牛排家庭装", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 504, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 147,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0396", productId: "AJ-SKU-310", productName: "2.5kg×4袋装牛排家庭装", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 882, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 67,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0397", productId: "AJ-SKU-311", productName: "120g×50袋装鱼豆腐轻享装", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 804, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 84,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0398", productId: "AJ-SKU-312", productName: "200g×30袋装鱼肉丸餐饮装", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 932, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 48,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0399", productId: "AJ-SKU-312", productName: "200g×30袋装鱼肉丸餐饮装", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 1197, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 75,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0400", productId: "AJ-SKU-313", productName: "500g×20袋装鱼竹轮经典款", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 896, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 111,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0401", productId: "AJ-SKU-314", productName: "350g×20袋装玉米肠原味", machineId: "FM-029",
    machineName: "藕盒成型线", singleCapacity: 855, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 130,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0402", productId: "AJ-SKU-315", productName: "200g×30袋装鱼竹轮原味", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 804, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 138,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0403", productId: "AJ-SKU-315", productName: "200g×30袋装鱼竹轮原味", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 1105, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 166,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0404", productId: "AJ-SKU-316", productName: "350g×20袋装鸡柳出口版", machineId: "FM-024",
    machineName: "盐酥鸡成型线", singleCapacity: 902, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 92,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0405", productId: "AJ-SKU-316", productName: "350g×20袋装鸡柳出口版", machineId: "FM-030",
    machineName: "茄盒成型线", singleCapacity: 509, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 158,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0406", productId: "AJ-SKU-317", productName: "1kg×10袋装撒尿肉丸", machineId: "FM-013",
    machineName: "肉丸成型机", singleCapacity: 909, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 50,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0407", productId: "AJ-SKU-318", productName: "350g×20袋装牛排餐饮装", machineId: "FM-036",
    machineName: "调理串成型线", singleCapacity: 726, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 82,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0408", productId: "AJ-SKU-319", productName: "2.5kg×4袋装鱼肉丸黑椒味", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 807, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 77,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0409", productId: "AJ-SKU-320", productName: "2.5kg×4袋装牛排香辣味", machineId: "FM-034",
    machineName: "培根卷成型线", singleCapacity: 738, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 147,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0410", productId: "AJ-SKU-321", productName: "5kg×2袋装奥尔良鸡柳经典款", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 924, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 98,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0411", productId: "AJ-SKU-322", productName: "500g×20袋装撒尿肉丸盒马定制", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 671, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 64,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0412", productId: "AJ-SKU-323", productName: "10片×20袋装烧麦家庭装", machineId: "FM-040",
    machineName: "面点成型线", singleCapacity: 1247, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 162,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0413", productId: "AJ-SKU-323", productName: "10片×20袋装烧麦家庭装", machineId: "FM-039",
    machineName: "面点成型线", singleCapacity: 672, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 157,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0414", productId: "AJ-SKU-324", productName: "300g×30袋装蔬菜丸原味", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 403, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 156,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0415", productId: "AJ-SKU-325", productName: "400g×20袋装墨鱼丸大客户版", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 889, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 44,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0416", productId: "AJ-SKU-326", productName: "2.5kg×4袋装酥皮卷大客户版", machineId: "FM-038",
    machineName: "手抓饼生产线", singleCapacity: 1398, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 103,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0417", productId: "AJ-SKU-327", productName: "2.5kg×4袋装鱼籽福袋家庭装", machineId: "FM-019",
    machineName: "鱼籽福袋成型线", singleCapacity: 592, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 66,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0418", productId: "AJ-SKU-328", productName: "500g×20袋装蔬菜丸餐饮装", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 498, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 180,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0419", productId: "AJ-SKU-328", productName: "500g×20袋装蔬菜丸餐饮装", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 416, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 40,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0420", productId: "AJ-SKU-329", productName: "120g×50袋装鱼丸区域装", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 917, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 105,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0421", productId: "AJ-SKU-329", productName: "120g×50袋装鱼丸区域装", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 1166, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 180,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0422", productId: "AJ-SKU-330", productName: "5kg×2袋装小酥肉原味", machineId: "FM-023",
    machineName: "小酥肉成型线", singleCapacity: 927, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 177,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0423", productId: "AJ-SKU-331", productName: "2.5kg×4袋装麻辣烫组合团餐装", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 471, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 134,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0424", productId: "AJ-SKU-332", productName: "1kg×10袋装馅饼", machineId: "FM-043",
    machineName: "蒸饺成型线", singleCapacity: 970, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 95,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0425", productId: "AJ-SKU-333", productName: "500g×20袋装龙虾球大客户版", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 957, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 47,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0426", productId: "AJ-SKU-333", productName: "500g×20袋装龙虾球大客户版", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 800, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 177,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0427", productId: "AJ-SKU-334", productName: "300g×30袋装海胆包经典款", machineId: "FM-020",
    machineName: "组合丸成型线", singleCapacity: 465, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 177,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0428", productId: "AJ-SKU-335", productName: "5kg×2袋装贡丸原味", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 823, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 162,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0429", productId: "AJ-SKU-335", productName: "5kg×2袋装贡丸原味", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 1113, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 109,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0430", productId: "AJ-SKU-336", productName: "2.5kg×4袋装丸类组合包大客户版", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 456, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 89,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0431", productId: "AJ-SKU-336", productName: "2.5kg×4袋装丸类组合包大客户版", machineId: "FM-056",
    machineName: "蔬菜丸成型机", singleCapacity: 432, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 180,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0432", productId: "AJ-SKU-337", productName: "240g×20袋装香辣鱼丸盒马定制", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 1074, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 124,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0433", productId: "AJ-SKU-337", productName: "240g×20袋装香辣鱼丸盒马定制", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 837, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 112,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0434", productId: "AJ-SKU-338", productName: "1kg×10袋装包心鱼丸家庭装", machineId: "FM-014",
    machineName: "贡丸成型机", singleCapacity: 650, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 71,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0435", productId: "AJ-SKU-339", productName: "1kg×10袋装包心贡丸家庭装", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 731, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 94,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0436", productId: "AJ-SKU-339", productName: "1kg×10袋装包心贡丸家庭装", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 1056, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 40,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0437", productId: "AJ-SKU-340", productName: "20片×10袋装猪肉大葱水饺", machineId: "FM-045",
    machineName: "馄饨成型线", singleCapacity: 965, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 47,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0438", productId: "AJ-SKU-341", productName: "1kg×10袋装春卷原味", machineId: "FM-044",
    machineName: "汤圆成型线", singleCapacity: 1438, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 95,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0439", productId: "AJ-SKU-342", productName: "200g×30袋装芝士鱼丸出口版", machineId: "FM-008",
    machineName: "鱼排成型机", singleCapacity: 810, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 52,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0440", productId: "AJ-SKU-342", productName: "200g×30袋装芝士鱼丸出口版", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 1212, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 145,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0441", productId: "AJ-SKU-343", productName: "500g×20袋装烧麦出口版", machineId: "FM-040",
    machineName: "面点成型线", singleCapacity: 841, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 119,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0442", productId: "AJ-SKU-344", productName: "500g×20袋装蟹籽虾滑轻享装", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 622, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 135,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0443", productId: "AJ-SKU-345", productName: "500g×20袋装芝士鱼丸大客户版", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 868, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 151,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0444", productId: "AJ-SKU-346", productName: "120g×50袋装龙虾球大客户版", machineId: "FM-050",
    machineName: "龙虾球成型机", singleCapacity: 1062, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 126,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0445", productId: "AJ-SKU-347", productName: "300g×30袋装芝士丸香辣味", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 569, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 42,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0446", productId: "AJ-SKU-348", productName: "200g×30袋装藕盒", machineId: "FM-024",
    machineName: "盐酥鸡成型线", singleCapacity: 834, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 102,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0447", productId: "AJ-SKU-348", productName: "200g×30袋装藕盒", machineId: "FM-023",
    machineName: "小酥肉成型线", singleCapacity: 680, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 165,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0448", productId: "AJ-SKU-349", productName: "1kg×10袋装猪肉丸大客户版", machineId: "FM-013",
    machineName: "肉丸成型机", singleCapacity: 1008, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 114,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0449", productId: "AJ-SKU-350", productName: "6kg×1零称鱼排轻享装", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 1033, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 74,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0450", productId: "AJ-SKU-351", productName: "500g×20袋装鸡柳大客户版", machineId: "FM-027",
    machineName: "烤肠成型线", singleCapacity: 706, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 151,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0451", productId: "AJ-SKU-352", productName: "6kg×1零称蟹棒餐饮装", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 837, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 64,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0452", productId: "AJ-SKU-353", productName: "2.5kg×4袋装关东煮组合", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 608, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 113,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0453", productId: "AJ-SKU-354", productName: "1kg×10袋装汤圆大客户版", machineId: "FM-044",
    machineName: "汤圆成型线", singleCapacity: 1330, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 60,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0454", productId: "AJ-SKU-355", productName: "300g×30袋装芝士丸出口版", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 711, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 116,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0455", productId: "AJ-SKU-356", productName: "400g×20袋装馄饨盒马定制", machineId: "FM-039",
    machineName: "面点成型线", singleCapacity: 1383, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 66,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0456", productId: "AJ-SKU-357", productName: "500g×20袋装鱼籽福袋家庭装", machineId: "FM-056",
    machineName: "蔬菜丸成型机", singleCapacity: 817, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 141,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0457", productId: "AJ-SKU-358", productName: "200g×30袋装香辣鱼丸", machineId: "FM-052",
    machineName: "鳕鱼排成型机", singleCapacity: 1268, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 41,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0458", productId: "AJ-SKU-359", productName: "150g×40袋装香辣虾滑原味", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 480, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 50,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0459", productId: "AJ-SKU-360", productName: "400g×20袋装包心贡丸轻享装", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 946, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 64,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0460", productId: "AJ-SKU-361", productName: "200g×30袋装包心贡丸黑椒味", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 1118, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 129,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0461", productId: "AJ-SKU-361", productName: "200g×30袋装包心贡丸黑椒味", machineId: "FM-013",
    machineName: "肉丸成型机", singleCapacity: 1157, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 75,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0462", productId: "AJ-SKU-362", productName: "200g×30袋装虾味球香辣味", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 1400, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 147,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0463", productId: "AJ-SKU-363", productName: "1kg×10袋装鱼豆腐餐饮装", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 962, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 69,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0464", productId: "AJ-SKU-364", productName: "500g×20袋装鱼竹轮团餐装", machineId: "FM-008",
    machineName: "鱼排成型机", singleCapacity: 1073, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 99,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0465", productId: "AJ-SKU-365", productName: "200g×30袋装鱼肉丸精选款", machineId: "FM-010",
    machineName: "包心丸成型机", singleCapacity: 1277, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 51,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0466", productId: "AJ-SKU-365", productName: "200g×30袋装鱼肉丸精选款", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 1219, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 104,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0467", productId: "AJ-SKU-366", productName: "2.5kg×4袋装海胆包家庭装", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 402, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 59,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0468", productId: "AJ-SKU-366", productName: "2.5kg×4袋装海胆包家庭装", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 844, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 111,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0469", productId: "AJ-SKU-367", productName: "5kg×2袋装脆骨丸团餐装", machineId: "FM-013",
    machineName: "肉丸成型机", singleCapacity: 1172, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 91,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0470", productId: "AJ-SKU-367", productName: "5kg×2袋装脆骨丸团餐装", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 1081, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 142,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0471", productId: "AJ-SKU-368", productName: "400g×20袋装酥皮卷", machineId: "FM-039",
    machineName: "面点成型线", singleCapacity: 895, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 95,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0472", productId: "AJ-SKU-368", productName: "400g×20袋装酥皮卷", machineId: "FM-038",
    machineName: "手抓饼生产线", singleCapacity: 825, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 98,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0473", productId: "AJ-SKU-369", productName: "2.5kg×4袋装墨鱼丸盒马定制", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 874, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 81,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0474", productId: "AJ-SKU-370", productName: "5kg×2袋装鸡柳轻享装", machineId: "FM-027",
    machineName: "烤肠成型线", singleCapacity: 767, defaultMachineCount: 1,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 106,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0475", productId: "AJ-SKU-371", productName: "20片×10袋装蒸饺经典款", machineId: "FM-041",
    machineName: "烧麦成型线", singleCapacity: 920, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 124,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0476", productId: "AJ-SKU-372", productName: "5kg×2袋装脆皮鸡米花", machineId: "FM-032",
    machineName: "鸡排成型线", singleCapacity: 921, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 118,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0477", productId: "AJ-SKU-373", productName: "2.5kg×4袋装火锅组合丸家庭装", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 594, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 122,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0478", productId: "AJ-SKU-373", productName: "2.5kg×4袋装火锅组合丸家庭装", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 443, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 97,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0479", productId: "AJ-SKU-374", productName: "1kg×10袋装烧麦黑椒味", machineId: "FM-038",
    machineName: "手抓饼生产线", singleCapacity: 1339, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 128,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0480", productId: "AJ-SKU-374", productName: "1kg×10袋装烧麦黑椒味", machineId: "FM-047",
    machineName: "春卷成型线", singleCapacity: 1234, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 77,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0481", productId: "AJ-SKU-375", productName: "500g×20袋装虾味球精选款", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 1244, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 138,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0482", productId: "AJ-SKU-376", productName: "500g×20袋装关东煮组合香辣味", machineId: "FM-021",
    machineName: "组合丸成型线", singleCapacity: 416, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 48,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0483", productId: "AJ-SKU-377", productName: "400g×20袋装芝士肉丸经典款", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 1103, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 45,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0484", productId: "AJ-SKU-377", productName: "400g×20袋装芝士肉丸经典款", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 958, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 158,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0485", productId: "AJ-SKU-378", productName: "200g×30袋装芝士鱼丸轻享装", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 1097, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 95,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0486", productId: "AJ-SKU-379", productName: "400g×20袋装馅饼B版", machineId: "FM-040",
    machineName: "面点成型线", singleCapacity: 971, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 140,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0487", productId: "AJ-SKU-379", productName: "400g×20袋装馅饼B版", machineId: "FM-039",
    machineName: "面点成型线", singleCapacity: 1008, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 162,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0488", productId: "AJ-SKU-380", productName: "5kg×2袋装鱼肉丸大客户版", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 685, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 60,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0489", productId: "AJ-SKU-381", productName: "1kg×10袋装鱼豆腐藤椒味", machineId: "FM-052",
    machineName: "鳕鱼排成型机", singleCapacity: 1141, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 135,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0490", productId: "AJ-SKU-382", productName: "2.5kg×4袋装海鲜组合包大客户版", machineId: "FM-054",
    machineName: "海胆包成型线", singleCapacity: 510, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 170,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0491", productId: "AJ-SKU-383", productName: "6kg×1零称鱼排盒马定制", machineId: "FM-001",
    machineName: "鱼丸成型机", singleCapacity: 931, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 77,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0492", productId: "AJ-SKU-383", productName: "6kg×1零称鱼排盒马定制", machineId: "FM-003",
    machineName: "鱼丸成型机", singleCapacity: 1374, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 102,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0493", productId: "AJ-SKU-384", productName: "2.5kg×4袋装馅饼经典款", machineId: "FM-047",
    machineName: "春卷成型线", singleCapacity: 1060, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 51,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0494", productId: "AJ-SKU-385", productName: "1kg×10袋装黑椒牛肉条大客户版", machineId: "FM-028",
    machineName: "藕盒成型线", singleCapacity: 587, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 107,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0495", productId: "AJ-SKU-386", productName: "500g×20袋装贡丸大客户版", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 992, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 160,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0496", productId: "AJ-SKU-387", productName: "500g×20袋装酥皮卷经典款", machineId: "FM-045",
    machineName: "馄饨成型线", singleCapacity: 908, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 180,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0497", productId: "AJ-SKU-387", productName: "500g×20袋装酥皮卷经典款", machineId: "FM-042",
    machineName: "馅饼成型线", singleCapacity: 939, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 61,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0498", productId: "AJ-SKU-388", productName: "1kg×10袋装蟹籽福袋轻享装", machineId: "FM-021",
    machineName: "组合丸成型线", singleCapacity: 589, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 67,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0499", productId: "AJ-SKU-389", productName: "1kg×10袋装海鲜组合包家庭装", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 451, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 150,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0500", productId: "AJ-SKU-390", productName: "10片×20袋装酥皮卷", machineId: "FM-060",
    machineName: "年糕成型线", singleCapacity: 1422, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 98,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0501", productId: "AJ-SKU-390", productName: "10片×20袋装酥皮卷", machineId: "FM-059",
    machineName: "年糕成型线", singleCapacity: 1212, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 142,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0502", productId: "AJ-SKU-391", productName: "2.5kg×4袋装贡丸香辣味", machineId: "FM-009",
    machineName: "包心丸成型机", singleCapacity: 1074, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 60,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0503", productId: "AJ-SKU-392", productName: "200g×30袋装小酥肉经典款", machineId: "FM-030",
    machineName: "茄盒成型线", singleCapacity: 810, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 163,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0504", productId: "AJ-SKU-393", productName: "1kg×10袋装香酥鸡块餐饮装", machineId: "FM-032",
    machineName: "鸡排成型线", singleCapacity: 782, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 97,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0505", productId: "AJ-SKU-393", productName: "1kg×10袋装香酥鸡块餐饮装", machineId: "FM-028",
    machineName: "藕盒成型线", singleCapacity: 616, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 50,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0506", productId: "AJ-SKU-394", productName: "240g×20袋装虾味球家庭装", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 1039, defaultMachineCount: 3,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 148,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0507", productId: "AJ-SKU-395", productName: "500g×20袋装春卷经典款", machineId: "FM-047",
    machineName: "春卷成型线", singleCapacity: 743, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 114,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0508", productId: "AJ-SKU-396", productName: "1kg×10袋装培根卷黑椒味", machineId: "FM-024",
    machineName: "盐酥鸡成型线", singleCapacity: 802, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 45,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0509", productId: "AJ-SKU-396", productName: "1kg×10袋装培根卷黑椒味", machineId: "FM-033",
    machineName: "牛排成型线", singleCapacity: 678, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 177,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0510", productId: "AJ-SKU-397", productName: "500g×20袋装香辣鱼丸原味", machineId: "FM-052",
    machineName: "鳕鱼排成型机", singleCapacity: 975, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 125,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0511", productId: "AJ-SKU-397", productName: "500g×20袋装香辣鱼丸原味", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 879, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 43,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0512", productId: "AJ-SKU-398", productName: "350g×20袋装香酥鸡块经典款", machineId: "FM-031",
    machineName: "茄盒成型线", singleCapacity: 813, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 140,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0513", productId: "AJ-SKU-399", productName: "400g×20袋装牛肉馅饼盒马定制", machineId: "FM-058",
    machineName: "米汉堡成型线", singleCapacity: 1177, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 94,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0514", productId: "AJ-SKU-399", productName: "400g×20袋装牛肉馅饼盒马定制", machineId: "FM-045",
    machineName: "馄饨成型线", singleCapacity: 1123, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 143,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0515", productId: "AJ-SKU-400", productName: "800g×12袋装蔬菜丸香辣味", machineId: "FM-056",
    machineName: "蔬菜丸成型机", singleCapacity: 562, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 177,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0516", productId: "AJ-SKU-401", productName: "2.5kg×4袋装玉米肠餐饮装", machineId: "FM-026",
    machineName: "鸡柳成型线", singleCapacity: 668, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 51,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0517", productId: "AJ-SKU-402", productName: "2.5kg×4袋装盐酥鸡藤椒味", machineId: "FM-036",
    machineName: "调理串成型线", singleCapacity: 732, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 133,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0518", productId: "AJ-SKU-402", productName: "2.5kg×4袋装盐酥鸡藤椒味", machineId: "FM-035",
    machineName: "调理串成型线", singleCapacity: 722, defaultMachineCount: 1,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 179,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0519", productId: "AJ-SKU-403", productName: "200g×30袋装黑椒牛肉条黑椒味", machineId: "FM-055",
    machineName: "玉米肠成型线", singleCapacity: 520, defaultMachineCount: 2,
    maxMachineCount: 5, minMachineCount: 2, bonusPerMachine: 92,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0520", productId: "AJ-SKU-404", productName: "800g×12袋装蔬菜丸区域装", machineId: "FM-004",
    machineName: "鱼豆腐成型机", singleCapacity: 431, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 136,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0521", productId: "AJ-SKU-405", productName: "2.5kg×4袋装小酥肉轻享装", machineId: "FM-025",
    machineName: "鸡柳成型线", singleCapacity: 945, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 176,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0522", productId: "AJ-SKU-406", productName: "5kg×2袋装藕盒香辣味", machineId: "FM-036",
    machineName: "调理串成型线", singleCapacity: 537, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 93,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0523", productId: "AJ-SKU-407", productName: "500g×20袋装虾滑餐饮装", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 762, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 120,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0524", productId: "AJ-SKU-407", productName: "500g×20袋装虾滑餐饮装", machineId: "FM-051",
    machineName: "龙虾球成型机", singleCapacity: 741, defaultMachineCount: 1,
    maxMachineCount: 1, minMachineCount: 1, bonusPerMachine: 165,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0525", productId: "AJ-SKU-408", productName: "500g×20袋装汤圆藤椒味", machineId: "FM-041",
    machineName: "烧麦成型线", singleCapacity: 1074, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 88,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0526", productId: "AJ-SKU-409", productName: "20片×10袋装牛肉馅饼香辣味", machineId: "FM-047",
    machineName: "春卷成型线", singleCapacity: 717, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 90,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0527", productId: "AJ-SKU-410", productName: "5kg×2袋装鸡柳餐饮装", machineId: "FM-031",
    machineName: "茄盒成型线", singleCapacity: 521, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 97,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0528", productId: "AJ-SKU-410", productName: "5kg×2袋装鸡柳餐饮装", machineId: "FM-030",
    machineName: "茄盒成型线", singleCapacity: 582, defaultMachineCount: 1,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 47,
    mainWorkshop: "WS03"
  },
  {
    id: "FS-0529", productId: "AJ-SKU-411", productName: "1kg×10袋装鱼肉丸经典款", machineId: "FM-015",
    machineName: "贡丸成型机", singleCapacity: 1018, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 87,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0530", productId: "AJ-SKU-411", productName: "1kg×10袋装鱼肉丸经典款", machineId: "FM-012",
    machineName: "肉丸成型机", singleCapacity: 882, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 99,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0531", productId: "AJ-SKU-412", productName: "500g×20袋装蟹籽虾滑藤椒味", machineId: "FM-016",
    machineName: "虾味球成型机", singleCapacity: 379, defaultMachineCount: 1,
    maxMachineCount: 4, minMachineCount: 1, bonusPerMachine: 47,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0532", productId: "AJ-SKU-413", productName: "500g×20袋装鱼丸原味", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 929, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 2, bonusPerMachine: 171,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0533", productId: "AJ-SKU-414", productName: "2.5kg×4袋装海鲜组合包藤椒味", machineId: "FM-005",
    machineName: "鱼豆腐成型机", singleCapacity: 791, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 96,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0534", productId: "AJ-SKU-415", productName: "1kg×10袋装鱼竹轮盒马定制", machineId: "FM-002",
    machineName: "鱼丸成型机", singleCapacity: 1348, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 1, bonusPerMachine: 89,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0535", productId: "AJ-SKU-416", productName: "120g×50袋装黄金鱼板盒马定制", machineId: "FM-007",
    machineName: "蟹排成型机", singleCapacity: 1133, defaultMachineCount: 2,
    maxMachineCount: 4, minMachineCount: 2, bonusPerMachine: 180,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0536", productId: "AJ-SKU-416", productName: "120g×50袋装黄金鱼板盒马定制", machineId: "FM-006",
    machineName: "蟹排成型机", singleCapacity: 763, defaultMachineCount: 2,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 72,
    mainWorkshop: "WS01"
  },
  {
    id: "FS-0537", productId: "AJ-SKU-417", productName: "300g×30袋装关东煮组合", machineId: "FM-011",
    machineName: "包心丸成型机", singleCapacity: 612, defaultMachineCount: 3,
    maxMachineCount: 5, minMachineCount: 1, bonusPerMachine: 106,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0538", productId: "AJ-SKU-418", productName: "500g×20袋装鱼籽福袋轻享装", machineId: "FM-049",
    machineName: "芝士丸成型机", singleCapacity: 722, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 50,
    mainWorkshop: "WS05"
  },
  {
    id: "FS-0539", productId: "AJ-SKU-418", productName: "500g×20袋装鱼籽福袋轻享装", machineId: "FM-048",
    machineName: "芝士丸成型机", singleCapacity: 872, defaultMachineCount: 3,
    maxMachineCount: 3, minMachineCount: 2, bonusPerMachine: 102,
    mainWorkshop: "WS02"
  },
  {
    id: "FS-0540", productId: "AJ-SKU-419", productName: "500g×20袋装猪肉大葱水饺餐饮装", machineId: "FM-044",
    machineName: "汤圆成型线", singleCapacity: 1371, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 110,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0541", productId: "AJ-SKU-420", productName: "10片×20袋装烧麦轻享装", machineId: "FM-044",
    machineName: "汤圆成型线", singleCapacity: 806, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 90,
    mainWorkshop: "WS04"
  },
  {
    id: "FS-0542", productId: "AJ-SKU-420", productName: "10片×20袋装烧麦轻享装", machineId: "FM-040",
    machineName: "面点成型线", singleCapacity: 1366, defaultMachineCount: 2,
    maxMachineCount: 2, minMachineCount: 1, bonusPerMachine: 49,
    mainWorkshop: "WS05"
  }
];

/* ── 速冻速度关联 ── */
export const freezingSpeeds: FreezingSpeed[] = [
  {
    id: "FSD-0001", productId: "AJ-SKU-001", productName: "1kg×10袋装脆骨丸黑椒味", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1454, nightCapacity: 1362,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0002", productId: "AJ-SKU-002", productName: "200g×30袋装牛肉丸原味", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1005, nightCapacity: 861,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0003", productId: "AJ-SKU-003", productName: "1kg×10袋装鲜虾滑餐饮装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1218, nightCapacity: 1244,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0004", productId: "AJ-SKU-004", productName: "1kg×10袋装贡丸轻享装", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1790, nightCapacity: 1574,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0005", productId: "AJ-SKU-005", productName: "2.5kg×4袋装茄盒出口版", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 726, nightCapacity: 628,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0006", productId: "AJ-SKU-006", productName: "400g×20袋装墨鱼丸餐饮装", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1211, nightCapacity: 1223,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0007", productId: "AJ-SKU-007", productName: "200g×30袋装牛排", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1156, nightCapacity: 1089,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0008", productId: "AJ-SKU-008", productName: "400g×20袋装鱼肉丸香辣味", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1437, nightCapacity: 1264,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0009", productId: "AJ-SKU-009", productName: "5kg×2袋装包心鱼丸香辣味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1533, nightCapacity: 1494,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0010", productId: "AJ-SKU-009", productName: "5kg×2袋装包心鱼丸香辣味", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1435, nightCapacity: 1498,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0011", productId: "AJ-SKU-010", productName: "20片×10袋装烧麦餐饮装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1323, nightCapacity: 1260,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0012", productId: "AJ-SKU-011", productName: "300g×30袋装香辣虾滑家庭装", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1376, nightCapacity: 1251,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0013", productId: "AJ-SKU-012", productName: "500g×20袋装鱼豆腐家庭装", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1294, nightCapacity: 1161,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0014", productId: "AJ-SKU-013", productName: "1kg×10袋装海鲜组合包藤椒味", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1271, nightCapacity: 1289,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0015", productId: "AJ-SKU-014", productName: "200g×30袋装火山石烤肠香辣味", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 884, nightCapacity: 906,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0016", productId: "AJ-SKU-015", productName: "2.5kg×4袋装小酥肉香辣味", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 1020, nightCapacity: 1053,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0017", productId: "AJ-SKU-016", productName: "2.5kg×4袋装丸类组合包黑椒味", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1100, nightCapacity: 1126,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0018", productId: "AJ-SKU-017", productName: "500g×20袋装鱼肉丸藤椒味", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1622, nightCapacity: 1693,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0019", productId: "AJ-SKU-018", productName: "350g×20袋装玉米肠", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1190, nightCapacity: 1209,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0020", productId: "AJ-SKU-019", productName: "5kg×2袋装墨鱼丸香辣味", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1872, nightCapacity: 1797,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0021", productId: "AJ-SKU-020", productName: "800g×12袋装丸类组合包盒马定制", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1242, nightCapacity: 1088,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0022", productId: "AJ-SKU-021", productName: "1kg×10袋装芝士肉丸藤椒味", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1541, nightCapacity: 1505,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0023", productId: "AJ-SKU-022", productName: "1kg×10袋装龙虾球经典款", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1095, nightCapacity: 1031,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0024", productId: "AJ-SKU-023", productName: "350g×20袋装小酥肉盒马定制", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 1246, nightCapacity: 1171,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0025", productId: "AJ-SKU-023", productName: "350g×20袋装小酥肉盒马定制", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 995, nightCapacity: 1003,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0026", productId: "AJ-SKU-024", productName: "500g×20袋装米汉堡餐饮装", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1184, nightCapacity: 1201,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0027", productId: "AJ-SKU-025", productName: "240g×20袋装鱼竹轮香辣味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1873, nightCapacity: 1587,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0028", productId: "AJ-SKU-026", productName: "2.5kg×4袋装鲜虾滑家庭装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1067, nightCapacity: 1000,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0029", productId: "AJ-SKU-026", productName: "2.5kg×4袋装鲜虾滑家庭装", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1201, nightCapacity: 1185,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0030", productId: "AJ-SKU-027", productName: "500g×20袋装藕盒", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 1510, nightCapacity: 1427,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0031", productId: "AJ-SKU-027", productName: "500g×20袋装藕盒", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 1343, nightCapacity: 1403,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0032", productId: "AJ-SKU-028", productName: "1kg×10袋装牛肉馅饼藤椒味", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 814, nightCapacity: 751,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0033", productId: "AJ-SKU-029", productName: "10片×20袋装葱油饼盒马定制", machineId: "FZ-024",
    machineName: "连续速冻线", dayCapacity: 1185, nightCapacity: 1128,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0034", productId: "AJ-SKU-030", productName: "2.5kg×4袋装盐酥鸡黑椒味", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 1397, nightCapacity: 1430,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0035", productId: "AJ-SKU-031", productName: "400g×20袋装包心鱼丸轻享装", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1502, nightCapacity: 1318,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0036", productId: "AJ-SKU-031", productName: "400g×20袋装包心鱼丸轻享装", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1679, nightCapacity: 1401,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0037", productId: "AJ-SKU-032", productName: "2.5kg×4袋装汤圆盒马定制", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1007, nightCapacity: 1053,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0038", productId: "AJ-SKU-033", productName: "1kg×10袋装手抓饼家庭装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1335, nightCapacity: 1238,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0039", productId: "AJ-SKU-034", productName: "1kg×10袋装年糕餐饮装", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 1258, nightCapacity: 1285,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0040", productId: "AJ-SKU-035", productName: "400g×20袋装馅饼黑椒味", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1054, nightCapacity: 1075,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0041", productId: "AJ-SKU-035", productName: "400g×20袋装馅饼黑椒味", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1082, nightCapacity: 1053,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0042", productId: "AJ-SKU-036", productName: "200g×30袋装黄金鱼板藤椒味", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 932, nightCapacity: 865,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0043", productId: "AJ-SKU-037", productName: "1kg×10袋装鱼肉丸香辣味", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1064, nightCapacity: 1078,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0044", productId: "AJ-SKU-038", productName: "6kg×1零称鱼丸", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1754, nightCapacity: 1601,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0045", productId: "AJ-SKU-039", productName: "6kg×1零称鱼排大客户版", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 976, nightCapacity: 970,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0046", productId: "AJ-SKU-039", productName: "6kg×1零称鱼排大客户版", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1287, nightCapacity: 1345,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0047", productId: "AJ-SKU-040", productName: "350g×20袋装火山石烤肠原味", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 1087, nightCapacity: 1047,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0048", productId: "AJ-SKU-041", productName: "200g×30袋装鱼竹轮大客户版", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1060, nightCapacity: 889,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0049", productId: "AJ-SKU-041", productName: "200g×30袋装鱼竹轮大客户版", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1475, nightCapacity: 1225,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0050", productId: "AJ-SKU-042", productName: "1kg×10袋装鱼肉丸原味", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1831, nightCapacity: 1615,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0051", productId: "AJ-SKU-043", productName: "300g×30袋装鱼籽虾滑盒马定制", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1183, nightCapacity: 1166,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0052", productId: "AJ-SKU-044", productName: "500g×20袋装黑椒牛肉条出口版", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 1375, nightCapacity: 1240,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0053", productId: "AJ-SKU-045", productName: "1kg×10袋装蟹籽福袋香辣味", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1507, nightCapacity: 1578,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0054", productId: "AJ-SKU-046", productName: "2.5kg×4袋装包心鱼丸轻享装", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1384, nightCapacity: 1146,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0055", productId: "AJ-SKU-047", productName: "1kg×10袋装香辣鱼丸家庭装", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1542, nightCapacity: 1506,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0056", productId: "AJ-SKU-048", productName: "200g×30袋装茄盒盒马定制", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1135, nightCapacity: 1147,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0057", productId: "AJ-SKU-049", productName: "500g×20袋装培根卷出口版", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1465, nightCapacity: 1357,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0058", productId: "AJ-SKU-050", productName: "1kg×10袋装火锅组合丸香辣味", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1065, nightCapacity: 1051,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0059", productId: "AJ-SKU-051", productName: "2.5kg×4袋装蒸饺出口版", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1537, nightCapacity: 1380,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0060", productId: "AJ-SKU-052", productName: "2.5kg×4袋装脆骨丸盒马定制", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1894, nightCapacity: 1695,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0061", productId: "AJ-SKU-053", productName: "1kg×10袋装黑椒牛肉条经典款", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1316, nightCapacity: 1083,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0062", productId: "AJ-SKU-054", productName: "150g×40袋装虾滑出口版", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1093, nightCapacity: 917,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0063", productId: "AJ-SKU-055", productName: "2.5kg×4袋装香辣虾滑黑椒味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 859, nightCapacity: 792,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0064", productId: "AJ-SKU-056", productName: "1kg×10袋装鱼豆腐黑椒味", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1845, nightCapacity: 1898,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0065", productId: "AJ-SKU-057", productName: "500g×20袋装鳕鱼排", machineId: "FZ-016",
    machineName: "特通品速冻线", dayCapacity: 1119, nightCapacity: 919,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0066", productId: "AJ-SKU-058", productName: "200g×30袋装鱼丸出口版", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1555, nightCapacity: 1391,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0067", productId: "AJ-SKU-059", productName: "500g×20袋装虾滑家庭装", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1437, nightCapacity: 1336,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0068", productId: "AJ-SKU-059", productName: "500g×20袋装虾滑家庭装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1253, nightCapacity: 1279,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0069", productId: "AJ-SKU-060", productName: "5kg×2袋装猪肉丸香辣味", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1004, nightCapacity: 951,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0070", productId: "AJ-SKU-061", productName: "5kg×2袋装奥尔良鸡柳黑椒味", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 1453, nightCapacity: 1414,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0071", productId: "AJ-SKU-062", productName: "500g×20袋装鱼豆腐大客户版", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1716, nightCapacity: 1630,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0072", productId: "AJ-SKU-063", productName: "10片×20袋装猪肉大葱水饺出口版", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 880, nightCapacity: 821,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0073", productId: "AJ-SKU-063", productName: "10片×20袋装猪肉大葱水饺出口版", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 1504, nightCapacity: 1478,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0074", productId: "AJ-SKU-064", productName: "300g×30袋装香辣虾滑零售装", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1598, nightCapacity: 1316,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0075", productId: "AJ-SKU-064", productName: "300g×30袋装香辣虾滑零售装", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1179, nightCapacity: 1052,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0076", productId: "AJ-SKU-065", productName: "200g×30袋装虾味球家庭装", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1240, nightCapacity: 1297,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0077", productId: "AJ-SKU-066", productName: "200g×30袋装黄金鱼板香辣味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 943, nightCapacity: 989,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0078", productId: "AJ-SKU-067", productName: "200g×30袋装牛排出口版", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1444, nightCapacity: 1406,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0079", productId: "AJ-SKU-068", productName: "300g×30袋装丸类组合包出口版", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 723, nightCapacity: 654,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0080", productId: "AJ-SKU-069", productName: "200g×30袋装包心鱼丸餐饮装", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1585, nightCapacity: 1544,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0081", productId: "AJ-SKU-070", productName: "2.5kg×4袋装麻辣烫组合家庭装", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1468, nightCapacity: 1389,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0082", productId: "AJ-SKU-070", productName: "2.5kg×4袋装麻辣烫组合家庭装", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 958, nightCapacity: 801,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0083", productId: "AJ-SKU-071", productName: "200g×30袋装火山石烤肠经典款", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 1550, nightCapacity: 1582,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0084", productId: "AJ-SKU-072", productName: "120g×50袋装鱼丸家庭装", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1404, nightCapacity: 1435,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0085", productId: "AJ-SKU-073", productName: "500g×20袋装小酥肉轻享装", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 895, nightCapacity: 791,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0086", productId: "AJ-SKU-074", productName: "400g×20袋装牛肉馅饼轻享装", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 1433, nightCapacity: 1310,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0087", productId: "AJ-SKU-075", productName: "5kg×2袋装小酥肉经典款", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 1000, nightCapacity: 1039,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0088", productId: "AJ-SKU-076", productName: "200g×30袋装脆骨丸", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1622, nightCapacity: 1696,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0089", productId: "AJ-SKU-077", productName: "1kg×10袋装黄金鱼板原味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1780, nightCapacity: 1490,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0090", productId: "AJ-SKU-077", productName: "1kg×10袋装黄金鱼板原味", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1383, nightCapacity: 1414,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0091", productId: "AJ-SKU-078", productName: "2.5kg×4袋装蔬菜丸藤椒味", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1320, nightCapacity: 1315,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0092", productId: "AJ-SKU-079", productName: "200g×30袋装芝士肉丸大客户版", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1813, nightCapacity: 1656,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0093", productId: "AJ-SKU-079", productName: "200g×30袋装芝士肉丸大客户版", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1455, nightCapacity: 1334,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0094", productId: "AJ-SKU-080", productName: "1kg×10袋装蟹味排黑椒味", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1396, nightCapacity: 1294,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0095", productId: "AJ-SKU-080", productName: "1kg×10袋装蟹味排黑椒味", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 902, nightCapacity: 887,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0096", productId: "AJ-SKU-081", productName: "10片×20袋装牛肉馅饼香辣味", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1329, nightCapacity: 1306,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0097", productId: "AJ-SKU-081", productName: "10片×20袋装牛肉馅饼香辣味", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1244, nightCapacity: 1189,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0098", productId: "AJ-SKU-082", productName: "2.5kg×4袋装蟹籽虾滑出口版", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1547, nightCapacity: 1305,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0099", productId: "AJ-SKU-083", productName: "1kg×10袋装鸡排出口版", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1004, nightCapacity: 941,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0100", productId: "AJ-SKU-083", productName: "1kg×10袋装鸡排出口版", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 716, nightCapacity: 591,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0101", productId: "AJ-SKU-084", productName: "20片×10袋装猪肉大葱水饺盒马定制", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1044, nightCapacity: 1013,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0102", productId: "AJ-SKU-085", productName: "10片×20袋装馄饨经典款", machineId: "FZ-024",
    machineName: "连续速冻线", dayCapacity: 1563, nightCapacity: 1420,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0103", productId: "AJ-SKU-086", productName: "120g×50袋装鱼竹轮香辣味", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1942, nightCapacity: 1934,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0104", productId: "AJ-SKU-087", productName: "400g×20袋装墨鱼丸出口版", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1498, nightCapacity: 1457,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0105", productId: "AJ-SKU-088", productName: "120g×50袋装蟹棒原味", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1598, nightCapacity: 1322,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0106", productId: "AJ-SKU-088", productName: "120g×50袋装蟹棒原味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1522, nightCapacity: 1349,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0107", productId: "AJ-SKU-089", productName: "350g×20袋装盐酥鸡盒马定制", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 1140, nightCapacity: 1158,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0108", productId: "AJ-SKU-090", productName: "2.5kg×4袋装酥皮卷原味", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1641, nightCapacity: 1565,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0109", productId: "AJ-SKU-091", productName: "500g×20袋装培根卷", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 948, nightCapacity: 982,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0110", productId: "AJ-SKU-092", productName: "1kg×10袋装酥皮卷家庭装", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1722, nightCapacity: 1642,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0111", productId: "AJ-SKU-093", productName: "400g×20袋装芝士肉丸盒马定制", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1790, nightCapacity: 1698,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0112", productId: "AJ-SKU-094", productName: "1kg×10袋装香辣虾滑大客户版", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1039, nightCapacity: 972,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0113", productId: "AJ-SKU-095", productName: "240g×20袋装鱼竹轮原味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1121, nightCapacity: 1037,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0114", productId: "AJ-SKU-096", productName: "1kg×10袋装鱼排", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1555, nightCapacity: 1321,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0115", productId: "AJ-SKU-097", productName: "1kg×10袋装牛肉丸经典款", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1686, nightCapacity: 1716,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0116", productId: "AJ-SKU-098", productName: "1kg×10袋装芝士鱼丸原味", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1986, nightCapacity: 1872,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0117", productId: "AJ-SKU-098", productName: "1kg×10袋装芝士鱼丸原味", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1448, nightCapacity: 1476,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0118", productId: "AJ-SKU-099", productName: "2.5kg×4袋装芝士虾滑大客户版", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1275, nightCapacity: 1130,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0119", productId: "AJ-SKU-100", productName: "1kg×10袋装鱼籽福袋香辣味", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 932, nightCapacity: 870,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0120", productId: "AJ-SKU-101", productName: "120g×50袋装鱼丸", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1273, nightCapacity: 1114,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0121", productId: "AJ-SKU-102", productName: "500g×20袋装鲜虾滑轻享装", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 958, nightCapacity: 829,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0122", productId: "AJ-SKU-102", productName: "500g×20袋装鲜虾滑轻享装", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 833, nightCapacity: 686,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0123", productId: "AJ-SKU-103", productName: "200g×30袋装撒尿肉丸经典款", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 944, nightCapacity: 849,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0124", productId: "AJ-SKU-104", productName: "500g×20袋装鱼豆腐升级款", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1995, nightCapacity: 2049,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0125", productId: "AJ-SKU-105", productName: "500g×20袋装贡丸餐饮装", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1806, nightCapacity: 1587,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0126", productId: "AJ-SKU-106", productName: "120g×50袋装龙虾球经典款", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1074, nightCapacity: 1114,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0127", productId: "AJ-SKU-107", productName: "1kg×10袋装鸡排家庭装", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 887, nightCapacity: 854,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0128", productId: "AJ-SKU-108", productName: "6kg×1零称芝士鱼丸大客户版", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1606, nightCapacity: 1346,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0129", productId: "AJ-SKU-109", productName: "200g×30袋装鸡柳大客户版", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 742, nightCapacity: 626,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0130", productId: "AJ-SKU-110", productName: "800g×12袋装关东煮组合盒马定制", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1010, nightCapacity: 1015,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0131", productId: "AJ-SKU-111", productName: "5kg×2袋装鱼肉丸家庭装", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1622, nightCapacity: 1632,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0132", productId: "AJ-SKU-111", productName: "5kg×2袋装鱼肉丸家庭装", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1666, nightCapacity: 1397,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0133", productId: "AJ-SKU-112", productName: "200g×30袋装鱼豆腐黑椒味", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 1795, nightCapacity: 1718,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0134", productId: "AJ-SKU-113", productName: "500g×20袋装酥皮卷家庭装", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 1247, nightCapacity: 1060,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0135", productId: "AJ-SKU-114", productName: "500g×20袋装小酥肉餐饮装", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1137, nightCapacity: 1186,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0136", productId: "AJ-SKU-114", productName: "500g×20袋装小酥肉餐饮装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1447, nightCapacity: 1289,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0137", productId: "AJ-SKU-115", productName: "300g×30袋装麻辣烫组合轻享装", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1127, nightCapacity: 1057,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0138", productId: "AJ-SKU-116", productName: "200g×30袋装香菇贡丸出口版", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1156, nightCapacity: 991,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0139", productId: "AJ-SKU-117", productName: "1kg×10袋装蟹味排香辣味", machineId: "FZ-016",
    machineName: "特通品速冻线", dayCapacity: 968, nightCapacity: 862,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0140", productId: "AJ-SKU-117", productName: "1kg×10袋装蟹味排香辣味", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1429, nightCapacity: 1182,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0141", productId: "AJ-SKU-118", productName: "350g×20袋装奥尔良鸡柳", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1403, nightCapacity: 1371,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0142", productId: "AJ-SKU-119", productName: "120g×50袋装鱼豆腐家庭装", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1869, nightCapacity: 1786,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0143", productId: "AJ-SKU-120", productName: "350g×20袋装玉米肠盒马定制", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1466, nightCapacity: 1371,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0144", productId: "AJ-SKU-120", productName: "350g×20袋装玉米肠盒马定制", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 1476, nightCapacity: 1452,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0145", productId: "AJ-SKU-121", productName: "240g×20袋装香辣鱼丸原味", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1064, nightCapacity: 940,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0146", productId: "AJ-SKU-122", productName: "800g×12袋装丸类组合包经典款", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 797, nightCapacity: 801,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0147", productId: "AJ-SKU-123", productName: "400g×20袋装猪肉丸藤椒味", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1590, nightCapacity: 1377,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0148", productId: "AJ-SKU-123", productName: "400g×20袋装猪肉丸藤椒味", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1350, nightCapacity: 1172,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0149", productId: "AJ-SKU-124", productName: "2.5kg×4袋装牛肉馅饼大客户版", machineId: "FZ-024",
    machineName: "连续速冻线", dayCapacity: 1120, nightCapacity: 1035,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0150", productId: "AJ-SKU-125", productName: "2.5kg×4袋装猪肉丸盒马定制", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1920, nightCapacity: 1972,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0151", productId: "AJ-SKU-125", productName: "2.5kg×4袋装猪肉丸盒马定制", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1072, nightCapacity: 887,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0152", productId: "AJ-SKU-126", productName: "200g×30袋装鸡柳藤椒味", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 1297, nightCapacity: 1280,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0153", productId: "AJ-SKU-126", productName: "200g×30袋装鸡柳藤椒味", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 1358, nightCapacity: 1313,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0154", productId: "AJ-SKU-127", productName: "1kg×10袋装鱼丸轻享装", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 910, nightCapacity: 857,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0155", productId: "AJ-SKU-128", productName: "120g×50袋装鱼排出口版", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1488, nightCapacity: 1330,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0156", productId: "AJ-SKU-129", productName: "300g×30袋装关东煮组合出口版", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1586, nightCapacity: 1480,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0157", productId: "AJ-SKU-130", productName: "1kg×10袋装龙虾球精选款", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 1714, nightCapacity: 1578,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0158", productId: "AJ-SKU-131", productName: "500g×20袋装香辣虾滑轻享装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1163, nightCapacity: 1020,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0159", productId: "AJ-SKU-132", productName: "2.5kg×4袋装锅贴家庭装", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1047, nightCapacity: 983,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0160", productId: "AJ-SKU-132", productName: "2.5kg×4袋装锅贴家庭装", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 1313, nightCapacity: 1186,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0161", productId: "AJ-SKU-133", productName: "20片×10袋装汤圆原味", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 1124, nightCapacity: 1135,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0162", productId: "AJ-SKU-134", productName: "2.5kg×4袋装鱼籽福袋大客户版", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 856, nightCapacity: 716,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0163", productId: "AJ-SKU-135", productName: "350g×20袋装培根卷家庭装", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 1405, nightCapacity: 1295,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0164", productId: "AJ-SKU-136", productName: "2.5kg×4袋装香酥鸡块轻享装", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 1483, nightCapacity: 1320,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0165", productId: "AJ-SKU-137", productName: "300g×30袋装芝士虾滑出口版", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 957, nightCapacity: 801,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0166", productId: "AJ-SKU-138", productName: "5kg×2袋装包心贡丸", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1803, nightCapacity: 1546,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0167", productId: "AJ-SKU-139", productName: "2.5kg×4袋装墨鱼丸经典款", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1933, nightCapacity: 1980,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0168", productId: "AJ-SKU-140", productName: "500g×20袋装虾味球黑椒味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 929, nightCapacity: 811,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0169", productId: "AJ-SKU-141", productName: "150g×40袋装蟹籽虾滑出口版", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1109, nightCapacity: 913,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0170", productId: "AJ-SKU-142", productName: "500g×20袋装葱油饼黑椒味", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 1136, nightCapacity: 991,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0171", productId: "AJ-SKU-143", productName: "1kg×10袋装牛肉馅饼香辣味", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 1071, nightCapacity: 894,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0172", productId: "AJ-SKU-144", productName: "500g×20袋装调理串轻享装", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 1483, nightCapacity: 1437,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0173", productId: "AJ-SKU-144", productName: "500g×20袋装调理串轻享装", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 835, nightCapacity: 830,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0174", productId: "AJ-SKU-145", productName: "2.5kg×4袋装香酥鸡块黑椒味", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 889, nightCapacity: 871,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0175", productId: "AJ-SKU-146", productName: "300g×30袋装鱼籽福袋盒马定制", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 704, nightCapacity: 626,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0176", productId: "AJ-SKU-146", productName: "300g×30袋装鱼籽福袋盒马定制", machineId: "FZ-016",
    machineName: "特通品速冻线", dayCapacity: 1388, nightCapacity: 1145,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0177", productId: "AJ-SKU-147", productName: "2.5kg×4袋装盐酥鸡大客户版", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 878, nightCapacity: 876,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0178", productId: "AJ-SKU-147", productName: "2.5kg×4袋装盐酥鸡大客户版", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 918, nightCapacity: 818,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0179", productId: "AJ-SKU-148", productName: "1kg×10袋装鱼肉丸出口版", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1263, nightCapacity: 1210,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0180", productId: "AJ-SKU-149", productName: "500g×20袋装龙虾球经典款", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1555, nightCapacity: 1457,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0181", productId: "AJ-SKU-149", productName: "500g×20袋装龙虾球经典款", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1365, nightCapacity: 1330,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0182", productId: "AJ-SKU-150", productName: "10片×20袋装馄饨轻享装", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 1264, nightCapacity: 1115,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0183", productId: "AJ-SKU-151", productName: "150g×40袋装虾滑香辣味", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1005, nightCapacity: 836,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0184", productId: "AJ-SKU-152", productName: "500g×20袋装牛肉馅饼出口版", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1272, nightCapacity: 1189,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0185", productId: "AJ-SKU-153", productName: "1kg×10袋装关东煮组合香辣味", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 901, nightCapacity: 878,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0186", productId: "AJ-SKU-153", productName: "1kg×10袋装关东煮组合香辣味", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 943, nightCapacity: 826,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0187", productId: "AJ-SKU-154", productName: "200g×30袋装培根卷餐饮装", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 1599, nightCapacity: 1615,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0188", productId: "AJ-SKU-155", productName: "2.5kg×4袋装海胆包", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 925, nightCapacity: 800,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0189", productId: "AJ-SKU-156", productName: "300g×30袋装香辣虾滑盒马定制", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1369, nightCapacity: 1325,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0190", productId: "AJ-SKU-157", productName: "2.5kg×4袋装馅饼黑椒味", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1719, nightCapacity: 1708,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0191", productId: "AJ-SKU-158", productName: "5kg×2袋装火山石烤肠原味", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1340, nightCapacity: 1374,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0192", productId: "AJ-SKU-159", productName: "200g×30袋装芝士肉丸盒马定制", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1754, nightCapacity: 1742,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0193", productId: "AJ-SKU-160", productName: "20片×10袋装蒸饺餐饮装", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 841, nightCapacity: 831,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0194", productId: "AJ-SKU-161", productName: "500g×20袋装黄金鱼板藤椒味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1133, nightCapacity: 1010,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0195", productId: "AJ-SKU-161", productName: "500g×20袋装黄金鱼板藤椒味", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1930, nightCapacity: 1685,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0196", productId: "AJ-SKU-162", productName: "350g×20袋装藕盒出口版", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 1022, nightCapacity: 911,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0197", productId: "AJ-SKU-162", productName: "350g×20袋装藕盒出口版", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 1208, nightCapacity: 1045,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0198", productId: "AJ-SKU-163", productName: "2.5kg×4袋装馄饨家庭装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 936, nightCapacity: 807,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0199", productId: "AJ-SKU-164", productName: "240g×20袋装虾味球藤椒味", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1267, nightCapacity: 1141,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0200", productId: "AJ-SKU-164", productName: "240g×20袋装虾味球藤椒味", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 954, nightCapacity: 798,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0201", productId: "AJ-SKU-165", productName: "2.5kg×4袋装麻辣烫组合", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 969, nightCapacity: 943,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0202", productId: "AJ-SKU-166", productName: "350g×20袋装鸡柳香辣味", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 724, nightCapacity: 724,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0203", productId: "AJ-SKU-167", productName: "240g×20袋装黄金鱼板", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1151, nightCapacity: 1012,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0204", productId: "AJ-SKU-167", productName: "240g×20袋装黄金鱼板", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1491, nightCapacity: 1489,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0205", productId: "AJ-SKU-168", productName: "1kg×10袋装关东煮组合盒马定制", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 944, nightCapacity: 948,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0206", productId: "AJ-SKU-169", productName: "6kg×1零称蟹味排经典款", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1831, nightCapacity: 1882,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0207", productId: "AJ-SKU-169", productName: "6kg×1零称蟹味排经典款", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1522, nightCapacity: 1343,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0208", productId: "AJ-SKU-170", productName: "5kg×2袋装藕盒经典款", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1520, nightCapacity: 1442,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0209", productId: "AJ-SKU-171", productName: "500g×20袋装麻辣烫组合经典款", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1062, nightCapacity: 1004,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0210", productId: "AJ-SKU-172", productName: "1kg×10袋装虾味球轻享装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1222, nightCapacity: 1272,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0211", productId: "AJ-SKU-173", productName: "2.5kg×4袋装蒸饺餐饮装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 834, nightCapacity: 736,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0212", productId: "AJ-SKU-174", productName: "5kg×2袋装猪肉丸轻享装", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1467, nightCapacity: 1435,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0213", productId: "AJ-SKU-174", productName: "5kg×2袋装猪肉丸轻享装", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1424, nightCapacity: 1253,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0214", productId: "AJ-SKU-175", productName: "1kg×10袋装藕盒经典款", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1071, nightCapacity: 1029,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0215", productId: "AJ-SKU-176", productName: "240g×20袋装龙虾球黑椒味", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1576, nightCapacity: 1548,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0216", productId: "AJ-SKU-177", productName: "120g×50袋装香辣鱼丸大客户版", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1712, nightCapacity: 1531,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0217", productId: "AJ-SKU-178", productName: "500g×20袋装盐酥鸡黑椒味", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1001, nightCapacity: 937,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0218", productId: "AJ-SKU-179", productName: "500g×20袋装酥皮卷", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 1100, nightCapacity: 923,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0219", productId: "AJ-SKU-180", productName: "20片×10袋装年糕黑椒味", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 969, nightCapacity: 922,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0220", productId: "AJ-SKU-181", productName: "500g×20袋装鸡排香辣味", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 968, nightCapacity: 913,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0221", productId: "AJ-SKU-182", productName: "2.5kg×4袋装藕盒", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1024, nightCapacity: 981,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0222", productId: "AJ-SKU-183", productName: "200g×30袋装撒尿肉丸原味", machineId: "FZ-016",
    machineName: "特通品速冻线", dayCapacity: 1652, nightCapacity: 1382,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0223", productId: "AJ-SKU-184", productName: "5kg×2袋装牛排", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 1351, nightCapacity: 1302,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0224", productId: "AJ-SKU-185", productName: "200g×30袋装奥尔良鸡柳家庭装", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 753, nightCapacity: 705,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0225", productId: "AJ-SKU-185", productName: "200g×30袋装奥尔良鸡柳家庭装", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 979, nightCapacity: 1006,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0226", productId: "AJ-SKU-186", productName: "240g×20袋装鱼丸经典款", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1832, nightCapacity: 1665,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0227", productId: "AJ-SKU-187", productName: "5kg×2袋装黑椒牛肉条香辣味", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 1021, nightCapacity: 897,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0228", productId: "AJ-SKU-188", productName: "200g×30袋装鳕鱼排香辣味", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1394, nightCapacity: 1316,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0229", productId: "AJ-SKU-189", productName: "6kg×1零称芝士鱼丸家庭装", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1809, nightCapacity: 1611,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0230", productId: "AJ-SKU-190", productName: "5kg×2袋装火山石烤肠家庭装", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1167, nightCapacity: 1136,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0231", productId: "AJ-SKU-191", productName: "400g×20袋装馅饼经典款", machineId: "FZ-024",
    machineName: "连续速冻线", dayCapacity: 973, nightCapacity: 1004,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0232", productId: "AJ-SKU-192", productName: "200g×30袋装香酥鸡块餐饮装", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1453, nightCapacity: 1288,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0233", productId: "AJ-SKU-192", productName: "200g×30袋装香酥鸡块餐饮装", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 939, nightCapacity: 880,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0234", productId: "AJ-SKU-193", productName: "2.5kg×4袋装香菇贡丸黑椒味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1815, nightCapacity: 1882,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0235", productId: "AJ-SKU-194", productName: "5kg×2袋装培根卷", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1148, nightCapacity: 955,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0236", productId: "AJ-SKU-195", productName: "1kg×10袋装虾滑出口版", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 936, nightCapacity: 791,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0237", productId: "AJ-SKU-195", productName: "1kg×10袋装虾滑出口版", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 774, nightCapacity: 641,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0238", productId: "AJ-SKU-196", productName: "5kg×2袋装藕盒藤椒味", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 1095, nightCapacity: 962,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0239", productId: "AJ-SKU-197", productName: "800g×12袋装鱼籽福袋大客户版", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 845, nightCapacity: 696,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0240", productId: "AJ-SKU-197", productName: "800g×12袋装鱼籽福袋大客户版", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 704, nightCapacity: 702,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0241", productId: "AJ-SKU-198", productName: "120g×50袋装龙虾球黑椒味", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1730, nightCapacity: 1717,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0242", productId: "AJ-SKU-199", productName: "240g×20袋装芝士鱼丸家庭装", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1974, nightCapacity: 1936,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0243", productId: "AJ-SKU-200", productName: "2.5kg×4袋装馅饼B版", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1063, nightCapacity: 1099,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0244", productId: "AJ-SKU-201", productName: "1kg×10袋装鲜虾滑经典款", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1248, nightCapacity: 1283,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0245", productId: "AJ-SKU-202", productName: "300g×30袋装鱼籽虾滑黑椒味", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 937, nightCapacity: 768,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0246", productId: "AJ-SKU-203", productName: "1kg×10袋装海鲜组合包黑椒味", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1247, nightCapacity: 1169,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0247", productId: "AJ-SKU-204", productName: "500g×20袋装鱼竹轮香辣味", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1690, nightCapacity: 1513,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0248", productId: "AJ-SKU-205", productName: "500g×20袋装烧麦盒马定制", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 945, nightCapacity: 842,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0249", productId: "AJ-SKU-206", productName: "500g×20袋装培根卷B版", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 1218, nightCapacity: 1123,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0250", productId: "AJ-SKU-207", productName: "2.5kg×4袋装墨鱼丸藤椒味", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1261, nightCapacity: 1198,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0251", productId: "AJ-SKU-207", productName: "2.5kg×4袋装墨鱼丸藤椒味", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1840, nightCapacity: 1873,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0252", productId: "AJ-SKU-208", productName: "200g×30袋装贡丸黑椒味", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1231, nightCapacity: 1114,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0253", productId: "AJ-SKU-209", productName: "200g×30袋装黄金鱼板经典款", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1933, nightCapacity: 1901,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0254", productId: "AJ-SKU-210", productName: "200g×30袋装小酥肉香辣味", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 858, nightCapacity: 774,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0255", productId: "AJ-SKU-210", productName: "200g×30袋装小酥肉香辣味", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 950, nightCapacity: 912,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0256", productId: "AJ-SKU-211", productName: "500g×20袋装小酥肉盒马定制", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1000, nightCapacity: 850,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0257", productId: "AJ-SKU-212", productName: "500g×20袋装蟹籽福袋经典款", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1478, nightCapacity: 1385,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0258", productId: "AJ-SKU-213", productName: "1kg×10袋装芝士鱼丸盒马定制", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1136, nightCapacity: 1140,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0259", productId: "AJ-SKU-214", productName: "200g×30袋装包心鱼丸藤椒味", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1585, nightCapacity: 1352,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0260", productId: "AJ-SKU-215", productName: "10片×20袋装牛肉馅饼轻享装", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1227, nightCapacity: 1283,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0261", productId: "AJ-SKU-216", productName: "6kg×1零称芝士鱼丸B版", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1114, nightCapacity: 1065,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0262", productId: "AJ-SKU-217", productName: "1kg×10袋装香菇贡丸餐饮装", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1577, nightCapacity: 1502,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0263", productId: "AJ-SKU-217", productName: "1kg×10袋装香菇贡丸餐饮装", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1216, nightCapacity: 1187,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0264", productId: "AJ-SKU-218", productName: "500g×20袋装包心鱼丸餐饮装", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1242, nightCapacity: 1138,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0265", productId: "AJ-SKU-219", productName: "2.5kg×4袋装葱油饼餐饮装", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1294, nightCapacity: 1183,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0266", productId: "AJ-SKU-220", productName: "2.5kg×4袋装茄盒盒马定制", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 981, nightCapacity: 964,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0267", productId: "AJ-SKU-221", productName: "400g×20袋装香菇贡丸黑椒味", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1004, nightCapacity: 963,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0268", productId: "AJ-SKU-222", productName: "1kg×10袋装龙虾球轻享装", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1015, nightCapacity: 883,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0269", productId: "AJ-SKU-223", productName: "1kg×10袋装墨鱼丸轻享装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1687, nightCapacity: 1540,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0270", productId: "AJ-SKU-223", productName: "1kg×10袋装墨鱼丸轻享装", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1686, nightCapacity: 1658,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0271", productId: "AJ-SKU-224", productName: "2.5kg×4袋装鱼籽福袋盒马定制", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1293, nightCapacity: 1161,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0272", productId: "AJ-SKU-225", productName: "500g×20袋装香菇贡丸轻享装", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1288, nightCapacity: 1209,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0273", productId: "AJ-SKU-226", productName: "1kg×10袋装虾滑餐饮装", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 870, nightCapacity: 911,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0274", productId: "AJ-SKU-227", productName: "2.5kg×4袋装香辣虾滑藤椒味", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1244, nightCapacity: 1302,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0275", productId: "AJ-SKU-228", productName: "500g×20袋装海胆包原味", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1076, nightCapacity: 992,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0276", productId: "AJ-SKU-229", productName: "400g×20袋装蒸饺原味", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 1504, nightCapacity: 1375,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0277", productId: "AJ-SKU-229", productName: "400g×20袋装蒸饺原味", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 809, nightCapacity: 799,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0278", productId: "AJ-SKU-230", productName: "5kg×2袋装脆骨丸家庭装", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1475, nightCapacity: 1378,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0279", productId: "AJ-SKU-231", productName: "2.5kg×4袋装香菇贡丸盒马定制", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1327, nightCapacity: 1119,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0280", productId: "AJ-SKU-232", productName: "10片×20袋装烧麦黑椒味", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 983, nightCapacity: 896,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0281", productId: "AJ-SKU-233", productName: "500g×20袋装培根卷黑椒味", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 790, nightCapacity: 714,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0282", productId: "AJ-SKU-234", productName: "2.5kg×4袋装鲜虾滑餐饮装", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 934, nightCapacity: 956,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0283", productId: "AJ-SKU-235", productName: "300g×30袋装丸类组合包原味", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1102, nightCapacity: 991,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0284", productId: "AJ-SKU-235", productName: "300g×30袋装丸类组合包原味", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 893, nightCapacity: 862,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0285", productId: "AJ-SKU-236", productName: "240g×20袋装虾味球餐饮装", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1572, nightCapacity: 1329,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0286", productId: "AJ-SKU-237", productName: "400g×20袋装春卷盒马定制", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1520, nightCapacity: 1359,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0287", productId: "AJ-SKU-238", productName: "2.5kg×4袋装鱼肉丸原味", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1632, nightCapacity: 1688,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0288", productId: "AJ-SKU-238", productName: "2.5kg×4袋装鱼肉丸原味", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1555, nightCapacity: 1296,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0289", productId: "AJ-SKU-239", productName: "500g×20袋装鲜虾滑团餐装", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1595, nightCapacity: 1522,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0290", productId: "AJ-SKU-240", productName: "1kg×10袋装香辣虾滑藤椒味", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1351, nightCapacity: 1245,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0291", productId: "AJ-SKU-241", productName: "1kg×10袋装葱油饼经典款", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1019, nightCapacity: 994,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0292", productId: "AJ-SKU-242", productName: "2.5kg×4袋装包心贡丸藤椒味", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1351, nightCapacity: 1375,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0293", productId: "AJ-SKU-243", productName: "500g×20袋装蟹味排出口版", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1921, nightCapacity: 2000,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0294", productId: "AJ-SKU-244", productName: "240g×20袋装龙虾球团餐装", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1674, nightCapacity: 1698,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0295", productId: "AJ-SKU-244", productName: "240g×20袋装龙虾球团餐装", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1657, nightCapacity: 1582,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0296", productId: "AJ-SKU-245", productName: "200g×30袋装鱼肉丸藤椒味", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1687, nightCapacity: 1641,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0297", productId: "AJ-SKU-246", productName: "500g×20袋装脆皮鸡米花黑椒味", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 1039, nightCapacity: 1083,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0298", productId: "AJ-SKU-247", productName: "5kg×2袋装小酥肉轻享装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1373, nightCapacity: 1347,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0299", productId: "AJ-SKU-247", productName: "5kg×2袋装小酥肉轻享装", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1562, nightCapacity: 1368,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0300", productId: "AJ-SKU-248", productName: "300g×30袋装丸类组合包升级款", machineId: "FZ-016",
    machineName: "特通品速冻线", dayCapacity: 1125, nightCapacity: 1020,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0301", productId: "AJ-SKU-249", productName: "300g×30袋装鱼籽福袋黑椒味", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1574, nightCapacity: 1588,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0302", productId: "AJ-SKU-250", productName: "350g×20袋装玉米肠藤椒味", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 931, nightCapacity: 883,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0303", productId: "AJ-SKU-251", productName: "5kg×2袋装盐酥鸡经典款", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 1471, nightCapacity: 1352,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0304", productId: "AJ-SKU-252", productName: "500g×20袋装茄盒出口版", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1464, nightCapacity: 1439,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0305", productId: "AJ-SKU-253", productName: "500g×20袋装蟹籽虾滑餐饮装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1589, nightCapacity: 1489,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0306", productId: "AJ-SKU-254", productName: "1kg×10袋装海胆包餐饮装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1171, nightCapacity: 988,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0307", productId: "AJ-SKU-255", productName: "1kg×10袋装鱼豆腐", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1418, nightCapacity: 1270,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0308", productId: "AJ-SKU-256", productName: "10片×20袋装米汉堡盒马定制", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 1085, nightCapacity: 1090,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0309", productId: "AJ-SKU-257", productName: "240g×20袋装鱼竹轮经典款", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1425, nightCapacity: 1199,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0310", productId: "AJ-SKU-257", productName: "240g×20袋装鱼竹轮经典款", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1091, nightCapacity: 1105,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0311", productId: "AJ-SKU-258", productName: "20片×10袋装锅贴餐饮装", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 1107, nightCapacity: 1080,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0312", productId: "AJ-SKU-259", productName: "2.5kg×4袋装蔬菜丸餐饮装", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 1303, nightCapacity: 1321,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0313", productId: "AJ-SKU-260", productName: "2.5kg×4袋装香酥鸡块餐饮装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 901, nightCapacity: 746,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0314", productId: "AJ-SKU-260", productName: "2.5kg×4袋装香酥鸡块餐饮装", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 1586, nightCapacity: 1428,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0315", productId: "AJ-SKU-261", productName: "500g×20袋装藕盒餐饮装", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1044, nightCapacity: 1069,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0316", productId: "AJ-SKU-262", productName: "800g×12袋装蟹籽福袋餐饮装", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1082, nightCapacity: 961,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0317", productId: "AJ-SKU-263", productName: "2.5kg×4袋装手抓饼经典款", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1320, nightCapacity: 1179,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0318", productId: "AJ-SKU-264", productName: "800g×12袋装芝士丸餐饮装", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1169, nightCapacity: 1133,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0319", productId: "AJ-SKU-265", productName: "2.5kg×4袋装撒尿肉丸黑椒味", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1383, nightCapacity: 1443,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0320", productId: "AJ-SKU-265", productName: "2.5kg×4袋装撒尿肉丸黑椒味", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1410, nightCapacity: 1232,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0321", productId: "AJ-SKU-266", productName: "350g×20袋装奥尔良鸡柳藤椒味", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1172, nightCapacity: 1040,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0322", productId: "AJ-SKU-267", productName: "1kg×10袋装虾滑香辣味", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 716, nightCapacity: 747,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0323", productId: "AJ-SKU-267", productName: "1kg×10袋装虾滑香辣味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1321, nightCapacity: 1153,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0324", productId: "AJ-SKU-268", productName: "200g×30袋装香菇贡丸盒马定制", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1299, nightCapacity: 1349,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0325", productId: "AJ-SKU-268", productName: "200g×30袋装香菇贡丸盒马定制", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1870, nightCapacity: 1790,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0326", productId: "AJ-SKU-269", productName: "1kg×10袋装藕盒B版", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 1550, nightCapacity: 1546,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0327", productId: "AJ-SKU-270", productName: "240g×20袋装蟹棒原味", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1009, nightCapacity: 942,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0328", productId: "AJ-SKU-271", productName: "1kg×10袋装芝士鱼丸升级款", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1119, nightCapacity: 987,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0329", productId: "AJ-SKU-272", productName: "1kg×10袋装鱼豆腐盒马定制", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1507, nightCapacity: 1506,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0330", productId: "AJ-SKU-273", productName: "200g×30袋装牛排黑椒味", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1077, nightCapacity: 1037,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0331", productId: "AJ-SKU-274", productName: "5kg×2袋装脆骨丸经典款", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1815, nightCapacity: 1660,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0332", productId: "AJ-SKU-275", productName: "240g×20袋装鱼豆腐餐饮装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1591, nightCapacity: 1427,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0333", productId: "AJ-SKU-276", productName: "6kg×1零称鱼丸黑椒味", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1492, nightCapacity: 1393,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0334", productId: "AJ-SKU-277", productName: "200g×30袋装藕盒藤椒味", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 789, nightCapacity: 703,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0335", productId: "AJ-SKU-278", productName: "1kg×10袋装锅贴原味", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 895, nightCapacity: 872,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0336", productId: "AJ-SKU-279", productName: "500g×20袋装藕盒家庭装", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 896, nightCapacity: 901,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0337", productId: "AJ-SKU-280", productName: "1kg×10袋装虾滑", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1409, nightCapacity: 1222,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0338", productId: "AJ-SKU-281", productName: "1kg×10袋装藕盒家庭装", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1006, nightCapacity: 898,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0339", productId: "AJ-SKU-282", productName: "6kg×1零称蟹棒轻享装", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1928, nightCapacity: 1672,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0340", productId: "AJ-SKU-283", productName: "300g×30袋装鲜虾滑盒马定制", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1151, nightCapacity: 1040,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0341", productId: "AJ-SKU-283", productName: "300g×30袋装鲜虾滑盒马定制", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1384, nightCapacity: 1193,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0342", productId: "AJ-SKU-284", productName: "500g×20袋装茄盒香辣味", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 738, nightCapacity: 766,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0343", productId: "AJ-SKU-285", productName: "500g×20袋装芝士虾滑经典款", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1269, nightCapacity: 1180,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0344", productId: "AJ-SKU-286", productName: "400g×20袋装包心贡丸原味", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1001, nightCapacity: 862,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0345", productId: "AJ-SKU-287", productName: "300g×30袋装蟹籽福袋经典款", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 925, nightCapacity: 809,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0346", productId: "AJ-SKU-288", productName: "350g×20袋装玉米肠经典款", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 1297, nightCapacity: 1255,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0347", productId: "AJ-SKU-289", productName: "5kg×2袋装香酥鸡块盒马定制", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1053, nightCapacity: 1079,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0348", productId: "AJ-SKU-290", productName: "1kg×10袋装包心鱼丸出口版", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1755, nightCapacity: 1768,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0349", productId: "AJ-SKU-291", productName: "500g×20袋装猪肉丸黑椒味", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1593, nightCapacity: 1530,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0350", productId: "AJ-SKU-292", productName: "1kg×10袋装猪肉大葱水饺原味", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 828, nightCapacity: 789,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0351", productId: "AJ-SKU-293", productName: "1kg×10袋装蟹籽虾滑大客户版", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1500, nightCapacity: 1233,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0352", productId: "AJ-SKU-294", productName: "20片×10袋装猪肉大葱水饺香辣味", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 865, nightCapacity: 885,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0353", productId: "AJ-SKU-294", productName: "20片×10袋装猪肉大葱水饺香辣味", machineId: "FZ-024",
    machineName: "连续速冻线", dayCapacity: 1361, nightCapacity: 1270,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0354", productId: "AJ-SKU-295", productName: "120g×50袋装龙虾球出口版", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1154, nightCapacity: 1126,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0355", productId: "AJ-SKU-296", productName: "1kg×10袋装火锅组合丸藤椒味", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 728, nightCapacity: 643,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0356", productId: "AJ-SKU-297", productName: "200g×30袋装猪肉丸", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 994, nightCapacity: 972,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0357", productId: "AJ-SKU-298", productName: "500g×20袋装脆皮鸡米花出口版", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 1447, nightCapacity: 1259,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0358", productId: "AJ-SKU-299", productName: "200g×30袋装贡丸出口版", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1920, nightCapacity: 1922,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0359", productId: "AJ-SKU-300", productName: "6kg×1零称鳕鱼排家庭装", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1961, nightCapacity: 2042,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0360", productId: "AJ-SKU-301", productName: "200g×30袋装鸡排藤椒味", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 1526, nightCapacity: 1538,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0361", productId: "AJ-SKU-302", productName: "5kg×2袋装脆皮鸡米花餐饮装", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 994, nightCapacity: 1039,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0362", productId: "AJ-SKU-303", productName: "500g×20袋装调理串盒马定制", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 1182, nightCapacity: 1115,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0363", productId: "AJ-SKU-304", productName: "240g×20袋装龙虾球轻享装", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1793, nightCapacity: 1616,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0364", productId: "AJ-SKU-305", productName: "2.5kg×4袋装虾滑轻享装", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1502, nightCapacity: 1258,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0365", productId: "AJ-SKU-306", productName: "500g×20袋装火山石烤肠家庭装", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 1172, nightCapacity: 1182,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0366", productId: "AJ-SKU-307", productName: "5kg×2袋装牛肉丸餐饮装", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1253, nightCapacity: 1301,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0367", productId: "AJ-SKU-307", productName: "5kg×2袋装牛肉丸餐饮装", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1716, nightCapacity: 1578,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0368", productId: "AJ-SKU-308", productName: "1kg×10袋装关东煮组合大客户版", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1076, nightCapacity: 995,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0369", productId: "AJ-SKU-308", productName: "1kg×10袋装关东煮组合大客户版", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1211, nightCapacity: 1135,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0370", productId: "AJ-SKU-309", productName: "240g×20袋装芝士鱼丸香辣味", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1559, nightCapacity: 1369,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0371", productId: "AJ-SKU-310", productName: "2.5kg×4袋装牛排家庭装", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 1370, nightCapacity: 1234,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0372", productId: "AJ-SKU-311", productName: "120g×50袋装鱼豆腐轻享装", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1621, nightCapacity: 1444,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0373", productId: "AJ-SKU-312", productName: "200g×30袋装鱼肉丸餐饮装", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 1594, nightCapacity: 1381,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0374", productId: "AJ-SKU-313", productName: "500g×20袋装鱼竹轮经典款", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1930, nightCapacity: 1929,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0375", productId: "AJ-SKU-314", productName: "350g×20袋装玉米肠原味", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 786, nightCapacity: 652,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0376", productId: "AJ-SKU-315", productName: "200g×30袋装鱼竹轮原味", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1758, nightCapacity: 1725,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0377", productId: "AJ-SKU-316", productName: "350g×20袋装鸡柳出口版", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 1394, nightCapacity: 1324,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0378", productId: "AJ-SKU-317", productName: "1kg×10袋装撒尿肉丸", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1200, nightCapacity: 1154,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0379", productId: "AJ-SKU-318", productName: "350g×20袋装牛排餐饮装", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 716, nightCapacity: 676,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0380", productId: "AJ-SKU-319", productName: "2.5kg×4袋装鱼肉丸黑椒味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1739, nightCapacity: 1759,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0381", productId: "AJ-SKU-320", productName: "2.5kg×4袋装牛排香辣味", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 973, nightCapacity: 846,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0382", productId: "AJ-SKU-321", productName: "5kg×2袋装奥尔良鸡柳经典款", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1590, nightCapacity: 1551,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0383", productId: "AJ-SKU-322", productName: "500g×20袋装撒尿肉丸盒马定制", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1945, nightCapacity: 1896,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0384", productId: "AJ-SKU-323", productName: "10片×20袋装烧麦家庭装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1579, nightCapacity: 1498,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0385", productId: "AJ-SKU-323", productName: "10片×20袋装烧麦家庭装", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 830, nightCapacity: 723,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0386", productId: "AJ-SKU-324", productName: "300g×30袋装蔬菜丸原味", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1338, nightCapacity: 1379,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0387", productId: "AJ-SKU-324", productName: "300g×30袋装蔬菜丸原味", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1501, nightCapacity: 1550,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0388", productId: "AJ-SKU-325", productName: "400g×20袋装墨鱼丸大客户版", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1995, nightCapacity: 1705,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0389", productId: "AJ-SKU-326", productName: "2.5kg×4袋装酥皮卷大客户版", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 866, nightCapacity: 806,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0390", productId: "AJ-SKU-327", productName: "2.5kg×4袋装鱼籽福袋家庭装", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1517, nightCapacity: 1368,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0391", productId: "AJ-SKU-328", productName: "500g×20袋装蔬菜丸餐饮装", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1145, nightCapacity: 1042,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0392", productId: "AJ-SKU-329", productName: "120g×50袋装鱼丸区域装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1846, nightCapacity: 1654,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0393", productId: "AJ-SKU-330", productName: "5kg×2袋装小酥肉原味", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 1162, nightCapacity: 1170,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0394", productId: "AJ-SKU-331", productName: "2.5kg×4袋装麻辣烫组合团餐装", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1275, nightCapacity: 1281,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0395", productId: "AJ-SKU-332", productName: "1kg×10袋装馅饼", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 848, nightCapacity: 889,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0396", productId: "AJ-SKU-333", productName: "500g×20袋装龙虾球大客户版", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1562, nightCapacity: 1332,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0397", productId: "AJ-SKU-334", productName: "300g×30袋装海胆包经典款", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 923, nightCapacity: 953,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0398", productId: "AJ-SKU-335", productName: "5kg×2袋装贡丸原味", machineId: "FZ-016",
    machineName: "特通品速冻线", dayCapacity: 1663, nightCapacity: 1659,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0399", productId: "AJ-SKU-336", productName: "2.5kg×4袋装丸类组合包大客户版", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 908, nightCapacity: 931,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0400", productId: "AJ-SKU-337", productName: "240g×20袋装香辣鱼丸盒马定制", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1930, nightCapacity: 1677,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0401", productId: "AJ-SKU-337", productName: "240g×20袋装香辣鱼丸盒马定制", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1035, nightCapacity: 924,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0402", productId: "AJ-SKU-338", productName: "1kg×10袋装包心鱼丸家庭装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1829, nightCapacity: 1785,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0403", productId: "AJ-SKU-339", productName: "1kg×10袋装包心贡丸家庭装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1685, nightCapacity: 1478,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0404", productId: "AJ-SKU-340", productName: "20片×10袋装猪肉大葱水饺", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 1195, nightCapacity: 1119,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0405", productId: "AJ-SKU-341", productName: "1kg×10袋装春卷原味", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1637, nightCapacity: 1681,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0406", productId: "AJ-SKU-341", productName: "1kg×10袋装春卷原味", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 1089, nightCapacity: 1133,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0407", productId: "AJ-SKU-342", productName: "200g×30袋装芝士鱼丸出口版", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 932, nightCapacity: 913,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0408", productId: "AJ-SKU-342", productName: "200g×30袋装芝士鱼丸出口版", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1303, nightCapacity: 1147,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0409", productId: "AJ-SKU-343", productName: "500g×20袋装烧麦出口版", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1248, nightCapacity: 1295,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0410", productId: "AJ-SKU-344", productName: "500g×20袋装蟹籽虾滑轻享装", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 978, nightCapacity: 902,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0411", productId: "AJ-SKU-345", productName: "500g×20袋装芝士鱼丸大客户版", machineId: "FZ-016",
    machineName: "特通品速冻线", dayCapacity: 1319, nightCapacity: 1184,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0412", productId: "AJ-SKU-346", productName: "120g×50袋装龙虾球大客户版", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1040, nightCapacity: 965,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0413", productId: "AJ-SKU-347", productName: "300g×30袋装芝士丸香辣味", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 751, nightCapacity: 735,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0414", productId: "AJ-SKU-348", productName: "200g×30袋装藕盒", machineId: "FZ-003",
    machineName: "隧道速冻线A", dayCapacity: 999, nightCapacity: 885,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0415", productId: "AJ-SKU-349", productName: "1kg×10袋装猪肉丸大客户版", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1583, nightCapacity: 1430,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0416", productId: "AJ-SKU-350", productName: "6kg×1零称鱼排轻享装", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1798, nightCapacity: 1519,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0417", productId: "AJ-SKU-351", productName: "500g×20袋装鸡柳大客户版", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 1325, nightCapacity: 1325,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0418", productId: "AJ-SKU-351", productName: "500g×20袋装鸡柳大客户版", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 861, nightCapacity: 819,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0419", productId: "AJ-SKU-352", productName: "6kg×1零称蟹棒餐饮装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1340, nightCapacity: 1184,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0420", productId: "AJ-SKU-353", productName: "2.5kg×4袋装关东煮组合", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1009, nightCapacity: 872,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0421", productId: "AJ-SKU-354", productName: "1kg×10袋装汤圆大客户版", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 838, nightCapacity: 799,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0422", productId: "AJ-SKU-355", productName: "300g×30袋装芝士丸出口版", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1600, nightCapacity: 1656,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0423", productId: "AJ-SKU-355", productName: "300g×30袋装芝士丸出口版", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1513, nightCapacity: 1362,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0424", productId: "AJ-SKU-356", productName: "400g×20袋装馄饨盒马定制", machineId: "FZ-004",
    machineName: "隧道速冻线B", dayCapacity: 1182, nightCapacity: 1084,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0425", productId: "AJ-SKU-357", productName: "500g×20袋装鱼籽福袋家庭装", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 970, nightCapacity: 930,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0426", productId: "AJ-SKU-357", productName: "500g×20袋装鱼籽福袋家庭装", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 709, nightCapacity: 601,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0427", productId: "AJ-SKU-358", productName: "200g×30袋装香辣鱼丸", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1946, nightCapacity: 1812,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0428", productId: "AJ-SKU-359", productName: "150g×40袋装香辣虾滑原味", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 888, nightCapacity: 752,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0429", productId: "AJ-SKU-360", productName: "400g×20袋装包心贡丸轻享装", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 969, nightCapacity: 879,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0430", productId: "AJ-SKU-361", productName: "200g×30袋装包心贡丸黑椒味", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 990, nightCapacity: 860,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0431", productId: "AJ-SKU-362", productName: "200g×30袋装虾味球香辣味", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1755, nightCapacity: 1589,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0432", productId: "AJ-SKU-363", productName: "1kg×10袋装鱼豆腐餐饮装", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 1113, nightCapacity: 1101,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0433", productId: "AJ-SKU-364", productName: "500g×20袋装鱼竹轮团餐装", machineId: "FZ-016",
    machineName: "特通品速冻线", dayCapacity: 1304, nightCapacity: 1138,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0434", productId: "AJ-SKU-365", productName: "200g×30袋装鱼肉丸精选款", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1879, nightCapacity: 1888,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0435", productId: "AJ-SKU-366", productName: "2.5kg×4袋装海胆包家庭装", machineId: "FZ-021",
    machineName: "高产速冻线", dayCapacity: 1543, nightCapacity: 1265,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0436", productId: "AJ-SKU-367", productName: "5kg×2袋装脆骨丸团餐装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1256, nightCapacity: 1057,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0437", productId: "AJ-SKU-367", productName: "5kg×2袋装脆骨丸团餐装", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1305, nightCapacity: 1278,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0438", productId: "AJ-SKU-368", productName: "400g×20袋装酥皮卷", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 1703, nightCapacity: 1446,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0439", productId: "AJ-SKU-368", productName: "400g×20袋装酥皮卷", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1627, nightCapacity: 1683,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0440", productId: "AJ-SKU-369", productName: "2.5kg×4袋装墨鱼丸盒马定制", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1643, nightCapacity: 1354,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0441", productId: "AJ-SKU-370", productName: "5kg×2袋装鸡柳轻享装", machineId: "FZ-018",
    machineName: "大包装速冻线", dayCapacity: 1274, nightCapacity: 1068,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0442", productId: "AJ-SKU-371", productName: "20片×10袋装蒸饺经典款", machineId: "FZ-024",
    machineName: "连续速冻线", dayCapacity: 1321, nightCapacity: 1206,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0443", productId: "AJ-SKU-372", productName: "5kg×2袋装脆皮鸡米花", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 1435, nightCapacity: 1305,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0444", productId: "AJ-SKU-373", productName: "2.5kg×4袋装火锅组合丸家庭装", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 979, nightCapacity: 942,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0445", productId: "AJ-SKU-374", productName: "1kg×10袋装烧麦黑椒味", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1647, nightCapacity: 1595,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0446", productId: "AJ-SKU-375", productName: "500g×20袋装虾味球精选款", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 1057, nightCapacity: 914,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0447", productId: "AJ-SKU-375", productName: "500g×20袋装虾味球精选款", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 1941, nightCapacity: 1776,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0448", productId: "AJ-SKU-376", productName: "500g×20袋装关东煮组合香辣味", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1076, nightCapacity: 1066,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0449", productId: "AJ-SKU-377", productName: "400g×20袋装芝士肉丸经典款", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1726, nightCapacity: 1755,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0450", productId: "AJ-SKU-378", productName: "200g×30袋装芝士鱼丸轻享装", machineId: "FZ-006",
    machineName: "网带速冻线B", dayCapacity: 1978, nightCapacity: 2019,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0451", productId: "AJ-SKU-379", productName: "400g×20袋装馅饼B版", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 1289, nightCapacity: 1276,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0452", productId: "AJ-SKU-380", productName: "5kg×2袋装鱼肉丸大客户版", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1949, nightCapacity: 1976,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0453", productId: "AJ-SKU-381", productName: "1kg×10袋装鱼豆腐藤椒味", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1907, nightCapacity: 1702,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0454", productId: "AJ-SKU-382", productName: "2.5kg×4袋装海鲜组合包大客户版", machineId: "FZ-022",
    machineName: "低温预冷线", dayCapacity: 1365, nightCapacity: 1354,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0455", productId: "AJ-SKU-383", productName: "6kg×1零称鱼排盒马定制", machineId: "FZ-016",
    machineName: "特通品速冻线", dayCapacity: 1825, nightCapacity: 1704,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0456", productId: "AJ-SKU-384", productName: "2.5kg×4袋装馅饼经典款", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1788, nightCapacity: 1673,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0457", productId: "AJ-SKU-384", productName: "2.5kg×4袋装馅饼经典款", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1421, nightCapacity: 1440,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0458", productId: "AJ-SKU-385", productName: "1kg×10袋装黑椒牛肉条大客户版", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 1546, nightCapacity: 1476,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0459", productId: "AJ-SKU-386", productName: "500g×20袋装贡丸大客户版", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1702, nightCapacity: 1493,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0460", productId: "AJ-SKU-387", productName: "500g×20袋装酥皮卷经典款", machineId: "FZ-024",
    machineName: "连续速冻线", dayCapacity: 1195, nightCapacity: 1104,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0461", productId: "AJ-SKU-388", productName: "1kg×10袋装蟹籽福袋轻享装", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1491, nightCapacity: 1364,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0462", productId: "AJ-SKU-389", productName: "1kg×10袋装海鲜组合包家庭装", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 773, nightCapacity: 673,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0463", productId: "AJ-SKU-390", productName: "10片×20袋装酥皮卷", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 815, nightCapacity: 784,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0464", productId: "AJ-SKU-391", productName: "2.5kg×4袋装贡丸香辣味", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 949, nightCapacity: 904,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0465", productId: "AJ-SKU-392", productName: "200g×30袋装小酥肉经典款", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 1176, nightCapacity: 986,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0466", productId: "AJ-SKU-393", productName: "1kg×10袋装香酥鸡块餐饮装", machineId: "FZ-008",
    machineName: "平板速冻线", dayCapacity: 1207, nightCapacity: 1174,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0467", productId: "AJ-SKU-394", productName: "240g×20袋装虾味球家庭装", machineId: "FZ-001",
    machineName: "螺旋速冻线A", dayCapacity: 1184, nightCapacity: 1159,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0468", productId: "AJ-SKU-395", productName: "500g×20袋装春卷经典款", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1378, nightCapacity: 1234,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0469", productId: "AJ-SKU-396", productName: "1kg×10袋装培根卷黑椒味", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 997, nightCapacity: 1036,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0470", productId: "AJ-SKU-396", productName: "1kg×10袋装培根卷黑椒味", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 1365, nightCapacity: 1423,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0471", productId: "AJ-SKU-397", productName: "500g×20袋装香辣鱼丸原味", machineId: "FZ-012",
    machineName: "鱼糜品速冻线", dayCapacity: 1183, nightCapacity: 1063,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0472", productId: "AJ-SKU-398", productName: "350g×20袋装香酥鸡块经典款", machineId: "FZ-010",
    machineName: "综合速冻线", dayCapacity: 1060, nightCapacity: 950,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0473", productId: "AJ-SKU-398", productName: "350g×20袋装香酥鸡块经典款", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 959, nightCapacity: 981,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0474", productId: "AJ-SKU-399", productName: "400g×20袋装牛肉馅饼盒马定制", machineId: "FZ-013",
    machineName: "面点速冻线", dayCapacity: 1677, nightCapacity: 1467,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0475", productId: "AJ-SKU-400", productName: "800g×12袋装蔬菜丸香辣味", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1263, nightCapacity: 1227,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0476", productId: "AJ-SKU-401", productName: "2.5kg×4袋装玉米肠餐饮装", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 954, nightCapacity: 970,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0477", productId: "AJ-SKU-402", productName: "2.5kg×4袋装盐酥鸡藤椒味", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1329, nightCapacity: 1135,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0478", productId: "AJ-SKU-402", productName: "2.5kg×4袋装盐酥鸡藤椒味", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1343, nightCapacity: 1321,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0479", productId: "AJ-SKU-403", productName: "200g×30袋装黑椒牛肉条黑椒味", machineId: "FZ-011",
    machineName: "调理品速冻线", dayCapacity: 868, nightCapacity: 908,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0480", productId: "AJ-SKU-404", productName: "800g×12袋装蔬菜丸区域装", machineId: "FZ-016",
    machineName: "特通品速冻线", dayCapacity: 1415, nightCapacity: 1465,
    mainWorkshop: "WS01"
  },
  {
    id: "FSD-0481", productId: "AJ-SKU-405", productName: "2.5kg×4袋装小酥肉轻享装", machineId: "FZ-023",
    machineName: "单冻速冻线", dayCapacity: 1105, nightCapacity: 1050,
    mainWorkshop: "WS03"
  },
  {
    id: "FSD-0482", productId: "AJ-SKU-406", productName: "5kg×2袋装藕盒香辣味", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 881, nightCapacity: 870,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0483", productId: "AJ-SKU-407", productName: "500g×20袋装虾滑餐饮装", machineId: "FZ-014",
    machineName: "丸类速冻线", dayCapacity: 836, nightCapacity: 803,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0484", productId: "AJ-SKU-407", productName: "500g×20袋装虾滑餐饮装", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 892, nightCapacity: 765,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0485", productId: "AJ-SKU-408", productName: "500g×20袋装汤圆藤椒味", machineId: "FZ-024",
    machineName: "连续速冻线", dayCapacity: 1019, nightCapacity: 1025,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0486", productId: "AJ-SKU-408", productName: "500g×20袋装汤圆藤椒味", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 1710, nightCapacity: 1430,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0487", productId: "AJ-SKU-409", productName: "20片×10袋装牛肉馅饼香辣味", machineId: "FZ-015",
    machineName: "出口品速冻线", dayCapacity: 1140, nightCapacity: 997,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0488", productId: "AJ-SKU-410", productName: "5kg×2袋装鸡柳餐饮装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1055, nightCapacity: 972,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0489", productId: "AJ-SKU-410", productName: "5kg×2袋装鸡柳餐饮装", machineId: "FZ-019",
    machineName: "补产速冻线", dayCapacity: 717, nightCapacity: 737,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0490", productId: "AJ-SKU-411", productName: "1kg×10袋装鱼肉丸经典款", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1094, nightCapacity: 979,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0491", productId: "AJ-SKU-412", productName: "500g×20袋装蟹籽虾滑藤椒味", machineId: "FZ-017",
    machineName: "小包装速冻线", dayCapacity: 1439, nightCapacity: 1278,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0492", productId: "AJ-SKU-413", productName: "500g×20袋装鱼丸原味", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 926, nightCapacity: 761,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0493", productId: "AJ-SKU-414", productName: "2.5kg×4袋装海鲜组合包藤椒味", machineId: "FZ-005",
    machineName: "网带速冻线A", dayCapacity: 935, nightCapacity: 785,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0494", productId: "AJ-SKU-415", productName: "1kg×10袋装鱼竹轮盒马定制", machineId: "FZ-007",
    machineName: "流态化速冻线", dayCapacity: 1895, nightCapacity: 1584,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0495", productId: "AJ-SKU-416", productName: "120g×50袋装黄金鱼板盒马定制", machineId: "FZ-002",
    machineName: "螺旋速冻线B", dayCapacity: 1575, nightCapacity: 1554,
    mainWorkshop: "WS02"
  },
  {
    id: "FSD-0496", productId: "AJ-SKU-417", productName: "300g×30袋装关东煮组合", machineId: "FZ-025",
    machineName: "冷却定型线", dayCapacity: 1190, nightCapacity: 1014,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0497", productId: "AJ-SKU-418", productName: "500g×20袋装鱼籽福袋轻享装", machineId: "FZ-020",
    machineName: "备用速冻线", dayCapacity: 1021, nightCapacity: 1062,
    mainWorkshop: "WS05"
  },
  {
    id: "FSD-0498", productId: "AJ-SKU-419", productName: "500g×20袋装猪肉大葱水饺餐饮装", machineId: "FZ-024",
    machineName: "连续速冻线", dayCapacity: 1212, nightCapacity: 1235,
    mainWorkshop: "WS04"
  },
  {
    id: "FSD-0499", productId: "AJ-SKU-420", productName: "10片×20袋装烧麦轻享装", machineId: "FZ-009",
    machineName: "低温速冻线", dayCapacity: 928, nightCapacity: 821,
    mainWorkshop: "WS04"
  }
];

/* ── 包装速度关联 ── */
export const packagingSpeeds: PackagingSpeed[] = [
  {
    id: "FPK-0001", productId: "AJ-SKU-001", productName: "1kg×10袋装脆骨丸黑椒味", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1354, nightCapacity: 1181,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0002", productId: "AJ-SKU-001", productName: "1kg×10袋装脆骨丸黑椒味", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 996, nightCapacity: 987,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0003", productId: "AJ-SKU-002", productName: "200g×30袋装牛肉丸原味", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 825, nightCapacity: 842,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0004", productId: "AJ-SKU-003", productName: "1kg×10袋装鲜虾滑餐饮装", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 898, nightCapacity: 913,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0005", productId: "AJ-SKU-004", productName: "1kg×10袋装贡丸轻享装", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1714, nightCapacity: 1583,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0006", productId: "AJ-SKU-005", productName: "2.5kg×4袋装茄盒出口版", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 923, nightCapacity: 963,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0007", productId: "AJ-SKU-006", productName: "400g×20袋装墨鱼丸餐饮装", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 1028, nightCapacity: 1055,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0008", productId: "AJ-SKU-007", productName: "200g×30袋装牛排", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 613, nightCapacity: 530,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0009", productId: "AJ-SKU-008", productName: "400g×20袋装鱼肉丸香辣味", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1587, nightCapacity: 1300,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0010", productId: "AJ-SKU-009", productName: "5kg×2袋装包心鱼丸香辣味", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1146, nightCapacity: 959,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0011", productId: "AJ-SKU-010", productName: "20片×10袋装烧麦餐饮装", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1240, nightCapacity: 1017,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0012", productId: "AJ-SKU-011", productName: "300g×30袋装香辣虾滑家庭装", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 636, nightCapacity: 656,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0013", productId: "AJ-SKU-011", productName: "300g×30袋装香辣虾滑家庭装", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 976, nightCapacity: 843,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0014", productId: "AJ-SKU-012", productName: "500g×20袋装鱼豆腐家庭装", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 690, nightCapacity: 611,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0015", productId: "AJ-SKU-013", productName: "1kg×10袋装海鲜组合包藤椒味", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 952, nightCapacity: 807,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0016", productId: "AJ-SKU-014", productName: "200g×30袋装火山石烤肠香辣味", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 614, nightCapacity: 641,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0017", productId: "AJ-SKU-015", productName: "2.5kg×4袋装小酥肉香辣味", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 1007, nightCapacity: 913,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0018", productId: "AJ-SKU-016", productName: "2.5kg×4袋装丸类组合包黑椒味", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 736, nightCapacity: 620,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0019", productId: "AJ-SKU-017", productName: "500g×20袋装鱼肉丸藤椒味", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1316, nightCapacity: 1210,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0020", productId: "AJ-SKU-018", productName: "350g×20袋装玉米肠", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 1302, nightCapacity: 1219,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0021", productId: "AJ-SKU-019", productName: "5kg×2袋装墨鱼丸香辣味", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 931, nightCapacity: 811,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0022", productId: "AJ-SKU-019", productName: "5kg×2袋装墨鱼丸香辣味", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1075, nightCapacity: 1033,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0023", productId: "AJ-SKU-020", productName: "800g×12袋装丸类组合包盒马定制", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1105, nightCapacity: 921,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0024", productId: "AJ-SKU-021", productName: "1kg×10袋装芝士肉丸藤椒味", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1057, nightCapacity: 953,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0025", productId: "AJ-SKU-022", productName: "1kg×10袋装龙虾球经典款", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 691, nightCapacity: 689,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0026", productId: "AJ-SKU-023", productName: "350g×20袋装小酥肉盒马定制", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 971, nightCapacity: 835,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0027", productId: "AJ-SKU-024", productName: "500g×20袋装米汉堡餐饮装", machineId: "PK-018",
    machineName: "面点包装线", dayCapacity: 1015, nightCapacity: 972,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0028", productId: "AJ-SKU-025", productName: "240g×20袋装鱼竹轮香辣味", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1355, nightCapacity: 1302,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0029", productId: "AJ-SKU-026", productName: "2.5kg×4袋装鲜虾滑家庭装", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 870, nightCapacity: 807,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0030", productId: "AJ-SKU-027", productName: "500g×20袋装藕盒", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 635, nightCapacity: 565,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0031", productId: "AJ-SKU-028", productName: "1kg×10袋装牛肉馅饼藤椒味", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1267, nightCapacity: 1216,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0032", productId: "AJ-SKU-029", productName: "10片×20袋装葱油饼盒马定制", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 1151, nightCapacity: 1052,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0033", productId: "AJ-SKU-030", productName: "2.5kg×4袋装盐酥鸡黑椒味", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 1238, nightCapacity: 1183,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0034", productId: "AJ-SKU-031", productName: "400g×20袋装包心鱼丸轻享装", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1125, nightCapacity: 1096,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0035", productId: "AJ-SKU-032", productName: "2.5kg×4袋装汤圆盒马定制", machineId: "PK-018",
    machineName: "面点包装线", dayCapacity: 1371, nightCapacity: 1362,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0036", productId: "AJ-SKU-033", productName: "1kg×10袋装手抓饼家庭装", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1362, nightCapacity: 1273,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0037", productId: "AJ-SKU-034", productName: "1kg×10袋装年糕餐饮装", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1433, nightCapacity: 1285,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0038", productId: "AJ-SKU-035", productName: "400g×20袋装馅饼黑椒味", machineId: "PK-005",
    machineName: "给袋式包装机A", dayCapacity: 1254, nightCapacity: 1133,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0039", productId: "AJ-SKU-036", productName: "200g×30袋装黄金鱼板藤椒味", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 989, nightCapacity: 923,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0040", productId: "AJ-SKU-036", productName: "200g×30袋装黄金鱼板藤椒味", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 917, nightCapacity: 811,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0041", productId: "AJ-SKU-037", productName: "1kg×10袋装鱼肉丸香辣味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 707, nightCapacity: 569,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0042", productId: "AJ-SKU-037", productName: "1kg×10袋装鱼肉丸香辣味", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 806, nightCapacity: 728,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0043", productId: "AJ-SKU-038", productName: "6kg×1零称鱼丸", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1048, nightCapacity: 866,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0044", productId: "AJ-SKU-039", productName: "6kg×1零称鱼排大客户版", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 754, nightCapacity: 736,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0045", productId: "AJ-SKU-040", productName: "350g×20袋装火山石烤肠原味", machineId: "PK-005",
    machineName: "给袋式包装机A", dayCapacity: 993, nightCapacity: 862,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0046", productId: "AJ-SKU-040", productName: "350g×20袋装火山石烤肠原味", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 576, nightCapacity: 513,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0047", productId: "AJ-SKU-041", productName: "200g×30袋装鱼竹轮大客户版", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1451, nightCapacity: 1237,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0048", productId: "AJ-SKU-042", productName: "1kg×10袋装鱼肉丸原味", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1082, nightCapacity: 1087,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0049", productId: "AJ-SKU-043", productName: "300g×30袋装鱼籽虾滑盒马定制", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1043, nightCapacity: 903,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0050", productId: "AJ-SKU-044", productName: "500g×20袋装黑椒牛肉条出口版", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 848, nightCapacity: 706,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0051", productId: "AJ-SKU-045", productName: "1kg×10袋装蟹籽福袋香辣味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 712, nightCapacity: 584,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0052", productId: "AJ-SKU-045", productName: "1kg×10袋装蟹籽福袋香辣味", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1384, nightCapacity: 1430,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0053", productId: "AJ-SKU-046", productName: "2.5kg×4袋装包心鱼丸轻享装", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1292, nightCapacity: 1255,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0054", productId: "AJ-SKU-046", productName: "2.5kg×4袋装包心鱼丸轻享装", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 398, nightCapacity: 372,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0055", productId: "AJ-SKU-047", productName: "1kg×10袋装香辣鱼丸家庭装", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 1061, nightCapacity: 870,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0056", productId: "AJ-SKU-048", productName: "200g×30袋装茄盒盒马定制", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1357, nightCapacity: 1345,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0057", productId: "AJ-SKU-048", productName: "200g×30袋装茄盒盒马定制", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1789, nightCapacity: 1726,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0058", productId: "AJ-SKU-049", productName: "500g×20袋装培根卷出口版", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 814, nightCapacity: 690,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0059", productId: "AJ-SKU-050", productName: "1kg×10袋装火锅组合丸香辣味", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 877, nightCapacity: 744,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0060", productId: "AJ-SKU-051", productName: "2.5kg×4袋装蒸饺出口版", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 976, nightCapacity: 844,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0061", productId: "AJ-SKU-051", productName: "2.5kg×4袋装蒸饺出口版", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 839, nightCapacity: 783,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0062", productId: "AJ-SKU-052", productName: "2.5kg×4袋装脆骨丸盒马定制", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1305, nightCapacity: 1241,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0063", productId: "AJ-SKU-053", productName: "1kg×10袋装黑椒牛肉条经典款", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 746, nightCapacity: 609,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0064", productId: "AJ-SKU-054", productName: "150g×40袋装虾滑出口版", machineId: "PK-025",
    machineName: "贴标装箱线", dayCapacity: 925, nightCapacity: 788,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0065", productId: "AJ-SKU-055", productName: "2.5kg×4袋装香辣虾滑黑椒味", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 704, nightCapacity: 665,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0066", productId: "AJ-SKU-055", productName: "2.5kg×4袋装香辣虾滑黑椒味", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1392, nightCapacity: 1420,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0067", productId: "AJ-SKU-056", productName: "1kg×10袋装鱼豆腐黑椒味", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 729, nightCapacity: 736,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0068", productId: "AJ-SKU-057", productName: "500g×20袋装鳕鱼排", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 823, nightCapacity: 803,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0069", productId: "AJ-SKU-058", productName: "200g×30袋装鱼丸出口版", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 611, nightCapacity: 638,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0070", productId: "AJ-SKU-059", productName: "500g×20袋装虾滑家庭装", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1154, nightCapacity: 1123,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0071", productId: "AJ-SKU-059", productName: "500g×20袋装虾滑家庭装", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1307, nightCapacity: 1356,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0072", productId: "AJ-SKU-060", productName: "5kg×2袋装猪肉丸香辣味", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 381, nightCapacity: 395,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0073", productId: "AJ-SKU-061", productName: "5kg×2袋装奥尔良鸡柳黑椒味", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 1156, nightCapacity: 946,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0074", productId: "AJ-SKU-061", productName: "5kg×2袋装奥尔良鸡柳黑椒味", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 668, nightCapacity: 535,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0075", productId: "AJ-SKU-062", productName: "500g×20袋装鱼豆腐大客户版", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 631, nightCapacity: 526,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0076", productId: "AJ-SKU-063", productName: "10片×20袋装猪肉大葱水饺出口版", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1455, nightCapacity: 1437,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0077", productId: "AJ-SKU-064", productName: "300g×30袋装香辣虾滑零售装", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 770, nightCapacity: 766,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0078", productId: "AJ-SKU-064", productName: "300g×30袋装香辣虾滑零售装", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1368, nightCapacity: 1423,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0079", productId: "AJ-SKU-065", productName: "200g×30袋装虾味球家庭装", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 1172, nightCapacity: 1015,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0080", productId: "AJ-SKU-066", productName: "200g×30袋装黄金鱼板香辣味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1115, nightCapacity: 1018,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0081", productId: "AJ-SKU-067", productName: "200g×30袋装牛排出口版", machineId: "PK-005",
    machineName: "给袋式包装机A", dayCapacity: 1017, nightCapacity: 864,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0082", productId: "AJ-SKU-068", productName: "300g×30袋装丸类组合包出口版", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1382, nightCapacity: 1415,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0083", productId: "AJ-SKU-069", productName: "200g×30袋装包心鱼丸餐饮装", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1364, nightCapacity: 1260,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0084", productId: "AJ-SKU-069", productName: "200g×30袋装包心鱼丸餐饮装", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1316, nightCapacity: 1320,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0085", productId: "AJ-SKU-070", productName: "2.5kg×4袋装麻辣烫组合家庭装", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1743, nightCapacity: 1801,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0086", productId: "AJ-SKU-071", productName: "200g×30袋装火山石烤肠经典款", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 1200, nightCapacity: 998,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0087", productId: "AJ-SKU-072", productName: "120g×50袋装鱼丸家庭装", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1394, nightCapacity: 1260,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0088", productId: "AJ-SKU-073", productName: "500g×20袋装小酥肉轻享装", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1109, nightCapacity: 1078,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0089", productId: "AJ-SKU-074", productName: "400g×20袋装牛肉馅饼轻享装", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 1035, nightCapacity: 976,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0090", productId: "AJ-SKU-075", productName: "5kg×2袋装小酥肉经典款", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 829, nightCapacity: 793,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0091", productId: "AJ-SKU-076", productName: "200g×30袋装脆骨丸", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1312, nightCapacity: 1168,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0092", productId: "AJ-SKU-077", productName: "1kg×10袋装黄金鱼板原味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1295, nightCapacity: 1145,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0093", productId: "AJ-SKU-078", productName: "2.5kg×4袋装蔬菜丸藤椒味", machineId: "PK-025",
    machineName: "贴标装箱线", dayCapacity: 1168, nightCapacity: 1052,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0094", productId: "AJ-SKU-079", productName: "200g×30袋装芝士肉丸大客户版", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1029, nightCapacity: 1076,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0095", productId: "AJ-SKU-079", productName: "200g×30袋装芝士肉丸大客户版", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 806, nightCapacity: 691,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0096", productId: "AJ-SKU-080", productName: "1kg×10袋装蟹味排黑椒味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 923, nightCapacity: 888,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0097", productId: "AJ-SKU-081", productName: "10片×20袋装牛肉馅饼香辣味", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1414, nightCapacity: 1310,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0098", productId: "AJ-SKU-082", productName: "2.5kg×4袋装蟹籽虾滑出口版", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1244, nightCapacity: 1164,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0099", productId: "AJ-SKU-082", productName: "2.5kg×4袋装蟹籽虾滑出口版", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 892, nightCapacity: 829,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0100", productId: "AJ-SKU-083", productName: "1kg×10袋装鸡排出口版", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 1197, nightCapacity: 1202,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0101", productId: "AJ-SKU-083", productName: "1kg×10袋装鸡排出口版", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 1241, nightCapacity: 1062,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0102", productId: "AJ-SKU-084", productName: "20片×10袋装猪肉大葱水饺盒马定制", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 1085, nightCapacity: 932,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0103", productId: "AJ-SKU-085", productName: "10片×20袋装馄饨经典款", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 1016, nightCapacity: 858,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0104", productId: "AJ-SKU-086", productName: "120g×50袋装鱼竹轮香辣味", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 957, nightCapacity: 957,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0105", productId: "AJ-SKU-087", productName: "400g×20袋装墨鱼丸出口版", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 893, nightCapacity: 831,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0106", productId: "AJ-SKU-088", productName: "120g×50袋装蟹棒原味", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 758, nightCapacity: 794,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0107", productId: "AJ-SKU-089", productName: "350g×20袋装盐酥鸡盒马定制", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 1497, nightCapacity: 1408,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0108", productId: "AJ-SKU-089", productName: "350g×20袋装盐酥鸡盒马定制", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 1305, nightCapacity: 1185,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0109", productId: "AJ-SKU-090", productName: "2.5kg×4袋装酥皮卷原味", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 1327, nightCapacity: 1177,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0110", productId: "AJ-SKU-091", productName: "500g×20袋装培根卷", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 1106, nightCapacity: 1047,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0111", productId: "AJ-SKU-092", productName: "1kg×10袋装酥皮卷家庭装", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 744, nightCapacity: 769,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0112", productId: "AJ-SKU-093", productName: "400g×20袋装芝士肉丸盒马定制", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 697, nightCapacity: 682,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0113", productId: "AJ-SKU-094", productName: "1kg×10袋装香辣虾滑大客户版", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1184, nightCapacity: 1110,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0114", productId: "AJ-SKU-094", productName: "1kg×10袋装香辣虾滑大客户版", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 908, nightCapacity: 818,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0115", productId: "AJ-SKU-095", productName: "240g×20袋装鱼竹轮原味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1273, nightCapacity: 1244,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0116", productId: "AJ-SKU-095", productName: "240g×20袋装鱼竹轮原味", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1456, nightCapacity: 1358,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0117", productId: "AJ-SKU-096", productName: "1kg×10袋装鱼排", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 985, nightCapacity: 858,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0118", productId: "AJ-SKU-096", productName: "1kg×10袋装鱼排", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1267, nightCapacity: 1110,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0119", productId: "AJ-SKU-097", productName: "1kg×10袋装牛肉丸经典款", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1466, nightCapacity: 1278,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0120", productId: "AJ-SKU-098", productName: "1kg×10袋装芝士鱼丸原味", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1443, nightCapacity: 1348,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0121", productId: "AJ-SKU-099", productName: "2.5kg×4袋装芝士虾滑大客户版", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1305, nightCapacity: 1044,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0122", productId: "AJ-SKU-100", productName: "1kg×10袋装鱼籽福袋香辣味", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 686, nightCapacity: 674,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0123", productId: "AJ-SKU-101", productName: "120g×50袋装鱼丸", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 842, nightCapacity: 777,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0124", productId: "AJ-SKU-102", productName: "500g×20袋装鲜虾滑轻享装", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1127, nightCapacity: 1181,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0125", productId: "AJ-SKU-103", productName: "200g×30袋装撒尿肉丸经典款", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 572, nightCapacity: 491,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0126", productId: "AJ-SKU-103", productName: "200g×30袋装撒尿肉丸经典款", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 381, nightCapacity: 324,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0127", productId: "AJ-SKU-104", productName: "500g×20袋装鱼豆腐升级款", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 859, nightCapacity: 767,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0128", productId: "AJ-SKU-105", productName: "500g×20袋装贡丸餐饮装", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1041, nightCapacity: 891,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0129", productId: "AJ-SKU-106", productName: "120g×50袋装龙虾球经典款", machineId: "PK-025",
    machineName: "贴标装箱线", dayCapacity: 962, nightCapacity: 990,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0130", productId: "AJ-SKU-106", productName: "120g×50袋装龙虾球经典款", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 822, nightCapacity: 729,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0131", productId: "AJ-SKU-107", productName: "1kg×10袋装鸡排家庭装", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 1444, nightCapacity: 1476,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0132", productId: "AJ-SKU-108", productName: "6kg×1零称芝士鱼丸大客户版", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1372, nightCapacity: 1244,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0133", productId: "AJ-SKU-109", productName: "200g×30袋装鸡柳大客户版", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 650, nightCapacity: 637,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0134", productId: "AJ-SKU-110", productName: "800g×12袋装关东煮组合盒马定制", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1483, nightCapacity: 1334,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0135", productId: "AJ-SKU-110", productName: "800g×12袋装关东煮组合盒马定制", machineId: "PK-025",
    machineName: "贴标装箱线", dayCapacity: 825, nightCapacity: 695,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0136", productId: "AJ-SKU-111", productName: "5kg×2袋装鱼肉丸家庭装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 759, nightCapacity: 717,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0137", productId: "AJ-SKU-112", productName: "200g×30袋装鱼豆腐黑椒味", machineId: "PK-005",
    machineName: "给袋式包装机A", dayCapacity: 1487, nightCapacity: 1196,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0138", productId: "AJ-SKU-112", productName: "200g×30袋装鱼豆腐黑椒味", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1436, nightCapacity: 1373,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0139", productId: "AJ-SKU-113", productName: "500g×20袋装酥皮卷家庭装", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1247, nightCapacity: 1174,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0140", productId: "AJ-SKU-113", productName: "500g×20袋装酥皮卷家庭装", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 862, nightCapacity: 863,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0141", productId: "AJ-SKU-114", productName: "500g×20袋装小酥肉餐饮装", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1372, nightCapacity: 1320,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0142", productId: "AJ-SKU-115", productName: "300g×30袋装麻辣烫组合轻享装", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 336, nightCapacity: 338,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0143", productId: "AJ-SKU-116", productName: "200g×30袋装香菇贡丸出口版", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1056, nightCapacity: 997,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0144", productId: "AJ-SKU-117", productName: "1kg×10袋装蟹味排香辣味", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1259, nightCapacity: 1062,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0145", productId: "AJ-SKU-118", productName: "350g×20袋装奥尔良鸡柳", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1670, nightCapacity: 1450,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0146", productId: "AJ-SKU-119", productName: "120g×50袋装鱼豆腐家庭装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1410, nightCapacity: 1205,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0147", productId: "AJ-SKU-120", productName: "350g×20袋装玉米肠盒马定制", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 997, nightCapacity: 847,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0148", productId: "AJ-SKU-120", productName: "350g×20袋装玉米肠盒马定制", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 907, nightCapacity: 888,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0149", productId: "AJ-SKU-121", productName: "240g×20袋装香辣鱼丸原味", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 961, nightCapacity: 984,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0150", productId: "AJ-SKU-121", productName: "240g×20袋装香辣鱼丸原味", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1406, nightCapacity: 1403,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0151", productId: "AJ-SKU-122", productName: "800g×12袋装丸类组合包经典款", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 743, nightCapacity: 619,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0152", productId: "AJ-SKU-123", productName: "400g×20袋装猪肉丸藤椒味", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 1484, nightCapacity: 1193,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0153", productId: "AJ-SKU-123", productName: "400g×20袋装猪肉丸藤椒味", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 691, nightCapacity: 724,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0154", productId: "AJ-SKU-124", productName: "2.5kg×4袋装牛肉馅饼大客户版", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 815, nightCapacity: 653,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0155", productId: "AJ-SKU-125", productName: "2.5kg×4袋装猪肉丸盒马定制", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 707, nightCapacity: 717,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0156", productId: "AJ-SKU-126", productName: "200g×30袋装鸡柳藤椒味", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 911, nightCapacity: 818,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0157", productId: "AJ-SKU-127", productName: "1kg×10袋装鱼丸轻享装", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1437, nightCapacity: 1261,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0158", productId: "AJ-SKU-128", productName: "120g×50袋装鱼排出口版", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 975, nightCapacity: 915,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0159", productId: "AJ-SKU-129", productName: "300g×30袋装关东煮组合出口版", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 995, nightCapacity: 1012,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0160", productId: "AJ-SKU-130", productName: "1kg×10袋装龙虾球精选款", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 796, nightCapacity: 677,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0161", productId: "AJ-SKU-130", productName: "1kg×10袋装龙虾球精选款", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 893, nightCapacity: 851,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0162", productId: "AJ-SKU-131", productName: "500g×20袋装香辣虾滑轻享装", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1293, nightCapacity: 1070,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0163", productId: "AJ-SKU-131", productName: "500g×20袋装香辣虾滑轻享装", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1117, nightCapacity: 978,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0164", productId: "AJ-SKU-132", productName: "2.5kg×4袋装锅贴家庭装", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 865, nightCapacity: 827,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0165", productId: "AJ-SKU-132", productName: "2.5kg×4袋装锅贴家庭装", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1655, nightCapacity: 1700,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0166", productId: "AJ-SKU-133", productName: "20片×10袋装汤圆原味", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1492, nightCapacity: 1282,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0167", productId: "AJ-SKU-134", productName: "2.5kg×4袋装鱼籽福袋大客户版", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1230, nightCapacity: 1164,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0168", productId: "AJ-SKU-135", productName: "350g×20袋装培根卷家庭装", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 1189, nightCapacity: 1014,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0169", productId: "AJ-SKU-135", productName: "350g×20袋装培根卷家庭装", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 959, nightCapacity: 836,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0170", productId: "AJ-SKU-136", productName: "2.5kg×4袋装香酥鸡块轻享装", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 768, nightCapacity: 661,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0171", productId: "AJ-SKU-136", productName: "2.5kg×4袋装香酥鸡块轻享装", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 1379, nightCapacity: 1243,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0172", productId: "AJ-SKU-137", productName: "300g×30袋装芝士虾滑出口版", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 835, nightCapacity: 844,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0173", productId: "AJ-SKU-138", productName: "5kg×2袋装包心贡丸", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 975, nightCapacity: 790,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0174", productId: "AJ-SKU-138", productName: "5kg×2袋装包心贡丸", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 993, nightCapacity: 838,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0175", productId: "AJ-SKU-139", productName: "2.5kg×4袋装墨鱼丸经典款", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 985, nightCapacity: 1018,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0176", productId: "AJ-SKU-140", productName: "500g×20袋装虾味球黑椒味", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1360, nightCapacity: 1314,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0177", productId: "AJ-SKU-141", productName: "150g×40袋装蟹籽虾滑出口版", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1658, nightCapacity: 1539,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0178", productId: "AJ-SKU-142", productName: "500g×20袋装葱油饼黑椒味", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 1379, nightCapacity: 1308,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0179", productId: "AJ-SKU-143", productName: "1kg×10袋装牛肉馅饼香辣味", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1541, nightCapacity: 1292,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0180", productId: "AJ-SKU-144", productName: "500g×20袋装调理串轻享装", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 1414, nightCapacity: 1177,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0181", productId: "AJ-SKU-145", productName: "2.5kg×4袋装香酥鸡块黑椒味", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 1027, nightCapacity: 960,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0182", productId: "AJ-SKU-146", productName: "300g×30袋装鱼籽福袋盒马定制", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 760, nightCapacity: 723,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0183", productId: "AJ-SKU-146", productName: "300g×30袋装鱼籽福袋盒马定制", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 1161, nightCapacity: 1070,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0184", productId: "AJ-SKU-147", productName: "2.5kg×4袋装盐酥鸡大客户版", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 1468, nightCapacity: 1219,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0185", productId: "AJ-SKU-147", productName: "2.5kg×4袋装盐酥鸡大客户版", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 983, nightCapacity: 956,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0186", productId: "AJ-SKU-148", productName: "1kg×10袋装鱼肉丸出口版", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1294, nightCapacity: 1226,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0187", productId: "AJ-SKU-149", productName: "500g×20袋装龙虾球经典款", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1267, nightCapacity: 1316,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0188", productId: "AJ-SKU-149", productName: "500g×20袋装龙虾球经典款", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1330, nightCapacity: 1118,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0189", productId: "AJ-SKU-150", productName: "10片×20袋装馄饨轻享装", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 1181, nightCapacity: 1077,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0190", productId: "AJ-SKU-151", productName: "150g×40袋装虾滑香辣味", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 805, nightCapacity: 760,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0191", productId: "AJ-SKU-152", productName: "500g×20袋装牛肉馅饼出口版", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1366, nightCapacity: 1283,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0192", productId: "AJ-SKU-153", productName: "1kg×10袋装关东煮组合香辣味", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 628, nightCapacity: 534,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0193", productId: "AJ-SKU-154", productName: "200g×30袋装培根卷餐饮装", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 1791, nightCapacity: 1700,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0194", productId: "AJ-SKU-155", productName: "2.5kg×4袋装海胆包", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 948, nightCapacity: 892,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0195", productId: "AJ-SKU-155", productName: "2.5kg×4袋装海胆包", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1450, nightCapacity: 1372,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0196", productId: "AJ-SKU-156", productName: "300g×30袋装香辣虾滑盒马定制", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 665, nightCapacity: 582,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0197", productId: "AJ-SKU-156", productName: "300g×30袋装香辣虾滑盒马定制", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 759, nightCapacity: 701,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0198", productId: "AJ-SKU-157", productName: "2.5kg×4袋装馅饼黑椒味", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1384, nightCapacity: 1301,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0199", productId: "AJ-SKU-158", productName: "5kg×2袋装火山石烤肠原味", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 1288, nightCapacity: 1308,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0200", productId: "AJ-SKU-158", productName: "5kg×2袋装火山石烤肠原味", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 1357, nightCapacity: 1150,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0201", productId: "AJ-SKU-159", productName: "200g×30袋装芝士肉丸盒马定制", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1789, nightCapacity: 1667,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0202", productId: "AJ-SKU-160", productName: "20片×10袋装蒸饺餐饮装", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1321, nightCapacity: 1246,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0203", productId: "AJ-SKU-161", productName: "500g×20袋装黄金鱼板藤椒味", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1029, nightCapacity: 859,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0204", productId: "AJ-SKU-161", productName: "500g×20袋装黄金鱼板藤椒味", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1421, nightCapacity: 1145,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0205", productId: "AJ-SKU-162", productName: "350g×20袋装藕盒出口版", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 1472, nightCapacity: 1220,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0206", productId: "AJ-SKU-163", productName: "2.5kg×4袋装馄饨家庭装", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1010, nightCapacity: 947,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0207", productId: "AJ-SKU-164", productName: "240g×20袋装虾味球藤椒味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1310, nightCapacity: 1149,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0208", productId: "AJ-SKU-165", productName: "2.5kg×4袋装麻辣烫组合", machineId: "PK-005",
    machineName: "给袋式包装机A", dayCapacity: 768, nightCapacity: 715,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0209", productId: "AJ-SKU-166", productName: "350g×20袋装鸡柳香辣味", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 1256, nightCapacity: 1230,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0210", productId: "AJ-SKU-167", productName: "240g×20袋装黄金鱼板", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 738, nightCapacity: 756,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0211", productId: "AJ-SKU-168", productName: "1kg×10袋装关东煮组合盒马定制", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1212, nightCapacity: 1201,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0212", productId: "AJ-SKU-169", productName: "6kg×1零称蟹味排经典款", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1227, nightCapacity: 1118,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0213", productId: "AJ-SKU-170", productName: "5kg×2袋装藕盒经典款", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1222, nightCapacity: 1058,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0214", productId: "AJ-SKU-171", productName: "500g×20袋装麻辣烫组合经典款", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 622, nightCapacity: 499,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0215", productId: "AJ-SKU-172", productName: "1kg×10袋装虾味球轻享装", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1060, nightCapacity: 1014,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0216", productId: "AJ-SKU-172", productName: "1kg×10袋装虾味球轻享装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 951, nightCapacity: 975,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0217", productId: "AJ-SKU-173", productName: "2.5kg×4袋装蒸饺餐饮装", machineId: "PK-025",
    machineName: "贴标装箱线", dayCapacity: 1597, nightCapacity: 1292,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0218", productId: "AJ-SKU-174", productName: "5kg×2袋装猪肉丸轻享装", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 644, nightCapacity: 573,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0219", productId: "AJ-SKU-174", productName: "5kg×2袋装猪肉丸轻享装", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1399, nightCapacity: 1384,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0220", productId: "AJ-SKU-175", productName: "1kg×10袋装藕盒经典款", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 860, nightCapacity: 758,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0221", productId: "AJ-SKU-176", productName: "240g×20袋装龙虾球黑椒味", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 1234, nightCapacity: 1194,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0222", productId: "AJ-SKU-177", productName: "120g×50袋装香辣鱼丸大客户版", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1083, nightCapacity: 1005,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0223", productId: "AJ-SKU-178", productName: "500g×20袋装盐酥鸡黑椒味", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 608, nightCapacity: 626,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0224", productId: "AJ-SKU-179", productName: "500g×20袋装酥皮卷", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1496, nightCapacity: 1316,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0225", productId: "AJ-SKU-180", productName: "20片×10袋装年糕黑椒味", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 1209, nightCapacity: 1041,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0226", productId: "AJ-SKU-181", productName: "500g×20袋装鸡排香辣味", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 1291, nightCapacity: 1057,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0227", productId: "AJ-SKU-182", productName: "2.5kg×4袋装藕盒", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 716, nightCapacity: 623,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0228", productId: "AJ-SKU-183", productName: "200g×30袋装撒尿肉丸原味", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1500, nightCapacity: 1418,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0229", productId: "AJ-SKU-184", productName: "5kg×2袋装牛排", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 965, nightCapacity: 798,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0230", productId: "AJ-SKU-184", productName: "5kg×2袋装牛排", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 1183, nightCapacity: 1128,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0231", productId: "AJ-SKU-185", productName: "200g×30袋装奥尔良鸡柳家庭装", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 1746, nightCapacity: 1719,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0232", productId: "AJ-SKU-186", productName: "240g×20袋装鱼丸经典款", machineId: "PK-005",
    machineName: "给袋式包装机A", dayCapacity: 1606, nightCapacity: 1368,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0233", productId: "AJ-SKU-187", productName: "5kg×2袋装黑椒牛肉条香辣味", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 1296, nightCapacity: 1041,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0234", productId: "AJ-SKU-188", productName: "200g×30袋装鳕鱼排香辣味", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1115, nightCapacity: 1130,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0235", productId: "AJ-SKU-188", productName: "200g×30袋装鳕鱼排香辣味", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1213, nightCapacity: 1178,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0236", productId: "AJ-SKU-189", productName: "6kg×1零称芝士鱼丸家庭装", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 1307, nightCapacity: 1320,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0237", productId: "AJ-SKU-190", productName: "5kg×2袋装火山石烤肠家庭装", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 692, nightCapacity: 566,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0238", productId: "AJ-SKU-191", productName: "400g×20袋装馅饼经典款", machineId: "PK-018",
    machineName: "面点包装线", dayCapacity: 733, nightCapacity: 644,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0239", productId: "AJ-SKU-192", productName: "200g×30袋装香酥鸡块餐饮装", machineId: "PK-025",
    machineName: "贴标装箱线", dayCapacity: 618, nightCapacity: 620,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0240", productId: "AJ-SKU-193", productName: "2.5kg×4袋装香菇贡丸黑椒味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1076, nightCapacity: 1024,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0241", productId: "AJ-SKU-194", productName: "5kg×2袋装培根卷", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1410, nightCapacity: 1342,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0242", productId: "AJ-SKU-195", productName: "1kg×10袋装虾滑出口版", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1234, nightCapacity: 1096,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0243", productId: "AJ-SKU-196", productName: "5kg×2袋装藕盒藤椒味", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 1022, nightCapacity: 1064,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0244", productId: "AJ-SKU-197", productName: "800g×12袋装鱼籽福袋大客户版", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 674, nightCapacity: 676,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0245", productId: "AJ-SKU-198", productName: "120g×50袋装龙虾球黑椒味", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1741, nightCapacity: 1434,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0246", productId: "AJ-SKU-199", productName: "240g×20袋装芝士鱼丸家庭装", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 845, nightCapacity: 731,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0247", productId: "AJ-SKU-200", productName: "2.5kg×4袋装馅饼B版", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 825, nightCapacity: 711,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0248", productId: "AJ-SKU-201", productName: "1kg×10袋装鲜虾滑经典款", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1096, nightCapacity: 1115,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0249", productId: "AJ-SKU-202", productName: "300g×30袋装鱼籽虾滑黑椒味", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 813, nightCapacity: 680,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0250", productId: "AJ-SKU-203", productName: "1kg×10袋装海鲜组合包黑椒味", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 479, nightCapacity: 501,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0251", productId: "AJ-SKU-204", productName: "500g×20袋装鱼竹轮香辣味", machineId: "PK-025",
    machineName: "贴标装箱线", dayCapacity: 1789, nightCapacity: 1560,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0252", productId: "AJ-SKU-205", productName: "500g×20袋装烧麦盒马定制", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1362, nightCapacity: 1259,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0253", productId: "AJ-SKU-206", productName: "500g×20袋装培根卷B版", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 768, nightCapacity: 771,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0254", productId: "AJ-SKU-206", productName: "500g×20袋装培根卷B版", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 927, nightCapacity: 913,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0255", productId: "AJ-SKU-207", productName: "2.5kg×4袋装墨鱼丸藤椒味", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1013, nightCapacity: 1018,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0256", productId: "AJ-SKU-208", productName: "200g×30袋装贡丸黑椒味", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1768, nightCapacity: 1556,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0257", productId: "AJ-SKU-209", productName: "200g×30袋装黄金鱼板经典款", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1326, nightCapacity: 1217,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0258", productId: "AJ-SKU-209", productName: "200g×30袋装黄金鱼板经典款", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 891, nightCapacity: 826,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0259", productId: "AJ-SKU-210", productName: "200g×30袋装小酥肉香辣味", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 961, nightCapacity: 819,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0260", productId: "AJ-SKU-211", productName: "500g×20袋装小酥肉盒马定制", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 1321, nightCapacity: 1199,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0261", productId: "AJ-SKU-212", productName: "500g×20袋装蟹籽福袋经典款", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 956, nightCapacity: 846,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0262", productId: "AJ-SKU-213", productName: "1kg×10袋装芝士鱼丸盒马定制", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1375, nightCapacity: 1117,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0263", productId: "AJ-SKU-213", productName: "1kg×10袋装芝士鱼丸盒马定制", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1084, nightCapacity: 1032,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0264", productId: "AJ-SKU-214", productName: "200g×30袋装包心鱼丸藤椒味", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1054, nightCapacity: 866,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0265", productId: "AJ-SKU-215", productName: "10片×20袋装牛肉馅饼轻享装", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 1150, nightCapacity: 1130,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0266", productId: "AJ-SKU-215", productName: "10片×20袋装牛肉馅饼轻享装", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1194, nightCapacity: 996,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0267", productId: "AJ-SKU-216", productName: "6kg×1零称芝士鱼丸B版", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1377, nightCapacity: 1300,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0268", productId: "AJ-SKU-217", productName: "1kg×10袋装香菇贡丸餐饮装", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 851, nightCapacity: 748,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0269", productId: "AJ-SKU-218", productName: "500g×20袋装包心鱼丸餐饮装", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 658, nightCapacity: 573,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0270", productId: "AJ-SKU-219", productName: "2.5kg×4袋装葱油饼餐饮装", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 882, nightCapacity: 812,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0271", productId: "AJ-SKU-220", productName: "2.5kg×4袋装茄盒盒马定制", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1408, nightCapacity: 1391,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0272", productId: "AJ-SKU-220", productName: "2.5kg×4袋装茄盒盒马定制", machineId: "PK-005",
    machineName: "给袋式包装机A", dayCapacity: 871, nightCapacity: 744,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0273", productId: "AJ-SKU-221", productName: "400g×20袋装香菇贡丸黑椒味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1648, nightCapacity: 1476,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0274", productId: "AJ-SKU-222", productName: "1kg×10袋装龙虾球轻享装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 790, nightCapacity: 699,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0275", productId: "AJ-SKU-223", productName: "1kg×10袋装墨鱼丸轻享装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1197, nightCapacity: 1033,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0276", productId: "AJ-SKU-224", productName: "2.5kg×4袋装鱼籽福袋盒马定制", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 1024, nightCapacity: 954,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0277", productId: "AJ-SKU-225", productName: "500g×20袋装香菇贡丸轻享装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 978, nightCapacity: 809,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0278", productId: "AJ-SKU-226", productName: "1kg×10袋装虾滑餐饮装", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 882, nightCapacity: 829,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0279", productId: "AJ-SKU-227", productName: "2.5kg×4袋装香辣虾滑藤椒味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1265, nightCapacity: 1079,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0280", productId: "AJ-SKU-228", productName: "500g×20袋装海胆包原味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 928, nightCapacity: 930,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0281", productId: "AJ-SKU-229", productName: "400g×20袋装蒸饺原味", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 916, nightCapacity: 857,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0282", productId: "AJ-SKU-229", productName: "400g×20袋装蒸饺原味", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1256, nightCapacity: 1242,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0283", productId: "AJ-SKU-230", productName: "5kg×2袋装脆骨丸家庭装", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1433, nightCapacity: 1328,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0284", productId: "AJ-SKU-231", productName: "2.5kg×4袋装香菇贡丸盒马定制", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1754, nightCapacity: 1609,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0285", productId: "AJ-SKU-232", productName: "10片×20袋装烧麦黑椒味", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 1243, nightCapacity: 1112,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0286", productId: "AJ-SKU-233", productName: "500g×20袋装培根卷黑椒味", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 991, nightCapacity: 1025,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0287", productId: "AJ-SKU-234", productName: "2.5kg×4袋装鲜虾滑餐饮装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 888, nightCapacity: 910,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0288", productId: "AJ-SKU-235", productName: "300g×30袋装丸类组合包原味", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1275, nightCapacity: 1317,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0289", productId: "AJ-SKU-235", productName: "300g×30袋装丸类组合包原味", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1108, nightCapacity: 937,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0290", productId: "AJ-SKU-236", productName: "240g×20袋装虾味球餐饮装", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 1059, nightCapacity: 1065,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0291", productId: "AJ-SKU-237", productName: "400g×20袋装春卷盒马定制", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 647, nightCapacity: 678,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0292", productId: "AJ-SKU-238", productName: "2.5kg×4袋装鱼肉丸原味", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 608, nightCapacity: 548,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0293", productId: "AJ-SKU-238", productName: "2.5kg×4袋装鱼肉丸原味", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 792, nightCapacity: 804,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0294", productId: "AJ-SKU-239", productName: "500g×20袋装鲜虾滑团餐装", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1509, nightCapacity: 1534,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0295", productId: "AJ-SKU-240", productName: "1kg×10袋装香辣虾滑藤椒味", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1392, nightCapacity: 1131,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0296", productId: "AJ-SKU-241", productName: "1kg×10袋装葱油饼经典款", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 1568, nightCapacity: 1539,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0297", productId: "AJ-SKU-241", productName: "1kg×10袋装葱油饼经典款", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 777, nightCapacity: 685,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0298", productId: "AJ-SKU-242", productName: "2.5kg×4袋装包心贡丸藤椒味", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 855, nightCapacity: 873,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0299", productId: "AJ-SKU-243", productName: "500g×20袋装蟹味排出口版", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1024, nightCapacity: 997,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0300", productId: "AJ-SKU-244", productName: "240g×20袋装龙虾球团餐装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1336, nightCapacity: 1112,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0301", productId: "AJ-SKU-245", productName: "200g×30袋装鱼肉丸藤椒味", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1289, nightCapacity: 1318,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0302", productId: "AJ-SKU-245", productName: "200g×30袋装鱼肉丸藤椒味", machineId: "PK-025",
    machineName: "贴标装箱线", dayCapacity: 1123, nightCapacity: 1038,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0303", productId: "AJ-SKU-246", productName: "500g×20袋装脆皮鸡米花黑椒味", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 996, nightCapacity: 1025,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0304", productId: "AJ-SKU-247", productName: "5kg×2袋装小酥肉轻享装", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 947, nightCapacity: 981,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0305", productId: "AJ-SKU-248", productName: "300g×30袋装丸类组合包升级款", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1274, nightCapacity: 1326,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0306", productId: "AJ-SKU-249", productName: "300g×30袋装鱼籽福袋黑椒味", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1194, nightCapacity: 1173,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0307", productId: "AJ-SKU-250", productName: "350g×20袋装玉米肠藤椒味", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1263, nightCapacity: 1247,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0308", productId: "AJ-SKU-250", productName: "350g×20袋装玉米肠藤椒味", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1064, nightCapacity: 1104,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0309", productId: "AJ-SKU-251", productName: "5kg×2袋装盐酥鸡经典款", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 757, nightCapacity: 651,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0310", productId: "AJ-SKU-252", productName: "500g×20袋装茄盒出口版", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 998, nightCapacity: 921,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0311", productId: "AJ-SKU-253", productName: "500g×20袋装蟹籽虾滑餐饮装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 602, nightCapacity: 490,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0312", productId: "AJ-SKU-254", productName: "1kg×10袋装海胆包餐饮装", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 910, nightCapacity: 830,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0313", productId: "AJ-SKU-255", productName: "1kg×10袋装鱼豆腐", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1453, nightCapacity: 1386,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0314", productId: "AJ-SKU-256", productName: "10片×20袋装米汉堡盒马定制", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1140, nightCapacity: 1127,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0315", productId: "AJ-SKU-256", productName: "10片×20袋装米汉堡盒马定制", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 1007, nightCapacity: 878,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0316", productId: "AJ-SKU-257", productName: "240g×20袋装鱼竹轮经典款", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1143, nightCapacity: 1073,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0317", productId: "AJ-SKU-258", productName: "20片×10袋装锅贴餐饮装", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 1286, nightCapacity: 1160,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0318", productId: "AJ-SKU-259", productName: "2.5kg×4袋装蔬菜丸餐饮装", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 627, nightCapacity: 541,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0319", productId: "AJ-SKU-259", productName: "2.5kg×4袋装蔬菜丸餐饮装", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1081, nightCapacity: 1040,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0320", productId: "AJ-SKU-260", productName: "2.5kg×4袋装香酥鸡块餐饮装", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1202, nightCapacity: 1190,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0321", productId: "AJ-SKU-261", productName: "500g×20袋装藕盒餐饮装", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 925, nightCapacity: 781,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0322", productId: "AJ-SKU-262", productName: "800g×12袋装蟹籽福袋餐饮装", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 956, nightCapacity: 990,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0323", productId: "AJ-SKU-262", productName: "800g×12袋装蟹籽福袋餐饮装", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 879, nightCapacity: 782,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0324", productId: "AJ-SKU-263", productName: "2.5kg×4袋装手抓饼经典款", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 505, nightCapacity: 437,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0325", productId: "AJ-SKU-264", productName: "800g×12袋装芝士丸餐饮装", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1235, nightCapacity: 1046,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0326", productId: "AJ-SKU-265", productName: "2.5kg×4袋装撒尿肉丸黑椒味", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1326, nightCapacity: 1114,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0327", productId: "AJ-SKU-266", productName: "350g×20袋装奥尔良鸡柳藤椒味", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 479, nightCapacity: 484,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0328", productId: "AJ-SKU-266", productName: "350g×20袋装奥尔良鸡柳藤椒味", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1488, nightCapacity: 1200,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0329", productId: "AJ-SKU-267", productName: "1kg×10袋装虾滑香辣味", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 964, nightCapacity: 979,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0330", productId: "AJ-SKU-268", productName: "200g×30袋装香菇贡丸盒马定制", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1372, nightCapacity: 1411,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0331", productId: "AJ-SKU-269", productName: "1kg×10袋装藕盒B版", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 1045, nightCapacity: 942,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0332", productId: "AJ-SKU-270", productName: "240g×20袋装蟹棒原味", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 684, nightCapacity: 615,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0333", productId: "AJ-SKU-270", productName: "240g×20袋装蟹棒原味", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 832, nightCapacity: 862,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0334", productId: "AJ-SKU-271", productName: "1kg×10袋装芝士鱼丸升级款", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 931, nightCapacity: 767,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0335", productId: "AJ-SKU-272", productName: "1kg×10袋装鱼豆腐盒马定制", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 689, nightCapacity: 711,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0336", productId: "AJ-SKU-273", productName: "200g×30袋装牛排黑椒味", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 357, nightCapacity: 294,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0337", productId: "AJ-SKU-273", productName: "200g×30袋装牛排黑椒味", machineId: "PK-005",
    machineName: "给袋式包装机A", dayCapacity: 1375, nightCapacity: 1132,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0338", productId: "AJ-SKU-274", productName: "5kg×2袋装脆骨丸经典款", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1032, nightCapacity: 825,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0339", productId: "AJ-SKU-274", productName: "5kg×2袋装脆骨丸经典款", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 714, nightCapacity: 589,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0340", productId: "AJ-SKU-275", productName: "240g×20袋装鱼豆腐餐饮装", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 772, nightCapacity: 752,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0341", productId: "AJ-SKU-276", productName: "6kg×1零称鱼丸黑椒味", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 647, nightCapacity: 641,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0342", productId: "AJ-SKU-277", productName: "200g×30袋装藕盒藤椒味", machineId: "PK-005",
    machineName: "给袋式包装机A", dayCapacity: 603, nightCapacity: 574,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0343", productId: "AJ-SKU-277", productName: "200g×30袋装藕盒藤椒味", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1499, nightCapacity: 1277,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0344", productId: "AJ-SKU-278", productName: "1kg×10袋装锅贴原味", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1071, nightCapacity: 930,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0345", productId: "AJ-SKU-279", productName: "500g×20袋装藕盒家庭装", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 475, nightCapacity: 457,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0346", productId: "AJ-SKU-280", productName: "1kg×10袋装虾滑", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1103, nightCapacity: 936,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0347", productId: "AJ-SKU-281", productName: "1kg×10袋装藕盒家庭装", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 955, nightCapacity: 854,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0348", productId: "AJ-SKU-282", productName: "6kg×1零称蟹棒轻享装", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 581, nightCapacity: 503,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0349", productId: "AJ-SKU-283", productName: "300g×30袋装鲜虾滑盒马定制", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 702, nightCapacity: 562,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0350", productId: "AJ-SKU-284", productName: "500g×20袋装茄盒香辣味", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 334, nightCapacity: 270,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0351", productId: "AJ-SKU-285", productName: "500g×20袋装芝士虾滑经典款", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 637, nightCapacity: 569,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0352", productId: "AJ-SKU-286", productName: "400g×20袋装包心贡丸原味", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 455, nightCapacity: 435,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0353", productId: "AJ-SKU-286", productName: "400g×20袋装包心贡丸原味", machineId: "PK-025",
    machineName: "贴标装箱线", dayCapacity: 945, nightCapacity: 984,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0354", productId: "AJ-SKU-287", productName: "300g×30袋装蟹籽福袋经典款", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 855, nightCapacity: 895,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0355", productId: "AJ-SKU-287", productName: "300g×30袋装蟹籽福袋经典款", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1013, nightCapacity: 944,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0356", productId: "AJ-SKU-288", productName: "350g×20袋装玉米肠经典款", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 896, nightCapacity: 823,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0357", productId: "AJ-SKU-289", productName: "5kg×2袋装香酥鸡块盒马定制", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 409, nightCapacity: 362,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0358", productId: "AJ-SKU-290", productName: "1kg×10袋装包心鱼丸出口版", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 1454, nightCapacity: 1373,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0359", productId: "AJ-SKU-291", productName: "500g×20袋装猪肉丸黑椒味", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 886, nightCapacity: 898,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0360", productId: "AJ-SKU-292", productName: "1kg×10袋装猪肉大葱水饺原味", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 1161, nightCapacity: 1194,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0361", productId: "AJ-SKU-293", productName: "1kg×10袋装蟹籽虾滑大客户版", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 1229, nightCapacity: 1136,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0362", productId: "AJ-SKU-294", productName: "20片×10袋装猪肉大葱水饺香辣味", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 868, nightCapacity: 856,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0363", productId: "AJ-SKU-295", productName: "120g×50袋装龙虾球出口版", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1165, nightCapacity: 1056,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0364", productId: "AJ-SKU-296", productName: "1kg×10袋装火锅组合丸藤椒味", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 746, nightCapacity: 781,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0365", productId: "AJ-SKU-297", productName: "200g×30袋装猪肉丸", machineId: "PK-025",
    machineName: "贴标装箱线", dayCapacity: 945, nightCapacity: 888,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0366", productId: "AJ-SKU-298", productName: "500g×20袋装脆皮鸡米花出口版", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 1266, nightCapacity: 1190,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0367", productId: "AJ-SKU-299", productName: "200g×30袋装贡丸出口版", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 1128, nightCapacity: 1164,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0368", productId: "AJ-SKU-300", productName: "6kg×1零称鳕鱼排家庭装", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 1168, nightCapacity: 988,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0369", productId: "AJ-SKU-301", productName: "200g×30袋装鸡排藤椒味", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 636, nightCapacity: 510,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0370", productId: "AJ-SKU-301", productName: "200g×30袋装鸡排藤椒味", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 769, nightCapacity: 682,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0371", productId: "AJ-SKU-302", productName: "5kg×2袋装脆皮鸡米花餐饮装", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 609, nightCapacity: 603,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0372", productId: "AJ-SKU-303", productName: "500g×20袋装调理串盒马定制", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 785, nightCapacity: 678,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0373", productId: "AJ-SKU-303", productName: "500g×20袋装调理串盒马定制", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 1090, nightCapacity: 1050,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0374", productId: "AJ-SKU-304", productName: "240g×20袋装龙虾球轻享装", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 706, nightCapacity: 637,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0375", productId: "AJ-SKU-305", productName: "2.5kg×4袋装虾滑轻享装", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1175, nightCapacity: 1043,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0376", productId: "AJ-SKU-306", productName: "500g×20袋装火山石烤肠家庭装", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 811, nightCapacity: 658,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0377", productId: "AJ-SKU-307", productName: "5kg×2袋装牛肉丸餐饮装", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1421, nightCapacity: 1477,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0378", productId: "AJ-SKU-307", productName: "5kg×2袋装牛肉丸餐饮装", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1149, nightCapacity: 1081,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0379", productId: "AJ-SKU-308", productName: "1kg×10袋装关东煮组合大客户版", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 715, nightCapacity: 613,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0380", productId: "AJ-SKU-308", productName: "1kg×10袋装关东煮组合大客户版", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1194, nightCapacity: 1132,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0381", productId: "AJ-SKU-309", productName: "240g×20袋装芝士鱼丸香辣味", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 1573, nightCapacity: 1474,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0382", productId: "AJ-SKU-310", productName: "2.5kg×4袋装牛排家庭装", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 981, nightCapacity: 868,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0383", productId: "AJ-SKU-311", productName: "120g×50袋装鱼豆腐轻享装", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1363, nightCapacity: 1365,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0384", productId: "AJ-SKU-312", productName: "200g×30袋装鱼肉丸餐饮装", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1417, nightCapacity: 1189,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0385", productId: "AJ-SKU-313", productName: "500g×20袋装鱼竹轮经典款", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 1333, nightCapacity: 1244,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0386", productId: "AJ-SKU-314", productName: "350g×20袋装玉米肠原味", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 608, nightCapacity: 598,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0387", productId: "AJ-SKU-314", productName: "350g×20袋装玉米肠原味", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1207, nightCapacity: 1206,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0388", productId: "AJ-SKU-315", productName: "200g×30袋装鱼竹轮原味", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1447, nightCapacity: 1329,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0389", productId: "AJ-SKU-316", productName: "350g×20袋装鸡柳出口版", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 1103, nightCapacity: 908,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0390", productId: "AJ-SKU-317", productName: "1kg×10袋装撒尿肉丸", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1721, nightCapacity: 1731,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0391", productId: "AJ-SKU-318", productName: "350g×20袋装牛排餐饮装", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 683, nightCapacity: 590,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0392", productId: "AJ-SKU-319", productName: "2.5kg×4袋装鱼肉丸黑椒味", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1123, nightCapacity: 980,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0393", productId: "AJ-SKU-320", productName: "2.5kg×4袋装牛排香辣味", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 1413, nightCapacity: 1426,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0394", productId: "AJ-SKU-321", productName: "5kg×2袋装奥尔良鸡柳经典款", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 785, nightCapacity: 755,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0395", productId: "AJ-SKU-322", productName: "500g×20袋装撒尿肉丸盒马定制", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 765, nightCapacity: 773,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0396", productId: "AJ-SKU-322", productName: "500g×20袋装撒尿肉丸盒马定制", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 811, nightCapacity: 704,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0397", productId: "AJ-SKU-323", productName: "10片×20袋装烧麦家庭装", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1519, nightCapacity: 1226,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0398", productId: "AJ-SKU-324", productName: "300g×30袋装蔬菜丸原味", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1455, nightCapacity: 1471,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0399", productId: "AJ-SKU-325", productName: "400g×20袋装墨鱼丸大客户版", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1020, nightCapacity: 1028,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0400", productId: "AJ-SKU-326", productName: "2.5kg×4袋装酥皮卷大客户版", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 707, nightCapacity: 649,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0401", productId: "AJ-SKU-327", productName: "2.5kg×4袋装鱼籽福袋家庭装", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1722, nightCapacity: 1439,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0402", productId: "AJ-SKU-327", productName: "2.5kg×4袋装鱼籽福袋家庭装", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 1566, nightCapacity: 1591,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0403", productId: "AJ-SKU-328", productName: "500g×20袋装蔬菜丸餐饮装", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1361, nightCapacity: 1408,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0404", productId: "AJ-SKU-329", productName: "120g×50袋装鱼丸区域装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 687, nightCapacity: 690,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0405", productId: "AJ-SKU-330", productName: "5kg×2袋装小酥肉原味", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1382, nightCapacity: 1281,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0406", productId: "AJ-SKU-331", productName: "2.5kg×4袋装麻辣烫组合团餐装", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 785, nightCapacity: 818,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0407", productId: "AJ-SKU-332", productName: "1kg×10袋装馅饼", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 997, nightCapacity: 889,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0408", productId: "AJ-SKU-333", productName: "500g×20袋装龙虾球大客户版", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 1761, nightCapacity: 1536,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0409", productId: "AJ-SKU-334", productName: "300g×30袋装海胆包经典款", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 873, nightCapacity: 844,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0410", productId: "AJ-SKU-335", productName: "5kg×2袋装贡丸原味", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 1144, nightCapacity: 1010,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0411", productId: "AJ-SKU-336", productName: "2.5kg×4袋装丸类组合包大客户版", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1162, nightCapacity: 1018,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0412", productId: "AJ-SKU-337", productName: "240g×20袋装香辣鱼丸盒马定制", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1630, nightCapacity: 1325,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0413", productId: "AJ-SKU-338", productName: "1kg×10袋装包心鱼丸家庭装", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1271, nightCapacity: 1232,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0414", productId: "AJ-SKU-339", productName: "1kg×10袋装包心贡丸家庭装", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 825, nightCapacity: 791,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0415", productId: "AJ-SKU-340", productName: "20片×10袋装猪肉大葱水饺", machineId: "PK-018",
    machineName: "面点包装线", dayCapacity: 1426, nightCapacity: 1475,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0416", productId: "AJ-SKU-340", productName: "20片×10袋装猪肉大葱水饺", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 1027, nightCapacity: 988,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0417", productId: "AJ-SKU-341", productName: "1kg×10袋装春卷原味", machineId: "PK-018",
    machineName: "面点包装线", dayCapacity: 961, nightCapacity: 809,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0418", productId: "AJ-SKU-341", productName: "1kg×10袋装春卷原味", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 746, nightCapacity: 626,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0419", productId: "AJ-SKU-342", productName: "200g×30袋装芝士鱼丸出口版", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1338, nightCapacity: 1142,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0420", productId: "AJ-SKU-343", productName: "500g×20袋装烧麦出口版", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 947, nightCapacity: 867,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0421", productId: "AJ-SKU-343", productName: "500g×20袋装烧麦出口版", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1032, nightCapacity: 924,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0422", productId: "AJ-SKU-344", productName: "500g×20袋装蟹籽虾滑轻享装", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1144, nightCapacity: 1139,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0423", productId: "AJ-SKU-345", productName: "500g×20袋装芝士鱼丸大客户版", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 1122, nightCapacity: 1113,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0424", productId: "AJ-SKU-346", productName: "120g×50袋装龙虾球大客户版", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 1291, nightCapacity: 1149,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0425", productId: "AJ-SKU-346", productName: "120g×50袋装龙虾球大客户版", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1486, nightCapacity: 1528,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0426", productId: "AJ-SKU-347", productName: "300g×30袋装芝士丸香辣味", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 920, nightCapacity: 759,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0427", productId: "AJ-SKU-348", productName: "200g×30袋装藕盒", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 974, nightCapacity: 919,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0428", productId: "AJ-SKU-349", productName: "1kg×10袋装猪肉丸大客户版", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 808, nightCapacity: 722,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0429", productId: "AJ-SKU-350", productName: "6kg×1零称鱼排轻享装", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1361, nightCapacity: 1369,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0430", productId: "AJ-SKU-351", productName: "500g×20袋装鸡柳大客户版", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 1277, nightCapacity: 1088,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0431", productId: "AJ-SKU-351", productName: "500g×20袋装鸡柳大客户版", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 1317, nightCapacity: 1348,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0432", productId: "AJ-SKU-352", productName: "6kg×1零称蟹棒餐饮装", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 1001, nightCapacity: 807,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0433", productId: "AJ-SKU-353", productName: "2.5kg×4袋装关东煮组合", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1393, nightCapacity: 1203,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0434", productId: "AJ-SKU-353", productName: "2.5kg×4袋装关东煮组合", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 791, nightCapacity: 778,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0435", productId: "AJ-SKU-354", productName: "1kg×10袋装汤圆大客户版", machineId: "PK-018",
    machineName: "面点包装线", dayCapacity: 1513, nightCapacity: 1245,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0436", productId: "AJ-SKU-355", productName: "300g×30袋装芝士丸出口版", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1402, nightCapacity: 1469,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0437", productId: "AJ-SKU-356", productName: "400g×20袋装馄饨盒马定制", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 945, nightCapacity: 983,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0438", productId: "AJ-SKU-356", productName: "400g×20袋装馄饨盒马定制", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 1434, nightCapacity: 1478,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0439", productId: "AJ-SKU-357", productName: "500g×20袋装鱼籽福袋家庭装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1325, nightCapacity: 1368,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0440", productId: "AJ-SKU-358", productName: "200g×30袋装香辣鱼丸", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1460, nightCapacity: 1339,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0441", productId: "AJ-SKU-359", productName: "150g×40袋装香辣虾滑原味", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1169, nightCapacity: 1038,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0442", productId: "AJ-SKU-360", productName: "400g×20袋装包心贡丸轻享装", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1457, nightCapacity: 1500,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0443", productId: "AJ-SKU-361", productName: "200g×30袋装包心贡丸黑椒味", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1127, nightCapacity: 1017,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0444", productId: "AJ-SKU-362", productName: "200g×30袋装虾味球香辣味", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 1127, nightCapacity: 949,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0445", productId: "AJ-SKU-363", productName: "1kg×10袋装鱼豆腐餐饮装", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1354, nightCapacity: 1381,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0446", productId: "AJ-SKU-364", productName: "500g×20袋装鱼竹轮团餐装", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 1438, nightCapacity: 1378,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0447", productId: "AJ-SKU-364", productName: "500g×20袋装鱼竹轮团餐装", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1260, nightCapacity: 1162,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0448", productId: "AJ-SKU-365", productName: "200g×30袋装鱼肉丸精选款", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1479, nightCapacity: 1313,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0449", productId: "AJ-SKU-366", productName: "2.5kg×4袋装海胆包家庭装", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 658, nightCapacity: 551,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0450", productId: "AJ-SKU-367", productName: "5kg×2袋装脆骨丸团餐装", machineId: "PK-005",
    machineName: "给袋式包装机A", dayCapacity: 830, nightCapacity: 693,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0451", productId: "AJ-SKU-367", productName: "5kg×2袋装脆骨丸团餐装", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 843, nightCapacity: 698,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0452", productId: "AJ-SKU-368", productName: "400g×20袋装酥皮卷", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 930, nightCapacity: 889,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0453", productId: "AJ-SKU-369", productName: "2.5kg×4袋装墨鱼丸盒马定制", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1448, nightCapacity: 1380,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0454", productId: "AJ-SKU-369", productName: "2.5kg×4袋装墨鱼丸盒马定制", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 865, nightCapacity: 801,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0455", productId: "AJ-SKU-370", productName: "5kg×2袋装鸡柳轻享装", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 1132, nightCapacity: 1083,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0456", productId: "AJ-SKU-371", productName: "20片×10袋装蒸饺经典款", machineId: "PK-018",
    machineName: "面点包装线", dayCapacity: 1087, nightCapacity: 918,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0457", productId: "AJ-SKU-372", productName: "5kg×2袋装脆皮鸡米花", machineId: "PK-008",
    machineName: "托盒封膜机", dayCapacity: 962, nightCapacity: 974,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0458", productId: "AJ-SKU-373", productName: "2.5kg×4袋装火锅组合丸家庭装", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 1482, nightCapacity: 1295,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0459", productId: "AJ-SKU-374", productName: "1kg×10袋装烧麦黑椒味", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 957, nightCapacity: 921,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0460", productId: "AJ-SKU-375", productName: "500g×20袋装虾味球精选款", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 821, nightCapacity: 792,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0461", productId: "AJ-SKU-376", productName: "500g×20袋装关东煮组合香辣味", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 346, nightCapacity: 304,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0462", productId: "AJ-SKU-377", productName: "400g×20袋装芝士肉丸经典款", machineId: "PK-011",
    machineName: "称重包装机", dayCapacity: 611, nightCapacity: 564,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0463", productId: "AJ-SKU-378", productName: "200g×30袋装芝士鱼丸轻享装", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 671, nightCapacity: 650,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0464", productId: "AJ-SKU-379", productName: "400g×20袋装馅饼B版", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 752, nightCapacity: 755,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0465", productId: "AJ-SKU-380", productName: "5kg×2袋装鱼肉丸大客户版", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1446, nightCapacity: 1278,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0466", productId: "AJ-SKU-380", productName: "5kg×2袋装鱼肉丸大客户版", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1402, nightCapacity: 1415,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0467", productId: "AJ-SKU-381", productName: "1kg×10袋装鱼豆腐藤椒味", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 757, nightCapacity: 757,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0468", productId: "AJ-SKU-382", productName: "2.5kg×4袋装海鲜组合包大客户版", machineId: "PK-017",
    machineName: "出口自动包装线", dayCapacity: 1146, nightCapacity: 983,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0469", productId: "AJ-SKU-382", productName: "2.5kg×4袋装海鲜组合包大客户版", machineId: "PK-007",
    machineName: "盒装包装机", dayCapacity: 1108, nightCapacity: 1106,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0470", productId: "AJ-SKU-383", productName: "6kg×1零称鱼排盒马定制", machineId: "PK-006",
    machineName: "给袋式包装机B", dayCapacity: 1213, nightCapacity: 1068,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0471", productId: "AJ-SKU-383", productName: "6kg×1零称鱼排盒马定制", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1311, nightCapacity: 1174,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0472", productId: "AJ-SKU-384", productName: "2.5kg×4袋装馅饼经典款", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1143, nightCapacity: 971,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0473", productId: "AJ-SKU-385", productName: "1kg×10袋装黑椒牛肉条大客户版", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 910, nightCapacity: 794,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0474", productId: "AJ-SKU-386", productName: "500g×20袋装贡丸大客户版", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1073, nightCapacity: 1044,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0475", productId: "AJ-SKU-387", productName: "500g×20袋装酥皮卷经典款", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 926, nightCapacity: 825,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0476", productId: "AJ-SKU-387", productName: "500g×20袋装酥皮卷经典款", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 1306, nightCapacity: 1059,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0477", productId: "AJ-SKU-388", productName: "1kg×10袋装蟹籽福袋轻享装", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1428, nightCapacity: 1174,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0478", productId: "AJ-SKU-389", productName: "1kg×10袋装海鲜组合包家庭装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1054, nightCapacity: 922,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0479", productId: "AJ-SKU-390", productName: "10片×20袋装酥皮卷", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1614, nightCapacity: 1495,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0480", productId: "AJ-SKU-391", productName: "2.5kg×4袋装贡丸香辣味", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 1473, nightCapacity: 1347,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0481", productId: "AJ-SKU-392", productName: "200g×30袋装小酥肉经典款", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 1262, nightCapacity: 1186,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0482", productId: "AJ-SKU-392", productName: "200g×30袋装小酥肉经典款", machineId: "PK-020",
    machineName: "调理品包装线", dayCapacity: 633, nightCapacity: 524,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0483", productId: "AJ-SKU-393", productName: "1kg×10袋装香酥鸡块餐饮装", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 1191, nightCapacity: 1141,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0484", productId: "AJ-SKU-394", productName: "240g×20袋装虾味球家庭装", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 841, nightCapacity: 864,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0485", productId: "AJ-SKU-394", productName: "240g×20袋装虾味球家庭装", machineId: "PK-021",
    machineName: "鱼糜品包装线", dayCapacity: 1500, nightCapacity: 1253,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0486", productId: "AJ-SKU-395", productName: "500g×20袋装春卷经典款", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1407, nightCapacity: 1126,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0487", productId: "AJ-SKU-396", productName: "1kg×10袋装培根卷黑椒味", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 1367, nightCapacity: 1229,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0488", productId: "AJ-SKU-397", productName: "500g×20袋装香辣鱼丸原味", machineId: "PK-016",
    machineName: "特通自动包装线", dayCapacity: 1482, nightCapacity: 1259,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0489", productId: "AJ-SKU-398", productName: "350g×20袋装香酥鸡块经典款", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 613, nightCapacity: 597,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0490", productId: "AJ-SKU-399", productName: "400g×20袋装牛肉馅饼盒马定制", machineId: "PK-009",
    machineName: "真空包装机A", dayCapacity: 1287, nightCapacity: 1315,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0491", productId: "AJ-SKU-400", productName: "800g×12袋装蔬菜丸香辣味", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1346, nightCapacity: 1237,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0492", productId: "AJ-SKU-401", productName: "2.5kg×4袋装玉米肠餐饮装", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 694, nightCapacity: 660,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0493", productId: "AJ-SKU-401", productName: "2.5kg×4袋装玉米肠餐饮装", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1424, nightCapacity: 1260,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0494", productId: "AJ-SKU-402", productName: "2.5kg×4袋装盐酥鸡藤椒味", machineId: "PK-023",
    machineName: "手动包装二组", dayCapacity: 574, nightCapacity: 562,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0495", productId: "AJ-SKU-402", productName: "2.5kg×4袋装盐酥鸡藤椒味", machineId: "PK-027",
    machineName: "综合包装线B", dayCapacity: 1409, nightCapacity: 1416,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0496", productId: "AJ-SKU-403", productName: "200g×30袋装黑椒牛肉条黑椒味", machineId: "PK-028",
    machineName: "周转箱包装线", dayCapacity: 804, nightCapacity: 708,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0497", productId: "AJ-SKU-404", productName: "800g×12袋装蔬菜丸区域装", machineId: "PK-001",
    machineName: "枕式包装机A", dayCapacity: 1314, nightCapacity: 1303,
    mainWorkshop: "WS01"
  },
  {
    id: "FPK-0498", productId: "AJ-SKU-405", productName: "2.5kg×4袋装小酥肉轻享装", machineId: "PK-003",
    machineName: "立式包装机A", dayCapacity: 1245, nightCapacity: 1304,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0499", productId: "AJ-SKU-405", productName: "2.5kg×4袋装小酥肉轻享装", machineId: "PK-013",
    machineName: "组合称包装线", dayCapacity: 1362, nightCapacity: 1202,
    mainWorkshop: "WS03"
  },
  {
    id: "FPK-0500", productId: "AJ-SKU-406", productName: "5kg×2袋装藕盒香辣味", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1309, nightCapacity: 1191,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0501", productId: "AJ-SKU-407", productName: "500g×20袋装虾滑餐饮装", machineId: "PK-002",
    machineName: "枕式包装机B", dayCapacity: 1016, nightCapacity: 968,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0502", productId: "AJ-SKU-408", productName: "500g×20袋装汤圆藤椒味", machineId: "PK-004",
    machineName: "立式包装机B", dayCapacity: 721, nightCapacity: 649,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0503", productId: "AJ-SKU-409", productName: "20片×10袋装牛肉馅饼香辣味", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1000, nightCapacity: 803,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0504", productId: "AJ-SKU-410", productName: "5kg×2袋装鸡柳餐饮装", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 1134, nightCapacity: 1079,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0505", productId: "AJ-SKU-410", productName: "5kg×2袋装鸡柳餐饮装", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1333, nightCapacity: 1335,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0506", productId: "AJ-SKU-411", productName: "1kg×10袋装鱼肉丸经典款", machineId: "PK-026",
    machineName: "综合包装线A", dayCapacity: 1126, nightCapacity: 1174,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0507", productId: "AJ-SKU-412", productName: "500g×20袋装蟹籽虾滑藤椒味", machineId: "PK-012",
    machineName: "高速装袋机", dayCapacity: 639, nightCapacity: 574,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0508", productId: "AJ-SKU-413", productName: "500g×20袋装鱼丸原味", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 705, nightCapacity: 601,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0509", productId: "AJ-SKU-414", productName: "2.5kg×4袋装海鲜组合包藤椒味", machineId: "PK-010",
    machineName: "真空包装机B", dayCapacity: 1235, nightCapacity: 1059,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0510", productId: "AJ-SKU-415", productName: "1kg×10袋装鱼竹轮盒马定制", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1303, nightCapacity: 1300,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0511", productId: "AJ-SKU-416", productName: "120g×50袋装黄金鱼板盒马定制", machineId: "PK-019",
    machineName: "丸类包装线", dayCapacity: 1420, nightCapacity: 1259,
    mainWorkshop: "WS02"
  },
  {
    id: "FPK-0512", productId: "AJ-SKU-417", productName: "300g×30袋装关东煮组合", machineId: "PK-022",
    machineName: "手动包装一组", dayCapacity: 620, nightCapacity: 522,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0513", productId: "AJ-SKU-417", productName: "300g×30袋装关东煮组合", machineId: "PK-015",
    machineName: "小袋包装线", dayCapacity: 659, nightCapacity: 536,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0514", productId: "AJ-SKU-418", productName: "500g×20袋装鱼籽福袋轻享装", machineId: "PK-024",
    machineName: "补产包装线", dayCapacity: 1103, nightCapacity: 918,
    mainWorkshop: "WS05"
  },
  {
    id: "FPK-0515", productId: "AJ-SKU-419", productName: "500g×20袋装猪肉大葱水饺餐饮装", machineId: "PK-014",
    machineName: "大袋包装线", dayCapacity: 1484, nightCapacity: 1461,
    mainWorkshop: "WS04"
  },
  {
    id: "FPK-0516", productId: "AJ-SKU-420", productName: "10片×20袋装烧麦轻享装", machineId: "PK-018",
    machineName: "面点包装线", dayCapacity: 1464, nightCapacity: 1203,
    mainWorkshop: "WS04"
  }
];
