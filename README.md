# ShopInsights Landing Page - Next.js 14 + TypeScript + Tailwind CSS

## 🚀 Project Overview

This is a complete conversion of the ShopInsights landing page from React + Vite to **Next.js 14** with **TypeScript** and **Tailwind CSS 4.0**. The landing page showcases a modern, professional design for a Shopify analytics SaaS application.

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.0 (CSS-first configuration)
- **React**: React 19
- **Node**: 18+ required

## 🎨 Design System

The design follows a **Soft Pink Professional** theme:

```
Primary Color: #850E35 (Deep Rose)
Secondary Color: #EE6983 (Coral Pink)
Accent Color: #FFC4C4 (Blush)
Background: #FCF5EE (Cream)
```

## 📂 Project Structure

```
shopify-landing-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Tailwind v4 + Design system
├── components/
│   ├── Navigation.tsx      # Sticky header with mobile menu
│   ├── HeroSection.tsx     # Hero with CTA + dashboard mockup
│   ├── SocialProofBar.tsx  # 4-metric stats bar
│   ├── ProblemStatement.tsx # 3 pain point cards
│   ├── SolutionOverview.tsx # Value proposition
│   ├── FeaturesSection.tsx  # Tabbed feature grid
│   ├── PricingSection.tsx   # 3-tier pricing
│   └── Footer.tsx          # Full footer with links
├── types/
│   └── index.ts            # TypeScript interfaces
└── README.md
```

## 🧩 8 Landing Page Sections

1. **Navigation** - Sticky header with scroll effect
2. **HeroSection** - Headline + CTA + animated dashboard mockup
3. **SocialProofBar** - 4 key metrics
4. **ProblemStatement** - 3 pain points
5. **SolutionOverview** - Value proposition
6. **FeaturesSection** - 3 tabs, 18 features
7. **PricingSection** - 3 pricing tiers
8. **Footer** - Links + social + trust badges

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

## 🌈 Tailwind CSS 4.0 Configuration

**Important**: Tailwind v4 uses CSS-first configuration. No `tailwind.config.ts` needed!

All theme customization is in `app/globals.css`:

```css
@import "tailwindcss";

@theme inline {
  --color-primary: #850E35;
  --color-secondary: #EE6983;
  /* ... custom variables */
}
```

## 📱 Fully Responsive

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## ⚡ Features

✅ TypeScript type safety
✅ Server & Client components
✅ SEO optimized (Next.js Metadata API)
✅ Smooth scroll animations
✅ Interactive tabs & toggles
✅ Glass morphism effects
✅ Custom scrollbar
✅ Gradient text effects
✅ Floating animations

## 🔄 Key Differences from React Version

| Feature | React + Vite | Next.js 14 |
|---------|-------------|------------|
| Styling | CSS Modules | Tailwind Utilities |
| Types | PropTypes | TypeScript |
| Routing | React Router | App Router |
| Config | tailwind.config.js | @theme inline CSS |

## 📦 Build for Production

```bash
npm run build
npm run start
```

---

**Built with Next.js 14, TypeScript, and Tailwind CSS 4.0** 🚀
