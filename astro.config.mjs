import { defineConfig } from "astro/config"

// استيراد @astrojs/image
import image from "@astrojs/image"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-Abdelrhman.netlify.app",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
  ],
  server: {
    hmr: true,
    port: 3000, // غير المنفذ إلى 4000
  },
})
