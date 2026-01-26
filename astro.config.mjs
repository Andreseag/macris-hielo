import { defineConfig } from "astro/config";

export default defineConfig({
  // ¡No pongas nada de tailwind aquí por ahora!
  // Astro verá el archivo postcss.config.mjs automáticamente.
  site: "https://andreseag.github.io",
  base: "/macris-hielo",
  output: "static", // Forzamos a que sea estático
});
