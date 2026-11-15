import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/content/projects";
import Button from "@/components/ui/Button";
import SkillTag from "@/components/ui/SkillTag";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.tagline,
    path: `/work/${project.slug}`,
  });
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  // Find next project for navigation
  const sorted = [...projects].sort((a, b) => a.priority - b.priority);
  const currentIndex = sorted.findIndex((p) => p.slug === project.slug);
  const nextProject = sorted[(currentIndex + 1) % sorted.length];

  return (
    <article className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-muted">{project.client}</span>
            {project.current && (
              <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full">
                Current
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Overview */}
        <div className="space-y-10">
          {/* Context */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
              Context
            </h2>
            <p className="text-base text-foreground/90 leading-relaxed">
              {project.context}
            </p>
          </section>

          {/* My Role */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
              My Role
            </h2>
            <p className="text-base text-foreground/90 leading-relaxed">
              {project.role}
            </p>
          </section>

          {/* Description */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
              Overview
            </h2>
            <p className="text-base text-foreground/90 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Scope */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
              Scope & Key Workflows
            </h2>
            <ul className="space-y-2">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="text-sm text-foreground/80 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-accent/40 before:rounded-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
                Technical Environment
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <SkillTag key={tech} label={tech} />
                ))}
              </div>
            </section>
          )}

          {/* Delivery */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
              Delivery Approach
            </h2>
            <p className="text-base text-foreground/90 leading-relaxed">
              {project.delivery}
            </p>
          </section>

          {/* External link */}
          {project.externalUrl && (
            <div className="pt-4">
              <Button href={project.externalUrl} external variant="secondary">
                Visit {project.title} →
              </Button>
            </div>
          )}
        </div>

        {/* Navigation to next project */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Next Project
          </p>
          <Button href={`/work/${nextProject.slug}`} variant="ghost">
            {nextProject.title} →
          </Button>
        </div>
      </div>
    </article>
  );
}
