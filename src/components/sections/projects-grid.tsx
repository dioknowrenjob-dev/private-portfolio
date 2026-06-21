"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectsGridProps {
  showHeader?: boolean;
}

export function ProjectsGrid({ showHeader = true }: ProjectsGridProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Portfolio</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              High-performance Shopify storefronts and eCommerce platforms built
              for leading brands worldwide.
            </p>
          </motion.div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-sm">
                    <span className="text-2xl font-bold text-white/90">
                      {project.title}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

                <div className="absolute left-3 top-3 flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-violet-700 dark:text-violet-300">
                  <Zap className="h-3.5 w-3.5" />
                  Performance optimized
                </div>

                <Button
                  variant="outline"
                  className="mt-6 w-full group-hover:border-violet-500/30 group-hover:bg-violet-500/10"
                  asChild
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live website`}
                  >
                    Live Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div
                className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ backgroundColor: project.accent }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
