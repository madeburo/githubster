import { NextResponse } from "next/server";

// Read the deployed Worker binding, never a prerendered build-time value.
export const dynamic = "force-dynamic";

export function GET() {
  const indexNowKey = process.env.INDEXNOW_KEY;
  if (!indexNowKey) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return new Response(indexNowKey, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
