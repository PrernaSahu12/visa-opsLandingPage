"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import {
  Users,
  FileCheck,
  Workflow,
  MessageSquare,
  Clock,
  Search,
} from "lucide-react";

export function ProductShowcase() {
  const [activeView, setActiveView] = useState("candidates");

  const views = [
    { id: "candidates", label: "Candidate Registry", icon: Users },
    { id: "documents", label: "Document Review Queue", icon: FileCheck },
    { id: "workflow", label: "Workflow Timeline", icon: Workflow },
    { id: "whatsapp", label: "WhatsApp Activity", icon: MessageSquare },
    { id: "workforce", label: "HR & Attendance", icon: Clock },
  ];

  return (
    <section id="showcase" className="py-24 bg-[#F7F9FC] border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ENTERPRISE COMMAND CONSOLE"
          title="See Your Entire Operation at a Glance."
          description="A unified operational cockpit designed for agency founders, operational directors, and case processors to monitor pipelines without tab switching."
          align="center"
        />

        {/* Console Tab Selector */}
        <div className="mt-12 flex items-center justify-center">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E2E8F0] shadow-subtle">
            {views.map((v) => {
              const Icon = v.icon;
              const isSelected = activeView === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveView(v.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-[#1747E8] text-white shadow-sm"
                      : "text-[#64748B] hover:text-[#102A56] hover:bg-[#F7F9FC]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{v.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Console Window */}
        <div className="mt-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-card overflow-hidden">
          {/* Console Header Bar */}
          <div className="px-6 py-4 bg-white border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#18A875] animate-pulse" />
              <span className="text-xs font-mono font-medium text-[#102A56]">
                Tenant Context: Apex Global Migration LLC • UAE Inside-UAE C4 Route
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#64748B]" />
                <input
                  type="text"
                  readOnly
                  placeholder="Filter by candidate, passport, or case ID..."
                  className="pl-8 pr-4 py-1.5 bg-[#F7F9FC] border border-[#E2E8F0] rounded-lg text-xs text-[#172B4D] w-64 focus:outline-none"
                />
              </div>
              <Badge variant="brand" size="sm">
                Live Data Stream
              </Badge>
            </div>
          </div>

          {/* Dynamic Console Body */}
          <div className="p-6 overflow-x-auto min-h-[380px] bg-white">
            {/* View 1: Candidates Table */}
            {activeView === "candidates" && (
              <div className="min-w-[700px] space-y-3 font-sans">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-[#64748B] border-b border-[#E2E8F0] pb-2 font-mono text-[11px]">
                      <th className="pb-3 font-bold">CANDIDATE</th>
                      <th className="pb-3 font-bold">CASE REF</th>
                      <th className="pb-3 font-bold">STAGE</th>
                      <th className="pb-3 font-bold">ASSIGNEE</th>
                      <th className="pb-3 font-bold">DOCUMENTS</th>
                      <th className="pb-3 font-bold text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {[
                      {
                        name: "Tariq Al-Nuaimi",
                        nat: "India • Logistics Lead",
                        ref: "CAS-2026-DXB-9481",
                        stage: "Phase 5: Medical Test (T025)",
                        assignee: "Sarah Jenkins [Pool #1]",
                        docs: "4 / 4 Verified",
                        status: "IN_PROGRESS",
                        badge: "warning",
                      },
                      {
                        name: "Ayesha Malik",
                        nat: "Pakistan • Financial Analyst",
                        ref: "CAS-2026-DXB-9482",
                        stage: "Phase 7: Emirates ID (T038)",
                        assignee: "Zaid Farooq [Pool #1]",
                        docs: "6 / 6 Verified",
                        status: "READY",
                        badge: "brand",
                      },
                      {
                        name: "Johnathan Mercer",
                        nat: "UK • Managing Director",
                        ref: "CAS-2026-DXB-9483",
                        stage: "Phase 8: Residence Visa Stamped",
                        assignee: "Sarah Jenkins [Pool #1]",
                        docs: "All Clear",
                        status: "COMPLETED",
                        badge: "success",
                      },
                      {
                        name: "Fatima Al-Zahra",
                        nat: "Jordan • Operations Manager",
                        ref: "CAS-2026-DXB-9484",
                        stage: "Phase 3: Labour Contract (T008)",
                        assignee: "Priya Sharma [Pool #2]",
                        docs: "2 Pending Review",
                        status: "IN_PROGRESS",
                        badge: "warning",
                      },
                      {
                        name: "Chen Wei",
                        nat: "China • Tech Specialist",
                        ref: "CAS-2026-DXB-9485",
                        stage: "Phase 1: Candidate Intake",
                        assignee: "Auto-Assignment Pending",
                        docs: "Intake Form",
                        status: "READY",
                        badge: "brand",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[#F7F9FC] transition-colors"
                      >
                        <td className="py-3.5 pr-4">
                          <div className="font-bold text-[#102A56]">
                            {row.name}
                          </div>
                          <div className="text-[10px] text-[#64748B]">
                            {row.nat}
                          </div>
                        </td>
                        <td className="py-3.5 font-mono text-[11px] font-semibold text-[#1747E8]">
                          {row.ref}
                        </td>
                        <td className="py-3.5 text-[#172B4D] font-medium">{row.stage}</td>
                        <td className="py-3.5 font-mono text-[11px] text-[#64748B]">
                          {row.assignee}
                        </td>
                        <td className="py-3.5 font-mono text-[11px] text-[#18A875] font-semibold">
                          {row.docs}
                        </td>
                        <td className="py-3.5 text-right">
                          <Badge variant={row.badge} size="sm">
                            {row.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* View 2: Document Review Queue */}
            {activeView === "documents" && (
              <div className="space-y-3 font-sans">
                <div className="flex justify-between items-center text-xs text-[#64748B] pb-2 border-b border-[#E2E8F0] font-mono">
                  <span>UNPROCESSED COMPLIANCE QUEUE</span>
                  <span>DUAL-CONTROL PROTOCOL ENFORCED</span>
                </div>
                {[
                  {
                    file: "Passport_Bio_Rashid_AlNuaimi.pdf",
                    candidate: "Rashid Al-Nuaimi • #CAS-9481",
                    rule: "RULE-PASSPORT-VALID-6M",
                    makerStatus: "Passed by Zaid F.",
                    checkerStatus: "Pending Nadia R.",
                    badge: "warning",
                  },
                  {
                    file: "Degree_Attested_Ayesha_Malik.pdf",
                    candidate: "Ayesha Malik • #CAS-9482",
                    rule: "RULE-DEGREE-ATTEST-01",
                    makerStatus: "Passed by Zaid F.",
                    checkerStatus: "Authorized",
                    badge: "success",
                  },
                  {
                    file: "Labour_Contract_Offer_Letter.pdf",
                    candidate: "Fatima Al-Zahra • #CAS-9484",
                    rule: "RULE-MOHRE-OFFER-STAMP",
                    makerStatus: "In Review",
                    checkerStatus: "Blocked on Maker",
                    badge: "neutral",
                  },
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#E2E8F0] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center font-mono text-[10px] font-bold">
                        PDF
                      </div>
                      <div>
                        <div className="font-mono font-bold text-[#102A56]">
                          {doc.file}
                        </div>
                        <div className="text-[10px] text-[#64748B]">
                          {doc.candidate} • {doc.rule}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right text-[11px] font-mono">
                        <div className="text-[#18A875] font-semibold">{doc.makerStatus}</div>
                        <div className="text-[#64748B]">{doc.checkerStatus}</div>
                      </div>
                      <Badge variant={doc.badge} size="sm">
                        Queue Active
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* View 3: Workflow Timeline */}
            {activeView === "workflow" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-[#64748B] font-mono pb-2 border-b border-[#E2E8F0]">
                  <span>DUBAI INSIDE-UAE C4 • RUNTIME DAG EXECUTION</span>
                  <span className="text-[#18A875] font-semibold">dependsOn Integrity: 100%</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                  {[
                    {
                      id: "Phase 1 - 2",
                      title: "Intake & Entry Permit",
                      tasks: "T001 - T006",
                      state: "COMPLETED",
                      badge: "success",
                    },
                    {
                      id: "Phase 3 - 4",
                      title: "Status Change & Contract",
                      tasks: "T007 - T020",
                      state: "COMPLETED",
                      badge: "success",
                    },
                    {
                      id: "Phase 5",
                      title: "Medical Fitness Gate",
                      tasks: "T025 Result (PASS)",
                      state: "IN_PROGRESS",
                      badge: "warning",
                    },
                    {
                      id: "Phase 6 - 8",
                      title: "Emirates ID & Stamping",
                      tasks: "T027 - T041",
                      state: "SCHEDULED",
                      badge: "neutral",
                    },
                  ].map((p, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F7F9FC] border border-[#E2E8F0] space-y-2"
                    >
                      <div className="flex justify-between items-center font-mono text-[10px] text-[#64748B]">
                        <span>{p.id}</span>
                        <Badge variant={p.badge} size="sm">
                          {p.state}
                        </Badge>
                      </div>
                      <div className="font-bold text-[#102A56] text-xs">{p.title}</div>
                      <div className="font-mono text-[11px] text-[#1747E8] font-semibold">
                        {p.tasks}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 4: WhatsApp Activity */}
            {activeView === "whatsapp" && (
              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center text-[#64748B] font-mono pb-2 border-b border-[#E2E8F0]">
                  <span>OUTBOUND DISPATCH LOGS</span>
                  <span className="text-[#18A875] font-semibold">DELIVERY SLA: 100%</span>
                </div>
                {[
                  {
                    event: "T025 Medical Result = PASS",
                    recipient: "Tariq Al-Nuaimi (+971 50 849 2011)",
                    template: "ae_medical_fitness_clearance_v2",
                    time: "11:42 AM",
                    status: "Delivered & Read",
                  },
                  {
                    event: "T002 Entry Permit Issued",
                    recipient: "Ayesha Malik (+971 52 391 0024)",
                    template: "ae_entry_permit_issued_v1",
                    time: "10:15 AM",
                    status: "Delivered & Read",
                  },
                  {
                    event: "T038 Emirates ID Appointment",
                    recipient: "Johnathan Mercer (+971 55 901 3328)",
                    template: "ae_eid_biometric_reminder_v1",
                    time: "09:30 AM",
                    status: "Delivered & Read",
                  },
                ].map((msg, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#E2E8F0] flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-[#102A56]">{msg.event}</div>
                      <div className="text-[10px] text-[#64748B] font-mono">
                        To: {msg.recipient} • Template: {msg.template}
                      </div>
                    </div>
                    <div className="text-right font-mono text-[11px]">
                      <div className="text-[#18A875] font-semibold">{msg.status}</div>
                      <div className="text-[#64748B]">{msg.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* View 5: Workforce Attendance */}
            {activeView === "workforce" && (
              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center text-[#64748B] font-mono pb-2 border-b border-[#E2E8F0]">
                  <span>AGENCY OPERATIONS ROSTER</span>
                  <span className="text-[#18A875] font-semibold">POOL CAPACITY: OPTIMAL</span>
                </div>
                {[
                  {
                    staff: "Sarah Jenkins",
                    title: "Senior Visa Officer",
                    load: "12 Active Leaf Tasks",
                    checkIn: "08:54 AM",
                    status: "On Duty",
                    badge: "success",
                  },
                  {
                    staff: "Zaid Farooq",
                    title: "Maker Review Specialist",
                    load: "8 Documents Pending",
                    checkIn: "09:02 AM",
                    status: "On Duty",
                    badge: "success",
                  },
                  {
                    staff: "Nadia Rahman",
                    title: "Operations Manager",
                    load: "Supervisory / Approvals",
                    checkIn: "08:45 AM",
                    status: "On Duty",
                    badge: "success",
                  },
                  {
                    staff: "Vikram Malhotra",
                    title: "Typing & Biometrics Liaison",
                    load: "Al Yalayis Center",
                    checkIn: "09:12 AM",
                    status: "On Field",
                    badge: "brand",
                  },
                ].map((st, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#E2E8F0] flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-[#102A56]">{st.staff}</div>
                      <div className="text-[10px] text-[#64748B] font-mono">
                        {st.title} • Current Workload: {st.load}
                      </div>
                    </div>
                    <div className="text-right font-mono text-[11px]">
                      <Badge variant={st.badge} size="sm">
                        {st.status}
                      </Badge>
                      <div className="text-[#64748B] mt-1">In: {st.checkIn}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
