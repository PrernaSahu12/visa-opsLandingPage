"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Building2,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

export function GetStartedSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    businessEmail: "",
    phone: "",
    businessType: "",
    locations: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#061D3D] text-white overflow-hidden">
      {/* Background Ambient Gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#1747E8]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] rounded-full bg-[#38BDF8]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait, Editorial Headline & Details */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Circular Portrait with Fintech-Style Orange Arc Accent */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto lg:mx-0">
              {/* Curved Orange Accent Arc */}
              <div 
                className="absolute -inset-3 rounded-full border-[5px] border-transparent border-b-[#E86034] border-r-[#E86034] transform rotate-12 pointer-events-none"
                style={{ filter: "drop-shadow(0 0 12px rgba(232, 96, 52, 0.4))" }}
              />

              {/* High-Resolution Professional Team Photograph */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-[#0F2A4A] relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Vyxel Advisory Operations Specialists"
                  className="w-full h-full object-cover object-top filter contrast-[1.05]"
                />
              </div>
            </div>

            {/* Editorial Serif Headline matching Fintech */}
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-[1.1]">
                Get Started
              </h1>

              {/* Main Explainer Paragraph */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
                <strong className="text-white font-semibold">New to Vyxel?</strong> Talk to sales about Vyxel OS, Deterministic Workflows, or any other operational module. Complete the form and a specialist will follow up with a tailored workspace preview.
              </p>

              {/* Secondary Support Paragraph */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl font-sans pt-1">
                <strong className="text-slate-200 font-semibold">Already an active agency with a question about your account?</strong> Email{" "}
                <a
                  href="mailto:support@vyxel.com"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  support@vyxel.com
                </a>{" "}
                or visit our{" "}
                <a
                  href="#support"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  Help Center
                </a>.
              </p>
            </div>

            {/* Quick Contact Hotline & Assurance Strip */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Direct Sales: +971 4 800 VYXEL</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Response Time: &lt; 15 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>NDA & Confidentiality Protected</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Conversion White Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.35)] text-slate-800">
              
              {!submitted ? (
                <div>
                  {/* Card Subtitle */}
                  <div className="text-center mb-6">
                    <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-[#64748B] uppercase">
                      SALES DEMO REQUEST
                    </span>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
                    
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                          First Name <span className="text-[#F59E0B] font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          placeholder="First Name"
                          className="w-full px-4 py-2.5 rounded-full border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-800 text-xs sm:text-sm outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                          Last Name <span className="text-[#F59E0B] font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          placeholder="Last Name"
                          className="w-full px-4 py-2.5 rounded-full border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-800 text-xs sm:text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                        Business Name <span className="text-[#F59E0B] font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                        placeholder="Agency / Company Legal Name"
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-800 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Business Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                        Business Email <span className="text-[#F59E0B] font-bold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.businessEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, businessEmail: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-800 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                        Phone <span className="text-[#F59E0B] font-bold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+971 50 123 4567"
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-800 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Which Best Describes Your Business */}
                    <div>
                      <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                        Which Best Describes Your Business <span className="text-[#F59E0B] font-bold">*</span>
                      </label>
                      <select
                        required
                        value={formData.businessType}
                        onChange={(e) =>
                          setFormData({ ...formData, businessType: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-700 text-xs sm:text-sm outline-none transition-all bg-white cursor-pointer"
                      >
                        <option value="">Please Select</option>
                        <option value="immigration_consultancy">Visa & Immigration Consultancy</option>
                        <option value="manpower_outsourcing">Manpower Outsourcing & Overseas Staffing</option>
                        <option value="corporate_mobility">Enterprise Corporate In-House HR & Mobility</option>
                        <option value="typing_center">Typing Center / Document Clearance Office</option>
                        <option value="other">Other Operations Practice</option>
                      </select>
                    </div>

                    {/* Number of Monthly Cases / Locations */}
                    <div>
                      <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                        Number of Monthly Cases / Locations
                      </label>
                      <select
                        value={formData.locations}
                        onChange={(e) =>
                          setFormData({ ...formData, locations: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-700 text-xs sm:text-sm outline-none transition-all bg-white cursor-pointer"
                      >
                        <option value="">Please Select</option>
                        <option value="1_25">1 - 25 cases / Single Branch</option>
                        <option value="26_100">26 - 100 cases / 2-3 Branches</option>
                        <option value="101_500">101 - 500 cases / Multi-Regional</option>
                        <option value="500_plus">500+ cases / Enterprise Operations</option>
                      </select>
                    </div>

                    {/* Submit Button (Amber / Gold Pill matching Fintech Reference) */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-full bg-[#F5B335] hover:bg-[#EAA31E] text-[#0A2540] font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#0A2540] border-t-transparent rounded-full animate-spin" />
                            <span>Scheduling Your Session...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Demo</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Micro Privacy Disclaimer */}
                    <p className="text-[11px] text-slate-400 text-center leading-relaxed pt-2">
                      By submitting, you agree to Vyxel&apos;s Terms of Service and Privacy Policy. We respect your confidentiality and never share your data.
                    </p>

                  </form>
                </div>
              ) : (
                /* Success Confirmation View */
                <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-[#102A56]">
                      Demo Request Confirmed!
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-900">{formData.firstName}</span>. A Vyxel enterprise specialist has been notified and will contact you at{" "}
                      <span className="font-semibold text-slate-900">{formData.businessEmail}</span> within 15 minutes.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1 max-w-xs mx-auto text-left font-mono">
                    <div>Agency: {formData.businessName || "Confidential"}</div>
                    <div>Sector: {formData.businessType || "Visa Operations"}</div>
                    <div className="text-emerald-700 font-bold">Priority Status: Express Ingestion</div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        businessName: "",
                        businessEmail: "",
                        phone: "",
                        businessType: "",
                        locations: "",
                      });
                    }}
                    className="text-xs font-semibold text-[#1747E8] hover:underline cursor-pointer pt-2"
                  >
                    ← Submit another request
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
