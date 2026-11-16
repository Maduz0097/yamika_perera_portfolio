import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "Deep-dive into user needs, business context, and technical constraints.",
    highlight: false,
  },
  {
    number: "02",
    title: "Define Direction",
    description:
      "Translate insights into clear requirements, roadmaps, and prioritised backlogs.",
    highlight: false,
  },
  {
    number: "03",
    title: "Align & Build Team",
    description:
      "Assemble the right people, align stakeholders, and establish engineering cadence.",
    highlight: false,
  },
  {
    number: "04",
    title: "Deliver Iteratively",
    description:
      "Sprint-based execution with continuous feedback, QA coordination, and engineering oversight.",
    highlight: false,
  },
  {
    number: "05",
    title: "Release & Learn",
    description:
      "Ship to production, measure outcomes, and feed learnings back into the next product cycle.",
    highlight: true,
  },
];

export default function HowIWork() {
  return (
    <section className="py-20 md:py-24 border-b border-[#dde1e6]" aria-labelledby="process-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="METHODOLOGY"
          title="How I Work"
          subtitle="A product-led, engineering-grounded approach from discovery through production release."
        />
        <div id="process-heading" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`bg-white border rounded-xl p-5 shadow-xs flex flex-col justify-between transition-colors ${
                step.highlight
                  ? "border-[#ff7043]"
                  : "border-[#dde1e6] hover:border-[#263238]"
              }`}
            >
              <div>
                {/* Flo-style solid number badge */}
                <span
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold ${
                    step.highlight
                      ? "bg-[#ff7043] text-white"
                      : "bg-[#263238] text-white"
                  }`}
                >
                  {step.number}
                </span>
                <h3 className="mt-4 text-sm font-bold text-[#263238] leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-[#546e7a] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
