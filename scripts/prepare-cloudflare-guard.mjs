import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import ts from "typescript";

async function importTypescript(path) {
  const { outputText } = ts.transpileModule(await readFile(path, "utf8"), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

const { locales } = await importTypescript("src/lib/i18n.ts");
const notFound = {};
for (const locale of locales) {
  const translation = await importTypescript(`src/lib/translations/${locale}.ts`);
  notFound[locale] = translation[locale].notFound;
  if (!["title", "description", "button"].every((key) => typeof notFound[locale]?.[key] === "string")) {
    throw new Error(`Missing 404 translation for ${locale}`);
  }
}
const prerender = JSON.parse(await readFile(".next/prerender-manifest.json", "utf8"));
const routes = JSON.parse(await readFile(".next/routes-manifest.json", "utf8"));
const assets = [];
async function collectAssets(directory, prefix = "") {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    if (!prefix && item.name === "cdn-cgi") continue; // Internal OpenNext cache.
    const path = `${prefix}/${item.name}`;
    if (item.isDirectory()) await collectAssets(join(directory, item.name), path);
    else assets.push(path);
  }
}
await collectAssets(".open-next/assets");
const manifest = {
  buildId: (await readFile(".next/BUILD_ID", "utf8")).trim(),
  // IndexNow verification keys are public; never include INDEXNOW_SECRET.
  indexNowKey: process.env.INDEXNOW_KEY ?? null,
  documents: Object.keys(prerender.routes).filter((path) => !path.startsWith("/_")),
  assets,
  handlers: routes.staticRoutes.map(({ page }) => page).filter((path) => !path.startsWith("/_")),
  notFound,
};
await mkdir(".generated", { recursive: true });
await writeFile(".generated/edge-routes.json", JSON.stringify(manifest));
console.log(`Prepared early request guard: ${manifest.documents.length} documents, ${assets.length} assets, ${locales.length} 404 languages.`);
