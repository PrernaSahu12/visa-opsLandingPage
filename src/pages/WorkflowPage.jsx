import React, { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { WorkflowHero } from "@/components/workflow/WorkflowHero";
import { WorkflowStoryTimeline } from "@/components/workflow/WorkflowStoryTimeline";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { CreateWorkspaceModal } from "@/components/landing/modals/CreateWorkspaceModal";
import { DemoModal } from "@/components/landing/modals/DemoModal";

export default function WorkflowPage() {
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

      {/* Hero Section matching Fintech PaymentSource Hero */}
      <WorkflowHero
        onOpenDemo={openDemo}
        onOpenCreateWorkspace={openCreateWorkspace}
      />

      {/* New Vertical Scroll-Linked Storytelling Timeline */}
      <WorkflowStoryTimeline
        onOpenDemo={openDemo}
      />

      {/* High-Converting Bottom CTA */}
      <FinalCTA
        onOpenCreateWorkspace={openCreateWorkspace}
        onOpenDemo={openDemo}
      />

      {/* Enterprise Footer */}
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
