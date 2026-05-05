"use client";

import { useState } from "react";

const SUGGESTIONS = [
  "Provision full-stack engineer access for Marcus",
  "Send welcome checklist to new design hire",
  "Revoke Jira access for departing employee",
  "Generate onboarding report for Q2",
];

const CHAT = [
  {
    role: "user",
    text: "I just hired a senior backend engineer. What should I set up?",
  },
  {
    role: "ai",
    text: "Based on your Engineering team's access map, I'll provision:\n• GitHub org (backend team)\n• AWS console with dev role\n• Linear project board\n• Datadog + PagerDuty\n• Confluence engineering space\n\nShall I proceed with all of the above?",
  },
  {
    role: "user",
    text: "Yes, go ahead. Skip PagerDuty for now.",
  },
  {
    role: "ai",
    text: "Done! Access provisioned for 4 systems in 12 seconds. PagerDuty has been skipped — you can add it later from their profile. A welcome email has been sent.",
  },
];

export default function AISection() {
  const [visible, setVisible] = useState(2);

  return (
    <section id="ai" className="py-28 px-6 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="flex-1 max-w-lg">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#aaa] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7] inline-block"></span>
              AI-powered
            </div>

            <h2 className="text-[42px] md:text-[52px] font-bold leading-[1.1] mb-6">
              Meet your <br />
              <span className="font-display italic font-normal text-[#4F6EF7]">
                onboarding assistant.
              </span>
            </h2>

            <p className="text-[15px] text-[#aaa] leading-relaxed mb-8">
              Just describe who you&apos;re hiring and what they&apos;ll work on.
              Onboard&apos;s AI figures out exactly which tools, permissions, and
              channels they need — and sets everything up automatically.
            </p>

            <div className="space-y-3">
              {[
                "Understands roles and departments",
                "Learns your company's access patterns",
                "Catches provisioning errors before they happen",
                "Drafts welcome messages and task lists",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4F6EF7] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[14px] text-[#ccc]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-[11px] text-[#888] uppercase tracking-wider font-semibold mb-3">
                Try asking
              </p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    className="text-[12px] bg-white/8 border border-white/10 rounded-full px-3 py-1.5 text-[#ccc] hover:bg-white/15 hover:text-white transition-colors text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Chat UI */}
          <div className="flex-1 max-w-lg w-full">
            <div className="bg-[#1a1a1a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
                <div className="w-8 h-8 rounded-full bg-[#4F6EF7] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="5" r="2.5" fill="white" />
                    <path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-semibold">Onboard AI</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                    <span className="text-[11px] text-[#888]">Online</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 min-h-[340px]">
                {CHAT.slice(0, visible).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "ai" && (
                      <div className="w-6 h-6 rounded-full bg-[#4F6EF7] flex-shrink-0 mr-2 mt-1 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 7l2-4 1.5 3L7 3l1 4" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed whitespace-pre-line ${
                        msg.role === "user"
                          ? "bg-[#4F6EF7] text-white rounded-br-sm"
                          : "bg-white/8 text-[#ddd] rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {visible < CHAT.length && (
                  <button
                    onClick={() => setVisible((v) => Math.min(v + 1, CHAT.length))}
                    className="w-full text-center text-[12px] text-[#666] hover:text-[#aaa] transition-colors py-1"
                  >
                    Continue conversation ↓
                  </button>
                )}
              </div>

              {/* Input */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-xl px-4 py-2.5">
                  <input
                    type="text"
                    placeholder="Ask anything about onboarding..."
                    className="flex-1 bg-transparent text-[13px] text-white placeholder-[#555] outline-none"
                    readOnly
                  />
                  <button className="w-7 h-7 rounded-lg bg-[#4F6EF7] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
