"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/LangContext";

const navItems = [
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.project", href: "#project" },
  { key: "nav.contact", href: "#contact" },
] as const;

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] transition-[padding,background] duration-300 ${
        scrolled || menuOpen
          ? "bg-base/90 backdrop-blur-md border-b border-glass-border py-3"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 md:px-8">
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight"
        >
          AK<span className="text-accent">.</span>
        </a>

        <div className="hidden gap-9 text-sm text-ink-secondary md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="group relative transition-colors hover:text-ink-primary"
            >
              {t(item.key)}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <button
            onClick={toggleLang}
            className="rounded-full border border-glass-borderStrong bg-glass px-4 py-2 font-mono text-xs font-semibold backdrop-blur-md transition-colors hover:border-accent hover:bg-glass-strong"
            aria-label="Toggle language"
          >
            {lang === "fa" ? "EN" : "FA"}
          </button>
          <button
            className="flex flex-col gap-1.5 p-1.5 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="mx-6 mt-4 flex flex-col gap-1 rounded-2xl border border-glass-borderStrong bg-elevated p-4 shadow-2xl">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-3 text-ink-secondary transition-colors hover:bg-glass hover:text-ink-primary"
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
