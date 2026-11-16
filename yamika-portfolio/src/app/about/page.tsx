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
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow="ABOUT"
            title="Yamika Perera"
            subtitle="Technical Product Manager bridging business strategy with deep engineering execution."
          />

          <div className="space-y-5 text-base md:text-lg text-[#263238] leading-relaxed">
            <p>
              I&apos;m a Technical Product Manager with a hands-on software
              engineering background, currently leading product delivery at{" "}
              <strong>Celestial BI</strong> working directly with{" "}
              <strong>Origis USA</strong>.
            </p>
            <p className="text-[#546e7a]">
              I lead and co-ordinate 12+ engineers across multiple simultaneous
              projects spanning field services, recruitment technology, and
              healthcare. I build teams from scratch — from technical interviews
              and hiring through planning, execution, and production releases.
            </p>
            <p className="text-[#546e7a]">
              My background bridges product strategy with deep technical
              execution. Before moving into product leadership, I spent three
              years as a software engineer building real-time systems, analytics
              platforms, and gaming services. This engineering foundation means I
              can speak both business and technical languages fluently — defining
              product direction while understanding implementation deeply enough
              to work effectively with engineering teams.
            </p>
            <p className="text-[#546e7a]">
              AI is woven throughout my current product work, from AI-supported
              field-services workflows to AI-enabled recruitment capabilities
              (Flo Recruiter). I&apos;m driven by the opportunity to translate
              emerging AI capabilities into products that solve real problems.
            </p>
          </div>

          {/* Location card */}
          <div className="mt-12 p-6 bg-[#f2f4f8] border border-[#dde1e6] rounded-xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#ff7043]" />
              <h3 className="text-sm font-bold text-[#263238]">
                Location & Availability
              </h3>
            </div>
            <p className="text-sm text-[#546e7a] leading-relaxed">
              Based in {profile.location}. Open to relocation to Dubai, UAE.
              Requires UAE employment visa sponsorship.
            </p>
          </div>

          {/* Education */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#263238] mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="bg-white border border-[#dde1e6] rounded-xl p-5 shadow-xs">
                  <h4 className="text-base font-bold text-[#263238]">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-[#546e7a] mt-1">
                    {edu.institution}
                    {edu.year && ` · ${edu.year}`}
                  </p>
                  {edu.note && (
                    <p className="text-xs font-semibold text-[#ff7043] mt-1">{edu.note}</p>
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
