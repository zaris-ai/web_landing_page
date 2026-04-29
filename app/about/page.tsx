import type { Metadata } from 'next';
import Link from 'next/link';

import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Us | Arka: Smart Analyzer Shopify Analytics App',
  description:
    'Learn about Arka: Smart Analyzer, a free embedded Shopify analytics app by Smart Store Analyzer for product performance, sales trends, funnel views, and store KPIs.',
  alternates: {
    canonical: '/about',
  },
};

const highlights = [
  {
    title: 'Product performance insights',
    description:
      'Review top-performing and underperforming products, product tiers, bundle signals, and abandonment indicators from your Shopify store data.',
  },
  {
    title: 'Sales trend analytics',
    description:
      'Track sales performance, funnel views, historical patterns, and store KPI movement so changes are easier to identify.',
  },
  {
    title: 'Embedded Shopify dashboard',
    description:
      'Use analytics inside Shopify admin instead of moving between disconnected spreadsheets, exports, or external reporting tools.',
  },
];

const values = [
  {
    title: 'Embedded, not detached',
    description:
      'Arka is designed to work inside Shopify admin so merchants can analyze store performance in the same environment where they manage their business.',
  },
  {
    title: 'Decision-ready reporting',
    description:
      'The purpose is not to add more charts. The goal is to surface practical signals about products, sales behavior, and store performance.',
  },
  {
    title: 'Focused analytics scope',
    description:
      'Arka focuses on product analytics, sales trends, funnel views, historical analysis, and store KPIs instead of becoming an overloaded general-purpose tool.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FCF5EE] text-slate-900">
      <section className="border-b border-[#FFC4C4] bg-gradient-to-b from-[#FCF5EE] to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-[#EE6983]/30 bg-[#EE6983]/10 px-4 py-1 text-sm font-medium text-[#850E35]">
                About Arka
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#850E35] md:text-6xl">
                Built to turn Shopify store data into product and sales insights
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
                Arka: Smart Analyzer is a free embedded Shopify analytics app
                published by Smart Store Analyzer. It helps merchants review
                product performance, sales trends, funnel views, historical
                analysis, and store KPIs directly inside Shopify admin.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
                The app is built for merchants who need clearer visibility into
                what is changing across their store. Instead of relying only on
                exports or disconnected reports, Arka summarizes practical
                signals from store activity so teams can identify performing
                products, weaker product areas, funnel movement, and sales
                patterns more efficiently.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://apps.shopify.com/arka-smart-analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#850E35] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  View on Shopify App Store
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-[#850E35] px-6 py-3 text-sm font-semibold text-[#850E35] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#850E35] hover:text-white"
                >
                  Contact us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-[#FFC4C4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h2 className="text-xl font-semibold text-[#850E35]">
                  {item.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-700">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[#FFC4C4] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#850E35] md:text-4xl">
                  Why Arka exists
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                  Shopify merchants already have access to store data, but raw
                  data does not automatically create clarity. Arka exists to make
                  important store signals easier to review: which products are
                  performing, which products may need attention, how sales trends
                  are moving, and where funnel activity may require optimization.
                </p>

                <p className="mt-5 max-w-3xl leading-8 text-slate-700">
                  The product is intentionally centered on product analytics,
                  historical analysis, funnel analysis, sales trends, and store
                  KPI reporting. This focused scope helps merchants evaluate
                  performance without turning every review into a manual
                  spreadsheet exercise.
                </p>

                <p className="mt-5 max-w-3xl leading-8 text-slate-700">
                  Arka is listed in the Shopify App Store under the Analytics
                  category and works with Checkout. The app listing describes
                  features such as product performance, product tiers, sales
                  trends, funnel views, and store KPI dashboards.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-3xl border border-[#FFC4C4] bg-[#FCF5EE] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold text-[#850E35]">
                  At a glance
                </h3>

                <dl className="mt-6 space-y-5 text-sm">
                  <div className="flex items-start justify-between gap-4 border-b border-[#FFC4C4] pb-4">
                    <dt className="font-medium text-slate-600">Product</dt>
                    <dd className="text-right font-semibold text-slate-900">
                      Arka: Smart Analyzer
                    </dd>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-[#FFC4C4] pb-4">
                    <dt className="font-medium text-slate-600">Developer</dt>
                    <dd className="text-right font-semibold text-slate-900">
                      Smart Store Analyzer
                    </dd>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-[#FFC4C4] pb-4">
                    <dt className="font-medium text-slate-600">Pricing</dt>
                    <dd className="text-right font-semibold text-slate-900">
                      Free
                    </dd>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-[#FFC4C4] pb-4">
                    <dt className="font-medium text-slate-600">Category</dt>
                    <dd className="text-right font-semibold text-slate-900">
                      Analytics
                    </dd>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-[#FFC4C4] pb-4">
                    <dt className="font-medium text-slate-600">Works with</dt>
                    <dd className="text-right font-semibold text-slate-900">
                      Checkout
                    </dd>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-[#FFC4C4] pb-4">
                    <dt className="font-medium text-slate-600">Language</dt>
                    <dd className="text-right font-semibold text-slate-900">
                      English
                    </dd>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-medium text-slate-600">Launched</dt>
                    <dd className="text-right font-semibold text-slate-900">
                      March 19, 2026
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#850E35] md:text-4xl">
              What guides the product
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Arka is built around practical Shopify reporting. Its role is to
              help merchants move from scattered store data to clearer product
              and sales decisions.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-[#FFC4C4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-semibold text-[#850E35]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[#FFC4C4] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <Reveal>
            <div className="rounded-3xl bg-[#850E35] px-8 py-10 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Want to learn more or get in touch?
                </h2>

                <p className="mt-4 text-base leading-7 text-white/85 md:text-lg">
                  Visit the Shopify App Store listing to review Arka: Smart
                  Analyzer, check the privacy policy for data access details, or
                  use the contact page for support and business questions.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#850E35] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                  >
                    Go to contact page
                  </Link>

                  <Link
                    href="https://api.arkaanalyzer.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#850E35]"
                  >
                    Privacy policy
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}