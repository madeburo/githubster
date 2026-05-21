import { NextResponse } from "next/server";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const SITE_URL = "https://www.githubster.com";

const URLS_TO_INDEX = [
  SITE_URL,
];

export async function GET() {
  if (!INDEXNOW_KEY) {
    return NextResponse.json(
      { success: false, message: "INDEXNOW_KEY is not configured" },
      { status: 500 }
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

    const text = await response.text();
    return NextResponse.json(
      {
        success: false,
        status: response.status,
        message: `IndexNow API error: ${text}`,
      },
      { status: response.status }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
