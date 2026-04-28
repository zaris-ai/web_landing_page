import type { Icon } from '@tabler/icons-react';
import {
  IconChartBar,
  IconCurrencyDollar,
  IconDeviceAnalytics,
  IconShoppingCart,
} from '@tabler/icons-react';

import Reveal from '@/components/Reveal';

import type { SocialProofMetric } from '@/types';

type SocialProofItem = SocialProofMetric & {
  icon: Icon;
};

export default function SocialProofBar() {
  const stats: SocialProofItem[] = [
    {
      value: 'Free',
      label: 'Pricing',
      icon: IconCurrencyDollar,
    },
    {
      value: 'Embedded',
      label: 'Inside Shopify Admin',
      icon: IconDeviceAnalytics,
    },
    {
      value: 'Checkout',
      label: 'Works With',
      icon: IconShoppingCart,
    },
    {
      value: 'Analytics',
      label: 'Category',
      icon: IconChartBar,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-primary to-secondary px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;

            return (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="group text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/20">
                    <StatIcon size={30} stroke={1.8} />
                  </div>

                  <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                    {stat.value}
                  </div>

                  <div className="text-sm font-medium text-white/80 md:text-base">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}