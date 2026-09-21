"use client";

import React, { useState } from "react";
import {
  Database,
  KeyRound,
  HardDrive,
  Fingerprint,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Server,
  Layers,
  FileCheck2,
} from "lucide-react";

export function SecurityPillars({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState("tenant_isolation");

  const pillars = [
    {
      id: "tenant_isolation",
      badge: "Defense Layer 01",
      title: "Tenant-Level Data Isolation",
      subtitle: "Hard companyId Partition Boundaries",
      description:
        "Every single database transaction, Redis cache key, and Elasticsearch search query automatically injects and enforces company-level tenant boundaries. Operational records cannot cross agency boundaries under any circumstance.",
      bullets: [
        "Automated ORM middleware injection of companyId",
        "Tenant-scoped Redis key namespaces (e.g. cache:cmp_9812:*)",
        "Zero shared memory or state between competing agencies",
        "Automated penetration tests continuously verify tenant isolation",
      ],
      previewCode: `// Middleware Tenant Injection
app.use(async (req, res, next) => {
  const tenantId = req.auth.companyId;
  req.db = createTenantScopedClient(tenantId);
  // Any query without tenantId is rejected by database engine
  next();
});`,
    },
    {
      id: "rbac_workscope",
      badge: "Defense Layer 02",
      title: "Granular RBAC & WorkScope",
      subtitle: "ASSIGNED_ONLY vs ALL_COMPANY Isolation",
      description:
        "Operational processors are constrained strictly to their own assigned cases (/my-work). Junior typists and external agents can never view or download cases belonging to colleagues, while managers maintain high-level pipeline telemetry.",
      bullets: [
        "Dual WorkScope model: ASSIGNED_ONLY vs ALL_COMPANY",
        "Field-level redaction for sensitive applicant documents",
        "Decoupled subscription entitlement gates from functional roles",
        "Granular permission policies (View, Edit, Submit, Override)",
      ],
      previewCode: `// WorkScope Authorization Filter
const cases = await db.cases.findMany({
  where: {
    companyId: user.companyId,
    ...(user.workScope === 'ASSIGNED_ONLY' 
      ? { assignedProcessorId: user.id } 
      : {}),
  }
});`,
    },
    {
      id: "encrypted_vault",
      badge: "Defense Layer 03",
      title: "AWS S3 Encrypted Document Vault",
      subtitle: "AES-256 KMS with 15-Min Expiring Pre-Signed URLs",
      description:
        "Candidate passports, national IDs, and medical reports never touch public storage. Every document is encrypted at rest with AES-256 AWS-KMS and served only via ephemeral, cryptographically signed URLs that expire within 15 minutes.",
      bullets: [
        "100% private AWS S3 buckets with public access completely blocked",
        "Server-Side Encryption with AWS Key Management Service (SSE-KMS)",
        "Ephemeral pre-signed download tokens expire automatically in 900 seconds",
        "Tamper-evident document hashing using SHA-256 on ingest",
      ],
      previewCode: `// Ephemeral Pre-Signed URL Generation
const signedUrl = await s3.getSignedUrlPromise('getObject', {
  Bucket: process.env.SECURE_DOCUMENT_BUCKET,
  Key: \`tenants/\${companyId}/cases/\${caseId}/\${documentId}\`,
  Expires: 900 // Valid strictly for 15 minutes
});`,
    },
    {
      id: "session_security",
      badge: "Defense Layer 04",
      title: "Session Security & JWT Token Rotation",
      subtitle: "Stateless Dual-Token Lifecycle with 2FA",
      description:
        "Vyxel safeguards agency staff accounts with short-lived 15-minute JWT access tokens paired with rotating HTTP-only refresh tokens. Directors can revoke compromised devices or active sessions across the agency in real time.",
      bullets: [
        "15-minute stateless JWT access tokens prevent token replay attacks",
        "Secure, HTTP-only, SameSite=Strict rotating refresh tokens",
        "Instant one-click active session revocation across all staff devices",
        "Mandatory TOTP & Biometric Two-Factor Authentication (2FA) support",
      ],
      previewCode: `// Rotating Refresh Token Exchange
POST /api/v1/auth/refresh
Headers: Cookie: __Secure-refresh-token=...
Response: 200 OK
{
  "accessToken": "eyJhbGciOiJIUzI1Ni...",
  "expiresIn": 900,
  "tokenType": "Bearer"
}`,
    },
  ];

  const activePillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section className="py-8 sm:py-10 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#102A56]/5 text-[#102A56] text-[11px] font-semibold uppercase tracking-wider mb-2">
            Defense Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-serif text-[#102A56] font-normal leading-[1.18] tracking-tight">
            Four Layers of Non-Negotiable Protection
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Engineered to safeguard millions of sensitive candidate identity records against unauthorized cross-tenant leakage, external breaches, and internal data theft.
          </p>
        </div>

        {/* Pillar Navigation Tabs */}
        <div className="flex items-center justify-center overflow-x-auto pb-3 gap-2 sm:gap-2.5">
          {pillars.map((pillar) => {
            const isSelected = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-[#102A56] text-white shadow-sm"
                    : "bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#475569]"
                }`}
              >
                <span className="opacity-75 mr-1 font-mono text-[10px]">{pillar.badge}:</span>
                {pillar.title.split(" ")[0]} {pillar.title.split(" ")[1]}
              </button>
            );
          })}
        </div>

        {/* Panoramic Card Showcase */}
        <div className="mt-4 rounded-3xl bg-[linear-gradient(135deg,#F8FAFC_0%,#F1F5F9_100%)] border border-[#DCE7F3] p-5 sm:p-7 shadow-[0_8px_30px_rgba(16,42,86,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Content Column (5 cols) */}
            <div className="lg:col-span-5 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1747E8] text-[11px] font-semibold">
                {activePillar.badge}
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-[#102A56] leading-snug">
                {activePillar.title}
              </h3>

              <div className="text-xs sm:text-sm font-medium text-[#1747E8]">
                {activePillar.subtitle}
              </div>

              <p className="text-xs text-[#475569] leading-relaxed">
                {activePillar.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-1.5 pt-1">
                {activePillar.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#102A56] hover:bg-[#1747E8] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer active:scale-95"
                >
                  <span>Request Technical Architecture Deck</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Interactive Code & Architecture Visual Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-md overflow-hidden">
                
                {/* Window Bar */}
                <div className="px-3.5 py-2 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-600 ml-1.5">
                      security://defense-layer/{activePillar.id}.ts
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#0E8A54] bg-[#E8FAF0] border border-[#B9ECCE] px-2 py-0.5 rounded">
                    ENFORCED: PRODUCTION
                  </span>
                </div>

                {/* Code & Logic Body */}
                <div className="p-3 sm:p-4 bg-slate-900 text-slate-200">
                  <pre className="font-mono text-[11px] leading-relaxed overflow-x-auto text-emerald-400">
                    <code>{activePillar.previewCode}</code>
                  </pre>
                </div>

                {/* Bottom Status Bar */}
                <div className="px-4 py-2 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>AES-256 KMS Verified</span>
                  <span>Zero Unscoped Queries Permitted</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
