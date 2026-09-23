
import React from "react";
import {
  Workflow,
  ShieldCheck,
  FileText,
  MessageSquare,
  Users2,
  Lock,
} from "lucide-react";

export function TrustStrip() {
  // Original Vyxel Core Capabilities
  const capabilities = [
    {
      icon: Workflow,
      name: "Visa Processing",
      detail: "Configurable DAG execution",
    },
    {
      icon: ShieldCheck,
      name: "Document Governance",
      detail: "Maker-Checker dual approval",
    },
    {
      icon: FileText,
      name: "Workflow Automation",
      detail: "Event-driven state transitions",
    },
    {
      icon: MessageSquare,
      name: "WhatsApp Hub",
      detail: "Status-triggered notifications",
    },
    {
      icon: Users2,
      name: "Integrated HRMS",
      detail: "Workforce, attendance & payroll",
    },
    {
      icon: Lock,
      name: "Multi-Tenant Security",
      detail: "Tenant isolation & strict RBAC",
    },
  ];

  return (
    <section className="w-full bg-white py-3.5 sm:py-4.5 border-b border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 6 Capabilities Strip without Arrows */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-0 lg:divide-x divide-[#E2E8F0] items-center">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="px-3 py-2 flex flex-col items-center text-center group cursor-pointer transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] border border-[#1747E8]/20 flex items-center justify-center text-[#1747E8] mb-2 group-hover:bg-[#1747E8] group-hover:text-white transition-all shadow-2xs">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-xs font-bold text-[#102A56] group-hover:text-[#1747E8] transition-colors leading-tight">
                    {cap.name}
                  </div>
                  <div className="text-[10px] text-[#64748B] mt-0.5 leading-tight">
                    {cap.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
