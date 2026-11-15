import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" aria-label="Introduction">
      {/* Ambient dual light gradient: Royal Blue & Warm Tangerine */}
      <div 
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[550px] h-96 pointer-events-none opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute top-10 right-10 w-[450px] h-96 pointer-events-none opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.16) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Executive status pill with warm orange active pulse */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 text-xs font-semibold text-slate-800 bg-gradient-to-r from-orange-50/90 via-white to-blue-50/80 border border-orange-200/80 rounded-full shadow-[0_1px_3px_rgba(249,115,22,0.06)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500 shadow-sm shadow-orange-500/50"></span>
          </span>
          <span>Technical Product Manager</span>
          <span className="text-slate-300">•</span>
          <span className="text-orange-950 font-medium">Open to Dubai, UAE</span>
        </div>

        {/* Headline with vibrant Blue & Orange energy */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
          I build{" "}
          <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-600 bg-clip-text text-transparent">
            AI-powered products
          </span>{" "}
          and lead the teams that bring them to life.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          {profile.summary}
        </p>

        {/* Credibility badges with coordinated Blue and Orange indicators */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {profile.credibilityItems.map((item, index) => {
            const isOrange = index % 2 === 1;
            return (
              <span
                key={item}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg backdrop-blur-sm transition-colors ${
                  isOrange
                    ? "text-orange-950 bg-gradient-to-b from-white to-orange-50/40 border border-orange-200/70 shadow-[0_1px_2px_rgba(249,115,22,0.03)]"
                    : "text-blue-950 bg-gradient-to-b from-white to-blue-50/40 border border-blue-200/70 shadow-[0_1px_2px_rgba(37,99,235,0.03)]"
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

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <Button href="/work">Selected Work</Button>
          <Button href={profile.linkedin} external variant="secondary">
            LinkedIn Profile
          </Button>
          <Button
            href={`mailto:${profile.email}`}
            external
            className="text-orange-700 hover:text-orange-800 hover:bg-orange-50/80 font-medium px-4 py-2.5 rounded-lg border border-transparent hover:border-orange-200 transition-colors"
          >
            Get in touch →
          </Button>
        </div>
      </div>
    </section>
  );
}
