import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const manifest = JSON.parse(await readFile(".generated/edge-routes.json", "utf8"));
assert.equal(manifest.buildId, (await readFile(".next/BUILD_ID", "utf8")).trim(), "Rebuild with npm run cf:build: request guard is stale");
const prerender = JSON.parse(await readFile(".next/prerender-manifest.json", "utf8"));
assert.deepEqual(manifest.documents, Object.keys(prerender.routes).filter((path) => !path.startsWith("/_")), "Request guard does not match the current prerendered routes");
const routes = JSON.parse(await readFile(".next/routes-manifest.json", "utf8"));
assert.deepEqual(manifest.handlers, routes.staticRoutes.map(({ page }) => page).filter((path) => !path.startsWith("/_")), "Request guard is missing exact server routes");
assert(manifest.notFound.en && manifest.notFound.ar && manifest.notFound.ru, "404 translations are incomplete");
console.log("Verified early request guard matches the current build.");
