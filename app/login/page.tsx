"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (mode === "signup" && !name) {
      setError("Please enter your name.");
      return;
    }
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const body = mode === "login" ? { email, password } : { name, email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      if (mode === "signup") {
        const loginRes = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const loginData = await loginRes.json();
        if (loginRes.ok) {
          localStorage.setItem("onboard_auth", "true");
          localStorage.setItem("onboard_user", JSON.stringify(loginData.user));
          router.push("/");
        }
      } else {
        localStorage.setItem("onboard_auth", "true");
        localStorage.setItem("onboard_user", JSON.stringify(data.user));
        router.push("/");
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f0efed] flex items-center justify-center px-4">
      <div className="w-full max-w-[400px]">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <div className="w-9 h-9 rounded-xl bg-[#111] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
              <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.5" />
              <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.5" />
              <rect x="8" y="8" width="5" height="5" rx="1" fill="white" />
            </svg>
          </div>
          <span className="text-[22px] font-bold text-[#111]">OnBoard</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-[#e8e8e8] shadow-lg p-8">
          <h1 className="text-[24px] font-bold text-[#111] text-center mb-1">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-[14px] text-[#888] text-center mb-8">
            {mode === "login"
              ? "Sign in to your account to continue"
              : "Get started with OnBoard for free"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="block text-[12px] font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-[#e0e0e0] bg-[#f9f9f8] text-[14px] text-[#111] placeholder-[#bbb] outline-none focus:border-[#4F6EF7] focus:ring-2 focus:ring-[#4F6EF7]/10 transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-[12px] font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl border border-[#e0e0e0] bg-[#f9f9f8] text-[14px] text-[#111] placeholder-[#bbb] outline-none focus:border-[#4F6EF7] focus:ring-2 focus:ring-[#4F6EF7]/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "login" ? "Enter your password" : "Create a password"}
                className="w-full px-4 py-3 rounded-xl border border-[#e0e0e0] bg-[#f9f9f8] text-[14px] text-[#111] placeholder-[#bbb] outline-none focus:border-[#4F6EF7] focus:ring-2 focus:ring-[#4F6EF7]/10 transition-all"
              />
            </div>

            {error && (
              <p className="text-[13px] text-[#F43F5E] text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#111] text-white font-semibold text-[14px] py-3 rounded-xl hover:bg-[#333] transition-colors disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  {mode === "login" ? "Signing in..." : "Creating account..."}
                </span>
              ) : mode === "login" ? (
                "Sign in"
              ) : (
                "Create account"
              )}
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#e8e8e8]" />
            <span className="text-[11px] text-[#bbb] uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-[#e8e8e8]" />
          </div>

          <button className="w-full flex items-center justify-center gap-2.5 border border-[#e0e0e0] rounded-xl py-3 text-[13px] font-medium text-[#444] hover:bg-[#f9f9f8] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M15.68 8.18c0-.57-.05-1.12-.15-1.64H8v3.1h4.3a3.68 3.68 0 0 1-1.6 2.42v2h2.59c1.51-1.4 2.39-3.45 2.39-5.88z" fill="#4285F4" />
              <path d="M8 16c2.16 0 3.97-.72 5.3-1.94l-2.59-2a4.79 4.79 0 0 1-7.14-2.52H.94v2.06A8 8 0 0 0 8 16z" fill="#34A853" />
              <path d="M3.57 9.54a4.8 4.8 0 0 1 0-3.08V4.4H.94a8 8 0 0 0 0 7.2l2.63-2.06z" fill="#FBBC05" />
              <path d="M8 3.18a4.33 4.33 0 0 1 3.07 1.2l2.3-2.3A7.72 7.72 0 0 0 8 0 8 8 0 0 0 .94 4.4l2.63 2.06A4.77 4.77 0 0 1 8 3.18z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          <p className="text-[12px] text-[#aaa] text-center mt-6">
            {mode === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => { setMode("signup"); setError(""); }}
                  className="text-[#4F6EF7] font-medium hover:underline"
                >
                  Sign up free
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => { setMode("login"); setError(""); }}
                  className="text-[#4F6EF7] font-medium hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>

        <p className="text-[11px] text-[#bbb] text-center mt-6">
          © 2026 OnBoard Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
