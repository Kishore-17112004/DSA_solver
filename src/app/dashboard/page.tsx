import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { PageTitle } from "@/components/ui/page-title";
import { ProgressChart } from "@/features/analytics/progress-chart";

export default function DashboardPage() {
  return (
    <div>
      <PageTitle title="Learning Command Center" subtitle="Track XP, streaks, and AI-guided learning momentum." />
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        {[
          { label: "XP", value: "1,240" },
          { label: "Streak", value: "12 days" },
          { label: "Rank", value: "#24" },
        ].map((item) => (
          <GlassCard key={item.label}>
            <p className="text-sm text-foreground/70">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </GlassCard>
        ))}
      </div>
      <ProgressChart />
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/playground" className="rounded-xl bg-accent px-4 py-2 text-sm font-medium text-black">
          Open Playground
        </Link>
        <Link href="/challenges" className="glass-panel rounded-xl px-4 py-2 text-sm">
          Start Challenge
        </Link>
      </div>
    </div>
  );
}
