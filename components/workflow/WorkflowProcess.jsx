
import React, { useState } from "react";
import {
  FileText,
  Workflow,
  ShieldCheck,
  Send,
  ArrowRight,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function WorkflowProcess({ onOpenDemo }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "ingestion",
      stepNum: "01",
      badgeTitle: "Candidate Intake & Dossier Data",
      title: "Ingesting Candidate & Case Dossiers",
      desc1:
        "Sponsors, candidates, and recruitment agents can submit identity documents and biographical data via direct API, bulk CSV imports, processor portal, or candidate self-service intake forms.",
      desc2:
        "Every dossier is cryptographically checked for format integrity and duplicate passport numbers before reaching operational workstreams, eliminating re-entry bottlenecks.",
      linkText: "Learn more about how Vyxel ingests applicant dossiers →",
      inputs: [
        { label: "Bulk Excel / CSV", color: "#3B82F6" },
        { label: "WhatsApp Bot Intake", color: "#10B981" },
        { label: "Agency Processor Upload", color: "#6366F1" },
        { label: "Employer Portal API", color: "#F59E0B" },
      ],
      outputTitle: "Vyxel DAG Ingestion Engine",
    },
    {
      id: "dag-materialization",
      stepNum: "02",
      badgeTitle: "Prerequisite Graph Materialization",
      title: "Deterministic Task Materialization",
      desc1:
        "Upon case creation, Vyxel computes the exact directed acyclic graph (DAG) for the destination country and profession tier. Up to 41 leaf tasks are generated with immutable dependsOn blocking gates.",
      desc2:
        "Downstream tasks (like Medical Gate or Visa Stamping) remain strictly locked until prerequisite upstream documents are verified, making skipped steps structurally impossible.",
      linkText: "Learn more about deterministic DAG execution →",
      inputs: [
        { label: "Profession Tier Rules", color: "#3B82F6" },
        { label: "Nationality Requirements", color: "#8B5CF6" },
        { label: "Sponsor Quota Verification", color: "#10B981" },
        { label: "dependsOn Gate Resolvers", color: "#EF4444" },
      ],
      outputTitle: "Immutable Case Execution DAG",
    },
    {
      id: "maker-checker",
      stepNum: "03",
      badgeTitle: "Maker-Checker Document Governance",
      title: "Two-Tier Verification & Compliance",
      desc1:
        "Uploaded documents enter a dedicated review queue. Primary operators act as the 'Maker' verifying clarity and translation. Senior supervisors act as the 'Checker' verifying legal eligibility.",
      desc2:
        "Role segregation guarantees zero single-point sign-offs, preventing costly ministry portal rejections and license fines for your agency.",
      linkText: "Learn more about Maker-Checker dual authorization →",
      inputs: [
        { label: "Maker Document Audit", color: "#3B82F6" },
        { label: "Checker Supervisor Review", color: "#10B981" },
        { label: "Audit Hash Logging", color: "#6366F1" },
        { label: "Tamper-Resistant Proofs", color: "#F59E0B" },
      ],
      outputTitle: "Verified Regulatory Dossier",
    },
    {
      id: "automated-dispatch",
      stepNum: "04",
      badgeTitle: "Portal Submission & WhatsApp Dispatch",
      title: "Automated Ministry & Client Dispatch",
      desc1:
        "Once approved by the Checker, files are transmitted to ministry portals (MOHRE, ICP, Jawazat) via automated pipelines. Case milestones immediately trigger verified WhatsApp updates.",
      desc2:
        "Candidates and sponsoring HR managers receive automatic biometric appointment details, medical slips, and visa PDFs without staff writing manual texts.",
      linkText: "Learn more about automated case notifications →",
      inputs: [
        { label: "Ministry Portal Sync", color: "#3B82F6" },
        { label: "WhatsApp Template Hydration", color: "#10B981" },
        { label: "Candidate Status Feed", color: "#8B5CF6" },
        { label: "Sponsor HR Dashboard", color: "#F59E0B" },
      ],
      outputTitle: "Live Operational Transmission",
    },
  ];

  const current = steps[activeStep];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Reference Image 3 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#102A56] font-normal tracking-tight">
            How the Vyxel Workflow Works
          </h2>
          <div className="mt-3 text-sm sm:text-base font-medium text-[#1747E8]">
            {current.badgeTitle}
          </div>

          {/* Interactive Step Switcher Tabs */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] gap-1.5">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                  activeStep === idx
                    ? "bg-[#0A2540] text-white shadow-sm"
                    : "text-[#475569] hover:text-[#102A56] hover:bg-white/60"
                }`}
              >
                Step {step.stepNum}: {step.id === "ingestion" ? "Intake" : step.id === "dag-materialization" ? "DAG Engine" : step.id === "maker-checker" ? "Governance" : "Dispatch"}
              </button>
            ))}
          </div>
        </div>

        {/* Process Card Layout matching Reference Image 3 */}
        <div className="relative max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Card: Ingesting / Step Explanation Card */}
            <div className="lg:col-span-6 relative">
              <div className="p-8 sm:p-10 rounded-[28px] bg-[#F8FAFD] border border-[#DCE7F3] shadow-sm relative">
                
                {/* Pointer Tip on Right Edge for Desktop */}
                <div className="hidden lg:block absolute right-0 top-12 translate-x-1/2 w-4 h-4 bg-[#F8FAFD] border-t border-r border-[#DCE7F3] rotate-45" />

                <h3 className="text-2xl sm:text-[26px] font-serif text-[#102A56] font-normal leading-snug">
                  {current.title}
                </h3>

                <p className="mt-5 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-sans">
                  {current.desc1}
                </p>

                <p className="mt-4 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-sans">
                  {current.desc2}
                </p>

                <div className="mt-8 pt-4 border-t border-[#E2E8F0]">
                  <button
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1747E8] hover:text-[#123CC7] transition-colors group cursor-pointer"
                  >
                    <span>{current.linkText}</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Center Node Badge (Document/Workflow Icon in Navy Circle) */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center relative">
              {/* Connecting Vertical Line */}
              <div className="absolute top-0 bottom-0 w-[2px] bg-[#DCE7F3]" />

              {/* Navy Icon Disc */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-[#0A2540] text-white flex items-center justify-center shadow-md border-2 border-white">
                <FileText className="w-5 h-5 text-blue-200" />
              </div>
            </div>

            {/* Right Side: Horizontal Input-to-Engine Flow Architecture Diagram */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 sm:p-8 rounded-[28px] bg-white border border-[#E2E8F0] shadow-sm">
                
                <div className="flex items-center justify-between gap-4">
                  
                  {/* Left Column: 4 Input Stream Pills */}
                  <div className="space-y-3 flex-1">
                    {current.inputs.map((inp, i) => (
                      <div
                        key={i}
                        className="relative flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#102A56] shadow-2xs group hover:border-[#1747E8] transition-colors"
                      >
                        <span className="truncate">{inp.label}</span>
                        {/* Connecting Point Bead */}
                        <div
                          className="w-2.5 h-2.5 rounded-full shrink-0 ml-2"
                          style={{ backgroundColor: inp.color }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Connecting Curved Lines Vector SVG */}
                  <div className="w-12 sm:w-16 h-40 shrink-0">
                    <svg viewBox="0 0 60 160" className="w-full h-full" fill="none">
                      <path d="M 0 20 C 30 20, 30 80, 60 80" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 3" />
                      <path d="M 0 60 C 30 60, 30 80, 60 80" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
                      <path d="M 0 100 C 30 100, 30 80, 60 80" stroke="#6366F1" strokeWidth="2" strokeDasharray="3 3" />
                      <path d="M 0 140 C 30 140, 30 80, 60 80" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
                      {/* Junction bead */}
                      <circle cx="60" cy="80" r="4" fill="#102A56" />
                    </svg>
                  </div>

                  {/* Right Column: Central Vyxel Engine Box */}
                  <div className="w-36 sm:w-44 p-4 rounded-2xl bg-[#06214A] text-white flex flex-col items-center justify-center text-center shadow-md shrink-0 border border-white/20">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-2">
                      <Workflow className="w-5 h-5 text-[#38BDF8]" />
                    </div>
                    <div className="text-xs font-bold tracking-wide">
                      VYXEL
                    </div>
                    <div className="text-[10px] text-blue-200 mt-0.5 leading-tight">
                      {current.outputTitle}
                    </div>
                  </div>

                </div>

                {/* Subtext info */}
                <div className="mt-5 pt-3 border-t border-[#F1F5F9] text-center text-[11px] text-[#64748B]">
                  Deterministic zero-deviation orchestration across all stages.
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
