import {
  unstable_noStore as noStore,
  unstable_cache as cache,
} from "next/cache";
import type { WeeklySummary } from "@/lib/definitions";
import { processWeeklySummary } from "@/utils/index";
import { sql } from "@/lib/db";

export async function fetchWeeklySummary() {
  noStore();
  const fetcher = async () => {
    if (!sql) return [];
    try {
      const rows = (await sql`
        SELECT week_start, week_end, visitor_count, avg_load_time_ms
        FROM weeklysummary
        ORDER BY week_start DESC
        LIMIT 30
      `) as WeeklySummary[];
      return processWeeklySummary(rows);
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
    if (!sql) {
      const legacy = process.env.LEGACY_VISITOR_COUNT;
      const totalVisitors =
        legacy && /^\d+$/.test(legacy) ? parseInt(legacy, 10) : 907;
      return { totalVisitors, avgLoadTime: null };
    }
    try {
      const rows = (await sql`
        SELECT COUNT(*)::int as count, AVG(page_load_time_ms)::float as avg
        FROM visitors
      `) as { count: number; avg: number | null }[];
      const row = rows[0];
      return {
        totalVisitors: row?.count ?? 0,
        avgLoadTime: row?.avg ?? null,
      };
    } catch {
      const legacy = process.env.LEGACY_VISITOR_COUNT;
      const totalVisitors =
        legacy && /^\d+$/.test(legacy) ? parseInt(legacy, 10) : 907;
      return { totalVisitors, avgLoadTime: null };
    }
  };
  const cachedFetcher = cache(fetcher, ["totalVisitorsAndAvgLoadTime"], {
    revalidate: 60,
  });
  const result = await cachedFetcher();
  const legacy = process.env.LEGACY_VISITOR_COUNT;
  const legacyCount =
    legacy && /^\d+$/.test(legacy) ? parseInt(legacy, 10) : 907;
  result.totalVisitors = result.totalVisitors + legacyCount;
  return result;
}
