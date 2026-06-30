"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { skillGroups } from "@/data/content";
import Reveal from "./Reveal";

const titleKeyMap: Record<string, "skills.core.title" | "skills.framework.title" | "skills.styling.title" | "skills.backend.title" | "skills.tools.title"> = {
  core: "skills.core.title",
  framework: "skills.framework.title",
  styling: "skills.styling.title",
  backend: "skills.backend.title",
  tools: "skills.tools.title",
};

export default function Skills() {
  const { t, lang } = useLang();

  return (
    <section id="skills" className="relative z-[1]">
      <div className="mx-auto max-w-[1180px] px-6 py-28 md:px-8 md:py-32">
        <Reveal>
          <p
            className="mb-4 font-mono text-[0.8rem] uppercase tracking-[0.06em] text-accent"
            style={lang === "fa" ? { letterSpacing: 0, textTransform: "none" } : undefined}
          >
            {t("skills.label")}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className={`mb-12 max-w-[720px] font-display text-[1.8rem] font-semibold tracking-tight md:text-[2.6rem] ${
              lang === "fa" ? "font-fa font-bold" : ""
            }`}
          >
            {t("skills.heading")}
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.key} delay={0.06 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="glass h-full rounded-3xl p-7 transition-colors hover:border-glass-borderStrong hover:bg-glass-strong"
              >
                <div className="mb-[18px] flex items-baseline gap-3">
                  <span className="font-mono text-[0.78rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`font-display text-[1.02rem] font-semibold ${
                      lang === "fa" ? "font-fa font-bold" : ""
                    }`}
                  >
                    {t(titleKeyMap[group.key])}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <li
                      key={tag}
                      dir="ltr"
                      className="rounded-lg border border-glass-border bg-white/[0.04] px-3 py-1.5 font-mono text-[0.78rem] text-ink-secondary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
