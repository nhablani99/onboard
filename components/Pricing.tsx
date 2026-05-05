"use client";

import { useState } from "react";

const PLANS = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    desc: "For small teams getting started.",
    features: [
      "Up to 5 new hires/month",
      "10 integrations",
      "Role-based access maps",
      "Email support",
    ],
    cta: "Get started free",
    highlight: false,
    color: "bg-white",
  },
  {
    name: "Growth",
    price: { monthly: 49, annual: 39 },
    desc: "For scaling teams that move fast.",
    features: [
      "Unlimited new hires",
      "40+ integrations",
      "AI onboarding assistant",
      "Audit logs & compliance",
      "Slack & priority support",
      "Custom checklists",
    ],
    cta: "Start free trial",
    highlight: true,
    color: "bg-[#111]",
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    desc: "For large orgs with custom needs.",
    features: [
      "Everything in Growth",
      "SSO & advanced security",
      "Custom integrations",
      "Dedicated success manager",
      "SLA & uptime guarantee",
      "On-prem option",
    ],
    cta: "Talk to sales",
    highlight: false,
    color: "bg-white",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#999] mb-3">
            Pricing
          </p>
          <h2 className="text-[42px] md:text-[52px] font-bold leading-[1.1] text-[#111] mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-[15px] text-[#666] mb-7">
            No per-seat surprises. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-[#ebebeb] rounded-full p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                !annual ? "bg-[#111] text-white" : "text-[#666]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors flex items-center gap-2 ${
                annual ? "bg-[#111] text-white" : "text-[#666]"
              }`}
            >
              Annual
              <span className="text-[10px] bg-[#22C55E] text-white px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-7 border flex flex-col ${
                plan.highlight
                  ? "bg-[#111] border-[#333] text-white"
                  : "bg-white border-[#ebebeb] text-[#111]"
              }`}
            >
              {plan.highlight && (
                <div className="inline-flex items-center gap-1.5 bg-[#4F6EF7]/20 text-[#4F6EF7] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-4 w-fit">
                  Most popular
                </div>
              )}

              <div className="mb-1 text-[13px] font-semibold opacity-60">{plan.name}</div>

              <div className="mb-2">
                {plan.price.monthly === null ? (
                  <div className="text-[38px] font-bold">Custom</div>
                ) : plan.price.monthly === 0 ? (
                  <div className="text-[38px] font-bold">Free</div>
                ) : (
                  <div className="flex items-end gap-1">
                    <div className="text-[38px] font-bold">
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </div>
                    <div className="text-[13px] opacity-50 mb-2">/mo</div>
                  </div>
                )}
              </div>

              <p className={`text-[13px] mb-6 ${plan.highlight ? "text-[#aaa]" : "text-[#777]"}`}>
                {plan.desc}
              </p>

              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px]">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlight ? "bg-[#4F6EF7]" : "bg-[#111]"
                      }`}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l2 2L6.5 2" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className={plan.highlight ? "text-[#ccc]" : "text-[#555]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full text-[13px] font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-[#4F6EF7] text-white hover:bg-[#3d5ce0]"
                    : "bg-[#111] text-white hover:bg-[#333]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
