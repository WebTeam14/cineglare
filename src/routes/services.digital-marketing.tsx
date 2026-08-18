import { createFileRoute } from "@tanstack/react-router";

import DigitalMarketing from "@/pages/DigitalMarketing";

export const Route = createFileRoute("/services/digital-marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Services | Cineglare" },
      { name: "description", content: "Performance campaigns, social storytelling and content engines that grow reach and revenue." },
      { property: "og:title", content: "Digital Marketing Services | Cineglare" },
      { property: "og:description", content: "Performance campaigns, social storytelling and content engines that grow reach and revenue." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DigitalMarketing,
});
