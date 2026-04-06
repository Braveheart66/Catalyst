"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Navbar } from "@/components/landing/navbar";
import { Pricing } from "@/components/landing/pricing";
import { ScrollProgress } from "@/components/landing/scroll-progress";
import { SocialProof } from "@/components/landing/social-proof";
import { Testimonials } from "@/components/landing/testimonials";

const OutputShowcase = dynamic(
  () => import("@/components/landing/output-showcase").then((mod) => mod.OutputShowcase),
  {
    loading: () => <section className="px-5 py-28 lg:px-8" />,
  }
);

const LiveDemoStrip = dynamic(
  () => import("@/components/landing/live-demo-strip").then((mod) => mod.LiveDemoStrip),
  {
    loading: () => <section className="px-5 py-28 lg:px-8" />,
  }
);

export function LandingPage() {
  const { scrollYProgress } = useScroll();
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="relative overflow-x-clip">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.38),rgba(67,56,202,0.12),transparent_70%)] blur-2xl"
          style={{ y: parallaxY1 }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-10rem] top-[48rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.18),rgba(124,58,237,0.08),transparent_72%)] blur-[60px]"
          style={{ y: parallaxY2 }}
        />

        <Hero />
        <SocialProof />
        <HowItWorks />
        <OutputShowcase />
        <LiveDemoStrip />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
