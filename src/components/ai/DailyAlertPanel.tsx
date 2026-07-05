import React, { useState } from "react";
import { Row, Col, Card, Statistic } from "antd";
import { WarningOutlined, ExclamationCircleOutlined, InfoCircleOutlined, BellOutlined } from "@ant-design/icons";
import AlertCard from "./AlertCard";
import type { AiAlert } from "../../types/ai";

const DailyAlertPanel: React.FC<{ alerts: AiAlert[]; onResolve: (id: string) => void }> = ({ alerts, onResolve }) => {
  const [filter, setFilter] = useState<string | null>(null);
  const activeAlerts = alerts.filter(a => !a.resolved);
  const filtered = filter ? activeAlerts.filter(a => a.level === filter) : activeAlerts;
  const high = activeAlerts.filter(a => a.level === "高").length;
  const mid = activeAlerts.filter(a => a.level === "中").length;
  const low = activeAlerts.filter(a => a.level === "低").length;

  const statStyle = (level: string | null): React.CSSProperties => ({
    textAlign: "center", borderRadius: 8, cursor: "pointer",
    border: filter === level ? `2px solid ${level === "高" ? "#ef4444" : level === "中" ? "#f59e0b" : level === "低" ? "#3b82f6" : "#16a34a"}` : "2px solid transparent",
    transition: "all 0.2s",
  });

  return (
    <div>
      <Row gutter={8} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card size="small" style={statStyle(null)} onClick={() => setFilter(null)}>
            <Statistic title="今日待处理" value={activeAlerts.length} prefix={<BellOutlined />} valueStyle={{ color: "#16a34a", fontSize: 24 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" style={statStyle("高")} onClick={() => setFilter(filter === "高" ? null : "高")}>
            <Statistic title="高风险" value={high} prefix={<WarningOutlined />} valueStyle={{ color: "#ef4444", fontSize: 24 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" style={statStyle("中")} onClick={() => setFilter(filter === "中" ? null : "中")}>
            <Statistic title="中风险" value={mid} prefix={<ExclamationCircleOutlined />} valueStyle={{ color: "#f59e0b", fontSize: 24 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" style={statStyle("低")} onClick={() => setFilter(filter === "低" ? null : "低")}>
            <Statistic title="低风险" value={low} prefix={<InfoCircleOutlined />} valueStyle={{ color: "#3b82f6", fontSize: 24 }} />
          </Card>
        </Col>
      </Row>
      {filter && <div style={{ fontSize: 12, color: "#999", marginBottom: 8 }}>已筛选：{filter}风险（{filtered.length} 条），<a onClick={() => setFilter(null)}>显示全部</a></div>}
      <div style={{ maxHeight: "calc(100vh - 440px)", overflow: "auto" }}>
        {filtered.slice(0, 15).map(alert => (
          <AlertCard key={alert.id} alert={alert} onResolve={onResolve} />
        ))}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: "#999" }}>暂无匹配提醒 ✅</div>
        )}
      </div>
    </div>
  );
};

export default DailyAlertPanel;
