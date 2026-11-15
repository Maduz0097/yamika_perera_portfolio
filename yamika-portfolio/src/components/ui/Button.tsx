import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
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
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light";

  const variants = {
    primary:
      "bg-gradient-to-b from-[#1E3A5F] to-[#14263E] text-white shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_12px_rgba(30,58,95,0.15)] hover:shadow-[0_4px_16px_rgba(30,58,95,0.25)] hover:from-[#172e4d] hover:to-[#0f1d30] border border-[#1E3A5F]/40 active:translate-y-px",
    secondary:
      "bg-white/80 backdrop-blur-sm border border-slate-200/90 text-slate-800 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 active:translate-y-px",
    ghost:
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-md",
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
