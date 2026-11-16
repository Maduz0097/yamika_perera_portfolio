import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "dark" | "ghost";
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
    "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer active:translate-y-px";

  // Solid flat borders and backgrounds - NO gradient outlines!
  const variants = {
    primary:
      "bg-[#ff7043] border border-[#ff7043] text-white hover:bg-[#f4511e] hover:border-[#f4511e] shadow-xs",
    dark:
      "bg-[#263238] border border-[#263238] text-white hover:bg-[#1b2428] hover:border-[#1b2428] shadow-xs",
    secondary:
      "bg-white border border-[#dde1e6] text-[#263238] hover:bg-[#f2f4f8] hover:border-[#c5cbd3] shadow-xs",
    ghost:
      "text-[#263238] hover:text-[#ff7043] hover:bg-[#f2f4f8]",
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
