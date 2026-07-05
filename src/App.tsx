import React from "react";
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import AppRoutes from "./routes";

const App: React.FC = () => {
  // 每天午夜自动刷新，确保日期始终从当天开始
  React.useEffect(() => {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const msUntilMidnight = midnight.getTime() - now.getTime();
    const timer = setTimeout(() => window.location.reload(), msUntilMidnight + 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#16a34a",
          colorSuccess: "#16a34a",
          colorInfo: "#16a34a",
          borderRadius: 4,
        },
      }}
    >
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </ConfigProvider>
  );
};

export default App;
