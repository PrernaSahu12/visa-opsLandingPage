import "./globals.css";

export const metadata = {
  title: "Vyxel — The Operating System for Visa & Manpower Operations",
  description:
    "Vyxel brings candidate workflows, document governance, WhatsApp automation and HR operations into one secure workspace built for modern visa and outsourcing agencies.",
  keywords: [
    "Visa Processing Software",
    "Immigration SaaS",
    "Manpower Outsourcing ERP",
    "Maker-Checker Document Governance",
    "Visa Workflow Automation",
    "Agency HRMS",
    "Multi-tenant Visa Platform",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-[#172B4D] antialiased selection:bg-[#1747E8]/20 selection:text-[#1747E8]">
        {children}
      </body>
    </html>
  );
}
