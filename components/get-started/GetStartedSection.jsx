"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Phone,
  ShieldCheck,
  Building2,
  ArrowRight,
  Clock,
  Sparkles,
  AlertCircle,
  Calendar,
  Briefcase,
  Users,
  RotateCcw,
  Check,
  Mail,
} from "lucide-react";
import { submitContactEnquiry } from "@/src/services/api";

export function GetStartedSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    businessEmail: "",
    phone: "",
    businessType: "Visa & Immigration Consultancy",
    counsellors: "1-5",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [docketId, setDocketId] = useState("849204");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const generatedId = Math.floor(100000 + Math.random() * 900000).toString();
    setDocketId(generatedId);

    try {
      await submitContactEnquiry({
        product: "vyxel_crm",
        name: fullName,
        email: formData.businessEmail,
        phone: formData.phone,
        company: formData.businessName,
        representation: formData.businessType,
        counsellors: formData.counsellors,
        services: formData.businessType,
        message: formData.message
          ? `[FREE DEMO REQUEST] ${formData.message}`
          : `[FREE DEMO REQUEST] Live walkthrough requested for ${formData.businessType} agency.`,
      });

      setSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err?.message ||
          "Unable to schedule your demo. Please check your details and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#061D3D] text-white overflow-hidden">
      {/* Background Ambient Gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#1747E8]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] rounded-full bg-[#38BDF8]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait, Editorial Headline & Demo Perks */}
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

            {/* Editorial Serif Headline */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold tracking-wide border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>EXPERIENCE VYXEL LIVE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-[1.1]">
                Request a Free Demo
              </h1>

              {/* Main Explainer Paragraph */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
                <strong className="text-white font-semibold">See Vyxel in action with your own operations in mind.</strong> Schedule a personalized live walkthrough of deterministic visa pipelines, maker-checker document queues, and automated client communication tailored to your jurisdiction.
              </p>

              {/* Secondary Support Paragraph */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl font-sans pt-1">
                <strong className="text-slate-200 font-semibold">Already an active agency with a support enquiry?</strong> Email{" "}
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

            {/* Quick Demo Guarantees Strip */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>100% Free Live Session</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Response Time: &lt; 15 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>No Credit Card or Setup Required</span>
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
                    <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-[#1747E8] uppercase bg-blue-50 px-3 py-1 rounded-full">
                      SCHEDULE YOUR FREE DEMO
                    </span>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="mb-5 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                      <div className="flex-1">
                        <strong className="font-semibold">Unable to submit:</strong> {errorMessage}
                      </div>
                    </div>
                  )}

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
                          placeholder="e.g. Sarah"
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
                          placeholder="e.g. Jenkins"
                          className="w-full px-4 py-2.5 rounded-full border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-800 text-xs sm:text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Business / Company Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                        Agency / Company Name <span className="text-[#F59E0B] font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                        placeholder="Apex Global Immigration Ltd."
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-800 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Business Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                          Work Email <span className="text-[#F59E0B] font-bold">*</span>
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

                      <div>
                        <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                          Phone Number <span className="text-[#F59E0B] font-bold">*</span>
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
                    </div>

                    {/* Which Best Describes Your Business */}
                    <div>
                      <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                        Business Operations Focus <span className="text-[#F59E0B] font-bold">*</span>
                      </label>
                      <select
                        required
                        value={formData.businessType}
                        onChange={(e) =>
                          setFormData({ ...formData, businessType: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-700 text-xs sm:text-sm outline-none transition-all bg-white cursor-pointer"
                      >
                        <option value="Visa & Immigration Consultancy">Visa &amp; Immigration Consultancy</option>
                        <option value="Manpower Outsourcing & Overseas Staffing">Manpower Outsourcing &amp; Overseas Staffing</option>
                        <option value="Enterprise Corporate Mobility">Enterprise Corporate In-House HR &amp; Mobility</option>
                        <option value="Typing Center & Document Clearance">Typing Center / Document Clearance Office</option>
                        <option value="Multi-Service Operations">Other Operations Practice</option>
                      </select>
                    </div>

                    {/* Number of Counsellors / Processors (Required by API) */}
                    <div>
                      <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                        Number of Counsellors / Case Processors <span className="text-[#F59E0B] font-bold">*</span>
                      </label>
                      <select
                        required
                        value={formData.counsellors}
                        onChange={(e) =>
                          setFormData({ ...formData, counsellors: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-700 text-xs sm:text-sm outline-none transition-all bg-white cursor-pointer"
                      >
                        <option value="1-5">1 - 5 Counsellors (Boutique Practice)</option>
                        <option value="6-15">6 - 15 Counsellors (Growing Agency)</option>
                        <option value="16-50">16 - 50 Counsellors (Multi-Branch Operations)</option>
                        <option value="50+">50+ Enterprise Scale Processors</option>
                      </select>
                    </div>

                    {/* Message / Preferred Demo Time / Requirements */}
                    <div>
                      <label className="block text-xs font-semibold text-[#102A56] mb-1.5">
                        Preferred Demo Timing &amp; Notes <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="e.g. Tomorrow 2:00 PM GST. We want to see the WhatsApp candidate automation and DAG workflow builder..."
                        className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 focus:border-[#1747E8] focus:ring-2 focus:ring-[#1747E8]/20 text-slate-800 text-xs sm:text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-full bg-[#F5B335] hover:bg-[#EAA31E] disabled:opacity-75 disabled:cursor-not-allowed text-[#0A2540] font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#0A2540] border-t-transparent rounded-full animate-spin" />
                            <span>Scheduling Your Free Demo...</span>
                          </>
                        ) : (
                          <>
                            <span>Request a Free Demo</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Micro Privacy Disclaimer */}
                    <p className="text-[11px] text-slate-400 text-center leading-relaxed pt-1">
                      By submitting, you agree to Vyxel&apos;s Terms of Service. Your request is processed securely and kept 100% confidential.
                    </p>

                  </form>
                </div>
              ) : (
                /* High-End Enterprise Confirmation View */
                <div className="text-center py-4 sm:py-6 space-y-6 animate-in fade-in zoom-in-95 duration-300 font-sans">
                  
                  {/* Glowing Animated Success Icon */}
                  <div className="relative w-20 h-20 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse pointer-events-none" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-emerald-50 to-emerald-100/70 text-emerald-600 border-2 border-emerald-300 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 bg-[#102A56] text-amber-300 p-1.5 rounded-full shadow-md border-2 border-white">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Header Title & Subtext */}
                  <div className="space-y-2.5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-semibold tracking-wider uppercase font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>DEMO SESSION SCHEDULED • PRIORITY QUEUE</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#102A56] tracking-tight">
                      Demo Request Confirmed!
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#102A56] font-semibold">{formData.firstName || "Customer"}</strong>. Your personalized walkthrough is logged. A Vyxel enterprise specialist will contact you at{" "}
                      <span className="font-mono text-[#1747E8] font-semibold bg-blue-50/80 border border-blue-100 px-2 py-0.5 rounded-md inline-block">
                        {formData.businessEmail}
                      </span>{" "}
                      within <strong className="text-emerald-700 font-semibold">15 minutes</strong>.
                    </p>
                  </div>

                  {/* Premium Booking Docket Card */}
                  <div className="bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] rounded-2xl border border-[#CBD5E1]/70 p-4 sm:p-5 text-left space-y-4 shadow-sm relative overflow-hidden">
                    
                    {/* Docket Header Strip */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/90 text-xs">
                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-slate-400 text-[11px] uppercase">DOCKET</span>
                        <span className="font-bold text-[#102A56] text-xs tracking-wider">
                          #VX-{docketId}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        CRM Queued
                      </span>
                    </div>

                    {/* 2x2 Clean Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                      <div className="flex items-start gap-2.5">
                        <div className="p-2 rounded-xl bg-white border border-slate-200 text-[#1747E8] shrink-0 shadow-2xs">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[11px] text-slate-500 font-medium block">Organization</span>
                          <span className="font-bold text-slate-900 truncate block text-xs">
                            {formData.businessName || "Confidential Practice"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="p-2 rounded-xl bg-white border border-slate-200 text-[#1747E8] shrink-0 shadow-2xs">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[11px] text-slate-500 font-medium block">Hotline Number</span>
                          <span className="font-bold text-slate-900 truncate block text-xs font-mono">
                            {formData.phone || "—"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="p-2 rounded-xl bg-white border border-slate-200 text-[#1747E8] shrink-0 shadow-2xs">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[11px] text-slate-500 font-medium block">Operational Focus</span>
                          <span className="font-bold text-slate-900 truncate block text-xs">
                            {formData.businessType || "Visa & Immigration"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="p-2 rounded-xl bg-white border border-slate-200 text-[#1747E8] shrink-0 shadow-2xs">
                          <Users className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[11px] text-slate-500 font-medium block">Team Scale</span>
                          <span className="font-bold text-slate-900 truncate block text-xs">
                            {formData.counsellors} Counsellors
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Docket Footer SLA Note */}
                    <div className="pt-3 border-t border-slate-200/90 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] text-slate-600">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>SLA: Specialist Response &lt; 15 Minutes</span>
                      </div>
                      <span className="text-slate-500">
                        Assigned: Senior Solutions Architect
                      </span>
                    </div>

                  </div>

                  {/* "What Happens Next?" 3-Step Process */}
                  <div className="bg-[#FAFBFD] rounded-2xl border border-slate-200/80 p-4 text-left text-xs space-y-3">
                    <span className="font-bold text-[#102A56] text-[11px] uppercase tracking-wider block">
                      What Happens Next
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5 shadow-2xs">
                          ✓
                        </div>
                        <div className="text-[11px] leading-snug">
                          <strong className="text-slate-900 block font-semibold">1. Request Logged</strong>
                          <span className="text-slate-500">Dispatched to CRM &amp; solutions queue.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#1747E8]/10 text-[#1747E8] border border-[#1747E8]/30 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                          2
                        </div>
                        <div className="text-[11px] leading-snug">
                          <strong className="text-slate-900 block font-semibold">2. Calendar Invite</strong>
                          <span className="text-slate-500">Google Meet link sent to your email.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#1747E8]/10 text-[#1747E8] border border-[#1747E8]/30 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                          3
                        </div>
                        <div className="text-[11px] leading-snug">
                          <strong className="text-slate-900 block font-semibold">3. Live Walkthrough</strong>
                          <span className="text-slate-500">1-on-1 demo tailored to your workflows.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      to="/workflow"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#102A56] hover:bg-[#061D3D] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <span>Explore Workflow DAG Engine</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setErrorMessage("");
                        setFormData({
                          firstName: "",
                          lastName: "",
                          businessName: "",
                          businessEmail: "",
                          phone: "",
                          businessType: "Visa & Immigration Consultancy",
                          counsellors: "1-5",
                          message: "",
                        });
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                      <span>Submit Another Request</span>
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
