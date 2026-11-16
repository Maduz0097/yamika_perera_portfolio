import { profile } from "@/content/profile";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-20 md:py-28 border-b border-[#dde1e6]" aria-label="Introduction">
      <div className="mx-auto max-w-5xl px-6">
        {/* Flo-style eyebrow with signature orange line */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-5 h-[2px] bg-[#ff7043] inline-block" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#546e7a]">
            Technical Product Manager • Open to Dubai, UAE
          </span>
        </div>

        {/* High-impact headline with solid Flo orange highlight */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#263238] leading-[1.12] max-w-4xl">
          I build <span className="text-[#ff7043]">AI-powered products</span> and lead the teams that bring them to life.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#546e7a] max-w-2xl leading-relaxed">
          {profile.summary}
        </p>

        {/* Flo-style micro credibility items with orange bullets */}
        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-[#263238]">
          {profile.credibilityItems.map((item, idx) => (
            <span key={item} className="flex items-center gap-2">
              {idx > 0 && <span className="text-[#ff7043] font-bold">•</span>}
              <span>{item}</span>
            </span>
          ))}
        </div>

        {/* Clean, solid action buttons - NO gradient outlines! */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/work" variant="dark">
            Selected Work <span>→</span>
          </Button>
          <Button href={`mailto:${profile.email}`} external variant="primary">
            Get in Touch
          </Button>
          <Button href={profile.linkedin} external variant="secondary">
            LinkedIn Profile
          </Button>
        </div>

        {/* Flo-inspired Executive Summary Banner */}
        <div className="mt-14 p-6 bg-[#f2f4f8] border border-[#dde1e6] rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#ff7043]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#263238]">
                Current Product Leadership
              </span>
            </div>
            <p className="text-sm font-semibold text-[#263238]">
              Celestial BI LLC <span className="text-[#546e7a] font-normal">in direct collaboration with</span> Origis USA
            </p>
            <p className="text-xs text-[#546e7a] mt-0.5">
              Leading 12+ engineers across Field Services & AI Recruitment (Flo Recruiter)
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 text-xs font-semibold rounded bg-white border border-[#dde1e6] text-[#263238]">
              Field Services
            </span>
            <span className="px-3 py-1 text-xs font-semibold rounded bg-white border border-[#dde1e6] text-[#263238]">
              Flo Recruiter AI
            </span>
            <span className="px-3 py-1 text-xs font-semibold rounded bg-[#ff704318] border border-[#ff704344] text-[#d84315]">
              Dubai Relocation Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
