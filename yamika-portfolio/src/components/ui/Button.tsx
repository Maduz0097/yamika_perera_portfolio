import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "blue" | "orange";
  className?: string;
  download?: boolean;
}

export default function Button({
  children,
  href,
  external,
  variant = "blue",
  className,
  download,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 shadow-sm active:translate-y-px";

  const variants = {
    primary:
      "bg-[#1E3A5F] text-white hover:bg-[#152A45] focus-visible:outline-[#1E3A5F]",
    blue:
      "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600 shadow-blue-500/10",
    orange:
      "bg-orange-600 text-white hover:bg-orange-700 focus-visible:outline-orange-600 shadow-orange-500/10",
    secondary:
      "bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-slate-400",
    ghost:
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 shadow-none",
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
