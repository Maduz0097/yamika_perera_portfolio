import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "Deep-dive into user needs, business context, and technical constraints.",
    gradient: "from-blue-600 to-blue-700",
    bg: "from-blue-50/60 to-white",
  },
  {
    number: "02",
    title: "Define Direction",
    description:
      "Translate insights into clear requirements, roadmaps, and prioritised backlogs.",
    gradient: "from-blue-700 to-indigo-600",
    bg: "from-indigo-50/50 to-white",
  },
  {
    number: "03",
    title: "Align & Build Team",
    description:
      "Assemble the right people, align stakeholders, and establish engineering cadence.",
    gradient: "from-indigo-600 to-amber-600",
    bg: "from-slate-50 to-white",
  },
  {
    number: "04",
    title: "Deliver Iteratively",
    description:
      "Sprint-based execution with continuous feedback, QA, and engineering oversight.",
    gradient: "from-amber-600 to-orange-500",
    bg: "from-amber-50/50 to-white",
  },
  {
    number: "05",
    title: "Release & Learn",
    description:
      "Ship to production, measure outcomes, and feed learnings back into the next cycle.",
    gradient: "from-orange-500 to-amber-500",
    bg: "from-orange-50/60 to-white",
  },
];

export default function HowIWork() {
  return (
    <section className="py-24 border-t border-slate-200/80" aria-labelledby="process-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="How I Work"
          subtitle="A product-led, engineering-grounded approach from discovery to release."
        />
        <div id="process-heading" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative bg-gradient-to-b ${step.bg} border border-slate-200/90 rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-slate-300 transition-colors`}
            >
              <div>
                <span
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r ${step.gradient} text-xs font-bold text-white shadow-sm`}
                >
                  {step.number}
                </span>
                <h3 className="mt-4 text-sm font-bold text-slate-900 leading-snug">
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
