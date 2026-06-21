"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export function EducationSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Education</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Academic background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-fuchsia-600/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20">
              <GraduationCap className="h-8 w-8 text-violet-700 dark:text-violet-300" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{education.school}</h3>
              <p className="mt-1 text-violet-700 dark:text-violet-300">{education.degree}</p>
              <p className="mt-2 text-sm text-muted-foreground">{education.period}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
