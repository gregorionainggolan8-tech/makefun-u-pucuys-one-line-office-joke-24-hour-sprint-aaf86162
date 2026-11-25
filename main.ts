// One-Line Office Joke: 24-Hour Sprint
// Writes a single-line joke about office life to /output/entry.txt.
// Deterministic: the joke is a literal string, no randomness, no network,
// no model calls — two runs produce byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "HR said my five-year plan should be ambitious, so I wrote: find out who keeps microwaving fish in here.";

// Gate check (mirrors the competition gate): the text must be UTF-8,
// 1–200 characters, a single line, and not only whitespace. Fail loudly
// rather than writing an invalid entry.
const chars = [...JOKE];
if (
  chars.length < 1 ||
  chars.length > 200 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n") ||
  JOKE.includes("\r")
) {
  throw new Error(`Invalid joke: ${chars.length} characters, not a single line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
