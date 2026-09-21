"use client";

import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function FeaturesHero({ onOpenCreateWorkspace, onOpenDemo }) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 overflow-hidden bg-[#F4F7FE] border-b border-slate-200/80">
      {/* Soft Ambient Radial Blur Background matching the image palette */}
      <div className="absolute top-1/4 -right-10 w-[500px] h-[500px] bg-[#CDE2FD]/30 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 -left-10 w-[450px] h-[450px] bg-[#BFD7FA]/25 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/80 text-[#1747E8] text-xs font-semibold tracking-wide uppercase shadow-2xs mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#1747E8]" />
          <span>COMPLETE PLATFORM CAPABILITIES</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-normal text-[#102A56] tracking-tight leading-[1.15] max-w-3xl">
          Everything you need to run{" "}
          <span className="text-[#1747E8] italic font-serif">high-volume</span>{" "}
          operations.
        </h1>

        {/* Subheadline */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
          A unified operating system that replaces your fragmented CRMs, spreadsheets, and HR tools with one deterministic workflow engine.
        </p>

        {/* Action Buttons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenCreateWorkspace}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1747E8] hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all active:scale-95 cursor-pointer"
          >
            <span>Create Your Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-slate-300 text-[#102A56] font-semibold text-xs sm:text-sm hover:bg-slate-50 hover:border-slate-400 shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center">
              <Play className="w-2.5 h-2.5 text-[#1747E8] fill-[#1747E8] ml-0.5" />
            </div>
            <span>Book Interactive Demo</span>
          </button>
        </div>

        {/* Proof Chips */}
        <div className="mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-[13px] text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px]">
              ✓
            </div>
            <span>41-Task DAG Depth</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px]">
              ✓
            </div>
            <span>Two-Tier Maker-Checker</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px]">
              ✓
            </div>
            <span>Meta WhatsApp API</span>
          </div>
        </div>

      </div>
    </section>
  );
}
