"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { week: "W1", xp: 120 },
  { week: "W2", xp: 260 },
  { week: "W3", xp: 410 },
  { week: "W4", xp: 560 },
  { week: "W5", xp: 750 },
];

export function ProgressChart() {
  return (
    <div className="h-72 w-full rounded-2xl border border-border/70 bg-panel/60 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="xpGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#27d3ff" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#27d3ff" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.14)" />
          <XAxis dataKey="week" stroke="currentColor" />
          <YAxis stroke="currentColor" />
          <Tooltip />
          <Area type="monotone" dataKey="xp" stroke="#27d3ff" fill="url(#xpGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
