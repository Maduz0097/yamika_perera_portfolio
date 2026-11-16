import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-20 border-t border-slate-200" aria-labelledby="contact-cta-heading">
      <div className="mx-auto max-w-5xl px-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 md:p-14 text-center shadow-sm">
          <h2
            id="contact-cta-heading"
            className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900"
          >
            Let&apos;s build something exceptional together
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            I&apos;m open to conversations about product leadership, AI product
            management, and engineering leadership — particularly opportunities
            in Dubai, UAE.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-orange-800 bg-orange-50 border border-orange-200 rounded-full">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span>Open to relocation to Dubai • Employment visa sponsorship required</span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button href={`mailto:${profile.email}`} external variant="orange">
              Get in Touch
            </Button>
            <Button href={profile.linkedin} external variant="blue">
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
