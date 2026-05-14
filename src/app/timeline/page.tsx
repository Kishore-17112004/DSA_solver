import { GlassCard } from "@/components/ui/glass-card";
import { PageTitle } from "@/components/ui/page-title";

export default function TimelinePage() {
  return (
    <div>
      <PageTitle title="Animated Learning Timeline" subtitle="Replay your learning journey with milestones, badges, and challenge wins." />
      <div className="space-y-3">
        {[
          "Completed Arrays visualizer",
          "Unlocked Graph traversal mission",
          "Won 3-day coding streak badge",
        ].map((event) => (
          <GlassCard key={event}>{event}</GlassCard>
        ))}
      </div>
    </div>
  );
}
