"use client";

import React from "react";

export function ComplianceMapBanner({ onOpenDemo }) {
  return (
    <section className="py-6 sm:py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Deep Dark Navy Card matching Fintech Reference 1:1 */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[linear-gradient(135deg,#03132B_0%,#061F44_45%,#0A2A5A_100%)] border border-[#14396D] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-[0_20px_60px_rgba(3,19,43,0.3)]">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#1747E8]/20 blur-[100px] pointer-events-none" />
          <div className="absolute left-0 top-0 w-80 h-80 rounded-full bg-[#00E5FF]/10 blur-[90px] pointer-events-none" />

          {/* Fintech Signature Diagonal Translucent Stripes */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -25deg,
                rgba(255, 255, 255, 0) 0px,
                rgba(255, 255, 255, 0) 65px,
                rgba(255, 255, 255, 0.35) 65px,
                rgba(255, 255, 255, 0.35) 140px,
                rgba(255, 255, 255, 0) 140px,
                rgba(255, 255, 255, 0) 240px
              )`
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center relative z-10">
            
            {/* Left Column: Editorial Headline, Subtitle & White Pill CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              {/* Editorial Serif Headline matching Reference Image */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-white font-normal leading-[1.18] tracking-tight">
                Your State-by-State Visa & Compliance Reference Guide
              </h2>

              {/* Subtitle Description */}
              <p className="mt-5 text-white text-[15px] sm:text-[16px] leading-[1.65] font-sans max-w-md">
                Prevailing wage determinations, USCIS service center rules, state DOL filing guidelines, and consular requirements — everything you need to stay compliant, in one place.
              </p>

              {/* White Pill Button matching Reference */}
              <div className="mt-8 sm:mt-10 flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-[#061F44] text-sm font-semibold hover:bg-[#EEF4FF] transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
                >
                  Browse Regulations
                </button>
              </div>

            </div>

            {/* Right Column: Exact Custom USA SVG Vector Map with Connected Arcs */}
            <div className="lg:col-span-7 relative w-full flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] max-w-[700px] flex items-center justify-center">
                <img
                  src="/images/us-map-styled.svg"
                  alt="Custom USA State-by-State SVG Vector Map with Connected Routes"
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
