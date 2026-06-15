import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { values } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Crux CPA PLLC provides monthly accounting support for small businesses that need accurate, actionable financials.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-navy-50 to-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            About Crux CPA
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-navy-900 md:text-5xl">
            Your monthly accounting partner
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Crux CPA PLLC was founded on a simple belief: small business
            owners deserve the same quality of monthly financials that larger
            companies take for granted — without the overhead of a full
            in-house accounting team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900">
                Built for owners who have outgrown basic bookkeeping
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                You started a business to do what you love — not to spend
                evenings reconciling bank feeds or wondering if last month&apos;s
                numbers are right. As you grow, the gap between &ldquo;good
                enough&rdquo; bookkeeping and the financial clarity you need
                gets wider.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Crux CPA fills that gap. We provide the monthly accounting
                infrastructure — clean books, reconciled balance sheets, bill
                pay support, payroll coordination, and variance reporting —
                so you always know where your business stands and where it&apos;s
                headed.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-navy-50 p-8">
              <blockquote className="font-serif text-xl leading-relaxed text-navy-900">
                &ldquo;Accurate books. Actionable financials. Better
                decisions.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-slate-600">
                That&apos;s not just our tagline — it&apos;s the standard we hold
                every monthly close to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-serif text-3xl font-semibold text-navy-900">
            What we stand for
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="h-1 w-10 bg-accent" />
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
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

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900">
              Not your typical CPA firm
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We&apos;re not focused on tax season rush or one-size-fits-all
              packages. Crux CPA is built around a monthly rhythm — consistent
              bookkeeping, regular reconciliations, and reporting that helps you
              run your business better every single month.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Whether you&apos;re a growing service business, a retail operation,
              or a company scaling past your first few employees, we provide
              the financial foundation you need to make confident decisions.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
