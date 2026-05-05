const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="2" fill="currentColor" />
        <rect x="11" y="2" width="7" height="7" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="2" y="11" width="7" height="7" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="11" y="11" width="7" height="7" rx="2" fill="currentColor" />
      </svg>
    ),
    title: "Role-based access maps",
    desc: "Define exactly which tools each role needs. Onboard learns from your existing team and auto-suggests access for new hires.",
    color: "#E8F4FD",
    accent: "#4F6EF7",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Day-one readiness",
    desc: "Everything is provisioned before the first day. No waiting on IT. No chasing approvals. Just a ready team.",
    color: "#FFF7ED",
    accent: "#F97316",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.4 5 5.6.8-4 4 .9 5.6L10 15l-4.9 2.4.9-5.6-4-4 5.6-.8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Automated task checklists",
    desc: "New hires get a personalized checklist: who to meet, what to read, and what to set up — all in one place.",
    color: "#F0FDF4",
    accent: "#22C55E",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Seamless integrations",
    desc: "One-click connect with Slack, GitHub, Google Workspace, Okta, AWS, Jira, Notion, and 40+ more tools.",
    color: "#FDF4FF",
    accent: "#A855F7",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10l2.5 2.5L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Compliance & audit logs",
    desc: "Every access grant and revocation is logged. Stay compliant with SOC 2, HIPAA, and internal policies automatically.",
    color: "#FFF1F2",
    accent: "#F43F5E",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Offboarding too",
    desc: "When someone leaves, revoke all access in one click. Onboard ensures nothing is missed — no orphaned accounts.",
    color: "#FFFBEB",
    accent: "#EAB308",
  },
];

export default function Features() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#999] mb-3">
            Features
          </p>
          <h2 className="text-[42px] md:text-[52px] font-bold leading-[1.1] text-[#111]">
            Everything you need to<br />
            <span className="font-display italic font-normal">run a tight ship.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="rounded-3xl p-7 hover:scale-[1.01] transition-transform duration-200 group"
              style={{ backgroundColor: f.color }}
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: f.accent + "20", color: f.accent }}
              >
                {f.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-[#111] mb-2">{f.title}</h3>
              <p className="text-[13.5px] text-[#666] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
