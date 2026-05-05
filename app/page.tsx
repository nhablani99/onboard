"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import HowItWorks from "@/components/HowItWorks";
import AISection from "@/components/AISection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  const [authed, setAuthed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("onboard_auth") === "true") {
      setAuthed(true);
    } else {
      router.replace("/login");
    }
  }, [router]);

  if (!authed) return null;

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoStrip />
      <HowItWorks />
      <AISection />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
