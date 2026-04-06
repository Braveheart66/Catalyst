"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
    body: "B2C subscription with trust scoring and dynamic expert matching for faster retention.",
  },
  {
    title: "Pitch Deck",
    body: "12-slide investor narrative with market pressure, moat logic, GTM plan, and milestones.",
  },
  {
    title: "Financials",
    body: "3-year P&L model with CAC, LTV, runway, sensitivity scenarios, and margin assumptions.",
  },
  {
    title: "Competitor Map",
    body: "Actionable quadrant mapping with incumbents, weak spots, and wedge differentiation.",
  },
  {
    title: "Clickable MVP",
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
  const [promptInput, setPromptInput] = useState("Describe your startup idea...");
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
    <RevealSection id="top" className="relative z-10 px-5 pb-14 pt-34 lg:px-8">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[1fr_1.06fr] lg:items-center">
        <RevealItem>
          <p className="eyebrow">The Founding Sprint</p>
          <h1 className="hero-title">Your business idea. Investor-ready in 60 seconds.</h1>
          <p className="hero-subtitle">
            A precision startup build system for day-zero founders. One prompt in. Complete investor-ready Founder
            Pack out.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <MagneticButton
              href="#live-demo"
              className="h-12 border border-violet-400/45 bg-violet-600 px-6 text-sm font-semibold text-zinc-100"
            >
              Run the Founding Sprint {"->"}
            </MagneticButton>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(245,187,83,0.75)]" />
              Live build stream active
            </p>
          </div>
        </RevealItem>

        <RevealItem>
          <div className="relative">
            <div className="hero-glow" aria-hidden="true" />
            <motion.div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/45 to-indigo-500/20 blur-xl"
              animate={{
                y: [0, -12, 0],
                x: [0, 10, 0],
              }}
              transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            <TiltCard
              className={`runtime-card ${
                isBusy ? "runtime-card-busy" : ""
              } rounded-3xl border border-violet-400/25 bg-[#10121A]/95 p-6 shadow-[0_24px_68px_rgba(0,0,0,0.5)]`}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="font-heading text-lg font-semibold tracking-tight text-zinc-100">Catalyst Runtime</h2>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  Live
                </span>
              </div>

              <div className="mb-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  value={promptInput}
                  onChange={(event) => setPromptInput(event.target.value)}
                  className="h-11 rounded-xl border border-white/12 bg-zinc-950/75 px-4 text-sm text-zinc-100 outline-none transition-colors focus:border-violet-400/65"
                  placeholder="Describe your startup idea..."
                />
                <button
                  type="button"
                  onClick={onRunClick}
                  className="catalyst-btn shimmer-btn h-11 border border-violet-400/45 bg-violet-600/95 px-5 text-sm font-semibold text-zinc-100"
                >
                  Trigger
                </button>
              </div>

              <div className="rounded-xl border border-white/12 bg-zinc-950/72 px-4 py-3 text-sm text-zinc-200">
                <span className="mr-2 font-semibold text-violet-400">&gt;</span>
                <span>{typedPrompt}</span>
                <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-violet-400 align-middle" />
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {pipelineSteps.map((step, index) => {
                  const isActive = activeStep === index;
                  const isDone = activeStep > index;

                  return (
                    <span
                      key={step}
                      className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                        isActive
                          ? "border-violet-400/60 bg-violet-500/20 text-zinc-100"
                          : isDone
                            ? "border-emerald-400/35 bg-emerald-500/12 text-emerald-200"
                            : "border-white/12 bg-white/4 text-zinc-400"
                      }`}
                    >
                      {step}
                    </span>
                  );
                })}
              </div>

              <p className="mt-4 text-xs font-medium text-zinc-400">{statusText}</p>

              <div className="mt-4 grid gap-2">
                {outputCards.map((card, index) => {
                  const phase = cardPhases[index];

                  return (
                    <motion.article
                      key={card.title}
                      initial={{ opacity: 0, y: 16, scale: 0.98 }}
                      animate={
                        phase === 0
                          ? { opacity: 0, y: 16, scale: 0.98 }
                          : { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } }
                      }
                      className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/85 px-4 py-3"
                    >
                      {phase === 1 ? (
                        <div className="space-y-2">
                          <div className="h-3 w-32 rounded bg-zinc-700/80 skeleton-shimmer" />
                          <div className="h-2.5 w-full rounded bg-zinc-700/60 skeleton-shimmer" />
                          <div className="h-2.5 w-3/4 rounded bg-zinc-700/60 skeleton-shimmer" />
                        </div>
                      ) : (
                        <>
                          <div className="mb-1.5 flex items-center justify-between gap-3">
                            <h3 className="text-sm font-semibold text-zinc-100">{card.title}</h3>
                            <span className="rounded-full border border-amber-400/35 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-200">
                              Ready in seconds
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed text-zinc-300">{card.body}</p>
                        </>
                      )}
                    </motion.article>
                  );
                })}
              </div>
            </TiltCard>
          </div>
        </RevealItem>
      </div>
    </RevealSection>
  );
}
