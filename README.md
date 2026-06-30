# Amir Kasraeian — Portfolio (React / Next.js + Tailwind + Framer Motion)

This is the React rewrite of the portfolio: same dark, glassmorphic design,
now built with Next.js (App Router), Tailwind CSS, and Framer Motion for
smooth entrance/scroll/hover animations.

## Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling (design tokens defined in `tailwind.config.js`)
- **Framer Motion** for all animation (staggered hero entrance, scroll reveals, hover micro-interactions, terminal typing effect)
- **lucide-react** for icons

## Project structure
```
src/
  app/
    layout.tsx       — root layout, fonts, metadata
    page.tsx          — assembles all sections
    globals.css        — base styles, glass utility
  components/
    Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx,
    Project.tsx, Contact.tsx, Footer.tsx,
    Terminal.tsx       — animated terminal in the hero
    Reveal.tsx          — reusable scroll-reveal wrapper
    AmbientBackground.tsx
  lib/
    LangContext.tsx     — English/Persian language switching (client-side, persisted)
  data/
    content.ts           — all bilingual text + skill/terminal content
public/
  drivekit-screenshot.jpg
```

## Run locally
You'll need Node.js 18+ installed.

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```bash
npm run build
npm start
```

## Deploy to Vercel
Since this repository is already connected to Vercel (from the previous static
version), Vercel will detect this is now a Next.js project automatically on
the next deploy — no dashboard settings need to change. Framework preset
will auto-switch from "Other" to "Next.js".

If you're setting this up fresh: push to GitHub, then import the repo at
vercel.com/new — Vercel auto-detects Next.js and the build command (`next build`)
with zero configuration needed.

---

# نسخه فارسی

# پرتفولیوی امیر کسرائیان (نسخه‌ی React / Next.js + Tailwind + Framer Motion)

این نسخه، بازنویسی کامل پرتفولیو با React است: همان طراحی تیره و شیشه‌ای
(گلاسمورفیسم)، این‌بار ساخته‌شده با Next.js (App Router)، Tailwind CSS، و
Framer Motion برای انیمیشن‌های روان (ورود به صفحه، نمایش هنگام اسکرول،
میکرو-اینترکشن‌های هاور، و افکت تایپ ترمینال).

## اجرای محلی
به Node.js نسخه ۱۸ یا بالاتر نیاز دارید.

```bash
npm install
npm run dev
```
سپس آدرس http://localhost:3000 را باز کنید.

## ساخت نسخه‌ی نهایی (production)
```bash
npm run build
npm start
```

## دیپلوی روی Vercel
چون این ریپازیتوری از قبل به Vercel وصل است (از نسخه‌ی استاتیک قبلی)،
ورسل در دیپلوی بعدی به‌طور خودکار تشخیص می‌دهد که این یک پروژه‌ی Next.js
است — نیازی به تغییر تنظیمات نیست. Framework preset خودش از «Other» به
«Next.js» تغییر می‌کند.

اگر از صفر شروع می‌کنید: کد را به گیت‌هاب push کنید، سپس ریپازیتوری را در
vercel.com/new ایمپورت کنید — ورسل بدون نیاز به تنظیم خاصی، Next.js و
دستور build (`next build`) را خودش تشخیص می‌دهد.
