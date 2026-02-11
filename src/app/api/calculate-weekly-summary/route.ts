import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder for weekly summary cron. Add Vercel Postgres logic here if you use it.
  return NextResponse.json({ ok: true });
}
