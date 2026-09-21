"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  FileCheck2,
  FileText,
  UserCheck,
  History,
  RotateCcw,
  Lock,
} from "lucide-react";

export function DocumentGovernance() {
  const [docState, setDocState] = useState(1);

  const capabilities = [
    {
      title: "Maker-Checker Segregation",
      desc: "Zero single-point file sign-offs. The system enforces that the user who performs initial maker review cannot act as the final compliance checker.",
      icon: UserCheck,
    },
    {
      title: "DocumentRequirementRule Engine",
      desc: "Prerequisites dynamically resolve based on applicant nationality, sponsor trade tier, and profession codes, freezing requirements into immutable case records.",
      icon: FileCheck2,
    },
    {
      title: "Dedicated Review Queues",
      desc: "Prioritized work streams filter documents by urgency, expiry dates, and case milestones, keeping operational processors focused on ready items.",
      icon: FileText,
    },
    {
      title: "Tamper-Resistant Audit Trail",
      desc: "Every verification, rejection reason, stamp, and override is permanently recorded in append-only audit logs with cryptographic timestamps.",
      icon: History,
    },
    {
      title: "Controlled Overrides",
      desc: "Designated Operations Supervisors can authorize exceptional waivers with mandatory justification notes and automated escalation records.",
      icon: Lock,
    },
  ];

  return (
    <section id="governance" className="py-24 bg-[#EEF4FF] border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INTERNAL COMPLIANCE & CONTROL"
          title="Compliance Built Into the Workflow."
          description="Vyxel separates document review and approval so agencies maintain controlled compliance workflows without manual bottlenecks."
          align="center"
          badgeVariant="brand"
        />

        {/* Large White Product Card on Top of Light Blue Background */}
        <div className="mt-16 rounded-2xl bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Explanation (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <Badge variant="brand" size="md">
                Maker-Checker Protocol
              </Badge>

              <h3 className="text-2xl font-extrabold text-[#102A56] leading-tight">
                Two-Tier Verification Eliminates Costly Ministry Rejections
              </h3>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                When a candidate or employer submits application documents, they enter a structured governance pipeline. The Maker validates clarity, dates, and translation. The Checker verifies regulatory eligibility before government transmission.
              </p>

              {/* State Progress Indicators */}
              <div className="space-y-3 pt-2">
                <div
                  className={`p-3.5 rounded-xl border transition-all ${
                    docState >= 0
                      ? "bg-[#F7F9FC] border-[#E2E8F0]"
                      : "bg-white border-[#E2E8F0] opacity-60"
                  }`}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[#102A56]">
                      Phase 1: Maker Verification
                    </span>
                    <Badge
                      variant={docState >= 1 ? "brand" : "warning"}
                      size="sm"
                    >
                      {docState >= 1 ? "Maker Approved" : "Pending Review"}
                    </Badge>
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-1 font-mono">
                    Actor: Zaid Farooq (Visa Processor • ASSIGNED_ONLY)
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border transition-all ${
                    docState >= 1
                      ? "bg-[#F7F9FC] border-[#1747E8]/30"
                      : "bg-white border-[#E2E8F0] opacity-60"
                  }`}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[#102A56]">
                      Phase 2: Checker Authorization
                    </span>
                    <Badge
                      variant={
                        docState === 2
                          ? "success"
                          : docState === 1
                          ? "brand"
                          : "neutral"
                      }
                      size="sm"
                    >
                      {docState === 2
                        ? "Checker Approved"
                        : docState === 1
                        ? "Ready for Review"
                        : "Blocked on Maker"}
                    </Badge>
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-1 font-mono">
                    Actor: Nadia Rahman (Ops Manager • ALL_COMPANY)
                  </div>
                </div>
              </div>

              {/* Simulation Controls */}
              <div className="pt-2 flex flex-wrap gap-2">
                {docState === 0 && (
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => setDocState(1)}
                  >
                    Pass Maker Review →
                  </Button>
                )}
                {docState === 1 && (
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => setDocState(2)}
                  >
                    Approve as Checker →
                  </Button>
                )}
                {docState === 2 && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setDocState(0)}
                    icon={RotateCcw}
                  >
                    Reset Simulation
                  </Button>
                )}
              </div>
            </div>

            {/* Right Live Document Queue Visual (7 cols) */}
            <div className="lg:col-span-7 bg-[#F7F9FC] rounded-xl border border-[#E2E8F0] p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#1747E8]" />
                  <span className="text-xs font-bold text-[#102A56]">
                    Document Review Queue • Case #CAS-9481
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#64748B]">
                  AES-256 S3 Storage
                </span>
              </div>

              {/* Primary Document Card */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-3 shadow-subtle">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center font-mono text-xs font-bold">
                      PDF
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#102A56] font-mono">
                        Passport_Bio_Rashid_AlNuaimi.pdf
                      </div>
                      <div className="text-[11px] text-[#64748B]">
                        Size: 2.4 MB • Expiry: 14-Aug-2032 • Pages: 2/2 Verified
                      </div>
                    </div>
                  </div>

                  <Badge
                    variant={
                      docState === 2
                        ? "success"
                        : docState === 1
                        ? "brand"
                        : "warning"
                    }
                    size="sm"
                  >
                    {docState === 2
                      ? "Fully Approved"
                      : docState === 1
                      ? "Pending Checker"
                      : "Pending Maker"}
                  </Badge>
                </div>

                {/* Audit log transcript for this file */}
                <div className="p-3.5 rounded-lg bg-[#F7F9FC] border border-[#E2E8F0] font-mono text-[11px] space-y-1.5 text-[#172B4D]">
                  <div className="text-[#64748B] text-[10px] font-bold uppercase tracking-wider pb-1 border-b border-[#E2E8F0]">
                    Immutable Provenance & Event Stream
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">10:14 AM — Ingestion:</span>
                    <span>Document uploaded via applicant intake</span>
                  </div>

                  {docState >= 1 && (
                    <div className="flex justify-between text-[#1747E8] font-semibold">
                      <span>10:32 AM — Maker Verified:</span>
                      <span>Zaid Farooq [PASS: Expiry & Legibility OK]</span>
                    </div>
                  )}

                  {docState === 2 && (
                    <div className="flex justify-between text-[#18A875] font-semibold">
                      <span>10:45 AM — Checker Sign-off:</span>
                      <span>Nadia Rahman [AUTHORIZED FOR MINISTRY ICP]</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Supporting Secondary Queue Rows */}
              <div className="space-y-2">
                {[
                  {
                    name: "Attested_Degree_Certificate.pdf",
                    rule: "RULE-DEGREE-ATTEST-01",
                    status: "Checker Approved",
                    badge: "success",
                  },
                  {
                    name: "MOHRE_Employment_Contract.pdf",
                    rule: "RULE-MOHRE-STAMPED",
                    status: "Maker Approved",
                    badge: "brand",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-between text-xs shadow-subtle"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-[#64748B]" />
                      <span className="font-mono font-semibold text-[#102A56] text-[11px]">
                        {row.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-[10px]">
                      <span className="text-[#64748B] hidden sm:inline">
                        {row.rule}
                      </span>
                      <Badge variant={row.badge} size="sm">
                        {row.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Capabilities Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 shadow-subtle hover:-translate-y-0.5 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] text-[#1747E8] flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#102A56]">{cap.title}</h4>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
