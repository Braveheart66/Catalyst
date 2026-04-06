"use client";

import { motion } from "framer-motion";
import { RevealItem, RevealSection } from "@/components/landing/motion-primitives";
import { TiltCard } from "@/components/landing/tilt-card";

const steps = [
  {
    id: "01",
    title: "Describe your idea",
    description:
      "Write one plain-English concept. No framework prep, no prompt-engineering rituals.",
    content: (
      <div className="mt-6 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-zinc-700 shadow-md dark:border-white/15 dark:bg-zinc-950/70 dark:text-zinc-300 dark:shadow-none">
        <span className="mr-2 font-semibold text-violet-400">&gt;</span>
        AI assistant for restaurant hiring and onboarding...
      </div>
    ),
  },
  {
    id: "02",
    title: "AI validation engine",
    description:
      "Catalyst stress-tests market pull, monetization quality, and competitor pressure in parallel.",
    content: (
      <div className="relative mx-auto mt-5 grid h-44 w-44 place-items-center rounded-full border border-dashed border-violet-500/50">
        <motion.div
          className="absolute inset-[30%] rounded-full border border-violet-400/40 bg-violet-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.span
          className="absolute -top-3 rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] font-semibold text-zinc-600 shadow-sm dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-300 dark:shadow-none"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
        >
          Market Fit Check
        </motion.span>
        <motion.span
          className="absolute right-[-38px] rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] font-semibold text-zinc-600 shadow-sm dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-300 dark:shadow-none"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 2.1, repeat: Number.POSITIVE_INFINITY }}
        >
          Revenue Model
        </motion.span>
        <motion.span
          className="absolute -bottom-3 rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] font-semibold text-zinc-600 shadow-sm dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-300 dark:shadow-none"
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 2.3, repeat: Number.POSITIVE_INFINITY }}
        >
          Competitor Scan
        </motion.span>
      </div>
    ),
  },
  {
    id: "03",
    title: "Founder Pack generated",
    description:
      "Download a complete startup package with investor narrative, numbers, and clickable product flow.",
    content: (
      <div className="relative mx-auto mt-6 h-28 w-32">
        <span className="absolute inset-0 rounded-xl border border-black/10 bg-white shadow-sm rotate-[-10deg] dark:border-white/15 dark:bg-zinc-900/90 dark:shadow-none" />
        <span className="absolute inset-0 rounded-xl border border-violet-400/50 bg-violet-500/20" />
        <span className="absolute inset-0 rounded-xl border border-black/10 bg-white shadow-sm rotate-[10deg] dark:border-white/15 dark:bg-zinc-900/90 dark:shadow-none" />
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <RevealSection id="how" className="section-divider-bottom relative z-10 px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="section-panel rounded-3xl border border-white/10 p-6 md:p-8">
          <RevealItem className="mb-14">
            <p className="eyebrow">How It Works</p>
            <h2 className="section-title">One prompt in. Full founder system out.</h2>
          </RevealItem>

          <div className="relative grid gap-5 lg:grid-cols-3">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-14 hidden h-px bg-gradient-to-r from-transparent via-violet-500/45 to-transparent lg:block" />
            {steps.map((step, index) => (
              <RevealItem key={step.id}>
                <TiltCard className="h-full rounded-2xl border border-black/10 bg-white p-6 shadow-md dark:border-white/12 dark:bg-[#111522]/82 dark:shadow-none">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/35 bg-violet-500/10 px-3 py-1 text-xs font-semibold tracking-[0.1em] text-zinc-600 dark:text-zinc-300">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        index === 1 ? "bg-red-400 shadow-[0_0_12px_rgba(239,68,68,0.65)]" : "bg-violet-400"
                      }`}
                    />
                    STEP {step.id}
                  </div>
                  <h3 className="font-heading text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{step.description}</p>
                  {step.content}
                </TiltCard>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
