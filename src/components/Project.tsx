"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import Reveal from "./Reveal";

const techTags = ["React", "JavaScript", "CSS Animations"];

export default function Project() {
  const { t, lang } = useLang();

  return (
    <section id="project" className="relative z-[1]">
      <div className="mx-auto max-w-[1180px] px-6 py-28 md:px-8 md:py-32">
        <Reveal>
          <p
            className="mb-4 font-mono text-[0.8rem] uppercase tracking-[0.06em] text-accent"
            style={lang === "fa" ? { letterSpacing: 0, textTransform: "none" } : undefined}
          >
            {t("project.label")}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className={`mb-12 max-w-[720px] font-display text-[1.8rem] font-semibold tracking-tight md:text-[2.6rem] ${
              lang === "fa" ? "font-fa font-bold" : ""
            }`}
          >
            {t("project.heading")}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass grid overflow-hidden rounded-3xl md:grid-cols-2">
            <div
              className="flex items-center justify-center p-8 md:p-12"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(0,217,192,0.14), transparent 60%)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full overflow-hidden rounded-2xl border border-glass-borderStrong bg-deep shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                <Image
                  src="/drivekit-screenshot.jpg"
                  alt="DriveKit auto parts storefront homepage"
                  width={1200}
                  height={572}
                  className="block w-full"
                  priority={false}
                />
              </motion.div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:pe-12 lg:ps-4">
              <h3 className="font-display text-[1.8rem] font-bold tracking-tight">
                DriveKit
              </h3>
              <p
                dir={lang === "fa" ? "rtl" : "ltr"}
                className={`mb-[18px] mt-1.5 font-mono text-[0.85rem] text-accent ${
                  lang === "fa" ? "font-fa" : ""
                }`}
              >
                {t("project.subtitle")}
              </p>
              <p className="mb-[22px] text-[1rem] leading-[1.75] text-ink-secondary">
                {t("project.desc")}
              </p>

              <ul className="mb-7 flex flex-col gap-2.5">
                {(["project.feat1", "project.feat2", "project.feat3"] as const).map(
                  (key) => (
                    <li
                      key={key}
                      className="relative ps-[22px] text-[0.93rem] text-ink-secondary before:absolute before:start-0 before:top-[7px] before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent"
                    >
                      {t(key)}
                    </li>
                  )
                )}
              </ul>

              <div className="mb-[30px] flex flex-wrap gap-2.5">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/25 bg-accent-soft px-[13px] py-1.5 font-mono text-[0.76rem] text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3.5">
                <a
                  href="https://github.com/Amirksr/DriveKitDemo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-br from-accent to-[#00b8a3] px-7 py-3.5 text-center font-semibold text-[#061212] shadow-[0_8px_24px_rgba(0,217,192,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  {t("project.ctaDemo")}
                </a>
                <a
                  href="https://github.com/Amirksr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-glass-borderStrong bg-glass px-7 py-3.5 text-center font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent"
                >
                  {t("project.ctaGithub")}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
