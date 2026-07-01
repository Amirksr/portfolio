"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import Reveal from "./Reveal";
import type { TranslationKey } from "@/data/content";

type ContactItem =
  | { icon: React.ElementType; href: string; labelKey: TranslationKey; value: string }
  | { icon: React.ElementType; href: string; label: string; value: string };

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    href: "mailto:amirkasraeian611@gmail.com",
    labelKey: "contact.email",
    value: "amirkasraeian611@gmail.com",
  },
  {
    icon: Phone,
    href: "tel:+989133184989",
    labelKey: "contact.phone",
    value: "+98 913 318 4989",
  },
  {
    icon: Github,
    href: "https://github.com/Amirksr",
    label: "GitHub",
    value: "github.com/Amirksr",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/amir-kasraeian",
    label: "LinkedIn",
    value: "amir-kasraeian",
  },
];

export default function Contact() {
  const { t, lang } = useLang();

  return (
    <section id="contact" className="relative z-[1]">
      <div className="mx-auto max-w-[1180px] px-6 py-28 md:px-8 md:py-32">
        <Reveal>
          <p
            className="mb-4 text-center font-mono text-[0.8rem] uppercase tracking-[0.06em] text-accent"
            style={lang === "fa" ? { letterSpacing: 0, textTransform: "none" } : undefined}
          >
            {t("contact.label")}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className={`text-center font-display text-[1.9rem] font-semibold tracking-tight md:text-[2.7rem] ${
              lang === "fa" ? "font-fa font-bold" : ""
            }`}
          >
            {t("contact.heading")}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3.5 text-center text-[1.05rem] text-ink-secondary">
            {t("contact.subtitle")}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const displayLabel =
              "labelKey" in item ? t(item.labelKey) : item.label;
            return (
              <Reveal key={item.value} delay={0.06 * i}>
                <motion.a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="glass flex h-full flex-col items-center gap-2.5 rounded-3xl px-5 py-8 text-center transition-colors hover:border-accent"
                >
                  <span className="mb-1.5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-[0.74rem] uppercase tracking-[0.06em] text-ink-tertiary">
                    {displayLabel}
                  </span>
                  <span dir="ltr" className="break-words text-[0.92rem]">
                    {item.value}
                  </span>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
