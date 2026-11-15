import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-24 border-t border-slate-200/80" aria-labelledby="contact-cta-heading">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 border border-slate-200/90 rounded-2xl p-10 md:p-14 text-center shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          {/* Subtle ambient light glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 -mr-20 -mt-20 pointer-events-none rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <h2
            id="contact-cta-heading"
            className="relative text-2xl md:text-3xl font-bold tracking-tight text-slate-900"
          >
            Let&apos;s build something exceptional together
          </h2>

          <p className="relative mt-4 text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            I&apos;m open to conversations about product leadership, AI product
            management, and engineering leadership — particularly opportunities
            in Dubai, UAE.
          </p>

          <div className="relative mt-4 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-600 bg-white border border-slate-200/80 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Open to relocation to Dubai • Employment visa sponsorship required</span>
          </div>

          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
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
