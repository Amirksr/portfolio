"use client";

import { useLang } from "@/lib/LangContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1] px-8 pb-12 pt-9 text-center text-[0.85rem] text-ink-tertiary">
      <p>
        © {year} Amir Kasraeian. {t("footer.text")}
      </p>
    </footer>
  );
}
