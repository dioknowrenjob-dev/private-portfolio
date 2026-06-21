import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured Shopify and eCommerce projects by Diokno Wren — Sharper Image, SuperFeast, Rareform, Gray Malin, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <ProjectsGrid />
    </div>
  );
}
