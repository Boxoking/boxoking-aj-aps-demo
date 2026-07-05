import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import FormingMachinePage from "./pages/FormingMachinePage";
import FreezingMachinePage from "./pages/FreezingMachinePage";
import PackagingMachinePage from "./pages/PackagingMachinePage";
import SlurryArchivePage from "./pages/SlurryArchivePage";
import FormingMutexPage from "./pages/FormingMutexPage";
import FormingSchedulePage from "./pages/FormingSchedulePage";
import SlurrySchedulePage from "./pages/SlurrySchedulePage";
import ScheduleConfirmPage from "./pages/ScheduleConfirmPage";
import AiAssistantPage from "./pages/AiAssistantPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/schedule/forming" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="master/forming-machines" element={<FormingMachinePage />} />
        <Route path="master/freezing-machines" element={<FreezingMachinePage />} />
        <Route path="master/packaging-machines" element={<PackagingMachinePage />} />
        <Route path="master/slurry-archive" element={<SlurryArchivePage />} />
        <Route path="master/forming-mutex" element={<FormingMutexPage />} />
        <Route path="schedule/forming" element={<FormingSchedulePage />} />
        <Route path="ai-assistant" element={<AiAssistantPage />} />
        <Route path="schedule/slurry" element={<SlurrySchedulePage />} />
        <Route path="schedule/confirm" element={<ScheduleConfirmPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
