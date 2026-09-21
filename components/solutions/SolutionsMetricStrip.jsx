"use client";

import React from "react";
import { Clock, ShieldCheck, MessageSquare, Award } from "lucide-react";

export function SolutionsMetricStrip() {
  const metrics = [
    {
      icon: Clock,
      value: "4.2 Days",
      label: "Average Case Turnaround",
      subtext: "-38% compared to manual spreadsheet processing",
    },
    {
      icon: ShieldCheck,
      value: "99.8%",
      label: "SLA Adherence",
      subtext: "On-time filing across MOHRE, ICP & consular gates",
    },
    {
      icon: Award,
      value: "100%",
      label: "Audit & Quota Readiness",
      subtext: "Immutable SHA-256 case logs with maker-checker sign-off",
    },
    {
      icon: MessageSquare,
      value: "-35%",
      label: "Operator Inquiry Load",
      subtext: "Automated candidate WhatsApp updates on milestone shifts",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-2 border-l-2 border-[#2563EB]/40 pl-5">
                <div className="text-3xl sm:text-4xl font-mono font-extrabold text-[#102A56] tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-[#102A56]">
                  {item.label}
                </div>
                <div className="text-xs text-[#64748B] leading-relaxed">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
