import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
