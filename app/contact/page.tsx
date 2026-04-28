import type { Metadata } from 'next';
import Link from 'next/link';

import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Arka: Smart Analyzer',
  description:
    'Contact Smart Store Analyzer about Arka: Smart Analyzer, the embedded Shopify analytics dashboard for customer, product, and sales insights.',
};

const contactCards = [
  {
    title: 'Shopify App Listing',
    body: 'Review the app listing, product summary, and installation details on the Shopify App Store.',
    ctaLabel: 'Open listing',
    ctaHref: 'https://apps.shopify.com/arka-smart-analyzer',
  },
  {
    title: 'Privacy Policy',
    body: 'Review how data access and processing are described for the app.',
    ctaLabel: 'Open privacy policy',
    ctaHref: 'https://api.arkaanalyzer.com/privacy-policy',
  },
  {
    title: 'Developer Details',
    body: 'Arka is published by Smart Store Analyzer and listed with a support address in Istanbul, Turkey.',
    ctaLabel: 'About us',
    ctaHref: '/about',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FCF5EE] text-slate-900">
      <section className="border-b border-[#FFC4C4] bg-gradient-to-b from-[#FCF5EE] to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-[#EE6983]/30 bg-[#EE6983]/10 px-4 py-1 text-sm font-medium text-[#850E35]">
                Contact us
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#850E35] md:text-6xl">
                Reach out about Arka: Smart Analyzer
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
                Use this page to direct support, product, or business inquiries to
                the right place. This version is front-end only and keeps the
                contact experience aligned with the current landing page design.
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

                <p className="mt-3 min-h-[96px] leading-7 text-slate-700">
                  {item.body}
                </p>

                <Link
                  href={item.ctaHref}
                  target={item.ctaHref.startsWith('http') ? '_blank' : undefined}
                  rel={item.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
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
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#850E35] md:text-4xl">
                Send a message
              </h2>

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
                Start with the Shopify App Store listing to understand the
                product, capabilities, and compatibility.
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