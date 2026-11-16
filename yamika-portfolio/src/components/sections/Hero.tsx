import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-20 md:py-28" aria-label="Introduction">
      <div className="mx-auto max-w-5xl px-6">
        {/* Status indicator with orange accent */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-8 text-xs font-semibold text-orange-800 bg-orange-50 border border-orange-200/80 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          <span>Technical Product Manager</span>
          <span className="text-orange-300">•</span>
          <span className="text-slate-700">Open to Dubai, UAE</span>
        </div>

        {/* Clear headline with confident solid blue accent */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
          I build{" "}
          <span className="text-blue-600">AI-powered products</span>{" "}
          and lead the teams that bring them to life.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          {profile.summary}
        </p>

        {/* Credibility badges with visible Blue and Orange indicators */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {profile.credibilityItems.map((item, idx) => {
            const isOrange = idx % 2 === 1;
            return (
              <span
                key={item}
                className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md border ${
                  isOrange
                    ? "text-orange-800 bg-orange-50/70 border-orange-200"
                    : "text-blue-800 bg-blue-50/70 border-blue-200"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isOrange ? "bg-orange-500" : "bg-blue-600"
                  }`}
                />
                {item}
              </span>
            );
          })}
        </div>

        {/* Action buttons featuring both Blue and Orange */}
        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <Button href="/work" variant="blue">
            Selected Work
          </Button>
          <Button href={`mailto:${profile.email}`} external variant="orange">
            Get in Touch
          </Button>
          <Button href={profile.linkedin} external variant="secondary">
            LinkedIn Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
