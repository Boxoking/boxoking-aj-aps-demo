import React from "react";
import { Card, Col, Row, Statistic, Table, Tag, Progress } from "antd";
import {
  DatabaseOutlined, ScheduleOutlined, CheckCircleOutlined,
  ExclamationCircleOutlined, ThunderboltOutlined, ToolOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useMasterDataStore } from "../store/useMasterDataStore";
import { useScheduleStore } from "../store/useScheduleStore";

const COLORS = ["#16a34a", "#2563eb", "#7c3aed", "#ea580c", "#eab308", "#0891b2"];

const DashboardPage: React.FC = () => {
  const store = useMasterDataStore();
  const scheduleStore = useScheduleStore();

  const enabledProducts = store.products.filter((p) => p.status === "启用");
  const productCount = enabledProducts.length;
  const draftTasks = scheduleStore.tasks.filter((t) => t.status === "草稿" || t.status === "自动生成草稿");
  const pendingTasks = draftTasks.length;
  const confirmedTasks = scheduleStore.tasks.filter((t) => t.status === "车间已确认" || t.status === "最终确认").length;
  const feedbackTasks = scheduleStore.tasks.filter((t) => t.status === "车间反馈调整").length;
  const totalPendingQty = enabledProducts.reduce((s, p) => s + p.pendingQty, 0);
  const totalScheduledQty = scheduleStore.tasks.filter((t) => t.processType === "成型").reduce((s, t) => s + t.quantity, 0);
  const scheduleRate = totalPendingQty + totalScheduledQty > 0 ? Math.round((totalScheduledQty / (totalPendingQty + totalScheduledQty)) * 100) : 0;
  const lowStockCount = enabledProducts.filter((p) => p.stock < p.safetyStock).length;
  const totalMachines = store.formingMachines.length + store.freezingMachines.length + store.packagingMachines.length;
  const availableMachines = store.formingMachines.filter((m) => m.status === "可用").length + store.freezingMachines.filter((m) => m.status === "可用").length + store.packagingMachines.filter((m) => m.status === "可用").length;

  // 订单类型分布（饼图数据）
  const pieData = [
    { name: "特通", value: enabledProducts.filter((p) => p.orderType === "特通").length },
    { name: "出口", value: enabledProducts.filter((p) => p.orderType === "出口").length },
    { name: "普通", value: enabledProducts.filter((p) => p.orderType === "普通").length },
  ];

  // 车间排产柱状图
  const workshopBarData = store.workshops.map((w) => {
    const tasks = scheduleStore.tasks.filter((t) => t.workshopId === w.workshopId);
    const forming = tasks.filter((t) => t.processType === "成型").length;
    const freezing = tasks.filter((t) => t.processType === "速冻").length;
    const packaging = tasks.filter((t) => t.processType === "包装").length;
    return { name: w.workshopName, 成型: forming, 速冻: freezing, 包装: packaging };
  });

  // 车间任务表
  const workshopStats = store.workshops.map((w) => ({
    key: w.workshopId, workshopName: w.workshopName,
    total: scheduleStore.tasks.filter((t) => t.workshopId === w.workshopId).length,
    drafting: scheduleStore.tasks.filter((t) => t.workshopId === w.workshopId && (t.status === "草稿" || t.status === "自动生成草稿")).length,
    pending: scheduleStore.tasks.filter((t) => t.workshopId === w.workshopId && t.status === "待车间确认").length,
    confirmed: scheduleStore.tasks.filter((t) => t.workshopId === w.workshopId && (t.status === "车间已确认" || t.status === "最终确认")).length,
    feedback: scheduleStore.tasks.filter((t) => t.workshopId === w.workshopId && t.status === "车间反馈调整").length,
  }));
  const wsColumns = [
    { title: "车间", dataIndex: "workshopName", key: "name", width: 70 },
    { title: "总计", dataIndex: "total", key: "total", width: 45, align: "center" as const },
    { title: "草稿", dataIndex: "drafting", key: "drafting", width: 45, align: "center" as const, render: (v: number) => <Tag color="default">{v}</Tag> },
    { title: "待确认", dataIndex: "pending", key: "pending", width: 50, align: "center" as const, render: (v: number) => <Tag color="gold">{v}</Tag> },
    { title: "已确认", dataIndex: "confirmed", key: "confirmed", width: 50, align: "center" as const, render: (v: number) => <Tag color="green">{v}</Tag> },
    { title: "反馈", dataIndex: "feedback", key: "feedback", width: 40, align: "center" as const, render: (v: number) => (v > 0 ? <Tag color="orange">{v}</Tag> : <span>-</span>) },
  ];

  // 机台概览
  const machineSummary = [
    { type: "成型机台", total: store.formingMachines.length, available: store.formingMachines.filter((m) => m.status === "可用").length },
    { type: "速冻机台", total: store.freezingMachines.length, available: store.freezingMachines.filter((m) => m.status === "可用").length },
    { type: "包装机台", total: store.packagingMachines.length, available: store.packagingMachines.filter((m) => m.status === "可用").length },
  ];
  const machineColumns = [
    { title: "类型", dataIndex: "type", key: "type", width: 80 },
    { title: "总数", dataIndex: "total", key: "total", width: 45, align: "center" as const },
    { title: "可用", dataIndex: "available", key: "avail", width: 45, align: "center" as const, render: (v: number) => <span style={{ color: "#16a34a", fontWeight: 600 }}>{v}</span> },
    { title: "可用率", key: "rate", render: (_: unknown, r: { total: number; available: number }) => <Progress percent={Math.round((r.available / r.total) * 100)} size="small" strokeColor="#16a34a" /> },
  ];

  return (
    <div className="page-container">
      <div className="page-header">安井食品 APS 排产系统 — 首页看板</div>

      {/* 指标卡 */}
      <Row gutter={12} style={{ marginBottom: 16 }}>
        {[
          { title: "启用品相", value: productCount, icon: <DatabaseOutlined />, color: "#16a34a" },
          { title: "待排草稿", value: pendingTasks, icon: <ScheduleOutlined />, color: "#2563eb" },
          { title: "已确认任务", value: confirmedTasks, icon: <CheckCircleOutlined />, color: "#16a34a" },
          { title: "反馈调整", value: feedbackTasks, icon: <ExclamationCircleOutlined />, color: "#ea580c" },
          { title: "库存预警", value: lowStockCount, icon: <AlertOutlined />, color: "#eab308" },
          { title: "可用/总机台", value: `${availableMachines}/${totalMachines}`, icon: <ToolOutlined />, color: "#16a34a" },
        ].map((item, i) => (
          <Col span={4} key={i}>
            <Card style={{ borderRadius: 8, textAlign: "center" }}>
              <Statistic title={item.title} value={item.value} prefix={item.icon} valueStyle={{ color: item.color, fontSize: 28 }} />
            </Card>
          </Col>
        ))}
      </Row>

      {/* 图表行 */}
      <Row gutter={12} style={{ marginBottom: 16 }}>
        <Col span={14}>
          <Card title="各车间排产工序分布" size="small" style={{ borderRadius: 8 }}>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={workshopBarData} barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="成型" fill="#16a34a" radius={[3, 3, 0, 0]} />
                <Bar dataKey="速冻" fill="#2563eb" radius={[3, 3, 0, 0]} />
                <Bar dataKey="包装" fill="#7c3aed" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={10}>
          <Card title="订单类型分布" size="small" style={{ borderRadius: 8 }}>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={95} paddingAngle={3} dataKey="value" label={({ name, value }) => `${name} ${value}`}>
                  {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* 进度 + 机台 */}
      <Row gutter={12} style={{ marginBottom: 16 }}>
        <Col span={14}>
          <Card title={<><ThunderboltOutlined /> 排产进度 & 车间任务</>} size="small" style={{ borderRadius: 8 }}>
            <div style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span>总排产进度</span>
                <span style={{ color: "#16a34a", fontWeight: 600 }}>已排 {totalScheduledQty.toLocaleString()} / 待排 {totalPendingQty.toLocaleString()}</span>
              </div>
              <Progress percent={scheduleRate} strokeColor="#16a34a" />
            </div>
            <Table dataSource={workshopStats} columns={wsColumns} rowKey="key" size="small" pagination={false} />
          </Card>
        </Col>
        <Col span={10}>
          <Card title={<><ToolOutlined /> 机台概览</>} size="small" style={{ borderRadius: 8 }}>
            <Table dataSource={machineSummary} columns={machineColumns} rowKey="type" size="small" pagination={false} />
            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>成型机台容量</div>
              {store.formingMachines.slice(0, 10).map((m) => (
                <div key={m.machineId} style={{ display: "flex", alignItems: "center", marginBottom: 3, gap: 8 }}>
                  <span style={{ fontSize: 11, width: 90, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.machineName}</span>
                  <Progress percent={Math.round((m.quantity / 8) * 100)} size="small" strokeColor={m.status === "可用" ? "#16a34a" : "#d9d9d9"} style={{ flex: 1, marginBottom: 0 }} />
                  <Tag color={m.status === "可用" ? "green" : "orange"} style={{ fontSize: 10, marginRight: 0 }}>{m.status}</Tag>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      {/* 库存预警 + 待排 */}
      <Row gutter={12}>
        <Col span={12}>
          <Card title={<><AlertOutlined /> 库存预警品相</>} size="small" style={{ borderRadius: 8 }}>
            <Table dataSource={enabledProducts.filter((p) => p.stock < p.safetyStock).sort((a, b) => a.stock - b.stock).slice(0, 10)}
              columns={[
                { title: "品名", dataIndex: "productName", key: "name", width: 140, ellipsis: true },
                { title: "库存", dataIndex: "stock", key: "stock", width: 55, align: "center" as const, render: (v: number) => <span style={{ color: "#eab308", fontWeight: 600 }}>{v}</span> },
                { title: "安全库存", dataIndex: "safetyStock", key: "safe", width: 60, align: "center" as const },
                { title: "缺口", key: "gap", width: 50, align: "center" as const, render: (_: unknown, r: { stock: number; safetyStock: number }) => <Tag color="red">{r.safetyStock - r.stock}</Tag> },
                { title: "待排", dataIndex: "pendingQty", key: "qty", width: 60, align: "center" as const },
              ]}
              rowKey="productId" size="small" pagination={false} scroll={{ y: 240 }} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title={<><ScheduleOutlined /> 待排品相（按优先级）</>} size="small" style={{ borderRadius: 8 }}>
            <Table dataSource={enabledProducts.filter((p) => p.pendingQty > 0)
              .sort((a, b) => { const op = { 特通: 3, 出口: 2, 普通: 1 }; return (op[b.orderType] || 0) - (op[a.orderType] || 0); })
              .slice(0, 10)}
              columns={[
                { title: "品名", dataIndex: "productName", key: "name", width: 130, ellipsis: true },
                { title: "类型", dataIndex: "orderType", key: "type", width: 45, render: (t: string) => <Tag color={t === "特通" ? "purple" : t === "出口" ? "blue" : undefined}>{t}</Tag> },
                { title: "待排", dataIndex: "pendingQty", key: "qty", width: 65, align: "center" as const },
                { title: "库存", dataIndex: "stock", key: "stock", width: 55, align: "center" as const },
                { title: "交期", dataIndex: "deliveryDate", key: "date", width: 85 },
              ]}
              rowKey="productId" size="small" pagination={false} scroll={{ y: 240 }} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
