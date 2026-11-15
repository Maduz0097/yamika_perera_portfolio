import { skills } from "@/content/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section className="py-24 border-t border-slate-200/80" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Technical Capabilities"
          subtitle="Experience areas across product strategy, engineering leadership, and hands-on AI implementation."
        />
        <div id="skills-heading" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-gradient-to-b from-white to-slate-50/60 border border-slate-200/90 rounded-xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-100">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block px-3 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200/80 rounded-md shadow-[0_1px_1px_rgba(0,0,0,0.02)]"
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
