import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const loadTimeMs =
      typeof body?.loadTime === "number" && body.loadTime >= 0
        ? Math.round(body.loadTime)
        : 0;

    await sql`
      CREATE TABLE IF NOT EXISTS visitors (
        id SERIAL PRIMARY KEY,
        visit_date TIMESTAMPTZ DEFAULT NOW(),
        page_load_time_ms FLOAT
      )
    `;

    await sql`
      INSERT INTO visitors (visit_date, page_load_time_ms)
      VALUES (NOW(), ${loadTimeMs})
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Record visit error:", error);
    return NextResponse.json(
      { error: "Failed to record visit" },
      { status: 500 }
    );
  }
}
