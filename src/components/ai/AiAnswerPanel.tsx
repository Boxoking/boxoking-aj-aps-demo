import React, { useRef, useEffect } from "react";
import { Button, Card, Divider, Space } from "antd";
import { ArrowLeftOutlined, BulbOutlined, FileTextOutlined, BarChartOutlined, RocketOutlined } from "@ant-design/icons";
import type { AiAnswer } from "../../types/ai";
import AiQuestionBox from "./AiQuestionBox";

interface AiAnswerPanelProps {
  messages: AiAnswer[];
  onBack: () => void;
  onAsk: (question: string) => void;
}

const AiAnswerPanel: React.FC<AiAnswerPanelProps> = ({ messages, onBack, onAsk }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  return (
    <div>
      {/* Top bar */}
      <Space align="center" style={{ marginBottom: 16 }}>
        <Button type="link" icon={<ArrowLeftOutlined />} onClick={onBack} style={{ padding: 0 }}>
          返回今日提醒
        </Button>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#16a34a" }}>AI 排产分析</span>
      </Space>

      {/* Messages */}
      {messages.map((msg) => (
        <Card
          key={msg.id}
          style={{
            marginBottom: 16,
            borderRadius: 8,
            background: "#fafafa",
          }}
        >
          {/* User question bar */}
          <div
            style={{
              background: "#f0f0f0",
              padding: "10px 14px",
              borderRadius: 6,
              marginBottom: 16,
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            <span style={{ fontWeight: 700, color: "#333" }}>Q: </span>
            {msg.question}
          </div>

          {/* 🟢 结论 */}
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontWeight: 700, color: "#16a34a", fontSize: 14, marginBottom: 4 }}>
              🟢 结论
            </div>
            <div style={{ fontSize: 13, color: "#333", lineHeight: 1.8 }}>{msg.conclusion}</div>
          </div>

          <Divider style={{ margin: "10px 0" }} />

          {/* 📋 依据 */}
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontWeight: 700, color: "#2563eb", fontSize: 14, marginBottom: 4 }}>
              📋 依据
            </div>
            <div style={{ fontSize: 12, color: "#555", lineHeight: 1.8, whiteSpace: "pre-line" }}>
              {msg.basis}
            </div>
          </div>

          <Divider style={{ margin: "10px 0" }} />

          {/* 📊 相关数据 */}
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontWeight: 700, color: "#7c3aed", fontSize: 14, marginBottom: 4 }}>
              📊 相关数据
            </div>
            <ul style={{ marginTop: 4, paddingLeft: 20, fontSize: 12, color: "#555", lineHeight: 1.8 }}>
              {msg.relatedData.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <Divider style={{ margin: "10px 0" }} />

          {/* 💡 建议动作 */}
          <div>
            <div style={{ fontWeight: 700, color: "#ea580c", fontSize: 14, marginBottom: 4 }}>
              💡 建议动作
            </div>
            <div style={{ fontSize: 13, color: "#333", lineHeight: 1.8 }}>{msg.suggestion}</div>
          </div>
        </Card>
      ))}

      {/* Follow-up question box */}
      <div ref={bottomRef} />
      <AiQuestionBox onAsk={onAsk} />
    </div>
  );
};

export default AiAnswerPanel;
