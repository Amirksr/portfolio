"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { terminalLines } from "@/data/content";

export default function Terminal() {
  const { lang } = useLang();
  const [visibleLines, setVisibleLines] = useState<
    { type: "cmd" | "out"; text: string; charCount: number }[]
  >([]);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    setVisibleLines([]);

    const lines = terminalLines[lang];
    let lineIndex = 0;

    function typeLine() {
      if (lineIndex >= lines.length) return;
      const line = lines[lineIndex];

      if (line.type === "cmd") {
        let charCount = 0;
        setVisibleLines((prev) => [...prev, { ...line, charCount: 0 }]);
        const typeChar = () => {
          charCount++;
          setVisibleLines((prev) => {
            const next = [...prev];
            next[lineIndex] = { ...line, charCount };
            return next;
          });
          if (charCount < line.text.length) {
            const t = setTimeout(typeChar, 22);
            timeouts.current.push(t);
          } else {
            lineIndex++;
            const t = setTimeout(typeLine, 260);
            timeouts.current.push(t);
          }
        };
        const t = setTimeout(typeChar, 20);
        timeouts.current.push(t);
      } else {
        setVisibleLines((prev) => [
          ...prev,
          { ...line, charCount: line.text.length },
        ]);
        lineIndex++;
        const t = setTimeout(typeLine, 85);
        timeouts.current.push(t);
      }
    }

    typeLine();

    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, [lang]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="glass mx-auto w-full max-w-[440px] overflow-hidden rounded-3xl"
    >
      <div className="flex items-center gap-2 border-b border-glass-border px-[18px] py-3.5" dir="ltr">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 font-mono text-xs text-ink-tertiary">
          amir@portfolio:~
        </span>
      </div>
      <div
        dir="ltr"
        className="min-h-[320px] px-5 py-[22px] pb-6 text-left font-mono text-[0.84rem] leading-[1.85]"
      >
        {visibleLines.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "cmd"
                ? "whitespace-pre-wrap break-words text-accent"
                : "whitespace-pre-wrap break-words text-ink-secondary"
            }
          >
            {line.text.slice(0, line.charCount)}
            {i === visibleLines.length - 1 &&
              line.type === "cmd" &&
              line.charCount === line.text.length && (
                <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-blink bg-accent align-middle" />
              )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
