
import React from "react";
import {
  Users,
  Clock,
  Shield,
  Key,
  Lock,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Building2,
  CreditCard,
  Sliders,
  Check,
} from "lucide-react";

export function FeaturesBentoGrid({ onOpenDemo, onOpenCreateWorkspace }) {
  return (
    <section className="pt-10 lg:pt-14 pb-16 lg:pb-20 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#EEF4FF]/70 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] border border-blue-200 text-[#1747E8] text-xs font-semibold tracking-wide uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Foundational Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#102A56] tracking-tight leading-tight">
            Built for Multi-Branch Operational Scale
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            The underlying enterprise architecture that empowers international agencies, consultancies, and manpower suppliers to run without single points of failure.
          </p>
        </div>

        {/* 3-Column Modern Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* =========================================================================
              CARD 1: Native HRMS (Built-in HR & Payroll)
              ========================================================================= */}
          <div className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(16,42,86,0.05)] hover:shadow-[0_12px_36px_rgba(16,42,86,0.1)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Icon & Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] text-[#1747E8] border border-blue-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase">
                  NATIVE HRMS
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#102A56] tracking-tight mb-3">
                Built-in HR &amp; Payroll
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-sans mb-6">
                Manage your internal staff attendance, leaves, and payroll across multiple branches seamlessly.
              </p>

              {/* Abstract UI Mini Widget: Live Attendance & Branch Payroll */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-1.5 font-semibold text-[#102A56]">
                    <Building2 className="w-3.5 h-3.5 text-[#1747E8]" />
                    <span>Multi-Branch Biometrics</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    98.4% ON-DUTY
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100 shadow-2xs">
                    <span className="text-slate-600">Dubai HQ (Sheikh Zayed)</span>
                    <span className="font-mono font-semibold text-slate-800">42 / 44 Active</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100 shadow-2xs">
                    <span className="text-slate-600">Abu Dhabi Consulate Desk</span>
                    <span className="font-mono font-semibold text-slate-800">18 / 18 Active</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Automated Payroll Run: 28th</span>
                  <span className="text-emerald-700 font-bold">WPS Compliant</span>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1747E8]">
              <span>Leave &amp; Commission Routing</span>
              <span>→</span>
            </div>
          </div>


          {/* =========================================================================
              CARD 2: Enterprise Security (True Data Isolation)
              ========================================================================= */}
          <div className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(16,42,86,0.05)] hover:shadow-[0_12px_36px_rgba(16,42,86,0.1)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Icon & Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase">
                  ENTERPRISE SECURITY
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#102A56] tracking-tight mb-3">
                True Data Isolation
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-sans mb-6">
                Bank-grade security with strict multi-tenant database architecture and module-level RBAC.
              </p>

              {/* Abstract UI Mini Widget: Tenant Partition Boundary */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-1.5 font-semibold text-[#102A56]">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    <span>CompanyID Partition Boundary</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    AES-256
                  </span>
                </div>

                <div className="space-y-2 font-mono text-[11px]">
                  <div className="p-2 rounded-xl bg-white border border-slate-100 flex items-center justify-between">
                    <span className="text-slate-500">Tenant-A: UAE Ops</span>
                    <span className="text-emerald-600 font-semibold">Isolated Node</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-slate-100 flex items-center justify-between">
                    <span className="text-slate-500">Tenant-B: Qatar Manpower</span>
                    <span className="text-emerald-600 font-semibold">Zero Cross-Query</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>RBAC Scope: ASSIGNED_ONLY</span>
                  <span className="text-emerald-700 font-bold">SOC-2 Type II</span>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1747E8]">
              <span>Explore Security Architecture</span>
              <span>→</span>
            </div>
          </div>


          {/* =========================================================================
              CARD 3: Dynamic Entitlements (Subscription Entitlements)
              ========================================================================= */}
          <div className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(16,42,86,0.05)] hover:shadow-[0_12px_36px_rgba(16,42,86,0.1)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Icon & Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase">
                  DYNAMIC ENTITLEMENTS
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#102A56] tracking-tight mb-3">
                Subscription Entitlements
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-sans mb-6">
                Automated read-only downgrades and access gating based on your live billing tier.
              </p>

              {/* Abstract UI Mini Widget: Live Tier Quota Meter */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-1.5 font-semibold text-[#102A56]">
                    <Sliders className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Tier: Enterprise Gold</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Monthly Cases Processed</span>
                    <span className="font-bold text-[#102A56]">14,280 / 20,000</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-[#1747E8] rounded-full" style={{ width: "71.4%" }} />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>DAG Execution Quota</span>
                  <span className="text-indigo-700 font-bold">Unlimited Leaf Nodes</span>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1747E8]">
              <span>View Transparent Pricing</span>
              <span>→</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
