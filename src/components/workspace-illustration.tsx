"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Terminal,
  ShoppingBag,
  Layers,
} from "lucide-react";

export function WorkspaceIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative mx-auto w-full max-w-lg"
      aria-hidden="true"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-2xl backdrop-blur-xl dark:bg-white/[0.06]">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-xs font-medium text-slate-600 dark:text-slate-300">
            workspace — shopify-dev
          </span>
        </div>

        <div className="space-y-3 font-mono text-xs sm:text-sm">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 font-medium text-violet-700 dark:text-violet-300"
          >
            <Terminal className="h-4 w-4" />
            <span>npm run build:shopify</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="rounded-lg bg-slate-900/5 p-3 dark:bg-black/40"
          >
            <div className="font-medium text-emerald-700 dark:text-green-400">
              ✓ Theme compiled successfully
            </div>
            <div className="font-medium text-emerald-700 dark:text-green-400">
              ✓ API routes optimized
            </div>
            <div className="font-medium text-emerald-700 dark:text-green-400">
              ✓ Lighthouse score: 98
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { icon: Code2, label: "React / Next.js", color: "text-blue-600 dark:text-blue-400" },
              { icon: ShoppingBag, label: "Shopify Plus", color: "text-emerald-600 dark:text-green-400" },
              { icon: Layers, label: "Liquid Templates", color: "text-violet-600 dark:text-violet-400" },
              { icon: Monitor, label: "SaaS Platforms", color: "text-fuchsia-600 dark:text-fuchsia-400" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex items-center gap-2 rounded-lg border border-border bg-background/50 p-3 dark:bg-white/[0.03]"
              >
                <item.icon className={`h-4 w-4 shrink-0 ${item.color}`} />
                <span className="font-medium text-slate-700 dark:text-slate-200">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 -top-4 rounded-xl border border-violet-500/40 bg-violet-500/15 px-3 py-2 text-xs font-semibold text-violet-800 backdrop-blur-sm dark:text-violet-200"
      >
        9+ Years
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 rounded-xl border border-fuchsia-500/40 bg-fuchsia-500/15 px-3 py-2 text-xs font-semibold text-fuchsia-800 backdrop-blur-sm dark:text-fuchsia-200"
      >
        Shopify Expert
      </motion.div>
    </motion.div>
  );
}
