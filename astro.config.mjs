import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import svelte from "@astrojs/svelte";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  site: "https://ricardobaquero.com",
  vite: {
    plugins: [
      Icons({
        compiler: "svelte",
        autoInstall: true,
      }),
    ],
  },
});
