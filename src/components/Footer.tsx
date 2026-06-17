import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark variant="light" />
              <div>
                <p className="font-serif text-lg font-semibold text-white">
                  {siteConfig.brandName}
                </p>
                <p className="text-xs text-slate-400">{siteConfig.website}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
