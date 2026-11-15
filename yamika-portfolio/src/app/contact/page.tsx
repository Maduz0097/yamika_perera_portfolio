import { createMetadata } from "@/lib/metadata";
import { profile } from "@/content/profile";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Yamika Perera for product leadership, AI product, and engineering opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="I'm open to conversations about product leadership, AI product management, and engineering opportunities."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="group block bg-gradient-to-b from-white to-orange-50/20 border border-slate-200/90 rounded-xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-orange-300 hover:shadow-[0_8px_24px_rgba(249,115,22,0.08)] transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-105 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
              Email
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Drop me a line to discuss product or engineering opportunities.
            </p>
            <p className="text-sm font-semibold text-orange-600 mt-4">{profile.email}</p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gradient-to-b from-white to-blue-50/20 border border-slate-200/90 rounded-xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-blue-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)] transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-105 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              LinkedIn
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Connect professionally and see my full career history.
            </p>
            <p className="text-sm font-semibold text-blue-600 mt-4">
              linkedin.com/in/yamika-perera
              <span className="sr-only">(opens in new tab)</span>
            </p>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 rounded-xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-200 md:col-span-2"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 group-hover:scale-105 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  GitHub
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Explore open-source projects, APIs, and experiments.</p>
              </div>
              <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600">
                github.com/Maduz0097 →
              </span>
            </div>
          </a>
        </div>

        {/* Location note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-orange-50/70 via-white to-blue-50/60 border border-orange-200/80 rounded-xl shadow-[0_1px_3px_rgba(249,115,22,0.03)]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <h3 className="text-sm font-bold text-slate-900">
              Location & Relocation Availability
            </h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Based in {profile.location}. Open to relocation to Dubai, UAE.
            Employment visa sponsorship required.
          </p>
        </div>
      </div>
    </section>
  );
}
