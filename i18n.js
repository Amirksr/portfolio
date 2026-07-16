// Bilingual content dictionary — English & Persian
const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.project": "Project",
    "nav.contact": "Contact",

    "hero.eyebrow": "Front-End Developer",
    "hero.title1": "Building interfaces",
    "hero.title2": "that feel alive.",
    "hero.subtitle": "I'm Amir Kasraeian — a self-driven front-end developer crafting fast, animated, and thoughtful web experiences with React and Next.js.",
    "hero.ctaPrimary": "View My Work",
    "hero.ctaSecondary": "Get In Touch",
    "hero.meta1": "Years Learning & Building",
    "hero.meta2": "Self-Initiated Projects",
    "hero.scroll": "Scroll",

    "about.label": "01 — About",
    "about.heading": "A developer who learns in public and ships what he learns.",
    "about.p1": "I'm a front-end developer based in Isfahan, Iran, with four years of self-driven, mentor-guided experience building modern web interfaces. My focus is React and Next.js — turning designs into responsive, animated, and genuinely pleasant-to-use products.",
    "about.p2": "Rather than collecting tutorials, I built a habit of returning to old projects and rebuilding them with whatever I'd just learned. That loop — build, learn, rebuild — is most of how I got here, and it's reflected across my GitHub portfolio of 10+ projects.",
    "about.p3": "I'm comfortable extending into the back-end with Node.js and MongoDB when a feature calls for it, but my center of gravity stays on the interface: how it looks, how it moves, and how it feels in someone's hands.",

    "skills.label": "02 — Skills",
    "skills.heading": "Tools I reach for.",
    "skills.core.title": "Core & Language",
    "skills.framework.title": "Frameworks & State",
    "skills.styling.title": "Styling & UI",
    "skills.backend.title": "Back-End (Working Knowledge)",
    "skills.tools.title": "Tools & Workflow",

    "project.label": "03 — Featured Project",
    "project.heading": "A storefront built to feel fast.",
    "project.subtitle": "Auto Parts E-Commerce Platform",
    "project.desc": "I developed a complete e-commerce platform for automotive parts using Next.js, TypeScript, and Tailwind CSS — featuring a full shopping cart with persistent state, a multi-criteria filtering system for fast part discovery, and custom UI animations that make the whole experience feel quicker than it is.",
    "project.feat1": "Full cart system — add, update, remove, persisted state",
    "project.feat2": "Multi-criteria filtering by category & compatibility",
    "project.feat3": "Built with Next.js, TypeScript & Tailwind CSS",
    "project.ctaDemo": "View Live Demo",
    "project.ctaGithub": "More on GitHub",

    "contact.label": "04 — Contact",
    "contact.heading": "Let's build something together.",
    "contact.subtitle": "Open to freelance projects and full-time front-end roles.",
    "contact.email": "Email",
    "contact.phone": "Phone",

    "footer.text": "Designed & built from scratch."
  },

  fa: {
    "nav.about": "درباره من",
    "nav.skills": "مهارت‌ها",
    "nav.project": "پروژه",
    "nav.contact": "تماس",

    "hero.eyebrow": "توسعه‌دهنده فرانت‌اند",
    "hero.title1": "رابط‌هایی می‌سازم",
    "hero.title2": "که زنده‌اند.",
    "hero.subtitle": "من امیر کسرائیان هستم؛ یک توسعه‌دهنده فرانت‌اند خودمحور که با React و Next.js تجربه‌های وب سریع، انیمیشنی و دقیق می‌سازد.",
    "hero.ctaPrimary": "مشاهده نمونه‌کار",
    "hero.ctaSecondary": "تماس با من",
    "hero.meta1": "سال یادگیری و ساخت",
    "hero.meta2": "پروژه خودمحور",
    "hero.scroll": "اسکرول کنید",

    "about.label": "۰۱ — درباره من",
    "about.heading": "توسعه‌دهنده‌ای که علنی یاد می‌گیرد و هرچه یاد می‌گیرد را منتشر می‌کند.",
    "about.p1": "من یک توسعه‌دهنده فرانت‌اند مستقر در اصفهان هستم، با ۴ سال تجربه خودمحور و همراه با راهنمایی منتور در ساخت رابط‌های وب مدرن. تمرکز من روی React و Next.js است؛ تبدیل طراحی‌ها به محصولاتی واکنش‌گرا، انیمیشنی و واقعاً دلپذیر برای استفاده.",
    "about.p2": "به‌جای جمع‌آوری صرف دوره‌های آموزشی، عادت کردم به پروژه‌های قبلی‌ام برگردم و آن‌ها را با هرچه تازه یاد گرفته‌ام بازسازی کنم. همین چرخه - ساختن، یادگرفتن، بازسازی - بیشتر مسیر من تا اینجا بوده و در پورتفولیوی بیش از ۱۰ پروژه‌ام روی گیت‌هاب قابل مشاهده است.",
    "about.p3": "در صورت نیاز، با Node.js و MongoDB هم به سمت بک‌اند گسترش پیدا می‌کنم؛ اما مرکز توجه من همیشه رابط کاربری است: چه شکلی دارد، چطور حرکت می‌کند و در دست کاربر چه حسی منتقل می‌کند.",

    "skills.label": "۰۲ — مهارت‌ها",
    "skills.heading": "ابزارهایی که سراغشان می‌روم.",
    "skills.core.title": "هسته و زبان برنامه‌نویسی",
    "skills.framework.title": "فریم‌ورک و مدیریت وضعیت",
    "skills.styling.title": "طراحی و UI",
    "skills.backend.title": "بک‌اند (آشنایی کاری)",
    "skills.tools.title": "ابزار و روند کاری",

    "project.label": "۰۳ — پروژه برگزیده",
    "project.heading": "فروشگاهی که برای سرعت طراحی شده.",
    "project.subtitle": "پلتفرم فروشگاهی قطعات خودرو",
    "project.desc": "یک پلتفرم فروشگاهی کامل برای قطعات خودرو با Next.js، TypeScript و Tailwind CSS توسعه دادم — شامل یک سیستم سبد خرید کامل با وضعیت پایدار، یک سیستم فیلتر چندمعیاره برای یافتن سریع قطعات، و انیمیشن‌های اختصاصی که کل تجربه را سریع‌تر از آنچه واقعاً هست نشان می‌دهد.",
    "project.feat1": "سیستم سبد خرید کامل — افزودن، ویرایش، حذف، حفظ وضعیت",
    "project.feat2": "فیلتر چندمعیاره بر اساس دسته‌بندی و تطابق با خودرو",
    "project.feat3": "ساخته‌شده با Next.js، TypeScript و Tailwind CSS",
    "project.ctaDemo": "مشاهده دموی زنده",
    "project.ctaGithub": "بیشتر در گیت‌هاب",

    "contact.label": "۰۴ — تماس",
    "contact.heading": "بیایید با هم چیزی بسازیم.",
    "contact.subtitle": "آماده همکاری در پروژه‌های فریلنسری و فرصت‌های تمام‌وقت فرانت‌اند.",
    "contact.email": "ایمیل",
    "contact.phone": "تلفن",

    "footer.text": "طراحی و ساخت از پایه."
  }
};

// Terminal animation lines (per language)
const terminalLines = {
  en: [
    { type: "cmd", text: "amir@portfolio:~$ cat skills.json" },
    { type: "out", text: "{" },
    { type: "out", text: '  "core": ["JavaScript", "TypeScript"],' },
    { type: "out", text: '  "framework": ["React", "Next.js", "Redux Toolkit"],' },
    { type: "out", text: '  "styling": ["Tailwind CSS", "Bootstrap"],' },
    { type: "out", text: '  "backend": ["Node.js", "MongoDB"]' },
    { type: "out", text: "}" },
    { type: "cmd", text: "amir@portfolio:~$ git log --oneline -3" },
    { type: "out", text: "a1b2c3d refine DriveKit cart animations" },
    { type: "out", text: "e4f5g6h add multi-criteria filter logic" },
    { type: "out", text: "i7j8k9l init DriveKit storefront" },
    { type: "cmd", text: "amir@portfolio:~$ _" },
  ],
  fa: [
    { type: "cmd", text: "amir@portfolio:~$ cat skills.json" },
    { type: "out", text: "{" },
    { type: "out", text: '  "core": ["جاوااسکریپت", "تایپ‌اسکریپت"],' },
    { type: "out", text: '  "framework": ["ری‌اکت", "نکست", "رداکس تول‌کیت"],' },
    { type: "out", text: '  "styling": ["تیلویند", "بوت‌استرپ"],' },
    { type: "out", text: '  "backend": ["نود", "مونگو‌دی‌بی"]' },
    { type: "out", text: "}" },
    { type: "cmd", text: "amir@portfolio:~$ git log --oneline -3" },
    { type: "out", text: "a1b2c3d بهبود انیمیشن سبد خرید درایوکیت" },
    { type: "out", text: "e4f5g6h افزودن منطق فیلتر چندمعیاره" },
    { type: "out", text: "i7j8k9l راه‌اندازی اولیه فروشگاه درایوکیت" },
    { type: "cmd", text: "amir@portfolio:~$ _" },
  ]
};
