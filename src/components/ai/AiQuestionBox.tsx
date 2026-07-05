import React, { useState } from "react";
import { Input, Button, Space, Tag } from "antd";
import { SendOutlined } from "@ant-design/icons";

const suggestions = [
  "什么是最大分组？",
  "为什么要提前制浆？",
  "为什么不能排某品相？",
  "车间反馈怎么处理？",
  "哪些特通订单没排满？",
];

const AiQuestionBox: React.FC<{ onAsk: (question: string) => void; defaultValue?: string }> = ({ onAsk, defaultValue }) => {
  const [input, setInput] = useState(defaultValue || "");

  const handleSend = () => {
    const q = input.trim();
    if (!q) return;
    onAsk(q);
    setInput("");
  };

  return (
    <div style={{ border: "1px solid #e8e8e8", borderRadius: 8, padding: 16, background: "#fff" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          onPressEnter={handleSend}
          placeholder="可以问我：为什么某个班次要提前制浆？某个品相为什么不能排入当前机台？最大分组是什么意思？"
          style={{ flex: 1 }}
        />
        <Button type="primary" icon={<SendOutlined />} onClick={handleSend}
          style={{ background: "#16a34a", borderColor: "#16a34a" }}>发送</Button>
      </div>
      <Space size={6} wrap>
        <span style={{ fontSize: 11, color: "#999" }}>推荐问题：</span>
        {suggestions.map(s => (
          <Tag key={s} style={{ cursor: "pointer", fontSize: 11 }} onClick={() => onAsk(s)}>{s}</Tag>
        ))}
      </Space>
    </div>
  );
};

export default AiQuestionBox;
