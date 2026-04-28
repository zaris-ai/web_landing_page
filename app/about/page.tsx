import type { Metadata } from 'next';
import Link from 'next/link';

import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Us | Arka: Smart Analyzer',
  description:
    'Learn about Arka: Smart Analyzer, an embedded Shopify analytics app built to help merchants understand customers, products, and sales trends.',
};

const highlights = [
  {
    title: 'Customer insights',
    description:
      'Understand customer segments, retention signals, and order-driven behavior without exporting spreadsheets.',
  },
  {
    title: 'Product analytics',
    description:
      'Track top and underperforming products, product tiers, bundles, and abandonment indicators in one place.',
  },
  {
    title: 'Sales visibility',
    description:
      'Review sales trends, funnel views, and key store KPIs to spot changes and decide what to optimize next.',
  },
];

const values = [
  {
    title: 'Embedded, not detached',
    description:
      'Arka is designed to work inside Shopify admin so merchants can analyze store performance in the same place they operate the business.',
  },
  {
    title: 'Decision-ready dashboards',
    description:
      'The goal is not just more charts. The goal is clearer signals on what is changing in the store and where to act next.',
  },
  {
    title: 'Focused analytics',
    description:
      'Arka is deliberately centered on customers, products, and sales trends instead of trying to become an overloaded general-purpose platform.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FCF5EE] text-slate-900">
      <section className="border-b border-[#FFC4C4] bg-gradient-to-b from-[#FCF5EE] to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-[#EE6983]/30 bg-[#EE6983]/10 px-4 py-1 text-sm font-medium text-[#850E35]">
                About Arka
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#850E35] md:text-6xl">
                Built to turn Shopify store data into clear, usable insight
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
                Arka: Smart Analyzer helps merchants understand what is happening
                across customers, products, and sales trends through an embedded
                analytics experience inside Shopify admin.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
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
                  Many merchants already have data, but that does not mean they
                  have clarity. Arka is designed to reduce that gap by surfacing
                  the store signals that matter most: who is buying, what is
                  performing, what is weakening, and how sales behavior is
                  shifting over time.
                </p>

                <p className="mt-5 max-w-3xl leading-8 text-slate-700">
                  The product is built around practical analysis rather than
                  spreadsheet-heavy workflows. The aim is to help merchants review
                  performance faster, compare periods more easily, and move from
                  observation to action with less friction.
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
                    <dt className="font-medium text-slate-600">Pricing</dt>
                    <dd className="text-right font-semibold text-slate-900">
                      Free
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
                    <dt className="font-medium text-slate-600">Developer</dt>
                    <dd className="text-right font-semibold text-slate-900">
                      Smart Store Analyzer
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
                  Visit the app listing, review the privacy policy, or use the
                  contact page to present support or partnership questions.
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