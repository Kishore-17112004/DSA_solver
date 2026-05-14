import { GlassCard } from "@/components/ui/glass-card";
import { PageTitle } from "@/components/ui/page-title";

export default function AssistantPage() {
  return (
    <div>
      <PageTitle title="AI Tutor Assistant" subtitle="Ask for hints, voice-ready explanations, and personalized weak-topic revision plans." />
      <GlassCard>
        <p className="text-sm text-foreground/75">
          Suggested prompt: “Explain AVL rotations with a real-world analogy and show Python code.”
        </p>
        <div className="mt-4 rounded-xl border border-border/70 bg-background/60 p-4">
          <p className="text-sm text-foreground/70">AI: Great question! Let’s visualize imbalance as a tilted mobile shelf...</p>
        </div>
      </GlassCard>
    </div>
  );
}
