import { createHash, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const INDEXNOW_SECRET = process.env.INDEXNOW_SECRET;
const SITE_URL = "https://www.githubster.com";

const URLS_TO_INDEX = [
  SITE_URL,
];

function hasValidBearerToken(request: NextRequest, expectedToken: string): boolean {
  const authorization = request.headers.get("authorization");
  const match = authorization?.match(/^Bearer\s+(.+)$/i);
  if (!match) return false;

  const provided = createHash("sha256").update(match[1]).digest();
  const expected = createHash("sha256").update(expectedToken).digest();
  return timingSafeEqual(provided, expected);
}

export async function POST(request: NextRequest) {
  if (!INDEXNOW_KEY || !INDEXNOW_SECRET || INDEXNOW_SECRET.length < 32) {
    return NextResponse.json(
      { success: false, message: "IndexNow is not configured" },
      { status: 503 }
    );
  }

  if (!hasValidBearerToken(request, INDEXNOW_SECRET)) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      {
        status: 401,
        headers: { "WWW-Authenticate": "Bearer" },
      }
    );
  }

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: "www.githubster.com",
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: URLS_TO_INDEX,
      }),
    });

    if (response.ok || response.status === 202) {
      return NextResponse.json({
        success: true,
        status: response.status,
        message: "URLs submitted to IndexNow successfully",
        urls: URLS_TO_INDEX,
      });
    }

    const details = await response.text();
    console.error("IndexNow submission failed", response.status, details.slice(0, 500));
    return NextResponse.json(
      {
        success: false,
        message: "IndexNow submission failed",
        upstreamStatus: response.status,
      },
      { status: 502 }
    );
  } catch (error) {
    console.error("IndexNow request failed", error);
    return NextResponse.json(
      {
        success: false,
        message: "IndexNow request failed",
      },
      { status: 502 }
    );
  }
}
