"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ButtonVariant = "primary" | "outline" | "footer";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-sm",
  outline:
    "border-2 border-navy-800 text-navy-800 hover:bg-navy-50",
  footer:
    "text-slate-400 hover:text-white transition-colors text-sm",
};

interface DownloadCapabilityButtonProps {
  variant?: ButtonVariant;
  className?: string;
}

export function DownloadCapabilityButton({
  variant = "outline",
  className = "",
}: DownloadCapabilityButtonProps) {
  const pathname = usePathname();
  const isCapabilityPage = pathname === "/capability-statement";

  if (isCapabilityPage) {
    return (
      <button
        type="button"
        onClick={() => window.print()}
        className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${variantStyles[variant === "footer" ? "primary" : variant]} ${className}`}
      >
        Download Capability Statement
      </button>
    );
  }

  if (variant === "footer") {
    return (
      <Link
        href="/capability-statement"
        className={`${variantStyles.footer} ${className}`}
      >
        Download Capability Statement
      </Link>
    );
  }

  return (
    <Link
      href="/capability-statement"
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${variantStyles[variant]} ${className}`}
    >
      Download Capability Statement
    </Link>
  );
}
