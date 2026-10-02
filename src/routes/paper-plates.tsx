import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/CategoryPage";

const IMG = "/images/products/paper-plates-v10.webp";
const DESC = "Silver paper plates in sizes 6 to 12 from VY Enterprises, Trichy — disposable food-serving paper plates for parties, catering, retail and wholesale orders.";

export const Route = createFileRoute("/paper-plates")({
  head: () => categoryHead({ path: "/paper-plates", title: "Paper Plates | VY Enterprises", description: DESC, image: IMG, name: "Paper Plates" }),
  component: () => (
    <CategoryPage
      c={{
        h1: "Paper Plates",
        intro: "VY Enterprises supplies disposable silver paper plates for food serving at parties, functions and catering. Orders are available for retail customers and wholesale buyers from Trichy, Tamil Nadu.",
        image: IMG,
        imageAlt: "VY Enterprises silver paper plates in multiple sizes",
        productsHeading: "Paper Plate Products",
        products: [
          { name: "Silver Paper Plates — Sizes 6 to 12", desc: "Silver-coated paper plates in five packed sizes." },
          { name: "Printed Paper Cups", desc: "Food-grade printed paper cups for tea, coffee and events." },
          { name: "Floral Print Paper Tub", desc: "Paper tub for biryani, snacks and desserts." },
          { name: "Kraft Dining Rolls", desc: "Multi-layer kraft dining roll for hygienic table service." },
        ],
        whyHeading: "Available Sizes",
        why: ["Size 6", "Size 7", "Size 8", "Size 10", "Size 12"],
        uses: ["Birthday parties", "Functions and events", "Catering services", "Street food and snack shops", "Retail resale"],
        other: { to: "/areca-leaf-plates", label: "Areca Leaf Plates" },
      }}
    />
  ),
});
