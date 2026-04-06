import { MagneticButton } from "@/components/landing/magnetic-button";
import { RevealItem, RevealSection } from "@/components/landing/motion-primitives";

export function FinalCta() {
  return (
    <RevealSection id="final-cta" className="relative z-10 px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <RevealItem>
          <div className="final-cta-shell rounded-3xl border border-white/12 p-8 text-center md:p-14">
            <h2 className="hero-title mx-auto max-w-3xl">Stop thinking. Start building.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-300">
              Drop your idea into Catalyst and run the Founding Sprint. You will get a complete investor-ready startup
              package in under a minute.
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 rounded-2xl border border-white/12 bg-zinc-950/65 p-3 md:grid-cols-[1fr_auto]">
              <input
                className="h-11 rounded-xl border border-white/12 bg-zinc-900/75 px-4 text-sm text-zinc-100 outline-none focus:border-violet-400/60"
                placeholder="Describe your startup idea in plain English"
                aria-label="Startup idea"
              />
              <MagneticButton
                href="#top"
                className="h-11 border border-violet-400/50 bg-violet-600 px-5 text-sm font-semibold text-zinc-100"
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
