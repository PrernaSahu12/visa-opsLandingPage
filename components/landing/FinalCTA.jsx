
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ShieldCheck, Sparkles } from "lucide-react";

export function FinalCTA({ onOpenCreateWorkspace, onOpenDemo }) {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-[#F4F8FE] to-[#E9F2FD] relative overflow-hidden border-t border-slate-200/80">
      {/* Soft Ambient Radial Glow matching Hero section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#CDE2FD]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF4FF] border border-blue-200 text-[#1747E8] text-xs font-semibold tracking-wide shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#1747E8]" />
          <span>INITIALIZE YOUR OPERATIONAL WORKSPACE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#102A56] tracking-tight leading-tight">
          Bring Your Entire Operation{" "}
          <span className="text-[#1747E8]">
            Into One Workspace.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
          Replace disconnected tools with a structured platform built for visa processing, compliance, communication and HR operations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/get-started"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1747E8] hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <span>Request a Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-slate-300 text-[#102A56] font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#1747E8]" />
            <span>Book a Demo</span>
          </button>
        </div>

        {/* Security / Enterprise badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-[13px] text-slate-600 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#18A875]" />
            Tenant Data Isolation
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#18A875]" />
            Maker-Checker Document Governance
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#18A875]" />
            Encrypted AWS S3 Storage
          </span>
        </div>
      </div>
    </section>
  );
}
