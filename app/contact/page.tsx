import type { Metadata } from 'next';
import Link from 'next/link';

import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Arka: Smart Analyzer',
  description:
    'Contact Smart Store Analyzer for Arka: Smart Analyzer support, Shopify analytics questions, privacy resources, and app listing information.',
  alternates: {
    canonical: '/contact',
  },
};

const contactCards = [
  {
    title: 'Shopify App Listing',
    body: 'View Arka: Smart Analyzer on the Shopify App Store to review product details, installation information, pricing, screenshots, compatibility, and analytics features.',
    ctaLabel: 'Open listing',
    ctaHref: 'https://apps.shopify.com/arka-smart-analyzer',
  },
  {
    title: 'Privacy Policy',
    body: 'Review how Arka describes data access, processing, and privacy practices for Shopify merchants using the embedded analytics dashboard.',
    ctaLabel: 'Open privacy policy',
    ctaHref: 'https://api.arkaanalyzer.com/privacy-policy',
  },
  {
    title: 'Developer Details',
    body: 'Arka: Smart Analyzer is published by Smart Store Analyzer. Learn more about the product, its purpose, and the team behind the Shopify analytics app.',
    ctaLabel: 'About us',
    ctaHref: '/about',
  },
];

const inquiryTypes = [
  {
    title: 'Product questions',
    body: 'Ask about customer segmentation, retention insights, product performance, sales trends, funnel views, store KPIs, or how Arka fits into your Shopify workflow.',
  },
  {
    title: 'Support requests',
    body: 'Contact us if you need help understanding the app listing, reviewing setup information, checking available resources, or finding the correct support channel.',
  },
  {
    title: 'Business inquiries',
    body: 'Reach out for partnership, marketplace, or product-related questions connected to Smart Store Analyzer and Arka: Smart Analyzer.',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FCF5EE] text-slate-900">
      <section className="border-b border-[#FFC4C4] bg-gradient-to-b from-[#FCF5EE] to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-[#EE6983]/30 bg-[#EE6983]/10 px-4 py-1 text-sm font-medium text-[#850E35]">
                Contact us
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#850E35] md:text-6xl">
                Contact Smart Store Analyzer about Arka: Smart Analyzer
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
                Have a question about Arka: Smart Analyzer, the embedded Shopify
                analytics dashboard for customer, product, and sales insights?
                Use this page to reach the right resource for product questions,
                support requests, privacy information, and app listing details.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
                Arka helps Shopify merchants review sales performance, funnel
                activity, customer segments, retention signals, product
                performance, product tiers, bundle analytics, and store KPI
                trends from inside Shopify admin. If you are evaluating the app,
                checking support information, or need to understand how the
                analytics dashboard can support store decisions, this contact
                page gives you the correct next step.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {contactCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-[#FFC4C4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h2 className="text-xl font-semibold text-[#850E35]">
                  {item.title}
                </h2>

                <p className="mt-3 min-h-[120px] leading-7 text-slate-700">
                  {item.body}
                </p>

                <Link
                  href={item.ctaHref}
                  target={item.ctaHref.startsWith('http') ? '_blank' : undefined}
                  rel={
                    item.ctaHref.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="mt-5 inline-flex items-center rounded-xl bg-[#850E35] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  {item.ctaLabel}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[#FFC4C4] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <Reveal>
            <div>
              <span className="inline-flex rounded-full border border-[#EE6983]/30 bg-[#EE6983]/10 px-4 py-1 text-sm font-medium text-[#850E35]">
                Inquiry types
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#850E35] md:text-4xl">
                What you can contact us about
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                To keep support clear and useful, please include your Shopify
                store context, the page or feature you are asking about, and any
                relevant details from the Shopify App Store listing. This helps
                us route your message correctly.
              </p>

              <div className="mt-8 space-y-5">
                {inquiryTypes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#FFC4C4] bg-[#FCF5EE] p-5"
                  >
                    <h3 className="text-lg font-semibold text-[#850E35]">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-700">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#850E35] md:text-4xl">
                Send a message
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Use the form below for questions about Arka: Smart Analyzer,
                Shopify analytics, customer segmentation, product performance
                reports, sales trend analysis, app support, or privacy-related
                resources.
              </p>

              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal>
          <div className="rounded-3xl bg-[#850E35] px-8 py-10 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:px-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Prefer to review the product first?
              </h2>

              <p className="mt-4 text-base leading-7 text-white/85 md:text-lg">
                Start with the Shopify App Store listing to review Arka: Smart
                Analyzer’s product summary, screenshots, pricing, supported
                analytics features, support resources, privacy policy, and
                developer information before sending a message.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://apps.shopify.com/arka-smart-analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#850E35] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Open app listing
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#850E35]"
                >
                  Read about us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}