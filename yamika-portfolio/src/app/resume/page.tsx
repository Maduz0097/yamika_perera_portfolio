import { createMetadata } from "@/lib/metadata";
import { profile } from "@/content/profile";
import { experience, education } from "@/content/experience";
import { skills } from "@/content/skills";
import Button from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Resume",
  description:
    "Yamika Perera — Technical Product Manager resume. Product leadership, engineering team management, and AI product delivery.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12 pb-8 border-b border-[#dde1e6]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#ff7043] inline-block" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#546e7a]">
                CURRICULUM VITAE
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#263238]">
              {profile.name}
            </h1>
            <p className="text-lg font-semibold text-[#ff7043] mt-1">{profile.title}</p>
            <p className="text-sm text-[#546e7a] mt-1">
              {profile.location} • Open to relocation to Dubai, UAE
            </p>
          </div>
          <div className="flex gap-2">
            <Button href={`mailto:${profile.email}`} external variant="primary">
              Email
            </Button>
            <Button href={profile.linkedin} external variant="secondary">
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#546e7a] mb-3">
            Professional Summary
          </h2>
          <p className="text-base text-[#263238] leading-relaxed">
            {profile.summary}
          </p>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#546e7a] mb-6">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="border-l-2 border-[#dde1e6] pl-5 relative">
                <span className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${exp.current ? "bg-[#ff7043]" : "bg-[#263238]"}`} />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-[#263238]">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#ff7043]">{exp.company}</p>
                  </div>
                  <p className="text-xs font-bold text-[#263238] whitespace-nowrap shrink-0">
                    {exp.period}
                  </p>
                </div>
                <p className="text-xs text-[#546e7a] mt-0.5">{exp.location}</p>
                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-[#546e7a] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-[#263238] before:rounded-full"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#546e7a] mb-6">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="border-l-2 border-[#dde1e6] pl-5">
                <h3 className="text-sm font-bold text-[#263238]">
                  {edu.degree}
                </h3>
                <p className="text-sm text-[#546e7a] mt-0.5">
                  {edu.institution}
                  {edu.year && ` · ${edu.year}`}
                </p>
                {edu.note && (
                  <p className="text-xs font-semibold text-[#ff7043] mt-0.5">{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#546e7a] mb-6">
            Skills & Capabilities
          </h2>
          <div className="space-y-5">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#263238] mb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-2.5 py-1 text-xs font-medium text-[#263238] bg-[#f2f4f8] border border-[#dde1e6] rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="pt-8 border-t border-[#dde1e6] flex flex-wrap gap-3">
          <Button href={`mailto:${profile.email}`} external variant="primary">
            Email Me
          </Button>
          <Button href={profile.linkedin} external variant="secondary">
            LinkedIn Profile
          </Button>
          <Button href={profile.github} external variant="secondary">
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
