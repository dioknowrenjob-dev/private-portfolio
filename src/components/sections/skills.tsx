"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Cloud,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  shopping: ShoppingBag,
};

export function SkillsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Skills</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technical expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A comprehensive toolkit for building modern eCommerce platforms and
            scalable web applications.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="group h-full transition-all duration-300 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-700 dark:text-violet-300 transition-colors group-hover:bg-violet-500/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:border-violet-500/20 group-hover:text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
