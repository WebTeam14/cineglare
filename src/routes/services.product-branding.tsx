import { createFileRoute } from "@tanstack/react-router";

import ProductBranding from "@/pages/ProductBranding";

export const Route = createFileRoute("/services/product-branding")({
  head: () => ({
    meta: [
      { title: "Product Branding Services | Cineglare" },
      { name: "description", content: "Brand strategy, naming, identity systems and packaging design that make products unmistakable." },
      { property: "og:title", content: "Product Branding Services | Cineglare" },
      { property: "og:description", content: "Brand strategy, naming, identity systems and packaging design that make products unmistakable." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductBranding,
});
