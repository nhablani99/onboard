const TESTIMONIALS = [
  {
    quote:
      "We used to spend 3 days setting up access for every new hire. With Onboard, it's done before they even sign their contract.",
    name: "Amanda Torres",
    title: "Head of People Ops, Meridian Labs",
    initials: "AT",
    color: "#4F6EF7",
  },
  {
    quote:
      "As an engineering manager, I hated fielding access requests on day one. Onboard eliminated that completely. Our engineers just… start working.",
    name: "David Kim",
    title: "Engineering Manager, Stackr",
    initials: "DK",
    color: "#22C55E",
  },
  {
    quote:
      "The AI assistant is genuinely impressive. I described a new role, and it mapped out 14 tools I hadn't even thought of. It knew our stack better than I did.",
    name: "Ines Marchetti",
    title: "CTO, Volta Systems",
    initials: "IM",
    color: "#F97316",
  },
  {
    quote:
      "Compliance used to be a nightmare during audits — who had access to what, when. Onboard gives us a perfect audit trail automatically.",
    name: "Ryan Osei",
    title: "VP IT Security, FinPath",
    initials: "RO",
    color: "#A855F7",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-white/60">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#999] mb-3">
            What teams say
          </p>
          <h2 className="text-[42px] md:text-[52px] font-bold leading-[1.1] text-[#111]">
            Teams that never looked<br />
            <span className="font-display italic font-normal">back.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-[#ebebeb] shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#F97316">
                    <path d="M7 1l1.8 3.8L13 5.5l-3 3 .7 4.3L7 10.8l-3.7 2L4 8.5 1 5.5l4.2-.7z" />
                  </svg>
                ))}
              </div>

              <p className="text-[15px] text-[#333] leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#111]">{t.name}</div>
                  <div className="text-[12px] text-[#888]">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
