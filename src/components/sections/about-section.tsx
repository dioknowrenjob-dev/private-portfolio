"use client";

import { motion } from "framer-motion";
import { MapPin, User } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-violet-700 dark:text-violet-300">About Me</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Crafting digital experiences that scale
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-xl dark:bg-white/[0.04]">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-600/20 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-2xl font-bold text-white">
                  DW
                </div>

                <h3 className="text-2xl font-bold">{siteConfig.name}</h3>
                <p className="mt-1 text-violet-700 dark:text-violet-300">{siteConfig.role}</p>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-violet-700 dark:text-violet-300" />
                  {siteConfig.location}
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3">
                  <User className="h-4 w-4 text-fuchsia-400" />
                  <span className="text-sm text-muted-foreground">
                    Open to remote & contract work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-xl dark:bg-white/[0.04]">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {siteConfig.summary}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Custom Shopify theme development",
                  "Shopify Plus migrations & optimization",
                  "Headless commerce architectures",
                  "SaaS platform engineering",
                  "API design & microservices",
                  "Performance & Core Web Vitals tuning",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4"
                  >
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
