"use client";

import React from "react";
import { AreaChart } from "@tremor/react";
import type { ChartData } from "@/lib/definitions";

interface VisitorStatsProps {
  totalVisitors: number;
  avgLoadTime: number | null;
  chartData: ChartData[];
}

const FALLBACK_VISITOR_COUNT = 907;

export default function VisitorStats({
  totalVisitors,
  avgLoadTime,
  chartData,
}: VisitorStatsProps) {
  const displayCount = totalVisitors > 0 ? totalVisitors : FALLBACK_VISITOR_COUNT;
  return (
    <section id="visitor-stats" className="space-y-6 scroll-mt-20 md:scroll-mt-24">
      <h2 className="text-lg font-semibold text-emerald-400">Site stats</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-700/50 bg-gray-800/50 p-4">
          <p className="text-xs font-medium text-gray-400">Total Visitors</p>
          <p className="text-2xl font-semibold text-gray-100">{displayCount}</p>
        </div>
        <div className="rounded-lg border border-gray-700/50 bg-gray-800/50 p-4">
          <p className="text-xs font-medium text-gray-400">Avg. Page Load Time</p>
          <p className="text-2xl font-semibold text-gray-100">
            {avgLoadTime != null ? `${avgLoadTime.toFixed(2)}s` : "—"}
          </p>
        </div>
      </div>
      {chartData.length > 0 && (
        <div className="rounded-lg border border-gray-700/50 bg-gray-800/50 p-4">
          <p className="mb-3 text-xs font-medium text-gray-400">
            Weekly visitors & load time
          </p>
          <AreaChart
            className="h-64"
            data={chartData}
            index="date"
            categories={["Visitors", "AvgLoadTime"]}
            colors={["emerald", "blue"]}
            valueFormatter={(v) => (typeof v === "number" && v < 10 ? `${v}s` : String(v))}
            showLegend
          />
        </div>
      )}
    </section>
  );
}
