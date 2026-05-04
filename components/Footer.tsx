import React from 'react';
import type { Icon } from '@tabler/icons-react';
import {
  IconChartBar,
  IconCategory,
  IconCheck,
  IconDeviceAnalytics,
  IconExternalLink,
  IconHeadset,
  IconLanguage,
  IconPuzzle,
  IconShieldLock,
  IconShoppingCart,
  IconUserCode,
} from '@tabler/icons-react';

import Reveal from '@/components/Reveal';

import type { FooterSection } from '@/types';

const APP_STORE_URL = 'https://apps.shopify.com/arka-smart-analyzer';
const PRIVACY_URL = 'https://api.arkaanalyzer.com';
const ARKA_SMART_ANALYZER_URL = '/arka-smart-analyzer';

type FooterLink = {
  label: string;
  href: string;
  icon: Icon;
};

type FooterSectionWithIcons = Omit<FooterSection, 'links'> & {
  links: FooterLink[];
};

export default function Footer() {
  const footerSections: FooterSectionWithIcons[] = [
    {
      title: 'Product',
      links: [
        {
          label: 'Arka Smart Analyzer',
          href: ARKA_SMART_ANALYZER_URL,
          icon: IconDeviceAnalytics,
        },
        {
          label: 'Features',
          href: '#features',
          icon: IconChartBar,
        },
        {
          label: 'Overview',
          href: '#how-it-works',
          icon: IconDeviceAnalytics,
        },
        {
          label: 'Pricing',
          href: '#pricing',
          icon: IconCheck,
        },
        {
          label: 'Shopify App Store',
          href: APP_STORE_URL,
          icon: IconShoppingCart,
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          label: 'Privacy Policy',
          href: PRIVACY_URL,
          icon: IconShieldLock,
        },
        {
          label: 'Shopify Listing',
          href: APP_STORE_URL,
          icon: IconExternalLink,
        },
        {
          label: 'App Support',
          href: APP_STORE_URL,
          icon: IconHeadset,
        },
      ],
    },
    {
      title: 'App Details',
      links: [
        {
          label: 'Developer: Smart Store Analyzer',
          href: APP_STORE_URL,
          icon: IconUserCode,
        },
        {
          label: 'Category: Analytics',
          href: APP_STORE_URL,
          icon: IconCategory,
        },
        {
          label: 'Language: English',
          href: APP_STORE_URL,
          icon: IconLanguage,
        },
        {
          label: 'Works with Checkout',
          href: APP_STORE_URL,
          icon: IconShoppingCart,
        },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <IconDeviceAnalytics size={30} stroke={1.8} />
                </div>

                <span className="text-2xl font-bold">
                  Arka: Smart Analyzer
                </span>
              </div>

              <p className="mb-6 max-w-sm text-white/80">
                Embedded analytics for customers, products, and sales trends
                inside Shopify admin.
              </p>

              <div className="flex gap-4">
                <a
                  href={ARKA_SMART_ANALYZER_URL}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                  aria-label="Arka Smart Analyzer page"
                >
                  <IconDeviceAnalytics size={22} stroke={1.8} />
                </a>

                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                  aria-label="Shopify App Store"
                >
                  <IconShoppingCart size={22} stroke={1.8} />
                </a>
              </div>
            </div>
          </Reveal>

          {footerSections.map((section, sectionIndex) => (
            <Reveal key={section.title} delay={sectionIndex * 0.08}>
              <div>
                <h4 className="mb-4 text-lg font-bold">{section.title}</h4>

                <ul className="space-y-3">
                  {section.links.map((link) => {
                    const LinkIcon = link.icon;
                    const isExternal = link.href.startsWith('http');

                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="group inline-flex items-center gap-2 text-white/70 transition-colors duration-200 hover:text-white"
                        >
                          <LinkIcon
                            size={17}
                            stroke={1.8}
                            className="transition-transform duration-200 group-hover:scale-110"
                          />

                          <span>{link.label}</span>

                          {isExternal && (
                            <IconExternalLink
                              size={14}
                              stroke={1.8}
                              className="opacity-60"
                            />
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-sm text-white/60">
              © 2026 Arka: Smart Analyzer. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <IconCheck size={17} stroke={1.8} />
                Free listing
              </span>

              <span className="flex items-center gap-2">
                <IconPuzzle size={17} stroke={1.8} />
                Embedded in Shopify admin
              </span>

              <span className="flex items-center gap-2">
                <IconShoppingCart size={17} stroke={1.8} />
                Works with Checkout
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}