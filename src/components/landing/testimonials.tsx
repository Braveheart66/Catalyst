import { RevealItem, RevealSection } from "@/components/landing/motion-primitives";
import { TiltCard } from "@/components/landing/tilt-card";

const testimonials = [
  {
    initials: "AL",
    name: "Ari Lane",
    startup: "NorthPort Health",
    quote:
      "Catalyst compressed six weeks of startup prep into a one-minute sprint. Our first investor deck was instantly usable.",
  },
  {
    initials: "MR",
    name: "Mina Rojas",
    startup: "Dockline AI",
    quote:
      "The competitor intelligence reframed our pitch. We went from fuzzy narrative to clear wedge and closed pre-seed fast.",
  },
  {
    initials: "JT",
    name: "Jamal Tran",
    startup: "Routecraft",
    quote:
      "It feels like a strategy partner, a CFO, and a PM operating in parallel. We finally executed with conviction.",
  },
];

export function Testimonials() {
  return (
    <RevealSection id="stories" className="section-divider-bottom relative z-10 px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="section-panel rounded-3xl border border-white/10 p-6 md:p-8">
          <RevealItem className="mb-14">
            <p className="eyebrow">Founder Stories</p>
            <h2 className="section-title">Built fast. Raised faster.</h2>
          </RevealItem>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((entry) => (
              <RevealItem key={entry.name}>
                <TiltCard className="h-full rounded-2xl border border-black/10 bg-white p-6 shadow-md dark:border-white/12 dark:bg-[#111420]/86 dark:shadow-none">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white font-semibold text-zinc-900 shadow-sm dark:border-white/15 dark:bg-zinc-800 dark:text-zinc-100 dark:shadow-none">
                      {entry.initials}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-zinc-900 dark:text-zinc-100">{entry.name}</h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">{entry.startup}</p>
                    </div>
                  </div>

                  <blockquote className="text-base leading-relaxed text-zinc-700 dark:text-zinc-200">
                    &quot;{entry.quote}&quot;
                  </blockquote>

                  <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-100">
                    <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_10px_rgba(239,68,68,0.7)]" />
                    Now funded ✦
                  </p>
                </TiltCard>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
