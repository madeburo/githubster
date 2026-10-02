import { NextResponse } from "next/server";

// Prerendered and refreshed hourly: one GitHub request per hour for all visitors combined.
export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  let stars: number | null = null;

  try {
    const response = await fetch("https://api.github.com/repos/madeburo/githubster", {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (response.ok) {
      const repo = await response.json();
      if (typeof repo.stargazers_count === "number") {
        stars = repo.stargazers_count;
      }
    }
  } catch {
    // The button simply renders without a count.
  }

  return NextResponse.json({ stars });
}
