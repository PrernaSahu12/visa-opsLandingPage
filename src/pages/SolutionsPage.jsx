import React, { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsSegmentShowcase } from "@/components/solutions/SolutionsSegmentShowcase";
import { SolutionsComparisonMatrix } from "@/components/solutions/SolutionsComparisonMatrix";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { CreateWorkspaceModal } from "@/components/landing/modals/CreateWorkspaceModal";
import { DemoModal } from "@/components/landing/modals/DemoModal";

export default function SolutionsPage() {
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

      {/* Solutions Editorial Hero */}
      <SolutionsHero
        onOpenDemo={openDemo}
        onOpenCreateWorkspace={openCreateWorkspace}
      />

      {/* 4 Industry Vertical Deep-Dives */}
      <SolutionsSegmentShowcase
        onOpenDemo={openDemo}
        onOpenCreateWorkspace={openCreateWorkspace}
      />

      {/* Comparative Capability Matrix */}
      <SolutionsComparisonMatrix
        onOpenDemo={openDemo}
      />

      {/* Enterprise Bottom Conversion CTA */}
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
