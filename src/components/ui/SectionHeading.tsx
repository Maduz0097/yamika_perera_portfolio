import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
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
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2 mb-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="w-5 h-[2px] bg-[#ff7043] inline-block" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#546e7a]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#263238] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-[#546e7a] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
