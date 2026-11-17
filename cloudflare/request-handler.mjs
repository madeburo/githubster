import { isBackupPath } from "./backup-policy.mjs";

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function notFoundDocument(locale, copy) {
  const home = locale === "en" ? "/" : `/${locale}`;
  return `<!doctype html><html lang="${locale}" dir="${["ar", "he"].includes(locale) ? "rtl" : "ltr"}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>404 · Githubster</title><style>:root{color-scheme:light dark;font:16px system-ui,sans-serif}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f5f6f8;color:#20242b}main{max-width:32rem;padding:2rem;text-align:center}strong{font-size:1.25rem}h1{font-size:5rem;margin:1.5rem 0 .5rem}p{line-height:1.6}a{display:inline-block;margin-top:1rem;padding:.8rem 1.2rem;border-radius:.7rem;background:#2160d5;color:white;text-decoration:none}@media(prefers-color-scheme:dark){body{background:#161b22;color:#e6edf3}}</style></head><body><main><strong>Githubster</strong><h1>404</h1><h2>${escapeHtml(copy.title)}</h2><p>${escapeHtml(copy.description)}</p><a href="${home}">${escapeHtml(copy.button)}</a></main></body></html>`;
}

/** Unknown paths must return before importing the Next.js/OpenNext server. */
export function createRequestHandler({ manifest, loadNext }) {
  const documents = new Set(manifest.documents);
  const handlers = new Set(manifest.handlers);
  const assets = new Set(manifest.assets);
  const notFoundPages = new Map(Object.entries(manifest.notFound).map(([locale, copy]) => [locale, notFoundDocument(locale, copy)]));
  let nextModule;

  return async function fetch(request, env, ctx) {
    const url = new URL(request.url);
    let pathname;
    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      return new Response(request.method === "HEAD" ? null : "Bad request", { status: 400 });
    }

    // Also protects workers.dev and encoded paths if they bypass the zone WAF.
    if (isBackupPath(pathname)) {
      return new Response(request.method === "HEAD" ? null : "Forbidden", {
        status: 403,
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", "X-Githubster-Handler": "edge-guard" },
      });
    }

    if (url.hostname === "githubster.com" || (url.hostname === "www.githubster.com" && url.protocol === "http:")) {
      url.hostname = "www.githubster.com";
      url.protocol = "https:";
      url.port = "";
      return Response.redirect(url.href, 301);
    }
    if (pathname === "/jp" || pathname.startsWith("/jp/")) {
      url.pathname = pathname.replace(/^\/jp(?=\/|$)/, "/ja");
      return Response.redirect(url.href, 308);
    }

    const path = pathname.replace(/\/+$/, "") || "/";
    const documentPath = path.endsWith(".rsc") ? path.slice(0, -4) : path;
    const indexNowKey = env.INDEXNOW_KEY ?? manifest.indexNowKey;
    const isIndexNowKey = indexNowKey && path === `/${indexNowKey}.txt`;
    const isImage = path === "/_next/image";
    if (documents.has(documentPath) || handlers.has(path) || assets.has(path) || isIndexNowKey || isImage) {
      nextModule ??= loadNext();
      const next = await nextModule;
      return next.default.fetch(request, env, ctx);
    }

    const prefix = pathname.split("/")[1];
    const locale = notFoundPages.has(prefix) ? prefix : "en";
    return new Response(request.method === "HEAD" ? null : notFoundPages.get(locale), {
      status: 404,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Language": locale,
        "Cache-Control": ["GET", "HEAD"].includes(request.method) ? "public, max-age=60" : "no-store",
        "X-Robots-Tag": "noindex",
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'",
        "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "X-Githubster-Handler": "static-404",
      },
    });
  };
}
