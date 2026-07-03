"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import Terminal from "./Terminal";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      id="home"
      className="relative z-[1] flex min-h-screen flex-col justify-center px-6 pb-20 pt-36 md:px-8 md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 text-center lg:order-1 lg:text-start"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-[0.8rem] uppercase tracking-[0.08em] text-accent"
            style={lang === "fa" ? { letterSpacing: 0, textTransform: "none" } : undefined}
          >
            {t("hero.eyebrow")}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className={`mt-[18px] font-display font-semibold leading-[1.08] tracking-tight ${
              lang === "fa" ? "font-fa font-bold leading-[1.35]" : ""
            }`}
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            <span>{t("hero.title1")}</span>
            <br />
            <span className="bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-[480px] text-[1.08rem] leading-[1.7] text-ink-secondary lg:mx-0"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="#project"
              className="rounded-full bg-gradient-to-br from-accent to-[#00b8a3] px-7 py-3.5 font-semibold text-[#061212] shadow-[0_8px_24px_rgba(0,217,192,0.35)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,217,192,0.35)]"
            >
              {t("hero.ctaPrimary")}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-glass-borderStrong bg-glass px-7 py-3.5 font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-glass-strong"
            >
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-14 flex items-center justify-center gap-7 lg:justify-start"
          >
            <div className="flex flex-col gap-1">
              <span className="font-display text-[1.7rem] font-bold text-accent">
                5+
              </span>
              <span className="text-[0.82rem] text-ink-tertiary">
                {t("hero.meta1")}
              </span>
            </div>
            <div className="h-9 w-px bg-glass-borderStrong" />
            <div className="flex flex-col gap-1">
              <span className="font-display text-[1.7rem] font-bold text-accent">
                10+
              </span>
              <span className="text-[0.82rem] text-ink-tertiary">
                {t("hero.meta2")}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column: Avatar + Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex flex-col items-center gap-8 lg:order-2"
        >
          {/* Avatar */}
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-accent2 opacity-60 blur-md" />
            {/* Border ring */}
            <div className="relative rounded-full p-[3px] bg-gradient-to-br from-accent to-accent2">
              <div className="rounded-full overflow-hidden w-[148px] h-[148px] md:w-[168px] md:h-[168px]">
                <Image
                  src="/avatar.jpg"
                  alt="Amir Kasraeian"
                  width={168}
                  height={168}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="w-full">
            <Terminal />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-tertiary md:flex"
        style={lang === "fa" ? { letterSpacing: 0, textTransform: "none" } : undefined}
      >
        <span>{t("hero.scroll")}</span>
        <div className="h-8 w-px animate-scrollPulse bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
