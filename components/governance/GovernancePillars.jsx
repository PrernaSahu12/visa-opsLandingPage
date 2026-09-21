"use client";

import React, { useState } from "react";
import {
  UserCheck,
  ShieldCheck,
  FileCheck2,
  Lock,
  History,
  AlertTriangle,
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  Fingerprint,
  Globe,
  Check,
  MoreVertical,
} from "lucide-react";

export function GovernancePillars({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState("maker_checker");

  const pillars = [
    {
      id: "maker_checker",
      badge: "Protocol 01",
      title: "Dual-Control Maker-Checker Segregation",
      subtitle: "Prevent human blind spots with hard boundary segregation",
      description:
        "Every single compliance-critical document undergoes a mandatory two-tier authorization chain. The user who prepares and reviews initial scans (Maker) is programmatically locked out from issuing the final compliance seal (Checker).",
      bullets: [
        "Programmatic RBAC lockout preventing self-approval",
        "Configurable per visa category (Golden Visa, Green Visa, Standard Work Permit)",
        "Pre-flight inspection checklist (validity, resolution, official translation)",
        "Zero file reaches government APIs without Checker sign-off",
      ],
      previewType: "maker_checker",
    },
    {
      id: "rule_engine",
      badge: "Protocol 02",
      title: "Dynamic Requirement Resolver",
      subtitle: "Never misplace an attestation or apostille requirement",
      description:
        "Requirements aren't static lists on a spreadsheet. Vyxel calculates exact prerequisites automatically using applicant nationality, sponsor trade tier, destination jurisdiction, and MOHRE/Qiwa profession codes.",
      bullets: [
        "Calculates 40+ country-specific attestation rules in milliseconds",
        "Locks requirement checklist upon case intake to prevent mid-cycle surprises",
        "Auto-flags required Ministry of Foreign Affairs (MOFA) attestations",
        "Dynamic medical & police clearance certificate validation triggers",
      ],
      previewType: "rule_engine",
    },
    {
      id: "audit_trail",
      badge: "Protocol 03",
      title: "Tamper-Resistant SHA-256 Audit Trail",
      subtitle: "Cryptographic proof for client disputes and ministry inspections",
      description:
        "Every verification, rejection reason, stamp, and override is permanently etched into an immutable, append-only event ledger. Gain total transparency for regulatory audits and eliminate agency liability.",
      bullets: [
        "Cryptographic SHA-256 hash sealing per operational event",
        "Accurate timestamps down to milliseconds with officer identity",
        "Granular rejection taxonomy (illegible stamp, missing back page, expired validity)",
        "Exportable PDF/JSON audit log for compliance authorities",
      ],
      previewType: "audit_trail",
    },
    {
      id: "controlled_overrides",
      badge: "Protocol 04",
      title: "Controlled Operational Overrides",
      subtitle: "Emergency flexibility with absolute accountability",
      description:
        "Exceptions happen in visa processing. When urgent VIP cases require expedited processing or temporary waiver of non-fatal documents, designated Operations Directors can override rules with mandatory logged justifications.",
      bullets: [
        "Restricted to verified Director & Operations Lead roles",
        "Mandatory 50+ character justification and supporting evidence attachment",
        "Real-time webhook notification sent to agency leadership",
        "Time-bounded waivers with automated revocation timers",
      ],
      previewType: "controlled_overrides",
    },
  ];

  const activePillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section className="py-8 sm:py-10 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#102A56]/5 text-[#102A56] text-[11px] font-semibold uppercase tracking-wider mb-2">
            Core Compliance Framework
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-serif text-[#102A56] font-normal leading-[1.18] tracking-tight">
            Built for Zero Failure Visa Compliance
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Eliminate operational liability. Explore the four core governance layers that guarantee every application submitted meets strict immigration ministry standards.
          </p>
        </div>

        {/* Pillar Navigation Tabs */}
        <div className="flex items-center justify-center overflow-x-auto pb-3 gap-2 sm:gap-2.5">
          {pillars.map((pillar) => {
            const isSelected = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-[#102A56] text-white shadow-sm"
                    : "bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#475569]"
                }`}
              >
                <span className="opacity-75 mr-1 font-mono text-[10px]">{pillar.badge}:</span>
                {pillar.title.split(" ")[0]} {pillar.title.split(" ")[1]}
              </button>
            );
          })}
        </div>

        {/* Panoramic Feature Card Showcase (User's Preferred Horizontal Split Layout) */}
        <div className="mt-4 rounded-3xl bg-[linear-gradient(135deg,#F8FAFC_0%,#F1F5F9_100%)] border border-[#DCE7F3] p-5 sm:p-7 shadow-[0_8px_30px_rgba(16,42,86,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Content Column (5 cols) */}
            <div className="lg:col-span-5 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1747E8] text-[11px] font-semibold">
                {activePillar.badge}
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-[#102A56] leading-snug">
                {activePillar.title}
              </h3>

              <div className="text-xs sm:text-sm font-medium text-[#1747E8]">
                {activePillar.subtitle}
              </div>

              <p className="text-xs text-[#475569] leading-relaxed">
                {activePillar.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-1.5 pt-1">
                {activePillar.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#102A56] hover:bg-[#1747E8] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer active:scale-95"
                >
                  <span>See Live Protocol in Action</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Interactive Software Preview Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-md overflow-hidden">
                
                {/* Window Bar */}
                <div className="px-3.5 py-2 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-600 ml-1.5">
                      system://governance/{activePillar.id === "maker_checker" ? "maker_verification" : activePillar.id}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#0E8A54] bg-[#E8FAF0] border border-[#B9ECCE] px-2 py-0.5 rounded">
                    STATUS: PASSED
                  </span>
                </div>

                {/* Dynamic Preview UI based on active Tab */}
                <div className="p-3 sm:p-3.5 bg-[#F8FAFC]/80">
                  {activePillar.id === "maker_checker" && (
                    <div className="space-y-2 sm:space-y-2.5 text-xs font-sans">
                      
                      {/* 1. Header Card: Maker: Document Verification */}
                      <div className="rounded-xl bg-white border border-[#E2E8F0] p-3 sm:p-3.5 shadow-2xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            {/* Navy Passport Graphic with Corner Check Badge */}
                            <div className="relative w-10 h-13 sm:w-11 sm:h-14 rounded-md bg-[#0F274A] border border-slate-700/80 shadow-xs flex flex-col items-center justify-between p-1 shrink-0 select-none">
                              <span className="text-[6px] sm:text-[7px] font-bold text-white tracking-widest uppercase">
                                PASSPORT
                              </span>
                              <div className="w-4 h-4 rounded-full border border-amber-300/60 flex items-center justify-center">
                                <Globe className="w-2.5 h-2.5 text-amber-300" />
                              </div>
                              <div className="w-5 h-0.5 bg-amber-300/40 rounded-full" />

                              {/* Green Check Corner Badge */}
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-white flex items-center justify-center shadow-xs">
                                <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                              </div>
                            </div>

                            {/* Title, Actor & Criteria Tags */}
                            <div className="space-y-1">
                              <h4 className="text-sm sm:text-[15px] font-bold text-[#102A56] leading-tight">
                                Maker: Document Verification
                              </h4>
                              <div className="text-[11px] text-[#64748B]">
                                Actor: Imran Qureshi (Senior Processor) · 2026-09-21 08:34 UTC
                              </div>
                              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                                <span className="px-2 py-0.5 rounded bg-[#F1F5F9] text-[#475569] text-[10px] font-medium">
                                  Photo DPI &gt; 300
                                </span>
                                <span className="px-2 py-0.5 rounded bg-[#F1F5F9] text-[#475569] text-[10px] font-medium">
                                  Validity &gt; 6 Mos
                                </span>
                                <span className="px-2 py-0.5 rounded bg-[#F1F5F9] text-[#475569] text-[10px] font-medium">
                                  Name Matches Passport
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Right Status Badge & Context Menu */}
                          <div className="flex items-center gap-1.5 self-start sm:self-center shrink-0">
                            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8FAF0] text-[#0E8A54] border border-[#B9ECCE] text-[11px] font-bold tracking-wide shadow-2xs">
                              <div className="w-3.5 h-3.5 rounded-full bg-[#0E8A54] text-white flex items-center justify-center">
                                <Check className="w-2 h-2 stroke-[3]" />
                              </div>
                              <span>PASSED</span>
                            </div>
                            <button
                              type="button"
                              className="p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors cursor-pointer"
                            >
                              <MoreVertical className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 2. Extracted Information Card */}
                      <div className="rounded-xl bg-white border border-[#E2E8F0] p-3 sm:p-3.5 shadow-2xs">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#102A56]">
                            <FileText className="w-3.5 h-3.5 text-[#102A56]" />
                            <span>Extracted Information</span>
                          </div>
                          <button
                            type="button"
                            onClick={onOpenDemo}
                            className="text-[11px] sm:text-xs font-semibold text-[#1747E8] hover:text-[#0D62F4] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <span>View Full Data</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-1.5 gap-x-4 pt-2">
                          <div>
                            <div className="text-[10px] text-slate-400 font-medium">Full Name</div>
                            <div className="text-xs sm:text-[13px] font-bold text-[#102A56] tracking-wide">
                              ARJUN MEHTA
                            </div>
                            <div className="text-[10px] text-slate-400 font-medium mt-1.5">Date of Birth</div>
                            <div className="text-xs sm:text-[13px] font-bold text-[#102A56]">
                              15 MAR 2001
                            </div>
                          </div>

                          <div>
                            <div className="text-[10px] text-slate-400 font-medium">Passport Number</div>
                            <div className="text-xs sm:text-[13px] font-bold text-[#102A56] tracking-wider">
                              Z5623417
                            </div>
                            <div className="text-[10px] text-slate-400 font-medium mt-1.5">Nationality</div>
                            <div className="text-xs sm:text-[13px] font-bold text-[#102A56]">
                              INDIA
                            </div>
                          </div>

                          <div>
                            <div className="text-[10px] text-slate-400 font-medium">Expiry Date</div>
                            <div className="text-xs sm:text-[13px] font-bold text-[#102A56]">
                              14 MAR 2031
                            </div>
                            <div className="text-[10px] text-slate-400 font-medium mt-1.5">Document Type</div>
                            <div className="text-xs sm:text-[13px] font-bold text-[#102A56]">
                              Ordinary Passport
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3. Verification Checks Card */}
                      <div className="rounded-xl bg-white border border-[#E2E8F0] p-3 sm:p-3.5 shadow-2xs">
                        <div className="flex items-center justify-between pb-2">
                          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#102A56]">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#102A56]" />
                            <span>Verification Checks</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-[#E8FAF0] text-[#0E8A54] border border-[#B9ECCE] text-[10px] font-semibold">
                            All Checks Passed
                          </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-0.5">
                          {[
                            { name: "MRZ Validation", status: "Passed" },
                            { name: "Photo Match", status: "Passed" },
                            { name: "Document Authenticity", status: "Passed" },
                            { name: "Expiry Validity", status: "Passed" },
                          ].map((check, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg bg-white border border-[#E2E8F0] p-2 flex items-center gap-2 shadow-2xs"
                            >
                              <div className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[10px] sm:text-[11px] font-bold text-[#102A56] leading-tight truncate">
                                  {check.name}
                                </div>
                                <div className="text-[9px] text-[#10B981] font-medium">
                                  {check.status}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 4. Segregation Rule Banner */}
                      <div className="rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] px-3.5 py-2 flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[9px] font-bold shrink-0">
                            i
                          </div>
                          <span className="text-[11px] sm:text-xs font-medium text-[#1E3A8A]">
                            Segregation rule verified: Maker Imran cannot sign off.
                          </span>
                        </div>
                        <Lock className="w-3.5 h-3.5 text-[#2563EB] shrink-0 ml-2" />
                      </div>

                    </div>
                  )}

                  {activePillar.id === "rule_engine" && (
                    <div className="space-y-3 text-xs font-sans">
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <div className="text-[11px] font-mono text-slate-500 uppercase">Evaluated Case Matrix</div>
                        <div className="mt-1 font-semibold text-slate-800">
                          Destination: UAE (MOHRE) · Nationality: India · Category: Level 1 Skilled (Civil Engineer)
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span className="font-medium text-emerald-900">Engineering Degree Certificate (Attested)</span>
                          </div>
                          <span className="text-[11px] font-mono text-emerald-800">MOFA REQUIRED</span>
                        </div>

                        <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span className="font-medium text-emerald-900">Valid Passport Scan (All 36 Pages)</span>
                          </div>
                          <span className="text-[11px] font-mono text-emerald-800">MIN 6 MOS</span>
                        </div>

                        <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-amber-600" />
                            <span className="font-medium text-amber-900">Good Conduct / Police Clearance (PCC)</span>
                          </div>
                          <span className="text-[11px] font-mono text-amber-800">INSPECTION PENDING</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activePillar.id === "audit_trail" && (
                    <div className="space-y-2.5 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-slate-900 text-slate-200 space-y-1.5 overflow-x-auto">
                        <div className="text-emerald-400 text-[11px]"># CRYPTOGRAPHIC AUDIT LEDGER · VERIFIED INTEGRITY</div>
                        <div className="text-[11px] text-slate-400">HASH: 9c8f2a1b5634e098877123aa45bcee1029348fa1</div>
                        <div className="pt-2 text-[11px] text-slate-300">
                          [2026-09-21 09:12:04 UTC] EVENT_DOC_VERIFIED · User: user_8812 · Doc: DEGREE_CERT · Result: VALID
                        </div>
                        <div className="text-[11px] text-slate-300">
                          [2026-09-21 09:14:18 UTC] EVENT_CHECKER_STAMP · User: user_0042 · Case: DXB-9812 · Result: APPROVED
                        </div>
                        <div className="text-[11px] text-emerald-400">
                          [2026-09-21 09:14:19 UTC] EVENT_DISPATCH_TRIGGER · Target: MOHRE_API_GATEWAY · Status: READY
                        </div>
                      </div>
                      <div className="text-right text-[11px] text-slate-500 font-sans">
                        Immutable append-only ledger · Tamper detection active
                      </div>
                    </div>
                  )}

                  {activePillar.id === "controlled_overrides" && (
                    <div className="space-y-3 text-xs font-sans">
                      <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-300 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-amber-900">
                            Operational Override Authorization Request
                          </div>
                          <div className="text-amber-800 text-[11px] mt-0.5">
                            Rule: Mandatory Original Police Clearance Certificate (PCC) Waiver
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span>Authorizing Lead: Tariq Al-Nuaimi (VP Operations)</span>
                          <span className="font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">2FA CONFIRMED</span>
                        </div>
                        <div className="text-slate-700 italic bg-slate-50 p-2.5 rounded text-[11px] border border-slate-100">
                          "Applicant holds prior executive residency. Provisional submission authorized per Client SLA Agreement #CS-4091. Full PCC to be uploaded prior to final visa stamping."
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span>Log Ref: OVR-2026-0041</span>
                          <span>Expiration: 72 Hours</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
