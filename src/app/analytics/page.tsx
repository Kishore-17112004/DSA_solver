import { PageTitle } from "@/components/ui/page-title";
import { ProgressChart } from "@/features/analytics/progress-chart";

export default function AnalyticsPage() {
  return (
    <div>
      <PageTitle title="Progress Analytics" subtitle="Review velocity, strengths, weak topics, and AI-curated revision priorities." />
      <ProgressChart />
    </div>
  );
}
