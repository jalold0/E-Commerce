# 📋 SELLOBAY — Texnik Vazifa (TZ) v2.0

> **Brend:** Sellobay
> **Joylashuv:** O'zbekiston
> **Format:** Multi-vendor Marketplace (minglab sotuvchilar)
> **Stil:** Premium · Clean · Interaktiv (webild.io ilhomi)
> **Brendlanish:** Bordo (deep red) + Qora kombinatsiyasi
> **Yo'naltirish:** Dasturchi uchun pixel-darajadagi spetsifikatsiya

---

## 📑 Mundarija

1. [Brend identiteti va Design System](#1-brend-identiteti-va-design-system)
2. [Global tokenlar va tipografiya](#2-global-tokenlar-va-tipografiya)
3. [Header — sticky, 3-qatlamli](#3-header)
4. [Hero Banner — clean + interaktiv](#4-hero-banner)
5. [Kategoriya bloklari — bento style](#5-kategoriya-bloklari)
6. [Product Cards Grid](#6-product-cards-grid)
7. [Aksiyalar bo'limi (dynamic)](#7-aksiyalar-bolimi)
8. [Trust strip + Sellers showcase](#8-trust-strip)
9. [Footer — premium dark](#9-footer)
10. [Responsive breakpointlar](#10-responsive)
11. [Animatsiya tamoyillari](#11-animatsiya)
12. [Accessibility (a11y)](#12-accessibility)
13. [Implementation checklist](#13-checklist)

---

## 1. Brend identiteti va Design System

### 1.1 Logotip va belgi

| Element            | Spetsifikatsiya                                                                 |
| ------------------ | ------------------------------------------------------------------------------- |
| **Wordmark**       | `Sellobay` — Inter / Manrope ExtraBold, -0.025em letter-spacing                 |
| **Belgi (mark)**   | `S` harfi gradient ichida — `linear-gradient(135deg, #8B0020 0%, #1A0A0F 100%)` |
| **Belgi o'lchami** | 40×40 (header), 56×56 (footer), 32×32 (favicon)                                 |
| **Border-radius**  | 12px (belgi atrofida)                                                           |
| **Tagline**        | `Marketplace · 50,000+ sotuvchi` — uppercase, 10px, tracking 0.15em             |

### 1.2 Rang palitrasi (bordo + qora premium)

```css
/* ASOSIY (Primary) — Bordo */
--brand-bordeaux: #8b0020; /* Asosiy CTA, badge, link */
--brand-bordeaux-deep: #5c0015; /* Hover, gradient bottom */
--brand-bordeaux-bright: #b30029; /* Active state, hot indicator */
--brand-wine: #6b0019; /* Footer accent */

/* SECONDARY — Qora */
--brand-black: #0a0a0c; /* Header top bar, footer */
--brand-charcoal: #16161a; /* Main dark surface */
--brand-graphite: #1f1f24; /* Card on dark */
--brand-smoke: #2a2a30; /* Borders on dark */

/* ACCENT — Oltin (premium chiziqlar uchun) */
--brand-gold: #c9a961; /* "PREMIUM SELLER" badge, separators */
--brand-gold-bright: #e5c77a; /* Hover oltin */

/* NEYTRALLAR */
--surface: #ffffff;
--surface-soft: #fafafa;
--border-light: #eaeaec;
--text-primary: #0a0a0c;
--text-muted: #6b6b73;
--text-faint: #a0a0a8;

/* SEMANTIK */
--success: #16a34a;
--warning: #f59e0b;
--danger: #dc2626;
--info: #2563eb;
```

### 1.3 Gradientlar (signature)

```css
/* Asosiy brand gradient — logo, primary CTA, hero base */
--gradient-bordeaux: linear-gradient(135deg, #8b0020 0%, #5c0015 50%, #1a0a0f 100%);

/* Hero gradient — clean qora bordo o'tish */
--gradient-hero: linear-gradient(140deg, #0a0a0c 0%, #1a0a0f 35%, #5c0015 70%, #8b0020 100%);

/* Premium oltin highlight */
--gradient-gold: linear-gradient(90deg, transparent 0%, #c9a961 50%, transparent 100%);

/* Glass card overlay */
--gradient-glass: linear-gradient(
  180deg,
  rgba(255, 255, 255, 0.08) 0%,
  rgba(255, 255, 255, 0.02) 100%
);
```

---

## 2. Global tokenlar va tipografiya

### 2.1 Font stack

```css
/* Display (sarlavhalar) */
font-display: 'Manrope', 'Inter', system-ui, sans-serif;

/* Body */
font-body: 'Inter', system-ui, sans-serif;

/* Mono (countdown, narx, kod) */
font-mono: 'JetBrains Mono', ui-monospace, monospace;
```

### 2.2 Type scale (responsive)

| Token         | Mobile      | Desktop     | Weight | Use                        |
| ------------- | ----------- | ----------- | ------ | -------------------------- |
| `display-2xl` | 36px / 1.05 | 72px / 1.0  | 900    | Hero h1                    |
| `display-xl`  | 30px / 1.1  | 56px / 1.05 | 900    | Section opener             |
| `display-lg`  | 24px / 1.15 | 40px / 1.1  | 800    | Block title                |
| `h1`          | 28px / 1.2  | 40px / 1.15 | 800    | Page title                 |
| `h2`          | 22px / 1.25 | 30px / 1.2  | 800    | Section title              |
| `h3`          | 18px / 1.3  | 22px / 1.3  | 700    | Card title                 |
| `body-lg`     | 16px / 1.55 | 18px / 1.55 | 400    | Lead paragraph             |
| `body`        | 14px / 1.55 | 15px / 1.55 | 400    | Default                    |
| `body-sm`     | 13px / 1.5  | 13px / 1.5  | 400    | Caption                    |
| `overline`    | 10px / 1.2  | 11px / 1.2  | 700    | UPPERCASE, tracking 0.15em |

### 2.3 Spacing scale (4px grid)

`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`

### 2.4 Border-radius

| Token         | Value  | Use                 |
| ------------- | ------ | ------------------- |
| `radius-sm`   | 8px    | Badge, pill         |
| `radius-md`   | 12px   | Input, button       |
| `radius-lg`   | 16px   | Card                |
| `radius-xl`   | 20px   | Hero card           |
| `radius-2xl`  | 28px   | Hero section, modal |
| `radius-full` | 9999px | Pill, avatar        |

### 2.5 Shadow tokens

```css
--shadow-sm: 0 1px 2px rgba(10, 10, 12, 0.04);
--shadow-md: 0 4px 12px rgba(10, 10, 12, 0.06);
--shadow-lg: 0 12px 32px rgba(10, 10, 12, 0.1);
--shadow-xl: 0 24px 48px rgba(10, 10, 12, 0.14);
--shadow-bordeaux: 0 12px 32px rgba(139, 0, 32, 0.25); /* CTA glow */
--shadow-card-hover: 0 20px 60px -15px rgba(10, 10, 12, 0.2);
```

---

## 3. Header

### 3.1 Strukturasi (3 qatlam)

```
┌─────────────────────────────────────────────────────────┐
│ TOP BAR (32px) — qora #0A0A0C                          │  ← scroll'da yashirinadi
│ ☎ +998 71 200 00 00 │ 24/7 │ Buyurtmamni kuzatish │ UZ ↓│
├─────────────────────────────────────────────────────────┤
│ MAIN BAR (76px) — oq, sticky                            │  ← scroll'da shadow paydo
│ [≡] [Sellobay logo+tagline] [🔍 Search 50%] [User] [♡] [🛒3]│
├─────────────────────────────────────────────────────────┤
│ NAV BAR (52px) — engil kulrang #FAFAFA                  │  ← scroll'da yashirinmaydi
│ ☰ Katalog │ Kiyim │ Poyabzal │ Atirlar │... │ 🔥 AKSIYALAR│
└─────────────────────────────────────────────────────────┘
```

### 3.2 Top Bar — qora `#0A0A0C`

**Balandlik:** 32px desktop, mobile'da yashiringan
**Matn:** 11px, white/85, font-medium
**Tarkib (chap):**

- 📞 Telefon link: `tel:+998712000000`
- "·" divider, white/30
- "24/7 qo'llab-quvvatlash"

**Tarkib (o'ng):**

- "Buyurtmamni kuzatish" → `/orders/track`
- "Sotuvchi bo'lish" → `/sell` (oltin underline)
- Locale switcher: `UZ ▾` dropdown (UZ/RU/EN)

**Scroll behavior:** `scrollY > 40` → `max-h-0 opacity-0` (300ms ease-in-out)

### 3.3 Main Bar — oq, sticky

**Balandlik:** 76px (desktop), 64px (mobile)
**Background:** `rgba(255,255,255,0.95)` + `backdrop-blur(12px)`
**Sticky:** `top-0`, scroll'da shadow `0 2px 20px rgba(10,10,12,0.08)`

#### Logo bloki (chap)

```jsx
<Link href="/" className="flex items-center gap-3">
  {/* Belgi */}
  <div
    className="bg-gradient-bordeaux shadow-bordeaux grid h-11 w-11
                  place-items-center rounded-xl font-black text-white"
  >
    S
  </div>
  {/* Wordmark + tagline */}
  <div className="hidden flex-col leading-tight md:flex">
    <span className="text-lg font-extrabold tracking-tight">Sellobay</span>
    <span className="text-text-muted text-[10px] uppercase tracking-[0.15em]">Marketplace</span>
  </div>
</Link>
```

#### Search (markaz, 50% kenglik)

- Width: `flex-1`, max-width 720px
- Height: 48px
- Border: 1.5px solid `#EAEAEC`, focus'da `#8B0020`
- Border-radius: `radius-md` (12px)
- Animatsion placeholder: har 2.5s o'zgarib turadi:
  - "Nike Air Max 270..."
  - "iPhone 16 Pro..."
  - "Chanel Bleu atiri..."
  - "ZARA sviter..."
  - "Samsung Galaxy S24..."
- Chap tomonda: `<Search size={18} className="text-text-muted" />`
- O'ng tomonda: kategoriya selector (optional) + qidiruv tugmasi (bordo pill)
- Focus state: `box-shadow: 0 0 0 4px rgba(139,0,32,0.10)`

#### Right actions (o'ng)

| Element           | O'lcham                 | Behavior                 |
| ----------------- | ----------------------- | ------------------------ |
| **Login link**    | h-10, px-3, font-medium | hover: `bg-surface-soft` |
| **Wishlist icon** | h-10 w-10 grid          | badge agar count > 0     |
| **Cart icon**     | h-10 w-10 grid          | qizil dot badge (count)  |

Cart icon hover'da → `text-brand-bordeaux`.

### 3.4 Nav Bar — kategoriyalar

**Balandlik:** 52px
**Background:** `#FAFAFA` border-top va border-bottom `#EAEAEC`
**Layout:** `container flex gap-1 overflow-x-auto`

**Element'lar:**

1. **Katalog mega-menu trigger** (chap, doimo birinchi):

   ```
   ┌────────────────────┐
   │ ☰ Barcha kategoriyalar ▾│  ← qora bg, oq text, doimo ko'rinadi
   └────────────────────┘
   ```

   Hover'da → katta dropdown ochiladi (3-ustun mega-menu).

2. **Top kategoriyalar** (max 7 ta):
   - `Kiyim-kechak`, `Poyabzal`, `Atirlar`, `Kosmetika`, `Smartfonlar`, `Texnika`, `Uy-rozi'i'jot`
   - Hover effect: `nav-underline` — pastdan bordo chiziq scaleX(0→1) 200ms
   - Font: 14px, font-medium, color text-muted → text-primary hover

3. **AKSIYALAR pill** (eng o'ng):
   ```css
   background: linear-gradient(135deg, #8b0020 0%, #b30029 100%);
   color: white;
   padding: 8px 16px;
   border-radius: 9999px;
   font-weight: 800;
   font-size: 11px;
   text-transform: uppercase;
   letter-spacing: 0.1em;
   box-shadow: 0 4px 12px rgba(139, 0, 32, 0.3);
   ```
   `<span className="animate-bounce-slow">🔥</span> AKSIYALAR`

### 3.5 Mega-Menu (3-ustun dropdown)

Hover yoki click'da Katalog tugmasini bosish bilan ochiladi:

```
┌──────────────────────────────────────────────────────────────────┐
│ KATEGORIYALAR (asosiy) │ POPULAR SUB    │ FEATURED BANNER       │
├────────────────────────┼─────────────────┼───────────────────────┤
│ 👕 Kiyim-kechak    →   │ • Erkaklar     │ ┌───────────────┐    │
│ 👟 Poyabzal       →    │ • Ayollar      │ │ AKSIYA -50%   │    │
│ 🌸 Atirlar       →     │ • Bolalar      │ │ Kuz kolleksiya│    │
│ 💄 Kosmetika    →     │ • Sport        │ │ [Ko'rish →]   │    │
│ 📱 Smartfonlar →      │ • Outerwear   │ └───────────────┘    │
│ 🏠 Uy-ro'zg'or →      │                 │                       │
└────────────────────────┴─────────────────┴───────────────────────┘
```

- Max-width: 1100px
- Background: `rgba(255,255,255,0.98)` + backdrop-blur
- Animation: `slide-down 200ms ease-out`, transform-origin top
- Outside click → yopiladi

---

## 4. Hero Banner

### 4.1 Konsepsiya

**Stil:** webild.io-vari — clean, ko'p bo'sh joy, asimmetrik bento grid, gradient bg, glass element'lar.

**Konfiguratsiya:** Layout type — `split-bento`

- Chap 55% — TEKST + CTA
- O'ng 45% — INTERAKTIV BENTO (4 element)

### 4.2 Tashqi konteyner

```css
section.hero {
  background: var(--gradient-hero); /* qora→bordo */
  border-radius: var(--radius-2xl);
  padding: 64px 56px;
  position: relative;
  overflow: hidden;
}
/* Tablet */
@media (max-width: 1024px) {
  padding: 48px 32px;
}
/* Mobile */
@media (max-width: 640px) {
  padding: 40px 24px;
  border-radius: var(--radius-xl);
}
```

### 4.3 Background dekoratsiya (3 qatlam)

1. **SVG grid pattern** — 40×40 grid, stroke white opacity 0.04
2. **Blur orbs** — 2 ta, qarama-qarshi burchaklarda:
   - top-right: `bg-brand-bordeaux-bright/15 blur-3xl w-80 h-80`
   - bottom-left: `bg-brand-gold/8 blur-3xl w-72 h-72`
3. **Oltin highlight chiziq** — sinusoid SVG, opacity 0.08

### 4.4 Chap blok (matn)

**1. Premium badge** (yuqori):

```jsx
<span
  className="glass-light rounded-full px-3.5 py-1.5
                 text-[11px] font-bold uppercase tracking-[0.15em] text-white"
>
  <Sparkles size={12} className="text-brand-gold" />
  Premium marketplace · 2026
</span>
```

**2. Heading** (`display-2xl`, fade-up animation):

```
Minglab sotuvchilar.
Yagona platforma.
─────────────────
Sellobay'da hammasi.
```

- 1-2 qator: oq matn
- 3-qator: oltin gradient highlight — `bg-gradient-to-r from-brand-gold to-brand-gold-bright bg-clip-text text-transparent`

**3. Subtitle** (`body-lg`):

> O'zbekistondagi eng yirik B2C/C2C bozor. Tezkor yetkazib berish, 14 kun qaytarish, 100% kafolat.

**4. CTA tugmalari:**

| Tugma                         | Stil                                                                                   | Action       |
| ----------------------------- | -------------------------------------------------------------------------------------- | ------------ |
| **"Xarid qilishni boshlash"** | `bg-white text-brand-bordeaux`, h-12, px-7, rounded-full, shadow-xl                    | → `/catalog` |
| **"Sotuvchi bo'lish"**        | `border border-brand-gold/50 text-brand-gold bg-transparent`, h-12, px-7, rounded-full | → `/sell`    |

CTA hover: scale(1.02), shadow oshadi.

**5. Trust micro-stats** (CTA tagida, gorizontal 3 ta):

```
50,000+        2M+           99.2%
SOTUVCHI       MAHSULOT      ISHONCH
```

- Raqamlar: 24px font-black, oltin gradient
- Yorliqlar: 10px overline, white/70

### 4.5 O'ng blok — Bento Grid (4 element)

**Grid layout:**

```
┌────────┬────────────────┐
│        │                │
│   1    │       2        │  ← 1 tall (col-span-1, row-span-2)
│        │                │     2 wide (col-span-2, row-span-1)
│        ├────────────────┤
│        │                │
│        │       3        │  ← 3 wide short (col-span-2, row-span-1)
│        │                │
├────────┴────────────────┤
│                         │
│           4             │  ← 4 ultra-wide (col-span-3, row-span-1)
│                         │
└─────────────────────────┘
```

**Element turlari:**

| #   | Tarkib                                                        | O'lcham        | Behavior                |
| --- | ------------------------------------------------------------- | -------------- | ----------------------- |
| 1   | **Featured product** (tall card) — rasm + brand + narx        | aspect-[2/3]   | hover: scale image 1.05 |
| 2   | **Stats card** — "2,847 yangi sotuv bugun" + animated counter | aspect-[2.5/1] | counter pulse 3s        |
| 3   | **Category teaser** — emoji + nom + arrow                     | aspect-[2.5/1] | hover: bordo bg         |
| 4   | **Live feed** — "🔴 5 odam hozir ko'rmoqda: iPhone 16"        | aspect-[3/0.6] | typewriter effect       |

**Card stil (umumiy):**

- `rounded-xl` (16px)
- `backdrop-blur-md bg-white/10 border border-white/15`
- Transition: `transform 400ms ease-out, border 300ms`
- Hover: `border-brand-gold/40` + slight rotate (-2deg yoki +2deg)

### 4.6 Trust strip (Hero ostida, overlap'da)

Hero pastida 40px overlap qiluvchi oq strip:

```
┌────────────────────────────────────────────────────────────┐
│ 🚚 Tezkor       │ ↩️ 14 kun       │ 🛡️ 100% Asl   │ ⭐ Bonus│
│   yetkazib       │   qaytarish     │   mahsulot     │  ball  │
│   24 soat        │   savol-javobsiz │   distribyutor│ sodiq mij│
└────────────────────────────────────────────────────────────┘
```

- 4 ta card grid (mobile 2×2)
- Background: `bg-white shadow-lg border`
- Icon: `bg-brand-bordeaux/10 text-brand-bordeaux` h-11 w-11 rounded-xl
- Hover: `-translate-y-1` 200ms

---

## 5. Kategoriya bloklari

### 5.1 Konsepsiya

**Stil:** Bento varianti — har bir kategoriya o'z RANG IDENTITETI bilan, premium tall cards (2:3 aspect ratio).

### 5.2 Layout

- Desktop: 6 ustunli grid (`grid-cols-6 gap-4`)
- Tablet: 3 ustunli (`grid-cols-3 gap-3`)
- Mobile: 2 ustunli (`grid-cols-2 gap-3`)

### 5.3 Kategoriya kartochkasi

```
┌──────────────────────────┐
│                          │
│  [Background image]      │
│                          │
│        [Glass            │ ← top-right
│         "1,280+ ta"]    │
│                          │
│                          │
│  👕                       │
│  Kiyim-kechak            │ ← bottom-left
│  Ko'rish →   (on hover)  │
│                          │
│  ╔═══════════════╗ glow  │ ← bordo border on hover
└──────────────────────────┘
```

**Spetsifikatsiya:**

- `aspect-[2/3]`, `rounded-2xl`, `overflow-hidden`
- Background: `<Image fill />` lifestyle photo
- Gradient overlay: per-category color (pastdan tepaga)
- Glass badge: count "1,280+ mahsulot"
- Bottom content: emoji 28px + nom 16px font-bold
- Hover state:
  - `-translate-y-1` (200ms)
  - `scale(1.08)` rasmda (500ms)
  - "Ko'rish →" matni `opacity-0 → 1`
  - Border glow: `border-white/40` ichkari
- Entrance animation: `fade-up` staggered 80ms per index

### 5.4 Per-kategoriya rang xaritasi (yangilangan, bordo brendiga moslangan)

| Kategoriya  | Gradient                            | Shadow color       |
| ----------- | ----------------------------------- | ------------------ |
| Kiyim       | `from-[#3B1F35]/95` (qora-binafsha) | rgba(59,31,53,0.6) |
| Poyabzal    | `from-[#2D1B0A]/95` (chuqur kofe)   | rgba(45,27,10,0.6) |
| Atirlar     | `from-[#5C0015]/95` (deep wine)     | rgba(92,0,21,0.6)  |
| Kosmetika   | `from-[#8B0020]/95` (brand bordo)   | rgba(139,0,32,0.6) |
| Smartfonlar | `from-[#0A0A0C]/95` (qora)          | rgba(10,10,12,0.6) |
| Texnika     | `from-[#1F2937]/95` (graphite)      | rgba(31,41,55,0.6) |
| Uy-ro'zg'or | `from-[#3F2D1A]/95` (tutun)         | rgba(63,45,26,0.6) |
| Sport       | `from-[#0E2E1E]/95` (chuqur yashil) | rgba(14,46,30,0.6) |

### 5.5 Section header

```
Kategoriyalar
Sevimli toifangizdan boshlang                    Barchasi →
```

- Title: 30px font-black
- Description: 14px text-muted
- "Barchasi →" link o'ng tomonda, bordo, hover'da underline

---

## 6. Product Cards Grid

### 6.1 Card anatomiyasi

```
┌────────────────────────────────┐
│ ┌─SALE─┐ ┌──♡──┐ TOP-RIGHT     │
│ │ -30% │ │     │                │
│ └──────┘ └─────┘                │
│                                 │
│      [PRODUCT IMAGE]            │
│      (aspect-square)            │
│                                 │
│      [Tez ko'rish] (hover overlay)│
│                                 │
│ ┌─────────────────────────────┐ │ ← sliding from bottom on hover
│ │  🛍 Savatga qo'shish          │ │
│ └─────────────────────────────┘ │
├────────────────────────────────┤
│ NIKE                            │ ← brand overline
│ Nike Air Max 270 React          │ ← name (2 lines max)
│ ★★★★★ (124)                    │ ← rating
│ ─────────────────────           │
│ 1 790 000 so'm  (chiziqli)     │ ← old price
│ 1 490 000 so'm                  │ ← new price (bordo, bold, 20px)
│ ▓▓▓▓▓░░░░░ Faqat 4 qoldi!      │ ← low-stock bar (agar < 5)
└────────────────────────────────┘
```

### 6.2 O'lchamlar

| Property           | Value                             |
| ------------------ | --------------------------------- |
| Card border-radius | 20px                              |
| Border             | 1px solid #EAEAEC, hover: #C9A961 |
| Image area         | aspect-square, bg #FAFAFA         |
| Padding (body)     | 16px                              |
| Min height         | 380px desktop, 340px mobile       |

### 6.3 Badge spetsifikatsiyasi (yangilangan)

| Badge       | Background                                  | Text      | Use case                                 |
| ----------- | ------------------------------------------- | --------- | ---------------------------------------- |
| **NEW**     | `#1E40AF` (qoyu ko'k)                       | white     | Yangi tushgan (< 14 kun)                 |
| **SALE**    | `bg-gradient-bordeaux`                      | white     | Chegirma > 10%                           |
| **TOP**     | `linear-gradient(135deg, #C9A961, #E5C77A)` | `#5C0015` | Bestseller (rating > 4.7 & reviews > 50) |
| **PREMIUM** | `#0A0A0C` border-gold                       | gold      | Premium seller mahsuloti                 |
| **−X%**     | `bg-brand-bordeaux-deep`                    | white     | Discount foizi (badge ostida)            |

### 6.4 Interaktsiyalar

| Holat                  | Visual o'zgarish                                                                   |
| ---------------------- | ---------------------------------------------------------------------------------- |
| **Default**            | border #EAEAEC, no shadow                                                          |
| **Hover**              | `-translate-y-1.5`, shadow-card-hover, border-brand-gold, image scale 1.08 (400ms) |
| **Add-to-cart hover**  | Pastdan sliding bordo bar (translateY 100% → 0, 300ms)                             |
| **Quick view hover**   | Markazda glass pill "👁 Tez ko'rish" (opacity 0 → 1, scale 0.9 → 1)                |
| **Wishlist click**     | ♡ → ❤️ (qizil fill + scale pulse 1 → 1.3 → 1 200ms)                                |
| **Out of stock**       | opacity 0.7, qora overlay 30%, "Mavjud emas" pill markazda                         |
| **Loading (skeleton)** | shimmer gradient                                                                   |

### 6.5 Low-stock indicator

Faqat `stockLeft <= 5` bo'lganda:

```html
<div className="space-y-1.5">
  <span className="text-[11px] font-bold text-brand-bordeaux">
    Faqat {stockLeft} ta qoldi!
  </span>
  <div className="h-1 bg-surface-soft rounded-full overflow-hidden">
    <div className="h-full bg-gradient-to-r from-brand-bordeaux-bright to-brand-bordeaux
                    rounded-full transition-all duration-500"
         style={{width: `${(stockLeft/20)*100}%`}} />
  </div>
</div>
```

### 6.6 Grid layoutlari

| Konteynerda      | Mobile  | Tablet  | Desktop               |
| ---------------- | ------- | ------- | --------------------- |
| **Bestseller**   | 2 ustun | 3 ustun | 4 ustun               |
| **Catalog**      | 2 ustun | 3 ustun | 4 ustun (filtersiz 5) |
| **Sale section** | 2 ustun | 3 ustun | 4 ustun               |
| **Related**      | 2 ustun | 3 ustun | 4 ustun               |

Gap: 12px mobile, 16px tablet, 20px desktop.

---

## 7. Aksiyalar bo'limi

### 7.1 Tarkibi

```
┌─────────────────────────────────────────────────────────┐
│ [Flash Sale 🔥]                                          │
│                                                          │
│ ⚡ Aksiyada                Tugashiga:                    │
│ 70%gacha chegirma         [03] : [14] : [22] : [45]    │
│                            KUN  SOAT  DAQ  SON          │
│                                       Barchasini ko'rish→│
├─────────────────────────────────────────────────────────┤
│ ╔═══════════════════════════════════════════════════════╗│
│ ║  GRADIENT BANNER (qora→bordo)                         ║│
│ ║                                                        ║│
│ ║  ⚡ CHEKLANGAN VAQT                                    ║│
│ ║  −70%                          ┌─────┬─────┐         ║│
│ ║  gacha chegirma                │     │     │         ║│
│ ║  Eng yaxshi brendlar…          │ pic │ pic │         ║│
│ ║                                ├─────┼─────┤         ║│
│ ║  [Aksiyani ko'rish →]          │ pic │ pic │         ║│
│ ║                                └─────┴─────┘          ║│
│ ╚═══════════════════════════════════════════════════════╝│
├─────────────────────────────────────────────────────────┤
│ [Aksiya kartochkalar 4×N grid — qizil border + −X% badge]│
└─────────────────────────────────────────────────────────┘
```

### 7.2 Countdown timer

```
┌──────┬──────┬──────┬──────┐
│  03  │  14  │  22  │  45  │  ← raqamlar 32px font-black, oq, mono
│ KUN  │ SOAT │ DAQ  │ SON  │  ← yorliqlar 10px tracking-widest
└──────┴──────┴──────┴──────┘
```

- Har blok: `h-16 w-16 bg-brand-charcoal rounded-xl grid place-items-center`
- Yorliq: pastida, text-muted
- Separator: `:` symbol mono, bordo
- Tugagandan keyin: "Aksiya tugadi" yumshoq fade
- SSR-safe (skeleton until mounted)

### 7.3 Gradient banner

```css
background: linear-gradient(
  135deg,
  #5c0015 0%,
  /* deep wine */ #0a0a0c 50%,
  /* black */ #16161a 100%
); /* charcoal */
```

**SVG pattern overlay** (opacity 0.07):

- Diamond grid 60×60
- Stroke: white 0.8px

**Tarkib (chap 50%):**

- `glass` pill "⚡ CHEKLANGAN VAQT"
- H3: `−70%` 48px font-black
- 2-qator: "gacha chegirma" oltin gradient
- Subtitle: "Eng yaxshi brendlar — eng past narxlar"
- CTA: oq pill button

**Tarkib (o'ng 50%):**

- 2×2 product preview grid
- Har biri: 1:1 aspect, rounded-xl, glass border
- Past tomonida brand nomi + chegirma foizi

### 7.4 Aksiya kartochkalar

ProductCard, lekin qo'shimcha:

- **Border**: 2px solid `#8B0020/20`, hover'da `#8B0020`
- **−X% badge** har doim ko'rinadi (top-left, kattaroq: 12px font-black)
- **stockLeft prop** majburiy → progress bar ko'rinadi

---

## 8. Trust strip (qo'shimcha bo'lim)

### 8.1 Sellers showcase

Aksiyalar tagida, brendlar oldidan:

```
PREMIUM SOTUVCHILAR                              Hammasi →
─────────────────────────────────────────────────────────
┌──────┬──────┬──────┬──────┬──────┬──────┐
│Logo  │Logo  │Logo  │Logo  │Logo  │Logo  │  ← 6 ta seller card
│ ★4.9 │ ★4.8 │ ★4.9 │ ★4.7 │ ★4.8 │ ★4.9 │     scroll on mobile
└──────┴──────┴──────┴──────┴──────┴──────┘
```

Har bir card:

- `aspect-[4/3]`, `bg-white border rounded-xl`
- Seller logo (markaz)
- Rating + verified badge (oltin ✓)
- Hover: scale + oltin border
- Click → `/seller/{slug}`

### 8.2 Numbers strip

```
┌─────────────────────────────────────────────────────┐
│   50,000+         2M+         99.2%        24/7    │
│   SOTUVCHI       MAHSULOT     ISHONCH     YORDAM   │
└─────────────────────────────────────────────────────┘
```

- Background: `bg-gradient-to-r from-brand-black via-brand-charcoal to-brand-black`
- Padding: 48px vertical
- Raqamlar: 40px font-black, oltin gradient
- Yorliqlar: 12px tracking-widest text-white/60

---

## 9. Footer

### 9.1 Konfiguratsiya (3 qatlam)

```
┌─────────────────────────────────────────────────────────┐
│ NEWSLETTER STRIP — bordo gradient                       │
│ "Birinchi xabardor bo'ling — 10% kupon"                 │
│ [Email input] [Obuna bo'lish] (oq)                      │
├─────────────────────────────────────────────────────────┤
│ MAIN FOOTER — qora #0A0A0C                              │
│ ┌──Brand col──┬──Company──┬──Customer──┬──Sellers──┬──Legal──┐│
│ │  [S] Logo   │ Biz haqimi│ Yordam     │ Sotuvchi b│ Shartlar││
│ │  Sellobay   │ Karyera   │ Yetkazish  │ Qo'llanma │ Maxfiy. ││
│ │  Marketplace│ Press     │ Qaytarish  │ Komissiya │ Cookie  ││
│ │  ☎ ☉ 📍     │ Aloqa     │ FAQ        │ Qoidalar  │ Offer   ││
│ │  [ig fb tg yt]                                            ││
│ └─────────────┴───────────┴────────────┴───────────┴────────┘│
├─────────────────────────────────────────────────────────┤
│ PAYMENT STRIP — engil border                            │
│ TO'LOV USULLARI: [Click] [Payme] [Uzcard] [Humo] [Visa]│
│                              [📱 Ilovani yuklab olish] │
├─────────────────────────────────────────────────────────┤
│ © 2026 Sellobay LLC  ·  Made in Uzbekistan 🇺🇿         │
└─────────────────────────────────────────────────────────┘
```

### 9.2 Newsletter strip

```css
background: linear-gradient(135deg, #8b0020 0%, #b30029 50%, #5c0015 100%);
padding: 56px 0;
```

Tarkib (2 ustun):

- **Chap (text):**
  - H3: "Birinchi xabardor bo'ling" 32px oq font-black
  - P: "10% chegirma kupon va eksklyuziv aksiyalar — to'g'ridan-to'g'ri pochta'ngizga"
- **O'ng (form):**
  - `bg-white/95 backdrop-blur p-3 rounded-2xl shadow-2xl`
  - Email input + "Obuna" tugma (oltin gradient)

### 9.3 Main footer (dark)

**Background:** `#0A0A0C`
**Color:** white/85
**Padding:** 64px 0

**Brand ustuni** (4/12):

- Logo + Sellobay nom
- Description (1 jumla)
- Aloqa: telefon, email, manzil (iconlar bilan)
- Ijtimoiy tarmoqlar (4 ta circle button):
  - Instagram → `hover:text-pink-500`
  - Facebook → `hover:text-blue-500`
  - Telegram → `hover:text-sky-500`
  - YouTube → `hover:text-red-500`

**Boshqa ustunlar** (har biri 2/12):

- Title: 12px overline, white/50
- Linklar: 14px, white/70, `hover:text-brand-gold hover:translate-x-0.5`

### 9.4 Payment strip

- Background: `#0A0A0C` ust qatlami, border-top white/8
- Padding: 24px
- To'lov ikonalari:
  - Default: grayscale, opacity 0.4
  - Hover: full color, opacity 1, scale 1.05

### 9.5 Bottom strip

- `#0A0A0C` border-top white/8
- Copyright + Made in Uzbekistan
- Font: 12px white/50

---

## 10. Responsive breakpointlar

```css
/* Tailwind config */
sm:  640px   /* Mobile portrait > landscape */
md:  768px   /* Tablet portrait */
lg:  1024px  /* Tablet landscape > Desktop S */
xl:  1280px  /* Desktop M */
2xl: 1536px  /* Desktop L */

/* Container max-widths */
.container {
  max-width: 1320px;
  padding: 0 16px (mobile) | 24px (tablet) | 32px (desktop);
}
```

### Mobile-specific behaviorlar:

| Komponent      | Mobile o'zgarish                       |
| -------------- | -------------------------------------- |
| Top bar        | Yashiringan                            |
| Search         | Header'dan tashqarida, alohida qatorda |
| Nav bar        | Yashiringan, ☰ menu orqali sidebar    |
| Hero bento     | O'ng grid yashiringan, faqat text      |
| Product grid   | 2 ustunli                              |
| Footer columns | Accordion (collapse/expand)            |
| Mega menu      | Slide-in sheet (50% width)             |

---

## 11. Animatsiya tamoyillari

### 11.1 Timing tokens

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);

--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-base: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;
```

### 11.2 Standart animatsiyalar

| Animation        | Use                    | Spec                                         |
| ---------------- | ---------------------- | -------------------------------------------- |
| `fade-up`        | Hero h1, section enter | 600ms ease-out, translateY 20→0, opacity 0→1 |
| `slide-down`     | Mega menu, dropdown    | 200ms ease-out                               |
| `scale-in`       | Modal, dialog          | 200ms ease-out-back, scale 0.95→1            |
| `bounce-slow`    | 🔥 emoji               | 1.5s infinite, translateY 0→-4               |
| `shimmer`        | Skeleton loading       | 1.5s infinite, gradient sweep                |
| `flash-glow`     | Sale icons             | 2s infinite, brightness 1→1.5→1              |
| `pulse-bordeaux` | Notification badge     | 2s infinite, scale 1→1.1→1                   |

### 11.3 Hover effektlar

Standart card hover:

```css
.card {
  transition:
    transform 250ms ease-out,
    box-shadow 250ms ease-out,
    border-color 200ms;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--brand-gold);
}
```

### 11.4 Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 12. Accessibility (a11y)

### 12.1 Majburiy talablar

| #   | Talab                                                                                 |
| --- | ------------------------------------------------------------------------------------- |
| 1   | Kontrast WCAG AA (4.5:1 text, 3:1 UI) — bordo on white: 8.2:1 ✓                       |
| 2   | Focus ring barcha interaktiv element'larda: `outline: 2px solid #8B0020, offset: 2px` |
| 3   | `prefers-reduced-motion` qo'llab-quvvatlash                                           |
| 4   | Barcha rasm'larda `alt` matn                                                          |
| 5   | Form input'larda `<label>` yoki `aria-label`                                          |
| 6   | Tugma vs link to'g'ri ishlatish (semantic HTML)                                       |
| 7   | Keyboard navigation — Tab order mantiqiy                                              |
| 8   | Screen reader uchun `aria-live` (cart updates, toast)                                 |
| 9   | Skip link (header'dan oldin): "Asosiy mazmunga o'tish"                                |
| 10  | Heading hierarchy buzilmaydi (h1 → h2 → h3)                                           |

### 12.2 Component-specific

**Mega menu:**

- `aria-haspopup="true"`, `aria-expanded` toggle
- Escape key yopadi
- Focus trap inside

**Countdown:**

- `aria-live="polite"` countdown raqamlari uchun
- Tugaganda: `aria-live="assertive"` "Aksiya tugadi"

**Product card:**

- Wishlist tugma: `aria-label="Sevimlilarga qo'shish"` / `aria-pressed`
- Add to cart: `aria-label="Savatga qo'shish: {product name}"`

---

## 13. Implementation checklist

### Faza 1 — Foundation (Brand & Design System)

- [ ] Tailwind preset yangilash (bordeaux, black, gold tokenlari)
- [ ] CSS variables global'da
- [ ] Font import (Manrope, Inter, JetBrains Mono)
- [ ] Gradient utilities (`bg-gradient-bordeaux`, `bg-gradient-hero`, `bg-gradient-gold`)
- [ ] Logo SVG component yarating

### Faza 2 — Header

- [ ] 3-qatlamli struktura (top bar, main bar, nav bar)
- [ ] Sticky behavior + scroll shadow
- [ ] Animated search placeholder
- [ ] Mega menu (3-ustun dropdown)
- [ ] Mobile sheet menu

### Faza 3 — Hero

- [ ] Split layout (55/45)
- [ ] Gradient background + SVG pattern + blur orbs
- [ ] Bento grid 4 elementi (featured/stats/category/live)
- [ ] Premium badge, gold heading highlight
- [ ] Trust strip overlap

### Faza 4 — Categories

- [ ] 6 ta tall card grid
- [ ] Per-category gradient overlays
- [ ] Glass count badges
- [ ] Hover effekt (lift + scale + border glow)
- [ ] Staggered entrance animation

### Faza 5 — Product Cards

- [ ] Sliding add-to-cart
- [ ] Quick view overlay
- [ ] 5 badge turi (NEW/SALE/TOP/PREMIUM/discount)
- [ ] Low-stock progress bar
- [ ] Wishlist active state
- [ ] Out-of-stock overlay
- [ ] Skeleton loader

### Faza 6 — Sale section

- [ ] Countdown timer (SSR-safe)
- [ ] Gradient banner with SVG pattern
- [ ] 2×2 preview grid
- [ ] Bordo-bordered cards

### Faza 7 — Trust/Sellers

- [ ] Premium sellers showcase
- [ ] Numbers strip (animated counter)

### Faza 8 — Footer

- [ ] Newsletter strip (bordo gradient)
- [ ] 5-ustun footer (brand + 4 link)
- [ ] Payment methods with hover color
- [ ] Social links with brand-color hover

### Faza 9 — Polish

- [ ] Reduced motion support
- [ ] Focus rings everywhere
- [ ] Loading skeletons
- [ ] Toast notifications
- [ ] Empty states

### Faza 10 — QA

- [ ] Lighthouse: Performance > 90, A11y > 95, SEO > 95
- [ ] Mobile testing (iPhone SE, iPhone 14, Galaxy)
- [ ] Cross-browser (Chrome, Safari, Firefox, Edge)
- [ ] Keyboard navigation full pass
- [ ] Screen reader (NVDA/VoiceOver) test

---

## 14. Tailwind token misol

```js
// packages/ui/tailwind-preset.cjs (yangilangan parcha)
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          bordeaux: '#8B0020',
          'bordeaux-deep': '#5C0015',
          'bordeaux-bright': '#B30029',
          wine: '#6B0019',
          black: '#0A0A0C',
          charcoal: '#16161A',
          graphite: '#1F1F24',
          smoke: '#2A2A30',
          gold: '#C9A961',
          'gold-bright': '#E5C77A',
        },
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-bordeaux': 'linear-gradient(135deg, #8B0020 0%, #5C0015 50%, #1A0A0F 100%)',
        'gradient-hero':
          'linear-gradient(140deg, #0A0A0C 0%, #1A0A0F 35%, #5C0015 70%, #8B0020 100%)',
        'gradient-gold': 'linear-gradient(90deg, transparent 0%, #C9A961 50%, transparent 100%)',
      },
      boxShadow: {
        bordeaux: '0 12px 32px rgba(139,0,32,0.25)',
        'card-hover': '0 20px 60px -15px rgba(10,10,12,0.20)',
      },
    },
  },
};
```

---

**TZ versiyasi:** v2.0
**So'nggi yangilash:** 2026-06-09
**Mas'ul:** Frontend Lead
**Status:** Implementation-ready ✅
