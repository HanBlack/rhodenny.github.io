import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://hanblack.github.io/rhodenny.github.io";
const SCRIPT = process.env.npm_life_cycle_scipt || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
if (isBuild) {
  BASE_URL = LIVE_URL;
}
export default defineConfig({
  integrations: [astroI18next(), tailwind()],
  site: BASE_URL,
  server: {port: SERVER_PORT},
});
