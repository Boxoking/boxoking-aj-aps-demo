import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DashboardOutlined,
  SettingOutlined,
  ScheduleOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const { Sider, Content, Header, Footer } = Layout;

const menuItems = [
  { key: "master", icon: <SettingOutlined />, label: "主数据",
    children: [
      { key: "/master/forming-machines", label: "成型机台" },
      { key: "/master/freezing-machines", label: "速冻机台" },
      { key: "/master/packaging-machines", label: "包装机台" },
      { key: "/master/slurry-archive", label: "浆料档案" },
      { key: "/master/forming-mutex", label: "成型互斥" },
    ],
  },
  { key: "schedule", icon: <ScheduleOutlined />, label: "排产管理",
    children: [
      { key: "/schedule/forming", label: "成型排产" },
      { key: "/schedule/slurry", label: "浆料排产" },
      { key: "/schedule/confirm", label: "排产确认" },
    ],
  },
  { key: "/ai-assistant", icon: <ThunderboltOutlined />, label: "AI 排产管理" },
];

const breadcrumbMap: Record<string, string[]> = {
  "/dashboard": ["首页看板"],
  "/master/forming-machines": ["主数据", "成型机台"],
  "/master/freezing-machines": ["主数据", "速冻机台"],
  "/master/packaging-machines": ["主数据", "包装机台"],
  "/master/slurry-archive": ["主数据", "浆料档案"],
  "/master/forming-mutex": ["主数据", "成型互斥"],
  "/schedule/forming": ["排产管理", "成型排产"],
  "/ai-assistant": ["AI 排产管理"],
  "/schedule/slurry": ["排产管理", "浆料排产"],
  "/schedule/confirm": ["排产管理", "排产确认"],
};

const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedKeys = () => [location.pathname];
  const [openKeys, setOpenKeys] = useState<string[]>(["master", "schedule"]);
  const handleOpenChange = (keys: string[]) => {
    // 强制始终展开主数据和排产管理
    const required = ["master", "schedule"];
    const merged = new Set([...keys, ...required]);
    setOpenKeys([...merged]);
  };

  const crumbs = breadcrumbMap[location.pathname] || [];

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width={220} theme="light" style={{ borderRight: "1px solid #e8e8e8" }}>
        <div style={{ height: 56, display: "flex", alignItems: "center", padding: "0 20px",
          borderBottom: "1px solid #e8e8e8", fontWeight: 700, fontSize: 15, color: "#16a34a" }}>
          🏭 安井APS demo
        </div>
        <Menu mode="inline" selectedKeys={getSelectedKeys()} openKeys={openKeys} onOpenChange={handleOpenChange}
          items={menuItems} onClick={({ key }) => navigate(key)}
          style={{ borderRight: 0, marginTop: 8 }} />
      </Sider>
      <Layout>
        <Header style={{ height: 40, lineHeight: "40px", background: "#fff",
          borderBottom: "1px solid #e8e8e8", padding: "0 16px", display: "flex", alignItems: "center" }}>
          <Breadcrumb items={crumbs.map((c) => ({ title: c }))} />
          <div style={{ marginLeft: "auto", fontSize: 12, color: "#999" }}>安井食品 · APS智能排产系统 v2.0</div>
        </Header>
        <Content style={{ overflow: "auto", background: "#f5f5f5" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center", padding: "6px 16px", fontSize: 11, color: "#bbb",
          background: "#fff", borderTop: "1px solid #f0f0f0" }}>
          安井食品 APS Demo ©2026  |  仅供内部演示
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
