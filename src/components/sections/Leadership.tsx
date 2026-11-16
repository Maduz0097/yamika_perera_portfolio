import SectionHeading from "@/components/ui/SectionHeading";

const leadershipPoints = [
  {
    title: "12+ Engineers",
    subtitle: "Scale & Concurrent Execution",
    description:
      "Leading and co-ordinating engineers across multiple simultaneous projects and distinct product domains.",
    accent: "orange",
  },
  {
    title: "Team Building",
    subtitle: "Talent & Formation",
    description:
      "Building engineering teams from scratch — from technical interviews and hiring through planning, execution, and production release.",
    accent: "dark",
  },
  {
    title: "Product Delivery",
    subtitle: "End-to-End Ownership",
    description:
      "End-to-end product delivery: requirements analysis, roadmaps, sprint planning, QA coordination, deployment, and release management.",
    accent: "orange",
  },
  {
    title: "Client Collaboration",
    subtitle: "Direct Stakeholder Alignment",
    description:
      "Direct international client collaboration with Origis USA on requirements, prioritisation, planning, and delivery.",
    accent: "dark",
  },
];

export default function Leadership() {
  return (
    <section className="py-20 md:py-24 bg-[#f2f4f8] border-b border-[#dde1e6]" aria-labelledby="leadership-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="LEADERSHIP"
          title="Engineering & Product Leadership"
          subtitle="Building teams and delivering complex products across multiple domains and geographies."
        />
        <div id="leadership-heading" className="grid md:grid-cols-2 gap-6">
          {leadershipPoints.map((point) => {
            const isOrange = point.accent === "orange";
            return (
              <div
                key={point.title}
                className="bg-white border border-[#dde1e6] rounded-xl p-7 shadow-xs hover:border-[#ff7043] transition-colors"
              >
                {/* Clean solid 3px top accent bar - NO gradients */}
                <div
                  className={`h-[3px] w-12 rounded mb-5 ${
                    isOrange ? "bg-[#ff7043]" : "bg-[#263238]"
                  }`}
                />
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#263238]">
                    {point.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#546e7a]">
                    {point.subtitle}
                  </span>
                </div>
                <p className="text-sm text-[#546e7a] leading-relaxed mt-2">
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
