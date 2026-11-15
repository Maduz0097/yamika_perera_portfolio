import { createMetadata } from "@/lib/metadata";
import { profile } from "@/content/profile";
import { education } from "@/content/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata = createMetadata({
  title: "About",
  description:
    "About Yamika Perera — Technical Product Manager bridging product strategy with hands-on engineering and AI product delivery.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading title="About" />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I&apos;m a Technical Product Manager with a hands-on software
              engineering background, currently leading product delivery at{" "}
              <strong>Celestial BI</strong> working directly with{" "}
              <strong>Origis USA</strong>.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mt-4">
              I lead and co-ordinate 12+ engineers across multiple simultaneous
              projects spanning field services, recruitment technology, and
              healthcare. I build teams from scratch — from technical interviews
              and hiring through planning, execution, and production releases.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mt-4">
              My background bridges product strategy with deep technical
              execution. Before moving into product leadership, I spent three
              years as a software engineer building real-time systems, analytics
              platforms, and gaming services. This engineering foundation means I
              can speak both business and technical languages fluently — defining
              product direction while understanding implementation deeply enough
              to work effectively with engineering teams.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mt-4">
              AI is woven throughout my current product work, from AI-supported
              field-services workflows to AI-enabled recruitment capabilities.
              I&apos;m driven by the opportunity to translate emerging AI
              capabilities into products that solve real problems.
            </p>
          </div>

          {/* Location */}
          <div className="mt-12 p-6 border border-border rounded-lg">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              Location & Availability
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Based in {profile.location}. Open to relocation to Dubai, UAE.
              Requires UAE employment visa sponsorship.
            </p>
          </div>

          {/* Education */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="border border-border rounded-lg p-5">
                  <h4 className="text-sm font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-muted mt-1">
                    {edu.institution}
                    {edu.year && ` · ${edu.year}`}
                  </p>
                  {edu.note && (
                    <p className="text-xs text-muted mt-1">{edu.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
