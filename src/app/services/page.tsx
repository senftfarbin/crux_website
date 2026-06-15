import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Monthly bookkeeping, bill pay support, balance sheet reconciliations, payroll coordination, P&L variance reporting, and owner-ready financials.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-navy-50 to-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-navy-900 md:text-5xl">
            Monthly accounting that keeps up with your business
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Crux CPA is built for small business owners who need reliable
            monthly financials — not just tax-season scrambling. Every service
            is designed to give you accurate books and the visibility to make
            better decisions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                  <ServiceIcon icon={service.icon} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-1 text-xl font-semibold text-navy-900">
                    {service.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900">
              How it works
            </h2>
            <p className="mt-4 text-slate-600">
              A consistent monthly rhythm that keeps your books current and your
              decisions informed.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Onboard & connect",
                description:
                  "We learn your business, connect your accounts, and set up a clean chart of accounts tailored to how you operate.",
              },
              {
                step: "02",
                title: "Monthly close & reconcile",
                description:
                  "Every month we categorize transactions, reconcile accounts, process bill pay, and coordinate payroll as needed.",
              },
              {
                step: "03",
                title: "Review & decide",
                description:
                  "You receive owner-ready reports with variance analysis — financials you can trust and actually use.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-serif text-4xl font-semibold text-navy-800/20">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Not sure which services you need?"
        description="We'll walk through your current setup and recommend the right level of monthly support — no pressure, no jargon."
      />
    </>
  );
}
