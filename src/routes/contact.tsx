import { createFileRoute } from "@tanstack/react-router";

import Contact from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Cineglare — Start Your Project" },
      { name: "description", content: "Tell us about your brand, film or event. Cineglare responds within one business day." },
      { property: "og:title", content: "Contact Cineglare — Start Your Project" },
      { property: "og:description", content: "Tell us about your brand, film or event. Cineglare responds within one business day." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});
