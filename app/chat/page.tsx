"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const GREETING =
  "I'm your AI onboarding assistant. I can help you set up new hires, manage access, create onboarding checklists, and more. What would you like to do?";

const SUGGESTIONS = [
  "Set up a new engineer",
  "Create onboarding checklist",
  "Revoke access for departing employee",
  "Show onboarding status for this week",
];

const RESPONSES: Record<string, string> = {
  engineer:
    "Great! I'll set up a full-stack engineer workspace. Here's what I'll provision:\n\n- **GitHub** — added to engineering org with write access\n- **AWS Console** — developer IAM role attached\n- **Linear** — joined Engineering project board\n- **Slack** — added to #engineering, #standups, #deploys\n- **Datadog** — monitoring dashboard access\n\nAll 5 tools provisioned in **8 seconds**. The new hire will receive a welcome email with setup instructions. Anything else?",
  checklist:
    "Here's a standard onboarding checklist I've generated:\n\n1. Complete HR paperwork & benefits enrollment\n2. Set up laptop with company MDM profile\n3. Verify access to all provisioned tools\n4. Read the team handbook & engineering wiki\n5. Schedule 1:1 with manager and buddy\n6. Join first standup meeting\n7. Complete security awareness training\n8. Ship a small starter task in week one\n\nWant me to customize this for a specific role or department?",
  revoke:
    "I'll handle the offboarding access revocation. Please confirm the employee name and I'll:\n\n- **Audit** all active tool access across 40+ integrations\n- **Revoke** permissions in the correct dependency order\n- **Transfer** ownership of shared docs and projects\n- **Generate** a compliance report for your records\n- **Notify** relevant team leads of the change\n\nThis typically completes in under 30 seconds with a full audit trail. Who should I offboard?",
  status:
    "Here's your onboarding overview for this week:\n\n| Name | Role | Department | Status |\n|------|------|------------|--------|\n| Sarah Chen | Product Designer | Design | Completed |\n| Marcus Webb | Software Engineer | Engineering | In Progress (4/6 tools) |\n| Priya Sharma | Growth Manager | Marketing | Scheduled (Day 1: Monday) |\n\n**2 completed** this month, **1 in progress**, **1 upcoming**. All access grants are logged and compliant. Want details on any specific hire?",
};

// Matches user input to a canned response
function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("engineer") || lower.includes("set up") || lower.includes("provision"))
    return RESPONSES.engineer;
  if (lower.includes("checklist") || lower.includes("onboarding checklist") || lower.includes("task"))
    return RESPONSES.checklist;
  if (lower.includes("revoke") || lower.includes("offboard") || lower.includes("departing") || lower.includes("remove access"))
    return RESPONSES.revoke;
  if (lower.includes("status") || lower.includes("overview") || lower.includes("this week") || lower.includes("show"))
    return RESPONSES.status;
  return "I can help with that! Could you tell me a bit more? For example, I can:\n\n- **Provision access** for new hires across all your tools\n- **Create checklists** tailored to specific roles\n- **Revoke access** when someone leaves\n- **Show reports** on onboarding activity\n\nJust let me know what you need.";
}

export default function ChatPage() {
  const [authed, setAuthed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const routerChat = useRouter();

  useEffect(() => {
    if (localStorage.getItem("onboard_auth") === "true") {
      setAuthed(true);
    } else {
      routerChat.replace("/login");
    }
  }, [routerChat]);
  const [titleTyped, setTitleTyped] = useState("");
  const [titleDone, setTitleDone] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Type out "OnBoard" immediately, then repeat every 5 seconds
  useEffect(() => {
    const text = "OnBoard";

    function runTyping() {
      setTitleTyped("");
      setTitleDone(false);
      const pauseAfter = 2; // pause after "On"
      const pauseDuration = 1000;
      let i = 0;
      const typeNext = () => {
        i++;
        setTitleTyped(text.slice(0, i));
        if (i >= text.length) {
          setTimeout(() => setTitleDone(true), 400);
          return;
        }
        const delay = i === pauseAfter ? pauseDuration : 100;
        setTimeout(typeNext, delay);
      };
      setTimeout(typeNext, 100);
    }

    runTyping();
    const loop = setInterval(runTyping, 5000);
    return () => clearInterval(loop);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 160) + "px";
    }
  }, [input]);

  function handleSend(text?: string) {
    const content = text || input.trim();
    if (!content) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getResponse(content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  if (!authed) return null;

  return (
    <div className="flex h-screen bg-[#f7f7f5]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-[260px] bg-[#1a1a1a] text-white">
        <div className="p-4 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2.5 text-[14px] font-semibold">
            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
                <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.5" />
                <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.5" />
                <rect x="8" y="8" width="5" height="5" rx="1" fill="white" />
              </svg>
            </div>
            OnBoard Chat
          </Link>
        </div>

        <div className="p-3">
          <button className="w-full flex items-center gap-2 text-[13px] text-white/70 hover:text-white hover:bg-white/8 rounded-lg px-3 py-2.5 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            New conversation
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 space-y-1">
          <p className="text-[10px] font-semibold text-white/30 uppercase tracking-wider px-3 pt-4 pb-2">
            Recent
          </p>
          {[
            "Engineer onboarding — Marcus",
            "Q2 access audit report",
            "Design team setup",
          ].map((title, i) => (
            <button
              key={i}
              className="w-full text-left text-[13px] text-white/50 hover:text-white hover:bg-white/8 rounded-lg px-3 py-2 transition-colors truncate"
            >
              {title}
            </button>
          ))}
        </div>

        <div className="p-3 border-t border-white/10">
          <div className="flex items-center gap-2.5 px-3 py-2">
            <div className="w-7 h-7 rounded-full bg-[#4F6EF7] flex items-center justify-center text-[10px] font-bold">
              NH
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-medium truncate">Niranjan H.</div>
              <div className="text-[10px] text-white/40">Admin</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center justify-between px-5 py-3 border-b border-[#e8e8e8] bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4F6EF7] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="5" r="2.5" fill="white" />
                <path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-[14px] font-semibold text-[#111]">OnBoard AI</h1>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span className="text-[11px] text-[#888]">Always ready</span>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="text-[12px] text-[#888] hover:text-[#111] transition-colors flex items-center gap-1"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M10 7H4M7 4L4 7l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(6px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-5">
              <h2 className="text-[48px] md:text-[60px] font-bold text-[#111] leading-tight tracking-tight text-center mb-3 min-h-[72px]">
                {titleTyped}
                {titleTyped.length > 0 && !titleDone && (
                  <span className="inline-block w-[3px] h-[48px] md:h-[60px] bg-[#4F6EF7] ml-1 align-middle animate-pulse" />
                )}
              </h2>
              {titleDone && (
                <p className="text-[14px] text-[#999] mb-6 animate-[fadeIn_0.5s_ease]">
                  Your AI-powered onboarding assistant
                </p>
              )}
              {titleDone && (
                <div className="flex flex-wrap justify-center gap-2 animate-[fadeIn_0.5s_ease_0.2s_both]">
                  {SUGGESTIONS.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(s)}
                      className="text-[13px] bg-white border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-[#555] hover:bg-[#f5f5f3] hover:border-[#ccc] hover:text-[#111] transition-all shadow-sm"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto px-5 py-8 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-[#4F6EF7] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 9l2.5-5 2 4L10 4l1.5 5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-[14px] leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-[#111] text-white rounded-br-md"
                        : "bg-white border border-[#e8e8e8] text-[#333] rounded-bl-md shadow-sm"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: msg.content
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\n/g, "<br/>")
                        .replace(/\|(.+)\|/g, (match) => {
                          return match;
                        }),
                    }}
                  />
                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center flex-shrink-0 mt-1 text-white text-[10px] font-bold">
                      NH
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#4F6EF7] flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 9l2.5-5 2 4L10 4l1.5 5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="bg-white border border-[#e8e8e8] rounded-2xl rounded-bl-md px-5 py-4 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#bbb] animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 rounded-full bg-[#bbb] animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 rounded-full bg-[#bbb] animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="border-t border-[#e8e8e8] bg-white px-5 py-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-end gap-3 bg-[#f7f7f5] border border-[#e0e0e0] rounded-2xl px-4 py-3 focus-within:border-[#4F6EF7] focus-within:ring-2 focus-within:ring-[#4F6EF7]/10 transition-all">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message OnBoard AI..."
                rows={1}
                className="flex-1 bg-transparent text-[14px] text-[#111] placeholder-[#999] outline-none resize-none leading-relaxed"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="w-8 h-8 rounded-lg bg-[#111] flex items-center justify-center flex-shrink-0 disabled:opacity-30 hover:bg-[#333] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <p className="text-[11px] text-[#bbb] text-center mt-2.5">
              OnBoard AI can help manage employee access, checklists, and onboarding workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
