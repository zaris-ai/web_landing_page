'use client';

import React from 'react';
import {
  IconArrowRight,
  IconCheck,
  IconChartLine,
  IconMapPin,
  IconPackage,
  IconUsersGroup,
} from '@tabler/icons-react';

import Reveal from '@/components/Reveal';

const APP_STORE_URL = 'https://apps.shopify.com/arka-smart-analyzer';

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/30 px-4 py-2 text-sm font-medium text-primary">
                <IconMapPin size={18} stroke={1.8} />
                Embedded analytics inside Shopify admin
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-5xl font-bold leading-tight text-text-primary lg:text-6xl xl:text-7xl">
                Customer, product, and sales insight
                <span className="gradient-text mt-2 block">
                  without exporting spreadsheets
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="max-w-2xl text-xl leading-relaxed text-text-secondary">
                Arka: Smart Analyzer gives Shopify merchants an embedded dashboard for sales
                performance, funnels, trends, customer segments, retention signals, product
                performance, tiers, bundles, and abandonment indicators.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl active:translate-y-0"
                  onClick={() => window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer')}
                >
                  Install on Shopify
                  <IconArrowRight size={22} stroke={1.9} />
                </button>

                <button
                  type="button"
                  className="rounded-xl border-2 border-accent bg-white px-8 py-4 text-lg font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/20 active:translate-y-0"
                  onClick={() =>
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Explore features
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="flex flex-wrap gap-6 text-sm text-text-secondary">
                {[
                  'Free pricing on the Shopify App Store',
                  'Works with Checkout',
                  'English language support',
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <IconCheck size={18} stroke={2} className="text-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="relative">
            <div className="overflow-hidden rounded-2xl border border-accent/30 bg-white shadow-2xl">
              <div className="flex items-center justify-between bg-gradient-to-r from-primary to-secondary px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-white/30" />
                  <div className="h-3 w-3 rounded-full bg-white/30" />
                  <div className="h-3 w-3 rounded-full bg-white/30" />
                </div>

                <span className="text-sm font-medium text-white">Arka dashboard</span>
              </div>

              <div className="space-y-4 bg-background p-8">
                <div className="animate-float rounded-xl border border-accent/20 bg-white p-6 shadow-md">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm text-text-secondary">Sales trend</div>
                    <IconChartLine size={22} stroke={1.8} className="text-primary" />
                  </div>

                  <div className="mb-2 text-3xl font-bold text-primary">+18.4%</div>
                  <div className="text-sm font-semibold text-green-600">
                    vs previous period
                  </div>
                </div>

                <div
                  className="animate-float rounded-xl border border-accent/20 bg-white p-6 shadow-md"
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm text-text-secondary">Customer segments</div>
                    <IconUsersGroup size={22} stroke={1.8} className="text-primary" />
                  </div>

                  <div className="mb-2 text-3xl font-bold text-primary">6 groups</div>
                  <div className="text-sm font-semibold text-text-secondary">
                    Retention signals from orders
                  </div>
                </div>

                <div
                  className="animate-float rounded-xl border border-accent/20 bg-white p-6 shadow-md"
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm text-text-secondary">Product tiers</div>
                    <IconPackage size={22} stroke={1.8} className="text-primary" />
                  </div>

                  <div className="mb-2 text-3xl font-bold text-primary">Top / Mid / Low</div>
                  <div className="text-sm font-semibold text-text-secondary">
                    Spot winners and underperformers
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}