import Link from "next/link";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { pricingTiers, services, siteConfig, values } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Monthly Accounting Support
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy-900 md:text-5xl lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
              For business owners who have outgrown basic bookkeeping.{" "}
              {siteConfig.brandName} delivers clean books, reconciled accounts,
              and monthly financials you can actually use — so you spend less
              time worrying about numbers and more time running your business.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">
                Schedule a Consultation
              </Button>
              <Button href="/services" variant="outline">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-y border-slate-200 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy-900 md:text-3xl">
                You need more than a bookkeeper
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                When your business grows, scattered spreadsheets and
                end-of-year surprises stop working. You need reconciled books,
                consistent monthly reporting, and someone who understands what
                the numbers mean for your decisions.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy-900 md:text-3xl">
                Financial visibility without the stress
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                {siteConfig.brandName} handles the monthly accounting work —
                bookkeeping, reconciliations, bill pay, payroll coordination,
                and variance reporting — so you always have accurate, actionable
                financials at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 md:text-4xl">
              What we handle every month
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Comprehensive monthly accounting support designed for small
              business owners who want clarity, not complexity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="mt-4 font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-navy-800 hover:text-navy-700"
            >
              See all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 md:text-4xl">
              Why business owners choose {siteConfig.brandName}
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center md:text-left">
                <div className="mx-auto h-1 w-12 bg-accent md:mx-0" />
                <h3 className="mt-4 font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 md:text-4xl">
              Monthly Accounting Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Professional support for growing businesses, with each Monthly
              Accounting Services level aligned to the financial visibility you
              need right now.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-6 ${
                  tier.highlighted
                    ? "border-navy-800 bg-navy-800 text-white shadow-lg"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    tier.highlighted ? "text-white" : "text-navy-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-sm font-medium ${
                    tier.highlighted ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  Starting at{" "}
                  <span
                    className={`text-3xl font-bold ${
                      tier.highlighted ? "text-white" : "text-navy-900"
                    }`}
                  >
                    ${tier.price.toLocaleString()}
                  </span>
                  /month
                </p>
                <p
                  className={`mt-3 text-sm ${
                    tier.highlighted ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {tier.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Pricing depends on transaction volume, number of accounts, payroll
            complexity, cleanup needs, and reporting requirements.
          </p>

          <div className="mt-10 text-center">
            <Button href="/pricing" variant="outline">
              Compare Monthly Accounting Services
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
