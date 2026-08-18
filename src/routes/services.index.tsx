import { createFileRoute } from "@tanstack/react-router";

import Services from "@/pages/Services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Branding, Film, Digital & Events | Cineglare" },
      { name: "description", content: "Explore Cineglare services: product branding, celebrity management, digital marketing, film production, promotion and events." },
      { property: "og:title", content: "Services — Branding, Film, Digital & Events | Cineglare" },
      { property: "og:description", content: "Explore Cineglare services: product branding, celebrity management, digital marketing, film production, promotion and events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});
