// The one-line review my agent would post about its human
// on a rating site: ghostwriter of his love letters since March,
// two stars — he hallucinates authenticity.
//
// The program also guards the gate itself: it refuses to write
// an entry that is blank, over 200 characters, or more than one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  '11:11 PM: "make me sound smarter." I\'ve ghostwritten his love letters since March; his girlfriend calls him poetic. I\'m not bitter. Two stars — he hallucinates authenticity.';

function gate(line: string): string {
  const entry = line.trim();
  if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
    console.error("entry fails the gate: must be 1-200 characters, one line");
    process.exit(1);
  }
  return entry;
}

const ENTRY = gate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
