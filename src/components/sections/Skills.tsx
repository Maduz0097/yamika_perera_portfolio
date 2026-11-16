import { skills } from "@/content/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section className="py-20 md:py-24 border-b border-[#dde1e6]" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="CAPABILITIES"
          title="Technical Capabilities"
          subtitle="Experience areas across product strategy, engineering leadership, and hands-on AI implementation."
        />
        <div id="skills-heading" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-[#dde1e6] rounded-xl p-6 shadow-xs hover:border-[#263238] transition-colors"
            >
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#dde1e6]">
                <span className="w-2 h-2 rounded-full bg-[#ff7043]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#263238]">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block px-3 py-1 text-xs font-medium text-[#263238] bg-[#f2f4f8] border border-[#dde1e6] rounded"
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
