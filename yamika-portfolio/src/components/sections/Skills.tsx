import { skills } from "@/content/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillTag from "@/components/ui/SkillTag";

export default function Skills() {
  return (
    <section className="py-20 border-t border-border" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Technical Capabilities"
          subtitle="Experience areas across product, engineering, and AI disciplines."
        />
        <div id="skills-heading" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillTag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
