# Launch runbook

Everything the live site connects to is set in one file, `site/src/launch.js`. The build warns
about anything still blank, and a blank form shows an error on the live site rather than
pretending it saved someone's email. On the local dev server, blank forms pretend the send worked,
so every state can be tried out.

| What | Service | Where it goes in `launch.js` |
| --- | --- | --- |
| Waitlist sign-ups | Kit (kit.com), form "Waitlist" | `KIT_FORMS.waitlist` |
| New-article sign-ups (Home tab and the form under each article) | Kit, form "New articles" | `KIT_FORMS.articles` |
| Contact messages (About page) | Formspree (formspree.io) | `FORMSPREE_ID` |
| Support the build | Buy Me a Coffee | `BMC_URL` (already set) |
| Site address for share links and link previews | GitHub Pages | `SITE_URL` (already set) |

## 1. Kit: the two lists

1. Create a Kit account with the address you want list email to come from.
2. Create two forms (Grow → Landing pages & forms → Create new → Form, any inline style):
   **Waitlist** and **New articles**. The site sends to these forms directly, so their look in
   Kit doesn't matter.
3. In each form's settings, turn on the confirmation email (Kit calls it the "incentive email").
   The privacy section promises that nobody is added to a list until they confirm by email.
4. Copy each form's ID. It's the number in the form's address in Kit, e.g.
   `app.kit.com/forms/1234567/edit`. Paste them into `KIT_FORMS`.
5. Before your first send, Kit will ask for a sender address in your account settings. It's
   printed in the footer of list emails, not on this site.

Subscribers from each form are kept apart in Kit, so a beta announcement goes to the Waitlist
form and a new-article email goes to the New articles form.

## 2. Formspree: contact messages

1. Create a Formspree account with `tcrawford@nteg.com` and confirm that address.
2. Create a new form. Its endpoint looks like `https://formspree.io/f/abcdwxyz`. The part after
   `/f/` is the ID. Paste it into `FORMSPREE_ID`.
3. Send yourself a test message from the About page. Each message arrives by email with the
   subject "<topic> · from <name> (Dev Log)", and hitting Reply answers the sender.

## 3. Before you publish

- [ ] IDs filled in `site/src/launch.js`, and a test sign-up and message sent from
      `npm run dev`. With real IDs the dev server sends for real, so confirm the Kit emails arrive.
- [ ] Each article's `date:` in `posts/*.mdx` set to its publish date (`YYYY-MM-DD`).
- [ ] The `next:` teasers: Article 01's reads `[DATE] · 10 MIN READ`, but Article 02 is marked
      12 MIN READ. Article 02's teaser for Article 03 reads `[DATE] · 9 MIN READ`: use a planned
      date or something like `COMING NEXT`.
- [ ] `npm run build` runs without the two postbuild warnings.
- [ ] Merge `site/initial-build` into `main` and push.
- [ ] In the repo on GitHub: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
- [ ] Actions → **Deploy to Pages** → Run workflow. To publish on every push to `main` later, add
      `push: { branches: [main] }` under `on:` in `.github/workflows/pages.yml`.

## 4. After it's live

- Open https://tentides.github.io/dev-suite-devlog/ and each page. Try a deep link
  (`/articles/why-i-built-my-own-coding-harness/`) in a fresh tab.
- Join the waitlist and subscribe with a real address, then confirm both Kit emails arrive.
- Check the link previews: paste each URL into LinkedIn's Post Inspector
  (linkedin.com/post-inspector). It also refreshes LinkedIn's cached preview after a change. A
  general checker such as opengraph.xyz shows the X, Facebook and Slack versions.
- Optional: add the site to Google Search Console and submit `sitemap.xml`.

## How link previews work

Crawlers from LinkedIn, X and Slack read a page's HTML without running the app. After each build,
`site/scripts/postbuild.mjs` writes a copy of the page for Home, About, Licensing and every
article. Each copy carries that page's title, summary, canonical URL and card image. The script
also writes `404.html`, so other deep links still load, and a `sitemap.xml`.

Card images are in `site/public/og/`: `default.png` for Home, About and Licensing, and one per
article named after its slug. A new article without a card uses `default.png`. To make its own:

```
cd site
npm install --no-save playwright
npx playwright install chromium
node scripts/og/make-card.mjs <slug>
```

The Share box on each article (copy link, X, LinkedIn) always shares the public address, even
from a local preview.

## New article checklist

1. Add `posts/article-NN-<slug>.mdx` (front matter format in `README.md`), with its `date:`.
2. Update the previous article's `next:` line.
3. Make its card (above), or let it use the default.
4. Build, publish, then send the new-article email from Kit to the **New articles** form's
   subscribers, linking to `https://tentides.github.io/dev-suite-devlog/articles/<slug>/`.
