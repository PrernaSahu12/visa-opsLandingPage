
import { CheckCircle2 } from "lucide-react";

export function WorkflowHero({ onOpenDemo, onOpenCreateWorkspace }) {
  return (
    <section className="relative pt-32 pb-8 sm:pt-40 sm:pb-12 overflow-hidden bg-[linear-gradient(180deg,#EDF4FC_0%,#F8FBFE_65%,#FFFFFF_100%)]">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-[#38BDF8]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-10 w-80 h-80 rounded-full bg-[#1747E8]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Product Hero Copy (Fintech Style) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            
            {/* Category / Product Subtitle */}
            <div className="text-xs sm:text-[13px] font-semibold tracking-wide text-[#1747E8]">
              Vyxel Workflow Engine · For Visa & Manpower Agencies
            </div>

            {/* Editorial Serif Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif text-[#102A56] font-normal leading-[1.14] tracking-tight">
              A Modernized Way to Execute Every Visa Case
            </h1>

            {/* Refined Body Description */}
            <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl font-sans">
              Vyxel automates complex case lifecycles—from candidate intake and prerequisite task locking to maker-checker compliance approval and automated candidate WhatsApp updates.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Gold/Amber Pill Button matching Fintech Reference */}
              <button
                type="button"
                onClick={onOpenDemo}
                className="px-8 py-3.5 rounded-full bg-[#F5B335] hover:bg-[#EAA31E] text-[#0A2540] font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Request a Demo
              </button>

              <button
                type="button"
                onClick={onOpenCreateWorkspace}
                className="px-7 py-3.5 rounded-full bg-white border border-[#CBD5E1] hover:border-[#102A56] text-[#102A56] font-semibold text-sm shadow-2xs hover:shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Create Workspace
              </button>
            </div>

            {/* Quick Assurance Micro-Strip */}
            <div className="pt-4 flex items-center gap-6 text-xs text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#18A875]" />
                Deterministic DAG Engine
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#18A875]" />
                Zero Process Deviation
              </span>
            </div>

          </div>

          {/* Right Column: High-Fidelity 3D Workflow & Case Operations Showcase */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Soft Ambient Glow Behind Showcase */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#0D62F4]/15 via-[#38BDF8]/15 to-transparent blur-3xl -z-10 pointer-events-none" />

            <div className="relative w-full group">
              <img
                src="/images/vyxel-workflow-hero-showcase.png"
                alt="Vyxel Visa Operating System & Global Routing Workflow"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.015] drop-shadow-[0_20px_45px_rgba(16,42,86,0.12)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
