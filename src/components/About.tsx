"use client";

import { useLang } from "@/lib/LangContext";
import Reveal from "./Reveal";

export default function About() {
  const { t, lang } = useLang();

  return (
    <section id="about" className="relative z-[1]">
      <div className="mx-auto max-w-[1180px] px-6 py-28 md:px-8 md:py-32">
        <Reveal>
          <p
            className="mb-4 font-mono text-[0.8rem] uppercase tracking-[0.06em] text-accent"
            style={lang === "fa" ? { letterSpacing: 0, textTransform: "none" } : undefined}
          >
            {t("about.label")}
          </p>
        </Reveal>

        <div className="grid gap-10 md:gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.1}>
            <h2
              className={`sticky top-32 font-display text-[1.6rem] font-semibold leading-[1.3] tracking-tight md:text-[2.1rem] ${
                lang === "fa" ? "font-fa font-bold" : ""
              }`}
            >
              {t("about.heading")}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-5 text-[1.04rem] leading-[1.8] text-ink-secondary">
              <p className="text-ink-primary">{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
