import { siteConfig } from "@/lib/constants";
import { Button } from "./Button";

interface CTAProps {
  title?: string;
  description?: string;
}

export function CTA({
  title = "Ready for financials you can trust?",
  description = `Let's talk about your books, your business, and how ${siteConfig.brandName} can give you clearer monthly visibility with less stress.`,
}: CTAProps) {
  return (
    <section className="bg-navy-800 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="secondary">
            Schedule a Consultation
          </Button>
          <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
            Contact {siteConfig.brandName}
          </Button>
        </div>
      </div>
    </section>
  );
}
