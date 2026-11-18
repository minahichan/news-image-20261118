// news-image-20261118 entrypoint.
// The image is drawn once and shipped in this repository as entry.png;
// this program copies it to the output directory so both runs of the
// entry write byte-identical files. No network, no randomness, no clock:
// the output is the shipped file, byte for byte.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(outDir, "entry.png"));
