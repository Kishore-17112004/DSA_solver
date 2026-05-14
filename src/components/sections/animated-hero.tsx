"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { fadeUp } from "@/animations/motion";
import { HeroCanvas } from "./hero-canvas";

export function AnimatedHero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbRef.current) return;
    const animation = gsap.to(orbRef.current, {
      y: 28,
      x: 12,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      <motion.div {...fadeUp} className="space-y-6">
        <p className="inline-flex rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-foreground/70">
          Futuristic AI Learning Platform
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Learn DSA with <span className="gradient-text">Cinematic Simulations</span>
        </h1>
        <p className="text-sm text-foreground/75 md:text-base">
          DSAverse blends animated visualizers, real-time Python execution, AI tutoring, and gamified progress into one elite learning workspace.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/dashboard" className="rounded-xl bg-accent px-4 py-2 text-sm font-medium text-black">
            Launch Dashboard
          </Link>
          <Link href="/learn" className="glass-panel rounded-xl px-4 py-2 text-sm font-medium">
            Explore Modules
          </Link>
        </div>
      </motion.div>
      <div className="relative">
        <div ref={orbRef} className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 rounded-full bg-accent-secondary/40 blur-2xl" />
        <HeroCanvas />
      </div>
    </section>
  );
}
