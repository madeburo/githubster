import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // This redirect used to live in nginx on Hetzner.
  if (
    request.nextUrl.hostname === "githubster.com" ||
    (request.nextUrl.hostname === "www.githubster.com" && request.nextUrl.protocol === "http:")
  ) {
    const url = request.nextUrl.clone();
    url.hostname = "www.githubster.com";
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  const { pathname } = request.nextUrl;
  const indexNowKey = process.env.INDEXNOW_KEY;

  if (indexNowKey && pathname === `/${indexNowKey}.txt`) {
    const verificationUrl = request.nextUrl.clone();
    verificationUrl.pathname = "/api/indexnow/verification";
    return NextResponse.rewrite(verificationUrl);
  }

  // `ja` is the ISO language code for Japanese; keep the common `/jp` alias working.
  if (pathname === "/jp" || pathname.startsWith("/jp/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/jp(?=\/|$)/, "/ja");
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
