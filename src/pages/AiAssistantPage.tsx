import React, { useState, useMemo, useCallback } from "react";
import { useMasterDataStore } from "../store/useMasterDataStore";
import { useScheduleStore } from "../store/useScheduleStore";
import { useSlurryMutexStore } from "../store/useSlurryMutexStore";
import DailyAlertPanel from "../components/ai/DailyAlertPanel";
import AiQuestionBox from "../components/ai/AiQuestionBox";
import AiAnswerPanel from "../components/ai/AiAnswerPanel";
import { generateDailyAlerts } from "../utils/aiAlertEngine";
import { generateAiAnswer } from "../utils/aiAnswerEngine";
import type { AiAnswer } from "../types/ai";

const AiAssistantPage: React.FC = () => {
  const masterStore = useMasterDataStore();
  const scheduleStore = useScheduleStore();
  const slurryStore = useSlurryMutexStore();

  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<AiAnswer[]>([]);
  const [resolvedIds, setResolvedIds] = useState<Set<string>>(new Set());

  const alerts = useMemo(
    () =>
      generateDailyAlerts({
        products: masterStore.products,
        scheduleTasks: scheduleStore.tasks,
        bomData: slurryStore.bomData,
        leadTimes: slurryStore.leadTimes,
        mutexGroups: slurryStore.mutexGroups,
        mutexItems: slurryStore.mutexItems,
        slurryBases: slurryStore.slurryBases,
      }).filter((a) => !resolvedIds.has(a.id)),
    [masterStore, scheduleStore, slurryStore, resolvedIds]
  );

  const handleResolve = useCallback((id: string) => {
    setResolvedIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const handleAsk = useCallback(
    (question: string) => {
      const answer = generateAiAnswer(question, {
        products: masterStore.products,
        scheduleTasks: scheduleStore.tasks,
        bomData: slurryStore.bomData,
        leadTimes: slurryStore.leadTimes,
        mutexGroups: slurryStore.mutexGroups,
        mutexItems: slurryStore.mutexItems,
        slurryBases: slurryStore.slurryBases,
        workshops: masterStore.workshops,
        formingMachines: masterStore.formingMachines,
        freezingSpeeds: masterStore.freezingSpeeds,
        packagingSpeeds: masterStore.packagingSpeeds,
      });
      setMessages((prev) => [...prev, answer]);
      setExpanded(true);
    },
    [masterStore, scheduleStore, slurryStore]
  );

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Top header */}
      <div style={{ padding: "12px 16px 8px", flexShrink: 0 }}>
        <h2 style={{ color: "#16a34a", margin: 0 }}>AI 排产管理</h2>
        <p style={{ color: "#666", fontSize: 13, margin: "4px 0 0" }}>汇总每日排产提醒，支持排产规则问答</p>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflow: "auto", padding: "0 16px" }}>
        {!expanded ? (
          <DailyAlertPanel alerts={alerts} onResolve={handleResolve} />
        ) : (
          <AiAnswerPanel messages={messages} onBack={() => setExpanded(false)} onAsk={handleAsk} />
        )}
      </div>

      {/* 对话框始终固定在最底部 */}
      <div style={{ flexShrink: 0, padding: "8px 16px 12px", borderTop: "1px solid #f0f0f0", background: "#fafafa" }}>
        <AiQuestionBox onAsk={handleAsk} />
      </div>
    </div>
  );
};

export default AiAssistantPage;
