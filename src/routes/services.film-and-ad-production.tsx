import { createFileRoute } from "@tanstack/react-router";

import FilmAndAdProduction from "@/pages/FilmAndAdProduction";

export const Route = createFileRoute("/services/film-and-ad-production")({
  head: () => ({
    meta: [
      { title: "Film & Ad Production | Cineglare" },
      { name: "description", content: "End-to-end commercial, brand film and ad production — concept, shoot, post and delivery." },
      { property: "og:title", content: "Film & Ad Production | Cineglare" },
      { property: "og:description", content: "End-to-end commercial, brand film and ad production — concept, shoot, post and delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FilmAndAdProduction,
});
