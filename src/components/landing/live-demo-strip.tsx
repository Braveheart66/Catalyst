"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { RevealItem, RevealSection } from "@/components/landing/motion-primitives";

const outputs = [
  {
    title: "Business model output",
    body: "Two-sided marketplace with a $19/month owner plan plus 15% booking fee. Defensibility comes from AI fit scoring, verified sitter behavior data, and retention loops after every booking.",
  },
  {
    title: "3-year P&L snapshot",
    table: [
      ["Revenue", "$0.42M", "$2.1M", "$6.8M"],
      ["Gross Margin", "52%", "63%", "69%"],
      ["Net Income", "-$0.31M", "$0.28M", "$1.9M"],
    ],
  },
  {
    title: "Competitor landscape",
    list: [
      "Rover: broad supply but weaker personalization trust signals.",
      "Wag!: transaction-first UX with lower retention moat.",
      "Catalyst wedge: AI compatibility score + reliability guarantee.",
    ],
  },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function LiveDemoStrip() {
  const [status, setStatus] = useState("Queued for generation...");
  const [visibleCount, setVisibleCount] = useState(0);
  const hasRunRef = useRef(false);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(targetRef, { amount: 0.35, once: true });

  useEffect(() => {
    if (!inView || hasRunRef.current) {
      return;
    }

    hasRunRef.current = true;

    const run = async () => {
      setStatus("Running market + model analysis...");
      await sleep(500);
      setVisibleCount(1);
      setStatus("Business model structured.");
      await sleep(450);
      setVisibleCount(2);
      setStatus("Financial projection complete.");
      await sleep(450);
      setVisibleCount(3);
      setStatus("Competitor landscape mapped.");
      await sleep(350);
      setStatus("Founder Pack ready to export.");
    };

    run();
  }, [inView]);

  return (
    <RevealSection id="live-demo" className="relative z-10 px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-[1240px]" ref={targetRef}>
        <RevealItem>
          <div className="rounded-3xl border border-violet-400/30 bg-[#10131C]/95 p-6 shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
            <div className="rounded-2xl border border-white/12 bg-zinc-950/65 p-4">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500">Input</p>
              <p className="text-sm text-zinc-200">
                &quot;An app that lets dog owners find trusted pet-sitters using AI matching.&quot;
              </p>
            </div>

            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              {status}
            </p>

            <div className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_1fr_1fr]">
              {outputs.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={
                    index < visibleCount
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 16, scale: 0.98 }
                  }
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4"
                >
                  <h3 className="mb-2 font-heading text-base font-semibold text-zinc-100">{card.title}</h3>

                  {card.body ? <p className="text-sm leading-relaxed text-zinc-300">{card.body}</p> : null}

                  {card.table ? (
                    <table className="w-full text-left text-xs text-zinc-300">
                      <thead>
                        <tr className="border-b border-white/10 text-zinc-400">
                          <th className="py-1">Metric</th>
                          <th className="py-1">Y1</th>
                          <th className="py-1">Y2</th>
                          <th className="py-1">Y3</th>
                        </tr>
                      </thead>
                      <tbody>
                        {card.table.map((row) => (
                          <tr key={row[0]} className="border-b border-white/8">
                            <td className="py-1.5">{row[0]}</td>
                            <td className="py-1.5">{row[1]}</td>
                            <td className="py-1.5">{row[2]}</td>
                            <td className="py-1.5">{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : null}

                  {card.list ? (
                    <ul className="space-y-1 pl-4 text-sm text-zinc-300">
                      {card.list.map((item) => (
                        <li key={item} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </motion.article>
              ))}
            </div>
          </div>
        </RevealItem>
      </div>
    </RevealSection>
  );
}
