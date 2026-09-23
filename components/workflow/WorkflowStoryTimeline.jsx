
import React, { useEffect, useRef, useState } from "react";
import {
  FileCheck2,
  Workflow,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Lock,
  Clock,
  Sparkles,
  Check,
  Send,
  UserCheck,
  FileText,
} from "lucide-react";

export function WorkflowStoryTimeline({ onOpenDemo }) {
  const containerRef = useRef(null);
  const storyListRef = useRef(null);
  const activeLineRef = useRef(null);
  const mobileActiveLineRef = useRef(null);

  const firstNodeRef = useRef(null);
  const lastNodeRef = useRef(null);
  const mobileFirstNodeRef = useRef(null);
  const mobileLastNodeRef = useRef(null);

  const [lineCoords, setLineCoords] = useState({ top: 0, height: 0 });
  const [mobileLineCoords, setMobileLineCoords] = useState({ top: 0, height: 0 });
  const [activeNodes, setActiveNodes] = useState([false, false, false, false]);

  const stages = [
    {
      id: "stage-01",
      stepNum: "01",
      eyebrow: "STAGE 01 · DOSSIER INGESTION",
      title: "Automated Dossier Intake & Format Validation",
      desc1:
        "Candidates and agents upload passports and attestations via self-service links or WhatsApp. Vyxel's AI engine instantly extracts data and validates format clarity before cases enter processing queues.",
      bullets: [
        "Eliminate 100% of manual data re-entry across disconnected portals",
        "Automatic duplicate passport collision and sponsor quota checks",
      ],
      icon: FileCheck2,
      linkText: "Explore Candidate Intake Engine →",
      visualPosition: "right",
      visual: (
        <div className="relative group">
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#2563EB]/10 via-[#38BDF8]/10 to-transparent blur-2xl -z-10 pointer-events-none" />
          
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden drop-shadow-[0_20px_45px_rgba(16,42,86,0.12)] transition-transform duration-500 group-hover:scale-[1.015]">
            <img
              src="/images/applicant-dossier-intake-laptop.png"
              alt="Applicant Dossier Intake & Automated OCR Extraction"
              className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl"
            />
          </div>
        </div>
      ),
    },
    {
      id: "stage-02",
      stepNum: "02",
      eyebrow: "STAGE 02 · DETERMINISTIC DAG ENGINE",
      title: "Dependency-Locked Case Materialization",
      desc1:
        "Vyxel materializes up to 41 leaf tasks in a Directed Acyclic Graph (DAG). Downstream gates remain locked until prerequisite upstream documents pass compliance checks.",
      bullets: [
        "Strict dependsOn rules prevent operators from skipping mandatory gates",
        "Dynamic routing branches based on nationality & visa tier",
      ],
      icon: Workflow,
      linkText: "Inspect DAG Routing Engine →",
      visualPosition: "left",
      visual: (
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(6,33,74,0.25)] border border-slate-200/80 bg-white transition-all duration-300 hover:shadow-[0_25px_60px_rgba(6,33,74,0.35)] group">
          <img
            src="/images/dag-execution-gates.png"
            alt="DAG Execution Gates Console"
            className="w-full h-auto object-cover block rounded-2xl sm:rounded-3xl"
          />
        </div>
      ),
    },
    {
      id: "stage-03",
      stepNum: "03",
      eyebrow: "STAGE 03 · MAKER-CHECKER GOVERNANCE",
      title: "Two-Tier Verification & Compliance Authorization",
      desc1:
        "Vyxel enforces strict segregation of duties. The case processor who compiles the application acts as the Maker; only an authorized operations supervisor can act as the Checker.",
      desc2:
        "No single user can prepare and approve their own file. Every review note, stamp, verification timestamp, and waiver is immutably logged for audit readiness.",
      bullets: [
        "Eliminates single-point operator fraud and accidental submission errors",
        "Custom DocumentRequirementRules dynamically flag missing attestations",
        "Tamper-resistant audit trails with supervisor override governance",
      ],
      icon: ShieldCheck,
      linkText: "Explore Maker-Checker Governance →",
      visualPosition: "right",
      visual: (
        <div className="rounded-2xl bg-white border border-[#DCE7F3] p-5 sm:p-6 shadow-[0_16px_40px_rgba(16,42,86,0.08)] space-y-4">
          <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <span className="text-xs font-bold text-[#102A56]">
                Dual-Authorization Protocol
              </span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">
              Tier-2 Enforced
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#102A56]">
                Phase 1: Maker Verification
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                Maker Approved
              </span>
            </div>
            <div className="text-[11px] text-[#64748B]">
              Actor: <strong className="text-[#102A56]">Zaid Farooq</strong> (Visa Processor)
            </div>
            <div className="text-[10px] text-emerald-600 font-mono bg-white p-2 rounded border border-emerald-100">
              ✓ Passport Expiry &gt; 6 Mos · Arabic Translation Attested · OK
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#EEF4FF] border border-[#2563EB]/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#102A56]">
                Phase 2: Checker Authorization
              </span>
              <span className="px-2 py-0.5 rounded bg-[#2563EB] text-white text-[10px] font-bold">
                Checker Cleared
              </span>
            </div>
            <div className="text-[11px] text-[#64748B]">
              Actor: <strong className="text-[#102A56]">Sara Al-Mansoor</strong> (Ops Supervisor)
            </div>
            <div className="text-[10px] text-[#2563EB] font-mono bg-white p-2 rounded border border-[#2563EB]/20">
              ✓ Sponsor Quota Audited · Ministry Transmission Authorized
            </div>
          </div>

          <div className="text-[11px] text-[#64748B] text-center pt-1">
            Zero single-operator sign-offs across all client cases.
          </div>
        </div>
      ),
    },
    {
      id: "stage-04",
      stepNum: "04",
      eyebrow: "STAGE 04 · AUTOMATED DISPATCH",
      title: "Real-Time Ministry Transmission & WhatsApp Alerts",
      desc1:
        "Approved dossiers are transmitted directly to ministry portals. Every milestone completion triggers pre-approved, verified WhatsApp notifications to candidates and employers.",
      desc2:
        "Eliminate 35% of daily operator time spent texting candidates about missing files or biometrics dates. Every text, PDF attachment, and delivery receipt is saved to the case file.",
      bullets: [
        "Automated event triggers for medical passed, biometrics, and entry permit",
        "Two-way WhatsApp messaging hub linked directly to processor queues",
        "Real-time candidate notification delivery audit history",
      ],
      icon: MessageSquare,
      linkText: "See WhatsApp Automation Suite →",
      visualPosition: "left",
      visual: (
        <div className="rounded-2xl bg-white border border-[#DCE7F3] p-5 sm:p-6 shadow-[0_16px_40px_rgba(16,42,86,0.08)] space-y-4">
          <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-[#102A56]">
                Vyxel WhatsApp Dispatcher
              </span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold flex items-center gap-1">
              <Check className="w-3 h-3 text-emerald-600" />
              Verified Business
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#E7F8ED] border border-emerald-200 text-xs space-y-2 text-[#0F5132]">
            <div className="flex items-center justify-between text-[10px] text-emerald-800/80 font-mono">
              <span>Event: T025 Medical Gate PASSED</span>
              <span>10:52 AM</span>
            </div>
            <p className="text-xs leading-relaxed font-sans text-[#0D3823]">
              &quot;Dear <strong>Tariq Al-Nuaimi</strong>, great news! Your Medical Fitness Assessment (DHA Ref #M-88391) has officially <strong>PASSED</strong>. Your Emirates ID Biometrics are scheduled for tomorrow at 09:30 AM at Al Yalayis ICP Center.&quot;
            </p>
            <div className="pt-2 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white text-emerald-800 text-[10px] font-bold border border-emerald-200 shadow-2xs">
                📄 View Medical Slip
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-emerald-800 text-[10px] font-bold border border-emerald-200 shadow-2xs">
                📍 Open ICP Center Map
              </span>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between text-[11px] text-[#64748B]">
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              ✓✓ Delivered &amp; Read in 1.2s
            </span>
            <span className="font-mono text-[10px]">Recipient: +971 50 *** 8921</span>
          </div>
        </div>
      ),
    },
  ];

  // Dynamic Line Measurement & Scroll Progress Engine
  useEffect(() => {
    const updateMetricsAndScroll = () => {
      if (!storyListRef.current) return;
      const parentRect = storyListRef.current.getBoundingClientRect();

      // Measure Desktop Line start and end strictly between first and last icon centers
      if (firstNodeRef.current && lastNodeRef.current) {
        const fRect = firstNodeRef.current.getBoundingClientRect();
        const lRect = lastNodeRef.current.getBoundingClientRect();

        const top = fRect.top + fRect.height / 2 - parentRect.top;
        const height = lRect.top + lRect.height / 2 - (fRect.top + fRect.height / 2);

        if (height > 0) {
          setLineCoords({ top, height });
        }
      }

      // Measure Mobile Line
      if (mobileFirstNodeRef.current && mobileLastNodeRef.current) {
        const fRect = mobileFirstNodeRef.current.getBoundingClientRect();
        const lRect = mobileLastNodeRef.current.getBoundingClientRect();

        const top = fRect.top + fRect.height / 2 - parentRect.top;
        const height = lRect.top + lRect.height / 2 - (fRect.top + fRect.height / 2);

        if (height > 0) {
          setMobileLineCoords({ top, height });
        }
      }

      // Scroll Progress Calculation based on viewport center hitting node 1 down to node 4
      if (firstNodeRef.current && lastNodeRef.current) {
        const fRect = firstNodeRef.current.getBoundingClientRect();
        const lRect = lastNodeRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const triggerY = windowHeight * 0.5;
        const startY = fRect.top + fRect.height / 2;
        const endY = lRect.top + lRect.height / 2;
        const totalDistance = endY - startY;

        let progress = 0;
        if (totalDistance > 0) {
          progress = (triggerY - startY) / totalDistance;
          progress = Math.min(1, Math.max(0, progress));
        }

        if (activeLineRef.current) {
          activeLineRef.current.style.transform = `scaleY(${progress})`;
        }
        if (mobileActiveLineRef.current) {
          mobileActiveLineRef.current.style.transform = `scaleY(${progress})`;
        }

        const thresholds = [0.01, 0.33, 0.66, 0.98];
        setActiveNodes(thresholds.map((t) => progress >= t));
      }
    };

    window.addEventListener("scroll", updateMetricsAndScroll, { passive: true });
    window.addEventListener("resize", updateMetricsAndScroll, { passive: true });
    
    // Immediate and staged measurements after render & layout settling
    updateMetricsAndScroll();
    const t1 = setTimeout(updateMetricsAndScroll, 50);
    const t2 = setTimeout(updateMetricsAndScroll, 200);
    const t3 = setTimeout(updateMetricsAndScroll, 600);

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && storyListRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateMetricsAndScroll();
      });
      resizeObserver.observe(storyListRef.current);
    }

    return () => {
      window.removeEventListener("scroll", updateMetricsAndScroll);
      window.removeEventListener("resize", updateMetricsAndScroll);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 bg-[#F8FAFC] border-t border-[#E2E8F0] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] border border-[#2563EB]/20 text-[11px] font-bold tracking-wider uppercase text-[#2563EB]">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            STEP-BY-STEP STORYTELLING PIPELINE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif text-[#102A56] font-normal tracking-tight">
            How Every Visa Case Progresses
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl mx-auto font-sans">
            Scroll down to see how Vyxel enforces deterministic progression from raw candidate intake to live government transmission.
          </p>
        </div>

        {/* Storytelling Timeline Container */}
        <div ref={storyListRef} className="relative max-w-6xl mx-auto">
          
          {/* DESKTOP CENTER VERTICAL TIMELINE CONNECTOR (Strictly Starts at Node 1 & Ends at Node 4) */}
          {lineCoords.height > 0 && (
            <div
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-[4px] pointer-events-none z-10"
              style={{
                top: `${lineCoords.top}px`,
                height: `${lineCoords.height}px`,
              }}
            >
              {/* Base Grey Line */}
              <div className="absolute inset-0 w-full h-full bg-[#D9E2EF] rounded-full" />
              
              {/* Active Scroll Progress Electric Blue Line */}
              <div
                ref={activeLineRef}
                className="absolute inset-0 w-full h-full bg-[#2563EB] rounded-full origin-top shadow-[0_0_12px_rgba(37,99,235,0.7)]"
                style={{ transform: "scaleY(0)" }}
              />
            </div>
          )}

          {/* MOBILE LEFT VERTICAL TIMELINE CONNECTOR (Strictly Starts at Node 1 & Ends at Node 4) */}
          {mobileLineCoords.height > 0 && (
            <div
              className="lg:hidden absolute left-5 sm:left-6 -translate-x-1/2 w-[4px] pointer-events-none z-10"
              style={{
                top: `${mobileLineCoords.top}px`,
                height: `${mobileLineCoords.height}px`,
              }}
            >
              {/* Base Grey Line */}
              <div className="absolute inset-0 w-full h-full bg-[#D9E2EF] rounded-full" />
              
              {/* Active Scroll Progress Electric Blue Line */}
              <div
                ref={mobileActiveLineRef}
                className="absolute inset-0 w-full h-full bg-[#2563EB] rounded-full origin-top shadow-[0_0_12px_rgba(37,99,235,0.7)]"
                style={{ transform: "scaleY(0)" }}
              />
            </div>
          )}

          {/* Alternating Story Sections */}
          <div className="space-y-24 sm:space-y-32">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeNodes[idx];

              return (
                <div
                  key={stage.id}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-start"
                >
                  
                  {/* DESKTOP CENTER CHECKPOINT NODE (Aligned with top of section) */}
                  <div
                    ref={idx === 0 ? firstNodeRef : idx === stages.length - 1 ? lastNodeRef : null}
                    className="hidden lg:flex absolute left-1/2 top-3 -translate-x-1/2 z-20 items-center justify-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#2563EB] text-white border-4 border-white shadow-[0_0_25px_rgba(37,99,235,0.65)] scale-115"
                          : "bg-white border-2 border-[#D9E2EF] text-[#94A3B8]"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isActive ? "text-white" : "text-[#94A3B8]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* MOBILE LEFT CHECKPOINT NODE */}
                  <div
                    ref={idx === 0 ? mobileFirstNodeRef : idx === stages.length - 1 ? mobileLastNodeRef : null}
                    className="lg:hidden absolute left-5 sm:left-6 top-3 -translate-x-1/2 z-20"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#2563EB] text-white border-2 border-white shadow-[0_0_18px_rgba(37,99,235,0.65)] scale-110"
                          : "bg-white border-2 border-[#D9E2EF] text-[#94A3B8]"
                      }`}
                    >
                      <Icon
                        className={`w-3.5 h-3.5 transition-colors duration-300 ${
                          isActive ? "text-white" : "text-[#94A3B8]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content Column & Visual Column with Responsive Margins */}
                  {stage.visualPosition === "right" ? (
                    <>
                      {/* Left: Text Content in Fintech-style Boxed Card */}
                      <div className="pl-12 sm:pl-16 lg:pl-0 w-full">
                        <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-[#DCE7F3] p-6 sm:p-8 shadow-[0_12px_35px_rgba(16,42,86,0.06)] space-y-4 hover:border-[#2563EB]/40 transition-colors">
                          {/* Pointer Notch pointing towards center timeline on desktop */}
                          <div className="hidden lg:block absolute -right-2 top-7 w-4 h-4 bg-white border-t border-r border-[#DCE7F3] rotate-45" />

                          <div className="text-xs font-bold tracking-wider text-[#2563EB] uppercase">
                            {stage.eyebrow}
                          </div>
                          <h3 className="text-2xl sm:text-[26px] font-serif text-[#102A56] font-normal leading-snug">
                            {stage.title}
                          </h3>
                          <p className="text-sm text-[#475569] leading-relaxed font-sans">
                            {stage.desc1}
                          </p>
                          {stage.desc2 && (
                            <p className="text-sm text-[#475569] leading-relaxed font-sans">
                              {stage.desc2}
                            </p>
                          )}

                          <ul className="space-y-2 pt-2 text-xs text-[#102A56]">
                            {stage.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="pt-3 border-t border-[#F1F5F9]">
                            <button
                              type="button"
                              onClick={onOpenDemo}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group cursor-pointer"
                            >
                              <span>{stage.linkText}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Right: Visual Component */}
                      <div className="pl-12 sm:pl-16 lg:pl-0 w-full">
                        {stage.visual}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left: Visual Component on Desktop */}
                      <div className="pl-12 sm:pl-16 lg:pl-0 w-full order-2 lg:order-1">
                        {stage.visual}
                      </div>

                      {/* Right: Text Content in Fintech-style Boxed Card */}
                      <div className="pl-12 sm:pl-16 lg:pl-0 w-full order-1 lg:order-2">
                        <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-[#DCE7F3] p-6 sm:p-8 shadow-[0_12px_35px_rgba(16,42,86,0.06)] space-y-4 hover:border-[#2563EB]/40 transition-colors">
                          {/* Pointer Notch pointing towards center timeline on desktop */}
                          <div className="hidden lg:block absolute -left-2 top-7 w-4 h-4 bg-white border-b border-l border-[#DCE7F3] rotate-45" />

                          <div className="text-xs font-bold tracking-wider text-[#2563EB] uppercase">
                            {stage.eyebrow}
                          </div>
                          <h3 className="text-2xl sm:text-[26px] font-serif text-[#102A56] font-normal leading-snug">
                            {stage.title}
                          </h3>
                          <p className="text-sm text-[#475569] leading-relaxed font-sans">
                            {stage.desc1}
                          </p>
                          {stage.desc2 && (
                            <p className="text-sm text-[#475569] leading-relaxed font-sans">
                              {stage.desc2}
                            </p>
                          )}

                          <ul className="space-y-2 pt-2 text-xs text-[#102A56]">
                            {stage.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="pt-3 border-t border-[#F1F5F9]">
                            <button
                              type="button"
                              onClick={onOpenDemo}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group cursor-pointer"
                            >
                              <span>{stage.linkText}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
