import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block bg-gradient-to-b from-white via-white to-slate-50/60 border border-slate-200/90 rounded-xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-blue-400/50 hover:shadow-[0_12px_30px_rgba(30,58,95,0.06)] hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 group-hover:text-[#1E3A5F] transition-colors">
              {project.title}
            </h3>
            {project.current && (
              <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 text-[11px] font-semibold text-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50/60 border border-blue-200/70 rounded-full">
                Current
              </span>
            )}
          </div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
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
                  className="inline-block px-2.5 py-1 text-[11px] font-medium text-slate-600 bg-slate-50/80 border border-slate-200/70 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="shrink-0 text-slate-400 group-hover:text-[#1E3A5F] group-hover:translate-x-1 transition-all duration-200 mt-1">
          <svg
            width="18"
            height="18"
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
