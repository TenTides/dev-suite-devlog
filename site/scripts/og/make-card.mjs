// Makes the 1200x630 link-preview card for one article: public/og/<slug>.png.
// Optional: any page without its own card uses public/og/default.png.
//
//   cd site
//   npm install --no-save playwright      (once; --no-save keeps it out of package.json)
//   npx playwright install chromium       (once)
//   node scripts/og/make-card.mjs <slug>
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const here = dirname(fileURLToPath(import.meta.url));
const slug = process.argv[2];
if (!slug) { console.error('usage: node scripts/og/make-card.mjs <article-slug>'); process.exit(1); }

const postsDir = join(here, '../../../posts');
const file = readdirSync(postsDir).find((f) => f.endsWith('.mdx') && readFileSync(join(postsDir, f), 'utf8').includes('slug: "' + slug + '"'));
if (!file) { console.error('no post with slug ' + slug); process.exit(1); }
const fm = {};
for (const line of readFileSync(join(postsDir, file), 'utf8').split('---')[1].split('\n')) {
  const kv = line.match(/^(\w+):\s*(.+?)\s*$/);
  if (kv) { try { fm[kv[1]] = JSON.parse(kv[2]); } catch { /* not a plain value */ } }
}

// Longer titles get a smaller size so they stay on two or three lines.
const size = fm.title.length > 48 ? 70 : fm.title.length > 32 ? 78 : 84;
const q = new URLSearchParams({
  eye: 'ARTICLE ' + fm.number + ' · ' + (fm.kicker || ''),
  title: fm.title, size: String(size),
  m1: 'TYLER CRAWFORD · ' + (fm.readTime || ''), m2: 'DEV SUITE · DEV LOG',
  seed: String(parseInt(fm.number, 10) + 1 || 1),
});

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(pathToFileURL(join(here, 'card.html')).href + '?' + q);
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
const out = join(here, '../../public/og', slug + '.png');
await page.screenshot({ path: out });
await browser.close();
console.log('wrote ' + out);
