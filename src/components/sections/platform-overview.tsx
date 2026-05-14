import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";

const sections = [
  { title: "AI Tutor Assistant", href: "/assistant", text: "Ask for hints, analogies, and optimized Python explanations." },
  { title: "Visualization Playground", href: "/playground", text: "Simulate node traversal and algorithm flow in real-time." },
  { title: "Challenge Arena", href: "/challenges", text: "Solve timed coding battles and earn XP streak rewards." },
  { title: "Interactive Roadmap", href: "/roadmap", text: "Track personalized learning paths powered by skill analytics." },
];

export function PlatformOverview() {
  return (
    <section className="mt-10 grid gap-4 md:grid-cols-2">
      {sections.map((section) => (
        <GlassCard key={section.href}>
          <h2 className="text-xl font-medium">{section.title}</h2>
          <p className="mt-2 text-sm text-foreground/70">{section.text}</p>
          <Link href={section.href} className="mt-4 inline-block text-sm font-medium text-accent">
            Open →
          </Link>
        </GlassCard>
      ))}
    </section>
  );
}
