import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import { WarningOutlined, ExclamationCircleOutlined, InfoCircleOutlined, BellOutlined } from "@ant-design/icons";
import AlertCard from "./AlertCard";
import type { AiAlert } from "../../types/ai";

const DailyAlertPanel: React.FC<{ alerts: AiAlert[]; onResolve: (id: string) => void }> = ({ alerts, onResolve }) => {
  const activeAlerts = alerts.filter(a => !a.resolved);
  const high = activeAlerts.filter(a => a.level === "高").length;
  const mid = activeAlerts.filter(a => a.level === "中").length;
  const low = activeAlerts.filter(a => a.level === "低").length;

  return (
    <div>
      <Row gutter={12} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card size="small" style={{ textAlign: "center", borderRadius: 8 }}>
            <Statistic title="今日待处理" value={activeAlerts.length} prefix={<BellOutlined />} valueStyle={{ color: "#16a34a", fontSize: 28 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" style={{ textAlign: "center", borderRadius: 8 }}>
            <Statistic title="高风险" value={high} prefix={<WarningOutlined />} valueStyle={{ color: "#ef4444", fontSize: 28 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" style={{ textAlign: "center", borderRadius: 8 }}>
            <Statistic title="中风险" value={mid} prefix={<ExclamationCircleOutlined />} valueStyle={{ color: "#f59e0b", fontSize: 28 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" style={{ textAlign: "center", borderRadius: 8 }}>
            <Statistic title="低风险" value={low} prefix={<InfoCircleOutlined />} valueStyle={{ color: "#3b82f6", fontSize: 28 }} />
          </Card>
        </Col>
      </Row>
      <div style={{ maxHeight: "calc(100vh - 420px)", overflow: "auto" }}>
        {activeAlerts.slice(0, 15).map(alert => (
          <AlertCard key={alert.id} alert={alert} onResolve={onResolve} />
        ))}
        {activeAlerts.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: "#999" }}>暂无排产提醒，一切正常 ✅</div>
        )}
      </div>
    </div>
  );
};

export default DailyAlertPanel;
