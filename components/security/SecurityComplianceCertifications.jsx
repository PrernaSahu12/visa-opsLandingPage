
import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Globe2,
  FileCheck2,
  Server,
  Download,
  Check,
} from "lucide-react";

export function SecurityComplianceCertifications({ onOpenDemo }) {
  const frameworks = [
    {
      title: "UAE Personal Data Protection Law (PDPL)",
      jurisdiction: "United Arab Emirates",
      badge: "Federal Decree-Law No. 45",
      desc: "Architected for strict applicant consent logging, lawful data processing, and local residency governance for inside-UAE transactions.",
      checks: [
        "Explicit applicant consent capture upon intake",
        "Granular Right-to-Erasure (RTBF) workflows",
        "Encrypted local transit within UAE borders",
      ],
    },
    {
      title: "Saudi Arabia NDMO Specifications",
      jurisdiction: "Kingdom of Saudi Arabia",
      badge: "NDMO Compliant",
      desc: "Meets National Data Management Office standards for cross-border transmission, national identity record safeguards, and Qiwa platform integration.",
      checks: [
        "Data classification tagging (Restricted / Confidential)",
        "Strict employee need-to-know access boundaries",
        "Cryptographic audit trail for all expat files",
      ],
    },
    {
      title: "ISO/IEC 27001 Controls Alignment",
      jurisdiction: "Global Standard",
      badge: "Information Security",
      desc: "Controls map directly to ISO/IEC 27001 Annex A standards across access control, cryptographic measures, and supplier relationship security.",
      checks: [
        "Strict physical and logical asset segregation",
        "Continuous automated vulnerability assessments",
        "Documented Incident Response & Disaster Recovery",
      ],
    },
    {
      title: "SOC 2 Type II Prepared Architecture",
      jurisdiction: "Trust Services Criteria",
      badge: "Security & Confidentiality",
      desc: "Built to satisfy the Trust Services Criteria for Security, Availability, and Confidentiality through tamper-resistant audit trails and dual-control sign-offs.",
      checks: [
        "Four-eyes principle on all document releases",
        "Immutable write-once, read-many (WORM) event store",
        "Comprehensive third-party vendor risk assessment",
      ],
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-[11px] font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Regulatory & Regional Alignment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif text-[#102A56] font-normal leading-tight tracking-tight">
              Compliant with GCC & International Standards
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#64748B] max-w-xl">
              Immigration authorities and corporate clients enforce strict data privacy laws. Vyxel provides the turnkey infrastructure needed to stay compliant.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="px-5 py-2 rounded-full bg-[#102A56] hover:bg-[#1747E8] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Compliance Whitepaper</span>
            </button>
          </div>
        </div>

        {/* 2x2 Grid of Regulatory Frameworks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {frameworks.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#DCE7F3] p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1747E8] border border-blue-100 flex items-center justify-center">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#102A56] leading-tight block">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {item.jurisdiction}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                  {item.badge}
                </span>
              </div>

              <p className="text-xs text-[#475569] leading-relaxed mt-2.5">
                {item.desc}
              </p>

              <div className="mt-3 space-y-1.5 pt-2 border-t border-slate-100">
                {item.checks.map((chk, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{chk}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Live Threat & Infrastructure Telemetry Strip */}
        <div className="mt-4 rounded-xl bg-white border border-[#DCE7F3] p-4 shadow-2xs flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Automated Pentest: Clean (0 Critical)
            </span>
            <span className="flex items-center gap-1.5 font-medium text-slate-800">
              <Server className="w-3.5 h-3.5 text-[#1747E8]" />
              Host: AWS me-central-1 (Dubai)
            </span>
            <span className="flex items-center gap-1.5 font-medium text-slate-800">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              TLS 1.3 Strict Enforced
            </span>
          </div>

          <div className="font-mono text-[11px] text-slate-500">
            99.99% Guaranteed Availability SLA
          </div>
        </div>

      </div>
    </section>
  );
}
