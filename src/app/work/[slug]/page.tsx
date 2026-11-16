import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/content/projects";
import Button from "@/components/ui/Button";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.tagline,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
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
          <Button href="/work" variant="ghost" className="text-xs font-semibold text-[#546e7a] hover:text-[#ff7043] -ml-3">
            ← Back to all projects
          </Button>
        </div>

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[#dde1e6]">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#263238] bg-[#f2f4f8] px-2.5 py-1 rounded border border-[#dde1e6]">
              {project.client}
            </span>
            {project.current && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#d84315] bg-[#ff704318] border border-[#ff704344] rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7043]" />
                Current Role & Platform
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#263238] leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#546e7a] leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Overview content */}
        <div className="space-y-10">
          {/* Role & Delivery Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 bg-[#f2f4f8] border border-[#dde1e6] rounded-xl">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#285891] mb-2">
                My Role
              </h2>
              <p className="text-sm font-bold text-[#263238]">
                {project.role}
              </p>
            </div>
            <div className="p-6 bg-white border border-[#dde1e6] rounded-xl">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff7043] mb-2">
                Delivery Focus
              </h2>
              <p className="text-sm font-bold text-[#263238]">
                End-to-End Product Delivery & Engineering
              </p>
            </div>
          </div>

          {/* Context */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#546e7a] mb-2">
              Context & Problem Space
            </h2>
            <p className="text-base text-[#263238] leading-relaxed">
              {project.context}
            </p>
          </section>

          {/* Product Overview */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#546e7a] mb-2">
              Product Overview
            </h2>
            <p className="text-base text-[#263238] leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Key Product Capabilities / Features */}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#263238] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7043]" />
                Key Product Capabilities
              </h2>
              <div className="grid gap-3">
                {project.features.map((feat) => (
                  <div
                    key={feat.title}
                    className="p-4 bg-[#f2f4f8] border border-[#dde1e6] rounded-lg"
                  >
                    <h3 className="text-sm font-bold text-[#263238] mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[#546e7a] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Scope & Key Workflows */}
          <section className="bg-white border border-[#dde1e6] rounded-xl p-6 sm:p-7 shadow-xs">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#263238] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7043]" />
              Scope & Key Workflows
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[#546e7a] leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-[#ff7043] before:rounded-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#546e7a] mb-3">
                Technical Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 text-xs font-semibold text-[#263238] bg-[#f2f4f8] border border-[#dde1e6] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Delivery */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#546e7a] mb-2">
              Delivery Approach & Ownership
            </h2>
            <p className="text-base text-[#263238] leading-relaxed">
              {project.delivery}
            </p>
          </section>

          {/* External link */}
          {project.externalUrl && (
            <div className="pt-2">
              <Button href={project.externalUrl} external variant="primary">
                Visit {project.title} →
              </Button>
            </div>
          )}
        </div>

        {/* Navigation to next project */}
        <div className="mt-16 pt-8 border-t border-[#dde1e6] flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#546e7a]">
            Next Project
          </span>
          <Button href={`/work/${nextProject.slug}`} variant="ghost" className="text-sm font-bold text-[#263238] hover:text-[#ff7043]">
            {nextProject.title} →
          </Button>
        </div>
      </div>
    </article>
  );
}
