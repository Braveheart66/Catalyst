import { RevealItem, RevealSection } from "@/components/landing/motion-primitives";

const logos = ["Y Combinator Alumni", "Techstars Network", "Product Hunt #1 Makers", "Seedcamp Operators"];
const stats = ["4,200+ startups validated", "Avg. 58 seconds", "90+ countries"];

export function SocialProof() {
  return (
    <RevealSection className="section-divider-bottom relative z-10 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="section-panel rounded-3xl border border-white/10 p-6 shadow-[0_18px_42px_rgba(0,0,0,0.35)]">
          <RevealItem>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Trusted by teams shaped by
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mb-5 flex flex-wrap gap-2.5">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-zinc-600 shadow-sm grayscale dark:border-white/15 dark:bg-zinc-950/80 dark:text-zinc-400 dark:shadow-none"
                >
                  {logo}
                </span>
              ))}
            </div>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-wrap gap-2.5">
              {stats.map((stat, index) => (
                <span
                  key={stat}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                    index === 1
                      ? "border-violet-400/30 bg-violet-500/10 text-zinc-900 dark:text-zinc-100"
                      : index === 2
                        ? "border-red-500/30 bg-red-500/10 text-zinc-900 dark:text-zinc-100"
                        : "border-black/10 bg-white text-zinc-700 shadow-sm dark:border-white/12 dark:bg-white/4 dark:text-zinc-200 dark:shadow-none"
                  }`}
                >
                  {stat}
                </span>
              ))}
            </div>
          </RevealItem>
        </div>
      </div>
    </RevealSection>
  );
}
