"use client";

import React from "react";

export function PlatformModules({ onOpenDemo }) {
  return (
    <section id="platform" className="py-8 sm:py-12 lg:py-14 bg-white">
      {/* 1440px Wide Screen Container matching Reference Width */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Blue Fintech Gradient Panoramic Card */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[linear-gradient(120deg,#D4E5F7_0%,#E1EFFC_32%,#EFF5FD_68%,#F8FBFE_100%)] border border-[#CFE1F4] p-6 sm:p-8 lg:p-12 overflow-hidden shadow-[0_12px_40px_rgba(16,42,86,0.06)]">
          
          {/* Subtle Ambient Radial Glow on Left */}
          <div className="absolute -left-20 -top-20 w-[420px] h-[420px] rounded-full bg-[#BBD8F8]/45 blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-24 w-[360px] h-[360px] rounded-full bg-white/70 blur-3xl pointer-events-none" />

          {/* Decorative Translucent Diagonal Light Streaks (Fintech Style) */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -25deg,
                rgba(255, 255, 255, 0) 0px,
                rgba(255, 255, 255, 0) 70px,
                rgba(255, 255, 255, 0.45) 70px,
                rgba(255, 255, 255, 0.45) 155px,
                rgba(255, 255, 255, 0) 155px,
                rgba(255, 255, 255, 0) 250px
              )`
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center relative z-10">
            
            {/* Left Column: Laptop Mockup (~56% Width) */}
            <div className="lg:col-span-7 relative order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(16,42,86,0.12)] border border-white/80 bg-white group">
                <img
                  src="/images/vyxel-integrations-laptop.jpg"
                  alt="Vyxel All-in-One Operations Workspace Mockup"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>
            </div>

            {/* Right Column: Clean Editorial Headline, Copy & CTA (~44% Width) */}
            <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2 lg:pr-4 xl:pr-8">
              
              {/* Editorial Serif Headline (No Eyebrow, direct clean start like Fintech) */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#102A56] font-normal leading-[1.18] tracking-tight">
                Everything Your Agency Needs. One Operational Workspace.
              </h2>

              {/* Main Subtitle Description */}
              <p className="mt-6 text-[#4A5568] text-[15px] sm:text-[16px] leading-[1.65] font-sans max-w-lg">
                Vyxel converges visa case management, compliance governance, automated communication, and internal workforce HR into one unified multi-tenant architecture.
              </p>

              <p className="mt-4 text-[#4A5568] text-[15px] sm:text-[16px] leading-[1.65] font-sans max-w-lg">
                Eliminate isolated spreadsheets, scattered WhatsApp threads, and disconnected HR tools. Enable seamless data flow and zero compliance errors across your entire operational team.
              </p>

              {/* Pill Outline CTA Button */}
              <div className="mt-8 sm:mt-10 flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#102A56] text-[#102A56] text-sm font-semibold hover:bg-[#102A56] hover:text-white transition-all duration-200 shadow-sm active:scale-95 bg-white/50"
                >
                  Explore All Modules
                </button>
              </div>

            </div>
          </div>

        </div>



      </div>
    </section>
  );
}
