import { createFileRoute } from "@tanstack/react-router";

import AboutUs from "@/pages/AboutUs";

export const Route = createFileRoute("/aboutus")({
  head: () => ({
    meta: [
      { title: "About Cineglare — Our Story, Team & Craft" },
      { name: "description", content: "Meet the strategists, filmmakers and producers behind Cineglare and the values that drive our cinematic work." },
      { property: "og:title", content: "About Cineglare — Our Story, Team & Craft" },
      { property: "og:description", content: "Meet the strategists, filmmakers and producers behind Cineglare and the values that drive our cinematic work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutUs,
});
