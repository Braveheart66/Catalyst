import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalyst | The Founding Sprint",
  description:
    "Catalyst turns a plain-English startup idea into a complete investor-ready Founder Pack in about 60 seconds.",
};

const themeBootScript = `
(() => {
  const key = "catalyst-theme";
  const saved = window.localStorage.getItem(key);
  const theme = saved === "light" ? "light" : "dark";
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geist.variable} h-full antialiased dark`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-full bg-bg text-text transition-colors duration-300">{children}</body>
    </html>
  );
}
