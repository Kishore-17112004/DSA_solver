"use client";

import Link from "next/link";
import { navItems } from "@/lib/constants";
import { useTheme } from "@/hooks/use-theme";

export function TopNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold">
          DSA<span className="gradient-text">verse</span>
        </Link>
        <div className="hidden gap-5 text-sm md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-foreground/80 hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          className="glass-panel rounded-full px-3 py-1 text-sm"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </nav>
    </header>
  );
}
