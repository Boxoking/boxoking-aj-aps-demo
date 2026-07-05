import type { AiAnswer } from "../types/ai";

let counter = 0;

export function generateAiAnswer(
  question: string, context: any
): AiAnswer {
  const q = question.toLowerCase();
  const id = `ans-${++counter}-${Date.now()}`;
  const products = context.products || [];
  const tasks: any[] = context.scheduleTasks || [];

  // Default answer for the pre-loaded question
  if (q.includes("09/04") && q.includes("白班") && q.includes("酥肉") && q.includes("提醒")) {
    return {
      id, question,
      conclusion: "09/04 白班三车间虽然已经安排了 500g×20袋装酥肉，但原计划数量为 2200 箱，已经刚好等于该品相在默认开机条件下的理论上限。车间主任反馈该班次最多只能完成 1600 箱，实际可执行量比原计划少 600 箱。同时，09/04 白班速冻剩余能力只有 1830 箱，包装剩余能力只有 1700 箱，均不足以稳定承接原计划 2200 箱。因此系统建议将 600 箱拆分到 09/04 晚班。",
      basis: `1. 成型机台限制：500g×20袋装酥肉默认开机 2 台，单机产能 650 箱/班，理论最大 1300×2=2600 箱，但车间主任根据实际人员情况反馈只能完成 1600 箱。\n2. 速冻能力：09/04 白班速冻线剩余 1830 箱，不足以承接 2200 箱。\n3. 包装能力：09/04 白班包装线剩余 1700 箱，同样存在瓶颈。\n4. 综上，原计划在当前班次无法稳定执行。`,
      relatedData: [
        "品相：500g×20袋装酥肉（AJ-SKU-003）",
        "车间：三车间 | 机台：小酥肉成型线（FM-006）",
        "原计划：2200 箱 | 车间反馈：1600 箱 | 差额：600 箱",
        "速冻剩余：1830 箱 | 包装剩余：1700 箱",
        "建议拆分：600 箱 → 09/04 晚班",
      ],
      suggestion: "将 600 箱拆分至 09/04 晚班，保留 1600 箱在原班次生产。同时通知车间主任确认调整方案。",
      createdAt: new Date().toISOString(),
    };
  }

  // 最大分组
  if (q.includes("最大分组")) {
    const machines = context.formingMachines || [];
    const example = machines[0];
    return {
      id, question,
      conclusion: "最大分组是成型机台的一项重要属性，用于限制同一班次内该机台最多可以被分成几个独立的生产组。每组可以生产不同品相，但组数不能超过最大分组数。",
      basis: "成型机台在生产不同品相时需要分组作业。每个分组独立运行，互不影响。但如果分组过多，会导致管理和协调成本增加，因此系统设置了最大分组限制。",
      relatedData: example
        ? [`例如：${example.machineName}（${example.machineId}），总数 ${example.quantity} 台，最大分组 ${example.maxGroups} 组。`]
        : ["当前系统共有 60 台成型机台，每台的最大分组数在 1-3 之间。"],
      suggestion: "排产时，系统会自动检查当前班次已使用的分组数。如果分组已满，新任务需要等待其他分组释放或调整到其他班次。",
      createdAt: new Date().toISOString(),
    };
  }

  // 提前 / 浆料
  if (q.includes("提前") || q.includes("浆料")) {
    const lt = context.leadTimes?.[0];
    return {
      id, question,
      conclusion: "浆料提前期是 BOM 中对浆料生产时间的前置要求。某些浆料需要在成型任务开始前提前完成一定比例的生产，以确保成型时浆料供应充足。",
      basis: "系统根据 BOM 结构和提前期设置，自动将浆料需求按照提前班次和提前比例向前移动。例如，提前 1 班次 100% 意味着该浆料必须在成型班次的前一个班次全部完成。",
      relatedData: lt
        ? [`例如：${lt.parentName} 的浆料 ${lt.childSlurryName}，要求提前 ${lt.leadShifts} 班次完成 ${Math.round(lt.leadRatio * 100)}%。`]
        : ["当前系统有 1797 条提前期设置，覆盖大部分品相的核心浆料。"],
      suggestion: "如果浆料提前期无法满足，建议将成型任务后移，或增加制浆任务的批次。",
      createdAt: new Date().toISOString(),
    };
  }

  // 互斥
  if (q.includes("互斥")) {
    const groups = context.mutexGroups || [];
    const wsCount = groups.filter((g: any) => g.mutexType === "车间互斥").length;
    const mcCount = groups.filter((g: any) => g.mutexType === "机台互斥").length;
    return {
      id, question,
      conclusion: "成型互斥用于避免容易混淆或存在工艺冲突的品相在同一班次同时排产。分为车间互斥和机台互斥两种类型。",
      basis: "车间互斥用于外形相似的品相，防止拉错货；机台互斥用于味道差异过大或清洗要求冲突的品相。同一互斥组内的品相不能在同日期班次、同车间/同机台排产。",
      relatedData: [
        `当前系统共有 ${wsCount} 个车间互斥组和 ${mcCount} 个机台互斥组。`,
        "车间互斥限制范围：同日期、同班次、同车间。",
        "机台互斥限制范围：同日期、同班次、同机台。",
      ],
      suggestion: "排产时如果遇到互斥冲突，建议将冲突品相调整到不同班次或不同车间/机台。",
      createdAt: new Date().toISOString(),
    };
  }

  // 反馈 / 车间主任
  if (q.includes("反馈") || q.includes("车间主任")) {
    const fbTasks = tasks.filter((t: any) => t.status === "车间反馈调整");
    return {
      id, question,
      conclusion: "车间主任反馈是排产确认流程中的关键环节。车间主任收到计划员的排产任务后，可以根据实际生产情况提出修改方案（如减少数量、调整班次等），计划员需要审核并最终确认。",
      basis: "系统排产流程：计划员生成草稿 → 提交确认 → 车间主任确认或反馈调整 → 计划员最终确认。反馈调整状态表示车间主任提出了修改建议。",
      relatedData: fbTasks.length > 0
        ? [`当前有 ${fbTasks.length} 个任务处于"车间反馈调整"状态，需要计划员处理。`]
        : ["当前没有待处理的车间反馈。"],
      suggestion: fbTasks.length > 0
        ? "请前往排产确认页面，审核车间反馈并做出最终确认或调整。"
        : "当前无需处理车间反馈。",
      createdAt: new Date().toISOString(),
    };
  }

  // 特通
  if (q.includes("特通")) {
    const tetongProducts = products.filter((p: any) => p.orderType === "特通" && p.pendingQty > 0);
    const list = tetongProducts.slice(0, 5).map((p: any) => `${p.productName}：待排 ${p.pendingQty} 箱`).join("；");
    return {
      id, question,
      conclusion: `当前共有 ${tetongProducts.length} 个特通订单尚未排满，需要优先处理。`,
      basis: "特通订单优先级最高，系统在自动排产时会优先分配机台给特通订单。但受限于机台数量和产能，部分特通订单可能无法在一个班次内全部排满。",
      relatedData: list ? [list] : ["暂无特通订单数据。"],
      suggestion: "建议逐项检查特通订单的可用机台，优先安排产能分配。",
      createdAt: new Date().toISOString(),
    };
  }

  // 为什么不能排 / 为什么
  if (q.includes("为什么不能排") || (q.includes("为什么") && q.includes("排"))) {
    const formingTasks = tasks.filter((t: any) => t.processType === "成型");
    const example = formingTasks[0];
    return {
      id, question,
      conclusion: example
        ? `以 ${example.productName} 为例，系统在排产时会综合校验机台数量、最大分组、互斥规则、最少开机数等多个约束条件。如果任一条件不满足，系统将拒绝排产并提示具体原因。`
        : "系统在排产时会综合校验机台数量、最大分组、互斥规则、最少开机数、浆料供应等多个约束条件。",
      basis: "排产约束包括：1) 机台总数限制 2) 最大分组限制 3) 车间互斥 4) 机台互斥 5) 最少开机数要求 6) 浆料提前期要求。",
      relatedData: example
        ? [`例如：${example.productName}，日期 ${example.date} ${example.shift}，使用 ${example.machineCount} 台机台。`]
        : ["当前暂无排产任务数据。"],
      suggestion: "如需排查具体品相为什么不能排产，请提供品相名称和日期班次信息。",
      createdAt: new Date().toISOString(),
    };
  }

  // 风险 / 哪些
  if (q.includes("风险") || q.includes("哪些")) {
    const stockLow = products.filter((p: any) => p.stock < p.safetyStock).length;
    const tetong = products.filter((p: any) => p.orderType === "特通" && p.pendingQty > 0).length;
    const feedback = tasks.filter((t: any) => t.status === "车间反馈调整").length;
    return {
      id, question,
      conclusion: `当前系统主要风险：${stockLow} 个品相库存低于安全库存，${tetong} 个特通订单未排满，${feedback} 个车间反馈待处理。`,
      basis: "系统每日自动汇总排产相关风险，包括库存、特通订单、车间反馈、浆料提前期、互斥冲突等维度。",
      relatedData: [
        `库存预警品相：${stockLow} 个`,
        `特通未排满：${tetong} 个`,
        `车间反馈待处理：${feedback} 个`,
      ],
      suggestion: "建议优先处理高风险项：库存预警品相和特通订单。",
      createdAt: new Date().toISOString(),
    };
  }

  // Default
  return {
    id, question,
    conclusion: "当前问题没有匹配到明确的排产对象，建议补充品相名称、日期班次、车间或机台信息。",
    basis: "AI 排产助手需要结合品相、班次、机台、浆料或互斥组等数据进行判断。",
    relatedData: ["暂未匹配到具体业务数据。"],
    suggestion: '可以尝试询问"09/04 白班三车间有哪些风险？"或"为什么某个浆料要提前生产？"',
    createdAt: new Date().toISOString(),
  };
}
