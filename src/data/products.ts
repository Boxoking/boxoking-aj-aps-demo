import type { ProductSKU } from "../types";

export const products: ProductSKU[] = [
  {
    productId: "AJ-SKU-001", productName: "1kg×10袋装脆骨丸黑椒味", category: "丸类制品", orderType: "特通",
    stock: 9404, safetyStock: 2557, pendingQty: 950,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-002", productName: "200g×30袋装牛肉丸原味", category: "丸类制品", orderType: "普通",
    stock: 10421, safetyStock: 2940, pendingQty: 1084,
    deliveryDate: "2026-07-12", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-003", productName: "1kg×10袋装鲜虾滑餐饮装", category: "虾滑制品", orderType: "普通",
    stock: 11521, safetyStock: 2613, pendingQty: 5160,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-004", productName: "1kg×10袋装贡丸轻享装", category: "丸类制品", orderType: "特通",
    stock: 25450, safetyStock: 7147, pendingQty: 2831,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-005", productName: "2.5kg×4袋装茄盒出口版", category: "调理食品", orderType: "普通",
    stock: 21518, safetyStock: 5714, pendingQty: 5204,
    deliveryDate: "2026-08-04", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "调理串成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-006", productName: "400g×20袋装墨鱼丸餐饮装", category: "丸类制品", orderType: "普通",
    stock: 24647, safetyStock: 5841, pendingQty: 3956,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-007", productName: "200g×30袋装牛排", category: "调理食品", orderType: "普通",
    stock: 21312, safetyStock: 4462, pendingQty: 3246,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "培根卷成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-008", productName: "400g×20袋装鱼肉丸香辣味", category: "丸类制品", orderType: "特通",
    stock: 16203, safetyStock: 5476, pendingQty: 1189,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-009", productName: "5kg×2袋装包心鱼丸香辣味", category: "丸类制品", orderType: "出口",
    stock: 2948, safetyStock: 257, pendingQty: 4137,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-010", productName: "20片×10袋装烧麦餐饮装", category: "面点食品", orderType: "普通",
    stock: 12161, safetyStock: 2222, pendingQty: 7144,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "年糕成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-011", productName: "300g×30袋装香辣虾滑家庭装", category: "虾滑制品", orderType: "普通",
    stock: 10424, safetyStock: 3624, pendingQty: 7217,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-012", productName: "500g×20袋装鱼豆腐家庭装", category: "鱼糜制品", orderType: "普通",
    stock: 924, safetyStock: 106, pendingQty: 3845,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-013", productName: "1kg×10袋装海鲜组合包藤椒味", category: "组合制品", orderType: "普通",
    stock: 3611, safetyStock: 700, pendingQty: 3819,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "海胆包成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-014", productName: "200g×30袋装火山石烤肠香辣味", category: "调理食品", orderType: "普通",
    stock: 22863, safetyStock: 5273, pendingQty: 7964,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "藕盒成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-015", productName: "2.5kg×4袋装小酥肉香辣味", category: "调理食品", orderType: "普通",
    stock: 6600, safetyStock: 1408, pendingQty: 1179,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-016", productName: "2.5kg×4袋装丸类组合包黑椒味", category: "组合制品", orderType: "普通",
    stock: 5812, safetyStock: 1422, pendingQty: 2788,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-017", productName: "500g×20袋装鱼肉丸藤椒味", category: "丸类制品", orderType: "普通",
    stock: 7046, safetyStock: 1079, pendingQty: 2636,
    deliveryDate: "2026-07-19", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-018", productName: "350g×20袋装玉米肠", category: "调理食品", orderType: "特通",
    stock: 24510, safetyStock: 2192, pendingQty: 4494,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-019", productName: "5kg×2袋装墨鱼丸香辣味", category: "丸类制品", orderType: "普通",
    stock: 4315, safetyStock: 914, pendingQty: 5198,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-020", productName: "800g×12袋装丸类组合包盒马定制", category: "组合制品", orderType: "普通",
    stock: 16442, safetyStock: 1565, pendingQty: 6507,
    deliveryDate: "2026-08-06", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "海胆包成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-021", productName: "1kg×10袋装芝士肉丸藤椒味", category: "丸类制品", orderType: "普通",
    stock: 5664, safetyStock: 823, pendingQty: 7161,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-022", productName: "1kg×10袋装龙虾球经典款", category: "鱼糜制品", orderType: "普通",
    stock: 15194, safetyStock: 1310, pendingQty: 7697,
    deliveryDate: "2026-08-08", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-023", productName: "350g×20袋装小酥肉盒马定制", category: "调理食品", orderType: "出口",
    stock: 2803, safetyStock: 599, pendingQty: 3354,
    deliveryDate: "2026-07-18", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-024", productName: "500g×20袋装米汉堡餐饮装", category: "面点食品", orderType: "普通",
    stock: 4330, safetyStock: 1403, pendingQty: 6652,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "馅饼成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-025", productName: "240g×20袋装鱼竹轮香辣味", category: "鱼糜制品", orderType: "普通",
    stock: 20133, safetyStock: 6239, pendingQty: 6105,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-026", productName: "2.5kg×4袋装鲜虾滑家庭装", category: "虾滑制品", orderType: "普通",
    stock: 22475, safetyStock: 4651, pendingQty: 7919,
    deliveryDate: "2026-07-12", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-027", productName: "500g×20袋装藕盒", category: "调理食品", orderType: "普通",
    stock: 22724, safetyStock: 2393, pendingQty: 5021,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "调理串成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-028", productName: "1kg×10袋装牛肉馅饼藤椒味", category: "面点食品", orderType: "出口",
    stock: 20319, safetyStock: 4428, pendingQty: 7116,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "馅饼成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-029", productName: "10片×20袋装葱油饼盒马定制", category: "面点食品", orderType: "普通",
    stock: 8098, safetyStock: 2070, pendingQty: 6856,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "面点成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-030", productName: "2.5kg×4袋装盐酥鸡黑椒味", category: "调理食品", orderType: "普通",
    stock: 8413, safetyStock: 2696, pendingQty: 6587,
    deliveryDate: "2026-07-30", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "牛排成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-031", productName: "400g×20袋装包心鱼丸轻享装", category: "丸类制品", orderType: "特通",
    stock: 15933, safetyStock: 4663, pendingQty: 2469,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-032", productName: "2.5kg×4袋装汤圆盒马定制", category: "面点食品", orderType: "普通",
    stock: 11498, safetyStock: 1408, pendingQty: 6115,
    deliveryDate: "2026-07-26", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "烧麦成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-033", productName: "1kg×10袋装手抓饼家庭装", category: "面点食品", orderType: "普通",
    stock: 14746, safetyStock: 1373, pendingQty: 4203,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-034", productName: "1kg×10袋装年糕餐饮装", category: "面点食品", orderType: "普通",
    stock: 15239, safetyStock: 3977, pendingQty: 6631,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "米汉堡成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-035", productName: "400g×20袋装馅饼黑椒味", category: "面点食品", orderType: "普通",
    stock: 17651, safetyStock: 1928, pendingQty: 4697,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-036", productName: "200g×30袋装黄金鱼板藤椒味", category: "鱼糜制品", orderType: "普通",
    stock: 24926, safetyStock: 3087, pendingQty: 4282,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-037", productName: "1kg×10袋装鱼肉丸香辣味", category: "丸类制品", orderType: "普通",
    stock: 18428, safetyStock: 5679, pendingQty: 4239,
    deliveryDate: "2026-07-16", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-038", productName: "6kg×1零称鱼丸", category: "鱼糜制品", orderType: "普通",
    stock: 23933, safetyStock: 6198, pendingQty: 6822,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-039", productName: "6kg×1零称鱼排大客户版", category: "鱼糜制品", orderType: "普通",
    stock: 7053, safetyStock: 1354, pendingQty: 2578,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-040", productName: "350g×20袋装火山石烤肠原味", category: "调理食品", orderType: "出口",
    stock: 13663, safetyStock: 2103, pendingQty: 5631,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-041", productName: "200g×30袋装鱼竹轮大客户版", category: "鱼糜制品", orderType: "普通",
    stock: 15267, safetyStock: 3642, pendingQty: 7115,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-042", productName: "1kg×10袋装鱼肉丸原味", category: "丸类制品", orderType: "特通",
    stock: 4222, safetyStock: 1363, pendingQty: 6009,
    deliveryDate: "2026-07-26", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-043", productName: "300g×30袋装鱼籽虾滑盒马定制", category: "虾滑制品", orderType: "特通",
    stock: 23863, safetyStock: 8143, pendingQty: 2770,
    deliveryDate: "2026-08-08", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-044", productName: "500g×20袋装黑椒牛肉条出口版", category: "调理食品", orderType: "普通",
    stock: 1218, safetyStock: 304, pendingQty: 2150,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "小酥肉成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-045", productName: "1kg×10袋装蟹籽福袋香辣味", category: "组合制品", orderType: "普通",
    stock: 11386, safetyStock: 981, pendingQty: 6125,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-046", productName: "2.5kg×4袋装包心鱼丸轻享装", category: "丸类制品", orderType: "普通",
    stock: 723, safetyStock: 201, pendingQty: 2147,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-047", productName: "1kg×10袋装香辣鱼丸家庭装", category: "鱼糜制品", orderType: "特通",
    stock: 1259, safetyStock: 412, pendingQty: 3123,
    deliveryDate: "2026-07-31", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-048", productName: "200g×30袋装茄盒盒马定制", category: "调理食品", orderType: "特通",
    stock: 8928, safetyStock: 2783, pendingQty: 7997,
    deliveryDate: "2026-07-31", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "藕盒成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-049", productName: "500g×20袋装培根卷出口版", category: "调理食品", orderType: "出口",
    stock: 13699, safetyStock: 3338, pendingQty: 4032,
    deliveryDate: "2026-08-09", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-050", productName: "1kg×10袋装火锅组合丸香辣味", category: "组合制品", orderType: "普通",
    stock: 749, safetyStock: 118, pendingQty: 5508,
    deliveryDate: "2026-07-18", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-051", productName: "2.5kg×4袋装蒸饺出口版", category: "面点食品", orderType: "普通",
    stock: 1803, safetyStock: 325, pendingQty: 3798,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "米汉堡成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-052", productName: "2.5kg×4袋装脆骨丸盒马定制", category: "丸类制品", orderType: "普通",
    stock: 12234, safetyStock: 3781, pendingQty: 4558,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-053", productName: "1kg×10袋装黑椒牛肉条经典款", category: "调理食品", orderType: "普通",
    stock: 7678, safetyStock: 874, pendingQty: 4087,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-054", productName: "150g×40袋装虾滑出口版", category: "虾滑制品", orderType: "普通",
    stock: 11083, safetyStock: 2831, pendingQty: 3741,
    deliveryDate: "2026-08-06", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-055", productName: "2.5kg×4袋装香辣虾滑黑椒味", category: "虾滑制品", orderType: "普通",
    stock: 24801, safetyStock: 4173, pendingQty: 7824,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-056", productName: "1kg×10袋装鱼豆腐黑椒味", category: "鱼糜制品", orderType: "普通",
    stock: 25761, safetyStock: 8097, pendingQty: 6540,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-057", productName: "500g×20袋装鳕鱼排", category: "鱼糜制品", orderType: "特通",
    stock: 15278, safetyStock: 5169, pendingQty: 2507,
    deliveryDate: "2026-08-09", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼排成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-058", productName: "200g×30袋装鱼丸出口版", category: "鱼糜制品", orderType: "出口",
    stock: 18481, safetyStock: 4886, pendingQty: 7902,
    deliveryDate: "2026-07-19", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-059", productName: "500g×20袋装虾滑家庭装", category: "虾滑制品", orderType: "普通",
    stock: 10355, safetyStock: 1803, pendingQty: 6597,
    deliveryDate: "2026-07-30", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-060", productName: "5kg×2袋装猪肉丸香辣味", category: "丸类制品", orderType: "出口",
    stock: 5520, safetyStock: 1021, pendingQty: 6393,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-061", productName: "5kg×2袋装奥尔良鸡柳黑椒味", category: "调理食品", orderType: "普通",
    stock: 3749, safetyStock: 988, pendingQty: 4384,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "玉米肠成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-062", productName: "500g×20袋装鱼豆腐大客户版", category: "鱼糜制品", orderType: "普通",
    stock: 8916, safetyStock: 1843, pendingQty: 7929,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鳕鱼排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-063", productName: "10片×20袋装猪肉大葱水饺出口版", category: "面点食品", orderType: "普通",
    stock: 4378, safetyStock: 713, pendingQty: 7780,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "酥皮卷成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-064", productName: "300g×30袋装香辣虾滑零售装", category: "虾滑制品", orderType: "普通",
    stock: 16854, safetyStock: 2532, pendingQty: 7752,
    deliveryDate: "2026-07-30", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-065", productName: "200g×30袋装虾味球家庭装", category: "鱼糜制品", orderType: "出口",
    stock: 9798, safetyStock: 2193, pendingQty: 6672,
    deliveryDate: "2026-07-27", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鳕鱼排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-066", productName: "200g×30袋装黄金鱼板香辣味", category: "鱼糜制品", orderType: "普通",
    stock: 1124, safetyStock: 214, pendingQty: 5336,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-067", productName: "200g×30袋装牛排出口版", category: "调理食品", orderType: "普通",
    stock: 7308, safetyStock: 643, pendingQty: 4393,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-068", productName: "300g×30袋装丸类组合包出口版", category: "组合制品", orderType: "特通",
    stock: 21361, safetyStock: 4450, pendingQty: 6915,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-069", productName: "200g×30袋装包心鱼丸餐饮装", category: "丸类制品", orderType: "普通",
    stock: 2967, safetyStock: 795, pendingQty: 7993,
    deliveryDate: "2026-07-09", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-070", productName: "2.5kg×4袋装麻辣烫组合家庭装", category: "组合制品", orderType: "特通",
    stock: 19378, safetyStock: 2147, pendingQty: 3283,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "海胆包成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-071", productName: "200g×30袋装火山石烤肠经典款", category: "调理食品", orderType: "出口",
    stock: 17675, safetyStock: 5660, pendingQty: 4378,
    deliveryDate: "2026-07-09", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "牛排成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-072", productName: "120g×50袋装鱼丸家庭装", category: "鱼糜制品", orderType: "普通",
    stock: 13712, safetyStock: 4469, pendingQty: 2557,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-073", productName: "500g×20袋装小酥肉轻享装", category: "调理食品", orderType: "普通",
    stock: 9147, safetyStock: 1183, pendingQty: 5818,
    deliveryDate: "2026-08-09", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "藕盒成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-074", productName: "400g×20袋装牛肉馅饼轻享装", category: "面点食品", orderType: "普通",
    stock: 23805, safetyStock: 5771, pendingQty: 1712,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "烧麦成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-075", productName: "5kg×2袋装小酥肉经典款", category: "调理食品", orderType: "普通",
    stock: 21462, safetyStock: 3491, pendingQty: 4294,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-076", productName: "200g×30袋装脆骨丸", category: "丸类制品", orderType: "普通",
    stock: 17367, safetyStock: 1451, pendingQty: 5265,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-077", productName: "1kg×10袋装黄金鱼板原味", category: "鱼糜制品", orderType: "特通",
    stock: 14051, safetyStock: 4913, pendingQty: 6457,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-078", productName: "2.5kg×4袋装蔬菜丸藤椒味", category: "组合制品", orderType: "普通",
    stock: 16730, safetyStock: 3020, pendingQty: 7904,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "芝士丸成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-079", productName: "200g×30袋装芝士肉丸大客户版", category: "丸类制品", orderType: "普通",
    stock: 20218, safetyStock: 2054, pendingQty: 4577,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-080", productName: "1kg×10袋装蟹味排黑椒味", category: "鱼糜制品", orderType: "出口",
    stock: 17069, safetyStock: 4035, pendingQty: 7827,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-081", productName: "10片×20袋装牛肉馅饼香辣味", category: "面点食品", orderType: "特通",
    stock: 17552, safetyStock: 5134, pendingQty: 5650,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-082", productName: "2.5kg×4袋装蟹籽虾滑出口版", category: "虾滑制品", orderType: "普通",
    stock: 20111, safetyStock: 3441, pendingQty: 1023,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-083", productName: "1kg×10袋装鸡排出口版", category: "调理食品", orderType: "普通",
    stock: 5309, safetyStock: 697, pendingQty: 7191,
    deliveryDate: "2026-08-09", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "培根卷成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-084", productName: "20片×10袋装猪肉大葱水饺盒马定制", category: "面点食品", orderType: "出口",
    stock: 14797, safetyStock: 2040, pendingQty: 4517,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "年糕成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-085", productName: "10片×20袋装馄饨经典款", category: "面点食品", orderType: "普通",
    stock: 24166, safetyStock: 4416, pendingQty: 6343,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "蒸饺成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-086", productName: "120g×50袋装鱼竹轮香辣味", category: "鱼糜制品", orderType: "普通",
    stock: 22730, safetyStock: 5586, pendingQty: 2843,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-087", productName: "400g×20袋装墨鱼丸出口版", category: "丸类制品", orderType: "特通",
    stock: 25258, safetyStock: 8309, pendingQty: 2300,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-088", productName: "120g×50袋装蟹棒原味", category: "鱼糜制品", orderType: "普通",
    stock: 356, safetyStock: 100, pendingQty: 6091,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-089", productName: "350g×20袋装盐酥鸡盒马定制", category: "调理食品", orderType: "普通",
    stock: 5460, safetyStock: 1714, pendingQty: 3445,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "牛排成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-090", productName: "2.5kg×4袋装酥皮卷原味", category: "面点食品", orderType: "普通",
    stock: 13538, safetyStock: 4732, pendingQty: 1492,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "手抓饼生产线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-091", productName: "500g×20袋装培根卷", category: "调理食品", orderType: "出口",
    stock: 4882, safetyStock: 768, pendingQty: 5275,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "盐酥鸡成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-092", productName: "1kg×10袋装酥皮卷家庭装", category: "面点食品", orderType: "普通",
    stock: 20247, safetyStock: 2584, pendingQty: 888,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "米汉堡成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-093", productName: "400g×20袋装芝士肉丸盒马定制", category: "丸类制品", orderType: "普通",
    stock: 8791, safetyStock: 2559, pendingQty: 2729,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-094", productName: "1kg×10袋装香辣虾滑大客户版", category: "虾滑制品", orderType: "普通",
    stock: 8691, safetyStock: 1304, pendingQty: 4330,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-095", productName: "240g×20袋装鱼竹轮原味", category: "鱼糜制品", orderType: "普通",
    stock: 15924, safetyStock: 4970, pendingQty: 4553,
    deliveryDate: "2026-08-08", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-096", productName: "1kg×10袋装鱼排", category: "鱼糜制品", orderType: "普通",
    stock: 2922, safetyStock: 855, pendingQty: 1971,
    deliveryDate: "2026-07-19", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-097", productName: "1kg×10袋装牛肉丸经典款", category: "丸类制品", orderType: "普通",
    stock: 5052, safetyStock: 418, pendingQty: 3904,
    deliveryDate: "2026-07-31", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-098", productName: "1kg×10袋装芝士鱼丸原味", category: "鱼糜制品", orderType: "普通",
    stock: 19222, safetyStock: 2048, pendingQty: 7045,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-099", productName: "2.5kg×4袋装芝士虾滑大客户版", category: "虾滑制品", orderType: "普通",
    stock: 11241, safetyStock: 1522, pendingQty: 2424,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-100", productName: "1kg×10袋装鱼籽福袋香辣味", category: "组合制品", orderType: "出口",
    stock: 3916, safetyStock: 483, pendingQty: 5165,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-101", productName: "120g×50袋装鱼丸", category: "鱼糜制品", orderType: "出口",
    stock: 21468, safetyStock: 7146, pendingQty: 2443,
    deliveryDate: "2026-07-30", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-102", productName: "500g×20袋装鲜虾滑轻享装", category: "虾滑制品", orderType: "普通",
    stock: 14818, safetyStock: 2646, pendingQty: 2470,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-103", productName: "200g×30袋装撒尿肉丸经典款", category: "丸类制品", orderType: "出口",
    stock: 11478, safetyStock: 1699, pendingQty: 7184,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-104", productName: "500g×20袋装鱼豆腐升级款", category: "鱼糜制品", orderType: "普通",
    stock: 19194, safetyStock: 2853, pendingQty: 1505,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-105", productName: "500g×20袋装贡丸餐饮装", category: "丸类制品", orderType: "普通",
    stock: 4667, safetyStock: 695, pendingQty: 4413,
    deliveryDate: "2026-07-11", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-106", productName: "120g×50袋装龙虾球经典款", category: "鱼糜制品", orderType: "普通",
    stock: 199, safetyStock: 100, pendingQty: 844,
    deliveryDate: "2026-07-18", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-107", productName: "1kg×10袋装鸡排家庭装", category: "调理食品", orderType: "普通",
    stock: 11126, safetyStock: 2995, pendingQty: 5589,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-108", productName: "6kg×1零称芝士鱼丸大客户版", category: "鱼糜制品", orderType: "普通",
    stock: 23289, safetyStock: 7445, pendingQty: 5095,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-109", productName: "200g×30袋装鸡柳大客户版", category: "调理食品", orderType: "出口",
    stock: 985, safetyStock: 194, pendingQty: 3312,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "盐酥鸡成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-110", productName: "800g×12袋装关东煮组合盒马定制", category: "组合制品", orderType: "普通",
    stock: 24454, safetyStock: 2816, pendingQty: 4819,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-111", productName: "5kg×2袋装鱼肉丸家庭装", category: "丸类制品", orderType: "普通",
    stock: 6373, safetyStock: 935, pendingQty: 1895,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-112", productName: "200g×30袋装鱼豆腐黑椒味", category: "鱼糜制品", orderType: "普通",
    stock: 4262, safetyStock: 1296, pendingQty: 5121,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-113", productName: "500g×20袋装酥皮卷家庭装", category: "面点食品", orderType: "普通",
    stock: 7945, safetyStock: 1473, pendingQty: 3897,
    deliveryDate: "2026-07-31", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-114", productName: "500g×20袋装小酥肉餐饮装", category: "调理食品", orderType: "普通",
    stock: 3350, safetyStock: 945, pendingQty: 2348,
    deliveryDate: "2026-08-08", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-115", productName: "300g×30袋装麻辣烫组合轻享装", category: "组合制品", orderType: "普通",
    stock: 22078, safetyStock: 7348, pendingQty: 5887,
    deliveryDate: "2026-07-26", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "组合丸成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-116", productName: "200g×30袋装香菇贡丸出口版", category: "丸类制品", orderType: "特通",
    stock: 5510, safetyStock: 1878, pendingQty: 2259,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-117", productName: "1kg×10袋装蟹味排香辣味", category: "鱼糜制品", orderType: "特通",
    stock: 24570, safetyStock: 5623, pendingQty: 6946,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-118", productName: "350g×20袋装奥尔良鸡柳", category: "调理食品", orderType: "特通",
    stock: 16879, safetyStock: 4742, pendingQty: 2736,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-119", productName: "120g×50袋装鱼豆腐家庭装", category: "鱼糜制品", orderType: "普通",
    stock: 23210, safetyStock: 2019, pendingQty: 2916,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-120", productName: "350g×20袋装玉米肠盒马定制", category: "调理食品", orderType: "普通",
    stock: 17136, safetyStock: 4075, pendingQty: 4628,
    deliveryDate: "2026-07-07", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "藕盒成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-121", productName: "240g×20袋装香辣鱼丸原味", category: "鱼糜制品", orderType: "普通",
    stock: 20157, safetyStock: 3404, pendingQty: 2366,
    deliveryDate: "2026-07-27", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-122", productName: "800g×12袋装丸类组合包经典款", category: "组合制品", orderType: "出口",
    stock: 22162, safetyStock: 3285, pendingQty: 6479,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "组合丸成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-123", productName: "400g×20袋装猪肉丸藤椒味", category: "丸类制品", orderType: "普通",
    stock: 18200, safetyStock: 2458, pendingQty: 2164,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-124", productName: "2.5kg×4袋装牛肉馅饼大客户版", category: "面点食品", orderType: "普通",
    stock: 20782, safetyStock: 4800, pendingQty: 3813,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "面点成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-125", productName: "2.5kg×4袋装猪肉丸盒马定制", category: "丸类制品", orderType: "普通",
    stock: 15009, safetyStock: 4396, pendingQty: 5000,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-126", productName: "200g×30袋装鸡柳藤椒味", category: "调理食品", orderType: "普通",
    stock: 984, safetyStock: 250, pendingQty: 821,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-127", productName: "1kg×10袋装鱼丸轻享装", category: "鱼糜制品", orderType: "普通",
    stock: 12448, safetyStock: 2487, pendingQty: 5379,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-128", productName: "120g×50袋装鱼排出口版", category: "鱼糜制品", orderType: "普通",
    stock: 19179, safetyStock: 5535, pendingQty: 3676,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-129", productName: "300g×30袋装关东煮组合出口版", category: "组合制品", orderType: "特通",
    stock: 20265, safetyStock: 3716, pendingQty: 5029,
    deliveryDate: "2026-07-18", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "组合丸成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-130", productName: "1kg×10袋装龙虾球精选款", category: "鱼糜制品", orderType: "普通",
    stock: 14064, safetyStock: 2003, pendingQty: 7738,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-131", productName: "500g×20袋装香辣虾滑轻享装", category: "虾滑制品", orderType: "普通",
    stock: 8982, safetyStock: 1387, pendingQty: 2278,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-132", productName: "2.5kg×4袋装锅贴家庭装", category: "面点食品", orderType: "特通",
    stock: 5358, safetyStock: 915, pendingQty: 3555,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-133", productName: "20片×10袋装汤圆原味", category: "面点食品", orderType: "普通",
    stock: 22223, safetyStock: 7219, pendingQty: 918,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "面点成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-134", productName: "2.5kg×4袋装鱼籽福袋大客户版", category: "组合制品", orderType: "普通",
    stock: 16477, safetyStock: 5532, pendingQty: 6879,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-135", productName: "350g×20袋装培根卷家庭装", category: "调理食品", orderType: "普通",
    stock: 6502, safetyStock: 1888, pendingQty: 7611,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "牛排成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-136", productName: "2.5kg×4袋装香酥鸡块轻享装", category: "调理食品", orderType: "普通",
    stock: 21913, safetyStock: 5621, pendingQty: 1120,
    deliveryDate: "2026-07-19", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "藕盒成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-137", productName: "300g×30袋装芝士虾滑出口版", category: "虾滑制品", orderType: "特通",
    stock: 16581, safetyStock: 5273, pendingQty: 3255,
    deliveryDate: "2026-07-07", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-138", productName: "5kg×2袋装包心贡丸", category: "丸类制品", orderType: "普通",
    stock: 2033, safetyStock: 201, pendingQty: 7454,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-139", productName: "2.5kg×4袋装墨鱼丸经典款", category: "丸类制品", orderType: "普通",
    stock: 23804, safetyStock: 3018, pendingQty: 4375,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-140", productName: "500g×20袋装虾味球黑椒味", category: "鱼糜制品", orderType: "普通",
    stock: 6237, safetyStock: 1332, pendingQty: 2233,
    deliveryDate: "2026-07-26", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-141", productName: "150g×40袋装蟹籽虾滑出口版", category: "虾滑制品", orderType: "特通",
    stock: 17828, safetyStock: 5321, pendingQty: 974,
    deliveryDate: "2026-07-07", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-142", productName: "500g×20袋装葱油饼黑椒味", category: "面点食品", orderType: "普通",
    stock: 9556, safetyStock: 2603, pendingQty: 6024,
    deliveryDate: "2026-08-01", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "馄饨成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-143", productName: "1kg×10袋装牛肉馅饼香辣味", category: "面点食品", orderType: "出口",
    stock: 14519, safetyStock: 4591, pendingQty: 2920,
    deliveryDate: "2026-08-06", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "米汉堡成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-144", productName: "500g×20袋装调理串轻享装", category: "调理食品", orderType: "普通",
    stock: 14364, safetyStock: 3802, pendingQty: 5356,
    deliveryDate: "2026-07-09", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡排成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-145", productName: "2.5kg×4袋装香酥鸡块黑椒味", category: "调理食品", orderType: "普通",
    stock: 18672, safetyStock: 6181, pendingQty: 4197,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "调理串成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-146", productName: "300g×30袋装鱼籽福袋盒马定制", category: "组合制品", orderType: "普通",
    stock: 23940, safetyStock: 5945, pendingQty: 7543,
    deliveryDate: "2026-07-18", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-147", productName: "2.5kg×4袋装盐酥鸡大客户版", category: "调理食品", orderType: "普通",
    stock: 24017, safetyStock: 7279, pendingQty: 3075,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-148", productName: "1kg×10袋装鱼肉丸出口版", category: "丸类制品", orderType: "普通",
    stock: 4845, safetyStock: 971, pendingQty: 7502,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-149", productName: "500g×20袋装龙虾球经典款", category: "鱼糜制品", orderType: "出口",
    stock: 16243, safetyStock: 2884, pendingQty: 5025,
    deliveryDate: "2026-07-16", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-150", productName: "10片×20袋装馄饨轻享装", category: "面点食品", orderType: "普通",
    stock: 17042, safetyStock: 5747, pendingQty: 5058,
    deliveryDate: "2026-07-07", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "酥皮卷成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-151", productName: "150g×40袋装虾滑香辣味", category: "虾滑制品", orderType: "特通",
    stock: 15208, safetyStock: 2147, pendingQty: 7759,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-152", productName: "500g×20袋装牛肉馅饼出口版", category: "面点食品", orderType: "普通",
    stock: 575, safetyStock: 199, pendingQty: 5117,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "馄饨成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-153", productName: "1kg×10袋装关东煮组合香辣味", category: "组合制品", orderType: "出口",
    stock: 13970, safetyStock: 3829, pendingQty: 1878,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "组合丸成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-154", productName: "200g×30袋装培根卷餐饮装", category: "调理食品", orderType: "特通",
    stock: 14868, safetyStock: 4923, pendingQty: 4188,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "培根卷成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-155", productName: "2.5kg×4袋装海胆包", category: "组合制品", orderType: "普通",
    stock: 17181, safetyStock: 5173, pendingQty: 1359,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-156", productName: "300g×30袋装香辣虾滑盒马定制", category: "虾滑制品", orderType: "普通",
    stock: 5066, safetyStock: 1758, pendingQty: 5786,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-157", productName: "2.5kg×4袋装馅饼黑椒味", category: "面点食品", orderType: "普通",
    stock: 9840, safetyStock: 3391, pendingQty: 2021,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "面点成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-158", productName: "5kg×2袋装火山石烤肠原味", category: "调理食品", orderType: "普通",
    stock: 13965, safetyStock: 3488, pendingQty: 5536,
    deliveryDate: "2026-07-26", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "盐酥鸡成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-159", productName: "200g×30袋装芝士肉丸盒马定制", category: "丸类制品", orderType: "特通",
    stock: 20603, safetyStock: 2137, pendingQty: 3389,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-160", productName: "20片×10袋装蒸饺餐饮装", category: "面点食品", orderType: "普通",
    stock: 10953, safetyStock: 2041, pendingQty: 1883,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-161", productName: "500g×20袋装黄金鱼板藤椒味", category: "鱼糜制品", orderType: "特通",
    stock: 2398, safetyStock: 406, pendingQty: 7444,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-162", productName: "350g×20袋装藕盒出口版", category: "调理食品", orderType: "普通",
    stock: 10705, safetyStock: 3401, pendingQty: 7758,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "烤肠成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-163", productName: "2.5kg×4袋装馄饨家庭装", category: "面点食品", orderType: "普通",
    stock: 16583, safetyStock: 5098, pendingQty: 6545,
    deliveryDate: "2026-08-06", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "面点成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-164", productName: "240g×20袋装虾味球藤椒味", category: "鱼糜制品", orderType: "特通",
    stock: 23671, safetyStock: 3309, pendingQty: 5730,
    deliveryDate: "2026-08-04", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-165", productName: "2.5kg×4袋装麻辣烫组合", category: "组合制品", orderType: "普通",
    stock: 5397, safetyStock: 1586, pendingQty: 5282,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-166", productName: "350g×20袋装鸡柳香辣味", category: "调理食品", orderType: "普通",
    stock: 15241, safetyStock: 3061, pendingQty: 2132,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "小酥肉成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-167", productName: "240g×20袋装黄金鱼板", category: "鱼糜制品", orderType: "普通",
    stock: 20280, safetyStock: 4632, pendingQty: 5249,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-168", productName: "1kg×10袋装关东煮组合盒马定制", category: "组合制品", orderType: "普通",
    stock: 7321, safetyStock: 1029, pendingQty: 2484,
    deliveryDate: "2026-08-01", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "芝士丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-169", productName: "6kg×1零称蟹味排经典款", category: "鱼糜制品", orderType: "普通",
    stock: 3150, safetyStock: 931, pendingQty: 7900,
    deliveryDate: "2026-08-07", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-170", productName: "5kg×2袋装藕盒经典款", category: "调理食品", orderType: "特通",
    stock: 24233, safetyStock: 8079, pendingQty: 6500,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-171", productName: "500g×20袋装麻辣烫组合经典款", category: "组合制品", orderType: "普通",
    stock: 14803, safetyStock: 2679, pendingQty: 7158,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-172", productName: "1kg×10袋装虾味球轻享装", category: "鱼糜制品", orderType: "普通",
    stock: 14909, safetyStock: 2691, pendingQty: 1276,
    deliveryDate: "2026-08-09", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-173", productName: "2.5kg×4袋装蒸饺餐饮装", category: "面点食品", orderType: "特通",
    stock: 4688, safetyStock: 1441, pendingQty: 7781,
    deliveryDate: "2026-08-07", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-174", productName: "5kg×2袋装猪肉丸轻享装", category: "丸类制品", orderType: "普通",
    stock: 8641, safetyStock: 2331, pendingQty: 6783,
    deliveryDate: "2026-07-18", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-175", productName: "1kg×10袋装藕盒经典款", category: "调理食品", orderType: "出口",
    stock: 23125, safetyStock: 7122, pendingQty: 7149,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "小酥肉成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-176", productName: "240g×20袋装龙虾球黑椒味", category: "鱼糜制品", orderType: "特通",
    stock: 11393, safetyStock: 2281, pendingQty: 4695,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-177", productName: "120g×50袋装香辣鱼丸大客户版", category: "鱼糜制品", orderType: "普通",
    stock: 19314, safetyStock: 5970, pendingQty: 1828,
    deliveryDate: "2026-07-27", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-178", productName: "500g×20袋装盐酥鸡黑椒味", category: "调理食品", orderType: "普通",
    stock: 12283, safetyStock: 2545, pendingQty: 4498,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "牛排成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-179", productName: "500g×20袋装酥皮卷", category: "面点食品", orderType: "普通",
    stock: 18573, safetyStock: 5000, pendingQty: 5757,
    deliveryDate: "2026-08-08", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "酥皮卷成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-180", productName: "20片×10袋装年糕黑椒味", category: "面点食品", orderType: "特通",
    stock: 1283, safetyStock: 199, pendingQty: 873,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "面点成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-181", productName: "500g×20袋装鸡排香辣味", category: "调理食品", orderType: "特通",
    stock: 17678, safetyStock: 6128, pendingQty: 4246,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "培根卷成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-182", productName: "2.5kg×4袋装藕盒", category: "调理食品", orderType: "普通",
    stock: 9360, safetyStock: 2755, pendingQty: 2440,
    deliveryDate: "2026-08-04", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡排成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-183", productName: "200g×30袋装撒尿肉丸原味", category: "丸类制品", orderType: "出口",
    stock: 385, safetyStock: 126, pendingQty: 4683,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-184", productName: "5kg×2袋装牛排", category: "调理食品", orderType: "普通",
    stock: 6073, safetyStock: 1149, pendingQty: 3098,
    deliveryDate: "2026-07-12", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "烤肠成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-185", productName: "200g×30袋装奥尔良鸡柳家庭装", category: "调理食品", orderType: "特通",
    stock: 24449, safetyStock: 2040, pendingQty: 5844,
    deliveryDate: "2026-07-16", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "小酥肉成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-186", productName: "240g×20袋装鱼丸经典款", category: "鱼糜制品", orderType: "特通",
    stock: 334, safetyStock: 100, pendingQty: 3349,
    deliveryDate: "2026-07-18", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-187", productName: "5kg×2袋装黑椒牛肉条香辣味", category: "调理食品", orderType: "普通",
    stock: 339, safetyStock: 100, pendingQty: 3147,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "牛排成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-188", productName: "200g×30袋装鳕鱼排香辣味", category: "鱼糜制品", orderType: "普通",
    stock: 13572, safetyStock: 3882, pendingQty: 4709,
    deliveryDate: "2026-07-27", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-189", productName: "6kg×1零称芝士鱼丸家庭装", category: "鱼糜制品", orderType: "普通",
    stock: 8399, safetyStock: 1756, pendingQty: 7058,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-190", productName: "5kg×2袋装火山石烤肠家庭装", category: "调理食品", orderType: "普通",
    stock: 24853, safetyStock: 5383, pendingQty: 4997,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "小酥肉成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-191", productName: "400g×20袋装馅饼经典款", category: "面点食品", orderType: "普通",
    stock: 17465, safetyStock: 5801, pendingQty: 1138,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "馅饼成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-192", productName: "200g×30袋装香酥鸡块餐饮装", category: "调理食品", orderType: "普通",
    stock: 9574, safetyStock: 3117, pendingQty: 3783,
    deliveryDate: "2026-08-06", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-193", productName: "2.5kg×4袋装香菇贡丸黑椒味", category: "丸类制品", orderType: "普通",
    stock: 11573, safetyStock: 3300, pendingQty: 3428,
    deliveryDate: "2026-07-11", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-194", productName: "5kg×2袋装培根卷", category: "调理食品", orderType: "普通",
    stock: 21389, safetyStock: 4681, pendingQty: 7761,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "藕盒成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-195", productName: "1kg×10袋装虾滑出口版", category: "虾滑制品", orderType: "出口",
    stock: 1937, safetyStock: 276, pendingQty: 4929,
    deliveryDate: "2026-07-12", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-196", productName: "5kg×2袋装藕盒藤椒味", category: "调理食品", orderType: "普通",
    stock: 22567, safetyStock: 3829, pendingQty: 1922,
    deliveryDate: "2026-07-27", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "牛排成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-197", productName: "800g×12袋装鱼籽福袋大客户版", category: "组合制品", orderType: "出口",
    stock: 1063, safetyStock: 196, pendingQty: 3148,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-198", productName: "120g×50袋装龙虾球黑椒味", category: "鱼糜制品", orderType: "特通",
    stock: 14655, safetyStock: 1526, pendingQty: 5109,
    deliveryDate: "2026-08-01", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-199", productName: "240g×20袋装芝士鱼丸家庭装", category: "鱼糜制品", orderType: "普通",
    stock: 23414, safetyStock: 4284, pendingQty: 4672,
    deliveryDate: "2026-08-06", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-200", productName: "2.5kg×4袋装馅饼B版", category: "面点食品", orderType: "普通",
    stock: 20620, safetyStock: 3349, pendingQty: 4459,
    deliveryDate: "2026-07-12", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "馄饨成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-201", productName: "1kg×10袋装鲜虾滑经典款", category: "虾滑制品", orderType: "普通",
    stock: 5497, safetyStock: 708, pendingQty: 3041,
    deliveryDate: "2026-08-06", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-202", productName: "300g×30袋装鱼籽虾滑黑椒味", category: "虾滑制品", orderType: "普通",
    stock: 1167, safetyStock: 122, pendingQty: 1176,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-203", productName: "1kg×10袋装海鲜组合包黑椒味", category: "组合制品", orderType: "出口",
    stock: 20405, safetyStock: 1879, pendingQty: 1532,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "蔬菜丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-204", productName: "500g×20袋装鱼竹轮香辣味", category: "鱼糜制品", orderType: "特通",
    stock: 18674, safetyStock: 1732, pendingQty: 3801,
    deliveryDate: "2026-07-16", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-205", productName: "500g×20袋装烧麦盒马定制", category: "面点食品", orderType: "特通",
    stock: 25724, safetyStock: 3821, pendingQty: 2153,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "馄饨成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-206", productName: "500g×20袋装培根卷B版", category: "调理食品", orderType: "普通",
    stock: 18256, safetyStock: 1716, pendingQty: 5993,
    deliveryDate: "2026-08-06", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-207", productName: "2.5kg×4袋装墨鱼丸藤椒味", category: "丸类制品", orderType: "普通",
    stock: 16595, safetyStock: 5056, pendingQty: 7295,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-208", productName: "200g×30袋装贡丸黑椒味", category: "丸类制品", orderType: "特通",
    stock: 555, safetyStock: 132, pendingQty: 876,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-209", productName: "200g×30袋装黄金鱼板经典款", category: "鱼糜制品", orderType: "普通",
    stock: 16336, safetyStock: 1945, pendingQty: 2062,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-210", productName: "200g×30袋装小酥肉香辣味", category: "调理食品", orderType: "普通",
    stock: 6878, safetyStock: 1821, pendingQty: 6591,
    deliveryDate: "2026-07-16", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "牛排成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-211", productName: "500g×20袋装小酥肉盒马定制", category: "调理食品", orderType: "普通",
    stock: 21957, safetyStock: 2794, pendingQty: 4722,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "牛排成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-212", productName: "500g×20袋装蟹籽福袋经典款", category: "组合制品", orderType: "普通",
    stock: 13645, safetyStock: 1148, pendingQty: 6167,
    deliveryDate: "2026-07-30", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼籽福袋成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-213", productName: "1kg×10袋装芝士鱼丸盒马定制", category: "鱼糜制品", orderType: "出口",
    stock: 17354, safetyStock: 4930, pendingQty: 7611,
    deliveryDate: "2026-07-11", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼排成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-214", productName: "200g×30袋装包心鱼丸藤椒味", category: "丸类制品", orderType: "普通",
    stock: 16460, safetyStock: 2691, pendingQty: 7561,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-215", productName: "10片×20袋装牛肉馅饼轻享装", category: "面点食品", orderType: "特通",
    stock: 15925, safetyStock: 1368, pendingQty: 4569,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "米汉堡成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-216", productName: "6kg×1零称芝士鱼丸B版", category: "鱼糜制品", orderType: "特通",
    stock: 17777, safetyStock: 1705, pendingQty: 6105,
    deliveryDate: "2026-07-18", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-217", productName: "1kg×10袋装香菇贡丸餐饮装", category: "丸类制品", orderType: "普通",
    stock: 23435, safetyStock: 2340, pendingQty: 5928,
    deliveryDate: "2026-07-09", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-218", productName: "500g×20袋装包心鱼丸餐饮装", category: "丸类制品", orderType: "普通",
    stock: 14186, safetyStock: 4296, pendingQty: 6685,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-219", productName: "2.5kg×4袋装葱油饼餐饮装", category: "面点食品", orderType: "普通",
    stock: 2581, safetyStock: 844, pendingQty: 3504,
    deliveryDate: "2026-08-01", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "年糕成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-220", productName: "2.5kg×4袋装茄盒盒马定制", category: "调理食品", orderType: "出口",
    stock: 16562, safetyStock: 3584, pendingQty: 2336,
    deliveryDate: "2026-08-01", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-221", productName: "400g×20袋装香菇贡丸黑椒味", category: "丸类制品", orderType: "特通",
    stock: 9605, safetyStock: 845, pendingQty: 3748,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-222", productName: "1kg×10袋装龙虾球轻享装", category: "鱼糜制品", orderType: "普通",
    stock: 24273, safetyStock: 5533, pendingQty: 1442,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-223", productName: "1kg×10袋装墨鱼丸轻享装", category: "丸类制品", orderType: "普通",
    stock: 6333, safetyStock: 1438, pendingQty: 3012,
    deliveryDate: "2026-08-08", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-224", productName: "2.5kg×4袋装鱼籽福袋盒马定制", category: "组合制品", orderType: "出口",
    stock: 3992, safetyStock: 414, pendingQty: 1998,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "海胆包成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-225", productName: "500g×20袋装香菇贡丸轻享装", category: "丸类制品", orderType: "普通",
    stock: 8929, safetyStock: 3021, pendingQty: 6742,
    deliveryDate: "2026-08-01", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-226", productName: "1kg×10袋装虾滑餐饮装", category: "虾滑制品", orderType: "普通",
    stock: 9070, safetyStock: 1403, pendingQty: 753,
    deliveryDate: "2026-08-07", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-227", productName: "2.5kg×4袋装香辣虾滑藤椒味", category: "虾滑制品", orderType: "普通",
    stock: 15172, safetyStock: 1906, pendingQty: 6552,
    deliveryDate: "2026-08-08", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-228", productName: "500g×20袋装海胆包原味", category: "组合制品", orderType: "普通",
    stock: 20305, safetyStock: 5018, pendingQty: 4889,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-229", productName: "400g×20袋装蒸饺原味", category: "面点食品", orderType: "普通",
    stock: 3814, safetyStock: 339, pendingQty: 6765,
    deliveryDate: "2026-08-06", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "蒸饺成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-230", productName: "5kg×2袋装脆骨丸家庭装", category: "丸类制品", orderType: "特通",
    stock: 9904, safetyStock: 2658, pendingQty: 4119,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-231", productName: "2.5kg×4袋装香菇贡丸盒马定制", category: "丸类制品", orderType: "特通",
    stock: 10645, safetyStock: 2528, pendingQty: 1417,
    deliveryDate: "2026-07-11", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-232", productName: "10片×20袋装烧麦黑椒味", category: "面点食品", orderType: "特通",
    stock: 12472, safetyStock: 4074, pendingQty: 5341,
    deliveryDate: "2026-07-11", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "年糕成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-233", productName: "500g×20袋装培根卷黑椒味", category: "调理食品", orderType: "普通",
    stock: 19846, safetyStock: 3773, pendingQty: 6005,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "藕盒成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-234", productName: "2.5kg×4袋装鲜虾滑餐饮装", category: "虾滑制品", orderType: "出口",
    stock: 18949, safetyStock: 1583, pendingQty: 2492,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-235", productName: "300g×30袋装丸类组合包原味", category: "组合制品", orderType: "特通",
    stock: 23775, safetyStock: 2547, pendingQty: 7573,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-236", productName: "240g×20袋装虾味球餐饮装", category: "鱼糜制品", orderType: "特通",
    stock: 294, safetyStock: 100, pendingQty: 2719,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-237", productName: "400g×20袋装春卷盒马定制", category: "面点食品", orderType: "特通",
    stock: 15487, safetyStock: 2568, pendingQty: 2092,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-238", productName: "2.5kg×4袋装鱼肉丸原味", category: "丸类制品", orderType: "普通",
    stock: 16695, safetyStock: 2927, pendingQty: 7215,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-239", productName: "500g×20袋装鲜虾滑团餐装", category: "虾滑制品", orderType: "特通",
    stock: 8893, safetyStock: 1667, pendingQty: 3121,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-240", productName: "1kg×10袋装香辣虾滑藤椒味", category: "虾滑制品", orderType: "普通",
    stock: 4877, safetyStock: 1605, pendingQty: 4179,
    deliveryDate: "2026-07-18", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-241", productName: "1kg×10袋装葱油饼经典款", category: "面点食品", orderType: "普通",
    stock: 7009, safetyStock: 906, pendingQty: 5118,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "烧麦成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-242", productName: "2.5kg×4袋装包心贡丸藤椒味", category: "丸类制品", orderType: "普通",
    stock: 22350, safetyStock: 5000, pendingQty: 728,
    deliveryDate: "2026-07-09", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-243", productName: "500g×20袋装蟹味排出口版", category: "鱼糜制品", orderType: "出口",
    stock: 15696, safetyStock: 3823, pendingQty: 4513,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-244", productName: "240g×20袋装龙虾球团餐装", category: "鱼糜制品", orderType: "普通",
    stock: 305, safetyStock: 100, pendingQty: 2841,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-245", productName: "200g×30袋装鱼肉丸藤椒味", category: "丸类制品", orderType: "普通",
    stock: 17896, safetyStock: 4184, pendingQty: 2086,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-246", productName: "500g×20袋装脆皮鸡米花黑椒味", category: "调理食品", orderType: "普通",
    stock: 25386, safetyStock: 5987, pendingQty: 7075,
    deliveryDate: "2026-07-26", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "玉米肠成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-247", productName: "5kg×2袋装小酥肉轻享装", category: "调理食品", orderType: "特通",
    stock: 21275, safetyStock: 5297, pendingQty: 2460,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "小酥肉成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-248", productName: "300g×30袋装丸类组合包升级款", category: "组合制品", orderType: "普通",
    stock: 2281, safetyStock: 453, pendingQty: 4861,
    deliveryDate: "2026-08-09", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "海胆包成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-249", productName: "300g×30袋装鱼籽福袋黑椒味", category: "组合制品", orderType: "出口",
    stock: 6252, safetyStock: 2157, pendingQty: 4042,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-250", productName: "350g×20袋装玉米肠藤椒味", category: "调理食品", orderType: "普通",
    stock: 23819, safetyStock: 4096, pendingQty: 2100,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-251", productName: "5kg×2袋装盐酥鸡经典款", category: "调理食品", orderType: "普通",
    stock: 19433, safetyStock: 3143, pendingQty: 5653,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-252", productName: "500g×20袋装茄盒出口版", category: "调理食品", orderType: "普通",
    stock: 13846, safetyStock: 3598, pendingQty: 4724,
    deliveryDate: "2026-08-07", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-253", productName: "500g×20袋装蟹籽虾滑餐饮装", category: "虾滑制品", orderType: "出口",
    stock: 17240, safetyStock: 2857, pendingQty: 5503,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-254", productName: "1kg×10袋装海胆包餐饮装", category: "组合制品", orderType: "出口",
    stock: 1313, safetyStock: 423, pendingQty: 2025,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-255", productName: "1kg×10袋装鱼豆腐", category: "鱼糜制品", orderType: "出口",
    stock: 13153, safetyStock: 2477, pendingQty: 6959,
    deliveryDate: "2026-07-16", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-256", productName: "10片×20袋装米汉堡盒马定制", category: "面点食品", orderType: "普通",
    stock: 14174, safetyStock: 4186, pendingQty: 4641,
    deliveryDate: "2026-07-19", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "面点成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-257", productName: "240g×20袋装鱼竹轮经典款", category: "鱼糜制品", orderType: "特通",
    stock: 1435, safetyStock: 378, pendingQty: 6237,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-258", productName: "20片×10袋装锅贴餐饮装", category: "面点食品", orderType: "出口",
    stock: 13887, safetyStock: 3372, pendingQty: 4956,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "蒸饺成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-259", productName: "2.5kg×4袋装蔬菜丸餐饮装", category: "组合制品", orderType: "普通",
    stock: 8252, safetyStock: 799, pendingQty: 3965,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "组合丸成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-260", productName: "2.5kg×4袋装香酥鸡块餐饮装", category: "调理食品", orderType: "普通",
    stock: 19050, safetyStock: 3775, pendingQty: 6433,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-261", productName: "500g×20袋装藕盒餐饮装", category: "调理食品", orderType: "普通",
    stock: 1059, safetyStock: 264, pendingQty: 1750,
    deliveryDate: "2026-07-30", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "牛排成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-262", productName: "800g×12袋装蟹籽福袋餐饮装", category: "组合制品", orderType: "普通",
    stock: 2505, safetyStock: 202, pendingQty: 6938,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-263", productName: "2.5kg×4袋装手抓饼经典款", category: "面点食品", orderType: "出口",
    stock: 10462, safetyStock: 3184, pendingQty: 3775,
    deliveryDate: "2026-07-12", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "年糕成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-264", productName: "800g×12袋装芝士丸餐饮装", category: "组合制品", orderType: "普通",
    stock: 6546, safetyStock: 1810, pendingQty: 2710,
    deliveryDate: "2026-07-09", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "蔬菜丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-265", productName: "2.5kg×4袋装撒尿肉丸黑椒味", category: "丸类制品", orderType: "普通",
    stock: 22299, safetyStock: 4328, pendingQty: 616,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-266", productName: "350g×20袋装奥尔良鸡柳藤椒味", category: "调理食品", orderType: "普通",
    stock: 10367, safetyStock: 2958, pendingQty: 2766,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "调理串成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-267", productName: "1kg×10袋装虾滑香辣味", category: "虾滑制品", orderType: "普通",
    stock: 14864, safetyStock: 2105, pendingQty: 4770,
    deliveryDate: "2026-07-30", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-268", productName: "200g×30袋装香菇贡丸盒马定制", category: "丸类制品", orderType: "普通",
    stock: 8365, safetyStock: 2193, pendingQty: 4585,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-269", productName: "1kg×10袋装藕盒B版", category: "调理食品", orderType: "普通",
    stock: 13913, safetyStock: 1925, pendingQty: 1162,
    deliveryDate: "2026-08-01", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "玉米肠成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-270", productName: "240g×20袋装蟹棒原味", category: "鱼糜制品", orderType: "普通",
    stock: 19039, safetyStock: 4425, pendingQty: 7600,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-271", productName: "1kg×10袋装芝士鱼丸升级款", category: "鱼糜制品", orderType: "普通",
    stock: 8596, safetyStock: 2798, pendingQty: 5444,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-272", productName: "1kg×10袋装鱼豆腐盒马定制", category: "鱼糜制品", orderType: "普通",
    stock: 5529, safetyStock: 955, pendingQty: 1047,
    deliveryDate: "2026-07-27", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-273", productName: "200g×30袋装牛排黑椒味", category: "调理食品", orderType: "普通",
    stock: 8644, safetyStock: 1121, pendingQty: 2937,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-274", productName: "5kg×2袋装脆骨丸经典款", category: "丸类制品", orderType: "特通",
    stock: 25532, safetyStock: 5640, pendingQty: 1763,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-275", productName: "240g×20袋装鱼豆腐餐饮装", category: "鱼糜制品", orderType: "出口",
    stock: 14430, safetyStock: 2198, pendingQty: 1837,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-276", productName: "6kg×1零称鱼丸黑椒味", category: "鱼糜制品", orderType: "普通",
    stock: 19412, safetyStock: 6405, pendingQty: 7797,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼排成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-277", productName: "200g×30袋装藕盒藤椒味", category: "调理食品", orderType: "普通",
    stock: 18519, safetyStock: 5582, pendingQty: 5621,
    deliveryDate: "2026-07-07", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-278", productName: "1kg×10袋装锅贴原味", category: "面点食品", orderType: "普通",
    stock: 25027, safetyStock: 8187, pendingQty: 4889,
    deliveryDate: "2026-08-09", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "馄饨成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-279", productName: "500g×20袋装藕盒家庭装", category: "调理食品", orderType: "出口",
    stock: 7236, safetyStock: 661, pendingQty: 5575,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "小酥肉成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-280", productName: "1kg×10袋装虾滑", category: "虾滑制品", orderType: "普通",
    stock: 7005, safetyStock: 1661, pendingQty: 7445,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-281", productName: "1kg×10袋装藕盒家庭装", category: "调理食品", orderType: "特通",
    stock: 21591, safetyStock: 4908, pendingQty: 7807,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-282", productName: "6kg×1零称蟹棒轻享装", category: "鱼糜制品", orderType: "普通",
    stock: 20988, safetyStock: 2327, pendingQty: 7177,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-283", productName: "300g×30袋装鲜虾滑盒马定制", category: "虾滑制品", orderType: "普通",
    stock: 392, safetyStock: 100, pendingQty: 5517,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-284", productName: "500g×20袋装茄盒香辣味", category: "调理食品", orderType: "普通",
    stock: 10188, safetyStock: 1686, pendingQty: 4095,
    deliveryDate: "2026-07-31", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-285", productName: "500g×20袋装芝士虾滑经典款", category: "虾滑制品", orderType: "普通",
    stock: 22778, safetyStock: 5783, pendingQty: 6371,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-286", productName: "400g×20袋装包心贡丸原味", category: "丸类制品", orderType: "普通",
    stock: 2875, safetyStock: 353, pendingQty: 4448,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-287", productName: "300g×30袋装蟹籽福袋经典款", category: "组合制品", orderType: "普通",
    stock: 1704, safetyStock: 268, pendingQty: 7438,
    deliveryDate: "2026-08-07", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-288", productName: "350g×20袋装玉米肠经典款", category: "调理食品", orderType: "特通",
    stock: 20584, safetyStock: 3438, pendingQty: 3284,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "盐酥鸡成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-289", productName: "5kg×2袋装香酥鸡块盒马定制", category: "调理食品", orderType: "普通",
    stock: 18234, safetyStock: 1783, pendingQty: 3705,
    deliveryDate: "2026-07-12", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-290", productName: "1kg×10袋装包心鱼丸出口版", category: "丸类制品", orderType: "普通",
    stock: 23594, safetyStock: 2100, pendingQty: 4791,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-291", productName: "500g×20袋装猪肉丸黑椒味", category: "丸类制品", orderType: "普通",
    stock: 22051, safetyStock: 4911, pendingQty: 4325,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-292", productName: "1kg×10袋装猪肉大葱水饺原味", category: "面点食品", orderType: "普通",
    stock: 11540, safetyStock: 1220, pendingQty: 7110,
    deliveryDate: "2026-07-23", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "馄饨成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-293", productName: "1kg×10袋装蟹籽虾滑大客户版", category: "虾滑制品", orderType: "普通",
    stock: 12444, safetyStock: 2249, pendingQty: 1953,
    deliveryDate: "2026-07-27", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-294", productName: "20片×10袋装猪肉大葱水饺香辣味", category: "面点食品", orderType: "普通",
    stock: 3035, safetyStock: 287, pendingQty: 3041,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-295", productName: "120g×50袋装龙虾球出口版", category: "鱼糜制品", orderType: "普通",
    stock: 23546, safetyStock: 3599, pendingQty: 5547,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-296", productName: "1kg×10袋装火锅组合丸藤椒味", category: "组合制品", orderType: "普通",
    stock: 22038, safetyStock: 4417, pendingQty: 3009,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼籽福袋成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-297", productName: "200g×30袋装猪肉丸", category: "丸类制品", orderType: "普通",
    stock: 10746, safetyStock: 3525, pendingQty: 4728,
    deliveryDate: "2026-07-07", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-298", productName: "500g×20袋装脆皮鸡米花出口版", category: "调理食品", orderType: "普通",
    stock: 9681, safetyStock: 3158, pendingQty: 839,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "牛排成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-299", productName: "200g×30袋装贡丸出口版", category: "丸类制品", orderType: "特通",
    stock: 18019, safetyStock: 2836, pendingQty: 7224,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-300", productName: "6kg×1零称鳕鱼排家庭装", category: "鱼糜制品", orderType: "普通",
    stock: 17301, safetyStock: 2709, pendingQty: 631,
    deliveryDate: "2026-07-18", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-301", productName: "200g×30袋装鸡排藤椒味", category: "调理食品", orderType: "普通",
    stock: 21396, safetyStock: 4371, pendingQty: 2341,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "玉米肠成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-302", productName: "5kg×2袋装脆皮鸡米花餐饮装", category: "调理食品", orderType: "普通",
    stock: 23143, safetyStock: 2628, pendingQty: 3212,
    deliveryDate: "2026-07-12", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "烤肠成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-303", productName: "500g×20袋装调理串盒马定制", category: "调理食品", orderType: "普通",
    stock: 17915, safetyStock: 3560, pendingQty: 3147,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-304", productName: "240g×20袋装龙虾球轻享装", category: "鱼糜制品", orderType: "普通",
    stock: 9400, safetyStock: 1065, pendingQty: 7521,
    deliveryDate: "2026-07-07", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-305", productName: "2.5kg×4袋装虾滑轻享装", category: "虾滑制品", orderType: "普通",
    stock: 2827, safetyStock: 615, pendingQty: 5831,
    deliveryDate: "2026-07-30", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "虾滑成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-306", productName: "500g×20袋装火山石烤肠家庭装", category: "调理食品", orderType: "普通",
    stock: 7100, safetyStock: 2066, pendingQty: 7531,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-307", productName: "5kg×2袋装牛肉丸餐饮装", category: "丸类制品", orderType: "普通",
    stock: 13007, safetyStock: 1467, pendingQty: 5315,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-308", productName: "1kg×10袋装关东煮组合大客户版", category: "组合制品", orderType: "普通",
    stock: 5279, safetyStock: 1061, pendingQty: 866,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "蔬菜丸成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-309", productName: "240g×20袋装芝士鱼丸香辣味", category: "鱼糜制品", orderType: "特通",
    stock: 24487, safetyStock: 3047, pendingQty: 2390,
    deliveryDate: "2026-07-19", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼排成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-310", productName: "2.5kg×4袋装牛排家庭装", category: "调理食品", orderType: "普通",
    stock: 7715, safetyStock: 965, pendingQty: 5796,
    deliveryDate: "2026-07-19", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-311", productName: "120g×50袋装鱼豆腐轻享装", category: "鱼糜制品", orderType: "特通",
    stock: 16356, safetyStock: 5193, pendingQty: 996,
    deliveryDate: "2026-07-19", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-312", productName: "200g×30袋装鱼肉丸餐饮装", category: "丸类制品", orderType: "特通",
    stock: 24864, safetyStock: 5812, pendingQty: 6191,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-313", productName: "500g×20袋装鱼竹轮经典款", category: "鱼糜制品", orderType: "普通",
    stock: 23860, safetyStock: 4006, pendingQty: 5471,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-314", productName: "350g×20袋装玉米肠原味", category: "调理食品", orderType: "普通",
    stock: 14006, safetyStock: 4009, pendingQty: 6380,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "藕盒成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-315", productName: "200g×30袋装鱼竹轮原味", category: "鱼糜制品", orderType: "普通",
    stock: 21964, safetyStock: 3370, pendingQty: 3370,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-316", productName: "350g×20袋装鸡柳出口版", category: "调理食品", orderType: "普通",
    stock: 25802, safetyStock: 3656, pendingQty: 5914,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "盐酥鸡成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-317", productName: "1kg×10袋装撒尿肉丸", category: "丸类制品", orderType: "特通",
    stock: 7279, safetyStock: 1869, pendingQty: 614,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-318", productName: "350g×20袋装牛排餐饮装", category: "调理食品", orderType: "出口",
    stock: 10416, safetyStock: 2266, pendingQty: 5581,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "调理串成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-319", productName: "2.5kg×4袋装鱼肉丸黑椒味", category: "丸类制品", orderType: "普通",
    stock: 3897, safetyStock: 996, pendingQty: 5775,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-320", productName: "2.5kg×4袋装牛排香辣味", category: "调理食品", orderType: "特通",
    stock: 21011, safetyStock: 2148, pendingQty: 7061,
    deliveryDate: "2026-08-08", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "培根卷成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-321", productName: "5kg×2袋装奥尔良鸡柳经典款", category: "调理食品", orderType: "普通",
    stock: 11327, safetyStock: 2757, pendingQty: 5224,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-322", productName: "500g×20袋装撒尿肉丸盒马定制", category: "丸类制品", orderType: "普通",
    stock: 3718, safetyStock: 1287, pendingQty: 6950,
    deliveryDate: "2026-07-12", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-323", productName: "10片×20袋装烧麦家庭装", category: "面点食品", orderType: "特通",
    stock: 978, safetyStock: 181, pendingQty: 5834,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "面点成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-324", productName: "300g×30袋装蔬菜丸原味", category: "组合制品", orderType: "普通",
    stock: 19020, safetyStock: 5537, pendingQty: 5238,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-325", productName: "400g×20袋装墨鱼丸大客户版", category: "丸类制品", orderType: "出口",
    stock: 23300, safetyStock: 7391, pendingQty: 4627,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-326", productName: "2.5kg×4袋装酥皮卷大客户版", category: "面点食品", orderType: "普通",
    stock: 20364, safetyStock: 2164, pendingQty: 1301,
    deliveryDate: "2026-07-27", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "手抓饼生产线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-327", productName: "2.5kg×4袋装鱼籽福袋家庭装", category: "组合制品", orderType: "特通",
    stock: 15985, safetyStock: 2943, pendingQty: 7462,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼籽福袋成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-328", productName: "500g×20袋装蔬菜丸餐饮装", category: "组合制品", orderType: "普通",
    stock: 13161, safetyStock: 2606, pendingQty: 7162,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-329", productName: "120g×50袋装鱼丸区域装", category: "鱼糜制品", orderType: "普通",
    stock: 24946, safetyStock: 5413, pendingQty: 4306,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-330", productName: "5kg×2袋装小酥肉原味", category: "调理食品", orderType: "普通",
    stock: 4507, safetyStock: 656, pendingQty: 5079,
    deliveryDate: "2026-08-08", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "小酥肉成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-331", productName: "2.5kg×4袋装麻辣烫组合团餐装", category: "组合制品", orderType: "普通",
    stock: 8861, safetyStock: 1741, pendingQty: 7375,
    deliveryDate: "2026-07-09", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-332", productName: "1kg×10袋装馅饼", category: "面点食品", orderType: "普通",
    stock: 17545, safetyStock: 4777, pendingQty: 1167,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "蒸饺成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-333", productName: "500g×20袋装龙虾球大客户版", category: "鱼糜制品", orderType: "特通",
    stock: 1172, safetyStock: 319, pendingQty: 1559,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-334", productName: "300g×30袋装海胆包经典款", category: "组合制品", orderType: "普通",
    stock: 25624, safetyStock: 4926, pendingQty: 645,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "组合丸成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-335", productName: "5kg×2袋装贡丸原味", category: "丸类制品", orderType: "特通",
    stock: 18333, safetyStock: 2859, pendingQty: 5333,
    deliveryDate: "2026-08-07", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-336", productName: "2.5kg×4袋装丸类组合包大客户版", category: "组合制品", orderType: "普通",
    stock: 25730, safetyStock: 6276, pendingQty: 3409,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-337", productName: "240g×20袋装香辣鱼丸盒马定制", category: "鱼糜制品", orderType: "特通",
    stock: 3811, safetyStock: 311, pendingQty: 4237,
    deliveryDate: "2026-07-27", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-338", productName: "1kg×10袋装包心鱼丸家庭装", category: "丸类制品", orderType: "普通",
    stock: 15533, safetyStock: 1846, pendingQty: 5429,
    deliveryDate: "2026-08-02", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-339", productName: "1kg×10袋装包心贡丸家庭装", category: "丸类制品", orderType: "出口",
    stock: 344, safetyStock: 100, pendingQty: 1924,
    deliveryDate: "2026-07-26", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-340", productName: "20片×10袋装猪肉大葱水饺", category: "面点食品", orderType: "特通",
    stock: 22020, safetyStock: 6770, pendingQty: 4731,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "馄饨成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-341", productName: "1kg×10袋装春卷原味", category: "面点食品", orderType: "普通",
    stock: 13862, safetyStock: 4842, pendingQty: 4253,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "汤圆成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-342", productName: "200g×30袋装芝士鱼丸出口版", category: "鱼糜制品", orderType: "特通",
    stock: 805, safetyStock: 180, pendingQty: 5347,
    deliveryDate: "2026-07-30", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼排成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-343", productName: "500g×20袋装烧麦出口版", category: "面点食品", orderType: "特通",
    stock: 9687, safetyStock: 2609, pendingQty: 2420,
    deliveryDate: "2026-07-07", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "面点成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-344", productName: "500g×20袋装蟹籽虾滑轻享装", category: "虾滑制品", orderType: "普通",
    stock: 3150, safetyStock: 1051, pendingQty: 4247,
    deliveryDate: "2026-07-30", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-345", productName: "500g×20袋装芝士鱼丸大客户版", category: "鱼糜制品", orderType: "普通",
    stock: 6688, safetyStock: 947, pendingQty: 7081,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-346", productName: "120g×50袋装龙虾球大客户版", category: "鱼糜制品", orderType: "特通",
    stock: 25698, safetyStock: 4773, pendingQty: 1600,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-347", productName: "300g×30袋装芝士丸香辣味", category: "组合制品", orderType: "出口",
    stock: 19488, safetyStock: 2876, pendingQty: 4602,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-348", productName: "200g×30袋装藕盒", category: "调理食品", orderType: "普通",
    stock: 4521, safetyStock: 433, pendingQty: 1255,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "盐酥鸡成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-349", productName: "1kg×10袋装猪肉丸大客户版", category: "丸类制品", orderType: "特通",
    stock: 17323, safetyStock: 3805, pendingQty: 987,
    deliveryDate: "2026-08-09", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-350", productName: "6kg×1零称鱼排轻享装", category: "鱼糜制品", orderType: "特通",
    stock: 23449, safetyStock: 6652, pendingQty: 2888,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-351", productName: "500g×20袋装鸡柳大客户版", category: "调理食品", orderType: "普通",
    stock: 705, safetyStock: 100, pendingQty: 4767,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "烤肠成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-352", productName: "6kg×1零称蟹棒餐饮装", category: "鱼糜制品", orderType: "特通",
    stock: 531, safetyStock: 135, pendingQty: 6228,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-353", productName: "2.5kg×4袋装关东煮组合", category: "组合制品", orderType: "出口",
    stock: 13167, safetyStock: 1721, pendingQty: 7089,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-354", productName: "1kg×10袋装汤圆大客户版", category: "面点食品", orderType: "出口",
    stock: 24177, safetyStock: 5635, pendingQty: 5920,
    deliveryDate: "2026-07-19", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "汤圆成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-355", productName: "300g×30袋装芝士丸出口版", category: "组合制品", orderType: "普通",
    stock: 234, safetyStock: 100, pendingQty: 2849,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-356", productName: "400g×20袋装馄饨盒马定制", category: "面点食品", orderType: "出口",
    stock: 9478, safetyStock: 2998, pendingQty: 1637,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "面点成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-357", productName: "500g×20袋装鱼籽福袋家庭装", category: "组合制品", orderType: "普通",
    stock: 24119, safetyStock: 5581, pendingQty: 2544,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蔬菜丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-358", productName: "200g×30袋装香辣鱼丸", category: "鱼糜制品", orderType: "普通",
    stock: 23444, safetyStock: 6121, pendingQty: 1588,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鳕鱼排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-359", productName: "150g×40袋装香辣虾滑原味", category: "虾滑制品", orderType: "普通",
    stock: 18425, safetyStock: 4853, pendingQty: 4896,
    deliveryDate: "2026-08-08", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "龙虾球成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-360", productName: "400g×20袋装包心贡丸轻享装", category: "丸类制品", orderType: "普通",
    stock: 21696, safetyStock: 4003, pendingQty: 5496,
    deliveryDate: "2026-07-31", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-361", productName: "200g×30袋装包心贡丸黑椒味", category: "丸类制品", orderType: "普通",
    stock: 14187, safetyStock: 1154, pendingQty: 6961,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-362", productName: "200g×30袋装虾味球香辣味", category: "鱼糜制品", orderType: "普通",
    stock: 19215, safetyStock: 4746, pendingQty: 6835,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-363", productName: "1kg×10袋装鱼豆腐餐饮装", category: "鱼糜制品", orderType: "普通",
    stock: 1308, safetyStock: 376, pendingQty: 3036,
    deliveryDate: "2026-07-26", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-364", productName: "500g×20袋装鱼竹轮团餐装", category: "鱼糜制品", orderType: "普通",
    stock: 5993, safetyStock: 651, pendingQty: 4126,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼排成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-365", productName: "200g×30袋装鱼肉丸精选款", category: "丸类制品", orderType: "特通",
    stock: 23112, safetyStock: 2405, pendingQty: 4243,
    deliveryDate: "2026-07-21", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-366", productName: "2.5kg×4袋装海胆包家庭装", category: "组合制品", orderType: "普通",
    stock: 11528, safetyStock: 1645, pendingQty: 4962,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-367", productName: "5kg×2袋装脆骨丸团餐装", category: "丸类制品", orderType: "出口",
    stock: 20027, safetyStock: 3805, pendingQty: 7832,
    deliveryDate: "2026-08-05", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-368", productName: "400g×20袋装酥皮卷", category: "面点食品", orderType: "普通",
    stock: 16927, safetyStock: 1430, pendingQty: 3109,
    deliveryDate: "2026-07-07", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "面点成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-369", productName: "2.5kg×4袋装墨鱼丸盒马定制", category: "丸类制品", orderType: "普通",
    stock: 24904, safetyStock: 1997, pendingQty: 3068,
    deliveryDate: "2026-08-08", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-370", productName: "5kg×2袋装鸡柳轻享装", category: "调理食品", orderType: "普通",
    stock: 15033, safetyStock: 3463, pendingQty: 2649,
    deliveryDate: "2026-08-07", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "烤肠成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-371", productName: "20片×10袋装蒸饺经典款", category: "面点食品", orderType: "普通",
    stock: 8451, safetyStock: 1571, pendingQty: 2830,
    deliveryDate: "2026-07-16", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "烧麦成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-372", productName: "5kg×2袋装脆皮鸡米花", category: "调理食品", orderType: "出口",
    stock: 24546, safetyStock: 3928, pendingQty: 7513,
    deliveryDate: "2026-07-16", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡排成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-373", productName: "2.5kg×4袋装火锅组合丸家庭装", category: "组合制品", orderType: "普通",
    stock: 16335, safetyStock: 1365, pendingQty: 2669,
    deliveryDate: "2026-08-01", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-374", productName: "1kg×10袋装烧麦黑椒味", category: "面点食品", orderType: "普通",
    stock: 4181, safetyStock: 664, pendingQty: 1884,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "手抓饼生产线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-375", productName: "500g×20袋装虾味球精选款", category: "鱼糜制品", orderType: "特通",
    stock: 20270, safetyStock: 2079, pendingQty: 7390,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-376", productName: "500g×20袋装关东煮组合香辣味", category: "组合制品", orderType: "出口",
    stock: 25163, safetyStock: 4576, pendingQty: 747,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "组合丸成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-377", productName: "400g×20袋装芝士肉丸经典款", category: "丸类制品", orderType: "普通",
    stock: 164, safetyStock: 100, pendingQty: 2671,
    deliveryDate: "2026-08-01", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-378", productName: "200g×30袋装芝士鱼丸轻享装", category: "鱼糜制品", orderType: "普通",
    stock: 10705, safetyStock: 1254, pendingQty: 5109,
    deliveryDate: "2026-07-13", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-379", productName: "400g×20袋装馅饼B版", category: "面点食品", orderType: "出口",
    stock: 22770, safetyStock: 7097, pendingQty: 3488,
    deliveryDate: "2026-07-25", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "面点成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-380", productName: "5kg×2袋装鱼肉丸大客户版", category: "丸类制品", orderType: "特通",
    stock: 10696, safetyStock: 2510, pendingQty: 1066,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "肉丸成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-381", productName: "1kg×10袋装鱼豆腐藤椒味", category: "鱼糜制品", orderType: "出口",
    stock: 2327, safetyStock: 420, pendingQty: 4870,
    deliveryDate: "2026-07-16", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鳕鱼排成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-382", productName: "2.5kg×4袋装海鲜组合包大客户版", category: "组合制品", orderType: "普通",
    stock: 13394, safetyStock: 2867, pendingQty: 2448,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "海胆包成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-383", productName: "6kg×1零称鱼排盒马定制", category: "鱼糜制品", orderType: "普通",
    stock: 215, safetyStock: 100, pendingQty: 5790,
    deliveryDate: "2026-07-19", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-384", productName: "2.5kg×4袋装馅饼经典款", category: "面点食品", orderType: "普通",
    stock: 12240, safetyStock: 2789, pendingQty: 6876,
    deliveryDate: "2026-07-16", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-385", productName: "1kg×10袋装黑椒牛肉条大客户版", category: "调理食品", orderType: "特通",
    stock: 13720, safetyStock: 1402, pendingQty: 6316,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "藕盒成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-386", productName: "500g×20袋装贡丸大客户版", category: "丸类制品", orderType: "出口",
    stock: 21977, safetyStock: 5974, pendingQty: 1039,
    deliveryDate: "2026-07-09", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-387", productName: "500g×20袋装酥皮卷经典款", category: "面点食品", orderType: "普通",
    stock: 25759, safetyStock: 7185, pendingQty: 2007,
    deliveryDate: "2026-07-19", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "馄饨成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-388", productName: "1kg×10袋装蟹籽福袋轻享装", category: "组合制品", orderType: "普通",
    stock: 16986, safetyStock: 4837, pendingQty: 4298,
    deliveryDate: "2026-07-30", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "组合丸成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-389", productName: "1kg×10袋装海鲜组合包家庭装", category: "组合制品", orderType: "普通",
    stock: 20020, safetyStock: 2094, pendingQty: 4371,
    deliveryDate: "2026-07-09", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-390", productName: "10片×20袋装酥皮卷", category: "面点食品", orderType: "特通",
    stock: 7955, safetyStock: 1176, pendingQty: 7831,
    deliveryDate: "2026-07-22", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "年糕成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-391", productName: "2.5kg×4袋装贡丸香辣味", category: "丸类制品", orderType: "普通",
    stock: 10220, safetyStock: 1718, pendingQty: 675,
    deliveryDate: "2026-07-09", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-392", productName: "200g×30袋装小酥肉经典款", category: "调理食品", orderType: "普通",
    stock: 11511, safetyStock: 1813, pendingQty: 5727,
    deliveryDate: "2026-07-12", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-393", productName: "1kg×10袋装香酥鸡块餐饮装", category: "调理食品", orderType: "特通",
    stock: 4232, safetyStock: 668, pendingQty: 3048,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡排成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-394", productName: "240g×20袋装虾味球家庭装", category: "鱼糜制品", orderType: "普通",
    stock: 22445, safetyStock: 1816, pendingQty: 6902,
    deliveryDate: "2026-07-11", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-395", productName: "500g×20袋装春卷经典款", category: "面点食品", orderType: "普通",
    stock: 15416, safetyStock: 4785, pendingQty: 7808,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-396", productName: "1kg×10袋装培根卷黑椒味", category: "调理食品", orderType: "普通",
    stock: 20921, safetyStock: 3362, pendingQty: 2417,
    deliveryDate: "2026-07-08", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "盐酥鸡成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-397", productName: "500g×20袋装香辣鱼丸原味", category: "鱼糜制品", orderType: "特通",
    stock: 13762, safetyStock: 4633, pendingQty: 3943,
    deliveryDate: "2026-07-09", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鳕鱼排成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-398", productName: "350g×20袋装香酥鸡块经典款", category: "调理食品", orderType: "普通",
    stock: 25295, safetyStock: 8155, pendingQty: 2760,
    deliveryDate: "2026-08-03", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-399", productName: "400g×20袋装牛肉馅饼盒马定制", category: "面点食品", orderType: "普通",
    stock: 5465, safetyStock: 992, pendingQty: 1504,
    deliveryDate: "2026-07-27", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "米汉堡成型线", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-400", productName: "800g×12袋装蔬菜丸香辣味", category: "组合制品", orderType: "普通",
    stock: 24488, safetyStock: 8166, pendingQty: 5148,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蔬菜丸成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-401", productName: "2.5kg×4袋装玉米肠餐饮装", category: "调理食品", orderType: "普通",
    stock: 8301, safetyStock: 1894, pendingQty: 5284,
    deliveryDate: "2026-08-04", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-402", productName: "2.5kg×4袋装盐酥鸡藤椒味", category: "调理食品", orderType: "特通",
    stock: 18259, safetyStock: 5594, pendingQty: 5252,
    deliveryDate: "2026-07-27", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "调理串成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-403", productName: "200g×30袋装黑椒牛肉条黑椒味", category: "调理食品", orderType: "特通",
    stock: 18870, safetyStock: 2279, pendingQty: 6808,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "玉米肠成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-404", productName: "800g×12袋装蔬菜丸区域装", category: "组合制品", orderType: "普通",
    stock: 16600, safetyStock: 2808, pendingQty: 1713,
    deliveryDate: "2026-07-17", mainWorkshopId: "WS01", mainWorkshopName: "一车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-405", productName: "2.5kg×4袋装小酥肉轻享装", category: "调理食品", orderType: "普通",
    stock: 287, safetyStock: 100, pendingQty: 2666,
    deliveryDate: "2026-07-20", mainWorkshopId: "WS03", mainWorkshopName: "三车间",
    formingMachineType: "鸡柳成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-406", productName: "5kg×2袋装藕盒香辣味", category: "调理食品", orderType: "普通",
    stock: 16386, safetyStock: 3303, pendingQty: 1546,
    deliveryDate: "2026-07-28", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "调理串成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-407", productName: "500g×20袋装虾滑餐饮装", category: "虾滑制品", orderType: "普通",
    stock: 6008, safetyStock: 898, pendingQty: 5550,
    deliveryDate: "2026-07-15", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 1, status: "启用"
  },
  {
    productId: "AJ-SKU-408", productName: "500g×20袋装汤圆藤椒味", category: "面点食品", orderType: "出口",
    stock: 20194, safetyStock: 2057, pendingQty: 760,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "烧麦成型线", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-409", productName: "20片×10袋装牛肉馅饼香辣味", category: "面点食品", orderType: "普通",
    stock: 24390, safetyStock: 3253, pendingQty: 6617,
    deliveryDate: "2026-08-06", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "春卷成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-410", productName: "5kg×2袋装鸡柳餐饮装", category: "调理食品", orderType: "特通",
    stock: 19878, safetyStock: 6577, pendingQty: 4650,
    deliveryDate: "2026-07-29", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "茄盒成型线", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-411", productName: "1kg×10袋装鱼肉丸经典款", category: "丸类制品", orderType: "普通",
    stock: 17149, safetyStock: 2602, pendingQty: 5257,
    deliveryDate: "2026-07-12", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "贡丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-412", productName: "500g×20袋装蟹籽虾滑藤椒味", category: "虾滑制品", orderType: "普通",
    stock: 21688, safetyStock: 3305, pendingQty: 6830,
    deliveryDate: "2026-07-10", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "虾味球成型机", defaultMachineCount: 1,
    minMachineCount: 1, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-413", productName: "500g×20袋装鱼丸原味", category: "鱼糜制品", orderType: "普通",
    stock: 3668, safetyStock: 1114, pendingQty: 7475,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-414", productName: "2.5kg×4袋装海鲜组合包藤椒味", category: "组合制品", orderType: "普通",
    stock: 4749, safetyStock: 937, pendingQty: 3799,
    deliveryDate: "2026-07-31", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "鱼豆腐成型机", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-415", productName: "1kg×10袋装鱼竹轮盒马定制", category: "鱼糜制品", orderType: "普通",
    stock: 14962, safetyStock: 4743, pendingQty: 3844,
    deliveryDate: "2026-07-07", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "鱼丸成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-416", productName: "120g×50袋装黄金鱼板盒马定制", category: "鱼糜制品", orderType: "普通",
    stock: 10784, safetyStock: 1873, pendingQty: 5620,
    deliveryDate: "2026-07-14", mainWorkshopId: "WS02", mainWorkshopName: "二车间",
    formingMachineType: "蟹排成型机", defaultMachineCount: 2,
    minMachineCount: 2, maxMachineCount: 4, status: "启用"
  },
  {
    productId: "AJ-SKU-417", productName: "300g×30袋装关东煮组合", category: "组合制品", orderType: "普通",
    stock: 25943, safetyStock: 6473, pendingQty: 1481,
    deliveryDate: "2026-07-26", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "包心丸成型机", defaultMachineCount: 3,
    minMachineCount: 1, maxMachineCount: 5, status: "启用"
  },
  {
    productId: "AJ-SKU-418", productName: "500g×20袋装鱼籽福袋轻享装", category: "组合制品", orderType: "普通",
    stock: 13570, safetyStock: 2284, pendingQty: 4511,
    deliveryDate: "2026-07-06", mainWorkshopId: "WS05", mainWorkshopName: "五车间",
    formingMachineType: "芝士丸成型机", defaultMachineCount: 3,
    minMachineCount: 2, maxMachineCount: 3, status: "启用"
  },
  {
    productId: "AJ-SKU-419", productName: "500g×20袋装猪肉大葱水饺餐饮装", category: "面点食品", orderType: "特通",
    stock: 975, safetyStock: 278, pendingQty: 7040,
    deliveryDate: "2026-08-06", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "汤圆成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  },
  {
    productId: "AJ-SKU-420", productName: "10片×20袋装烧麦轻享装", category: "面点食品", orderType: "普通",
    stock: 6304, safetyStock: 1477, pendingQty: 3510,
    deliveryDate: "2026-07-24", mainWorkshopId: "WS04", mainWorkshopName: "四车间",
    formingMachineType: "汤圆成型线", defaultMachineCount: 2,
    minMachineCount: 1, maxMachineCount: 2, status: "启用"
  }
];
