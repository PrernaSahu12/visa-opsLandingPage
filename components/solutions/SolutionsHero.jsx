
import React from "react";
import { CheckCircle2 } from "lucide-react";

export function SolutionsHero({ onOpenDemo, onOpenCreateWorkspace }) {
  return (
    <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden bg-[linear-gradient(180deg,#EDF4FC_0%,#F8FBFE_65%,#FFFFFF_100%)]">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-12 right-1/4 w-96 h-96 rounded-full bg-[#38BDF8]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-36 left-10 w-80 h-80 rounded-full bg-[#1747E8]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Product Hero Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Category / Product Subtitle */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold tracking-wide text-[#1747E8]">
              <span className="w-2 h-2 rounded-full bg-[#1747E8] animate-pulse" />
              <span>Vyxel Solutions · Engineered for Operational Scale</span>
            </div>

            {/* Editorial Serif Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif text-[#102A56] font-normal leading-[1.14] tracking-tight">
              Tailored Operating Models for High-Volume Visa &amp; Manpower Teams
            </h1>

            {/* Refined Body Description */}
            <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl font-sans">
              From immigration consultancies and overseas recruitment agencies to enterprise global mobility divisions—Vyxel replaces fragmented portals with deterministic workflow automation, automated compliance gates, and real-time candidate communications.
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
            <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#18A875]" />
                4 Configured Industry Profiles
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#18A875]" />
                Zero Process Deviation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#18A875]" />
                MOHRE &amp; ICP Ready
              </span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Operations Team Photo in Curved Branded Frame */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end pt-4 sm:pt-0">
            
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#0D62F4]/15 via-[#38BDF8]/15 to-transparent blur-3xl -z-10 pointer-events-none" />

            {/* Branded Outer Curved Frame matching Reference */}
            <div className="relative p-2.5 sm:p-3 rounded-[40px] sm:rounded-[48px] bg-white border-2 border-white shadow-[0_20px_50px_rgba(16,42,86,0.1)] w-full max-w-[560px]">
              
              {/* Outer Concentric Stroke Outline (Reference Style) */}
              <div className="absolute -inset-2.5 sm:-inset-3.5 rounded-[48px] sm:rounded-[56px] border-2 border-[#102A56]/15 sm:border-slate-300/80 pointer-events-none" />

              {/* Photo Viewport */}
              <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] aspect-[4/3] w-full bg-slate-100">
                <img
                  src="/images/solutions-hero-team.jpg"
                  alt="Vyxel Global Mobility & Visa Operations Team"
                  className="w-full h-full object-cover block transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Verification Badge Pill */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200/90 shadow-[0_10px_25px_rgba(16,42,86,0.08)] flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-[#102A56]">
                    Global Operations Ready
                  </div>
                  <div className="text-[10px] text-slate-500 font-sans">
                    Cross-Border Visa &amp; Manpower
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
