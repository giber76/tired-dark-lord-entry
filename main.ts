// "The Tired Dark Lord" — a 100-word villain monologue entry (Node 22,
// standard library only). It writes one fixed monologue to
// /output/entry.txt: Malachar, a dark lord who has razed nine realms,
// receives the hero Ser Alden for their dawn duel — and keeps putting
// it off. The tiredness lives in the pauses, the repeated words
// ("Twice. Twice.", "Nine. Nine."), and the small deflections (a sagging
// step, a leaking tower, striking ravens, a boiled kettle), never in a
// plain statement that he is weary. He is still a villain — maps, lists,
// a war council, a scheme — and the last line is the sting: after one
// cup of tea, either of them may kill the other. Whoever gets there
// first. The monologue is the entry; the judge reads exactly the bytes
// written, line ends included, so no trailing line end is added.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const MONOLOGUE = [
  'Come in, Ser Alden. Mind the step — the third one sags. I had it fixed twice. Twice.',
  '',
  'You came for the dawn duel, I know. The banners, the oath, the shining thing. It can wait till Thursday. The east tower leaks, the ravens are on strike — something about the grain — and my war council meets at an hour no soul should keep.',
  '',
  'I am Malachar. I have razed nine realms. Nine. I have the maps, the lists. But your sword is out, the kettle has boiled, and — sit. One cup. Then you may slay me, or I you. Whoever gets there first.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), MONOLOGUE);
