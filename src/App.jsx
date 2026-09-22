import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import SolutionsPage from "./pages/SolutionsPage";
import WorkflowPage from "./pages/WorkflowPage";
import GovernancePage from "./pages/GovernancePage";
import SecurityPage from "./pages/SecurityPage";
import GetStartedPage from "./pages/GetStartedPage";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/workflow" element={<WorkflowPage />} />
        <Route path="/governance" element={<GovernancePage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/contact" element={<GetStartedPage />} />
        <Route path="/demo" element={<GetStartedPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
