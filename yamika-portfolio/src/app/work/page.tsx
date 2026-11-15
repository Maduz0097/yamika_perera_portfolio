import { createMetadata } from "@/lib/metadata";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Selected projects in product management, engineering leadership, and AI product delivery.",
  path: "/work",
});

export default function WorkPage() {
  const sorted = [...projects].sort((a, b) => a.priority - b.priority);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Selected Work"
          subtitle="Product leadership and engineering across AI-enabled platforms, field services, recruitment technology, and analytics."
        />
        <div className="grid gap-4">
          {sorted.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
