import { GlassCard } from "@/components/ui/glass-card";
import { PageTitle } from "@/components/ui/page-title";

export default function NotesPage() {
  return (
    <div>
      <PageTitle title="Notes & Bookmarks" subtitle="Save snippets, complexity cheatsheets, and AI summary cards for revision." />
      <GlassCard>
        <p className="text-sm text-foreground/70">
          Bookmark: “AVL insertion rotation rules”, “DP memoization template”, “Graph adjacency list optimization”.
        </p>
      </GlassCard>
    </div>
  );
}
