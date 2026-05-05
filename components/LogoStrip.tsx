const INTEGRATIONS = [
  { name: "Slack", color: "#E01E5A", letter: "S" },
  { name: "GitHub", color: "#181717", letter: "G" },
  { name: "Notion", color: "#000000", letter: "N" },
  { name: "Jira", color: "#0052CC", letter: "J" },
  { name: "Google Workspace", color: "#4285F4", letter: "G" },
  { name: "AWS", color: "#FF9900", letter: "A" },
  { name: "Figma", color: "#A259FF", letter: "F" },
  { name: "HubSpot", color: "#FF7A59", letter: "H" },
  { name: "Okta", color: "#007DC1", letter: "O" },
  { name: "Zoom", color: "#2D8CFF", letter: "Z" },
  { name: "Linear", color: "#5E6AD2", letter: "L" },
  { name: "Confluence", color: "#172B4D", letter: "C" },
];

export default function LogoStrip() {
  const items = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <section className="py-14 border-y border-[#e5e5e5] bg-white/40 overflow-hidden">
      <p className="text-center text-[11px] font-semibold text-[#999] tracking-[0.16em] uppercase mb-10">
        Trusted integrations with your favorite tools
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f0efed] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f0efed] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 animate-[scroll_35s_linear_infinite] whitespace-nowrap w-max">
          {items.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 bg-white border border-[#e8e8e8] rounded-xl px-5 py-3 text-[13.5px] font-medium text-[#333] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex-shrink-0 hover:shadow-md hover:border-[#d0d0d0] transition-all duration-200"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
                style={{ backgroundColor: item.color }}
              >
                {item.letter}
              </div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
