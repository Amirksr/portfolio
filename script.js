(function () {
  "use strict";

  /* ============================================
     LANGUAGE SWITCHING
  ============================================ */
  const STORAGE_KEY = "ak-portfolio-lang";
  const htmlEl = document.documentElement;
  const langToggle = document.getElementById("langToggle");

  function getInitialLang() {
    const saved = localStorageSafeGet(STORAGE_KEY);
    if (saved === "en" || saved === "fa") return saved;
    return "en";
  }

  // Wrap localStorage in try/catch in case of restricted environments
  function localStorageSafeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function localStorageSafeSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* no-op */ }
  }

  function applyLanguage(lang) {
    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("data-lang", lang);
    htmlEl.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
    langToggle.textContent = lang === "fa" ? "EN" : "FA";

    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.title = lang === "fa"
      ? "امیر کسرائیان — توسعه‌دهنده فرانت‌اند"
      : "Amir Kasraeian — Front-End Developer";

    localStorageSafeSet(STORAGE_KEY, lang);
    restartTerminal(lang);
  }

  langToggle.addEventListener("click", () => {
    const current = htmlEl.getAttribute("data-lang") || "en";
    applyLanguage(current === "en" ? "fa" : "en");
  });

  /* ============================================
     MOBILE MENU
  ============================================ */
  const burger = document.getElementById("burger");
  const navMobile = document.getElementById("navMobile");
  burger.addEventListener("click", () => {
    navMobile.classList.toggle("is-open");
  });
  navMobile.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navMobile.classList.remove("is-open"));
  });

  /* ============================================
     NAV SCROLL STATE
  ============================================ */
  const nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 24) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
    navMobile.classList.remove("is-open");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ============================================
     SCROLL REVEAL
  ============================================ */
  function setupReveal() {
    const targets = document.querySelectorAll(
      ".about__heading, .about__body, .skill-card, .project-card, .contact-card, .section-label"
    );
    targets.forEach((el) => el.setAttribute("data-reveal", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  }
  setupReveal();

  /* ============================================
     TERMINAL TYPING ANIMATION
  ============================================ */
  let terminalTimeouts = [];
  const terminalBody = document.getElementById("terminalBody");

  function clearTerminalTimeouts() {
    terminalTimeouts.forEach((t) => clearTimeout(t));
    terminalTimeouts = [];
  }

  function restartTerminal(lang) {
    clearTerminalTimeouts();
    terminalBody.innerHTML = "";
    const lines = terminalLines[lang] || terminalLines.en;
    typeLines(lines, 0);
  }

  function typeLines(lines, index) {
    if (index >= lines.length) {
      appendCursor();
      return;
    }
    const line = lines[index];
    const lineEl = document.createElement("div");
    lineEl.className = "term-line term-line--" + line.type;
    terminalBody.appendChild(lineEl);

    if (line.type === "cmd") {
      typeText(lineEl, line.text, 28, () => {
        const t = setTimeout(() => typeLines(lines, index + 1), 280);
        terminalTimeouts.push(t);
      });
    } else {
      lineEl.textContent = line.text;
      const t = setTimeout(() => typeLines(lines, index + 1), 90);
      terminalTimeouts.push(t);
    }
  }

  function typeText(el, text, speed, callback) {
    let i = 0;
    function step() {
      el.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        const t = setTimeout(step, speed);
        terminalTimeouts.push(t);
      } else if (callback) {
        callback();
      }
    }
    step();
  }

  function appendCursor() {
    const cursor = document.createElement("span");
    cursor.className = "term-cursor";
    const lastLine = terminalBody.lastElementChild;
    if (lastLine) {
      lastLine.appendChild(cursor);
    } else {
      terminalBody.appendChild(cursor);
    }
  }

  /* ============================================
     INIT
  ============================================ */
  document.getElementById("year").textContent = new Date().getFullYear();
  applyLanguage(getInitialLang());
})();
