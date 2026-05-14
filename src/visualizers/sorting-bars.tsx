"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const values = [30, 55, 22, 80, 42, 68];

export function SortingBars() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const x = d3.scaleBand().domain(values.map((_, i) => String(i))).range([0, 320]).padding(0.2);
    const y = d3.scaleLinear().domain([0, 100]).range([160, 0]);

    svg
      .selectAll("rect")
      .data(values)
      .join("rect")
      .attr("x", (_, i) => x(String(i)) ?? 0)
      .attr("y", 160)
      .attr("width", x.bandwidth())
      .attr("height", 0)
      .attr("fill", "#27d3ff")
      .transition()
      .duration(600)
      .attr("y", (d) => y(d))
      .attr("height", (d) => 160 - y(d));
  }, []);

  return (
    <div className="rounded-2xl border border-border/70 p-3">
      <svg ref={ref} width="320" height="170" className="mx-auto" />
    </div>
  );
}
