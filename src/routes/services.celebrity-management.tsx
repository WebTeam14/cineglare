import { createFileRoute } from "@tanstack/react-router";

import CelebrityManagement from "@/pages/CelebrityManagement";

export const Route = createFileRoute("/services/celebrity-management")({
  head: () => ({
    meta: [
      { title: "Celebrity Management & Endorsements | Cineglare" },
      { name: "description", content: "Celebrity casting, endorsements and talent partnerships engineered for measurable brand impact." },
      { property: "og:title", content: "Celebrity Management & Endorsements | Cineglare" },
      { property: "og:description", content: "Celebrity casting, endorsements and talent partnerships engineered for measurable brand impact." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CelebrityManagement,
});
