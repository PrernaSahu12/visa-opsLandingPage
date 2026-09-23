
import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Plane,
  Building2,
  Users2,
  ShieldCheck,
  Globe2,
  FileCheck2,
  Check,
  Clock,
} from "lucide-react";

export function SolutionsSegmentShowcase({ onOpenDemo }) {
  return (
    <section className="pt-12 pb-6 sm:pt-16 sm:pb-8 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching User Reference */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEF4FF] border border-[#2563EB]/20 text-[11px] font-bold tracking-wider uppercase text-[#2563EB]">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            SOLUTIONS FOR EVERY SECTOR
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#102A56] font-normal tracking-tight">
            Built for the Full Spectrum of Visa &amp; Manpower Operations
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl mx-auto font-sans">
            Four specialized operating models. One unified, deterministic platform.
          </p>
        </div>

        {/* 2x2 High-Density Split Card Grid matching Reference */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 max-w-[1360px] mx-auto">
          
          {/* CARD 01: Immigration & Visa Consultancies (Light Card) */}
          <div className="rounded-3xl bg-white border border-[#DCE7F3] p-6 sm:p-7 shadow-[0_12px_35px_rgba(16,42,86,0.06)] hover:border-[#2563EB]/40 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Copy & Checklist */}
              <div className="md:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EEF4FF] border border-[#2563EB]/20 text-[11px] font-bold text-[#2563EB]">
                  <span className="w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[9px] font-mono">
                    01
                  </span>
                  <span>Immigration &amp; Visa Consultancies</span>
                </div>

                <h3 className="text-xl sm:text-[22px] font-serif text-[#102A56] font-normal leading-snug">
                  Built for High-Touch Private Visa Practices
                </h3>

                <ul className="space-y-2 text-xs text-[#334155]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>OCR passport ingestion &amp; data extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>41-step deterministic DAG workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>Automated WhatsApp alerts for candidates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>Role-isolated queues for counsellors &amp; ops</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group cursor-pointer"
                  >
                    <span>Explore Immigration Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive Software UI Simulation Card */}
              <div className="md:col-span-6">
                <div className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 space-y-3 text-xs shadow-2xs">
                  
                  {/* Candidate Profile Row */}
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#102A56] text-white flex items-center justify-center font-bold text-xs">
                        AM
                      </div>
                      <div>
                        <div className="font-bold text-[#102A56] text-xs">Arjun Mehta</div>
                        <div className="text-[10px] text-[#64748B]">Golden Visa · UAE (CAS-9481)</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] text-[10px] font-bold border border-blue-200">
                      In Progress
                    </span>
                  </div>

                  {/* 4-Step DAG Stepper */}
                  <div className="pt-1">
                    <div className="flex items-center justify-between text-[10px] text-[#64748B] font-semibold mb-1">
                      <span className="text-[#2563EB]">Intake</span>
                      <span className="text-[#2563EB]">Review</span>
                      <span className="text-[#2563EB] font-bold">Ministry</span>
                      <span className="text-[#94A3B8]">Approved</span>
                    </div>
                    <div className="relative flex items-center justify-between">
                      <div className="absolute left-2 right-2 h-1 bg-[#E2E8F0] -z-0" />
                      <div className="absolute left-2 w-2/3 h-1 bg-[#2563EB] -z-0" />
                      <span className="w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[8px] font-bold z-10">✓</span>
                      <span className="w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[8px] font-bold z-10">✓</span>
                      <span className="w-4 h-4 rounded-full bg-[#2563EB] text-white ring-4 ring-blue-100 flex items-center justify-center text-[8px] font-bold z-10 animate-pulse">●</span>
                      <span className="w-3.5 h-3.5 rounded-full bg-[#E2E8F0] border-2 border-white z-10" />
                    </div>
                  </div>

                  {/* Document Verification Checks */}
                  <div className="space-y-1.5 pt-1 text-[11px]">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200/80">
                      <span className="text-[#102A56] font-medium">Passport Bio-Page</span>
                      <span className="text-emerald-600 font-bold text-[10px]">Verified ✓</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200/80">
                      <span className="text-[#102A56] font-medium">MOFA Degree Attestation</span>
                      <span className="text-emerald-600 font-bold text-[10px]">Attested ✓</span>
                    </div>
                  </div>

                  {/* WhatsApp Alert Sent Strip */}
                  <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-900 flex items-center justify-between text-[10px]">
                    <span className="font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      WhatsApp: File submitted to Ministry
                    </span>
                    <span className="text-emerald-700 font-mono">2 min ago</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* CARD 02: Manpower & Overseas Staffing (Deep Navy Accent Card) */}
          <div className="rounded-3xl bg-[#06214A] border border-[#14396D] p-6 sm:p-7 shadow-[0_20px_50px_rgba(6,33,74,0.3)] hover:border-blue-400/50 transition-all text-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Copy & Checklist */}
              <div className="md:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold text-sky-300">
                  <span className="w-4 h-4 rounded-full bg-sky-400 text-[#06214A] flex items-center justify-center text-[9px] font-mono font-bold">
                    02
                  </span>
                  <span>Manpower &amp; Overseas Staffing</span>
                </div>

                <h3 className="text-xl sm:text-[22px] font-serif text-white font-normal leading-snug">
                  Streamline High-Volume Workforce Deployment
                </h3>

                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Bulk spreadsheet candidate ingestion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Live MOHRE quota tracking &amp; alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Medical, insurance &amp; emigration slips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Flight scheduling &amp; batch management</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors group cursor-pointer"
                  >
                    <span>Explore Manpower Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive White UI Panel inside Dark Card */}
              <div className="md:col-span-6">
                <div className="rounded-2xl bg-white text-[#102A56] p-4 space-y-3 text-xs shadow-lg">
                  
                  {/* Batch Header */}
                  <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2.5">
                    <div>
                      <div className="font-bold text-[#102A56] text-xs">Batch Deployment #B-204</div>
                      <div className="text-[10px] text-[#64748B]">Emirates Freight Solutions LLC</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                      In-Flight
                    </span>
                  </div>

                  {/* Dual Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="text-base font-mono font-extrabold text-[#102A56]">120</div>
                      <div className="text-[10px] text-[#64748B]">Workers in this batch</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="text-base font-mono font-extrabold text-emerald-600">84</div>
                      <div className="text-[10px] text-[#64748B]">MOHRE slots available</div>
                    </div>
                  </div>

                  {/* Quota Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-[#64748B] font-semibold">
                      <span>Deployment Pipeline Progress</span>
                      <span className="text-[#2563EB] font-mono">58%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#E2E8F0] overflow-hidden">
                      <div className="w-[58%] h-full bg-[#2563EB] rounded-full" />
                    </div>
                  </div>

                  {/* Flight Schedule */}
                  <div className="p-2.5 rounded-xl bg-[#EEF4FF] border border-[#2563EB]/20 space-y-1 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 font-bold text-[#102A56]">
                        <Plane className="w-3.5 h-3.5 text-[#2563EB]" />
                        EK 542 · DEL → DXB
                      </span>
                      <span className="text-emerald-700 font-bold text-[10px] bg-emerald-100 px-1.5 py-0.2 rounded">
                        Confirmed
                      </span>
                    </div>
                    <div className="text-[10px] text-[#64748B]">
                      14 Sep 2026 · 120 Workers Booked
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* CARD 03: Enterprise Global Mobility & In-House HR (Light Card) */}
          <div className="rounded-3xl bg-white border border-[#DCE7F3] p-6 sm:p-7 shadow-[0_12px_35px_rgba(16,42,86,0.06)] hover:border-[#2563EB]/40 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Copy & Checklist */}
              <div className="md:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EEF4FF] border border-[#2563EB]/20 text-[11px] font-bold text-[#2563EB]">
                  <span className="w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[9px] font-mono">
                    03
                  </span>
                  <span>Enterprise Global Mobility &amp; HR</span>
                </div>

                <h3 className="text-xl sm:text-[22px] font-serif text-[#102A56] font-normal leading-snug">
                  Control Corporate Sponsorships &amp; Labor Legalities
                </h3>

                <ul className="space-y-2 text-xs text-[#334155]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>Automated 90-60-30 day expiry notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>Multi-license corporate entity switcher</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>WPS payroll audit &amp; wage compliance checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>Self-service employee document renewals</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group cursor-pointer"
                  >
                    <span>Explore Enterprise Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Corporate Quota & Expiry Monitor */}
              <div className="md:col-span-6">
                <div className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 space-y-3 text-xs shadow-2xs">
                  
                  {/* Entity Header */}
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2.5">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#2563EB]" />
                      <div>
                        <div className="font-bold text-[#102A56] text-xs">Al-Futtaim Logistics Division</div>
                        <div className="text-[10px] text-[#64748B]">Commercial License #DXB-58291</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                      100% Compliant
                    </span>
                  </div>

                  {/* Headcount Breakdown */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0]">
                      <div className="text-base font-mono font-extrabold text-[#102A56]">1,450</div>
                      <div className="text-[10px] text-[#64748B]">Total Active Headcount</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0]">
                      <div className="text-base font-mono font-extrabold text-amber-600">34</div>
                      <div className="text-[10px] text-[#64748B]">Renewals in 60 Days</div>
                    </div>
                  </div>

                  {/* Scheduled Renewal Task Trigger */}
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 space-y-1 text-[11px]">
                    <div className="flex justify-between font-semibold">
                      <span>Automated Renewal Task Gate</span>
                      <span className="text-[10px] font-mono font-bold">34 CASES QUEUED</span>
                    </div>
                    <div className="text-[10px] text-amber-800/80">
                      Notifications dispatched to employee self-service portal
                    </div>
                  </div>

                  {/* WPS Audit Status */}
                  <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-0.5">
                    <span>MOHRE WPS Payroll:</span>
                    <span className="text-emerald-600 font-bold">Zero Violations Verified</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* CARD 04: Typing Centers & Clearance Firms (Light Card) */}
          <div className="rounded-3xl bg-white border border-[#DCE7F3] p-6 sm:p-7 shadow-[0_12px_35px_rgba(16,42,86,0.06)] hover:border-[#2563EB]/40 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Copy & Checklist */}
              <div className="md:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EEF4FF] border border-[#2563EB]/20 text-[11px] font-bold text-[#2563EB]">
                  <span className="w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[9px] font-mono">
                    04
                  </span>
                  <span>Typing Centers &amp; Clearance Firms</span>
                </div>

                <h3 className="text-xl sm:text-[22px] font-serif text-[#102A56] font-normal leading-snug">
                  Built for High-Speed Government Batch Filing
                </h3>

                <ul className="space-y-2 text-xs text-[#334155]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>Four-eyes Maker-Checker dual authorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>Direct MOHRE &amp; ICP portal batch dispatch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>Integrated escrow fees &amp; digital ledger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <span>Immutable timestamped operator audit logs</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group cursor-pointer"
                  >
                    <span>Explore Typing Center Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Gov Filing Queue Console */}
              <div className="md:col-span-6">
                <div className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 space-y-3 text-xs shadow-2xs">
                  
                  {/* Console Header */}
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2.5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="font-bold text-[#102A56] text-xs">Government Filing Queue</div>
                        <div className="text-[10px] text-[#64748B]">Maker-Checker Dual Gate Locked</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                      0% Error Rate
                    </span>
                  </div>

                  {/* Dual Authorization Sign-Off */}
                  <div className="p-2.5 rounded-xl bg-white border border-emerald-200/80 space-y-1 text-[11px]">
                    <div className="flex justify-between items-center text-[#102A56] font-bold">
                      <span>Entry Permit #EP-99410</span>
                      <span className="text-emerald-600 text-[10px]">VERIFIED ✓</span>
                    </div>
                    <div className="text-[10px] text-[#64748B]">
                      Maker: Tariq M. · Checker: Sara K. (Dual Sign-Off Validated)
                    </div>
                  </div>

                  {/* ICP Portal Transmission */}
                  <div className="p-2.5 rounded-xl bg-[#EEF4FF] border border-[#2563EB]/20 text-[11px] text-[#102A56] flex items-center justify-between">
                    <span>ICP Ministry Portal Transmission</span>
                    <span className="font-mono text-[#2563EB] font-bold text-[10px]">QUEUED · 4s</span>
                  </div>

                  {/* Escrow Fee Settled */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E2E8F0] text-[11px]">
                    <span className="text-[#64748B]">Customer Escrow Settled:</span>
                    <span className="font-mono font-bold text-[#102A56]">AED 1,240.00</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
