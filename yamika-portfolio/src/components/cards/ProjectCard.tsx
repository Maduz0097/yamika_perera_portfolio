import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block bg-white border border-slate-200 rounded-xl p-6 sm:p-7 hover:border-blue-300 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            {project.current && (
              <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-semibold text-orange-800 bg-orange-50 border border-orange-200 rounded-full shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Current Project
              </span>
            )}
          </div>
          <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-3">
            {project.client}
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-2.5 py-1 text-[11px] font-medium text-blue-800 bg-blue-50/70 border border-blue-200/60 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="shrink-0 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-150 mt-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
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
