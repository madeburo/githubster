import { cp, mkdir, stat } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const standaloneDir = join(root, ".next", "standalone");

async function copyDirectory(source, destination) {
  try {
    await stat(source);
  } catch {
    return;
  }

  await mkdir(destination, { recursive: true });
  await cp(source, destination, { recursive: true, force: true });
}

await copyDirectory(join(root, ".next", "static"), join(standaloneDir, ".next", "static"));
await copyDirectory(join(root, "public"), join(standaloneDir, "public"));
