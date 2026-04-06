import { MagneticButton } from "@/components/landing/magnetic-button";
import { RevealItem, RevealSection } from "@/components/landing/motion-primitives";

export function FinalCta() {
  return (
    <RevealSection id="final-cta" className="section-divider-bottom relative z-10 px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <RevealItem>
          <div className="final-cta-shell rounded-3xl border border-black/10 p-8 text-center shadow-[0_18px_36px_rgba(15,23,42,0.14)] dark:border-white/12 dark:shadow-[0_24px_50px_rgba(0,0,0,0.36)] md:p-14">
            <h2 className="hero-title mx-auto max-w-3xl">Stop thinking. Start building.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              Drop your idea into Catalyst and run the Founding Sprint. You will get a complete investor-ready startup
              package in under a minute.
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 rounded-2xl border border-black/10 bg-white p-3 shadow-md dark:border-white/12 dark:bg-zinc-950/72 dark:shadow-none md:grid-cols-[1fr_auto]">
              <input
                className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-violet-400/60 dark:border-white/12 dark:bg-zinc-900/75 dark:text-zinc-100"
                placeholder="Describe your startup idea in plain English"
                aria-label="Startup idea"
              />
              <MagneticButton
                href="#top"
                className="hero-cta h-11 px-5 text-sm font-semibold text-zinc-100"
              >
                Run Your Founding Sprint Free {"->"}
              </MagneticButton>
            </div>
          </div>
        </RevealItem>
      </div>
    </RevealSection>
  );
}
