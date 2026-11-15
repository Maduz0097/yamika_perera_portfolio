import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-20 border-t border-slate-200" aria-labelledby="contact-cta-heading">
      <div className="mx-auto max-w-5xl px-6">
        <div className="bg-white border border-slate-200 rounded-xl p-10 md:p-14 text-center shadow-sm">
          <h2
            id="contact-cta-heading"
            className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900"
          >
            Let&apos;s build something together
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            I&apos;m open to conversations about product leadership, AI product
            management, and engineering leadership — particularly opportunities
            in Dubai, UAE.
          </p>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Based in Sri Lanka • Open to relocation to Dubai • Requires UAE employment visa sponsorship
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={`mailto:${profile.email}`} external>
              Get in Touch
            </Button>
            <Button href={profile.linkedin} external variant="secondary">
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
