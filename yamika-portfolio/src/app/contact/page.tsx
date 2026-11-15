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
            className="group block border border-border rounded-lg p-6 hover:bg-surface-hover transition-colors"
          >
            <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
              Email
            </h3>
            <p className="text-sm text-muted mt-2">
              Drop me a line to discuss product or engineering opportunities.
            </p>
            <p className="text-sm text-accent mt-3">{profile.email}</p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-border rounded-lg p-6 hover:bg-surface-hover transition-colors"
          >
            <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
              LinkedIn
            </h3>
            <p className="text-sm text-muted mt-2">
              Connect professionally and see my full career history.
            </p>
            <p className="text-sm text-accent mt-3">
              linkedin.com/in/yamika-perera
              <span className="sr-only">(opens in new tab)</span>
            </p>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-border rounded-lg p-6 hover:bg-surface-hover transition-colors"
          >
            <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
              GitHub
            </h3>
            <p className="text-sm text-muted mt-2">
              Explore my code, side projects, and open-source contributions.
            </p>
            <p className="text-sm text-accent mt-3">
              github.com/Maduz0097
              <span className="sr-only">(opens in new tab)</span>
            </p>
          </a>
        </div>

        {/* Location note */}
        <div className="mt-12 p-6 border border-border rounded-lg">
          <h3 className="text-sm font-semibold text-foreground mb-2">
            Location & Availability
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            Based in {profile.location}. Open to relocation to Dubai, UAE.
            I require UAE employment visa sponsorship.
          </p>
        </div>
      </div>
    </section>
  );
}
