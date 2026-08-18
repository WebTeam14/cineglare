import { createFileRoute } from "@tanstack/react-router";

import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cineglare — Cinematic Brand, Film & Event Experiences" },
      { name: "description", content: "Cineglare crafts cinematic brand campaigns, films, celebrity-led promotions and unforgettable live events." },
      { property: "og:title", content: "Cineglare — Cinematic Brand, Film & Event Experiences" },
      { property: "og:description", content: "Cineglare crafts cinematic brand campaigns, films, celebrity-led promotions and unforgettable live events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
