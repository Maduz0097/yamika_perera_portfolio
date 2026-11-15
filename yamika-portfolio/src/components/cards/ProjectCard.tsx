import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block bg-gradient-to-b from-white via-white to-slate-50/60 border border-slate-200/90 rounded-xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-blue-400/60 hover:shadow-[0_12px_32px_rgba(37,99,235,0.08)] hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
              {project.title}
            </h3>
            {project.current && (
              <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-semibold text-orange-800 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 rounded-full shadow-[0_1px_2px_rgba(249,115,22,0.05)]">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Current Project
              </span>
            )}
          </div>
          <p className="text-xs font-semibold text-blue-800/80 uppercase tracking-wider mb-3">
            {project.client}
          </p>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-blue-50/40 border border-blue-200/60 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="shrink-0 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1.5 transition-all duration-200 mt-1">
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
