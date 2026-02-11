import { sql } from "@vercel/postgres";
import {
  unstable_noStore as noStore,
  unstable_cache as cache,
} from "next/cache";
import type { WeeklySummary } from "@/lib/definitions";
import { processWeeklySummary } from "@/utils/index";

export async function fetchWeeklySummary() {
  noStore();
  const fetcher = async () => {
    try {
      const data = await sql`
        SELECT week_start, week_end, visitor_count, avg_load_time_ms
        FROM weeklysummary
        ORDER BY week_start DESC
        LIMIT 30
      `;
      return processWeeklySummary(data.rows as WeeklySummary[]);
    } catch {
      return [];
    }
  };
  const cachedFetcher = cache(fetcher, ["weeklysummary"], { revalidate: 1 });
  return cachedFetcher();
}

export async function fetchSiteData(): Promise<{
  totalVisitors: number;
  avgLoadTime: number | null;
}> {
  noStore();
  const fetcher = async () => {
    try {
      const data = await sql<{ count: number; avg: number | null }>`
        SELECT COUNT(*)::int as count, AVG(page_load_time_ms)::float as avg
        FROM visitors
      `;
      const row = data.rows[0];
      return {
        totalVisitors: row?.count ?? 0,
        avgLoadTime: row?.avg ?? null,
      };
    } catch {
      return { totalVisitors: 0, avgLoadTime: null };
    }
  };
  const cachedFetcher = cache(fetcher, ["totalVisitorsAndAvgLoadTime"], {
    revalidate: 60,
  });
  return cachedFetcher();
}
