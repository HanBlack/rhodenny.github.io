import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [astroI18next(), tailwind()],
  site: "https://hanblack.github.io/rhodenny.github.io",
  base: '/rhodenny.github.io'
});
