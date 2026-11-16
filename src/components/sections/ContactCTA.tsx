import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="contact-cta-heading">
      <div className="mx-auto max-w-5xl px-6">
        <div className="bg-[#263238] text-white rounded-2xl p-10 md:p-14 text-center shadow-lg border border-[#ffffff1a]">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#ff7043] inline-block" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#9ebadf]">
              GET IN TOUCH
            </span>
          </div>

          <h2
            id="contact-cta-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Let&apos;s build something exceptional together
          </h2>

          <p className="mt-4 text-base md:text-lg text-[#d0dce5] max-w-xl mx-auto leading-relaxed">
            I&apos;m open to conversations about product leadership, AI product
            management, and engineering leadership.
          </p>

          {/* Clean solid buttons - NO gradient outlines! */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${profile.email}`} external variant="primary">
              Get in Touch
            </Button>
            <Button
              href={profile.linkedin}
              external
              className="bg-transparent text-white border border-[#ffffff44] hover:bg-[#ffffff14]"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
