'use client';

import React from 'react';
import type { Icon } from '@tabler/icons-react';
import {
  IconCalendar,
  IconChartLine,
  IconCurrencyDollar,
  IconDeviceAnalytics,
  IconLanguage,
  IconPackage,
  IconShoppingCart,
  IconUsersGroup,
} from '@tabler/icons-react';

import Reveal from '@/components/Reveal';

const APP_STORE_URL = 'https://apps.shopify.com/arka-smart-analyzer';

type PricingFeature = {
  icon: Icon;
  label: string;
};

export default function PricingSection() {
  const features: PricingFeature[] = [
    {
      icon: IconDeviceAnalytics,
      label: 'Embedded analytics dashboard inside Shopify admin',
    },
    {
      icon: IconUsersGroup,
      label: 'Customer segmentation, loyalty, and lifetime-value views',
    },
    {
      icon: IconPackage,
      label: 'Product performance, tiers, bundle analysis, and abandonment indicators',
    },
    {
      icon: IconChartLine,
      label: 'Sales trends, funnel views, store KPI dashboard, and historical analysis',
    },
    {
      icon: IconShoppingCart,
      label: 'Works with Checkout',
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-background to-white px-6 py-20"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-text-primary lg:text-5xl">
              Simple pricing aligned to the Shopify listing
            </h2>

            <p className="mx-auto max-w-3xl text-xl text-text-secondary">
              The Shopify App Store currently shows Arka: Smart Analyzer as free. This section now
              reflects that instead of unsupported subscription tiers and trial claims.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mb-12 max-w-2xl">
            <div className="relative rounded-3xl border-2 border-primary bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl md:p-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-sm font-bold text-primary shadow-lg">
                CURRENT LISTING
              </div>

              <div className="mb-8 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <IconCurrencyDollar size={38} stroke={1.8} />
                </div>

                <h3 className="mb-2 text-3xl font-bold">Free</h3>

                <div className="mb-3 text-6xl font-bold">$0</div>

                <p className="text-lg text-white/90">
                  Install the app and explore the embedded analytics experience from Shopify.
                </p>
              </div>

              <ul className="mb-8 space-y-4">
                {features.map((feature, index) => {
                  const FeatureIcon = feature.icon;

                  return (
                    <Reveal key={feature.label} delay={index * 0.06}>
                      <li className="flex items-start gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                          <FeatureIcon size={17} stroke={1.9} />
                        </span>

                        <span className="text-white/90">{feature.label}</span>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>

              <button
                type="button"
                className="w-full rounded-xl bg-white py-4 text-lg font-bold text-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-xl active:translate-y-0"
                onClick={() => window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer')}
              >
                View listing and install
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-accent bg-accent/20 p-6 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
              <IconShoppingCart size={26} stroke={1.8} />
            </span>

            <strong className="text-lg text-primary">Works with Checkout</strong>

            <span className="text-text-secondary">•</span>

            <span className="inline-flex items-center gap-2 text-text-secondary">
              <IconLanguage size={19} stroke={1.8} />
              Language: English
            </span>

            <span className="text-text-secondary">•</span>

            <span className="inline-flex items-center gap-2 text-text-secondary">
              <IconCalendar size={19} stroke={1.8} />
              Launched March 19, 2026
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}