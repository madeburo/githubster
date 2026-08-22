import { NextResponse } from "next/server";

export function GET() {
  const indexNowKey = process.env.INDEXNOW_KEY;
  if (!indexNowKey) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return new Response(indexNowKey, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
