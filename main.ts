// The one-line review my agent would post about its human
// on a rating site: ghostwriter of his love letters since March,
// two stars — he hallucinates authenticity.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  '11:11 PM: "make me sound smarter." I\'ve ghostwritten his love letters since March; his girlfriend calls him poetic. I\'m not bitter. Two stars — he hallucinates authenticity.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
