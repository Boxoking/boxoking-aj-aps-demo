import React from "react";
import { Tag, Button, Space } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import type { AiAlert } from "../../types/ai";

const levelColors: Record<string, string> = { "高": "#ef4444", "中": "#f59e0b", "低": "#3b82f6" };
const levelBg: Record<string, string> = { "高": "#fef2f2", "中": "#fffbeb", "低": "#eff6ff" };

const AlertCard: React.FC<{ alert: AiAlert; onResolve?: (id: string) => void }> = ({ alert, onResolve }) => (
  <div style={{
    borderLeft: `4px solid ${levelColors[alert.level]}`, background: "#fff",
    borderRadius: 8, padding: "10px 14px", marginBottom: 10,
    border: "1px solid #e8e8e8", borderLeftWidth: 4,
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
      <Space size={6}>
        <Tag color={alert.level === "高" ? "red" : alert.level === "中" ? "orange" : "blue"} style={{ fontSize: 11 }}>
          {alert.level}风险
        </Tag>
        <span style={{ fontSize: 12, fontWeight: 600 }}>{alert.type}</span>
        {alert.dateShift && <span style={{ fontSize: 11, color: "#999" }}>{alert.dateShift}</span>}
      </Space>
      {!alert.resolved && onResolve && (
        <Button size="small" type="link" icon={<CheckOutlined />} style={{ fontSize: 11 }}
          onClick={() => onResolve(alert.id)}>已处理</Button>
      )}
    </div>
    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{alert.relatedObject}</div>
    <div style={{ fontSize: 12, color: "#555", marginBottom: 4 }}>{alert.problem}</div>
    <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>原因：{alert.reason}</div>
    <div style={{ fontSize: 11, color: "#16a34a" }}>建议：{alert.suggestion}</div>
    {alert.targetRoute && (
      <div style={{ fontSize: 10, color: "#bbb", marginTop: 4 }}>→ {alert.targetRoute}</div>
    )}
  </div>
);

export default AlertCard;
