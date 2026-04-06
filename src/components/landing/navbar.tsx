"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { MagneticButton } from "@/components/landing/magnetic-button";
import { ThemeToggle } from "@/components/landing/theme-toggle";
import { cn } from "@/components/landing/utils";

const navLinks = [
  { href: "#how", label: "How it Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#stories", label: "Stories" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 10);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled
          ? "border-white/10 bg-[#0A0A0F]/85 shadow-[0_14px_44px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "bg-[#0A0A0F]/60 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between gap-6 px-5 lg:px-8">
        <a href="#top" className="group inline-flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet-500/40 bg-gradient-to-br from-zinc-800 to-zinc-900 font-[700] text-zinc-200 transition-transform group-hover:scale-105">
            C
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-zinc-100">Catalyst</span>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MagneticButton
            href="#final-cta"
            className="h-10 border border-violet-400/35 bg-violet-600/95 px-5 text-sm font-semibold text-zinc-100"
          >
            Start Free
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
