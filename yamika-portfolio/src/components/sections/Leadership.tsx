import SectionHeading from "@/components/ui/SectionHeading";

const leadershipPoints = [
  {
    title: "12+ Engineers",
    subtitle: "Scale & Concurrent Projects",
    description:
      "Leading and co-ordinating engineers across multiple simultaneous projects and distinct product domains.",
    color: "blue",
  },
  {
    title: "Team Building",
    subtitle: "Talent & Formation",
    description:
      "Building engineering teams from scratch — from technical interviews and hiring through planning, execution, and production release.",
    color: "orange",
  },
  {
    title: "Product Delivery",
    subtitle: "End-to-End Ownership",
    description:
      "End-to-end product delivery: requirements analysis, roadmaps, sprint planning, QA coordination, deployment, and release management.",
    color: "blue",
  },
  {
    title: "Client Collaboration",
    subtitle: "Direct Stakeholder Alignment",
    description:
      "Direct international client collaboration with Origis USA on requirements, prioritisation, planning, and delivery.",
    color: "orange",
  },
];

export default function Leadership() {
  return (
    <section className="py-20 border-t border-slate-200" aria-labelledby="leadership-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Engineering Leadership"
          subtitle="Building teams and delivering complex products across multiple domains and geographies."
        />
        <div id="leadership-heading" className="grid md:grid-cols-2 gap-6">
          {leadershipPoints.map((point) => {
            const isOrange = point.color === "orange";
            return (
              <div
                key={point.title}
                className="relative bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Crisp colored top border accent */}
                <div
                  className={`absolute top-0 left-6 right-6 h-1 rounded-b ${
                    isOrange ? "bg-orange-500" : "bg-blue-600"
                  }`}
                />
                <div className="flex items-baseline justify-between mb-2 mt-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    {point.title}
                  </h3>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isOrange ? "text-orange-600" : "text-blue-600"
                    }`}
                  >
                    {point.subtitle}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
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
