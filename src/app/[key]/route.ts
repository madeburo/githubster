import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  const { key } = await params;
  const indexNowKey = process.env.INDEXNOW_KEY;

  // Only respond if the requested file matches {INDEXNOW_KEY}.txt pattern
  if (!indexNowKey || key !== `${indexNowKey}.txt`) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return new Response(indexNowKey, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
