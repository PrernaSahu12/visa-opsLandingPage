"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactEnquiry } from "@/src/services/api";

export function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agency: "",
    timeSlot: "tomorrow-10am",
    primaryInterest: "Visa & Immigration Case Processing",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await submitContactEnquiry({
        product: "vyxel_crm",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.agency,
        counsellors: "1-10",
        services: formData.primaryInterest,
        message: `Requested interactive demo walkthrough for slot: ${formData.timeSlot}`,
      });
      setSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err?.message || "Failed to schedule demo session. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setErrorMessage("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={submitted ? "Walkthrough Scheduled" : "Schedule a Platform Walkthrough"}
      maxWidth="max-w-md"
    >
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-xs text-[#64748B]">
            See how Vyxel centralizes candidate workflows, maker-checker document queues, and WhatsApp automation in real time.
          </p>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-1">
              Your Full Name <span className="text-amber-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Rashid Al-Nuaimi"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#1747E8]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-1">
                Work Email <span className="text-amber-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="r.nuaimi@consultancy.ae"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#1747E8]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-1">
                Phone Number <span className="text-amber-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+971 50 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#1747E8]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-1">
                Company Name
              </label>
              <input
                type="text"
                required
                placeholder="Global Ops"
                value={formData.agency}
                onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                className="w-full px-3.5 py-2 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#1747E8]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-1">
                Preferred Slot
              </label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#172B4D] focus:outline-none focus:border-[#1747E8]"
              >
                <option value="tomorrow-10am">Tomorrow, 10:00 AM GST</option>
                <option value="tomorrow-2pm">Tomorrow, 02:00 PM GST</option>
                <option value="wednesday-11am">Wednesday, 11:00 AM GST</option>
                <option value="custom">Custom Schedule</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-1">
              Primary Area of Interest
            </label>
            <select
              value={formData.primaryInterest}
              onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#172B4D] focus:outline-none focus:border-[#1747E8]"
            >
              <option value="Visa & Immigration Case Processing">Visa &amp; Immigration Case Processing</option>
              <option value="Maker-Checker Document Governance">Maker-Checker Document Governance</option>
              <option value="Manpower Outsourcing & Operations HRMS">Manpower Outsourcing &amp; Operations HRMS</option>
              <option value="Automated WhatsApp Messaging Engine">Automated WhatsApp Messaging Engine</option>
            </select>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full"
              icon={Calendar}
            >
              {isSubmitting ? "Dispatching Request..." : "Confirm Demo Session"}
            </Button>
          </div>
        </form>
      ) : (
        <div className="text-center py-5 space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#1747E8]/10 text-[#1747E8] flex items-center justify-center mx-auto border border-[#1747E8]/20">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-[#102A56]">Demo Invitation Sent</h4>
            <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
              We have dispatched a calendar invitation to <span className="text-[#1747E8] font-mono font-semibold">{formData.email}</span>. A senior solutions engineer will walk through your agency workflows.
            </p>
          </div>
          <Button variant="secondary" onClick={handleClose} className="w-full">
            Done
          </Button>
        </div>
      )}
    </Modal>
  );
}
