import { projects } from "@/content/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SelectedWork() {
  const sorted = [...projects].sort((a, b) => a.priority - b.priority);

  return (
    <section className="py-20 md:py-24 border-b border-[#dde1e6]" aria-labelledby="work-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="PORTFOLIO"
          title="Selected Work"
          subtitle="Product management and engineering leadership across enterprise field services, AI recruitment, and real-time platforms."
        />
        <div id="work-heading" className="grid gap-5">
          {sorted.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
