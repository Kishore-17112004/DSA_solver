import { GlassCard } from "@/components/ui/glass-card";
import { PageTitle } from "@/components/ui/page-title";

const challengeData = [
  { title: "Two Sum Blitz", reward: "80 XP", difficulty: "Easy" },
  { title: "Graph Path Hunt", reward: "150 XP", difficulty: "Medium" },
  { title: "DP Dungeon", reward: "240 XP", difficulty: "Hard" },
];

export default function ChallengesPage() {
  return (
    <div>
      <PageTitle title="Challenge Arena" subtitle="Compete in timed coding battles, preserve your streak, and climb the leaderboard." />
      <div className="grid gap-4 md:grid-cols-3">
        {challengeData.map((item) => (
          <GlassCard key={item.title}>
            <h2 className="text-lg font-medium">{item.title}</h2>
            <p className="mt-2 text-sm text-foreground/70">{item.difficulty}</p>
            <p className="mt-4 text-sm font-medium text-accent">{item.reward}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
