import SectionHeading from "@/components/ui/SectionHeading";

const leadershipPoints = [
  {
    title: "12+ Engineers",
    description:
      "Leading and co-ordinating engineers across multiple simultaneous projects and product areas.",
  },
  {
    title: "Team Building",
    description:
      "Building teams from scratch — from technical interviews and hiring through planning, execution, and production release.",
  },
  {
    title: "Product Delivery",
    description:
      "End-to-end product delivery: requirements, roadmaps, planning, engineering oversight, QA coordination, deployment, and release.",
  },
  {
    title: "Client Collaboration",
    description:
      "Direct international client collaboration on requirements, prioritisation, planning, and delivery.",
  },
];

export default function Leadership() {
  return (
    <section className="py-20 border-t border-border" aria-labelledby="leadership-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Engineering Leadership"
          subtitle="Building teams and delivering products across multiple domains and geographies."
        />
        <div id="leadership-heading" className="grid md:grid-cols-2 gap-6">
          {leadershipPoints.map((point) => (
            <div
              key={point.title}
              className="border border-border rounded-lg p-6"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
