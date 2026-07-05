import React, { useState } from "react";
import { Tag, Button, Space } from "antd";
import { CheckOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import type { AiAlert } from "../../types/ai";

const levelBorder: Record<string, string> = { "高": "#ef4444", "中": "#f59e0b", "低": "#3b82f6" };

const AlertCard: React.FC<{ alert: AiAlert; onResolve?: (id: string) => void }> = ({ alert, onResolve }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        borderLeft: `4px solid ${levelBorder[alert.level]}`,
        background: "#fff",
        borderRadius: 8,
        padding: "10px 14px",
        marginBottom: 10,
        border: "1px solid #e8e8e8",
        borderLeftWidth: 4,
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 6,
        }}
      >
        <Space size={6}>
          <Tag
            color={alert.level === "高" ? "red" : alert.level === "中" ? "orange" : "blue"}
            style={{ fontSize: 11, margin: 0 }}
          >
            {alert.level}风险
          </Tag>
          <span style={{ fontSize: 12, fontWeight: 600 }}>{alert.type}</span>
          {alert.dateShift && (
            <span style={{ fontSize: 11, color: "#999" }}>{alert.dateShift}</span>
          )}
        </Space>
        {!alert.resolved && onResolve && (
          <Button
            size="small"
            type="link"
            icon={<CheckOutlined />}
            style={{ fontSize: 11, color: "#16a34a" }}
            onClick={() => onResolve(alert.id)}
          >
            已处理
          </Button>
        )}
      </div>

      {/* Body */}
      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
        {alert.relatedObject}
      </div>
      <div style={{ fontSize: 12, color: "#555", marginBottom: 4 }}>
        {alert.problem}
      </div>

      {/* Expand toggle */}
      <div
        style={{
          fontSize: 11,
          color: "#16a34a",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 4,
          marginBottom: 4,
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <DownOutlined style={{ fontSize: 10 }} /> : <RightOutlined style={{ fontSize: 10 }} />}
        <span>展开详情</span>
      </div>

      {/* Expandable detail section */}
      {expanded && (
        <div style={{ marginBottom: 4, paddingLeft: 4 }}>
          <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>
            原因：{alert.reason}
          </div>
          <div style={{ fontSize: 11, color: "#16a34a" }}>
            建议：{alert.suggestion}
          </div>
        </div>
      )}

      {/* Target route link text */}
      {alert.targetRoute && (
        <div style={{ fontSize: 10, color: "#bbb", marginTop: expanded ? 4 : 2 }}>
          → 前往{alert.targetRoute}
        </div>
      )}
    </div>
  );
};

export default AlertCard;
