import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Diokno Wren — Senior Full Stack Shopify Developer with 9+ years of experience in eCommerce, SaaS, and modern web development.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}
