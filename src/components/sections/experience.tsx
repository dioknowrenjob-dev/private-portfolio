"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Experience</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Professional journey
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/50 via-fuchsia-500/30 to-transparent sm:block md:left-8" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative sm:pl-16 md:pl-20"
              >
                <div className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center rounded-full border border-violet-500/30 bg-background sm:flex md:left-4">
                  <Briefcase className="h-4 w-4 text-violet-700 dark:text-violet-300" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-500/5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{job.company}</h3>
                      <p className="text-violet-700 dark:text-violet-300">{job.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
