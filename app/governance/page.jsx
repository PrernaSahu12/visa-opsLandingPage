"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { GovernanceHero } from "@/components/governance/GovernanceHero";
import { GovernancePillars } from "@/components/governance/GovernancePillars";
import { GovernanceAuditConsole } from "@/components/governance/GovernanceAuditConsole";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { CreateWorkspaceModal } from "@/components/landing/modals/CreateWorkspaceModal";
import { DemoModal } from "@/components/landing/modals/DemoModal";

export default function GovernancePage() {
  const [isCreateWorkspaceOpen, setIsCreateWorkspaceOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openCreateWorkspace = () => setIsCreateWorkspaceOpen(true);
  const closeCreateWorkspace = () => setIsCreateWorkspaceOpen(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <main className="min-h-screen bg-white text-[#172B4D] flex flex-col selection:bg-[#1747E8]/20 selection:text-[#1747E8]">
      {/* Sticky Header */}
      <Navbar
        onOpenCreateWorkspace={openCreateWorkspace}
        onOpenDemo={openDemo}
      />

      {/* Governance Hero with Live Dual-Control Simulator */}
      <GovernanceHero
        onOpenDemo={openDemo}
        onOpenCreateWorkspace={openCreateWorkspace}
      />

      {/* 4 Core Governance Pillars (Horizontal Panoramic Cards) */}
      <GovernancePillars
        onOpenDemo={openDemo}
      />

      {/* Real-time Audit Console & Compliance Ledger */}
      <GovernanceAuditConsole
        onOpenDemo={openDemo}
      />

      {/* Bottom Conversion CTA */}
      <FinalCTA
        onOpenCreateWorkspace={openCreateWorkspace}
        onOpenDemo={openDemo}
      />

      {/* Global Footer */}
      <Footer
        onOpenCreateWorkspace={openCreateWorkspace}
        onOpenDemo={openDemo}
      />

      {/* Interactive Modals */}
      <CreateWorkspaceModal
        isOpen={isCreateWorkspaceOpen}
        onClose={closeCreateWorkspace}
      />

      <DemoModal
        isOpen={isDemoOpen}
        onClose={closeDemo}
      />
    </main>
  );
}
