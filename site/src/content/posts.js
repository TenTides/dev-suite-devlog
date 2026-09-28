// Every article is an .mdx file in the repository's posts/ folder.
const mods = import.meta.glob('../../../posts/*.mdx', { eager: true });

export const posts = Object.entries(mods)
  .map(([path, m]) => ({ file: path.split('/').pop(), ...m.frontmatter, Content: m.default }))
  .sort((a, b) => String(a.number).localeCompare(String(b.number)));

export const articles = posts.map((p) => ({
  slug: p.slug, number: p.number, title: p.title, date: p.date, readTime: p.readTime,
  excerpt: p.standfirst, href: '/articles/' + p.slug,
}));

export const findPost = (slug) => posts.find((p) => p.slug === slug);
