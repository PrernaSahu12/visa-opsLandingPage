"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  Search,
  Filter,
  Download,
  ExternalLink,
  Lock,
  Clock,
  Check,
} from "lucide-react";

export function GovernanceAuditConsole({ onOpenDemo }) {
  const [filter, setFilter] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  const logs = [
    {
      id: "LOG-9921",
      timestamp: "10:42:15 UTC",
      actor: "Fatima Al-Mansoor",
      role: "Compliance Lead (Checker)",
      caseRef: "DXB-2026-9812",
      action: "CHECKER_SIGN_OFF",
      actionLabel: "Compliance Stamp Issued",
      document: "Attested Degree Certificate.pdf",
      status: "approved",
      hash: "8f7e2c91a0b3...4e5f",
      jurisdiction: "UAE MOHRE",
    },
    {
      id: "LOG-9920",
      timestamp: "10:38:02 UTC",
      actor: "Zaid Farooq",
      role: "Visa Processor (Maker)",
      caseRef: "DXB-2026-9812",
      action: "MAKER_VERIFICATION",
      actionLabel: "Pre-Flight Validation Passed",
      document: "Attested Degree Certificate.pdf",
      status: "approved",
      hash: "4a2b1c88d9e0...77f1",
      jurisdiction: "UAE MOHRE",
    },
    {
      id: "LOG-9919",
      timestamp: "10:15:44 UTC",
      actor: "Tariq Al-Nuaimi",
      role: "VP Operations (Supervisor)",
      caseRef: "RUH-2026-4401",
      action: "SUPERVISOR_OVERRIDE",
      actionLabel: "Emergency Rule Waiver Authorized",
      document: "Police Clearance Certificate.pdf",
      status: "override",
      hash: "1e8d99c4a7b2...33c9",
      jurisdiction: "Saudi Qiwa",
    },
    {
      id: "LOG-9918",
      timestamp: "09:54:30 UTC",
      actor: "Nadia Chahine",
      role: "Visa Processor (Maker)",
      caseRef: "DOH-2026-1189",
      action: "DOC_REJECTED",
      actionLabel: "Resolution Below 300 DPI",
      document: "National Identity Card Scan.pdf",
      status: "rejected",
      hash: "9b3c4d5e6f7a...11a2",
      jurisdiction: "Qatar MoL",
    },
    {
      id: "LOG-9917",
      timestamp: "09:30:11 UTC",
      actor: "Vyxel Automated Resolver",
      role: "System Engine",
      caseRef: "DXB-2026-9812",
      action: "RULE_EVALUATION",
      actionLabel: "Prerequisites Dynamically Frozen",
      document: "System Matrix Evaluation",
      status: "approved",
      hash: "6c7d8e9f0a1b...22d3",
      jurisdiction: "UAE MOHRE",
    },
  ];

  const filteredLogs = logs.filter((log) => {
    if (filter === "all") return true;
    if (filter === "approvals") return log.status === "approved";
    if (filter === "overrides") return log.status === "override";
    if (filter === "rejections") return log.status === "rejected";
    return true;
  });

  const handleCopyHash = (id, hash) => {
    navigator.clipboard?.writeText(hash);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Real-Time Audit & Transparency Console</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#102A56] font-normal leading-tight tracking-tight">
              Every Action Sealed with Proof
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#64748B] max-w-xl">
              Inspect live verification events, segregation stamps, and supervised waivers. Ready for ministerial compliance audits and zero-dispute partner reporting.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 rounded-full bg-[#102A56] hover:bg-[#1747E8] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Compliance Audit Package</span>
            </button>
          </div>
        </div>

        {/* Console Container */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#DCE7F3] shadow-[0_12px_40px_rgba(16,42,86,0.06)] overflow-hidden">
          
          {/* Filter Bar */}
          <div className="px-5 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs">
              <span className="text-slate-400 font-mono flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" />
                Filter:
              </span>
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                  filter === "all"
                    ? "bg-[#102A56] text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                All Events ({logs.length})
              </button>
              <button
                onClick={() => setFilter("approvals")}
                className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                  filter === "approvals"
                    ? "bg-[#102A56] text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                Approvals & Stamps
              </button>
              <button
                onClick={() => setFilter("overrides")}
                className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                  filter === "overrides"
                    ? "bg-[#102A56] text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                Supervisor Overrides
              </button>
              <button
                onClick={() => setFilter("rejections")}
                className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                  filter === "rejections"
                    ? "bg-[#102A56] text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                Pre-Flight Rejections
              </button>
            </div>

            {/* Jurisdiction Indicator */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Immutable Ledger Connected</span>
            </div>
          </div>

          {/* Audit Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-[11px] font-mono text-slate-500 uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-5 py-3">Timestamp / Event ID</th>
                  <th className="px-5 py-3">Case Reference</th>
                  <th className="px-5 py-3">Authorized Actor</th>
                  <th className="px-5 py-3">Action & Document</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3 text-right">Cryptographic Hash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                    
                    {/* Timestamp & ID */}
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <div className="font-mono text-slate-900 font-medium">{log.timestamp}</div>
                      <div className="font-mono text-[10px] text-slate-400">{log.id}</div>
                    </td>

                    {/* Case Ref & Jurisdiction */}
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <span className="font-mono font-semibold text-[#102A56] bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                        {log.caseRef}
                      </span>
                      <div className="text-[10px] text-slate-500 mt-1">{log.jurisdiction}</div>
                    </td>

                    {/* Actor & Role */}
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <div className="font-semibold text-slate-900">{log.actor}</div>
                      <div className="text-[11px] text-slate-500">{log.role}</div>
                    </td>

                    {/* Action & Document */}
                    <td className="px-5 py-3.5">
                      <div className="font-medium text-slate-800 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate max-w-[200px]">{log.actionLabel}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[200px] mt-0.5">
                        {log.document}
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      {log.status === "approved" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Authorized
                        </span>
                      )}
                      {log.status === "override" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                          <AlertTriangle className="w-3 h-3 text-amber-600" />
                          Supervisor Waiver
                        </span>
                      )}
                      {log.status === "rejected" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-rose-50 text-rose-800 border border-rose-200">
                          <XCircle className="w-3 h-3 text-rose-600" />
                          Pre-Flight Flag
                        </span>
                      )}
                    </td>

                    {/* SHA256 Hash */}
                    <td className="px-5 py-3.5 whitespace-nowrap text-right font-mono text-[11px]">
                      <button
                        onClick={() => handleCopyHash(log.id, log.hash)}
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded transition-all cursor-pointer"
                        title="Click to copy cryptographic verification signature"
                      >
                        {copiedId === log.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <span>{log.hash}</span>
                          </>
                        )}
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Compliance Verification Strip */}
          <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                UAE MOHRE Ready
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Saudi Qiwa Compliant
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ISO 27001 Prepared
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                SOC-2 Type II Dual Control
              </span>
            </div>

            <div className="font-mono text-[11px]">
              Append-Only Ledger · Zero Tampering Guarantee
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
