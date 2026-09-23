
import React, { useRef, useState, useEffect } from "react";
import {
  Database,
  KeyRound,
  FileKey2,
  Layers,
  HardDrive,
  Fingerprint,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Lock,
} from "lucide-react";

export function SecuritySection() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const securityCards = [
    {
      badge: "DATA ISOLATION",
      title: "Tenant-Level Data Isolation",
      tagline: "companyId Partition Boundary on Every Transaction",
      quote:
        "Every database query, background job, and Redis cache key automatically enforces strict tenant filtering. Operational records cannot cross agency boundaries under any circumstance.",
      icon: Database,
      linkText: "Explore Tenant Isolation Architecture",
      href: "/security",
    },
    {
      badge: "ACCESS CONTROL",
      title: "Granular RBAC & WorkScope",
      tagline: "ASSIGNED_ONLY vs ALL_COMPANY Isolation",
      quote:
        "Processors operate strictly inside their self-scoped assignments (/my-work), while team leads and executives maintain company-wide operational visibility without exposure to unauthorized staff.",
      icon: KeyRound,
      linkText: "View RBAC & WorkScope Policies",
      href: "/security",
    },
    {
      badge: "ENCRYPTED STORAGE",
      title: "AWS S3 Encrypted Document Vault",
      tagline: "AES-256 KMS with 15-Min Expiring Pre-Signed URLs",
      quote:
        "All passport scans, medical records, and ministry receipts reside in private S3 buckets encrypted with AES-256 and accessed only via expiring, cryptographically signed tokens.",
      icon: HardDrive,
      linkText: "Inspect S3 Vault Encryption",
      href: "/security",
    },
    {
      badge: "IDENTITY DEFENSE",
      title: "Secure Authentication Lifecycle",
      tagline: "Stateless Dual-Token Rotation with 2FA",
      quote:
        "Stateless short-lived 15-minute access tokens paired with rotating HTTP-only refresh tokens, complete with instant one-click remote session revocation and mandatory 2FA.",
      icon: Fingerprint,
      linkText: "Read Authentication Specification",
      href: "/security",
    },
    {
      badge: "IMMUTABLE AUDIT",
      title: "Append-Only Audit Provenance",
      tagline: "Cryptographic SHA-256 Immutable Event Ledger",
      quote:
        "Every task execution, state transition, override reason, and officer stamp generates an unalterable audit record preserving user identity, client IP, and server timestamps.",
      icon: FileKey2,
      linkText: "View Audit Trail Controls",
      href: "/security",
    },
    {
      badge: "TIER BOUNDARY",
      title: "Decoupled Entitlement Engine",
      tagline: "Subscription Entitlement Gated from Roles",
      quote:
        "What an agency employee is authorized to perform is strictly governed by agency tier entitlements, cleanly separated from functional role permissions and department boundaries.",
      icon: Layers,
      linkText: "Explore Enterprise Entitlements",
      href: "/security",
    },
  ];

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollButtons, { passive: true });
      updateScrollButtons();
      return () => el.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="security"
      className="py-16 sm:py-24 bg-white text-[#102A56] border-t border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-12">
          {/* Serif Headline matching Fintech reference */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif font-normal text-[#102A56] tracking-tight leading-tight md:whitespace-nowrap">
            Built for Multi-Tenant Enterprise Operations
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Designed from day one with strict tenant-level isolation, server-enforced authorization scopes, and cryptographically verified document storage.
          </p>
        </div>

        {/* Carousel Outer Wrapper with Floating Navigation Buttons */}
        <div className="relative group/carousel">
          
          {/* Left Arrow Floating Button */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll("left")}
              className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#102A56] shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-slate-200 flex items-center justify-center hover:bg-[#EEF4FF] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
          )}

          {/* Right Arrow Floating Button */}
          <button
            onClick={() => handleScroll("right")}
            className={`absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#102A56] shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-slate-200 flex items-center justify-center hover:bg-[#EEF4FF] hover:scale-105 active:scale-95 transition-all cursor-pointer ${
              !canScrollRight ? "opacity-50 hover:opacity-100" : ""
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Scrollable White Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {securityCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="w-[310px] sm:w-[370px] md:w-[410px] shrink-0 snap-start bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-200 flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-all duration-300 text-slate-800 relative group"
                >
                  <div>
                    {/* Card Top: Icon & Badge + Decorative Quote Mark */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] text-[#1747E8] border border-blue-100 flex items-center justify-center shadow-2xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase">
                          {card.badge}
                        </span>
                      </div>
                      <span className="text-3xl font-serif text-slate-300 select-none leading-none">&ldquo;</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#102A56] leading-snug">
                      {card.title}
                    </h3>

                    {/* Subheading / Tagline */}
                    <div className="text-xs font-semibold text-[#1747E8] mt-1 mb-3">
                      {card.tagline}
                    </div>

                    {/* Quote / Description (Fintech In the News / Client Testimonial style) */}
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-sans italic">
                      &ldquo;{card.quote}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Center Pill CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="/security"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#102A56] text-white hover:bg-[#1747E8] font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Explore Complete Security Architecture →
          </a>
        </div>

      </div>
    </section>
  );
}
