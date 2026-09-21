"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import {
  Users2,
  CalendarCheck,
  CreditCard,
  Building2,
  Clock,
  CheckCircle2,
} from "lucide-react";

export function HRMSSection() {
  const [activeTab, setActiveTab] = useState("attendance");

  const hrCapabilities = [
    {
      id: "attendance",
      title: "Staff Attendance & Biometrics",
      metric: "98.2% Present Today",
      icon: Clock,
      desc: "Live biometric check-in tracking across regional agency offices with automated late-entry grace logic.",
    },
    {
      id: "leave",
      title: "Leave Management & Coverage",
      metric: "3 Pending Requests",
      icon: CalendarCheck,
      desc: "Leave requests automatically audit whether the case processor has active leaf tasks in the round-robin pool.",
    },
    {
      id: "payroll",
      title: "Payroll Batches & WPS",
      metric: "Cycle #09 Processed",
      icon: CreditCard,
      desc: "Calculate salaries, commission deductions, overtime hours, and generate UAE WPS compliant SIF files in one click.",
    },
    {
      id: "branches",
      title: "Multi-Branch Governance",
      metric: "4 Active Branches",
      icon: Building2,
      desc: "Manage Dubai Head Office, Deira Branch, Abu Dhabi Liaison, and overseas candidate intake hubs with unified policies.",
    },
  ];

  return (
    <section id="hrms" className="py-24 bg-white border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INTERNAL WORKFORCE OPERATIONS"
          title="Your Operations Team Needs a Workspace Too."
          description="Vyxel eliminates separate HR software by embedding processor attendance, leave coverage, payroll batches, and branch management into your core visa platform."
          align="center"
        />

        {/* 4 Feature Selector Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hrCapabilities.map((cap) => {
            const Icon = cap.icon;
            const isSelected = activeTab === cap.id;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap.id)}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#EEF4FF] border-[#1747E8] ring-1 ring-[#1747E8]/30 shadow-subtle"
                    : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? "bg-[#1747E8] text-white"
                          : "bg-[#F7F9FC] text-[#1747E8] border border-[#E2E8F0]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <Badge variant={isSelected ? "brand" : "neutral"} size="sm">
                      {cap.metric}
                    </Badge>
                  </div>
                  <h4 className="text-xs font-bold text-[#102A56] mt-1">
                    {cap.title}
                  </h4>
                  <p className="text-[11px] text-[#64748B] mt-1 leading-snug">
                    {cap.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* HRMS Dashboard Visual Demonstration */}
        <div className="mt-8 rounded-2xl bg-[#F7F9FC] border border-[#E2E8F0] p-6 sm:p-8 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Console (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-[#E2E8F0] p-5 space-y-4 shadow-subtle">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-[#1747E8]" />
                  <span className="text-xs font-bold text-[#102A56]">
                    Operations Workforce Roster • Dubai Branch
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px]">
                  <span className="text-[#64748B]">Total Staff: 42</span>
                  <Badge variant="success" size="sm">
                    Synced Biometrics
                  </Badge>
                </div>
              </div>

              {/* Staff Table Mockup */}
              <div className="space-y-2">
                {[
                  {
                    name: "Sarah Jenkins",
                    role: "Senior Visa Officer",
                    pool: "Pool #1 (Dubai C4)",
                    checkIn: "08:54 AM",
                    status: "Active Case Lead",
                    badge: "success",
                  },
                  {
                    name: "Zaid Farooq",
                    role: "Maker (Document Specialist)",
                    pool: "Pool #2 (Docs)",
                    checkIn: "09:02 AM",
                    status: "Reviewing 6 files",
                    badge: "brand",
                  },
                  {
                    name: "Nadia Rahman",
                    role: "Checker (Compliance Lead)",
                    pool: "Supervisory",
                    checkIn: "08:45 AM",
                    status: "Authorized",
                    badge: "success",
                  },
                  {
                    name: "Vikram Malhotra",
                    role: "Field ICP Liaison",
                    pool: "Typing & Biometrics",
                    checkIn: "09:12 AM",
                    status: "Al Yalayis Center",
                    badge: "warning",
                  },
                ].map((member, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F7F9FC] border border-[#E2E8F0] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white text-[#102A56] font-mono font-bold text-[10px] flex items-center justify-center border border-[#E2E8F0]">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-bold text-[#102A56]">
                          {member.name}
                        </div>
                        <div className="text-[10px] text-[#64748B] font-mono">
                          {member.role} • {member.pool}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-right font-mono">
                      <div className="hidden sm:block text-[11px] text-[#64748B]">
                        {member.checkIn}
                      </div>
                      <Badge variant={member.badge} size="sm">
                        {member.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Attendance Summary Strip */}
              <div className="pt-2 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2 rounded-lg bg-[#F7F9FC] border border-[#E2E8F0]">
                  <span className="text-[#64748B] text-[10px] block font-medium">
                    ON-TIME RATE
                  </span>
                  <span className="text-[#18A875] font-bold">96.4%</span>
                </div>
                <div className="p-2 rounded-lg bg-[#F7F9FC] border border-[#E2E8F0]">
                  <span className="text-[#64748B] text-[10px] block font-medium">
                    ACTIVE POOL SIZE
                  </span>
                  <span className="text-[#1747E8] font-bold">14 Processors</span>
                </div>
                <div className="p-2 rounded-lg bg-[#F7F9FC] border border-[#E2E8F0]">
                  <span className="text-[#64748B] text-[10px] block font-medium">
                    LEAVE COVERAGE
                  </span>
                  <span className="text-[#102A56] font-bold">100% Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Right Strategic Explanation (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="brand" size="md">
                Unified Workforce Engine
              </Badge>

              <h3 className="text-2xl font-extrabold text-[#102A56] leading-tight">
                Align Case Processing Capacity With Real Staff Availability
              </h3>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                When a visa processor takes sick leave or travels, generic CRMs keep routing urgent cases to their desk. Vyxel's auto-assignment pool automatically cross-references HRMS attendance, removing inactive processors from the rotation pool in real time.
              </p>

              <div className="space-y-2.5 pt-1 text-xs">
                {[
                  "Automatic round-robin pool suspension during approved leaves",
                  "Overtime and performance tracking tied to closed leaf tasks",
                  "Single sign-on for agency staff, processors, and HR managers",
                  "Multi-branch cost center assignment for manpower billing",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#172B4D]">
                    <CheckCircle2 className="w-4 h-4 text-[#1747E8] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
