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
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Breadcrumb back */}
        <div className="mb-8">
          <Button href="/work" variant="ghost" className="text-xs font-semibold text-slate-500 hover:text-blue-600 -ml-3">
            ← Back to all projects
          </Button>
        </div>

        {/* Header */}
        <div className="mb-14 pb-8 border-b border-slate-200/80">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
              {project.client}
            </span>
            {project.current && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-orange-800 bg-orange-50 border border-orange-200/70 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Current Role & Platform
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Overview content */}
        <div className="space-y-12">
          {/* Role & Context Card */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-b from-white to-blue-50/20 border border-slate-200/90 rounded-xl">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                My Role
              </h2>
              <p className="text-sm font-semibold text-slate-900">
                {project.role}
              </p>
            </div>
            <div className="p-6 bg-gradient-to-b from-white to-orange-50/20 border border-slate-200/90 rounded-xl">
              <h2 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                Delivery Focus
              </h2>
              <p className="text-sm font-semibold text-slate-900">
                End-to-end Product Delivery & Engineering
              </p>
            </div>
          </div>

          {/* Context */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Context & Background
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {project.context}
            </p>
          </section>

          {/* Description */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Product Overview
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Scope & Key Workflows */}
          <section className="p-7 bg-gradient-to-b from-white via-white to-slate-50/60 border border-slate-200/90 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Scope & Key Workflows
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="text-sm text-slate-700 leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Technical Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 text-xs font-semibold text-blue-900 bg-blue-50/70 border border-blue-200/70 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Delivery */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Delivery Approach & Ownership
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {project.delivery}
            </p>
          </section>

          {/* External link */}
          {project.externalUrl && (
            <div className="pt-4">
              <Button href={project.externalUrl} external variant="orange">
                Visit {project.title} →
              </Button>
            </div>
          )}
        </div>

        {/* Navigation to next project */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Next Project
          </span>
          <Button href={`/work/${nextProject.slug}`} variant="ghost" className="text-sm font-bold text-blue-700 hover:text-blue-800">
            {nextProject.title} →
          </Button>
        </div>
      </div>
    </article>
  );
}
