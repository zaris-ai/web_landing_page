import type { Metadata } from 'next';
import {
  IconArrowRight,
  IconChartBar,
  IconChartFunnel,
  IconChecklist,
  IconDashboard,
  IconDeviceAnalytics,
  IconPackage,
  IconReportAnalytics,
  IconSearch,
  IconShoppingBag,
  IconSparkles,
  IconTrendingUp,
  IconUsersGroup,
} from '@tabler/icons-react';

import Reveal from '@/components/Reveal';

const SITE_URL = 'https://web.arkaanalyzer.com';
const PAGE_URL = `${SITE_URL}/arka-smart-analyzer`;
const SHOPIFY_APP_URL = 'https://apps.shopify.com/arka-smart-analyzer';

const pageTitle =
  'Arka Smart Analyzer | Shopify Analytics, Product Analytics & Sales Dashboard App';

const pageDescription =
  'Arka Smart Analyzer is a Shopify analytics app for product analytics, sales analytics, customer analytics, funnel analytics, and smarter store dashboard decisions.';

const targetKeywords = [
  'arka smart analyzer',
  'arka shopify analytics',
  'arka analytics app',
  'arka dashboard app',
  'arka analyzer shopify',
  'smart store analyzer',
  'arka shopify app',
  'arka product analytics',
  'arka sales analytics',
  'arka customer analytics',
  'arka funnel analytics',
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...targetKeywords,
    'Shopify analytics app',
    'Shopify product analytics',
    'Shopify sales analytics',
    'Shopify dashboard app',
    'Shopify customer analytics',
    'Shopify funnel analytics',
    'ecommerce analytics dashboard',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: PAGE_URL,
    siteName: 'Arka Smart Analyzer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
};

export default function ArkaSmartAnalyzerPage() {
  const badges = [
    {
      icon: IconShoppingBag,
      label: 'Arka Shopify app',
    },
    {
      icon: IconDashboard,
      label: 'Arka dashboard app',
    },
    {
      icon: IconDeviceAnalytics,
      label: 'Smart store analyzer',
    },
  ];

  const analyticsAreas = [
    {
      icon: IconPackage,
      title: 'Arka product analytics',
      description:
        'Review product performance, spot underperforming items, compare product groups, and understand which catalog decisions can improve store results.',
    },
    {
      icon: IconTrendingUp,
      title: 'Arka sales analytics',
      description:
        'Track sales trends, compare performance over time, monitor revenue movement, and identify signals that help you act faster.',
    },
    {
      icon: IconUsersGroup,
      title: 'Arka customer analytics',
      description:
        'Understand customer behavior, segment activity, loyalty patterns, and retention signals without manually exporting Shopify data.',
    },
    {
      icon: IconChartFunnel,
      title: 'Arka funnel analytics',
      description:
        'See how customers move through the buying journey and detect friction points that can affect conversion and checkout performance.',
    },
  ];

  const visibilityPoints = [
    'Arka Smart Analyzer explains Shopify performance in a practical, merchant-friendly dashboard.',
    'Arka Shopify Analytics helps store owners understand products, sales, customers, and funnels in one place.',
    'The Arka analytics app reduces the need for manual spreadsheets and disconnected reporting workflows.',
    'Arka Analyzer Shopify reporting is designed for faster decisions, clearer trends, and better store visibility.',
  ];

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Arka Smart Analyzer',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: PAGE_URL,
    description: pageDescription,
    brand: {
      '@type': 'Brand',
      name: 'Arka Smart Analyzer',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    sameAs: [SHOPIFY_APP_URL],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Arka Smart Analyzer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arka Smart Analyzer is a Shopify analytics app that helps merchants review product analytics, sales analytics, customer analytics, funnel analytics, and store dashboard insights.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Arka Smart Analyzer built for Shopify?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arka Smart Analyzer is built as an Arka Shopify app for merchants who want clearer Shopify analytics and faster store performance decisions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does Arka Shopify Analytics help with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arka Shopify Analytics helps merchants understand product performance, sales trends, customer behavior, funnel activity, and dashboard KPIs.',
        },
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-background text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-gradient-to-br from-accent/20 via-background to-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {badges.map((badge, index) => {
                const BadgeIcon = badge.icon;

                return (
                  <Reveal key={badge.label} delay={index * 0.06}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-white/80 px-4 py-2 font-semibold text-primary shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                      <BadgeIcon size={18} stroke={1.8} />
                      {badge.label}
                    </span>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>

          <div className="mx-auto max-w-4xl text-center">
            <Reveal delay={0.08}>
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <IconChartBar size={36} stroke={1.8} />
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <h1 className="text-4xl font-bold leading-tight text-text-primary lg:text-6xl">
                Arka Smart Analyzer for Shopify analytics, product insights, and
                smarter store decisions
              </h1>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-text-secondary">
                Arka Smart Analyzer is a Shopify analytics app that helps merchants
                understand product performance, sales trends, customer behavior,
                and funnel activity from one focused dashboard.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={SHOPIFY_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  View Arka Shopify App
                  <IconArrowRight size={20} stroke={1.8} />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-accent bg-white px-7 py-3 font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Talk to Arka
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Reveal>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-semibold text-primary">
                  <IconSearch size={18} stroke={1.8} />
                  Arka analyzer Shopify visibility
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="text-3xl font-bold text-text-primary lg:text-5xl">
                  What is Arka Smart Analyzer?
                </h2>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                  Arka Smart Analyzer is built for Shopify merchants who want a
                  clearer way to read store performance. Instead of exporting
                  reports into spreadsheets, merchants can use the Arka analytics
                  app to review important store signals in a structured dashboard.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <p className="mt-5 text-lg leading-relaxed text-text-secondary">
                  The product works as a smart store analyzer for product
                  analytics, sales analytics, customer analytics, and funnel
                  analytics. It helps store owners see what is working, what is
                  weakening, and what needs attention next.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.24}>
              <div className="rounded-2xl border border-accent/30 bg-white p-8 shadow-xl lg:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <IconReportAnalytics size={32} stroke={1.8} />
                </div>

                <h3 className="text-2xl font-bold text-text-primary">
                  One Arka dashboard app for daily Shopify decisions
                </h3>

                <ul className="mt-6 space-y-5">
                  {visibilityPoints.map((point, index) => (
                    <Reveal key={point} delay={index * 0.06}>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <IconChecklist size={16} stroke={2} />
                        </span>

                        <span className="leading-relaxed text-text-secondary">
                          {point}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-accent/20 to-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <IconDeviceAnalytics size={36} stroke={1.8} />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-4xl font-bold text-text-primary lg:text-5xl">
                Arka Shopify Analytics across products, sales, customers, and
                funnels
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-xl leading-relaxed text-text-secondary">
                Arka Shopify Analytics gives merchants a practical operating view
                of their store. Each analytics area is designed to support clearer
                decisions without overwhelming the team with unnecessary reporting
                noise.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {analyticsAreas.map((area, index) => {
              const AreaIcon = area.icon;

              return (
                <Reveal key={area.title} delay={index * 0.08}>
                  <article className="h-full rounded-2xl border border-accent/30 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                      <AreaIcon size={26} stroke={1.8} />
                    </div>

                    <h3 className="text-2xl font-bold text-text-primary">
                      {area.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-text-secondary">
                      {area.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-2xl border border-accent/30 bg-white p-8 shadow-xl lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <IconSparkles size={32} stroke={1.8} />
                  </div>

                  <h2 className="text-3xl font-bold text-text-primary lg:text-4xl">
                    Why choose the Arka analytics app?
                  </h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
                  <p>
                    The Arka analytics app is made for merchants who need useful
                    answers quickly. It turns Shopify store activity into a
                    clearer dashboard experience so teams can understand what to
                    optimize next.
                  </p>

                  <p>
                    Arka Analyzer Shopify reporting helps merchants monitor
                    product performance, sales movement, customer behavior, and
                    funnel signals without depending on repeated spreadsheet
                    exports.
                  </p>

                  <p>
                    As an Arka Shopify app, the focus is not only reporting. The
                    focus is better visibility, faster decisions, and practical
                    store analysis for daily ecommerce operations.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold lg:text-5xl">
              Use Arka Smart Analyzer as your smart store analyzer for Shopify
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
              Bring Arka product analytics, Arka sales analytics, Arka customer
              analytics, and Arka funnel analytics into one dashboard built for
              Shopify merchants.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={SHOPIFY_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Open Shopify App Listing
                <IconArrowRight size={20} stroke={1.8} />
              </a>

              <a
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Read analytics articles
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-4xl font-bold text-text-primary lg:text-5xl">
              Arka Smart Analyzer FAQ
            </h2>
          </Reveal>

          <div className="mt-12 space-y-5">
            <Reveal delay={0.08}>
              <article className="rounded-2xl border border-accent/30 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-text-primary">
                  Is Arka Smart Analyzer a Shopify analytics app?
                </h3>

                <p className="mt-3 leading-relaxed text-text-secondary">
                  Yes. Arka Smart Analyzer is a Shopify analytics app for
                  product analytics, sales analytics, customer analytics, funnel
                  analytics, and store dashboard reporting.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.16}>
              <article className="rounded-2xl border border-accent/30 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-text-primary">
                  What does Arka Shopify Analytics help merchants understand?
                </h3>

                <p className="mt-3 leading-relaxed text-text-secondary">
                  Arka Shopify Analytics helps merchants understand what products
                  are performing, how sales are changing, how customers behave,
                  and where the funnel may need improvement.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.24}>
              <article className="rounded-2xl border border-accent/30 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-text-primary">
                  Who should use the Arka dashboard app?
                </h3>

                <p className="mt-3 leading-relaxed text-text-secondary">
                  The Arka dashboard app is useful for Shopify merchants,
                  ecommerce operators, growth teams, and store owners who want a
                  cleaner way to analyze store performance.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}