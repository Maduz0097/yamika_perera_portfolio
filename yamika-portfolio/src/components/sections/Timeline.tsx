import { experience } from "@/content/experience";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Timeline() {
  return (
    <section className="py-20 border-t border-border" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading title="Career Timeline" />
        <div id="timeline-heading" className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative md:pl-8">
                {/* Dot */}
                <div
                  className="absolute left-0 top-2 hidden md:block w-[15px] h-[15px] rounded-full border-2 border-accent bg-background"
                  aria-hidden="true"
                />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted">{exp.company}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm text-muted whitespace-nowrap">
                      {exp.period}
                    </p>
                    <p className="text-xs text-muted">{exp.location}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-foreground/80 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-border before:rounded-full"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
