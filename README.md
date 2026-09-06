# Dev-Suite dev-log

Dated, append-only entries on what shipped, what broke, and what we learned while building
Dev-Suite, a multi-workspace harness for governed fan-outs of sandboxed AI coding agents.

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
posts/YYYY-MM-DD-slug.md   one entry, frontmatter + four sections
site/                      the React site that renders posts/ (Vite, deployed to Pages)
.github/workflows/         pages deploy + the two guards
```

Entry frontmatter and sections:

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

The site is being set up; the first entries land with it.
