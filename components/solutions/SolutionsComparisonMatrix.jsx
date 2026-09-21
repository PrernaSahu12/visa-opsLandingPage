"use client";

import React from "react";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";

export function SolutionsComparisonMatrix({ onOpenDemo }) {
  const rows = [
    {
      feature: "Workflow Enforcement",
      legacy: "Manual guesswork, missed steps",
      vyxel: "Deterministic DAG leaf-task gates",
    },
    {
      feature: "Candidate Communication",
      legacy: "Lost WhatsApp chats",
      vyxel: "Event-triggered automated WhatsApp",
    },
    {
      feature: "Compliance Governance",
      legacy: "Single-operator risk",
      vyxel: "Mandatory four-eyes Maker-Checker sign-offs",
    },
    {
      feature: "Quota & Expiry Management",
      legacy: "Surprise fines & last-minute rush",
      vyxel: "Real-time 90-60-30 day proactive alerts",
    },
    {
      feature: "Data Re-Entry",
      legacy: "Manual typing, high error rate",
      vyxel: "AI OCR extraction in 1.4s",
    },
    {
      feature: "Audit & Security",
      legacy: "Scattered downloads, no traceability",
      vyxel: "Immutable SHA-256 encrypted vault",
    },
  ];

  return (
    <section className="pt-2 pb-16 sm:pt-4 sm:pb-20 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Panoramic Comparison Card matching User Reference */}
        <div className="max-w-[1360px] mx-auto rounded-[28px] sm:rounded-[36px] bg-white border border-[#DCE7F3] p-6 sm:p-10 lg:p-12 shadow-[0_16px_45px_rgba(16,42,86,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & Gold Action Button */}
            <div className="lg:col-span-4 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] border border-[#2563EB]/20 text-[11px] font-bold tracking-wider uppercase text-[#2563EB]">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>A CLEAR ADVANTAGE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif text-[#102A56] font-normal leading-snug tracking-tight">
                How Vyxel Compares to Legacy Ops
              </h2>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans">
                From fragmented portals to a unified, deterministic operating system. See the difference.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="px-6 py-3 rounded-full bg-[#F5B335] hover:bg-[#EAA31E] text-[#0A2540] font-semibold text-xs transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Schedule Architecture Walkthrough</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Embedded Compact Comparison Table */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-[#DCE7F3] bg-white overflow-hidden shadow-2xs">
                
                {/* Table Header */}
                <div className="grid grid-cols-12 bg-[#EEF4FF]/70 border-b border-[#DCE7F3] p-3.5 sm:p-4 text-[11px] sm:text-xs font-bold">
                  <div className="col-span-4 text-[#102A56]">
                    Dimension
                  </div>
                  <div className="col-span-4 text-[#102A56] flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-[10px] shrink-0 font-bold">
                      ✕
                    </span>
                    <span>Traditional Portals &amp; Spreadsheets</span>
                  </div>
                  <div className="col-span-4 text-[#2563EB] flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                      ✓
                    </span>
                    <span>Vyxel Visa &amp; Manpower OS</span>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-[#E2E8F0] text-[11px] sm:text-xs">
                  {rows.map((row, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-[#F8FAFC] transition-colors"
                    >
                      {/* Dimension */}
                      <div className="col-span-4 font-bold text-[#102A56]">
                        {row.feature}
                      </div>

                      {/* Traditional / Legacy */}
                      <div className="col-span-4 text-[#64748B] flex items-center gap-2 pr-2">
                        <span className="text-rose-500 font-bold shrink-0 text-xs">✕</span>
                        <span className="leading-tight">{row.legacy}</span>
                      </div>

                      {/* Vyxel OS */}
                      <div className="col-span-4 text-[#102A56] font-medium flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[8px] font-bold shrink-0 shadow-2xs">
                          ✓
                        </span>
                        <span className="leading-tight">{row.vyxel}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
