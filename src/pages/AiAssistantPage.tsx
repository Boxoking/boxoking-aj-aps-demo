import React, { useState, useMemo, useCallback } from "react";
import { useMasterDataStore } from "../store/useMasterDataStore";
import { useScheduleStore } from "../store/useScheduleStore";
import { useSlurryMutexStore } from "../store/useSlurryMutexStore";
import DailyAlertPanel from "../components/ai/DailyAlertPanel";
import AiQuestionBox from "../components/ai/AiQuestionBox";
import AiAnswerPanel from "../components/ai/AiAnswerPanel";
import { generateDailyAlerts } from "../utils/aiAlertEngine";
import { generateAiAnswer } from "../utils/aiAnswerEngine";
import type { AiAlert, AiAnswer } from "../types/ai";

const DEFAULT_QUESTION = "为什么 09/04 白班三车间已经安排了 500g×20袋装酥肉，但系统仍然提醒\"小酥肉成型线存在排产风险\"？";

const AiAssistantPage: React.FC = () => {
  const masterStore = useMasterDataStore();
  const scheduleStore = useScheduleStore();
  const slurryStore = useSlurryMutexStore();

  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<AiAnswer[]>([]);
  const [alerts, setAlerts] = useState<AiAlert[]>(() =>
    generateDailyAlerts({
      products: masterStore.products,
      scheduleTasks: scheduleStore.tasks,
      bomData: slurryStore.bomData,
      leadTimes: slurryStore.leadTimes,
      mutexGroups: slurryStore.mutexGroups,
      mutexItems: slurryStore.mutexItems,
      slurryBases: slurryStore.slurryBases,
    })
  );

  const handleResolve = useCallback((id: string) => {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, resolved: true } : a));
  }, []);

  const handleAsk = useCallback((question: string) => {
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
    setMessages(prev => [...prev, answer]);
    setExpanded(true);
  }, [masterStore, scheduleStore, slurryStore]);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ padding: "12px 16px 8px", flexShrink: 0 }}>
        <h2 style={{ color: "#16a34a", margin: 0, fontSize: 18 }}>AI 排产助手</h2>
        <p style={{ color: "#666", fontSize: 13, margin: "4px 0 0" }}>汇总每日排产提醒，支持排产规则问答</p>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "0 16px 16px" }}>
        {!expanded ? (
          <>
            <DailyAlertPanel alerts={alerts} onResolve={handleResolve} />
            <div style={{ marginTop: 16 }}>
              <AiQuestionBox onAsk={handleAsk} defaultValue={DEFAULT_QUESTION} />
            </div>
          </>
        ) : (
          <AiAnswerPanel messages={messages} onBack={() => setExpanded(false)} onAsk={handleAsk} />
        )}
      </div>
    </div>
  );
};

export default AiAssistantPage;
