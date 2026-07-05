import { AiAnswer } from "../types/ai";
import { ProductSKU, ScheduleTask } from "../types";

/* ─────────────────────────────────────────────
   工具方法
   ───────────────────────────────────────────── */

function uid(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function answer(
  question: string,
  conclusion: string,
  basis: string,
  relatedData: string[],
  suggestion: string
): AiAnswer {
  return {
    id: uid(),
    question,
    conclusion,
    basis,
    relatedData,
    suggestion,
    createdAt: new Date().toISOString(),
  };
}

/* ─────────────────────────────────────────────
   各分类回答生成
   ───────────────────────────────────────────── */

function answerMaxGroups(
  question: string,
  ctx: { formingMachines?: any[]; products: ProductSKU[] }
): AiAnswer {
  const machines = ctx.formingMachines ?? [];
  const machineExamples = machines
    .slice(0, 3)
    .map(
      (m) =>
        `机台「${m.machineName}」位于车间「${m.workshopName}」，共 ${m.quantity} 台，单日最大分组数为 ${m.maxGroups} 组`
    )
    .join("；");
  const exampleProduct =
    ctx.products.length > 0
      ? `以品相「${ctx.products[0].productName}」为例，其成型机台类型为「${ctx.products[0].formingMachineType}」，默认机台数 ${ctx.products[0].defaultMachineCount}，最小 ${ctx.products[0].minMachineCount}，最大 ${ctx.products[0].maxMachineCount}，在对应机台上按分组排产。`
      : "";

  return answer(
    question,
    "成型机台最大分组数决定了每个机台在单个班次内最多可以同时排产多少组不同的品相，是成型排产的核心约束条件。",
    `最大分组机制通过机台属性中的 maxGroups 字段控制。每个成型机台按照其物理台数（quantity）和最大分组数（maxGroups）划分调度单元，同一班次内最多允许 maxGroups 组不同品相同时在该机台上排产。${
      machineExamples ? `实际数据示例：${machineExamples}` : ""
    }${exampleProduct}`,
    machines
      .slice(0, 5)
      .map(
        (m) =>
          `机台 ${m.machineName}：总台数 ${m.quantity}，最大分组 ${m.maxGroups} 组`
      ),
    "在成型排产页面中，选择机台和班次后，系统会根据最大分组数自动限制该机台可排产的分组数量。若需调整，请联系管理员修改机台档案中的 maxGroups 参数。"
  );
}

function answerMainWorkshop(
  question: string,
  ctx: { products: ProductSKU[] }
): AiAnswer {
  const workshops = Array.from(
    new Set(ctx.products.map((p) => p.mainWorkshopName).filter(Boolean))
  );
  const workshopList =
    workshops.length > 0
      ? workshops.map((w) => `「${w}」`).join("、")
      : "暂无数据";
  const example =
    ctx.products.length > 0
      ? `例如品相「${ctx.products[0].productName}」的主制车间为「${ctx.products[0].mainWorkshopName}」，该品相的成型、速冻、包装任务将优先安排在所属主制车间。`
      : "";

  return answer(
    question,
    `每个品相都有一个主制车间，系统在自动排产和推荐排产时会优先将任务分配到该品相的主制车间，以减少跨车间转运成本。当前系统中定义了主制车间的品相共 ${
      ctx.products.filter((p) => !!p.mainWorkshopId).length
    } 个。`,
    `主制车间是品相档案中的核心属性（mainWorkshopId / mainWorkshopName）。系统在生成排产方案时，成型、速冻、包装三道工序均以品相的主制车间作为首选排产位置，只有在主制车间产能不足时才会考虑其他车间。涉及的主制车间包括：${workshopList}。${example}`,
    ctx.products
      .slice(0, 10)
      .map(
        (p) => `${p.productName} → 主制车间: ${p.mainWorkshopName || "未设置"}`
      ),
    "在品相管理页面中可查看和修改各品相的主制车间。若发现排产任务被分配到非主制车间，通常是主制车间产能已满，系统自动调拨至其他可用车间。"
  );
}

function answerLeadTimeAndSlurry(
  question: string,
  ctx: {
    bomData?: any[];
    leadTimes?: any[];
    slurryBases?: any[];
    products: ProductSKU[];
  }
): AiAnswer {
  const leadCount = ctx.leadTimes?.length ?? 0;
  const bomCount = ctx.bomData?.length ?? 0;
  const slurryCount = ctx.slurryBases?.length ?? 0;

  const leadExample =
    ctx.leadTimes && ctx.leadTimes.length > 0
      ? `例如提前期记录「${ctx.leadTimes[0].parentName} → ${ctx.leadTimes[0].childSlurryName}」需要提前 ${ctx.leadTimes[0].leadShifts} 个班次，提前比例为 ${(ctx.leadTimes[0].leadRatio * 100).toFixed(0)}%。`
      : "当前尚无提前期配置数据。";
  const bomExample =
    ctx.bomData && ctx.bomData.length > 0
      ? `BOM 示例：${ctx.bomData[0].parentName} 使用 ${ctx.bomData[0].childName} 用量 ${ctx.bomData[0].usageKg} kg。`
      : "";

  return answer(
    question,
    `浆料（原料）需要比成品成型提前一定班次开始制备，以确保成型工序有足够物料可用。当前系统中共有 ${bomCount} 条 BOM 记录、${leadCount} 条提前期配置、${slurryCount} 条浆料排产基础数据。`,
    `BOM（物料清单）定义了品相到浆料的用量关系，提前期设置规定了浆料制备相对于成型排产的提前班次数和比例。${leadExample}${bomExample}系统在进行自动排产时，会先根据成型计划反推浆料需求，再结合提前期和浆料排产基础数据（批量大小、制浆车间、库存批数、待做批数）生成浆料甘特图，确保成型开班时浆料已备齐。`,
    [
      `BOM 记录数：${bomCount}`,
      `提前期配置数：${leadCount}`,
      `浆料排产基础数据数：${slurryCount}`,
      ...(ctx.leadTimes?.slice(0, 5).map(
        (lt) =>
          `${lt.parentName} → ${lt.childSlurryName}：提前 ${lt.leadShifts} 班次，比例 ${lt.leadRatio}`
      ) ?? []),
    ],
    "在「浆料排产」页面查看浆料甘特图，确认浆料制备计划是否满足成型排产的时间要求。若成型排产因浆料不足受阻，请检查对应的提前期设置和浆料库存批数。"
  );
}

function answerMutex(
  question: string,
  ctx: {
    mutexGroups?: any[];
    mutexItems?: any[];
    products: ProductSKU[];
  }
): AiAnswer {
  const groups = ctx.mutexGroups ?? [];
  const items = ctx.mutexItems ?? [];
  const workshopGroups = groups.filter(
    (g: any) => g.mutexType === "车间互斥"
  );
  const machineGroups = groups.filter(
    (g: any) => g.mutexType === "机台互斥"
  );

  const workshopExample =
    workshopGroups.length > 0
      ? `例如互斥组「${workshopGroups[0].groupName}」（${workshopGroups[0].mutexType}），组内品相不可在同一车间同时排产。`
      : "";
  const machineExample =
    machineGroups.length > 0
      ? `例如互斥组「${machineGroups[0].groupName}」（${machineGroups[0].mutexType}），组内品相不可在同一机台上同时排产。`
      : "";
  const itemDetails = items
    .slice(0, 10)
    .map(
      (i: any) => `品相「${i.productName}」属于互斥组「${i.groupId}」`
    )
    .join("；");

  return answer(
    question,
    `系统中有两种互斥规则：车间互斥和机台互斥。当前共配置 ${groups.length} 个互斥组（车间互斥 ${workshopGroups.length} 个，机台互斥 ${machineGroups.length} 个），涉及 ${items.length} 条品相记录。`,
    `互斥规则用于防止冲突品相被分配到同一车间或同一机台。车间互斥（mutexType = "车间互斥"）意味着组内品相不得在同一车间同时生产；机台互斥（mutexType = "机台互斥"）意味着组内品相不得在同一成型机台上同时排产。${workshopExample}${machineExample}具体互斥品相：${
      itemDetails || "暂无数据"
    }`,
    [
      `互斥组总数：${groups.length}`,
      `车间互斥组：${workshopGroups.length}`,
      `机台互斥组：${machineGroups.length}`,
      ...items
        .slice(0, 10)
        .map((i: any) => `${i.productName} ∈ ${i.groupId}`),
    ],
    "在排产时，如果系统提示互斥冲突，请检查对应品相的互斥组配置，将冲突品相分配到不同车间或不同机台/班次。互斥组配置可在「互斥管理」页面维护。"
  );
}

function answerFeedback(
  question: string,
  ctx: { scheduleTasks: ScheduleTask[] }
): AiAnswer {
  const feedbackTasks = ctx.scheduleTasks.filter(
    (t) => t.status === "车间反馈调整" || t.feedbackComment
  );
  const taskExamples = feedbackTasks
    .slice(0, 5)
    .map((t) => {
      const fb = t.feedbackQuantity
        ? `反馈数量: ${t.feedbackQuantity}`
        : "";
      const comment = t.feedbackComment
        ? `反馈意见: ${t.feedbackComment}`
        : "";
      return `任务「${t.taskId}」品相 ${t.productName}，${t.date} ${t.shift}：${fb} ${comment}`;
    })
    .join("；");

  return answer(
    question,
    `车间主任可以通过反馈调整功能对系统生成的排产计划提出修改意见，形成双向确认闭环。当前共有 ${feedbackTasks.length} 条含反馈/待调整的排产任务。`,
    `排产流程中，计划部生成排产草稿后推送至车间确认（状态变为"待车间确认"）。车间主任查看排产计划后，可以逐一反馈调整（状态变为"车间反馈调整"），包括建议调整的数量（feedbackQuantity）和文字意见（feedbackComment）。计划部收到反馈后可修改排产并再次推送确认，最终由车间确认完成（状态变为"最终确认"）。${
      taskExamples
        ? `当前反馈任务示例：${taskExamples}`
        : "当前无待处理的反馈任务。"
    }`,
    feedbackTasks
      .slice(0, 10)
      .map(
        (t) =>
          `${t.productName} | ${t.date} ${t.shift} | ${t.status} | ${
            t.feedbackComment || "无备注"
          }`
      ),
    "在「排产确认」页面中可查看各车间反馈状态。建议计划部每日定时查看反馈任务，及时调整排产方案后重新推送确认。"
  );
}

function answerTetong(
  question: string,
  ctx: { products: ProductSKU[]; scheduleTasks: ScheduleTask[] }
): AiAnswer {
  const tetongProducts = ctx.products.filter(
    (p) => p.orderType === "特通"
  );
  const scheduledTetongIds = new Set(
    ctx.scheduleTasks
      .filter((t) =>
        tetongProducts.some((p) => p.productId === t.productId)
      )
      .map((t) => t.productId)
  );
  const unscheduledTetong = tetongProducts.filter(
    (p) => !scheduledTetongIds.has(p.productId)
  );
  const partialTetong = tetongProducts.filter((p) =>
    scheduledTetongIds.has(p.productId)
  );

  const unscheduledList = unscheduledTetong
    .slice(0, 10)
    .map(
      (p) =>
        `「${p.productName}」待交付 ${p.pendingQty}，交期 ${p.deliveryDate}，主制车间 ${p.mainWorkshopName}`
    )
    .join("；");
  const partialList = partialTetong
    .slice(0, 5)
    .map((p) => {
      const tasks = ctx.scheduleTasks.filter(
        (t) => t.productId === p.productId
      );
      const totalQty = tasks.reduce((sum, t) => sum + t.quantity, 0);
      return `「${p.productName}」已排产 ${totalQty}，待排 ${
        p.pendingQty - totalQty > 0 ? p.pendingQty - totalQty : 0
      }`;
    })
    .join("；");

  const allScheduled =
    unscheduledTetong.length === 0 &&
    partialTetong.every((p) => {
      const tasks = ctx.scheduleTasks.filter(
        (t) => t.productId === p.productId
      );
      const totalQty = tasks.reduce((sum, t) => sum + t.quantity, 0);
      return totalQty >= p.pendingQty;
    });

  const conclusion = allScheduled
    ? "所有特通订单均已完成排产，无遗漏。"
    : `特通订单共 ${tetongProducts.length} 个品相，其中 ${unscheduledTetong.length} 个品相完全未排产，${partialTetong.length} 个品相已部分排产。共 ${unscheduledTetong.length} 个品相需关注。`;

  return answer(
    question,
    conclusion,
    `特通订单是指 orderType = "特通" 的订单类型，通常具有更高的优先级和更严格的交期要求。系统在排产时应优先保障特通订单的交付。${
      unscheduledList ? `未排产的特通品相：${unscheduledList}` : ""
    }${partialList ? `；部分排产的特通品相：${partialList}` : ""}`,
    [
      `特通品相总数：${tetongProducts.length}`,
      `完全未排产：${unscheduledTetong.length}`,
      `已部分排产：${partialTetong.length}`,
      ...unscheduledTetong
        .slice(0, 5)
        .map(
          (p) =>
            `${p.productName}：待交付 ${p.pendingQty}，交期 ${p.deliveryDate}`
        ),
    ],
    unscheduledTetong.length > 0
      ? "建议优先为未排产的特通品相安排成型机台和班次，在「成型排产」页面按 orderType 筛选特通订单进行批量排产。"
      : "特通订单排产状态良好，继续保持监控。"
  );
}

function answerWhyCannotSchedule(
  question: string,
  ctx: {
    products: ProductSKU[];
    scheduleTasks: ScheduleTask[];
    formingMachines?: any[];
    mutexGroups?: any[];
    mutexItems?: any[];
    slurryBases?: any[];
  }
): AiAnswer {
  const machines = ctx.formingMachines ?? [];
  const mutexItems = ctx.mutexItems ?? [];

  const totalMachines = machines.reduce(
    (sum: number, m: any) => sum + (m.quantity ?? 0),
    0
  );
  const availableMachines = machines
    .filter((m: any) => m.status === "可用")
    .reduce((sum: number, m: any) => sum + (m.quantity ?? 0), 0);
  const occupiedMachines = totalMachines - availableMachines;

  const productMachineCheck = ctx.products.slice(0, 5).map((p) => {
    const matchingMachine = machines.find(
      (m: any) => m.workshopId === p.mainWorkshopId
    );
    const hasCapacity = matchingMachine
      ? matchingMachine.quantity > 0
      : false;
    return `品相「${p.productName}」主制车间「${p.mainWorkshopName}」：成型机台类型「${p.formingMachineType}」，匹配机台 ${
      matchingMachine
        ? `「${matchingMachine.machineName}」${matchingMachine.quantity} 台`
        : "未找到"
    }，产能 ${hasCapacity ? "充足" : "不足"}`;
  });

  const mutexConflicts =
    mutexItems.length > 0
      ? `存在 ${
          new Set(mutexItems.map((i: any) => i.groupId)).size
        } 个互斥组约束，组内品相不可同时排产。`
      : "";

  return answer(
    question,
    "排产受限通常由以下因素导致：成型机台数量不足、分组达到上限、互斥规则冲突、浆料提前期不足。建议逐一排查。",
    `当前系统状态分析：成型机台总数 ${totalMachines} 台，可用 ${availableMachines} 台${
      occupiedMachines > 0
        ? `，${occupiedMachines} 台处于维护/停用状态`
        : ""
    }。${mutexConflicts}各品相机台匹配情况：${productMachineCheck.join("；")}`,
    [
      `成型机台总数：${totalMachines}`,
      `可用机台：${availableMachines}`,
      `维护/停用：${occupiedMachines}`,
      `互斥组数量：${
        new Set(mutexItems.map((i: any) => i.groupId)).size
      }`,
      ...productMachineCheck,
    ],
    "建议操作：1）检查成型机台状态，将维护中的机台恢复可用；2）检查互斥规则是否过于严格；3）确认浆料提前期是否满足要求；4）考虑将部分品相分配到其他车间。"
  );
}

function answerRiskSummary(
  question: string,
  ctx: {
    products: ProductSKU[];
    scheduleTasks: ScheduleTask[];
    bomData?: any[];
    leadTimes?: any[];
  }
): AiAnswer {
  const tasks = ctx.scheduleTasks;
  const products = ctx.products;

  const dateMatch = question.match(
    /(\d{4}-\d{2}-\d{2}|\d{1,2}\/\d{1,2})/
  );
  const targetDate = dateMatch ? dateMatch[1] : "当前排产周期";

  const draftTasks = tasks.filter(
    (t) => t.status === "草稿" || t.status === "自动生成草稿"
  );
  const unconfirmedTasks = tasks.filter(
    (t) => t.status === "待车间确认"
  );
  const feedbackTasks = tasks.filter(
    (t) => t.status === "车间反馈调整"
  );
  const overloadedProducts = products.filter(
    (p) => p.pendingQty > p.stock + p.safetyStock * 2
  );

  const risks: string[] = [];
  if (draftTasks.length > 0)
    risks.push(
      `${draftTasks.length} 条排产任务仍为草稿状态，尚未推送车间确认`
    );
  if (unconfirmedTasks.length > 0)
    risks.push(
      `${unconfirmedTasks.length} 条任务等待车间确认，超时未确认可能导致排产延迟`
    );
  if (feedbackTasks.length > 0)
    risks.push(
      `${feedbackTasks.length} 条任务被车间反馈调整，需计划部处理`
    );
  if (overloadedProducts.length > 0)
    risks.push(
      `${
        overloadedProducts.length
      } 个品相 pending 量远超安全库存，存在交付风险：${overloadedProducts
        .slice(0, 3)
        .map((p) => p.productName)
        .join("、")}`
    );
  if ((ctx.bomData?.length ?? 0) === 0)
    risks.push("BOM 数据缺失，浆料需求无法计算");
  if ((ctx.leadTimes?.length ?? 0) === 0)
    risks.push("提前期配置缺失，浆料制备时间无法保证");

  return answer(
    question,
    risks.length > 0
      ? `在 ${targetDate} 范围内共识别出 ${risks.length} 项需关注的风险。`
      : `在 ${targetDate} 范围内未发现明显风险，排产状态正常。`,
    risks.length > 0
      ? `风险分析基于排产任务状态、品相库存水平和基础数据完整性综合评估。${risks.join(
          "。"
        )}`
      : `已检查排产任务状态（共 ${tasks.length} 条）、品相库存水平（共 ${products.length} 个）和基础数据完整性，当前均在正常范围内。`,
    risks.length > 0
      ? risks
      : ["排产任务状态正常", "品相库存水平正常", "基础数据完整"],
    risks.length > 0
      ? "建议按优先级处理上述风险项：① 先处理车间反馈调整任务 ② 再推送草稿任务至车间确认 ③ 补充缺失的基础数据配置。"
      : "当前排产状态良好，建议定期复查。"
  );
}

function answerFormingSchedule(question: string, _ctx: any): AiAnswer {
  return answer(
    question,
    "成型排产页面是计划部进行成型工序排产的核心操作界面，支持手动排产和自动排产两种模式。",
    "在成型排产页面中，左侧为品相列表（可按 orderType 筛选普通/特通/出口订单），右侧为机台甘特图。操作流程：① 选择目标班次（日期 + 白班/晚班）② 选择品相和机台 ③ 设置机台数量和分组号 ④ 点击排产生成成型任务。系统会根据品相的主制车间和成型机台类型自动过滤可用机台，并根据机台的 maxGroups 限制分组数量。自动排产模式下，系统按交期优先级和机台产能自动分配品相。",
    [
      "页面路径：成型排产",
      "支持筛选：orderType（普通/特通/出口）、车间、机台类型",
      "约束条件：最大分组数、机台可用性、互斥规则",
      "操作模式：手动排产、自动排产",
    ],
    "首次使用时建议先从自动排产开始，系统生成初始方案后再手动微调。手动排产时注意分组号不可超过机台最大分组数。"
  );
}

function answerConfirmPage(
  question: string,
  ctx: { scheduleTasks: ScheduleTask[] }
): AiAnswer {
  const confirmedCount = ctx.scheduleTasks.filter(
    (t) => t.status === "最终确认"
  ).length;
  const pendingCount = ctx.scheduleTasks.filter(
    (t) => t.status === "待车间确认"
  ).length;
  const feedbackCount = ctx.scheduleTasks.filter(
    (t) => t.status === "车间反馈调整"
  ).length;

  return answer(
    question,
    "排产确认页面是计划部与车间之间的协同确认枢纽，实现排产任务的状态流转和反馈闭环。",
    `确认流程：计划部生成排产 → 任务状态为"待车间确认" → 车间主任查看并逐条确认（可反馈调整数量和建议） → 状态变为"车间反馈调整"或"最终确认" → 计划部根据反馈修改后排产 → 再次推送确认 → 车间最终确认。当前状态统计：已最终确认 ${confirmedCount} 条，待车间确认 ${pendingCount} 条，车间反馈调整 ${feedbackCount} 条。`,
    [
      `最终确认：${confirmedCount} 条`,
      `待车间确认：${pendingCount} 条`,
      `车间反馈调整：${feedbackCount} 条`,
      `任务总数：${ctx.scheduleTasks.length} 条`,
    ],
    "建议计划部每日定时登录排产确认页面，查看车间反馈并及时调整。对于长时间未确认的任务，可联系对应车间主任催促确认。"
  );
}

function answerManualPackaging(
  question: string,
  ctx: { packagingSpeeds?: any[]; scheduleTasks: ScheduleTask[] }
): AiAnswer {
  const packagingSpeeds = ctx.packagingSpeeds ?? [];
  const manualItems = packagingSpeeds.filter(
    (ps: any) => ps.manualPackaging === true
  );
  const packagingTasks = ctx.scheduleTasks.filter(
    (t) => t.processType === "包装"
  );

  return answer(
    question,
    "手动包装是指不依赖自动化包装机台，由人工完成包装工序的排产方式，适用于小批量、特殊规格或包装机台产能不足的场景。",
    `在包装速度关联配置中，若某品相的包装记录标记了 manualPackaging = true，则该品相的包装工序按人工模式计算产能（不受包装机台台数和速度限制）。当前共有 ${manualItems.length} 条手动包装配置记录。包装工序排产任务共 ${packagingTasks.length} 条。手动包装任务在甘特图中通常显示为独立行，不占用包装机台资源。`,
    manualItems.length > 0
      ? manualItems
          .slice(0, 10)
          .map(
            (ps: any) =>
              `${ps.productName}：手动包装，白班产能 ${
                ps.dayCapacity ?? "-"
              }，晚班产能 ${ps.nightCapacity ?? "-"}`
          )
      : ["暂无手动包装配置"],
    "如需将某品相设置为手动包装，请在「包装速度关联」页面中将对应记录的 manualPackaging 字段设为 true，并设定合理的白班/晚班人工产能。"
  );
}

function answerDefault(question: string): AiAnswer {
  return answer(
    question,
    "无法根据当前问题自动匹配到具体的分析模块，请提供更多细节以便精准回答。",
    "系统通过关键词匹配触发不同的分析模块，当前支持的关键词包括：最大分组、主制车间、提前/浆料、互斥、反馈/车间主任、特通、为什么不能排/为什么、风险/哪些、成型排产、排产确认、手动包装。",
    [
      "支持的分析维度：成型排产、互斥规则、浆料/提前期、车间反馈、特通订单、风险评估",
    ],
    "请尝试使用上述关键词重新描述问题，例如：「为什么这批订单不能排产？」「特通订单是否都排了？」「有哪些风险需要注意？」"
  );
}

/* ─────────────────────────────────────────────
   主入口
   ───────────────────────────────────────────── */

export function generateAiAnswer(
  question: string,
  context: {
    products: ProductSKU[];
    scheduleTasks: ScheduleTask[];
    bomData?: any[];
    leadTimes?: any[];
    mutexGroups?: any[];
    mutexItems?: any[];
    slurryBases?: any[];
    workshops?: any[];
    formingMachines?: any[];
    freezingSpeeds?: any[];
    packagingSpeeds?: any[];
  }
): AiAnswer {
  const q = question.trim();

  // Order matters: more specific patterns first
  if (q.includes("最大分组")) {
    return answerMaxGroups(q, context);
  }
  if (q.includes("主制车间")) {
    return answerMainWorkshop(q, context);
  }
  if (q.includes("互斥")) {
    return answerMutex(q, context);
  }
  if (q.includes("特通")) {
    return answerTetong(q, context);
  }
  if (q.includes("为什么不能排")) {
    return answerWhyCannotSchedule(q, context);
  }
  if (q.includes("反馈") || q.includes("车间主任")) {
    return answerFeedback(q, context);
  }
  if (q.includes("提前") || q.includes("浆料")) {
    return answerLeadTimeAndSlurry(q, context);
  }
  if (q.includes("风险") || q.includes("哪些")) {
    return answerRiskSummary(q, context);
  }
  if (q.includes("成型排产")) {
    return answerFormingSchedule(q, context);
  }
  if (q.includes("排产确认")) {
    return answerConfirmPage(q, context);
  }
  if (q.includes("手动包装")) {
    return answerManualPackaging(q, context);
  }
  if (q.includes("为什么")) {
    return answerWhyCannotSchedule(q, context);
  }

  return answerDefault(q);
}
