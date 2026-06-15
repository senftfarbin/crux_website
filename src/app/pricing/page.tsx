import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { pricingTiers } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent monthly pricing for small business accounting. Essential $700/mo, Plus $1,000/mo, Controller $1,500/mo.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-navy-50 to-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Pricing
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-navy-900 md:text-5xl">
            Simple, monthly pricing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            No hidden fees or surprise invoices. Pick the plan that matches your
            business today — and scale up as your needs grow.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-navy-800 bg-navy-800 text-white shadow-xl lg:scale-105"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h2
                  className={`text-xl font-semibold ${
                    tier.highlighted ? "text-white" : "text-navy-900"
                  }`}
                >
                  {tier.name}
                </h2>
                <div className="mt-4">
                  <span
                    className={`text-4xl font-bold ${
                      tier.highlighted ? "text-white" : "text-navy-900"
                    }`}
                  >
                    ${tier.price.toLocaleString()}
                  </span>
                  <span
                    className={
                      tier.highlighted ? "text-slate-300" : "text-slate-500"
                    }
                  >
                    /month
                  </span>
                </div>
                <p
                  className={`mt-3 text-sm ${
                    tier.highlighted ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {tier.description}
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          tier.highlighted ? "text-accent" : "text-navy-800"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={
                          tier.highlighted ? "text-slate-200" : "text-slate-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant={tier.highlighted ? "secondary" : "primary"}
                    className={`w-full ${
                      tier.highlighted
                        ? ""
                        : ""
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            All plans are billed monthly. Pricing may vary based on transaction
            volume and complexity — we&apos;ll confirm details during your
            consultation.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-serif text-3xl font-semibold text-navy-900">
            Frequently asked questions
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            {[
              {
                q: "What's included in every plan?",
                a: "All plans include monthly bookkeeping, bank and credit card reconciliations, and standard financial statements. Higher tiers add bill pay support, variance reporting, payroll services, and dedicated review calls.",
              },
              {
                q: "Do you handle tax returns?",
                a: "Crux CPA focuses on monthly accounting and financial reporting — not tax preparation. We keep your books clean so your tax professional has accurate data when filing season comes.",
              },
              {
                q: "How long does onboarding take?",
                a: "Most clients are fully onboarded within 2–3 weeks. We'll review your current setup, connect accounts, and establish a monthly close schedule that works for your business.",
              },
              {
                q: "Can I switch plans later?",
                a: "Absolutely. As your business grows, your accounting needs change. We'll help you move to the right tier when the time comes.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-semibold text-navy-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Let's find the right plan for your business"
        description="Schedule a free consultation and we'll recommend the level of monthly support that makes sense for where you are today."
      />
    </>
  );
}
