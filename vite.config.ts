import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Use src/server.ts as the SSR entry (error-handling wrapper)
      server: { entry: "server" },
    }),
    nitro({ preset: "vercel" }),
    viteReact(),
  ],
});
