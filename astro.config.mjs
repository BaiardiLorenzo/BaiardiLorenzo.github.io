import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://baiardilorenzo.github.io',
  // This is a GitHub *user site*, so assets are served at the domain root.
  base: '/',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
