"use client";

import React from "react";

export function Footer({ onOpenCreateWorkspace, onOpenDemo }) {
  return (
    <footer className="bg-[#05162E] border-t border-white/10 text-[#94A3B8] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1: Brand (spans 2 cols on md+) */}
          <div className="col-span-2 space-y-3">
            <a href="/" className="inline-block">
              <div className="bg-white px-2.5 py-1.5 rounded-lg shadow-sm w-fit">
                <img
                  src="/images/vyxel-logo.png"
                  alt="Vyxel Logo"
                  className="h-6 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              Deterministic operating system for visa processing, document governance, and cross-border manpower operations.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational • Dubai C4 Active</span>
            </div>
          </div>

          {/* Col 2: Platform Links (Existing Pages Only) */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>
                <a href="/features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/workflow" className="hover:text-white transition-colors">
                  Workflow DAG
                </a>
              </li>
              <li>
                <a href="/solutions" className="hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Trust & Security Links (Existing Pages Only) */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white tracking-wider">
              Trust &amp; Governance
            </h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>
                <a href="/governance" className="hover:text-white transition-colors">
                  Document Governance
                </a>
              </li>
              <li>
                <a href="/security" className="hover:text-white transition-colors">
                  Security Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Action & Access */}
          <div className="space-y-2.5 col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold text-white tracking-wider">
              Get Started
            </h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>
                <a href="/get-started" className="hover:text-white transition-colors text-blue-400 font-semibold inline-flex items-center gap-1">
                  <span>Create Workspace</span>
                  <span>→</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Book Interactive Demo
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Compact Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#64748B]">
          <div>
            © {new Date().getFullYear()} Vyxel Operations Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[#94A3B8]">
            <span>Encrypted Multi-Tenant SaaS</span>
            <span>•</span>
            <span>GDPR &amp; UAE Compliance Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
