"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Server,
  Database,
  KeyRound,
  CheckCircle2,
  HardDrive,
  Cpu,
  RefreshCw,
} from "lucide-react";

export function SecurityHero({ onOpenDemo, onOpenCreateWorkspace }) {
  const [activeTab, setActiveTab] = useState("tenant"); // tenant | encryption | rbac

  return (
    <section className="relative pt-28 pb-8 sm:pt-36 sm:pb-10 overflow-hidden bg-[linear-gradient(180deg,#EDF4FC_0%,#F8FBFE_60%,#FFFFFF_100%)]">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-10 right-1/4 w-80 h-80 rounded-full bg-[#38BDF8]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-32 left-10 w-72 h-72 rounded-full bg-[#1747E8]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1747E8]/10 border border-[#1747E8]/20 text-[#1747E8] text-xs font-semibold w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Enterprise Defense · Zero-Trust Architecture</span>
            </div>

            {/* Editorial Serif Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-serif text-[#102A56] font-normal leading-[1.14] tracking-tight">
              Bank-Grade Security for Sensitive Visa Records
            </h1>

            {/* Subtitle */}
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              Passports, financial records, and medical files demand absolute confidentiality. Vyxel isolates every agency tenant, enforces role-based work scopes, and encrypts all assets with AES-256.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenDemo}
                className="px-7 py-3 rounded-full bg-[#F5B335] hover:bg-[#EAA31E] text-[#0A2540] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Schedule Security Review
              </button>

              <button
                type="button"
                onClick={onOpenCreateWorkspace}
                className="px-6 py-3 rounded-full bg-white border border-[#CBD5E1] hover:border-[#102A56] text-[#102A56] font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Launch Sandbox
              </button>
            </div>

            {/* Micro Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-[#64748B]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#18A875]" />
                Zero Cross-Tenant Leakage
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#18A875]" />
                AES-256 Vault Encryption
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#18A875]" />
                UAE PDPL & NDMO Ready
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Multi-Tenant Defense Console */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#DCE7F3] shadow-[0_16px_45px_rgba(16,42,86,0.08)] overflow-hidden">
              
              {/* Console Top Bar */}
              <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-600 ml-1.5">
                    shield://defense-mesh/runtime-monitor
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ALL FIREWALLS ARMED
                </span>
              </div>

              {/* Console Tabs */}
              <div className="px-5 py-2.5 bg-slate-50/60 border-b border-slate-100 flex items-center gap-2 text-xs">
                <button
                  onClick={() => setActiveTab("tenant")}
                  className={`px-3 py-1 rounded-full font-medium transition-all ${
                    activeTab === "tenant"
                      ? "bg-[#102A56] text-white"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  Tenant Isolation Gateway
                </button>
                <button
                  onClick={() => setActiveTab("encryption")}
                  className={`px-3 py-1 rounded-full font-medium transition-all ${
                    activeTab === "encryption"
                      ? "bg-[#102A56] text-white"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  S3 Vault & AES-256
                </button>
                <button
                  onClick={() => setActiveTab("rbac")}
                  className={`px-3 py-1 rounded-full font-medium transition-all ${
                    activeTab === "rbac"
                      ? "bg-[#102A56] text-white"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  Dual WorkScope (RBAC)
                </button>
              </div>

              {/* Console Body */}
              <div className="p-4 sm:p-5 bg-slate-50/30">
                {activeTab === "tenant" && (
                  <div className="space-y-3 font-sans text-xs">
                    {/* Live Query Filter Demonstration */}
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pb-1.5 border-b border-slate-100">
                        <span>DATABASE ENGINE: MULTI-TENANT QUERY ROUTER</span>
                        <span className="text-emerald-600 font-semibold">100% ISOLATED</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 text-slate-200 font-mono text-[11px] space-y-1 overflow-x-auto">
                        <div className="text-slate-400">-- Inbound Request for /api/v1/cases/DXB-9812</div>
                        <div className="text-emerald-400">SELECT * FROM cases</div>
                        <div className="text-amber-300 font-semibold">WHERE company_id = &apos;cmp_dubai_express_881&apos;</div>
                        <div className="text-slate-300">  AND id = &apos;DXB-9812&apos;</div>
                        <div className="text-slate-400">-- Filter automatically injected at ORM layer before execution</div>
                      </div>
                    </div>

                    {/* Active Tenant Boundaries Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-200">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#102A56]">Tenant Alpha (Dubai)</span>
                          <span className="text-[10px] font-mono text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                            ACTIVE
                          </span>
                        </div>
                        <div className="mt-1 text-[11px] text-slate-600 font-mono">
                          company_id: cmp_dxb_01 · 1,480 Cases Isolated
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-emerald-950">Tenant Beta (Riyadh)</span>
                          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                            ACTIVE
                          </span>
                        </div>
                        <div className="mt-1 text-[11px] text-emerald-800 font-mono">
                          company_id: cmp_ruh_02 · 3,120 Cases Isolated
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "encryption" && (
                  <div className="space-y-3 font-sans text-xs">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pb-1.5 border-b border-slate-100">
                        <span>DOCUMENT VAULT: AWS S3 ENCRYPTION AT REST</span>
                        <span className="text-emerald-600 font-semibold">AES-256 GCM</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-center font-mono">
                        <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="text-[10px] text-slate-400">At Rest</div>
                          <div className="font-bold text-slate-800 text-xs mt-0.5">AES-256 AWS-KMS</div>
                        </div>
                        <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="text-[10px] text-slate-400">In Transit</div>
                          <div className="font-bold text-slate-800 text-xs mt-0.5">TLS 1.3 Strict</div>
                        </div>
                        <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="text-[10px] text-slate-400">Link Expiry</div>
                          <div className="font-bold text-emerald-700 text-xs mt-0.5">15 Min Presigned</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-[11px] text-emerald-900 font-mono">
                      <span>✓ Cryptographic Hash: SHA256-V2 Verified</span>
                      <span>Zero Public Bucket Access</span>
                    </div>
                  </div>
                )}

                {activeTab === "rbac" && (
                  <div className="space-y-3 font-sans text-xs">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pb-1.5 border-b border-slate-100">
                        <span>DUAL WORKSCOPE SEGREGATION MODEL</span>
                        <span className="text-blue-600 font-semibold">ROLE ENFORCED</span>
                      </div>
                      
                      <div className="space-y-2 pt-1">
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                          <div>
                            <span className="font-bold text-slate-800">ASSIGNED_ONLY</span>
                            <span className="text-slate-500 ml-2">(Visa Processors, Typists)</span>
                          </div>
                          <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                            Scoped to /my-work
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                          <div>
                            <span className="font-bold text-slate-800">ALL_COMPANY</span>
                            <span className="text-slate-500 ml-2">(Operations Lead, Executives)</span>
                          </div>
                          <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                            Full Agency Telemetry
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Console Bottom Bar */}
              <div className="px-4 py-2.5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Vyxel Zero-Trust Engine v3.8</span>
                <span>Active Region: me-central-1 (Dubai)</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
