import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-20 md:py-28" aria-label="Introduction">
      <div className="mx-auto max-w-5xl px-6">
        {/* Executive status indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
          <span>Technical Product Manager</span>
          <span className="text-slate-300">•</span>
          <span>Open to Dubai, UAE</span>
        </div>

        {/* Clear, authoritative headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
          I build AI-powered products and lead the teams that bring them to life.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          {profile.summary}
        </p>

        {/* Credibility line */}
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-slate-600">
          {profile.credibilityItems.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {i > 0 && (
                <span className="text-slate-300" aria-hidden="true">
                  •
                </span>
              )}
              <span>{item}</span>
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="/work">Selected Work</Button>
          <Button href={profile.linkedin} external variant="secondary">
            LinkedIn
          </Button>
          <Button href={`mailto:${profile.email}`} external variant="ghost">
            Contact Yamika →
          </Button>
        </div>
      </div>
    </section>
  );
}
