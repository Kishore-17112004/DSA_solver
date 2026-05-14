import { PageTitle } from "@/components/ui/page-title";
import { CodeEditor } from "@/features/playground/code-editor";
import { GraphFlowVisualizer } from "@/visualizers/graph-flow";

export default function PlaygroundPage() {
  return (
    <div>
      <PageTitle title="DSA Visualization Playground" subtitle="Run Python snippets, inspect states, and animate data node movements in real time." />
      <div className="grid gap-4 lg:grid-cols-2">
        <CodeEditor />
        <GraphFlowVisualizer />
      </div>
    </div>
  );
}
