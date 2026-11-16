import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block bg-white border border-[#dde1e6] rounded-xl p-7 hover:border-[#ff7043] hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <h3 className="text-xl font-bold text-[#263238] group-hover:text-[#ff7043] transition-colors">
              {project.title}
            </h3>
            {project.current && (
              <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold text-[#d84315] bg-[#ff704318] border border-[#ff704344] rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7043]" />
                Current Project
              </span>
            )}
          </div>
          <p className="text-xs font-bold text-[#546e7a] uppercase tracking-wider mb-3">
            {project.client}
          </p>
          <p className="text-sm md:text-base text-[#546e7a] leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-2.5 py-1 text-xs font-medium text-[#263238] bg-[#f2f4f8] border border-[#dde1e6] rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="shrink-0 text-[#263238] group-hover:text-[#ff7043] group-hover:translate-x-1 transition-all duration-150 mt-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 3l5 5-5 5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
