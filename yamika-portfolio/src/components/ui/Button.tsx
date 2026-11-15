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
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]";

  const variants = {
    primary:
      "bg-[#1E3A5F] text-white hover:bg-[#152A45] shadow-sm",
    secondary:
      "bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:text-slate-900 shadow-sm",
    ghost:
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70",
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
