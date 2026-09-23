
import React, { useState } from "react";
import {
  Workflow,
  ShieldCheck,
  MessageSquare,
  Lock,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  FileText,
  User,
  Check,
  X,
  FileCheck,
  Send,
  Sparkles,
  Phone,
  Layers,
  ChevronRight,
  Copy,
  MoreHorizontal,
} from "lucide-react";

export function FeaturesZigZag({ onOpenDemo, onOpenCreateWorkspace }) {
  // Feature 2 Interactive checker state
  const [decisionState, setDecisionState] = useState(null); // 'authorized' | 'rejected' | null
  const [copiedHash, setCopiedHash] = useState(false);

  return (
    <section className="pt-14 lg:pt-18 pb-8 lg:pb-10 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* =========================================================================
            FEATURE 1: Visa Workflow Engine (Text Left, UI Right)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] border border-blue-200 text-[#1747E8] text-xs font-semibold tracking-wide uppercase">
              <Workflow className="w-3.5 h-3.5" />
              <span>Deterministic Case Execution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#102A56] tracking-tight leading-tight">
              Dependency-Locked Workflow Pipelines
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Build custom case templates for any visa type. Our case engine ensures tasks are only unlocked when prerequisites are met, completely eliminating process deviation.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>
                  <strong>Automated Leaf Resolution:</strong> 41 interconnected sub-tasks execute in strict mathematical order.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>
                  <strong>Zero Deviation Lockout:</strong> Staff cannot proceed to stamping or labor fees until medical and quota clearances clear.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>
                  <strong>Live Bottleneck Alerting:</strong> Instant flagging if a government portal dependency exceeds standard SLA thresholds.
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1747E8] hover:text-blue-800 transition-colors group cursor-pointer"
              >
                <span>Explore Workflow DAG Architecture</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right UI Element: Interconnected Pipeline Visualizer */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#F8FAFC] p-3.5 sm:p-5 border border-slate-200/80 shadow-[0_8px_30px_rgba(16,42,86,0.06)] overflow-hidden">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-500 pl-1.5">
                    DAG TEMPLATE: UAE_EMPLOYMENT_V4
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Deterministic Active</span>
                </div>
              </div>

              {/* Connected Pipeline Nodes (Compact 3-Stage Workflow) */}
              <div className="space-y-1.5 relative">
                {/* Node 1: Completed */}
                <div className="py-2.5 px-3.5 rounded-xl bg-white border border-emerald-200 shadow-2xs flex items-center justify-between relative z-10 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-slate-400">TASK-01</span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#102A56]">
                          Offer Letter &amp; MOHRE Quota Clearance
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Completed in 4h 12m • Signed by Candidate Rahul Kumar
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80 shrink-0">
                    RESOLVED
                  </span>
                </div>

                {/* Connector Line 1 */}
                <div className="w-0.5 h-2.5 bg-emerald-400 mx-auto -my-0.5" />

                {/* Node 2: IN PROGRESS (Active Task) */}
                <div className="py-2.5 px-3.5 rounded-xl bg-white border-2 border-[#1747E8] shadow-xs flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#EEF4FF] text-[#1747E8] flex items-center justify-center shrink-0 relative">
                      <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: "6s" }} />
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#1747E8] rounded-full border border-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-[#1747E8] font-bold">TASK-02</span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#102A56]">
                          Entry Permit Application (GDRFA)
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Assigned to: Sarah Jenkins • Government submission in queue
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#1747E8] bg-[#EEF4FF] px-2 py-0.5 rounded-full border border-blue-200 shrink-0">
                    IN PROGRESS
                  </span>
                </div>

                {/* Connector Line 2 (Locked) */}
                <div className="w-0.5 h-2.5 bg-slate-300 mx-auto -my-0.5 border-dashed" />

                {/* Node 3: LOCKED (Prerequisite Required) */}
                <div className="py-2.5 px-3.5 rounded-xl bg-slate-50/90 border border-slate-200 flex items-center justify-between relative z-10 opacity-75">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-500 flex items-center justify-center shrink-0">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-slate-400">TASK-03</span>
                        <h4 className="text-xs sm:text-sm font-medium text-slate-700">
                          Medical Fitness &amp; Emirates ID Stamping
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Blocked: Automatically unlocks once Task-02 (Entry Permit) resolves
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-medium text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                    <Lock className="w-2.5 h-2.5" /> LOCKED
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-3.5 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Rule: dependsOn [TASK-02]</span>
                <span className="text-emerald-700 font-semibold">Zero Process Deviation</span>
              </div>
            </div>
          </div>
        </div>


        {/* =========================================================================
            FEATURE 2: Document Governance (UI Left, Text Right - ZigZag Inverted)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left UI Element: Document Verification Card */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 border border-slate-200/90 shadow-[0_12px_40px_rgba(16,42,86,0.06)] overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#1747E8] text-white flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#102A56]">
                    Document Verification – Passport
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    OCR Completed
                  </span>
                  <button className="text-slate-400 hover:text-slate-600 p-1">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Content Grid: Left (Passport + Extracted) & Right (Maker & Checker) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                
                {/* Left Inner Block: Passport Visual + Extracted Info */}
                <div className="sm:col-span-7 rounded-2xl bg-white border border-slate-200 p-3.5 space-y-3 shadow-2xs">
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 items-center">
                    
                    {/* Passport Card Visual */}
                    <div className="relative rounded-xl bg-[#FAF8F5] border border-amber-900/15 p-2.5 shadow-xs overflow-hidden">
                      {/* Cyan Scanning Corner Brackets */}
                      <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-sky-500" />
                      <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-sky-500" />
                      <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-sky-500" />
                      <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-sky-500" />

                      <div className="text-[7.5px] font-mono font-bold text-center text-slate-600 tracking-wider pb-1 border-b border-slate-200">
                        REPUBLIC OF INDIA
                      </div>

                      <div className="flex items-center gap-2 pt-1.5 pb-1">
                        <div className="w-9 h-11 rounded bg-slate-300 border border-slate-400/60 overflow-hidden flex items-center justify-center shrink-0">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                            alt="Passport Holder"
                            className="w-full h-full object-cover grayscale"
                          />
                        </div>
                        <div className="space-y-0.5 text-[8.5px] text-slate-700">
                          <div className="font-bold text-[9px] text-[#102A56] truncate">ARJUN MEHTA</div>
                          <div className="text-slate-500 text-[8px]">P# N8492014</div>
                          <div className="text-slate-500 text-[8px]">DOB: 15 MAR 1994</div>
                        </div>
                      </div>

                      {/* MRZ Detected Floating Tag */}
                      <div className="mt-1 flex justify-end">
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#10B981] text-white text-[8px] font-bold shadow-2xs">
                          ✓ MRZ Detected
                        </span>
                      </div>
                    </div>

                    {/* Extracted Information Checklist */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-bold text-[#102A56]">
                        Extracted Information
                      </div>

                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                          <span className="text-slate-600">Full Name</span>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[10px]">
                            99.8%
                          </span>
                        </div>
                        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                          <div className="flex items-center gap-1 text-slate-600">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Date of Birth</span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[10px]">
                            99.7%
                          </span>
                        </div>
                        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                          <div className="flex items-center gap-1 text-slate-600">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Expiry Validity</span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[10px]">
                            Valid
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-slate-600">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Authenticity</span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[10px]">
                            Clear
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Audit Hash Footer in Left Sub-Panel */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <div className="truncate pr-2">
                      <div className="text-[9px] text-slate-400">Audit Hash (SHA-256)</div>
                      <div className="truncate text-slate-600 font-semibold">3f2a7e9c4b0d7e1a9f4c8b2d5e6a1c7f0b9e2d4a8...</div>
                    </div>
                    <button
                      onClick={() => {
                        if (typeof navigator !== "undefined" && navigator.clipboard) {
                          navigator.clipboard.writeText("3f2a7e9c4b0d7e1a9f4c8b2d5e6a1c7f0b9e2d4a8");
                          setCopiedHash(true);
                          setTimeout(() => setCopiedHash(false), 2000);
                        }
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-[#1747E8] font-semibold text-[10px] transition-colors shrink-0 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedHash ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                </div>

                {/* Right Inner Block: Maker & Checker Actions */}
                <div className="sm:col-span-5 rounded-2xl bg-white border border-slate-200 p-3.5 space-y-3.5 shadow-2xs flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#102A56] pb-2 border-b border-slate-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1747E8]" />
                      <span>Maker &amp; Checker</span>
                    </div>

                    {/* Maker Info */}
                    <div className="mt-2.5 space-y-1">
                      <div className="text-[10px] font-semibold uppercase text-slate-400 tracking-wider">
                        Uploaded by (Maker)
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80"
                          alt="Imran Qureshi"
                          className="w-7 h-7 rounded-full object-cover border border-slate-200"
                        />
                        <div className="text-xs">
                          <div className="font-bold text-[#102A56] leading-tight">Imran Qureshi</div>
                          <div className="text-[10px] text-slate-500 leading-tight">Visa Processor</div>
                        </div>
                      </div>
                      <div className="text-[9.5px] font-mono text-slate-400 pl-9">
                        12 Sep 2026, 10:24 AM
                      </div>
                    </div>

                    {/* Checker Info */}
                    <div className="mt-3 space-y-1">
                      <div className="text-[10px] font-semibold uppercase text-slate-400 tracking-wider">
                        Pending Authorization (Checker)
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80"
                          alt="Sarah Jenkins"
                          className="w-7 h-7 rounded-full object-cover border border-slate-200"
                        />
                        <div className="text-xs">
                          <div className="font-bold text-[#102A56] leading-tight">Sarah Jenkins</div>
                          <div className="text-[10px] text-slate-500 leading-tight">Senior Compliance Officer</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decision Action Buttons */}
                  <div className="space-y-2 pt-1">
                    {decisionState === "authorized" ? (
                      <div className="py-2.5 px-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold text-center flex items-center justify-center gap-1.5 animate-in fade-in">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Authorized &amp; Passed!</span>
                      </div>
                    ) : decisionState === "rejected" ? (
                      <div className="py-2.5 px-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-semibold text-center flex items-center justify-center gap-1.5 animate-in fade-in">
                        <X className="w-4 h-4 text-rose-600" />
                        <span>Rejected / Resubmission Sent</span>
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={() => setDecisionState("authorized")}
                          className="w-full py-2.5 px-3 rounded-xl bg-[#10B981] hover:bg-emerald-600 text-white font-semibold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Authorize &amp; Pass</span>
                        </button>
                        <button
                          onClick={() => setDecisionState("rejected")}
                          className="w-full py-2.5 px-3 rounded-xl bg-[#EF4444] hover:bg-rose-600 text-white font-semibold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                        >
                          <X className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Reject / Resubmit</span>
                        </button>
                      </>
                    )}
                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                      <button
                        onClick={onOpenDemo}
                        className="text-[#1747E8] font-semibold hover:underline cursor-pointer"
                      >
                        View Full Document →
                      </button>
                      <span className="text-slate-300">• • •</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
            {/* Numbered Pill Badge */}
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-blue-100 text-[#1747E8] font-bold text-xs font-mono">
                02
              </span>
              <span className="px-3 py-1 rounded-full bg-[#EEF4FF] border border-blue-200 text-[#1747E8] text-xs font-semibold tracking-wider uppercase">
                DOCUMENT GOVERNANCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#102A56] tracking-tight leading-tight">
              Two-Tier Maker-Checker<br className="hidden sm:inline" /> Compliance
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Every document is routed through a strict two-tier authorization flow. Prevent errors, ensure authenticity, and maintain a complete audit trail.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1747E8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium text-slate-800">AI-powered document data extraction</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1747E8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium text-slate-800">Configurable document rules per visa type</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1747E8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium text-slate-800">Mandatory supervisor authorization</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1747E8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium text-slate-800">Immutable audit logs with SHA-256 hashing</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="/governance"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1747E8] hover:text-blue-800 transition-colors group cursor-pointer"
              >
                <span>Explore Document Governance</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

        {/* =========================================================================
            FEATURE 3: Automation & WhatsApp (Text Left, UI Right)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-5">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] border border-blue-200 text-[#1747E8] text-xs font-semibold tracking-wider uppercase">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>AUTOMATION &amp; WHATSAPP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#102A56] tracking-tight leading-tight">
              Real-Time WhatsApp<br className="hidden sm:inline" /> Automation
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Event-driven notifications keep your candidates and clients informed at every step. Reduce manual follow-ups and deliver a premium client experience.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1747E8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium text-slate-800">Automated status updates</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1747E8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium text-slate-800">Configurable message templates</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1747E8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium text-slate-800">Two-way communication history</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1747E8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium text-slate-800">Supports media, PDF &amp; document sharing</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1747E8] hover:text-blue-800 transition-colors group cursor-pointer"
              >
                <span>Explore Communication Tools</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right UI Element: Unified Card Container Matching Feature 1 & 2 */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#F4F7FE] border border-slate-200/90 shadow-[0_12px_40px_rgba(16,42,86,0.06)] overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-slate-200/70 px-5 sm:px-6 pt-5 sm:pt-6 bg-white/70 backdrop-blur-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#102A56]">
                    WhatsApp Cloud API – Event Dispatch Engine
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Connected
                  </span>
                </div>
              </div>

              {/* Main Card Content */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 px-5 sm:px-6 py-4 items-center">
                
                {/* Left: Text highlights */}
                <div className="sm:col-span-6 flex flex-col gap-3">
                  
                  {/* Card 1: Live Trigger */}
                  <div className="p-3.5 rounded-xl bg-white/95 border border-blue-100/80 shadow-[0_2px_8px_rgba(16,42,86,0.04)]">
                    <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono font-bold text-[#1747E8] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>LIVE TRIGGER • DAG GATE</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#102A56]">
                      Instant Milestone Alerts
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5 font-sans">
                      Auto-dispatches status updates the second a pipeline gate is authorized.
                    </p>
                  </div>

                  {/* Card 2: Document Delivery */}
                  <div className="p-3.5 rounded-xl bg-white/95 border border-blue-100/80 shadow-[0_2px_8px_rgba(16,42,86,0.04)]">
                    <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      <span className="text-xs">📎</span>
                      <span>SECURE ATTACHMENT</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#102A56]">
                      Automated PDF Delivery
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5 font-sans">
                      Directly sends approved eVisas and appointment slips to candidate WhatsApp chat.
                    </p>
                  </div>

                  {/* Card 3: Metrics */}
                  <div className="p-3.5 rounded-xl bg-white/95 border border-blue-100/80 shadow-[0_2px_8px_rgba(16,42,86,0.04)]">
                    <div className="flex items-baseline justify-between mb-0.5">
                      <span className="text-xl font-bold font-serif text-[#102A56]">98.4%</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        &lt; 3 min read
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-800">
                      Zero Inbound Status Calls
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5 font-sans">
                      Keeps applicants continuously informed without manual staff intervention.
                    </p>
                  </div>

                </div>

                {/* Right: Phone Mockup Blended seamlessly into Container */}
                <div className="sm:col-span-6 flex items-center justify-center">
                  <div className="relative w-full max-w-[290px]">
                    <img
                      src="/images/whatsapp-phone-mockup.jpg"
                      alt="Vyxel Real-Time WhatsApp Automation on Mobile"
                      className="w-full h-auto object-contain block mix-blend-multiply"
                    />
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
