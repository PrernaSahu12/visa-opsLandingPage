
import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import {
  MessageSquare,
  CheckCheck,
  ExternalLink,
} from "lucide-react";

export function WhatsAppAutomation() {
  const [selectedEvent, setSelectedEvent] = useState("medical-pass");

  const events = {
    "medical-pass": {
      eventTitle: "Task T025 Medical Result = PASS",
      ruleDesc: "Triggered instantly when medical examiner records fitness clearance.",
      templateName: "ae_medical_fitness_clearance_v2",
      messageBody:
        "Dear Tariq Al-Nuaimi,\n\nGreat news! Your Medical Fitness Assessment (DHA Reference #M-88391) has officially PASSED.\n\nNext Step: Emirates ID Biometrics at Al Yalayis ICP Center on Tomorrow at 09:30 AM.\n\nPlease carry your original passport and this digital appointment confirmation.",
      buttons: ["View ICP Appointment Slip", "Reschedule Request"],
      timestamp: "11:42 AM",
    },
    "entry-permit": {
      eventTitle: "Task T002 Entry Permit Approved",
      ruleDesc: "Triggered upon GDRFA/ICP entry permit issuance and PDF receipt.",
      templateName: "ae_entry_permit_issued_v1",
      messageBody:
        "Dear Tariq Al-Nuaimi,\n\nYour UAE Employment Entry Permit (No: 201/2026/892110) has been officially issued by GDRFA Dubai!\n\nPlease download your entry visa PDF below to proceed with airport arrival or internal status change.",
      buttons: ["Download Entry Permit (PDF)", "Confirm Inside-UAE Status"],
      timestamp: "02:15 PM",
    },
    "resample-alert": {
      eventTitle: "Task T025 Medical Result = RESAMPLE (T026)",
      ruleDesc: "Dynamic T026 retry-gate spawned with owner continuity preference.",
      templateName: "ae_medical_resample_notice_v1",
      messageBody:
        "Dear Tariq,\n\nThe Medical Center requires a repeat routine test (Resample Attempt #1). Your case officer Sarah Jenkins has reserved a complimentary retry slot at Muhaisnah Center for Wednesday 10:00 AM.",
      buttons: ["Acknowledge Retry Slot", "Contact Case Officer"],
      timestamp: "04:30 PM",
    },
  };

  const current = events[selectedEvent];

  return (
    <section id="whatsapp" className="py-24 bg-white border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EVENT-DRIVEN ENGAGEMENT"
          title="Stop Sending the Same Updates Manually."
          description="Transform case milestone completions into verified, automated WhatsApp messages sent directly to candidates and sponsoring HR managers."
          align="center"
          badgeVariant="brand"
        />

        {/* 4-Step Chain Visualization */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          {[
            {
              step: "01",
              title: "Case Event Fires",
              desc: "A processor marks a milestone or API receives portal update.",
              badge: "DAG Event",
            },
            {
              step: "02",
              title: "Automation Rule Evaluates",
              desc: "Validates applicant phone number, language, and tenant rules.",
              badge: "Rule Engine",
            },
            {
              step: "03",
              title: "Template Hydration",
              desc: "Dynamic fields injected: names, reference IDs, and expiry dates.",
              badge: "Meta Approved",
            },
            {
              step: "04",
              title: "Encrypted Dispatch",
              desc: "Instant delivery with interactive quick reply action buttons.",
              badge: "Direct Delivery",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#E2E8F0] space-y-2 relative group hover:border-[#1747E8] transition-colors shadow-subtle"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs font-bold text-[#1747E8]">
                  {item.step}
                </span>
                <Badge variant="brand" size="sm">
                  {item.badge}
                </Badge>
              </div>
              <h4 className="text-xs font-bold text-[#102A56] text-left pt-1">
                {item.title}
              </h4>
              <p className="text-[11px] text-[#64748B] text-left leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Split Layout: Configuration Left, Clean Navy/White WhatsApp Mobile Right */}
        <div className="mt-12 rounded-2xl bg-[#F7F9FC] border border-[#E2E8F0] p-6 sm:p-8 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Event Selection & Configuration (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <Badge variant="brand" size="sm">
                  Interactive Simulator
                </Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-[#102A56] mt-2">
                  Select a Visa Milestone Event
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  See how the Vyxel automation engine generates official communications in real time.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    id: "medical-pass",
                    label: "T025 Medical Result → PASS",
                    badge: "Success Gate",
                  },
                  {
                    id: "entry-permit",
                    label: "T002 Entry Permit → Issued",
                    badge: "Ministry Approval",
                  },
                  {
                    id: "resample-alert",
                    label: "T025 Medical Result → RESAMPLE (T026)",
                    badge: "Dynamic Retry Gate",
                  },
                ].map((ev) => (
                  <button
                    key={ev.id}
                    onClick={() => setSelectedEvent(ev.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                      selectedEvent === ev.id
                        ? "bg-white border-[#1747E8] text-[#102A56] shadow-sm ring-1 ring-[#1747E8]/20"
                        : "bg-white/80 border-[#E2E8F0] hover:border-[#CBD5E1] text-[#172B4D]"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{ev.label}</div>
                      <div className="text-[10px] text-[#64748B] font-mono mt-0.5">
                        Rule: Event-Driven Automation Trigger
                      </div>
                    </div>
                    <Badge
                      variant={selectedEvent === ev.id ? "brand" : "neutral"}
                      size="sm"
                    >
                      {ev.badge}
                    </Badge>
                  </button>
                ))}
              </div>

              {/* Automation Engine Specifications */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2 font-mono text-xs shadow-subtle">
                <div className="flex justify-between text-[#64748B]">
                  <span>Template Name:</span>
                  <span className="text-[#1747E8] font-bold">{current.templateName}</span>
                </div>
                <div className="flex justify-between text-[#64748B]">
                  <span>Webhook Gateway:</span>
                  <span className="text-[#18A875] font-semibold">Meta Cloud API (AES-256)</span>
                </div>
                <div className="flex justify-between text-[#64748B]">
                  <span>Delivery SLA:</span>
                  <span className="text-[#102A56] font-semibold">&lt; 1,200 ms</span>
                </div>
              </div>
            </div>

            {/* Right: Clean Enterprise WhatsApp Mobile Mockup (6 cols) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm rounded-[32px] bg-white border-4 border-[#102A56] shadow-xl p-3 relative overflow-hidden">
                {/* Phone Speaker Notch */}
                <div className="w-24 h-4 bg-[#102A56] rounded-full mx-auto mb-3" />

                {/* WhatsApp Chat App Shell */}
                <div className="rounded-2xl bg-[#F7F9FC] border border-[#E2E8F0] overflow-hidden font-sans">
                  {/* Chat Top Bar (Deep Navy) */}
                  <div className="px-4 py-3 bg-[#102A56] flex items-center justify-between text-white border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#1747E8] flex items-center justify-center font-bold text-xs text-white">
                        VX
                      </div>
                      <div>
                        <div className="text-xs font-bold flex items-center gap-1">
                          <span>Vyxel Visa Bot</span>
                          <span className="w-2 h-2 rounded-full bg-[#18A875] inline-block" />
                        </div>
                        <div className="text-[10px] text-[#B8C5D9] font-mono">
                          Official Verified Agency
                        </div>
                      </div>
                    </div>
                    <Badge variant="dark" size="sm">
                      Active
                    </Badge>
                  </div>

                  {/* Message Stream */}
                  <div className="p-4 space-y-3 min-h-[300px] bg-white flex flex-col justify-end">
                    <div className="text-center">
                      <span className="px-2.5 py-0.5 rounded bg-[#EEF4FF] text-[10px] font-mono text-[#1747E8]">
                        Today • Encrypted Channel
                      </span>
                    </div>

                    {/* Chat Bubble (Light Blue with Deep Navy text) */}
                    <div className="p-3.5 rounded-2xl rounded-tl-sm bg-[#EEF4FF] border border-[#1747E8]/20 text-[#102A56] space-y-2 shadow-sm max-w-[92%]">
                      <p className="text-xs whitespace-pre-line leading-relaxed font-medium">
                        {current.messageBody}
                      </p>

                      <div className="flex justify-end items-center gap-1 text-[10px] text-[#64748B] font-mono">
                        <span>{current.timestamp}</span>
                        <CheckCheck className="w-3.5 h-3.5 text-[#18A875]" />
                      </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="space-y-1.5 pt-1">
                      {current.buttons.map((btn, bIdx) => (
                        <div
                          key={bIdx}
                          className="w-full py-2 px-3 rounded-lg bg-white hover:bg-[#EEF4FF] text-[#1747E8] text-center font-bold text-xs border border-[#1747E8]/30 cursor-pointer flex items-center justify-center gap-1.5 transition-colors shadow-subtle"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>{btn}</span>
                        </div>
                      ))}
                    </div>
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
