
import React from "react";

export function ProblemSection() {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs = [
    {
      label: "Visa Workflow Engine",
      description:
        "Build custom case pipelines for your candidates and clients. Track every application stage visually and eliminate the need for messy tracking spreadsheets.",
    },
    {
      label: "Maker-Checker Governance",
      description:
        "Enforce strict document compliance. Our native maker-checker review system ensures every uploaded document is verified against your custom requirement rules before approval.",
    },
    {
      label: "Integrated HRMS",
      description:
        "Manage your entire internal workforce directly within the platform. Track staff attendance, manage leaves, and process payroll without paying for a separate HR tool.",
    },
    {
      label: "WhatsApp Automation",
      description:
        "Stop sending manual updates. Set up smart rules to automatically trigger WhatsApp notifications to clients and candidates whenever their case status changes.",
    },
  ];

  return (
    <section className="pt-10 pb-10 sm:pt-14 sm:pb-12 relative overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fintech-Style Header & Navigation Tabs */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-3.5">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-normal text-[#102A56] tracking-tight leading-tight font-serif">
            Stop Running Your Agency on Spreadsheets &amp; WhatsApp.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] max-w-2xl mx-auto leading-relaxed font-sans">
            Vyxel is the only unified platform that combines visa workflow automation, strict document governance, and team HRMS. Get 100% visibility and zero compliance errors in one secure workspace.
          </p>

          {/* 4 Interactive Pill-Shaped Tabs */}
          <div className="pt-3 sm:pt-3.5 flex flex-wrap items-center justify-center gap-2.5">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                  activeTab === idx
                    ? "bg-[#002654] text-white shadow-sm"
                    : "bg-transparent text-[#102A56] border border-[#102A56] hover:bg-[#102A56]/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Description Text Matching Active Feature Tab */}
          <div className="pt-2 sm:pt-2.5 min-h-[44px] flex items-center justify-center">
            <p
              key={activeTab}
              className="text-xs sm:text-[13.5px] text-[#475569] max-w-2xl mx-auto leading-relaxed transition-opacity duration-300 animate-in fade-in font-sans"
            >
              {tabs[activeTab].description}
            </p>
          </div>
        </div>

        {/* Comparison Videos Showcase */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Video: The Disconnected Reality */}
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-[#E2E8F0] bg-white aspect-video flex items-center justify-center">
            <video
              src="/videos/disconnected-reality.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover block pointer-events-none"
            />
          </div>

          {/* Right Video: The Vyxel Unified Architecture */}
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-[#1747E8]/30 bg-white aspect-video flex items-center justify-center">
            <video
              src="/videos/vyxel-unified.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover block pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
