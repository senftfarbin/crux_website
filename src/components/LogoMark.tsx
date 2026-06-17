interface LogoMarkProps {
  size?: "sm" | "md";
  variant?: "default" | "light";
  className?: string;
}

const sizeStyles = {
  sm: "h-8 w-8 text-xs",
  md: "h-9 w-9 text-sm",
};

const variantStyles = {
  default: "bg-navy-800 text-white",
  light: "bg-white/10 text-white",
};

export function LogoMark({
  size = "md",
  variant = "default",
  className = "",
}: LogoMarkProps) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-lg font-bold ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-hidden="true"
    >
      C
    </span>
  );
}
