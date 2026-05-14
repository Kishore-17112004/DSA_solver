import { notFound } from "next/navigation";
import { dsaModules } from "@/lib/constants";
import { GlassCard } from "@/components/ui/glass-card";
import { SortingBars } from "@/visualizers/sorting-bars";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const moduleData = dsaModules.find((item) => item.slug === slug);
  if (!moduleData) notFound();

  return (
    <div>
      <h1 className="text-3xl font-semibold md:text-4xl">{moduleData.title}</h1>
      <p className="mt-2 text-foreground/70">{moduleData.summary}</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <GlassCard>
          <h2 className="text-xl font-medium">Step-by-Step Breakdown</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-foreground/75">
            <li>Animated intro and real-world analogy</li>
            <li>Python implementation and complexity analysis</li>
            <li>Execution timeline with simulation controls</li>
            <li>Mini challenge and XP reward unlock</li>
          </ol>
        </GlassCard>
        <SortingBars />
      </div>
    </div>
  );
}
