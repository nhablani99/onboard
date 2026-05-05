"use client";

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
