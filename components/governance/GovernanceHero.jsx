
import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function GovernanceHero({ onOpenDemo, onOpenCreateWorkspace }) {
  return (
    <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden bg-white">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-12 right-1/4 w-[420px] h-[420px] rounded-full bg-[#EEF4FF] blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-36 left-8 w-[380px] h-[380px] rounded-full bg-[#F0F6FE] blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Product Hero Copy (Fintech Style) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            
            {/* Category / Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1747E8]/10 border border-[#1747E8]/20 text-[#1747E8] text-xs sm:text-[13px] font-semibold w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Enterprise Compliance · Dual-Control Architecture</span>
            </div>

            {/* Editorial Serif Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-serif text-[#102A56] font-normal leading-[1.12] tracking-tight">
              Zero-Trust Document Governance for Visa Operations
            </h1>

            {/* Refined Body Description */}
            <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl font-sans">
              Eliminate costly ministry rejections and human oversights. Vyxel enforces strict Maker-Checker segregation, automated prerequisite validation, and tamper-resistant audit logs across every single file.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Gold/Amber Pill Button matching Fintech Reference */}
              <button
                type="button"
                onClick={onOpenDemo}
                className="px-8 py-3.5 rounded-full bg-[#F5B335] hover:bg-[#EAA31E] text-[#0A2540] font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Schedule Compliance Review
              </button>

              <button
                type="button"
                onClick={onOpenCreateWorkspace}
                className="px-7 py-3.5 rounded-full bg-white border border-[#CBD5E1] hover:border-[#102A56] text-[#102A56] font-semibold text-sm shadow-2xs hover:shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Explore Sandbox
              </button>
            </div>

            {/* Assurance Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-[#64748B]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#18A875]" />
                Four-Eyes Principle
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#18A875]" />
                Immutable SHA-256 Audit
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#18A875]" />
                MOHRE &amp; Qiwa Ready
              </span>
            </div>

          </div>

          {/* Right Column: High-Fidelity 3D Document Governance Mockup Graphic (Seamless Blend) */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px] lg:max-w-[660px] transition-transform duration-300 hover:scale-[1.01]">
              <img
                src="/images/governance-hero-mockup.jpg"
                alt="Vyxel Zero-Trust Document Governance Platform"
                className="w-full h-auto object-contain block mix-blend-multiply"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
