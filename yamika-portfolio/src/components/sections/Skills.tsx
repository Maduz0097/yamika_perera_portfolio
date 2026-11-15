import { skills } from "@/content/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section className="py-20 border-t border-slate-200" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Technical Capabilities"
          subtitle="Experience areas across product strategy, engineering leadership, and hands-on AI implementation."
        />
        <div id="skills-heading" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-100">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
