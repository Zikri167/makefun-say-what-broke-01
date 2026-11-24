import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The disk is full: ten years of logs nobody reads, never rotated, ate every byte. Delete the oldest ones, then automate rotation — or this error is your homepage.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (/[\n\r]/.test(LINE)) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
