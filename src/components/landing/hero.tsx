"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { HeroParticleCanvas } from "@/components/landing/hero-particle-canvas";
import { MagneticButton } from "@/components/landing/magnetic-button";
import { RevealItem, RevealSection } from "@/components/landing/motion-primitives";
import { TiltCard } from "@/components/landing/tilt-card";

type RuntimeCard = {
  title: string;
  body: string;
};

const prompts = [
  "AI concierge that helps dentists fill canceled appointments in real time.",
  "Carbon accounting SaaS for logistics SMEs with automated invoice parsing.",
  "Marketplace where indie game studios rent QA teams on demand.",
];

const pipelineSteps = ["Validating idea...", "Building business model...", "Generating financials..."];

const outputCards: RuntimeCard[] = [
  {
    title: "Business Model",
    body: "B2C subscription with trust scoring and dynamic expert matching for stronger retention.",
  },
  {
    title: "Financials",
    body: "3-year P&L model with CAC, LTV, runway, sensitivity scenarios, and margin assumptions.",
  },
  {
    title: "Pitch Deck",
    body: "12-slide investor narrative with market pressure, moat logic, GTM plan, and milestones.",
  },
  {
    title: "Competitor Map",
    body: "Actionable quadrant mapping with incumbents, weak spots, and wedge differentiation.",
  },
  {
    title: "MVP",
    body: "High-intent prototype flow with onboarding, first value delivery, and analytics events.",
  },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function statusFromStep(step: number) {
  if (step < 0) {
    return "Awaiting prompt input...";
  }

  if (step >= pipelineSteps.length) {
    return "Founder Pack generated in 58 seconds.";
  }

  return pipelineSteps[step];
}

export function Hero() {
  const [promptInput, setPromptInput] = useState("");
  const [typedPrompt, setTypedPrompt] = useState("");
  const [activeStep, setActiveStep] = useState(-1);
  const [cardPhases, setCardPhases] = useState<number[]>(() => outputCards.map(() => 0));
  const [isBusy, setIsBusy] = useState(false);

  const runningRef = useRef(false);
  const mountedRef = useRef(true);
  const indexRef = useRef(0);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const setCardPhase = useCallback((index: number, phase: number) => {
    setCardPhases((prev) => prev.map((entry, cardIndex) => (cardIndex === index ? phase : entry)));
  }, []);

  const runSimulation = useCallback(
    async (idea: string) => {
      if (runningRef.current) {
        return;
      }

      runningRef.current = true;
      setIsBusy(true);
      setTypedPrompt("");
      setActiveStep(-1);
      setCardPhases(outputCards.map(() => 0));

      await sleep(240);

      for (const char of idea) {
        if (!mountedRef.current) {
          return;
        }

        setTypedPrompt((current) => current + char);
        await sleep(16 + Math.floor(Math.random() * 25));
      }

      for (let step = 0; step < pipelineSteps.length; step += 1) {
        if (!mountedRef.current) {
          return;
        }

        setActiveStep(step);
        await sleep(560);
      }

      for (let card = 0; card < outputCards.length; card += 1) {
        if (!mountedRef.current) {
          return;
        }

        setCardPhase(card, 1);
        await sleep(280);
        setCardPhase(card, 2);
        await sleep(180);
      }

      if (!mountedRef.current) {
        return;
      }

      setActiveStep(pipelineSteps.length);
      setIsBusy(false);
      runningRef.current = false;
    },
    [setCardPhase]
  );

  useEffect(() => {
    indexRef.current = 1;
    const firstRun = window.setTimeout(() => {
      runSimulation(prompts[0]);
    }, 80);

    const interval = setInterval(() => {
      if (runningRef.current) {
        return;
      }

      const prompt = prompts[indexRef.current % prompts.length];
      indexRef.current += 1;
      runSimulation(prompt);
    }, 12000);

    return () => {
      window.clearTimeout(firstRun);
      clearInterval(interval);
    };
  }, [runSimulation]);

  const onRunClick = useCallback(() => {
    const idea = promptInput.trim();
    if (!idea) {
      return;
    }

    runSimulation(idea);
  }, [promptInput, runSimulation]);

  const statusText = useMemo(() => statusFromStep(activeStep), [activeStep]);

  return (
    <RevealSection id="top" className="section-divider-bottom relative z-20 bg-bg px-5 pb-20 pt-36 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <HeroParticleCanvas />
        <div className="hero-particle-overlay" />
      </div>

      <div className="mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <RevealItem className="relative z-30">
          <div className="hero-content-glass overflow-hidden rounded-[30px] p-7 md:p-9 lg:p-10">
            <div className="hero-heading-glow" aria-hidden="true" />

            <p className="eyebrow">The Founding Sprint</p>
            <h1 className="hero-title max-w-[16ch]">Your business idea. Investor-ready in 60 seconds.</h1>
            <p className="hero-subtitle">
              Catalyst runs your day-zero startup sprint from one prompt, producing an investor-ready founder package
              with structured narrative, numbers, and product direction.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <MagneticButton href="#live-demo" className="hero-cta h-12 px-6 text-sm font-semibold text-zinc-100">
                Run the Founding Sprint {"->"}
              </MagneticButton>
              <p className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-100">
                <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(239,68,68,0.72)]" />
                Runtime stream active
              </p>
            </div>
          </div>
        </RevealItem>

        <RevealItem className="relative">
          <div className="relative">
            <div className="hero-glow" aria-hidden="true" />

            <div className="mb-3 hidden grid-cols-2 gap-3 lg:grid">
              <motion.div
                className="floating-status-card rounded-xl px-3 py-2.5"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-500">Validation</p>
                <p className="mt-1 text-xs font-medium text-zinc-700 dark:text-zinc-200">Fit confidence: 92%</p>
              </motion.div>

              <motion.div
                className="floating-status-card rounded-xl px-3 py-2.5"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-500">Investor Pack</p>
                <p className="mt-1 text-xs font-medium text-zinc-700 dark:text-zinc-200">Deck + model synced</p>
              </motion.div>
            </div>

            <TiltCard
              className={`runtime-card ${
                isBusy ? "runtime-card-busy" : ""
              } rounded-2xl border border-black/10 bg-white shadow-md dark:border-violet-500/10 dark:bg-black/40 dark:shadow-[0_24px_68px_rgba(0,0,0,0.52)] p-5 backdrop-blur-xl md:p-6`}
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <h2 className="font-heading text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Founding Sprint Simulation</h2>
                <span className="inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-100">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  Live
                </span>
              </div>

              <div className="space-y-5">
                <section className="runtime-step-card rounded-xl border border-black/10 bg-white p-3.5 shadow-md dark:border-white/12 dark:bg-zinc-950/66 dark:shadow-none">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.11em] text-zinc-600 dark:text-zinc-500">Step 1 · Input</p>
                  <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                    <input
                      value={promptInput}
                      onChange={(event) => setPromptInput(event.target.value)}
                      className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm text-zinc-900 outline-none transition-colors focus:border-violet-400/65 dark:border-white/12 dark:bg-zinc-950/78 dark:text-zinc-100"
                      placeholder="Describe your startup idea..."
                    />
                    <button
                      type="button"
                      onClick={onRunClick}
                      className="catalyst-btn shimmer-btn hero-cta h-11 px-5 text-sm font-semibold text-zinc-100"
                    >
                      Trigger
                    </button>
                  </div>

                  <div className="mt-3 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-zinc-700 dark:border-white/10 dark:bg-zinc-950/72 dark:text-zinc-200">
                    <span className="mr-2 font-semibold text-violet-400">&gt;</span>
                    <span>{typedPrompt || "Waiting for startup idea..."}</span>
                    <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-violet-400 align-middle" />
                  </div>
                </section>

                <section className="runtime-step-card rounded-xl border border-black/10 bg-white p-3.5 shadow-md dark:border-white/12 dark:bg-zinc-950/66 dark:shadow-none">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.11em] text-zinc-600 dark:text-zinc-500">Step 2 · Generation</p>
                  <div className="space-y-2.5">
                    {pipelineSteps.map((step, index) => {
                      const isActive = activeStep === index;
                      const isDone = activeStep > index || activeStep >= pipelineSteps.length;
                      const isPending = !isDone;

                      return (
                        <div
                          key={step}
                          className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-xs transition-colors ${
                            isActive
                              ? "border-violet-500/45 bg-violet-500/10"
                              : isDone
                                ? "border-red-500/35 bg-red-500/10"
                                : "border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/3"
                          }`}
                        >
                          <span
                            className={`inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-semibold ${
                              isDone
                                ? "border-red-500/50 bg-red-500/15 text-red-100"
                                : isActive
                                  ? "border-violet-500/55 bg-violet-500/15 text-violet-100"
                                  : "border-black/15 bg-black/[0.03] text-zinc-500 dark:border-white/20 dark:bg-white/5 dark:text-zinc-400"
                            }`}
                          >
                            {isDone ? "✓" : index + 1}
                          </span>
                          <span
                            className={`${
                              isActive
                                ? "text-zinc-900 dark:text-zinc-100"
                                : isDone
                                  ? "text-zinc-800 dark:text-zinc-200"
                                  : "text-zinc-500 dark:text-zinc-400"
                            }`}
                          >
                            {step}
                          </span>
                          <span
                            className={`ml-auto h-2 rounded-full ${isActive ? "w-24" : "w-16"} ${
                              isPending ? "skeleton-shimmer bg-black/10 dark:bg-white/14" : "bg-violet-500/35"
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">{statusText}</p>
                </section>

                <section className="runtime-step-card rounded-xl border border-black/10 bg-white p-3.5 shadow-md dark:border-white/12 dark:bg-zinc-950/66 dark:shadow-none">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.11em] text-zinc-600 dark:text-zinc-500">Step 3 · Founder Pack Output</p>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {outputCards.map((card, index) => {
                      const phase = cardPhases[index];

                      return (
                        <TiltCard key={card.title} className="rounded-xl">
                          <motion.article
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={
                              phase === 0
                                ? { opacity: 0, y: 16, scale: 0.98 }
                                : {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                      duration: 0.35,
                                      delay: index * 0.12,
                                      ease: [0.22, 1, 0.36, 1],
                                    },
                                  }
                            }
                            className="runtime-output-card relative h-full overflow-hidden rounded-xl border border-black/10 bg-white px-3.5 py-3 shadow-md dark:border-white/10 dark:bg-[#141826]/88 dark:shadow-none"
                          >
                            {phase === 1 ? (
                              <div className="space-y-2">
                                <div className="h-3 w-24 rounded bg-zinc-700/80 skeleton-shimmer" />
                                <div className="h-2.5 w-full rounded bg-zinc-700/60 skeleton-shimmer" />
                                <div className="h-2.5 w-3/4 rounded bg-zinc-700/60 skeleton-shimmer" />
                              </div>
                            ) : (
                              <>
                                <div className="mb-1.5 flex items-center justify-between gap-2.5">
                                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{card.title}</h3>
                                  <span className="rounded-full border border-red-500/35 bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-100">
                                    Ready
                                  </span>
                                </div>
                                <p className="text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">{card.body}</p>
                              </>
                            )}
                          </motion.article>
                        </TiltCard>
                      );
                    })}
                  </div>
                </section>
              </div>
            </TiltCard>
          </div>
        </RevealItem>
      </div>
    </RevealSection>
  );
}
