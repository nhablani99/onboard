"use client";

import { useState, useEffect, useRef } from "react";

const CARDS = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Designer",
    dept: "Design",
    color: "#E8F4FD",
    accent: "#4F6EF7",
    initials: "SC",
    tasks: ["Figma access", "Notion workspace", "Slack channels"],
    rotate: "-8deg",
    x: "0%",
    z: 0,
    avatarBg: "#4F6EF7",
  },
  {
    id: 2,
    name: "Marcus Webb",
    role: "Software Engineer",
    dept: "Engineering",
    color: "#FFF7ED",
    accent: "#F97316",
    initials: "MW",
    tasks: ["GitHub org", "AWS console", "Linear project"],
    rotate: "-3deg",
    x: "0%",
    z: 1,
    avatarBg: "#F97316",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Growth Manager",
    dept: "Marketing",
    color: "#F0FDF4",
    accent: "#22C55E",
    initials: "PS",
    tasks: ["HubSpot CRM", "Google Analytics", "Asana boards"],
    rotate: "2deg",
    x: "0%",
    z: 2,
    avatarBg: "#22C55E",
  },
  {
    id: 4,
    name: "James O'Brien",
    role: "Finance Analyst",
    dept: "Finance",
    color: "#FDF4FF",
    accent: "#A855F7",
    initials: "JO",
    tasks: ["QuickBooks", "Expensify", "Data warehouse"],
    rotate: "7deg",
    x: "0%",
    z: 3,
    avatarBg: "#A855F7",
  },
  {
    id: 5,
    name: "Lena Park",
    role: "Ops Lead",
    dept: "Operations",
    color: "#FFF1F2",
    accent: "#F43F5E",
    initials: "LP",
    tasks: ["Jira boards", "Confluence", "Zoom account"],
    rotate: "13deg",
    x: "0%",
    z: 4,
    avatarBg: "#F43F5E",
  },
];


export default function Hero() {
  const [activeCard, setActiveCard] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % CARDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 flex-1">
        {/* Left: text */}
        <div className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white border border-[#e5e5e5] rounded-full px-3 py-1.5 text-[12px] text-[#555] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse inline-block"></span>
            Now in beta — free for early teams
          </div>

          <h1 className="text-[56px] md:text-[72px] font-bold leading-[1.0] tracking-tight text-[#111] mb-6">
            Onboarding,<br />
            <span className="font-display italic font-normal">finally</span> done right.
          </h1>

          <p className="text-[17px] text-[#555] leading-relaxed max-w-md mb-8">
            New hires lose days chasing access requests, IT tickets, and HR forms.
            Onboard connects your tools and provisions everything — automatically,
            on day one.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <button className="bg-[#111] text-white font-medium text-[14px] px-6 py-3 rounded-full hover:bg-[#333] transition-colors shadow-lg shadow-black/10">
              Start onboarding free
            </button>
            <button className="text-[14px] text-[#444] hover:text-black transition-colors flex items-center gap-1.5">
              Watch demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor" />
              </svg>
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#4F6EF7", "#F97316", "#22C55E", "#A855F7", "#F43F5E"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#f0efed] flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ backgroundColor: c }}
                >
                  {["SC", "MW", "PS", "JO", "LP"][i]}
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#666]">
              <span className="font-semibold text-[#111]">2,400+ employees</span> onboarded this month
            </p>
          </div>
        </div>

        {/* Right: card fan */}
        <div className="flex-1 relative h-[480px] w-full max-w-[520px]">
          {/* Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            {CARDS.map((card, i) => (
              <div
                key={card.id}
                className="absolute w-[220px] rounded-2xl p-4 shadow-xl border border-white/60 cursor-pointer hover:scale-105 transition-all duration-700"
                style={{
                  backgroundColor: card.color,
                  transform: activeCard === i
                    ? `rotate(0deg) translate(${40 + i * 15}px, ${-40 - i * 15}px) scale(1.08)`
                    : `rotate(${card.rotate}) translateX(${(i - 2) * 28}px) scale(1)`,
                  zIndex: activeCard === i ? 10 : card.z,
                  boxShadow: activeCard === i
                    ? `0 12px 40px ${card.accent}40, 0 0 20px ${card.accent}25`
                    : "0 8px 32px rgba(0,0,0,0.10)",
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
                    style={{ backgroundColor: card.avatarBg }}
                  >
                    {card.initials}
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-[#111] leading-tight">
                      {card.name}
                    </div>
                    <div className="text-[10.5px] text-[#666]">{card.role}</div>
                  </div>
                </div>

                {/* Dept tag */}
                <div
                  className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-3"
                  style={{ backgroundColor: card.accent + "22", color: card.accent }}
                >
                  {card.dept}
                </div>

                {/* Tasks */}
                <div className="space-y-1.5">
                  {card.tasks.map((t, j) => (
                    <div key={j} className="flex items-center gap-1.5 text-[11px] text-[#444]">
                      <div
                        className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: card.accent }}
                      >
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                          <path d="M1 3.5l1.8 1.8L6 1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>
                      {t}
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></div>
                  <span className="text-[10px] text-[#666]">Access provisioned</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f0efed] to-transparent pointer-events-none" />
    </section>
  );
}
