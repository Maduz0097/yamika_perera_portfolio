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
          <Button href="/work" variant="ghost" className="text-xs font-semibold text-slate-500 hover:text-blue-600 -ml-3">
            ← Back to all projects
          </Button>
        </div>

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
              {project.client}
            </span>
            {project.current && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-orange-800 bg-orange-50 border border-orange-200 rounded">
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
        <div className="space-y-10">
          {/* Role & Delivery Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 bg-white border border-blue-200 rounded-xl shadow-xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                My Role
              </h2>
              <p className="text-sm font-semibold text-slate-900">
                {project.role}
              </p>
            </div>
            <div className="p-6 bg-white border border-orange-200 rounded-xl shadow-xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-2">
                Delivery Focus
              </h2>
              <p className="text-sm font-semibold text-slate-900">
                End-to-End Product Delivery & Engineering
              </p>
            </div>
          </div>

          {/* Context */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Context & Problem Space
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {project.context}
            </p>
          </section>

          {/* Overview */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Product Overview
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Scope & Key Workflows */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs">
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
                    className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-50 border border-blue-200 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Delivery */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Delivery Approach & Ownership
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {project.delivery}
            </p>
          </section>

          {/* External link */}
          {project.externalUrl && (
            <div className="pt-2">
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
          <Button href={`/work/${nextProject.slug}`} variant="ghost" className="text-sm font-bold text-blue-600 hover:text-blue-700">
            {nextProject.title} →
          </Button>
        </div>
      </div>
    </article>
  );
}
