import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-24 border-t border-slate-200/80" aria-labelledby="contact-cta-heading">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50/90 to-blue-50/20 border border-slate-200/90 rounded-2xl p-10 md:p-14 text-center shadow-[0_4px_24px_rgba(37,99,235,0.03)]">
          {/* Dual ambient light glows: Blue & Orange */}
          <div
            className="absolute top-0 left-0 w-80 h-80 -ml-20 -mt-20 pointer-events-none rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 -mr-20 -mb-20 pointer-events-none rounded-full blur-3xl opacity-35"
            style={{
              background:
                "radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, transparent 70%)",
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

          <div className="relative mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-orange-950 bg-gradient-to-r from-orange-50 to-amber-50/80 border border-orange-200/80 rounded-full shadow-[0_1px_2px_rgba(249,115,22,0.04)]">
            <span className="w-2 h-2 rounded-full bg-orange-500 shadow-sm shadow-orange-500/50" />
            <span>Open to relocation to Dubai • Employment visa sponsorship required</span>
          </div>

          <div className="relative mt-8 flex flex-wrap justify-center gap-3.5">
            <Button href={`mailto:${profile.email}`} external variant="orange">
              Get in Touch
            </Button>
            <Button href={profile.linkedin} external variant="primary">
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
