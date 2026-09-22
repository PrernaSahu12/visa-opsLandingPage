import React, { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { SecurityHero } from "@/components/security/SecurityHero";
import { SecurityPillars } from "@/components/security/SecurityPillars";
import { SecurityComplianceCertifications } from "@/components/security/SecurityComplianceCertifications";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { CreateWorkspaceModal } from "@/components/landing/modals/CreateWorkspaceModal";
import { DemoModal } from "@/components/landing/modals/DemoModal";

export default function SecurityPage() {
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

      {/* Security Hero with Live Multi-Tenant Defense Console */}
      <SecurityHero
        onOpenDemo={openDemo}
        onOpenCreateWorkspace={openCreateWorkspace}
      />

      {/* 4 Core Defense Layers (Horizontal Panoramic Cards) */}
      <SecurityPillars
        onOpenDemo={openDemo}
      />

      {/* GCC & International Compliance Frameworks (UAE PDPL, Saudi NDMO, ISO 27001) */}
      <SecurityComplianceCertifications
        onOpenDemo={openDemo}
      />

      {/* Enterprise Bottom Conversion CTA */}
      <FinalCTA
        onOpenCreateWorkspace={openCreateWorkspace}
        onOpenDemo={openDemo}
      />

      {/* Global Enterprise Footer */}
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
