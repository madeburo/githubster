import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
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
