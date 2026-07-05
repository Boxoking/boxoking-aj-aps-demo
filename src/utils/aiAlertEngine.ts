import type { AiAlert } from "../types/ai";
import type {
  ProductSKU,
  ScheduleTask,
  BOMItem,
  LeadTime,
  MutexGroup,
  MutexGroupItem,
} from "../types";
import { generateDateShifts, getToday } from "./dateShift";

let alertCounter = 0;
function nextId(): string {
  alertCounter += 1;
  return `AI-ALERT-${String(alertCounter).padStart(4, "0")}`;
}

export function generateDailyAlerts(context: {
  products: ProductSKU[];
  scheduleTasks: ScheduleTask[];
  bomData?: BOMItem[];
  leadTimes?: LeadTime[];
  mutexGroups?: MutexGroup[];
  mutexItems?: MutexGroupItem[];
  slurryBases?: any[];
}): AiAlert[] {
  alertCounter = 0;
  const alerts: AiAlert[] = [];
  const today = getToday();
  const dateShifts = generateDateShifts(today);
  const futureDates = dateShifts.map((ds) => ds.date);
  const maxFutureDate = futureDates[futureDates.length - 1];

  const {
    products,
    scheduleTasks,
    leadTimes = [],
    mutexGroups = [],
    mutexItems = [],
    slurryBases = [],
  } = context;

  const scheduledProductIds = new Set(scheduleTasks.map((t) => t.productId));

  // ══════════════════════════════════════════════
  // 1. 库存预警 — products with stock < safetyStock
  // ══════════════════════════════════════════════
  const lowStockProducts = products
    .filter((p) => p.status === "启用" && p.stock < p.safetyStock)
    .sort((a, b) => a.stock / a.safetyStock - b.stock / b.safetyStock)
    .slice(0, 3);

  if (lowStockProducts.length === 0) {
    // fallback: pick products with tightest stock/safety ratio
    products
      .filter((p) => p.status === "启用")
      .sort((a, b) => a.stock / a.safetyStock - b.stock / b.safetyStock)
      .slice(0, 3)
      .forEach((p) => {
        const ratio = (p.stock / p.safetyStock).toFixed(1);
        alerts.push({
          id: nextId(),
          level: "中" as const,
          type: "库存预警",
          relatedObject: `${p.productId} ${p.productName}`,
          problem: `${p.productName}当前库存${p.stock}，安全库存${p.safetyStock}，库存比为${ratio}`,
          reason: `该品相待排量为${p.pendingQty}，库存消耗速度较快`,
          suggestion: `建议密切监控${p.productName}库存水平，及时补货`,
          targetRoute: `/schedule/forming?productId=${p.productId}`,
          resolved: false,
        });
      });
  } else {
    for (const p of lowStockProducts) {
      const gap = p.safetyStock - p.stock;
      alerts.push({
        id: nextId(),
        level: "高" as const,
        type: "库存预警",
        relatedObject: `${p.productId} ${p.productName}`,
        problem: `${p.productName}当前库存${p.stock}，低于安全库存${p.safetyStock}，缺口${gap}`,
        reason: `该品相待排量为${p.pendingQty}，当前库存不足以支撑排产计划`,
        suggestion: `建议优先排产该品相，至少补充${gap}件，或检查原料供应情况`,
        targetRoute: `/schedule/forming?productId=${p.productId}`,
        resolved: false,
      });
    }
  }

  // ══════════════════════════════════════════════
  // 2. 特通订单未排满 — 特通 products not fully scheduled
  // ══════════════════════════════════════════════
  const tetongProducts = products.filter(
    (p) => p.orderType === "特通" && p.status === "启用" && p.pendingQty > 0
  );

  const unscheduledTetong = tetongProducts
    .filter((p) => !scheduledProductIds.has(p.productId))
    .slice(0, 2);

  for (const p of unscheduledTetong) {
    alerts.push({
      id: nextId(),
      level: "高" as const,
      type: "特通订单未排满",
      relatedObject: `${p.productId} ${p.productName}`,
      problem: `特通产品${p.productName}待排量${p.pendingQty}，当前未排产`,
      reason: `该品相属于特通渠道，交付日期${p.deliveryDate}，当前库存${p.stock}`,
      suggestion: `建议在${p.mainWorkshopName}优先为${p.productName}创建成型排产任务`,
      targetRoute: `/schedule/forming?productId=${p.productId}`,
      resolved: false,
    });
  }

  // ══════════════════════════════════════════════
  // 3. 车间反馈待处理 — tasks with status "车间反馈调整"
  // ══════════════════════════════════════════════
  const feedbackTasks = scheduleTasks
    .filter((t) => t.status === "车间反馈调整")
    .slice(0, 2);

  for (const t of feedbackTasks) {
    alerts.push({
      id: nextId(),
      level: "高" as const,
      type: "车间反馈待处理",
      relatedObject: `${t.taskId} ${t.productName}`,
      dateShift: `${t.date} ${t.shift}`,
      problem: `${t.productName}在${t.date}${t.shift}的${t.processType}任务收到车间反馈，需调整`,
      reason: t.feedbackComment
        ? `车间反馈：${t.feedbackComment}`
        : `车间建议调整产量为${t.feedbackQuantity ?? "未指定"}`,
      suggestion: `请审核车间反馈，确认是否按建议调整排产方案`,
      targetRoute: "/schedule/confirm",
      resolved: false,
    });
  }

  // ══════════════════════════════════════════════
  // 4. 浆料提前期不足 — leadTime tasks where slurry stock can't meet demand
  // ══════════════════════════════════════════════
  if (leadTimes.length > 0 && slurryBases.length > 0) {
    const slurryStockMap = new Map<string, { stock: number; pending: number; name: string }>();
    for (const s of slurryBases) {
      slurryStockMap.set(s.productId, {
        stock: s.stockBatches ?? 0,
        pending: s.pendingBatches ?? 0,
        name: s.productName ?? "",
      });
    }

    const urgentLeadTimes = leadTimes
      .filter((lt) => {
        const child = slurryStockMap.get(lt.childSlurryId);
        if (!child) return false;
        const neededForLead = child.stock * lt.leadRatio;
        return child.stock < lt.leadShifts * 5 || child.pending > child.stock * 2;
      })
      .slice(0, 2);

    for (const lt of urgentLeadTimes) {
      const child = slurryStockMap.get(lt.childSlurryId);
      if (!child) continue;
      alerts.push({
        id: nextId(),
        level: "高" as const,
        type: "浆料提前期不足",
        relatedObject: `${lt.parentId} → ${lt.childSlurryId}`,
        problem: `${lt.parentName}依赖${lt.childSlurryName}，提前期${lt.leadShifts}班次，库存${child.stock.toFixed(1)}批可能不足`,
        reason: `需求提前比例${lt.leadRatio}，子浆料待做${child.pending.toFixed(1)}批，库存偏低`,
        suggestion: `建议优先排产${lt.childSlurryName}制浆任务，或将${lt.parentName}成型任务后移`,
        targetRoute: `/schedule/slurry?slurryId=${lt.childSlurryId}`,
        resolved: false,
      });
    }
  }

  // ══════════════════════════════════════════════
  // 5. 机台互斥冲突 — same date/shift mutex group conflicts
  // ══════════════════════════════════════════════
  if (mutexGroups.length > 0 && mutexItems.length > 0) {
    const machineMutexGroups = mutexGroups.filter((g) => g.mutexType === "机台互斥");

    if (scheduleTasks.length > 0) {
      // Check actual conflicts in scheduled tasks
      const dateShiftTaskMap = new Map<string, Set<string>>();
      for (const t of scheduleTasks) {
        const key = `${t.date}|${t.shift}`;
        if (!dateShiftTaskMap.has(key)) dateShiftTaskMap.set(key, new Set());
        dateShiftTaskMap.get(key)!.add(t.productId);
      }

      let found = false;
      for (const group of machineMutexGroups) {
        if (found) break;
        const groupProductIds = new Set(
          mutexItems.filter((i) => i.groupId === group.groupId).map((i) => i.productId)
        );
        for (const [dsKey, scheduledIds] of dateShiftTaskMap) {
          const overlap = [...groupProductIds].filter((pid) => scheduledIds.has(pid));
          if (overlap.length >= 2) {
            const [date, shift] = dsKey.split("|");
            alerts.push({
              id: nextId(),
              level: "高" as const,
              type: "机台互斥冲突",
              relatedObject: `${group.groupId} ${group.groupName}`,
              dateShift: `${date} ${shift}`,
              problem: `互斥组"${group.groupName}"中${overlap.length}个品相在${date}${shift}同班排产`,
              reason: `互斥类型：${group.mutexType}，同班次不能同时生产这些品相`,
              suggestion: `请将冲突品相拆分至不同班次，或调整机台分配`,
              targetRoute: `/master/forming-mutex?groupId=${group.groupId}`,
              resolved: false,
            });
            found = true;
            break;
          }
        }
      }
    } else {
      // No tasks yet — alert about mutex rules that need attention
      if (machineMutexGroups.length > 0) {
        const sample = machineMutexGroups[0];
        const items = mutexItems
          .filter((i) => i.groupId === sample.groupId)
          .slice(0, 3);
        alerts.push({
          id: nextId(),
          level: "低" as const,
          type: "机台互斥冲突",
          relatedObject: `${sample.groupId} ${sample.groupName}`,
          problem: `互斥组"${sample.groupName}"包含${items.length}个品相，排产时需注意同班次互斥`,
          reason: `互斥类型：${sample.mutexType}，排产时同班次应避免安排互斥品相`,
          suggestion: `排产前请确认互斥规则，将互斥品相分布在不同班次`,
          targetRoute: `/master/forming-mutex?groupId=${sample.groupId}`,
          resolved: false,
        });
      }
    }
  }

  // ══════════════════════════════════════════════
  // 6. 计划未确认 — tasks still in draft status
  // ══════════════════════════════════════════════
  const draftTasks = scheduleTasks.filter(
    (t) => t.status === "草稿" || t.status === "自动生成草稿"
  );

  if (draftTasks.length > 0) {
    const sampleDrafts = draftTasks.slice(0, 2);
    for (const t of sampleDrafts) {
      alerts.push({
        id: nextId(),
        level: "中" as const,
        type: "计划未确认",
        relatedObject: `${t.taskId} ${t.productName}`,
        dateShift: `${t.date} ${t.shift}`,
        problem: `${t.productName}在${t.date}${t.shift}的${t.processType}任务仍为"${t.status}"状态`,
        reason: `该任务由${t.source}创建，尚未提交车间确认`,
        suggestion: `请尽快确认该排产计划，或发送至车间审核`,
        targetRoute: "/schedule/confirm",
        resolved: false,
      });
    }

    // summary alert if many drafts
    if (draftTasks.length > 3) {
      alerts.push({
        id: nextId(),
        level: "中" as const,
        type: "计划未确认",
        relatedObject: `${draftTasks.length} 个草稿任务`,
        dateShift: "未来排期",
        problem: `共有 ${draftTasks.length} 个排产任务尚未确认`,
        reason: "排产计划需要计划员确认后才能下发车间执行",
        suggestion: "请前往排产确认页面批量提交确认",
        targetRoute: "/schedule/confirm",
        resolved: false,
      });
    }
  }

  // ══════════════════════════════════════════════
  // 7. 机台负荷较高 — shifts with heavy machine usage
  // ══════════════════════════════════════════════
  if (scheduleTasks.length > 0) {
    const dsTaskCount = new Map<string, number>();
    for (const t of scheduleTasks) {
      const key = `${t.date}|${t.shift}`;
      dsTaskCount.set(key, (dsTaskCount.get(key) ?? 0) + 1);
    }
    const heavyShifts = [...dsTaskCount.entries()]
      .filter(([, c]) => c >= 5)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2);

    for (const [key, count] of heavyShifts) {
      const [date, shift] = key.split("|");
      alerts.push({
        id: nextId(),
        level: count >= 10 ? "高" as const : "中" as const,
        type: "机台负荷较高",
        relatedObject: `${date} ${shift}`,
        dateShift: `${date} ${shift}`,
        problem: `${date}${shift}共有${count}个排产任务，机台负荷偏高`,
        reason: `该班次任务较为集中，可能超出机台承载能力`,
        suggestion: `建议检查该班次机台利用率，部分任务可分散至相邻班次`,
        targetRoute: `/schedule/forming?date=${date}&shift=${shift}`,
        resolved: false,
      });
    }
  }

  // ══════════════════════════════════════════════
  // 8. 速冻产能不足 — check on freezing tasks
  // ══════════════════════════════════════════════
  const freezingTasks = scheduleTasks.filter((t) => t.processType === "速冻");
  if (freezingTasks.length > 0) {
    const dateQty = new Map<string, number>();
    for (const t of freezingTasks) {
      dateQty.set(t.date, (dateQty.get(t.date) ?? 0) + t.quantity);
    }
    const top = [...dateQty.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 1);

    for (const [date, totalQty] of top) {
      alerts.push({
        id: nextId(),
        level: totalQty > 10000 ? "高" as const : "中" as const,
        type: "速冻产能不足",
        relatedObject: date,
        dateShift: `${date} 白班`,
        problem: `${date}速冻任务总量${totalQty}，速冻产能可能不足`,
        reason: `当日速冻排产量较大，需确认速冻机台余量`,
        suggestion: `建议检查${date}速冻机台可用数和产能，必要时分流`,
        targetRoute: `/schedule/freezing?date=${date}`,
        resolved: false,
      });
    }
  }

  // ══════════════════════════════════════════════
  // 9. 包装产能不足 — check on packaging tasks
  // ══════════════════════════════════════════════
  const packagingTasks = scheduleTasks.filter((t) => t.processType === "包装");
  if (packagingTasks.length > 0) {
    const dateQty = new Map<string, number>();
    for (const t of packagingTasks) {
      dateQty.set(t.date, (dateQty.get(t.date) ?? 0) + t.quantity);
    }
    const top = [...dateQty.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 1);

    for (const [date, totalQty] of top) {
      alerts.push({
        id: nextId(),
        level: totalQty > 10000 ? "高" as const : "中" as const,
        type: "包装产能不足",
        relatedObject: date,
        dateShift: `${date} 白班`,
        problem: `${date}包装任务总量${totalQty}，包装产能可能不足`,
        reason: `当日包装排产量较大，需确认包装机台和人手`,
        suggestion: `建议提前协调${date}包装人员配置和机台安排`,
        targetRoute: `/schedule/packaging?date=${date}`,
        resolved: false,
      });
    }
  }

  // ══════════════════════════════════════════════
  // 10. 交期临近未排产 — products with close delivery dates but not scheduled
  // ══════════════════════════════════════════════
  const urgentProducts = products
    .filter((p) => {
      if (p.status !== "启用") return false;
      if (scheduledProductIds.has(p.productId)) return false;
      if (p.pendingQty <= 0) return false;
      return p.deliveryDate >= today && p.deliveryDate <= maxFutureDate;
    })
    .sort((a, b) => a.deliveryDate.localeCompare(b.deliveryDate))
    .slice(0, 3);

  for (const p of urgentProducts) {
    alerts.push({
      id: nextId(),
      level: "高" as const,
      type: "交期临近未排产",
      relatedObject: `${p.productId} ${p.productName}`,
      dateShift: p.deliveryDate,
      problem: `${p.productName}交期${p.deliveryDate}，待排量${p.pendingQty}，尚未排产`,
      reason: `交付日期临近，库存${p.stock}，安全库存${p.safetyStock}`,
      suggestion: `请立即在${p.mainWorkshopName}为${p.productName}创建排产任务`,
      targetRoute: `/schedule/forming?productId=${p.productId}`,
      resolved: false,
    });
  }

  // ══════════════════════════════════════════════
  // 补齐至约 15 条：浆料库存偏低预警
  // ══════════════════════════════════════════════
  if (slurryBases.length > 0) {
    const lowSlurry = slurryBases
      .filter((s: any) => (s.stockBatches ?? 0) < 20 && (s.pendingBatches ?? 0) > 0)
      .sort((a: any, b: any) => (a.stockBatches ?? 0) - (b.stockBatches ?? 0))
      .slice(0, 3);

    for (const s of lowSlurry) {
      alerts.push({
        id: nextId(),
        level: (s.stockBatches ?? 0) < 10 ? "高" as const : "中" as const,
        type: "库存预警",
        relatedObject: `${s.productId} ${s.productName}`,
        problem: `浆料${s.productName}库存仅${(s.stockBatches ?? 0).toFixed(1)}批，处于偏低水平`,
        reason: `由${s.makeWorkshop}生产供${s.demandWorkshop}，待做${(s.pendingBatches ?? 0).toFixed(1)}批`,
        suggestion: `建议${s.makeWorkshop}增加制浆批次，保障下游车间供应`,
        targetRoute: `/schedule/slurry?slurryId=${s.productId}`,
        resolved: false,
      });
    }
  }

  return alerts;
}
