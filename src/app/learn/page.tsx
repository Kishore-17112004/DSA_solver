import Link from "next/link";
import { dsaModules } from "@/lib/constants";
import { GlassCard } from "@/components/ui/glass-card";
import { PageTitle } from "@/components/ui/page-title";

export default function LearnPage() {
  return (
    <div>
      <PageTitle title="Animated DSA Modules" subtitle="Learn with guided intros, visual simulators, code walkthroughs, and mini challenges." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dsaModules.map((module) => (
          <GlassCard key={module.slug}>
            <h2 className="text-xl font-medium">{module.title}</h2>
            <p className="mt-2 text-sm text-foreground/70">{module.summary}</p>
            <p className="mt-3 text-xs text-foreground/70">
              {module.complexity} • +{module.xp} XP
            </p>
            <Link href={`/modules/${module.slug}`} className="mt-4 inline-block text-sm font-medium text-accent">
              Start module →
            </Link>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
