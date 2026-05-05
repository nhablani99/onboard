"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f0efed]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-semibold text-[15px]">
          <div className="w-7 h-7 rounded-lg bg-[#111] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
              <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.5" />
              <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.5" />
              <rect x="8" y="8" width="5" height="5" rx="1" fill="white" />
            </svg>
          </div>
          Onboard
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] text-[#444]">
          <a href="#how" className="hover:text-black transition-colors">How it works</a>
          <a href="#ai" className="hover:text-black transition-colors flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#4F6EF7] inline-block"></span>
            AI features
          </a>
          <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
          <a href="#" className="hover:text-black transition-colors">Docs</a>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-[13px] text-[#444] hover:text-black transition-colors">
            Sign in
          </button>
          <button className="bg-[#111] text-white text-[13px] font-medium px-4 py-2 rounded-full hover:bg-[#333] transition-colors">
            Get started free
          </button>
        </div>
      </div>
    </header>
  );
}
