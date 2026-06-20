# Amir Kasraeian — Portfolio Website

A responsive, bilingual (English/Persian) dark-mode portfolio with glassmorphism styling.

## Files
- `index.html` — main page structure
- `styles.css` — all styling (dark theme, glassmorphism, responsive, RTL support)
- `i18n.js` — English/Persian translation dictionary + terminal animation content
- `script.js` — language switching, mobile menu, scroll reveal, terminal typing animation

No build step, no dependencies. It's plain HTML/CSS/JS, so it runs anywhere a static file can be served.

---

## Deploy to Vercel (free) — recommended

**Option A: Drag & drop (easiest, no account setup beyond signup)**
1. Go to https://vercel.com and sign up (free) with GitHub, GitLab, or email.
2. From the dashboard, click **Add New → Project**.
3. Choose **"Deploy without Git"** / drag-and-drop area, and drag this whole folder in.
4. Vercel will deploy instantly and give you a URL like `amir-kasraeian.vercel.app`.

**Option B: Via GitHub (better for future updates)**
1. Create a new repository on GitHub (e.g. `portfolio`) and upload these files to it.
2. Go to https://vercel.com → **Add New → Project** → **Import Git Repository**.
3. Select your repo. Framework preset: choose **"Other"** (no build command needed).
4. Click **Deploy**. You'll get a live URL in under a minute.
5. Every time you push a change to GitHub, Vercel redeploys automatically.

**Custom domain:** once deployed, go to your project → **Settings → Domains** and add your own domain (e.g. `amirkasraeian.com`) if you buy one later. The free `.vercel.app` subdomain works immediately with no extra setup.

---

## Deploy to Netlify (also free, just as easy)
1. Go to https://app.netlify.com/drop
2. Drag this folder onto the page.
3. You'll instantly get a URL like `random-name.netlify.app` (renameable in site settings).

---

## Editing content later
- All visible text lives in `i18n.js` inside the `translations.en` and `translations.fa` objects — change the value, not the key, and both languages stay in sync structurally.
- Contact info, project links, and skill tags are in `index.html`.
- Colors and fonts are defined as CSS variables at the top of `styles.css` under `:root`.

---

# نسخه فارسی

# وبسایت پرتفولیوی امیر کسرائیان

یک وبسایت پرتفولیوی ریسپانسیو، دوزبانه (انگلیسی/فارسی)، با تم تیره و افکت گلاسمورفیسم.

## فایل‌ها
- `index.html` — ساختار اصلی صفحه
- `styles.css` — تمام استایل‌ها (تم تیره، گلاسمورفیسم، ریسپانسیو، پشتیبانی RTL)
- `i18n.js` — دیکشنری ترجمه انگلیسی/فارسی + محتوای انیمیشن ترمینال
- `script.js` — سوییچ زبان، منوی موبایل، انیمیشن اسکرول، انیمیشن تایپ ترمینال

بدون نیاز به build یا نصب پکیج — فقط HTML/CSS/JS خام است و روی هر سرویس هاستینگ استاتیک کار می‌کند.

---

## دیپلوی روی Vercel (رایگان) — پیشنهاد می‌شود

**روش A: درگ‌اند‌دراپ (ساده‌ترین روش)**
۱. به آدرس https://vercel.com بروید و ثبت‌نام کنید (رایگان، با گیت‌هاب یا ایمیل).
۲. از داشبورد، روی **Add New → Project** کلیک کنید.
۳. گزینه drag-and-drop را انتخاب کنید و کل این پوشه را داخلش بکشید.
۴. ورسل فوراً سایت را منتشر می‌کند و آدرسی مثل `amir-kasraeian.vercel.app` می‌دهد.

**روش B: از طریق گیت‌هاب (بهتر برای آپدیت‌های بعدی)**
۱. یک ریپازیتوری جدید در گیت‌هاب بسازید و این فایل‌ها را آپلود کنید.
۲. به Vercel بروید → **Add New → Project** → **Import Git Repository**.
۳. ریپازیتوری را انتخاب کنید. در بخش framework، گزینه **"Other"** را انتخاب کنید (نیازی به build command نیست).
۴. روی **Deploy** کلیک کنید. در کمتر از یک دقیقه آدرس آنلاین را دریافت می‌کنید.
۵. هر بار که تغییری در گیت‌هاب push کنید، ورسل به‌صورت خودکار دوباره دیپلویش می‌کند.

**دامنه شخصی:** بعد از دیپلوی، به بخش پروژه خود → **Settings → Domains** بروید و در صورت خریدن یک دامنه (مثل `amirkasraeian.com`)، آن را اضافه کنید. آدرس رایگان `.vercel.app` بدون هیچ تنظیم اضافه‌ای فوراً کار می‌کند.

---

## دیپلوی روی Netlify (رایگان و به همان سادگی)
۱. به آدرس https://app.netlify.com/drop بروید.
۲. این پوشه را روی صفحه بکشید.
۳. فوراً آدرسی مثل `random-name.netlify.app` دریافت می‌کنید (قابل تغییر در تنظیمات سایت).

---

## ویرایش محتوا در آینده
- تمام متن‌های قابل‌مشاهده در فایل `i18n.js` داخل آبجکت‌های `translations.en` و `translations.fa` قرار دارند — فقط مقدار را تغییر دهید نه کلید، تا ساختار دو زبان هماهنگ بماند.
- اطلاعات تماس، لینک پروژه و تگ‌های مهارت در `index.html` هستند.
- رنگ‌ها و فونت‌ها به‌صورت متغیرهای CSS در ابتدای فایل `styles.css` زیر `:root` تعریف شده‌اند.
