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
          {skills.map((group) => {
            const isOrangeGroup = group.category === "Product" || group.category === "AI";
            return (
              <div
                key={group.category}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOrangeGroup ? "bg-orange-500" : "bg-blue-600"
                    }`}
                  />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`inline-block px-2.5 py-1 text-xs font-medium rounded border ${
                        isOrangeGroup
                          ? "text-slate-800 bg-orange-50/40 border-orange-200/70"
                          : "text-slate-800 bg-blue-50/40 border-blue-200/70"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
