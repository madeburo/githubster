import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fetchRepositoryStars, parseStarCount } from "../src/lib/repository-stars.ts";

const path = ".generated/repository-stars.json";
const fresh = await fetchRepositoryStars();
let stars = fresh;
if (stars === null) {
  try {
    stars = parseStarCount(JSON.parse(await readFile(path, "utf8")).stars);
  } catch {
    // A fresh checkout can build without GitHub being available.
  }
}
await mkdir(".generated", { recursive: true });
await writeFile(path, JSON.stringify({ stars }) + "\n");
console.log("Prepared build-time repository star snapshot:", stars ?? "unavailable");
