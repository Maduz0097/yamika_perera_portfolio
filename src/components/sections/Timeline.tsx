import { experience } from "@/content/experience";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Timeline() {
  return (
    <section className="py-20 md:py-24 bg-[#f2f4f8] border-b border-[#dde1e6]" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="CAREER"
          title="Career Timeline"
          subtitle="Leadership and engineering experience spanning product delivery, distributed systems, and real-time platforms."
        />
        <div id="timeline-heading" className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-[#dde1e6] hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative md:pl-9">
                {/* Timeline node */}
                <div
                  className={`absolute left-0 top-2.5 hidden md:flex items-center justify-center w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? "border-[#ff7043] bg-[#ff7043] ring-4 ring-[#ff704328]"
                      : "border-[#263238] bg-white"
                  }`}
                  aria-hidden="true"
                />

                <div className="bg-white border border-[#dde1e6] rounded-xl p-6 md:p-7 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg md:text-xl font-bold text-[#263238]">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold text-[#d84315] bg-[#ff704318] border border-[#ff704344] rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7043]" />
                            Current Role
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-[#285891] mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="shrink-0 text-left sm:text-right">
                      <p className="text-xs font-bold text-[#263238] whitespace-nowrap">
                        {exp.period}
                      </p>
                      <p className="text-xs text-[#546e7a]">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-[#546e7a] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-[#ff7043] before:rounded-full"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
