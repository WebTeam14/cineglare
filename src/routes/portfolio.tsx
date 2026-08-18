import { createFileRoute } from "@tanstack/react-router";

import Portfolio from "@/pages/Portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Cineglare Films, Campaigns & Events" },
      { name: "description", content: "Selected Cineglare work: brand films, digital campaigns, celebrity collaborations and large-scale event productions." },
      { property: "og:title", content: "Portfolio — Cineglare Films, Campaigns & Events" },
      { property: "og:description", content: "Selected Cineglare work: brand films, digital campaigns, celebrity collaborations and large-scale event productions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
