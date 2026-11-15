import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-20 border-t border-border" aria-labelledby="contact-cta-heading">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2
          id="contact-cta-heading"
          className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
        >
          Let&apos;s build something together
        </h2>
        <p className="mt-4 text-base text-muted max-w-xl mx-auto leading-relaxed">
          I&apos;m open to product leadership, AI product, and engineering
          conversations — particularly opportunities in Dubai, UAE. I require
          employment visa sponsorship.
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
    </section>
  );
}
