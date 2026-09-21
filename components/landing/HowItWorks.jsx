"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import {
  Building2,
  Users2,
  FileCheck,
  MessageSquare,
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Create Workspace",
      desc: "Provision your agency tenant, connect your regional offices, and establish company-level data boundaries.",
      icon: Building2,
      uiMock: (
        <div className="p-3 bg-[#F7F9FC] rounded-lg border border-[#E2E8F0] font-mono text-[10px] space-y-1.5">
          <div className="flex justify-between text-[#64748B]">
            <span>Workspace:</span>
            <span className="text-[#1747E8] font-bold">apex-ops.vyxel.ops</span>
          </div>
          <div className="flex justify-between text-[#64748B]">
            <span>Isolation:</span>
            <span className="text-[#18A875] font-semibold">Active [Tenant #9042]</span>
          </div>
        </div>
      ),
    },
    {
      step: "02",
      title: "Configure Team & Workflows",
      desc: "Set up role workScopes (ASSIGNED_ONLY vs ALL_COMPANY), configure round-robin assignment pools, and publish C4 DAG templates.",
      icon: Users2,
      uiMock: (
        <div className="p-3 bg-[#F7F9FC] rounded-lg border border-[#E2E8F0] font-mono text-[10px] space-y-1.5">
          <div className="flex justify-between text-[#64748B]">
            <span>Assignment Pool:</span>
            <span className="text-[#102A56] font-semibold">ROUND_ROBIN (Enabled)</span>
          </div>
          <div className="flex justify-between text-[#64748B]">
            <span>Template:</span>
            <span className="text-[#1747E8] font-bold">Dubai Inside-UAE C4</span>
          </div>
        </div>
      ),
    },
    {
      step: "03",
      title: "Process Candidates & Documents",
      desc: "Intake candidates, collect required documents with automated rule matching, and run strict Maker-Checker verification queues.",
      icon: FileCheck,
      uiMock: (
        <div className="p-3 bg-[#F7F9FC] rounded-lg border border-[#E2E8F0] font-mono text-[10px] space-y-1.5">
          <div className="flex justify-between text-[#64748B]">
            <span>Passport Review:</span>
            <Badge variant="brand" size="sm">
              Maker Passed
            </Badge>
          </div>
          <div className="flex justify-between text-[#64748B]">
            <span>Checker Gate:</span>
            <Badge variant="warning" size="sm">
              Pending Nadia R.
            </Badge>
          </div>
        </div>
      ),
    },
    {
      step: "04",
      title: "Automate Communication & Ops",
      desc: "Trigger status-driven WhatsApp notifications for biometrics & approvals, while HRMS balances processor attendance and payroll.",
      icon: MessageSquare,
      uiMock: (
        <div className="p-3 bg-[#F7F9FC] rounded-lg border border-[#E2E8F0] font-mono text-[10px] space-y-1.5">
          <div className="flex justify-between text-[#64748B]">
            <span>Event Trigger:</span>
            <span className="text-[#18A875] font-semibold">T025 Medical PASS</span>
          </div>
          <div className="flex justify-between text-[#64748B]">
            <span>WhatsApp:</span>
            <span className="text-[#102A56] font-bold">Dispatched (Delivered)</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#F7F9FC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="RAPID DEPLOYMENT"
          title="How It Works"
          description="Transform fragmented agency operations into an automated, structured operational engine in four simple stages."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between space-y-4 hover:-translate-y-0.5 hover:border-[#1747E8] transition-all shadow-subtle group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-2xl font-black text-[#1747E8]">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] text-[#1747E8] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#102A56]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2">{item.uiMock}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
