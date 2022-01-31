// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
import Icons from "unplugin-icons/vite";

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Svelte renderer to support Svelte components.
  renderers: ["@astrojs/renderer-svelte"],
  buildOptions: {
    site: "https://ricardobaquero.com",
  },
  vite: {
    plugins: [
      Icons({
        compiler: "svelte",
        autoInstall: true,
      }),
    ],
  },
});
