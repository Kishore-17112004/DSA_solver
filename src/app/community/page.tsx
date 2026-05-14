import { GlassCard } from "@/components/ui/glass-card";
import { PageTitle } from "@/components/ui/page-title";

export default function CommunityPage() {
  return (
    <div>
      <PageTitle title="Community Discussions" subtitle="Collaborate on solutions, share optimization tricks, and review code walkthroughs." />
      <div className="space-y-3">
        <GlassCard>
          <h2 className="text-sm font-medium">How to optimize Dijkstra for sparse graphs?</h2>
          <p className="mt-2 text-xs text-foreground/70">24 replies • 120 upvotes</p>
        </GlassCard>
        <GlassCard>
          <h2 className="text-sm font-medium">Best visual metaphor for recursion?</h2>
          <p className="mt-2 text-xs text-foreground/70">11 replies • 68 upvotes</p>
        </GlassCard>
      </div>
    </div>
  );
}
