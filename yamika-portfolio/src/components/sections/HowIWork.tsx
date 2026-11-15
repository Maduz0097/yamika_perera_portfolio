import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "Deep-dive into user needs, business context, and technical constraints.",
  },
  {
    number: "02",
    title: "Define Product Direction",
    description:
      "Translate insights into clear requirements, roadmaps, and prioritised backlogs.",
  },
  {
    number: "03",
    title: "Align & Build the Team",
    description:
      "Assemble the right people, align stakeholders, and establish engineering practices.",
  },
  {
    number: "04",
    title: "Deliver Iteratively",
    description:
      "Sprint-based execution with continuous feedback, QA coordination, and engineering oversight.",
  },
  {
    number: "05",
    title: "Release & Learn",
    description:
      "Ship to production, measure outcomes, and feed learnings back into the next cycle.",
  },
];

export default function HowIWork() {
  return (
    <section className="py-20 border-t border-border" aria-labelledby="process-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="How I Work"
          subtitle="A product-led, iterative approach to building and shipping software."
        />
        <div id="process-heading" className="grid md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-xs font-semibold text-accent tracking-wider">
                {step.number}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
