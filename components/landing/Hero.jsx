"use client";

import React from "react";
import { Check } from "lucide-react";

export function Hero({ onOpenCreateWorkspace, onOpenDemo }) {
  const valuePillars = [
    {
      lead: "Deterministic DAG execution for every candidate, case, and visa route.",
      detail:
        "41 leaf tasks materialized with dependsOn blocking, automatic pool assignment, and zero process deviation.",
    },
    {
      lead: "Protect compliance with Maker-Checker document governance.",
      detail:
        "Separate initial document verification from supervisor sign-off, surfacing discrepancies and preventing costly ministry portal rejections.",
    },
    {
      lead: "Keep candidates and employers informed with automated WhatsApp updates.",
      detail:
        "Reduce operational friction, eliminate manual status texting, and balance processor attendance with integrated operations HRMS.",
    },
  ];

  return (
    <section className="relative pt-44 pb-20 lg:pt-52 lg:pb-28 overflow-hidden bg-gradient-to-r from-white via-[#F2F7FE] to-[#D9EAFE] border-b border-[#E2E8F0]">
      {/* Soft Ambient Radial Blur on the Right Side (Matching Fintech Reference) */}
      <div className="absolute top-1/6 -right-20 w-[600px] h-[600px] bg-[#CDE2FD]/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* =========================================================================
              LEFT COLUMN: Fintech Frame with Dashboard Image + Coral Accent + 4 Dots
              ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[620px]">
              {/* Bottom-Left Coral/Orange Swoop Accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-[3.5px] border-b-[3.5px] border-[#F25A2B] rounded-bl-[44px] pointer-events-none z-0" />

              {/* Main Soft Sky-Blue Outer Container */}
              <div className="relative rounded-[32px] bg-gradient-to-br from-[#D5E5FC] via-[#E2EEFD] to-[#D0E2FB] px-4 py-8 sm:px-6 sm:py-11 shadow-lg border border-white/60 z-10 overflow-hidden">
                {/* Subtle deeper blue decorative inner block on top-right */}
                <div className="absolute top-4 right-3 w-48 h-52 bg-[#BFD7FA]/50 rounded-[24px] pointer-events-none" />

                {/* Dashboard Image Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_14px_36px_rgba(16,42,86,0.12)] border border-white/90 bg-white">
                  <img
                    src="/images/vyxel-dashboard-hero.png"
                    alt="Vyxel Enterprise Operations Platform Dashboard"
                    className="w-full h-auto object-cover rounded-2xl block"
                    loading="eager"
                  />
                </div>
              </div>

              {/* 4 Carousel Pagination Dots (Below Card) */}
              <div className="flex items-center justify-center gap-2 pt-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#102A56]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Exact Reference Headline, Circular Blue Checkmarks & Pill CTA
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Editorial Serif + Bold Sans Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#102A56] tracking-tight leading-[1.22] font-serif">
              The Operations{" "}
              <span className="font-sans font-extrabold text-[#102A56]">
                Automation Platform
              </span>{" "}
              Powering Modern Visa & Manpower Operations
            </h1>

            {/* 3 Checked Value Pillars */}
            <div className="space-y-4 pt-1">
              {valuePillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  {/* Circular Blue Checkmark Icon matching reference */}
                  <div className="w-5 h-5 rounded-full border-[1.5px] border-[#2563EB] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <p className="text-xs sm:text-[14px] text-[#475569] leading-relaxed">
                    <strong className="text-[#102A56] font-bold">
                      {pillar.lead}{" "}
                    </strong>
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Exact Single Pill CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenCreateWorkspace}
                className="px-8 py-3 rounded-full border border-[#102A56] bg-white hover:bg-[#102A56] text-[#102A56] hover:text-white font-semibold text-sm tracking-wide transition-all shadow-sm active:scale-[0.98]"
              >
                Explore Our Industry Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
