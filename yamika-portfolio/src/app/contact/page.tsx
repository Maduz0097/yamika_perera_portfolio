import { createMetadata } from "@/lib/metadata";
import { profile } from "@/content/profile";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Yamika Perera for product leadership, AI product, and engineering opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="I'm open to conversations about product leadership, AI product management, and engineering opportunities."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="group block bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-400 hover:shadow-sm transition-all"
          >
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#1E3A5F] transition-colors">
              Email
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Drop me a line to discuss product or engineering opportunities.
            </p>
            <p className="text-sm font-medium text-[#1E3A5F] mt-4">{profile.email}</p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-400 hover:shadow-sm transition-all"
          >
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#1E3A5F] transition-colors">
              LinkedIn
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Connect professionally and see my career history.
            </p>
            <p className="text-sm font-medium text-[#1E3A5F] mt-4">
              linkedin.com/in/yamika-perera
              <span className="sr-only">(opens in new tab)</span>
            </p>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-400 hover:shadow-sm transition-all md:col-span-2"
          >
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#1E3A5F] transition-colors">
              GitHub
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Explore open-source projects, APIs, and experiments.
            </p>
            <p className="text-sm font-medium text-[#1E3A5F] mt-4">
              github.com/Maduz0097
              <span className="sr-only">(opens in new tab)</span>
            </p>
          </a>
        </div>

        {/* Location note */}
        <div className="mt-12 p-6 bg-white border border-slate-200 rounded-lg">
          <h3 className="text-sm font-semibold text-slate-900 mb-2">
            Location & Availability
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Based in {profile.location}. Open to relocation to Dubai, UAE.
            Requires UAE employment visa sponsorship.
          </p>
        </div>
      </div>
    </section>
  );
}
