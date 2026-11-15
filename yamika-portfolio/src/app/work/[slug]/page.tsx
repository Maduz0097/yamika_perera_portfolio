import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/content/projects";
import Button from "@/components/ui/Button";

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
        {/* Breadcrumb back */}
        <div className="mb-8">
          <Button href="/work" variant="ghost" className="text-xs font-medium text-slate-500 hover:text-slate-900 -ml-3">
            ← Back to all projects
          </Button>
        </div>

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
              {project.client}
            </span>
            {project.current && (
              <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded">
                Current
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Overview content */}
        <div className="space-y-10">
          {/* Role */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              My Role
            </h2>
            <p className="text-base text-slate-800 leading-relaxed">
              {project.role}
            </p>
          </section>

          {/* Context */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Context
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {project.context}
            </p>
          </section>

          {/* Overview */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Overview
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Scope & Key Workflows */}
          <section className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Scope & Key Workflows
            </h2>
            <ul className="space-y-2.5">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="text-sm text-slate-700 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-slate-400 before:rounded-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Technical Environment
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Delivery */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Delivery Approach
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {project.delivery}
            </p>
          </section>

          {/* External link */}
          {project.externalUrl && (
            <div className="pt-2">
              <Button href={project.externalUrl} external variant="secondary">
                Visit {project.title} →
              </Button>
            </div>
          )}
        </div>

        {/* Navigation to next project */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Next Project
          </span>
          <Button href={`/work/${nextProject.slug}`} variant="ghost" className="text-sm font-semibold text-[#1E3A5F]">
            {nextProject.title} →
          </Button>
        </div>
      </div>
    </article>
  );
}
