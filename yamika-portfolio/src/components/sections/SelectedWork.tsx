import { projects } from "@/content/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SelectedWork() {
  const sorted = [...projects].sort((a, b) => a.priority - b.priority);

  return (
    <section className="py-20 border-t border-border" aria-labelledby="work-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Selected Work"
          subtitle="Product leadership and engineering across AI, field services, recruitment, and analytics."
          className=""
        />
        <div
          id="work-heading"
          className="grid gap-4"
        >
          {sorted.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
