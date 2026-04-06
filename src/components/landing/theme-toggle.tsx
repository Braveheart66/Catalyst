"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const THEME_KEY = "catalyst-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const saved = window.localStorage.getItem(THEME_KEY);
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="group relative inline-flex h-12 w-[132px] items-center rounded-full border border-white/15 bg-white/[0.04] p-1"
      onClick={() => {
        const next: Theme = isDark ? "light" : "dark";
        setTheme(next);
        window.localStorage.setItem(THEME_KEY, next);
      }}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-semibold uppercase tracking-[0.13em] transition-colors ${
          !isDark ? "text-zinc-950" : "text-zinc-400"
        }`}
      >
        Day
      </span>
      <span
        className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-semibold uppercase tracking-[0.13em] transition-colors ${
          isDark ? "text-zinc-100" : "text-zinc-400"
        }`}
      >
        Night
      </span>
      <motion.span
        className="z-10 h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[0_8px_24px_rgba(124,58,237,0.45)]"
        layout
        transition={{ type: "spring", stiffness: 230, damping: 17, mass: 0.58 }}
        animate={{ x: isDark ? 80 : 0 }}
      />
    </button>
  );
}
