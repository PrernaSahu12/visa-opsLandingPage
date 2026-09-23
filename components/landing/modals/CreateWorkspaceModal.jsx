
import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export function CreateWorkspaceModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    agencyName: "",
    subdomain: "",
    region: "dubai",
    teamSize: "10-50",
    workloadType: "visa",
    adminEmail: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.agencyName) return;
      setStep(2);
    } else if (step === 2) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(3);
      }, 1000);
    }
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      agencyName: "",
      subdomain: "",
      region: "dubai",
      teamSize: "10-50",
      workloadType: "visa",
      adminEmail: "",
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={
        step === 3 ? "Workspace Provisioned" : "Provision Your Vyxel Workspace"
      }
      maxWidth="max-w-lg"
    >
      {step === 1 && (
        <form onSubmit={handleNext} className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="brand">Step 1 of 2</Badge>
            <span className="text-xs text-[#64748B] font-medium">Organization & Tenancy</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-1.5">
              Agency / Firm Legal Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-3.5 top-3 w-4 h-4 text-[#64748B]" />
              <input
                type="text"
                required
                placeholder="e.g. Apex Global Visa & Manpower Ltd."
                value={formData.agencyName}
                onChange={(e) => {
                  const val = e.target.value;
                  const slug = val
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "-")
                    .replace(/-+/g, "-")
                    .slice(0, 24);
                  setFormData({ ...formData, agencyName: val, subdomain: slug });
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#1747E8] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-1.5">
              Dedicated Workspace Subdomain
            </label>
            <div className="flex items-center bg-white border border-[#E2E8F0] rounded-lg overflow-hidden focus-within:border-[#1747E8]">
              <span className="pl-3.5 pr-1 text-[#64748B] text-sm font-mono select-none">
                https://
              </span>
              <input
                type="text"
                required
                placeholder="agency-name"
                value={formData.subdomain}
                onChange={(e) =>
                  setFormData({ ...formData, subdomain: e.target.value })
                }
                className="flex-1 py-2.5 bg-transparent text-sm font-mono text-[#1747E8] font-bold focus:outline-none"
              />
              <span className="pr-3.5 pl-1 text-[#64748B] text-xs font-mono select-none">
                .vyxel.ops
              </span>
            </div>
            <p className="mt-1 text-[11px] text-[#64748B]">
              Isolated multi-tenant container with dedicated encryption boundary.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-1.5">
                Primary Jurisdiction
              </label>
              <select
                value={formData.region}
                onChange={(e) =>
                  setFormData({ ...formData, region: e.target.value })
                }
                className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#172B4D] focus:outline-none focus:border-[#1747E8]"
              >
                <option value="dubai">Dubai & UAE (Inside/Outside)</option>
                <option value="gcc">GCC & Middle East</option>
                <option value="uk-eu">UK & Europe</option>
                <option value="global">Global Consultancies</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-1.5">
                Team Size
              </label>
              <select
                value={formData.teamSize}
                onChange={(e) =>
                  setFormData({ ...formData, teamSize: e.target.value })
                }
                className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#172B4D] focus:outline-none focus:border-[#1747E8]"
              >
                <option value="1-10">1 – 10 Processors</option>
                <option value="10-50">10 – 50 Processors</option>
                <option value="50-200">50 – 200 Processors</option>
                <option value="200+">200+ Enterprise Scale</option>
              </select>
            </div>
          </div>

          <div className="pt-3">
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              iconRight={ArrowRight}
            >
              Continue to Operation Focus
            </Button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleNext} className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="brand">Step 2 of 2</Badge>
            <span className="text-xs text-[#64748B] font-medium">Modules & Administrator</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-2">
              Select Operational Focus
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                {
                  id: "visa",
                  title: "Visa Processing & Immigration Agency",
                  desc: "Case DAGs, Maker-Checker document review, WhatsApp automation.",
                },
                {
                  id: "manpower",
                  title: "Manpower Outsourcing & Staffing",
                  desc: "Batch candidate intake, biometric HRMS, attendance & payroll.",
                },
                {
                  id: "hybrid",
                  title: "Full Vertical Agency Suite (All Modules)",
                  desc: "Visa processing, document governance, HRMS, multi-branch operations.",
                },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() =>
                    setFormData({ ...formData, workloadType: opt.id })
                  }
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    formData.workloadType === opt.id
                      ? "bg-[#EEF4FF] border-[#1747E8] text-[#102A56]"
                      : "bg-[#F7F9FC] border-[#E2E8F0] hover:border-[#CBD5E1] text-[#172B4D]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#102A56]">{opt.title}</span>
                    <input
                      type="radio"
                      checked={formData.workloadType === opt.id}
                      onChange={() => {}}
                      className="accent-[#1747E8]"
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-[#64748B]">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#102A56] uppercase tracking-wider mb-1.5">
              Work Email (Admin Account)
            </label>
            <input
              type="email"
              required
              placeholder="operations.lead@company.com"
              value={formData.adminEmail}
              onChange={(e) =>
                setFormData({ ...formData, adminEmail: e.target.value })
              }
              className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#172B4D] focus:outline-none focus:border-[#1747E8]"
            />
          </div>

          <div className="flex gap-3 pt-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(1)}
              className="w-1/3"
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-2/3"
              icon={isSubmitting ? Sparkles : ShieldCheck}
            >
              {isSubmitting ? "Provisioning..." : "Initialize Workspace"}
            </Button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div className="text-center py-4 space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#18A875]/10 text-[#18A875] flex items-center justify-center mx-auto border border-[#18A875]/25">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#102A56]">
              Workspace Initialized Successfully
            </h4>
            <p className="text-xs text-[#64748B] mt-1 max-w-sm mx-auto">
              Your tenant sandbox has been generated with strict data isolation
              and default Dubai C4 workflow templates.
            </p>
          </div>

          <div className="bg-[#F7F9FC] p-4 rounded-xl border border-[#E2E8F0] text-left space-y-2 font-mono text-xs">
            <div className="flex justify-between items-center text-[#64748B]">
              <span>Tenant ID:</span>
              <span className="text-[#1747E8] font-bold">VX-T84920-UAE</span>
            </div>
            <div className="flex justify-between items-center text-[#64748B]">
              <span>Access Endpoint:</span>
              <span className="text-[#18A875] font-semibold">
                https://{formData.subdomain || "apex-ops"}.vyxel.ops
              </span>
            </div>
            <div className="flex justify-between items-center text-[#64748B]">
              <span>Work Scope:</span>
              <span className="text-[#102A56] font-semibold">ALL_COMPANY (Admin)</span>
            </div>
            <div className="flex justify-between items-center text-[#64748B]">
              <span>Security Guard:</span>
              <span className="text-[#1747E8] font-semibold">Tenant-Aware JWT + AWS S3</span>
            </div>
          </div>

          <div className="pt-2">
            <Button variant="primary" onClick={handleReset} className="w-full">
              Enter Workspace Demo Console
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
