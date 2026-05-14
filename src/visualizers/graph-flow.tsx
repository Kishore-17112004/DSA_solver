"use client";

import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes = [
  { id: "1", position: { x: 120, y: 40 }, data: { label: "Start" } },
  { id: "2", position: { x: 20, y: 150 }, data: { label: "Visit Node A" } },
  { id: "3", position: { x: 220, y: 150 }, data: { label: "Visit Node B" } },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
];

export function GraphFlowVisualizer() {
  return (
    <div className="h-[340px] overflow-hidden rounded-2xl border border-border/70">
      <ReactFlow fitView defaultNodes={nodes} defaultEdges={edges}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
