import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "orange";
  className?: string;
  download?: boolean;
}

export default function Button({
  children,
  href,
  external,
  variant = "primary",
  className,
  download,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:translate-y-px";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] hover:from-blue-800 hover:to-blue-700 border border-blue-600/50",
    secondary:
      "bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-800 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900",
    orange:
      "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_14px_rgba(249,115,22,0.25)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.35)] hover:from-orange-700 hover:to-amber-700 border border-orange-500/50",
    ghost:
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-md",
  };

  const classes = cn(base, variants[variant], className);

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...(download ? { download: true } : {})}
      >
        {children}
        <span className="sr-only">(opens in new tab)</span>
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <span className={classes}>{children}</span>;
}
