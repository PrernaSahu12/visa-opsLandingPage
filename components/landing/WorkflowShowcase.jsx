
import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Workflow,
  CheckCircle2,
  Clock,
  ArrowRight,
  User,
  Check,
} from "lucide-react";

export function WorkflowShowcase({ onOpenDemo }) {
  const [selectedStageIndex, setSelectedStageIndex] = useState(3);

  const stages = [
    {
      id: "intake",
      number: "01",
      name: "Candidate Intake",
      short: "Intake",
      subtext: "Profile snapshotted & validated",
      status: "COMPLETED",
      details: {
        taskRef: "T001 - Candidate Intake Snapshot",
        description:
          "Candidate passport bio, sponsor details, and visa category are locked into an immutable case snapshot.",
        candidate: "Rashid Tariq Al-Nuaimi",
        nationality: "India (Passport Category IN-1)",
        designation: "Senior Logistics Coordinator",
        sponsor: "Emirates Freight Solutions LLC",
        assignedUser: "Automated Ingestion Worker",
        inputs: ["Passport Copy (Bio)", "White Background Photo", "Sponsor Trade License"],
      },
    },
    {
      id: "case-created",
      number: "02",
      name: "Case Created & Materialized",
      short: "Case Materialization",
      subtext: "Versioned C4 DAG instantiated",
      status: "COMPLETED",
      details: {
        taskRef: "WorkflowCase Materialization v1.4",
        description:
          "The engine binds the case to published template 'Dubai / Inside-UAE C4'. 41 leaf tasks and dependency links are snapshotted.",
        template: "Dubai-Inside-UAE-C4 (v1.4.0)",
        leafTasksCount: "41 Actionable Leaf Tasks",
        executionRule: "dependsOn is sole blocking authority (order is presentation only)",
        assignedUser: "Workflow Case Engine",
        inputs: ["DocumentRequirementRule evaluated", "Resolver Version 2.1 snapshot"],
      },
    },
    {
      id: "doc-collection",
      number: "03",
      name: "Document Collection",
      short: "Doc Collection",
      subtext: "Required uploads resolved",
      status: "COMPLETED",
      details: {
        taskRef: "T008 - Collect Ministry Documents",
        description:
          "Case-level document resolver matches applicant designations to enforce attested degree and medical insurance prerequisites.",
        matchedRules: ["RULE-DEGREE-ATTEST-01", "RULE-PCC-NOT-REQUIRED", "RULE-INS-BASIC"],
        totalRequired: "5 Mandatory Documents",
        collectedCount: "5/5 Verified",
        assignedUser: "Priya Sharma (Document Specialist)",
        inputs: ["Attested Degree Certificate", "Labour Contract Offer", "Valid Emirates ID of Sponsor"],
      },
    },
    {
      id: "maker-review",
      number: "04",
      name: "Maker Review",
      short: "Maker Gate",
      subtext: "First-line compliance check",
      status: "IN_PROGRESS",
      details: {
        taskRef: "T012 - Maker Document Verification",
        description:
          "Primary operator verifies document legibility, Arabic translation accuracy, and ministry portal requirements.",
        action: "Review Passport Bio & Labour Offer Letter",
        reviewerRole: "Maker (Visa Processor)",
        workScope: "ASSIGNED_ONLY",
        assignedUser: "Zaid Farooq (Pool Member #2)",
        poolStrategy: "ROUND_ROBIN pointer advanced atomically",
        inputs: ["OCR Check: PASSED", "Expiry Check: Valid > 6 Months", "Designation Code: Verified"],
      },
    },
    {
      id: "checker-approval",
      number: "05",
      name: "Checker Approval",
      short: "Checker Sign-off",
      subtext: "Secondary authorization",
      status: "SCHEDULED",
      details: {
        taskRef: "T013 - Checker Authorization Sign-off",
        description:
          "Supervisor or Team Lead verifies Maker approvals before the case can progress to government portal submission.",
        action: "Dual-Control Compliance Check",
        reviewerRole: "Checker (Operations Supervisor)",
        workScope: "ALL_COMPANY",
        assignedUser: "Nadia Rahman (Ops Manager)",
        inputs: ["Segregation of duties check: Maker ≠ Checker enforced server-side"],
      },
    },
    {
      id: "processing",
      number: "06",
      name: "Government Processing",
      short: "Processing",
      subtext: "Entry permit, medical gate & EID",
      status: "PENDING",
      details: {
        taskRef: "T025 - Medical Fitness Exam & ICP Gate",
        description:
          "Government processing lifecycle: T002 Entry Permit, T014 Status Change, and T025 Medical Result Gate.",
        medicalGateOutcomes: "PASS (closes attempt) | RESAMPLE (dynamic T026 gate) | UNFIT (terminates)",
        action: "ICP Portal submission & biometric tracking",
        assignedUser: "Dubai Government Processing Pool",
        inputs: ["ICP Reference #892-004-921", "T025 Medical Result Gate: PASS Required"],
      },
    },
    {
      id: "communication",
      number: "07",
      name: "Status Communication",
      short: "WhatsApp Dispatch",
      subtext: "Real-time candidate notifications",
      status: "PENDING",
      details: {
        taskRef: "T035 - Automated Milestone Dispatch",
        description:
          "Upon T025 PASS or Visa Stamping, an automated WhatsApp dispatch alerts the candidate and sponsoring employer.",
        channel: "WhatsApp Business API + SMS Webhook",
        template: "TEMPLATE_VISA_APPROVAL_DUBAI",
        assignedUser: "Automated Communication Hub",
        inputs: ["Instant status notification with PDF download link", "AuditLog write confirmed"],
      },
    },
  ];

  const currentStage = stages[selectedStageIndex];

  return (
    <section id="workflow" className="py-24 bg-[#F7F9FC] border-t border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WORKFLOW EXECUTION ENGINE"
          title="From Candidate Intake to Visa Decision — One Workflow."
          description="Every case executes through a deterministic, versioned DAG. Tasks unlock only when prerequisite dependencies are satisfied, eliminating process deviation."
          align="center"
        />

        {/* Linear Workflow Journey Bar */}
        <div className="mt-14 overflow-x-auto pb-4 pt-2">
          <div className="flex items-center min-w-[780px] justify-between relative">
            {/* Connecting Track Line */}
            <div className="absolute top-5 left-6 right-6 h-0.5 bg-[#E2E8F0] -z-0" />

            {stages.map((stg, idx) => {
              const isSelected = idx === selectedStageIndex;
              const isPast = idx < selectedStageIndex;
              return (
                <button
                  key={stg.id}
                  onClick={() => setSelectedStageIndex(idx)}
                  className="flex flex-col items-center relative z-10 group focus:outline-none px-2"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-[#1747E8] text-white shadow-md ring-4 ring-[#1747E8]/20 scale-105"
                        : isPast
                        ? "bg-[#18A875]/10 text-[#18A875] border border-[#18A875]/30"
                        : "bg-white text-[#64748B] border border-[#E2E8F0] group-hover:border-[#1747E8]"
                    }`}
                  >
                    {isPast ? <Check className="w-4 h-4" /> : stg.number}
                  </div>
                  <div className="mt-2 text-center">
                    <div
                      className={`text-xs font-bold whitespace-nowrap ${
                        isSelected
                          ? "text-[#1747E8]"
                          : isPast
                          ? "text-[#102A56]"
                          : "text-[#64748B]"
                      }`}
                    >
                      {stg.short}
                    </div>
                    <div className="text-[10px] text-[#64748B] font-mono hidden sm:block">
                      {stg.status}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Inspection Panel */}
        <div className="mt-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-card p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Case Meta (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="brand" size="md">
                  STAGE {currentStage.number} OF 07
                </Badge>
                <Badge
                  variant={
                    currentStage.status === "COMPLETED"
                      ? "success"
                      : currentStage.status === "IN_PROGRESS"
                      ? "warning"
                      : "neutral"
                  }
                  size="md"
                >
                  {currentStage.status}
                </Badge>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#102A56]">
                  {currentStage.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#1747E8] mt-1 font-mono font-medium">
                  {currentStage.details.taskRef}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pt-1">
                {currentStage.details.description}
              </p>

              <div className="pt-2 border-t border-[#E2E8F0] space-y-2 text-xs font-mono">
                <div className="flex justify-between text-[#64748B]">
                  <span>Assigned Actor:</span>
                  <span className="text-[#102A56] font-semibold">
                    {currentStage.details.assignedUser}
                  </span>
                </div>
                {currentStage.details.workScope && (
                  <div className="flex justify-between text-[#64748B]">
                    <span>Work Scope:</span>
                    <Badge variant="neutral" size="sm">
                      {currentStage.details.workScope}
                    </Badge>
                  </div>
                )}
                {currentStage.details.executionRule && (
                  <div className="flex justify-between text-[#64748B]">
                    <span>DAG Authority:</span>
                    <span className="text-[#1747E8] font-semibold">dependsOn only</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Live Operational Simulation UI (7 cols) */}
            <div className="lg:col-span-7 bg-[#F7F9FC] rounded-xl border border-[#E2E8F0] p-5 space-y-4 font-sans text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#1747E8]" />
                  <span className="font-bold text-[#102A56]">
                    Candidate Case Snapshot
                  </span>
                  <span className="font-mono text-[#64748B]">
                    #CAS-2026-DXB-9481
                  </span>
                </div>
                <Badge variant="success" size="sm">
                  Dubai C4 Verified
                </Badge>
              </div>

              {/* Case Attributes */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
                  <div className="text-[10px] text-[#64748B] uppercase font-mono font-medium">
                    Candidate Name
                  </div>
                  <div className="font-bold text-[#102A56] mt-0.5">
                    Rashid Tariq Al-Nuaimi
                  </div>
                  <div className="text-[10px] text-[#64748B]">
                    Nationality: India • Category 1
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
                  <div className="text-[10px] text-[#64748B] uppercase font-mono font-medium">
                    Sponsoring Entity
                  </div>
                  <div className="font-bold text-[#102A56] mt-0.5 truncate">
                    Emirates Freight Solutions LLC
                  </div>
                  <div className="text-[10px] text-[#64748B]">
                    MOHRE Company Code: 902488
                  </div>
                </div>
              </div>

              {/* Stage Specific Input Checklist */}
              <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] space-y-2">
                <div className="text-[11px] font-bold text-[#102A56] flex items-center justify-between">
                  <span>Prerequisite Gating & Inputs</span>
                  <span className="font-mono text-[10px] text-[#1747E8]">
                    dependsOn Satisfied
                  </span>
                </div>

                <div className="space-y-1.5">
                  {currentStage.details.inputs.map((inp, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[11px] text-[#172B4D] font-mono"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#18A875] shrink-0" />
                      <span>{inp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Simulation Bar */}
              <div className="pt-2 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#64748B] font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-[#F4B740]" />
                  <span>Audit Timestamp: 2026-09-18 12:44:19 GST</span>
                </div>
                <button
                  onClick={() =>
                    setSelectedStageIndex((prev) =>
                      prev < stages.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="px-3 py-1.5 rounded-lg bg-[#EEF4FF] hover:bg-[#1747E8] hover:text-white text-[#1747E8] border border-[#1747E8]/20 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Simulate Next Transition</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
