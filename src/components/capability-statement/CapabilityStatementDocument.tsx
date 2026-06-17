import { LogoMark } from "@/components/LogoMark";
import { capabilityStatement } from "@/lib/capability-statement";
import { siteConfig } from "@/lib/constants";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="capability-section-heading border-b border-navy-800/15 pb-1 font-serif text-sm font-semibold text-navy-900 print:text-[11px]">
      {children}
    </h2>
  );
}

export function CapabilityStatementDocument() {
  return (
    <article className="capability-statement mx-auto max-w-[8.5in] bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 print:shadow-none print:ring-0">
      {/* Header band */}
      <header className="capability-header border-b border-navy-800/10 bg-navy-50 px-8 py-5 print:px-0 print:py-2">
        <div className="flex items-center gap-4">
          <LogoMark size="md" />
          <div>
            <h1 className="font-serif text-2xl font-semibold leading-tight text-navy-900 print:text-lg">
              {siteConfig.brandName}
            </h1>
            <p className="mt-0.5 text-sm text-slate-600 print:text-[10px]">
              {capabilityStatement.tagline}
            </p>
          </div>
        </div>
        <div className="mt-3 h-0.5 w-16 bg-accent print:mt-1.5" />
        <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500 print:mt-1 print:text-[9px]">
          Capability Statement
        </p>
      </header>

      {/* Body */}
      <div className="capability-body grid gap-6 px-8 py-6 md:grid-cols-2 print:gap-3 print:px-0 print:py-2">
        {/* Left column */}
        <div className="space-y-4 print:space-y-2.5">
          <section>
            <SectionHeading>Company Overview</SectionHeading>
            <div className="mt-2 space-y-1.5 text-sm leading-relaxed print:mt-1 print:space-y-1 print:text-[10px] print:leading-snug">
              {capabilityStatement.companyOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading>Services</SectionHeading>
            <div className="mt-2 space-y-2.5 print:mt-1 print:space-y-1.5">
              {capabilityStatement.serviceGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs font-semibold text-navy-900 print:text-[10px]">
                    {group.title}
                  </h3>
                  <ul className="mt-1 grid grid-cols-2 gap-x-3 gap-y-0.5 text-sm print:gap-y-0 print:text-[10px]">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent print:mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading>Why Crux</SectionHeading>
            <ul className="mt-2 space-y-1.5 print:mt-1 print:space-y-1">
              {capabilityStatement.whyCrux.map((item) => (
                <li
                  key={item.title}
                  className="text-sm print:text-[10px] print:leading-snug"
                >
                  <span className="font-semibold text-navy-900">
                    {item.title}.
                  </span>{" "}
                  <span className="text-slate-600">{item.description}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right column */}
        <div className="space-y-4 print:space-y-2.5">
          <section>
            <SectionHeading>About Steven Senft</SectionHeading>
            <div className="mt-2 space-y-1.5 text-sm leading-relaxed print:mt-1 print:space-y-1 print:text-[10px] print:leading-snug">
              {capabilityStatement.aboutSteven.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-slate-50 p-4 print:border-navy-800/15 print:bg-transparent print:p-2.5">
            <SectionHeading>Contact Information</SectionHeading>
            <div className="mt-3 space-y-1 text-sm print:mt-1.5 print:space-y-0.5 print:text-[10px]">
              <p className="font-semibold text-navy-900">
                {capabilityStatement.contact.name}
              </p>
              <p className="text-slate-600">
                {capabilityStatement.contact.title}
              </p>
              <p className="pt-1">
                <a
                  href={`mailto:${capabilityStatement.contact.email}`}
                  className="text-navy-800 print:no-underline"
                >
                  {capabilityStatement.contact.email}
                </a>
              </p>
              <p>{capabilityStatement.contact.website}</p>
              <p>{capabilityStatement.contact.location}</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="capability-footer border-t border-navy-800/10 px-8 py-3 text-center text-[10px] text-slate-500 print:px-0 print:py-1.5 print:text-[9px]">
        {capabilityStatement.legalDisclaimer}
      </footer>
    </article>
  );
}
