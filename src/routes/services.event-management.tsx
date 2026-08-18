import { createFileRoute } from "@tanstack/react-router";

import EventManagement from "@/pages/EventManagement";

export const Route = createFileRoute("/services/event-management")({
  head: () => ({
    meta: [
      { title: "Event Management & Live Experiences | Cineglare" },
      { name: "description", content: "Concept-to-curtain event production: launches, award nights, activations and large-scale live shows." },
      { property: "og:title", content: "Event Management & Live Experiences | Cineglare" },
      { property: "og:description", content: "Concept-to-curtain event production: launches, award nights, activations and large-scale live shows." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventManagement,
});
