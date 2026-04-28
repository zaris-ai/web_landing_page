'use client';

import React, { useState } from 'react';
import type { Icon } from '@tabler/icons-react';
import {
  IconArrowAutofitRight,
  IconChartBar,
  IconChartDots,
  IconChartInfographic,
  IconChartLine,
  IconChartPie,
  IconClockHour4,
  IconCompass,
  IconDiamond,
  IconGift,
  IconLayersLinked,
  IconPackage,
  IconRepeat,
  IconScale,
  IconShoppingCartX,
  IconStairs,
  IconTargetArrow,
  IconTrophy,
  IconUsersGroup,
  IconUserSearch,
} from '@tabler/icons-react';

import Reveal from '@/components/Reveal';

import type { FeatureTab } from '@/types';

type FeatureItem = {
  icon: Icon;
  title: string;
  description: string;
};

type FeatureTabItem = Omit<FeatureTab, 'icon' | 'features'> & {
  icon: Icon;
  features: FeatureItem[];
};

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<string>('customer');

  const tabs: FeatureTabItem[] = [
    {
      id: 'customer',
      label: 'Customer Analytics',
      icon: IconUsersGroup,
      features: [
        {
          icon: IconLayersLinked,
          title: 'Customer segmentation',
          description:
            'Group customers from order history so you can identify meaningful cohorts and prioritize the right audience.',
        },
        {
          icon: IconRepeat,
          title: 'Retention signals',
          description:
            'Surface repeat-purchase patterns and loyalty behavior to understand who is returning and who is fading.',
        },
        {
          icon: IconDiamond,
          title: 'Lifetime value visibility',
          description:
            'Review customer value over time instead of relying on one-off order totals.',
        },
        {
          icon: IconUserSearch,
          title: 'Activity tracking',
          description:
            'Track customer behavior signals that help explain movement across segments and funnel performance.',
        },
        {
          icon: IconTargetArrow,
          title: 'Loyalty analysis',
          description:
            'Understand which customer groups show stronger repeat intent and where retention work is needed.',
        },
        {
          icon: IconChartDots,
          title: 'Order-based insight',
          description:
            'Use historical order data as the operating layer for customer analysis and decision-making.',
        },
      ],
    },
    {
      id: 'product',
      label: 'Product Intelligence',
      icon: IconPackage,
      features: [
        {
          icon: IconTrophy,
          title: 'Top and underperforming products',
          description:
            'See which products lead performance and which ones need action before they drag results down further.',
        },
        {
          icon: IconStairs,
          title: 'Product tier breakdowns',
          description:
            'Compare product groups by performance tier so prioritization becomes clearer.',
        },
        {
          icon: IconGift,
          title: 'Bundle analytics',
          description:
            'Review product combinations and bundled behavior to identify stronger merchandising opportunities.',
        },
        {
          icon: IconShoppingCartX,
          title: 'Abandonment indicators',
          description:
            'Spot product-level signals that suggest hesitation or drop-off in the path to purchase.',
        },
        {
          icon: IconChartBar,
          title: 'Product performance dashboard',
          description:
            'Bring revenue contribution and product movement into a single operating view.',
        },
        {
          icon: IconArrowAutofitRight,
          title: 'Period comparison',
          description:
            'Compare product behavior across time windows to understand whether changes are structural or temporary.',
        },
      ],
    },
    {
      id: 'sales',
      label: 'Sales Analytics',
      icon: IconChartLine,
      features: [
        {
          icon: IconChartInfographic,
          title: 'Sales trends',
          description:
            'Monitor how store performance changes over time instead of relying on isolated snapshots.',
        },
        {
          icon: IconCompass,
          title: 'Funnel views',
          description:
            'See where conversion weakens so you can focus on the stage that needs improvement.',
        },
        {
          icon: IconChartPie,
          title: 'Store KPI dashboard',
          description:
            'Use one dashboard to review the store-level metrics that matter most day to day.',
        },
        {
          icon: IconClockHour4,
          title: 'Historical analysis',
          description:
            'Review past performance to understand trend quality, momentum, and seasonality.',
        },
        {
          icon: IconScale,
          title: 'Compare periods',
          description:
            'Measure current results against prior periods to isolate real change and act faster.',
        },
      ],
    },
  ];

  const activeFeatures = tabs.find((tab) => tab.id === activeTab)?.features || [];

  return (
    <section id="features" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-text-primary lg:text-5xl">
              Analytics built around real merchant questions
            </h2>

            <p className="text-xl text-text-secondary">
              The front page now reflects the listed product scope instead of placeholder SaaS claims.
            </p>
          </div>
        </Reveal>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          {tabs.map((tab, index) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <Reveal key={tab.id} delay={index * 0.06}>
                <button
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-lg font-semibold transition-all duration-300 sm:w-auto
                    ${
                      isActive
                        ? 'scale-105 bg-primary text-white shadow-lg'
                        : 'border border-accent bg-background text-text-primary hover:-translate-y-0.5 hover:bg-accent/30'
                    }
                  `}
                >
                  <TabIcon size={26} stroke={1.8} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activeFeatures.map((feature, index) => {
            const FeatureIcon = feature.icon;

            return (
              <Reveal key={`${activeTab}-${feature.title}`} delay={index * 0.08}>
                <div className="group h-full rounded-2xl border border-accent/30 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <FeatureIcon size={30} stroke={1.8} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-text-primary">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}