
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
} from "lucide-react";

export function Navbar({ onOpenCreateWorkspace, onOpenDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "/solutions" },
    { label: "Workflow DAG", href: "/workflow" },
    { label: "Features", href: "/features" },
    { label: "Governance", href: "/governance" },
    { label: "Security", href: "/security" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Announcement Bar (Fintech Reference Style) */}
      <div className="bg-[#002654] text-white text-xs sm:text-[13px] py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 truncate">
            <span className="font-semibold text-blue-300">Featured Guide:</span>
            <a
              href="/workflow"
              className="text-slate-200 hover:text-white hover:underline truncate transition-colors"
            >
              How Deterministic DAG Workflows Prevent Costly Visa Rejections?
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-300 shrink-0 font-medium">
            <Link
              to="/contact"
              className="hover:text-white transition-colors tracking-wide"
            >
              Contact Sales
            </Link>
            <span className="text-slate-500">|</span>
            <a href="#support" className="hover:text-white transition-colors tracking-wide">
              Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] py-2 sm:py-2.5 shadow-sm"
            : "bg-white/90 backdrop-blur-sm py-2.5 sm:py-3 border-b border-[#E2E8F0]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src="/images/vyxel-logo.png"
            alt="Vyxel Logo"
            className="h-9 sm:h-10 lg:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Right Side: Navigation Links + Login & Get Started Buttons */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-[13.5px] font-semibold text-[#102A56] hover:text-[#1747E8] transition-colors rounded-lg block"
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Request a Free Demo Pill Button */}
          <div className="flex items-center">
            <Link
              to="/get-started"
              className="px-5 py-2 rounded-full bg-[#002B66] hover:bg-[#001D47] text-white font-bold text-xs lg:text-sm tracking-wide transition-all shadow-sm active:scale-[0.98] inline-block text-center"
            >
              Request a Free Demo
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#64748B] hover:text-[#102A56] hover:bg-[#F7F9FC] rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* Mobile Menu Drawer */}
    {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-5 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-[#172B4D] hover:text-[#1747E8] hover:bg-[#EEF4FF] rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E2E8F0]">
            <Link
              to="/get-started"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-full bg-[#002B66] text-white font-bold text-sm tracking-wide shadow-sm text-center block"
            >
              Request a Free Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
