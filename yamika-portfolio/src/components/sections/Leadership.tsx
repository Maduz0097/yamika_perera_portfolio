import SectionHeading from "@/components/ui/SectionHeading";

const leadershipPoints = [
  {
    title: "12+ Engineers",
    subtitle: "Scale & Complexity",
    description:
      "Leading and co-ordinating engineers across multiple simultaneous projects and distinct product domains.",
  },
  {
    title: "Team Building",
    subtitle: "Talent & Culture",
    description:
      "Building engineering teams from scratch — from technical interviews and hiring through planning, execution, and production release.",
  },
  {
    title: "Product Delivery",
    subtitle: "End-to-End Ownership",
    description:
      "End-to-end product delivery: requirements analysis, roadmaps, sprint planning, QA coordination, and deployment.",
  },
  {
    title: "Client Collaboration",
    subtitle: "Direct Stakeholder Alignment",
    description:
      "Direct international client collaboration with Origis USA on requirements, prioritisation, and iterative delivery.",
  },
];

export default function Leadership() {
  return (
    <section className="py-24 border-t border-slate-200/80" aria-labelledby="leadership-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Engineering Leadership"
          subtitle="Building teams and delivering complex products across multiple domains and geographies."
        />
        <div id="leadership-heading" className="grid md:grid-cols-2 gap-6">
          {leadershipPoints.map((point) => (
            <div
              key={point.title}
              className="relative bg-gradient-to-b from-white via-white to-slate-50/50 border border-slate-200/90 rounded-xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-slate-300 transition-colors"
            >
              {/* Subtle top indicator bar */}
              <div className="h-1 w-10 bg-gradient-to-r from-[#1E3A5F] to-[#2563EB] rounded-full mb-5" />
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {point.title}
                </h3>
                <span className="text-xs font-medium text-slate-400">
                  {point.subtitle}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
