import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-20 md:py-28" aria-label="Introduction">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-3xl">
          {profile.headline}
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          {profile.summary}
        </p>

        {/* Credibility line */}
        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          {profile.credibilityItems.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="text-border" aria-hidden="true">
                  •
                </span>
              )}
              <span>{item}</span>
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/work">Selected Work</Button>
          <Button href={profile.linkedin} external variant="secondary">
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
