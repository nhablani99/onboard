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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-[42px] md:text-[52px] font-bold leading-[1.1] text-[#111] max-w-lg">
              From offer accepted<br />
              to <span className="font-display italic font-normal">fully set up.</span>
            </h2>
            <p className="text-[15px] text-[#666] max-w-sm">
              What used to take HR and IT a week of back-and-forth now happens
              in under five minutes.
            </p>
          </div>
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

        {/* Timeline bar */}
        <div className="mt-8 bg-white rounded-2xl border border-[#ebebeb] p-5 flex items-center gap-4 overflow-x-auto no-scrollbar">
          <span className="text-[12px] font-medium text-[#999] whitespace-nowrap flex-shrink-0">
            Timeline
          </span>
          {[
            { label: "Offer accepted", time: "Day −7", active: false },
            { label: "Invite sent", time: "Day −7", active: false },
            { label: "Tools mapped", time: "Day −7 +1min", active: false },
            { label: "Access provisioned", time: "Day −7 +3min", active: false },
            { label: "New hire onboarded", time: "Day 1", active: true },
          ].map((item, i, arr) => (
            <div key={i} className="flex items-center gap-4 flex-shrink-0">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-3 h-3 rounded-full border-2 ${
                    item.active
                      ? "bg-[#22C55E] border-[#22C55E]"
                      : "bg-white border-[#ccc]"
                  }`}
                />
                <span className="text-[11px] font-medium text-[#111] whitespace-nowrap">
                  {item.label}
                </span>
                <span className="text-[10px] text-[#999] whitespace-nowrap">
                  {item.time}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div className="w-12 h-[1px] bg-[#ddd] flex-shrink-0 mb-5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
