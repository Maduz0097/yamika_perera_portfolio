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
          {skills.map((group, index) => {
            const isOrangeGroup = group.category === "Product" || group.category === "AI";
            return (
              <div
                key={group.category}
                className={`bg-gradient-to-b from-white to-slate-50/60 border rounded-xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-200 ${
                  isOrangeGroup
                    ? "border-slate-200/90 hover:border-orange-300 hover:shadow-[0_4px_16px_rgba(249,115,22,0.05)]"
                    : "border-slate-200/90 hover:border-blue-300 hover:shadow-[0_4px_16px_rgba(37,99,235,0.05)]"
                }`}
              >
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOrangeGroup ? "bg-orange-500" : "bg-blue-600"
                    }`}
                  />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-md shadow-[0_1px_1px_rgba(0,0,0,0.02)] ${
                        isOrangeGroup
                          ? "text-slate-800 bg-white border border-slate-200/80 hover:border-orange-200"
                          : "text-slate-800 bg-white border border-slate-200/80 hover:border-blue-200"
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
