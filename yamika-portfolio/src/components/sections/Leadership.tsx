import SectionHeading from "@/components/ui/SectionHeading";

const leadershipPoints = [
  {
    title: "12+ Engineers",
    subtitle: "Scale & Concurrent Projects",
    description:
      "Leading and co-ordinating engineers across multiple simultaneous projects and distinct product domains.",
    accent: "blue",
  },
  {
    title: "Team Building",
    subtitle: "Talent & Culture",
    description:
      "Building engineering teams from scratch — from technical interviews and hiring through planning, execution, and production release.",
    accent: "orange",
  },
  {
    title: "Product Delivery",
    subtitle: "End-to-End Ownership",
    description:
      "End-to-end product delivery: requirements analysis, roadmaps, sprint planning, QA coordination, and deployment.",
    accent: "blue",
  },
  {
    title: "Client Collaboration",
    subtitle: "Direct Stakeholder Alignment",
    description:
      "Direct international client collaboration with Origis USA on requirements, prioritisation, and iterative delivery.",
    accent: "orange",
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
          {leadershipPoints.map((point) => {
            const isOrange = point.accent === "orange";
            return (
              <div
                key={point.title}
                className={`relative bg-gradient-to-b from-white via-white to-slate-50/50 border rounded-xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-200 ${
                  isOrange
                    ? "border-slate-200/90 hover:border-orange-300 hover:shadow-[0_8px_24px_rgba(249,115,22,0.06)]"
                    : "border-slate-200/90 hover:border-blue-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.06)]"
                }`}
              >
                {/* Dual-color accent bar */}
                <div
                  className={`h-1 w-12 rounded-full mb-5 ${
                    isOrange
                      ? "bg-gradient-to-r from-orange-500 to-amber-400"
                      : "bg-gradient-to-r from-blue-600 to-indigo-500"
                  }`}
                />
                <div className="flex items-baseline justify-between mb-2">
                  <h3
                    className={`text-lg font-bold ${
                      isOrange ? "text-slate-900" : "text-blue-950"
                    }`}
                  >
                    {point.title}
                  </h3>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isOrange ? "text-orange-600/80" : "text-blue-600/80"
                    }`}
                  >
                    {point.subtitle}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
