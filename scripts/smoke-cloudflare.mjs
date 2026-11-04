import assert from "node:assert/strict";
import { locales } from "../src/lib/i18n.ts";
import { guidePages, toolPages } from "../src/lib/seo-content.ts";

const origin = new URL(process.argv[2] || "https://www.githubster.com").origin;
let checks = 0;

async function request(path, expectedStatus = 200, init = {}) {
  const response = await fetch(new URL(path, origin), {
    redirect: "manual",
    signal: AbortSignal.timeout(30000),
    ...init,
  });
  assert.equal(response.status, expectedStatus, `${path}: unexpected HTTP status`);
  checks++;
  return response;
}

const home = await request("/");
const html = await home.text();
assert.match(html, /Githubster Explorer/);
assert.match(home.headers.get("content-security-policy") || "", /api\.github\.com/);
assert.equal(home.headers.get("x-content-type-options"), "nosniff");

const assets = [...new Set([...html.matchAll(/(?:src|href)="([^"<>]*\/_next\/static\/[^"<>]+)"/g)]
  .map((match) => match[1].replaceAll("&amp;", "&")))];
assert(assets.some((path) => path.includes(".css")), "No stylesheet links in HTML");
assert(assets.some((path) => path.includes(".js")), "No JavaScript links in HTML");
for (const path of assets) {
  const asset = await request(path);
  assert.match(asset.headers.get("cache-control") || "", /immutable/);
  if (path.includes(".css")) assert.match(asset.headers.get("content-type") || "", /text\/css/);
  if (path.includes(".js")) assert.match(asset.headers.get("content-type") || "", /javascript/);
  await asset.body?.cancel();
}

const sitemap = await (await request("/sitemap.xml")).text();
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
const documentPaths = ["", "/tools", ...toolPages.map(({ slug }) => `/tools/${slug}`), "/guides", ...guidePages.map(({ slug }) => `/guides/${slug}`), "/privacy"];
const expectedPaths = documentPaths.flatMap((path) => locales.map((locale) => `${locale === "en" ? "" : `/${locale}`}${path}` || "/"));
assert.equal(pages.length, expectedPaths.length, "Wrong number of sitemap entries");
assert.deepEqual(new Set(pages), new Set(expectedPaths), "Sitemap is missing or duplicating document routes");
const languages = new Set(locales);

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1].toLowerCase(), match[2].replaceAll("&amp;", "&")]));
}

function canonical(page) {
  const links = [...page.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag));
  return links.find((link) => link.rel === "canonical")?.href;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" })[character]);
}

let cursor = 0;
await Promise.all(Array.from({ length: 6 }, async () => {
  while (cursor < pages.length) {
    const path = pages[cursor++];
    const page = await (await request(path)).text();
    const first = path.split("/")[1];
    const locale = languages.has(first) ? first : "en";
    const route = locale === "en" ? path : path.slice(locale.length + 1) || "/";
    assert.match(page, new RegExp(`<html[^>]+lang="${locale}"`), `${path}: wrong language`);
    assert.equal(new URL(canonical(page)).href, new URL(`https://www.githubster.com${path}`).href, `${path}: wrong canonical`);
    assert.equal([...page.matchAll(/<h1(?:\s|>)/g)].length, 1, `${path}: expected one H1`);

    const links = [...page.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag));
    const alternates = new Map(links.filter((link) => link.hreflang).map((link) => [link.hreflang, link.href]));
    assert.deepEqual([...alternates.keys()].sort(), [...locales, "x-default"].sort(), `${path}: incomplete hreflang`);
    for (const language of [...locales, "x-default"]) {
      const prefix = language === "en" || language === "x-default" ? "" : `/${language}`;
      const expected = `https://www.githubster.com${prefix}${route === "/" ? "" : route}`;
      assert.equal(new URL(alternates.get(language)).href, new URL(expected).href, `${path}: wrong ${language} alternate`);
    }

    const meta = [...page.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
    assert.match(meta.find((tag) => tag.property === "og:locale")?.content || "", new RegExp(`^${locale}_[A-Z]{2}$`), `${path}: wrong Open Graph locale`);
    assert.equal(meta.filter((tag) => tag.property === "og:locale:alternate").length, locales.length - 1, `${path}: incomplete Open Graph alternates`);
    assert.equal(new URL(meta.find((tag) => tag.property === "og:url").content).href, new URL(canonical(page)).href, `${path}: Open Graph URL differs from canonical`);

    const documents = [...page.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
    const nodes = documents.flatMap((document) => document["@graph"] || [document]);
    const app = nodes.find((node) => node["@type"] === "WebApplication");
    assert.deepEqual(new Set(app.inLanguage), languages, `${path}: application languages incomplete`);
    const visible = page.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
    for (const node of nodes.filter((node) => node["@type"] === "FAQPage")) {
      assert.equal(node.inLanguage, locale, `${path}: wrong FAQ language`);
      assert(node.mainEntity.length > 0, `${path}: empty FAQPage`);
      for (const question of node.mainEntity) {
        assert(visible.includes(escapeHtml(question.name)), `${path}: schema question is not visible`);
        assert(visible.includes(escapeHtml(question.acceptedAnswer.text)), `${path}: schema answer is not visible`);
      }
    }
    if (route.startsWith("/guides/")) {
      assert(nodes.some((node) => node["@type"] === "TechArticle" && node.inLanguage === locale), `${path}: missing localized article schema`);
    }
    if ((locale === "ru" || locale === "id") && (route.startsWith("/guides/") || route.startsWith("/tools/"))) {
      assert([...visible.matchAll(/<p\b/g)].length >= 7, `${path}: incomplete localized article`);
      assert(visible.includes("https://docs.github.com/"), `${path}: missing official references`);
    }
  }
}));

const llmsResponse = await request("/llms.txt");
assert.match(llmsResponse.headers.get("content-type") || "", /text\/plain/);
const llms = await llmsResponse.text();
assert(llms.includes(`Available in ${locales.length} languages`), "AI summary has stale language count");
for (const locale of ["ru", "id"]) {
  assert(llms.includes(`https://www.githubster.com/${locale}`), `AI summary is missing ${locale}`);
  const queryPage = await (await request(`/${locale}?user=madeburo`)).text();
  assert.equal(canonical(queryPage), `https://www.githubster.com/${locale}`, "Profile query must not create a second canonical page");
}

for (const path of ["/backgrounds/githubster-light-desk.avif", "/backgrounds/githubster-dark-desk.avif", "/manifest.json", "/sw.js", "/.well-known/security.txt"]) {
  await (await request(path)).body?.cancel();
}
assert.match(await (await request("/robots.txt")).text(), /https:\/\/www\.githubster\.com\/sitemap.xml/);
const starsResponse = await request("/api/stars");
assert(["HIT", "MISS"].includes(starsResponse.headers.get("x-githubster-stars-cache")), "Missing edge-cache diagnostic");
const stars = await starsResponse.json();
assert.equal(typeof stars.stars, "number", "Star count was not loaded");

const warmStars = await request("/api/stars");
assert.equal(warmStars.headers.get("x-githubster-stars-cache"), "HIT", "Warm stars request must use the edge cache");
assert.deepEqual(await warmStars.json(), stars);

const alias = await request("/jp/tools/github-followers-checker?user=madeburo", 308);
assert.equal(new URL(alias.headers.get("location"), origin).pathname, "/ja/tools/github-followers-checker");
assert.equal(new URL(alias.headers.get("location"), origin).search, "?user=madeburo");
await request("/api/indexnow", 405);
await request("/api/indexnow", 401, { method: "POST" });
await request("/api/indexnow", 401, { method: "POST", headers: { Authorization: "Bearer invalid" } });
await request("/this-page-does-not-exist", 404);
await request("/ar/this-page-does-not-exist", 404);

if (process.env.INDEXNOW_KEY) {
  assert.equal(await (await request(`/${process.env.INDEXNOW_KEY}.txt`)).text(), process.env.INDEXNOW_KEY);
}

if (origin === "https://www.githubster.com") {
  for (const source of ["http://www.githubster.com", "https://githubster.com"]) {
    const redirect = await request(`${source}/ar?user=madeburo`, 301);
    assert.equal(redirect.headers.get("location"), "https://www.githubster.com/ar?user=madeburo");
  }
}

console.log(JSON.stringify({ origin, checks, pages: pages.length, languages: locales.length, assets: assets.length, stars: stars.stars, result: "passed" }));
