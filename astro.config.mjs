import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jramoncarralero.github.io',
  base: '/raquel-am',
  integrations: [sitemap()],
});
