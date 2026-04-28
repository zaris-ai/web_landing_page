import React from 'react';
import type { Icon } from '@tabler/icons-react';
import {
  IconPackage,
  IconTrendingDown,
  IconUsersGroup,
} from '@tabler/icons-react';

import Reveal from '@/components/Reveal';

import type { PainPoint } from '@/types';

type ProblemItem = Omit<PainPoint, 'icon'> & {
  icon: Icon;
  color: string;
  iconColor: string;
  iconBg: string;
};

export default function ProblemStatement() {
  const problems: ProblemItem[] = [
    {
      icon: IconTrendingDown,
      title: 'Trends are hard to spot early',
      description:
        'Sales changes, funnel shifts, and retention signals often stay buried in raw reports until performance already moves in the wrong direction.',
      color: 'border-red-600',
      iconColor: 'text-red-600',
      iconBg: 'bg-red-50',
    },
    {
      icon: IconUsersGroup,
      title: 'Customer segments stay unclear',
      description:
        'Without a clear view of segments, loyalty, and lifetime value, it is harder to decide which customers to retain, reactivate, or prioritize.',
      color: 'border-amber-500',
      iconColor: 'text-amber-500',
      iconBg: 'bg-amber-50',
    },
    {
      icon: IconPackage,
      title: 'Product decisions become reactive',
      description:
        'Top sellers, underperformers, tiers, bundles, and abandonment indicators should be visible together so you can act before margins slip.',
      color: 'border-primary',
      iconColor: 'text-primary',
      iconBg: 'bg-primary/10',
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-text-primary lg:text-5xl">
              Store data is useful only when it leads to action
            </h2>

            <p className="text-xl text-text-secondary">
              Arka is positioned for merchants who need operational insight, not more raw exports.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => {
            const ProblemIcon = problem.icon;

            return (
              <Reveal key={problem.title} delay={index * 0.08}>
                <div
                  className={`h-full rounded-2xl border-l-4 bg-background p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${problem.color}`}
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${problem.iconBg}`}
                  >
                    <ProblemIcon
                      size={32}
                      stroke={1.8}
                      className={problem.iconColor}
                    />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-text-primary">
                    {problem.title}
                  </h3>

                  <p className="leading-relaxed text-text-secondary">
                    {problem.description}
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