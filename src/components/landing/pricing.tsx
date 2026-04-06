import { RevealItem, RevealSection } from "@/components/landing/motion-primitives";
import { MagneticButton } from "@/components/landing/magnetic-button";
import { TiltCard } from "@/components/landing/tilt-card";

const plans = [
  {
    name: "Free Sprint",
    price: "$0",
    period: "/mo",
    features: ["1 founding sprint weekly", "Core business model output", "Basic investor summary export"],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Founder Pro",
    price: "$79",
    period: "/mo",
    features: [
      "Unlimited founding sprints",
      "Full deck + financial model generator",
      "Clickable MVP exports",
      "Investor narrative tuning",
    ],
    cta: "Start Pro",
    featured: true,
  },
  {
    name: "Team",
    price: "$249",
    period: "/mo",
    features: [
      "Up to 10 builders",
      "Shared output workspace",
      "Collaboration comments",
      "Priority strategy support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <RevealSection id="pricing" className="section-divider-bottom relative z-10 px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="section-panel rounded-3xl border border-white/10 p-6 md:p-8">
          <RevealItem className="mb-14">
            <p className="eyebrow">Pricing</p>
            <h2 className="section-title">Choose your startup velocity.</h2>
          </RevealItem>

          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <RevealItem key={plan.name}>
                <TiltCard
                  className={`h-full rounded-2xl border p-6 ${
                    plan.featured
                      ? "border-violet-400/70 bg-violet-500/10 shadow-[0_20px_48px_rgba(124,58,237,0.35)]"
                      : "border-black/10 bg-white shadow-md dark:border-white/12 dark:bg-[#111420]/86 dark:shadow-none"
                  }`}
                >
                  {plan.featured ? (
                    <p className="mb-3 inline-flex rounded-full border border-violet-400/55 bg-violet-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-violet-700 dark:text-violet-100">
                      Most Popular
                    </p>
                  ) : null}

                  <h3 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{plan.name}</h3>
                  <p className="mt-3 font-heading text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {plan.price}
                    <span className="ml-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">{plan.period}</span>
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-[3px] text-red-300">●</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <MagneticButton
                      href="#final-cta"
                      className={`h-11 w-full justify-center border px-4 text-sm font-semibold ${
                        plan.featured
                          ? "hero-cta text-zinc-100"
                          : "border-black/12 bg-white text-zinc-900 shadow-sm hover:border-violet-400/45 dark:border-white/20 dark:bg-white/5 dark:text-zinc-100 dark:shadow-none"
                      }`}
                    >
                      {plan.cta}
                    </MagneticButton>
                  </div>
                </TiltCard>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
