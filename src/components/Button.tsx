import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-sm",
  secondary:
    "bg-accent text-white hover:bg-accent-dark shadow-sm",
  outline:
    "border-2 border-navy-800 text-navy-800 hover:bg-navy-50",
};

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
