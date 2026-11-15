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
    title: "Define Direction",
    description:
      "Translate insights into clear requirements, roadmaps, and prioritised backlogs.",
  },
  {
    number: "03",
    title: "Align & Build Team",
    description:
      "Assemble the right people, align stakeholders, and establish engineering cadence.",
  },
  {
    number: "04",
    title: "Deliver Iteratively",
    description:
      "Sprint-based execution with continuous feedback, QA, and engineering oversight.",
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
    <section className="py-24 border-t border-slate-200/80" aria-labelledby="process-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="How I Work"
          subtitle="A product-led, engineering-grounded approach to building and shipping software."
        />
        <div id="process-heading" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-gradient-to-b from-white to-slate-50/70 border border-slate-200/90 rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50/60 border border-blue-200/60 text-xs font-bold text-blue-800">
                  {step.number}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-slate-900 leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
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
