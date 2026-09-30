// Runs after `vite build`.
// 1. Writes a copy of the app for each page (about/, licensing/, articles/<slug>/) with that
//    page's title, description and social card in <head>. Link previews on LinkedIn, X, Slack
//    and others read only the HTML, not the running app, so each page needs its own.
// 2. Copies the app shell to 404.html, so any other deep link still loads the app.
// 3. Writes sitemap.xml.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const launch = readFileSync('src/launch.js', 'utf8');
const SITE_URL = (launch.match(/SITE_URL = '([^']+)'/) || [])[1].replace(/\/$/, '');
const shell = readFileSync(join(DIST, 'index.html'), 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Article front matter: one `key: value` per line, values written as JSON.
function frontmatter(file) {
  const src = readFileSync(file, 'utf8');
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.+?)\s*(#.*)?$/);
    if (!kv) continue;
    try { out[kv[1]] = JSON.parse(kv[2]); } catch { out[kv[1]] = kv[2]; }
  }
  return out;
}
const posts = readdirSync('../posts').filter((f) => f.endsWith('.mdx')).map((f) => frontmatter(join('../posts', f))).filter((p) => p.slug);

const card = (name) => SITE_URL + '/og/' + (existsSync(join('public/og', name + '.png')) ? name : 'default') + '.png';
const isDate = (d) => /^\d{4}-\d{2}-\d{2}$/.test(d || '');

function head({ path, title, description, image, type = 'website', published }) {
  const url = SITE_URL + path;
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    `<link rel="canonical" href="${esc(url)}">`,
    `<meta property="og:site_name" content="Dev Log · Dev Suite">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:image" content="${esc(image)}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta name="author" content="Tyler Crawford">`,
    type === 'article' ? `<meta property="article:author" content="Tyler Crawford">` : '',
    type === 'article' && isDate(published) ? `<meta property="article:published_time" content="${published}">` : '',
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${esc(image)}">`,
  ].filter(Boolean).join('\n  ');
}

const BLOCK = /<!-- page meta:[\s\S]*?<!-- \/page meta -->/;
if (!BLOCK.test(shell)) throw new Error('postbuild: page meta block missing from index.html');
const page = (meta) => shell.replace(BLOCK, head(meta));

const pages = [
  { path: '/', title: 'Dev Log · Dev Suite', description: 'Notes from building Dev Suite, a governance harness for AI coding agents: agents in sandboxes, plans attacked before code, and nothing merged on an agent\'s word.', image: card('default') },
  { path: '/about/', title: 'About · Dev Log', description: 'Productive AI agents, held accountable from the plan to the merge. Who builds Dev Suite, where it stands, and how to get in touch.', image: card('default') },
  { path: '/licensing/', title: 'Licensing & privacy · Dev Log', description: 'How the writing on this log may be shared, what stays with nTEG, LLC, and exactly what the email forms collect.', image: card('default') },
  ...posts.map((p) => ({ path: '/articles/' + p.slug + '/', title: p.title + ' · Dev Log', description: p.standfirst || p.title, image: card(p.slug), type: 'article', published: p.date })),
];

for (const meta of pages) {
  const dir = join(DIST, meta.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), page(meta));
}
writeFileSync(join(DIST, '404.html'), page({ ...pages[0], path: '/' }));

const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(DIST, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages.map((p) => `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${isDate(p.published) ? p.published : today}</lastmod></url>`).join('\n') + '\n</urlset>\n');

console.log('postbuild: wrote ' + pages.length + ' pages with link previews, 404.html and sitemap.xml');

// Warn (but don't fail) while the forms still point nowhere.
const blank = [];
if (/waitlist:\s*''/.test(launch)) blank.push('KIT_FORMS.waitlist');
if (/articles:\s*''/.test(launch)) blank.push('KIT_FORMS.articles');
if (/FORMSPREE_ID = ''/.test(launch)) blank.push('FORMSPREE_ID');
if (blank.length) console.warn('postbuild: WARNING, not set in src/launch.js: ' + blank.join(', ') + '. Those forms will show an error on the live site.');
const undated = posts.filter((p) => !isDate(p.date)).map((p) => p.slug);
if (undated.length) console.warn('postbuild: WARNING, no publish date yet: ' + undated.join(', '));
