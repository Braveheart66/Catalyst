import { RevealItem, RevealSection } from "@/components/landing/motion-primitives";

const logos = ["Y Combinator Alumni", "Techstars Network", "Product Hunt #1 Makers", "Seedcamp Operators"];
const stats = ["4,200+ startups validated", "Avg. 58 seconds", "90+ countries"];

export function SocialProof() {
  return (
    <RevealSection className="relative z-10 px-5 pb-16 pt-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.35)] backdrop-blur-sm">
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
                  className="rounded-full border border-white/15 bg-zinc-950/70 px-4 py-1.5 text-xs font-semibold text-zinc-300 grayscale"
                >
                  {logo}
                </span>
              ))}
            </div>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-wrap gap-2.5">
              {stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full border border-violet-400/25 bg-violet-500/8 px-4 py-2 text-xs font-semibold text-zinc-200 shadow-[0_0_24px_rgba(124,58,237,0.15)]"
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
