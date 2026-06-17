import type { Metadata } from "next";
import { CapabilityStatementDocument } from "@/components/capability-statement/CapabilityStatementDocument";
import { DownloadCapabilityButton } from "@/components/DownloadCapabilityButton";
import { siteConfig } from "@/lib/constants";
import "./print.css";

export const metadata: Metadata = {
  title: "Capability Statement",
  description: `Download the ${siteConfig.brandName} capability statement — monthly accounting services for growing businesses.`,
};

export default function CapabilityStatementPage() {
  return (
    <>
      <section className="download-bar border-b border-slate-200 bg-slate-50 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-600">
            View or download our one-page capability statement.
          </p>
          <DownloadCapabilityButton variant="primary" />
        </div>
      </section>

      <section className="bg-slate-100 py-10 print:bg-white print:py-0">
        <CapabilityStatementDocument />
      </section>
    </>
  );
}
