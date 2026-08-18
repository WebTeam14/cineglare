import { createFileRoute } from "@tanstack/react-router";

import FilmPromotion from "@/pages/FilmPromotion";

export const Route = createFileRoute("/services/film-promotion")({
  head: () => ({
    meta: [
      { title: "Film Promotion & Marketing | Cineglare" },
      { name: "description", content: "Theatrical and digital film promotion campaigns that build anticipation and open-weekend momentum." },
      { property: "og:title", content: "Film Promotion & Marketing | Cineglare" },
      { property: "og:description", content: "Theatrical and digital film promotion campaigns that build anticipation and open-weekend momentum." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FilmPromotion,
});
