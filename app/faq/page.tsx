import type { Metadata } from 'next';
import {
  IconArrowRight,
  IconChecklist,
  IconChevronDown,
  IconDashboard,
  IconDeviceAnalytics,
  IconHelpCircle,
  IconReportAnalytics,
  IconSearch,
  IconShoppingBag,
  IconSparkles,
  IconUsersGroup,
} from '@tabler/icons-react';

const SITE_URL = 'https://web.arkaanalyzer.com';
const PAGE_URL = `${SITE_URL}/faq`;
const SHOPIFY_APP_URL = 'https://apps.shopify.com/arka-smart-analyzer';

const pageTitle = 'Frequently Asked Questions | Arka Smart Analyzer';

const pageDescription =
  'Find answers to frequently asked questions about Arka Smart Analyzer, Shopify analytics, product analytics, sales analytics, customer analytics, funnel analytics, and store dashboard reporting.';

const faqs = [
  {
    question: 'What is Arka Smart Analyzer?',
    answer:
      'Arka Smart Analyzer is a Shopify analytics app that helps merchants understand product performance, sales trends, customer behavior, funnel activity, and important store KPIs from a focused dashboard.',
  },
  {
    question: 'Who is Arka Smart Analyzer built for?',
    answer:
      'Arka Smart Analyzer is built for Shopify merchants, ecommerce operators, store owners, and growth teams that need clearer visibility into store performance without depending only on manual spreadsheet reporting.',
  },
  {
    question: 'Is Arka Smart Analyzer a Shopify app?',
    answer:
      'Yes. Arka Smart Analyzer is designed for Shopify merchants and is available through the Shopify App Store.',
  },
  {
    question: 'What does Arka Smart Analyzer help me analyze?',
    answer:
      'Arka Smart Analyzer helps you analyze products, sales, customers, funnels, store trends, and business KPIs so you can make better decisions about your Shopify store.',
  },
  {
    question: 'Does Arka Smart Analyzer include product analytics?',
    answer:
      'Yes. The app helps merchants review product performance, identify strong and weak products, compare catalog activity, and understand which products may need more attention.',
  },
  {
    question: 'Does Arka Smart Analyzer include sales analytics?',
    answer:
      'Yes. Arka Smart Analyzer helps merchants track sales movement, revenue trends, order activity, and performance changes over time.',
  },
  {
    question: 'Does Arka Smart Analyzer include customer analytics?',
    answer:
      'Yes. The app helps merchants understand customer behavior, customer activity, retention signals, and useful customer segments.',
  },
  {
    question: 'Does Arka Smart Analyzer include funnel analytics?',
    answer:
      'Yes. Arka Smart Analyzer helps merchants review funnel activity and understand where customers may move smoothly or face friction during the buying journey.',
  },
  {
    question: 'Why should I use a dedicated Shopify analytics app?',
    answer:
      'A dedicated Shopify analytics app gives you a more focused view of store performance. It can help reduce manual reporting, improve visibility, and make daily ecommerce decisions faster.',
  },
  {
    question: 'Can Arka Smart Analyzer replace manual spreadsheets?',
    answer:
      'Arka Smart Analyzer can reduce the need for repeated spreadsheet exports by giving merchants a structured dashboard for important store analytics. Some teams may still use spreadsheets for custom offline analysis.',
  },
  {
    question: 'Is Arka Smart Analyzer useful for small Shopify stores?',
    answer:
      'Yes. Small stores can use Arka Smart Analyzer to understand which products are performing, how sales are changing, and where customer behavior needs attention.',
  },
  {
    question: 'Is Arka Smart Analyzer useful for growing Shopify stores?',
    answer:
      'Yes. Growing stores often need better reporting because more products, orders, and customers make manual analysis harder. Arka Smart Analyzer helps organize this data into clearer insights.',
  },
  {
    question: 'What makes Arka Smart Analyzer different?',
    answer:
      'Arka Smart Analyzer focuses on practical store visibility. It brings product analytics, sales analytics, customer analytics, and funnel analytics into one dashboard experience for Shopify merchants.',
  },
  {
    question: 'Do I need technical knowledge to use Arka Smart Analyzer?',
    answer:
      'No. The app is designed to help merchants read store performance without requiring technical analytics knowledge.',
  },
  {
    question: 'Can Arka Smart Analyzer help me find underperforming products?',
    answer:
      'Yes. Product analytics can help you identify products that may need pricing changes, better promotion, improved positioning, or closer review.',
  },
  {
    question: 'Can Arka Smart Analyzer help me understand best-selling products?',
    answer:
      'Yes. The app helps you review product performance so you can see which items are contributing strongly to store results.',
  },
  {
    question: 'Can Arka Smart Analyzer help with store growth decisions?',
    answer:
      'Yes. By showing clearer trends across products, sales, customers, and funnels, Arka Smart Analyzer can support better decisions about marketing, merchandising, and store operations.',
  },
  {
    question: 'Does Arka Smart Analyzer show historical analytics?',
    answer:
      'Arka Smart Analyzer is designed to help merchants review performance over time, so they can compare trends and understand how store activity changes.',
  },
  {
    question: 'Does Arka Smart Analyzer help with customer retention analysis?',
    answer:
      'Yes. Customer analytics can help merchants review customer activity and identify signals related to repeat behavior and retention.',
  },
  {
    question: 'Can I use Arka Smart Analyzer for daily reporting?',
    answer:
      'Yes. The dashboard is useful for regular performance checks, daily decision-making, and recurring store analysis.',
  },
  {
    question: 'Can Arka Smart Analyzer help reduce reporting noise?',
    answer:
      'Yes. The app is designed to focus on useful analytics areas instead of overwhelming merchants with disconnected or unclear data.',
  },
  {
    question: 'Where can I install Arka Smart Analyzer?',
    answer:
      'You can view and install Arka Smart Analyzer from the Shopify App Store listing.',
  },
  {
    question: 'Where can I learn more about Arka Smart Analyzer?',
    answer:
      'You can learn more from the Arka Smart Analyzer website, the Shopify App Store listing, and the educational articles available on the blog.',
  },
  {
    question: 'How can I contact the Arka Smart Analyzer team?',
    answer:
      'You can contact the Arka Smart Analyzer team through the contact page on the website.',
  },
];

const faqCategories = [
  {
    icon: IconShoppingBag,
    title: 'About the app',
    description:
      'Understand what Arka Smart Analyzer is, who it is built for, and how it supports Shopify merchants.',
  },
  {
    icon: IconReportAnalytics,
    title: 'Analytics features',
    description:
      'Learn how the app helps with product analytics, sales analytics, customer analytics, funnel analytics, and store KPIs.',
  },
  {
    icon: IconDashboard,
    title: 'Dashboard usage',
    description:
      'See how merchants can use the dashboard for daily reporting, store visibility, and better decision-making.',
  },
  {
    icon: IconUsersGroup,
    title: 'Support and access',
    description:
      'Find answers about installation, learning resources, contact options, and how to get started.',
  },
];

const coveredTopics = [
  'What Arka Smart Analyzer does',
  'Who should use the app',
  'Product analytics questions',
  'Sales analytics questions',
  'Customer analytics questions',
  'Funnel analytics questions',
  'Dashboard and reporting questions',
  'Shopify App Store access',
  'Support and contact information',
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'Arka Smart Analyzer FAQ',
    'Arka Smart Analyzer questions',
    'Shopify analytics FAQ',
    'Shopify analytics app FAQ',
    'Shopify product analytics questions',
    'Shopify sales analytics questions',
    'Shopify customer analytics questions',
    'Shopify dashboard app FAQ',
    'Arka Shopify app support',
    'Arka analytics app help',
    'Arka Smart Analyzer',
    'Arka Shopify analytics',
    'Arka analytics app',
    'Arka dashboard app',
    'Shopify product analytics',
    'Shopify sales analytics',
    'Shopify customer analytics',
    'Shopify funnel analytics',
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

export default function FrequentlyAskedQuestionsPage() {
  const badges = [
    {
      icon: IconHelpCircle,
      label: 'Frequently Asked Questions',
    },
    {
      icon: IconDeviceAnalytics,
      label: 'Shopify analytics help',
    },
    {
      icon: IconSparkles,
      label: 'Arka Smart Analyzer support',
    },
  ];

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    url: PAGE_URL,
    description: pageDescription,
    publisher: {
      '@type': 'Organization',
      name: 'Arka Smart Analyzer',
      url: SITE_URL,
      sameAs: [SHOPIFY_APP_URL],
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="overflow-hidden bg-background text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-gradient-to-br from-accent/20 via-background to-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {badges.map((badge) => {
              const BadgeIcon = badge.icon;

              return (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-accent bg-white/80 px-4 py-2 font-semibold text-primary shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <BadgeIcon size={18} stroke={1.8} />
                  {badge.label}
                </span>
              );
            })}
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconHelpCircle size={36} stroke={1.8} />
            </div>

            <h1 className="text-4xl font-bold leading-tight text-text-primary lg:text-6xl">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-text-secondary">
              Find clear answers about Arka Smart Analyzer, Shopify analytics,
              product performance, sales reporting, customer insights, funnel
              analytics, and dashboard usage.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#faq"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Read Questions
                <IconArrowRight size={20} stroke={1.8} />
              </a>

              <a
                href={SHOPIFY_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent bg-white px-7 py-3 font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                View Shopify App
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-semibold text-primary">
                <IconSearch size={18} stroke={1.8} />
                Quick answers
              </span>

              <h2 className="text-3xl font-bold text-text-primary lg:text-5xl">
                Answers about Arka Smart Analyzer and Shopify analytics
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                This FAQ page explains how Arka Smart Analyzer helps Shopify
                merchants review store performance, understand analytics, and
                make clearer decisions from one focused dashboard.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-text-secondary">
                Use these answers to learn what the app does, which analytics
                areas it supports, who it is built for, and how it can help
                reduce manual reporting work.
              </p>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-white p-8 shadow-xl lg:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <IconReportAnalytics size={32} stroke={1.8} />
              </div>

              <h3 className="text-2xl font-bold text-text-primary">
                What you can find on this page
              </h3>

              <ul className="mt-6 space-y-5">
                {[
                  'Questions about Arka Smart Analyzer and Shopify analytics.',
                  'Answers about product, sales, customer, and funnel reporting.',
                  'Guidance for merchants who want clearer store visibility.',
                  'Links to the Shopify App Store listing and support pages.',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <IconChecklist size={16} stroke={2} />
                    </span>

                    <span className="leading-relaxed text-text-secondary">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-accent/20 to-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconDeviceAnalytics size={36} stroke={1.8} />
            </div>

            <h2 className="text-4xl font-bold text-text-primary lg:text-5xl">
              FAQ topics
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-text-secondary">
              The questions are grouped around the most important topics for
              Shopify merchants who want better analytics and dashboard
              visibility.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {faqCategories.map((category) => {
              const CategoryIcon = category.icon;

              return (
                <article
                  key={category.title}
                  className="h-full rounded-2xl border border-accent/30 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                    <CategoryIcon size={26} stroke={1.8} />
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary">
                    {category.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-text-secondary">
                    {category.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconChecklist size={36} stroke={1.8} />
            </div>

            <h2 className="text-4xl font-bold text-text-primary lg:text-5xl">
              Questions covered in this FAQ
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-text-secondary">
              This page focuses on practical questions that help merchants
              understand the app before using it for Shopify analytics and
              reporting.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coveredTopics.map((item) => (
              <article
                key={item}
                className="h-full rounded-2xl border border-accent/30 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <IconChecklist size={16} stroke={2} />
                  </span>

                  <p className="font-semibold leading-relaxed text-text-primary">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Get clearer answers before choosing your Shopify analytics app
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            Learn how Arka Smart Analyzer supports product analytics, sales
            analytics, customer insights, funnel visibility, and better dashboard
            reporting for Shopify merchants.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#faq"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore FAQ
              <IconArrowRight size={20} stroke={1.8} />
            </a>

            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Read articles
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconSparkles size={36} stroke={1.8} />
            </div>

            <h2 className="text-4xl font-bold text-text-primary lg:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-text-secondary">
              Browse common questions about Arka Smart Analyzer, Shopify
              analytics, dashboard reporting, and store performance insights.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const inputId = `faq-item-${index}`;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-accent/30 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <input
                    id={inputId}
                    type="radio"
                    name="faq-accordion"
                    defaultChecked={index === 0}
                    className="peer sr-only"
                  />

                  <label
                    htmlFor={inputId}
                    className="flex cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-semibold leading-relaxed text-text-primary">
                      {faq.question}
                    </span>

                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 peer-checked:rotate-180">
                      <IconChevronDown size={20} stroke={2} />
                    </span>
                  </label>

                  <div className="max-h-0 overflow-hidden px-6 transition-all duration-300 peer-checked:max-h-96">
                    <p className="border-t border-accent/20 py-5 leading-relaxed text-text-secondary">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-accent/20 to-background px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-accent/30 bg-white p-8 text-center shadow-xl lg:p-12">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconShoppingBag size={36} stroke={1.8} />
            </div>

            <h2 className="text-4xl font-bold text-text-primary lg:text-5xl">
              Ready to explore Arka Smart Analyzer?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-text-secondary">
              View the Shopify App Store listing or visit the Arka Smart
              Analyzer page to learn more about analytics features, dashboard
              reporting, and store performance insights.
            </p>

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
                href="/arka-smart-analyzer"
                className="inline-flex items-center gap-2 rounded-full border border-accent bg-white px-7 py-3 font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                Arka Smart Analyzer page
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}