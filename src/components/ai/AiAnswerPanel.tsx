import React from "react";
import { Button, Divider, Card } from "antd";
import { ArrowLeftOutlined, BulbOutlined, FileTextOutlined, BarChartOutlined, RocketOutlined } from "@ant-design/icons";
import type { AiAnswer } from "../../types/ai";
import AiQuestionBox from "./AiQuestionBox";

const AiAnswerPanel: React.FC<{
  messages: AiAnswer[]; onBack: () => void; onAsk: (q: string) => void;
}> = ({ messages, onBack, onAsk }) => (
  <div>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <Button type="link" icon={<ArrowLeftOutlined />} onClick={onBack} style={{ padding: 0 }}>返回今日提醒</Button>
      <span style={{ fontSize: 15, fontWeight: 600, color: "#16a34a" }}>AI 排产分析</span>
    </div>

    {messages.map((msg, i) => (
      <Card key={msg.id} style={{ marginBottom: 16, borderRadius: 8 }}>
        {/* Question */}
        <div style={{ background: "#f5f5f5", padding: "10px 14px", borderRadius: 6, marginBottom: 12, fontSize: 13 }}>
          <span style={{ fontWeight: 700, color: "#333" }}>Q: </span>{msg.question}
        </div>

        {/* Conclusion */}
        <div style={{ marginBottom: 10 }}>
          <BulbOutlined style={{ color: "#16a34a", marginRight: 6 }} />
          <span style={{ fontWeight: 700, color: "#16a34a", fontSize: 13 }}>结论</span>
          <div style={{ marginTop: 4, fontSize: 13, color: "#333", lineHeight: 1.8 }}>{msg.conclusion}</div>
        </div>
        <Divider style={{ margin: "8px 0" }} />

        {/* Basis */}
        <div style={{ marginBottom: 10 }}>
          <FileTextOutlined style={{ color: "#2563eb", marginRight: 6 }} />
          <span style={{ fontWeight: 700, color: "#2563eb", fontSize: 13 }}>依据</span>
          <div style={{ marginTop: 4, fontSize: 12, color: "#555", lineHeight: 1.8, whiteSpace: "pre-line" }}>{msg.basis}</div>
        </div>
        <Divider style={{ margin: "8px 0" }} />

        {/* Related Data */}
        <div style={{ marginBottom: 10 }}>
          <BarChartOutlined style={{ color: "#7c3aed", marginRight: 6 }} />
          <span style={{ fontWeight: 700, color: "#7c3aed", fontSize: 13 }}>相关数据</span>
          <ul style={{ marginTop: 4, paddingLeft: 20, fontSize: 12, color: "#555", lineHeight: 1.8 }}>
            {msg.relatedData.map((d, j) => <li key={j}>{d}</li>)}
          </ul>
        </div>
        <Divider style={{ margin: "8px 0" }} />

        {/* Suggestion */}
        <div>
          <RocketOutlined style={{ color: "#ea580c", marginRight: 6 }} />
          <span style={{ fontWeight: 700, color: "#ea580c", fontSize: 13 }}>建议动作</span>
          <div style={{ marginTop: 4, fontSize: 13, color: "#333", lineHeight: 1.8 }}>{msg.suggestion}</div>
        </div>
      </Card>
    ))}

    <AiQuestionBox onAsk={onAsk} />
  </div>
);

export default AiAnswerPanel;
