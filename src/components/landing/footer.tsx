export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20 px-5 py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#top" className="inline-flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet-500/40 bg-gradient-to-br from-zinc-800 to-zinc-900 font-[700] text-zinc-200">
              C
            </span>
            <span className="font-heading text-lg font-semibold text-zinc-100">Catalyst</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-zinc-400">The precision AI platform for day-zero founders.</p>
        </div>

        <div className="space-y-2 text-sm text-zinc-300">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-zinc-400">Product</h3>
          <a href="#how" className="block hover:text-zinc-100">
            How it Works
          </a>
          <a href="#pricing" className="block hover:text-zinc-100">
            Pricing
          </a>
          <a href="#live-demo" className="block hover:text-zinc-100">
            Live Demo
          </a>
        </div>

        <div className="space-y-2 text-sm text-zinc-300">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-zinc-400">Company</h3>
          <a href="#stories" className="block hover:text-zinc-100">
            Stories
          </a>
          <a href="#" className="block hover:text-zinc-100">
            Careers
          </a>
          <a href="#" className="block hover:text-zinc-100">
            Contact
          </a>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-zinc-400">Legal</h3>
          <div className="mt-2 space-y-2 text-sm text-zinc-300">
            <a href="#" className="block hover:text-zinc-100">
              Privacy
            </a>
            <a href="#" className="block hover:text-zinc-100">
              Terms
            </a>
            <a href="#" className="block hover:text-zinc-100">
              Security
            </a>
          </div>

          <label htmlFor="newsletter" className="mt-5 block text-xs font-medium uppercase tracking-[0.1em] text-zinc-500">
            Newsletter
          </label>
          <div className="mt-2 flex items-center overflow-hidden rounded-xl border border-white/12 bg-zinc-900/70">
            <input
              id="newsletter"
              type="email"
              placeholder="you@company.com"
              className="h-10 flex-1 bg-transparent px-3 text-sm text-zinc-100 outline-none"
            />
            <button type="button" className="h-10 w-11 border-l border-white/10 bg-violet-600/80 text-zinc-100">
              {"->"}
            </button>
          </div>

          <div className="mt-4 flex gap-2">
            {[
              { label: "X", href: "#" },
              { label: "in", href: "#" },
              { label: "GH", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="grid h-8 w-8 place-items-center rounded-md border border-white/12 bg-white/5 text-xs font-semibold text-zinc-200 hover:border-violet-400/50 hover:text-zinc-100"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
