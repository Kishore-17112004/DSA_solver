import { GlassCard } from "@/components/ui/glass-card";
import { PageTitle } from "@/components/ui/page-title";

const ranks = [
  { name: "AlgoNova", xp: 4200 },
  { name: "TreeWalker", xp: 3980 },
  { name: "Kishore", xp: 3500 },
];

export default function LeaderboardPage() {
  return (
    <div>
      <PageTitle title="Leaderboard" subtitle="Global ranking based on streak consistency, challenge completions, and XP gain." />
      <div className="space-y-3">
        {ranks.map((item, index) => (
          <GlassCard key={item.name} className="flex items-center justify-between">
            <p className="text-sm">
              #{index + 1} {item.name}
            </p>
            <p className="text-sm font-medium text-accent">{item.xp} XP</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
