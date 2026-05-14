import { GlassCard } from "@/components/ui/glass-card";
import { PageTitle } from "@/components/ui/page-title";

export default function RoadmapPage() {
  return (
    <div>
      <PageTitle title="Interactive Roadmap" subtitle="Personalized path from fundamentals to advanced algorithmic strategy." />
      <div className="grid gap-4 md:grid-cols-4">
        {["Foundations", "Core DS", "Algorithm Mastery", "Interview Arena"].map((step) => (
          <GlassCard key={step}>
            <h2 className="text-lg font-medium">{step}</h2>
            <p className="mt-2 text-sm text-foreground/70">Adaptive milestones with AI skill-gap detection.</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
