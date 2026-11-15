import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" aria-label="Introduction">
      {/* Subtle ambient light gradient */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(30, 58, 95, 0.08), rgba(37, 99, 235, 0.02) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Executive status pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-slate-700 bg-gradient-to-r from-slate-50 via-white to-blue-50/40 border border-slate-200/90 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Technical Product Manager • Open to Dubai, UAE</span>
        </div>

        {/* Headline with subtle editorial gradient on key phrase */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
          I build{" "}
          <span className="bg-gradient-to-r from-[#1E3A5F] via-[#2563EB] to-[#1E3A5F] bg-clip-text text-transparent">
            AI-powered products
          </span>{" "}
          and lead the teams that bring them to life.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          {profile.summary}
        </p>

        {/* Credibility pills with subtle gradients */}
        <div className="mt-8 flex flex-wrap gap-2">
          {profile.credibilityItems.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white/70 border border-slate-200/80 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)] backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600/70" />
              {item}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="/work">Selected Work</Button>
          <Button href={profile.linkedin} external variant="secondary">
            LinkedIn Profile
          </Button>
          <Button href={`mailto:${profile.email}`} external variant="ghost">
            Get in touch →
          </Button>
        </div>
      </div>
    </section>
  );
}
