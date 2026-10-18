// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sparkhabitsapp.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // /support/ was the first Support URL; keep it working for anything that already links to it.
  redirects: {
    '/support/': '/help/',
  },
});
