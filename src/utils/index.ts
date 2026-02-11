import type { ChartData } from "@/lib/definitions";
import type { WeeklySummary } from "@/lib/definitions";

export function processWeeklySummary(data: WeeklySummary[]): ChartData[] {
  return data
    .map((week) => ({
      date: new Date(week.week_start).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      Visitors: week.visitor_count,
      AvgLoadTime: formatLoadTime(week.avg_load_time_ms),
    }))
    .reverse();
}

export function formatLoadTime(milliseconds: number): number {
  return parseFloat((milliseconds / 1000).toFixed(2));
}
