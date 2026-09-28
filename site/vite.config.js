import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkGfm from 'remark-gfm';
import { fileURLToPath } from 'node:url';

const nm = (p) => fileURLToPath(new URL('./node_modules/' + p, import.meta.url));

// The site is served from https://tentides.github.io/dev-suite-devlog/ on GitHub Pages.
// Set BASE=/ for a custom domain.
const base = process.env.BASE || '/dev-suite-devlog/';

export default defineConfig({
  base,
  plugins: [
    { enforce: 'pre', ...mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm], providerImportSource: '@mdx-js/react' }) },
    react({ include: /\.(jsx|js|mdx)$/ }),
  ],
  // posts/ lives outside site/, so point its imports at this package's dependencies.
  resolve: {
    alias: [
      { find: /^react\/jsx-runtime$/, replacement: nm('react/jsx-runtime.js') },
      { find: /^react\/jsx-dev-runtime$/, replacement: nm('react/jsx-dev-runtime.js') },
      { find: /^@mdx-js\/react$/, replacement: nm('@mdx-js/react/index.js') },
      { find: /^react$/, replacement: nm('react/index.js') },
    ],
  },
  server: { fs: { allow: ['..'] } },
});
