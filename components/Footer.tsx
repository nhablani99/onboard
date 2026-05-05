export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white/40 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* CTA banner */}
        <div className="bg-[#111] rounded-3xl p-10 md:p-14 text-white text-center mb-16">
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-4">
            Your next hire deserves<br />
            <span className="font-display italic font-normal text-[#4F6EF7]">
              a better first day.
            </span>
          </h2>
          <p className="text-[15px] text-[#aaa] mb-8 max-w-md mx-auto">
            Join hundreds of companies that trust Onboard to make
            every onboarding feel effortless.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button className="bg-white text-[#111] font-semibold text-[14px] px-7 py-3 rounded-full hover:bg-[#f0f0f0] transition-colors">
              Start for free
            </button>
            <button className="text-[14px] text-[#aaa] hover:text-white transition-colors">
              Book a demo →
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 font-semibold text-[15px] mb-5">
              <div className="w-6 h-6 rounded-md bg-[#111] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x="1" y="1" width="3.5" height="3.5" rx="0.8" fill="white" />
                  <rect x="5.5" y="1" width="3.5" height="3.5" rx="0.8" fill="white" opacity="0.5" />
                  <rect x="1" y="5.5" width="3.5" height="3.5" rx="0.8" fill="white" opacity="0.5" />
                  <rect x="5.5" y="5.5" width="3.5" height="3.5" rx="0.8" fill="white" />
                </svg>
              </div>
              Onboard
            </div>
            <p className="text-[12.5px] text-[#888] leading-relaxed max-w-[160px]">
              Employee onboarding, reimagined for modern teams.
            </p>
          </div>

          {[
            {
              heading: "Product",
              links: ["How it works", "Features", "Integrations", "AI assistant", "Security"],
            },
            {
              heading: "Company",
              links: ["About", "Blog", "Careers", "Press", "Contact"],
            },
            {
              heading: "Legal",
              links: ["Privacy policy", "Terms of service", "Cookie policy", "SOC 2"],
            },
          ].map((col) => (
            <div key={col.heading}>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#999] mb-4">
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-[#555] hover:text-black transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#e5e5e5]">
          <p className="text-[12px] text-[#aaa]">
            © 2026 Onboard Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "GitHub"].map((s) => (
              <a key={s} href="#" className="text-[12px] text-[#aaa] hover:text-black transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
