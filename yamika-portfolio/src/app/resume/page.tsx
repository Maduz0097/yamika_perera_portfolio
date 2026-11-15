import { createMetadata } from "@/lib/metadata";
import { profile } from "@/content/profile";
import { experience, education } from "@/content/experience";
import { skills } from "@/content/skills";
import SkillTag from "@/components/ui/SkillTag";
import Button from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Resume",
  description:
    "Yamika Perera — Technical Product Manager resume. Product leadership, engineering team management, and AI product delivery.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {profile.name}
            </h1>
            <p className="text-lg text-muted mt-1">{profile.title}</p>
            <p className="text-sm text-muted mt-2">
              {profile.location} · Open to Dubai, UAE
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
            Summary
          </h2>
          <p className="text-base text-foreground/90 leading-relaxed">
            {profile.summary}
          </p>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-6">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="border-l-2 border-border pl-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-accent">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted whitespace-nowrap shrink-0">
                    {exp.period}
                  </p>
                </div>
                <p className="text-xs text-muted mt-1">{exp.location}</p>
                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-foreground/80 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-border before:rounded-full"
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
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-6">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="border-l-2 border-border pl-5">
                <h3 className="text-sm font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted mt-1">
                  {edu.institution}
                  {edu.year && ` · ${edu.year}`}
                </p>
                {edu.note && (
                  <p className="text-xs text-muted">{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-6">
            Skills & Capabilities
          </h2>
          <div className="space-y-5">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs font-semibold text-foreground mb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <SkillTag key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="pt-8 border-t border-border flex flex-wrap gap-3">
          <Button href={`mailto:${profile.email}`} external>
            Email
          </Button>
          <Button href={profile.linkedin} external variant="secondary">
            LinkedIn
          </Button>
          <Button href={profile.github} external variant="secondary">
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
