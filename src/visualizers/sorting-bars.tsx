"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { designSystem } from "@/lib/design-system";

const defaultValues = [30, 55, 22, 80, 42, 68];
const chartWidth = 320;
const chartHeight = 160;
const maxDomainValue = 100;

export function SortingBars({ values = defaultValues }: { values?: number[] }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const x = d3.scaleBand().domain(values.map((_, i) => String(i))).range([0, chartWidth]).padding(0.2);
    const y = d3.scaleLinear().domain([0, maxDomainValue]).range([chartHeight, 0]);

    svg
      .selectAll("rect")
      .data(values)
      .join("rect")
      .attr("x", (_, i) => x(String(i)) ?? 0)
      .attr("y", chartHeight)
      .attr("width", x.bandwidth())
      .attr("height", 0)
      .attr("fill", designSystem.colors.electricBlue)
      .transition()
      .duration(600)
      .attr("y", (d) => y(d))
      .attr("height", (d) => chartHeight - y(d));
  }, [values]);

  return (
    <div className="rounded-2xl border border-border/70 p-3">
      <svg ref={ref} width={chartWidth} height={chartHeight + 10} className="mx-auto" />
    </div>
  );
}
