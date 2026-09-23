
import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Globe2,
  CheckCircle2,
  ArrowRight,
  Briefcase,
} from "lucide-react";

export function UseCases({ onOpenDemo, onOpenCreateWorkspace }) {
  return (
    <section id="solutions" className="py-24 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VERTICAL SOLUTIONS"
          title="Engineered for High-Volume Operations"
          description="Whether you run an international immigration practice or deploy thousands of outsourced workers, Vyxel fits your operational profile."
          align="center"
        />

        {/* Two Major Solution Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Immigration & Visa Agencies */}
          <div className="enterprise-card p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] text-[#1747E8] border border-[#1747E8]/20 flex items-center justify-center">
                  <Globe2 className="w-6 h-6" />
                </div>
                <Badge variant="brand" size="md">
                  Consultancies & Agencies
                </Badge>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#102A56]">
                  For Immigration & Visa Agencies
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                  Eliminate spreadsheet chaos and track applicant pipelines through strict government milestone DAGs, automated client WhatsApp alerts, and maker-checker document verification.
                </p>
              </div>

              {/* Core Features Checklist */}
              <div className="space-y-2.5 pt-2">
                {[
                  {
                    title: "Candidate & Sponsor Lifecycle Management",
                    desc: "Intake applicants, store company quotas, and maintain visa validity tracking.",
                  },
                  {
                    title: "Configurable Visa DAG Execution",
                    desc: "Materialize deterministic 41-step routes with strict leaf-task dependencies.",
                  },
                  {
                    title: "Dual-Control Document Governance",
                    desc: "Maker-Checker separation prevents submitting unverified passport scans.",
                  },
                  {
                    title: "Status-Driven WhatsApp Dispatcher",
                    desc: "Automate biometrics schedules, medical passes, and stamping notifications.",
                  },
                  {
                    title: "Processor Work Scope Isolation",
                    desc: "Lock junior agents to ASSIGNED_ONLY tasks while leads view all cases.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#102A56]">
                        {item.title}:{" "}
                      </span>
                      <span className="text-[#64748B]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0]">
              <Button
                variant="primary"
                className="w-full"
                onClick={onOpenCreateWorkspace}
                iconRight={ArrowRight}
              >
                Explore Visa Operations
              </Button>
            </div>
          </div>

          {/* Card 2: Manpower Outsourcing Firms */}
          <div className="enterprise-card p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] text-[#1747E8] border border-[#1747E8]/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <Badge variant="brand" size="md">
                  Staffing & Manpower
                </Badge>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#102A56]">
                  For Manpower Outsourcing Firms
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                  Consolidate high-volume labor deployment, compliance verification, operational staff attendance, and multi-branch WPS payroll into a single operational workspace.
                </p>
              </div>

              {/* Core Features Checklist */}
              <div className="space-y-2.5 pt-2">
                {[
                  {
                    title: "Batch Candidate Deployment Workflows",
                    desc: "Process hundreds of worker permits simultaneously without missing files.",
                  },
                  {
                    title: "Regulatory Document Compliance",
                    desc: "Enforce medical fitness results (T025), attested contracts, and insurance.",
                  },
                  {
                    title: "Integrated Operations HRMS",
                    desc: "Manage on-ground deployment staff, shift logs, and leave coverage.",
                  },
                  {
                    title: "Multi-Branch & Regional Operations",
                    desc: "Unify head office oversight across intake hubs and client work sites.",
                  },
                  {
                    title: "Automated Round-Robin Task Balancing",
                    desc: "Distribute incoming labor cases evenly across active duty processors.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#18A875] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#102A56]">
                        {item.title}:{" "}
                      </span>
                      <span className="text-[#64748B]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0]">
              <Button
                variant="secondary"
                className="w-full"
                onClick={onOpenDemo}
                iconRight={ArrowRight}
              >
                Explore Workforce Operations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
