import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [ tailwind(), sitemap()],
  site: "https://hanblack.github.io/rhodenny.github.io",
  base: '/rhodenny.github.io/',
});
