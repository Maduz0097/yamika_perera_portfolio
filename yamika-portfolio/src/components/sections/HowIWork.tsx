import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "Deep-dive into user needs, business context, and technical constraints.",
    badgeClass: "bg-blue-600 text-white",
  },
  {
    number: "02",
    title: "Define Direction",
    description:
      "Translate insights into clear requirements, roadmaps, and prioritised backlogs.",
    badgeClass: "bg-blue-600 text-white",
  },
  {
    number: "03",
    title: "Align & Build Team",
    description:
      "Assemble the right people, align stakeholders, and establish engineering cadence.",
    badgeClass: "bg-slate-800 text-white",
  },
  {
    number: "04",
    title: "Deliver Iteratively",
    description:
      "Sprint-based execution with continuous feedback, QA coordination, and engineering oversight.",
    badgeClass: "bg-orange-600 text-white",
  },
  {
    number: "05",
    title: "Release & Learn",
    description:
      "Ship to production, measure outcomes, and feed learnings back into the next product cycle.",
    badgeClass: "bg-orange-600 text-white",
  },
];

export default function HowIWork() {
  return (
    <section className="py-20 border-t border-slate-200" aria-labelledby="process-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="How I Work"
          subtitle="A product-led, engineering-grounded approach from discovery through production release."
        />
        <div id="process-heading" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span
                  className={`inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold shadow-xs ${step.badgeClass}`}
                >
                  {step.number}
                </span>
                <h3 className="mt-3 text-sm font-bold text-slate-900 leading-snug">
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
