import { experience } from "@/content/experience";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Timeline() {
  return (
    <section className="py-20 border-t border-slate-200" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Career Timeline"
          subtitle="Leadership and engineering experience spanning product delivery, distributed systems, and real-time platforms."
        />
        <div id="timeline-heading" className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-slate-200 hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative md:pl-9">
                {/* Timeline node */}
                <div
                  className={`absolute left-0 top-2 hidden md:flex items-center justify-center w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? "border-orange-500 bg-orange-500 ring-4 ring-orange-100"
                      : "border-blue-600 bg-white"
                  }`}
                  aria-hidden="true"
                />

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-semibold text-orange-800 bg-orange-50 border border-orange-200 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            Current Role
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-blue-700 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="shrink-0 text-left sm:text-right mt-1 sm:mt-0">
                      <p className="text-xs font-bold text-slate-700 whitespace-nowrap">
                        {exp.period}
                      </p>
                      <p className="text-xs text-slate-500">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-600 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-blue-400 before:rounded-full"
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
