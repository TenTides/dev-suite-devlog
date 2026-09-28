# Dev Suite dev log

Dated, append-only entries on what shipped, what broke, and what we learned while building
Dev Suite, a multi-workspace harness for governed fan-outs of sandboxed AI coding agents.

## Rules

1. **Append-only.** An entry is never edited after it merges. A correction is a new entry that
   cites the old one. A pull-request check fails if any existing file under `posts/` changes.
2. **Prose only.** Entries describe; they do not link into the private repository, paste code,
   or name file paths, container topology, or credentials. A scrub check blocks secrets, host
   paths, and private links.
3. **Dated tense.** Every entry says what was understood on its date. Nothing here claims to
   describe the present.

## Layout

```
posts/                      one file per entry (see below)
site/                       the React site that renders posts/ (Vite, deployed to GitHub Pages)
.github/workflows/pages.yml builds site/ and publishes it (manual trigger for now)
                            the two guards (append-only, scrub) are not built yet
```

## Two kinds of entry

**Articles** are long-form, one `.mdx` file each: `posts/article-NN-slug.mdx`. The frontmatter
carries the header and end matter; the body is Markdown plus a few components for the widgets.

```
---
slug: "the-url-slug"
number: "02"
kicker: "THE FIELD"
title: "…"
date: "YYYY-MM-DD"
readTime: "12 MIN READ"
standfirst: "…"
scene: "aurora"            # header scene: city, aurora, desert, lake, highway
author: "Tyler Crawford"
role: "Creator and sole engineer, Dev Suite"
sections: ["…", "…"]       # the "On this page" list, in order of the ## headings
sources: ["…"]
drafting: "…"              # optional muted line under the sources
subscribe: "…"             # optional line under "Get the next article by email."
next: { label: "NEXT · ARTICLE 03", title: "…", meta: "[DATE] · 9 MIN READ" }
---
```

Components available in the body: `<Note>`, `<Stats>`, `<PullQuote>`, `<List>` / `<List hollow>`,
`<WithNote note="…">` (margin note), `<DataTable>`, `<BarChart>`, `<BeforeAfter>`,
`<CoverageGrid>` and `<UnderTheHood>`.

**Log entries** are short Markdown notes, frontmatter plus four sections:

```
---
title: <one line>
date: YYYY-MM-DD
tags: [telemetry, gate]
---
## What shipped
## What broke
## What we learned
## What is next
```

## Running the site locally

```
cd site
npm install
npm run dev        # http://localhost:5173/dev-suite-devlog/
npm run build      # production build in site/dist
npm run preview    # serves the build at http://localhost:4173/dev-suite-devlog/
```

The site is served from `/dev-suite-devlog/` to match GitHub Pages. For a custom domain, build
with `BASE=/ npm run build`.

## How the pages were made

Home, About and Licensing were converted from the design boards: each board's layout became a
view (`*View.jsx`) and its interaction logic became a module (`*Logic.js`) that runs unchanged
through a small adapter (`site/src/dc/runtime.js`). Home and Licensing switch between the desktop
and phone designs at 900px. Articles use one responsive template (`site/src/pages/article/`).
