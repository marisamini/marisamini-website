import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!sql) {
    return NextResponse.json({ ok: true });
  }
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS weeklysummary (
        id SERIAL PRIMARY KEY,
        week_start DATE NOT NULL,
        week_end DATE NOT NULL,
        visitor_count INT NOT NULL,
        avg_load_time_ms FLOAT
      )
    `;

    await sql`
      DELETE FROM weeklysummary
    `;

    await sql`
      INSERT INTO weeklysummary (week_start, week_end, visitor_count, avg_load_time_ms)
      SELECT
        (DATE_TRUNC('week', visit_date) AT TIME ZONE 'UTC')::DATE AS week_start,
        ((DATE_TRUNC('week', visit_date) AT TIME ZONE 'UTC')::DATE + 6) AS week_end,
        COUNT(*)::INT AS visitor_count,
        AVG(page_load_time_ms)::FLOAT AS avg_load_time_ms
      FROM visitors
      GROUP BY DATE_TRUNC('week', visit_date)
      ORDER BY week_start DESC
      LIMIT 52
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Calculate weekly summary error:", error);
    return NextResponse.json(
      { error: "Failed to calculate weekly summary" },
      { status: 500 }
    );
  }
}
