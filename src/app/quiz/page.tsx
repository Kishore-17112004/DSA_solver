import { GlassCard } from "@/components/ui/glass-card";
import { PageTitle } from "@/components/ui/page-title";

export default function QuizPage() {
  return (
    <div>
      <PageTitle title="Quiz & MCQ Arena" subtitle="Adaptive quiz generation with instant explanation and confidence scoring." />
      <GlassCard>
        <p className="text-sm">Which data structure best supports BFS traversal?</p>
        <div className="mt-3 grid gap-2 text-sm">
          {["Stack", "Queue", "Heap", "Trie"].map((option) => (
            <button key={option} type="button" className="rounded-lg border border-border/70 px-3 py-2 text-left hover:bg-white/5">
              {option}
            </button>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
