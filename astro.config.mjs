// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  build: {
    format: 'directory',
  },

  site: 'https://casmedlin.com',
  integrations: [sitemap()],

  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: true,
      },
    },
  },

  adapter: cloudflare(),
});