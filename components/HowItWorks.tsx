"use client";

const STEPS = [
  {
    num: "01",
    title: "HR sends an invite",
    desc: "As soon as an offer is accepted, HR enters the new hire's name, role, and department. That's it.",
    color: "#E8F4FD",
    accent: "#4F6EF7",
  },
  {
    num: "02",
    title: "Onboard maps the tools",
    desc: "We automatically detect which apps, systems, and permissions that role needs — based on your company's access map.",
    color: "#FFF7ED",
    accent: "#F97316",
  },
  {
    num: "03",
    title: "Access is provisioned instantly",
    desc: "Slack channels, GitHub org, Google Workspace, AWS roles — all provisioned before day one, with zero IT tickets.",
    color: "#F0FDF4",
    accent: "#22C55E",
  },
  {
    num: "04",
    title: "New hire hits the ground running",
    desc: "On day one, every tool is ready, every task is assigned, and your team is notified. Onboarding done.",
    color: "#FDF4FF",
    accent: "#A855F7",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#999] mb-3">
            How it works
          </p>
          <h2 className="text-[42px] md:text-[52px] font-bold leading-[1.1] text-[#111] max-w-lg">
            From offer accepted<br />
            to <span className="font-display italic font-normal">fully set up.</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="rounded-3xl p-7 flex flex-col gap-4"
              style={{ backgroundColor: step.color }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-[11px] font-bold tracking-wider"
                  style={{ color: step.accent }}
                >
                  {step.num}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: step.accent }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[18px] font-semibold text-[#111] leading-snug">
                {step.title}
              </h3>
              <p className="text-[13.5px] text-[#555] leading-relaxed flex-1">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
