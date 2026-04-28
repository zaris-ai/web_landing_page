import {
  IconChartBar,
  IconChecks,
  IconClockHour4,
  IconPackage,
  IconPuzzle,
  IconReportAnalytics,
  IconTrendingUp,
  IconUsersGroup,
} from '@tabler/icons-react';

import Reveal from '@/components/Reveal';

export default function SolutionOverview() {
  const badges = [
    {
      icon: IconPuzzle,
      label: 'Embedded dashboard',
    },
    {
      icon: IconClockHour4,
      label: 'Historical analysis',
    },
    {
      icon: IconReportAnalytics,
      label: 'Custom reports',
    },
  ];

  const solutions = [
    {
      icon: IconUsersGroup,
      title: 'Customer segmentation and retention insights from orders',
      description:
        'See activity, segment membership, loyalty patterns, and lifetime-value signals in one place.',
    },
    {
      icon: IconPackage,
      title: 'Product performance, tiers, bundles, and underperformance visibility',
      description:
        'Identify what drives revenue, what is weakening, and which product groupings deserve attention.',
    },
    {
      icon: IconTrendingUp,
      title: 'Sales trends, funnel views, and store KPI monitoring',
      description:
        'Compare periods quickly and act on changes without moving data into spreadsheets.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-br from-accent/20 to-background px-6 py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="space-y-8 text-center">
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

          <Reveal delay={0.08}>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconChartBar size={36} stroke={1.8} />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <h2 className="text-4xl font-bold text-text-primary lg:text-5xl">
              One embedded dashboard for customer, product, and sales decisions
            </h2>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-text-secondary">
              Arka summarizes sales performance, funnels, and trends, then layers in customer
              segments, retention signals, product performance, tier breakdowns, bundle insights,
              and abandonment indicators so merchants can compare periods and decide what to
              optimize next.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="rounded-2xl border border-accent/30 bg-white p-8 text-left shadow-xl lg:p-12">
              <ul className="space-y-6">
                {solutions.map((solution, index) => {
                  const SolutionIcon = solution.icon;

                  return (
                    <Reveal key={solution.title} delay={index * 0.08}>
                      <li className="flex items-start gap-4">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <SolutionIcon size={22} stroke={1.8} />
                        </span>

                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <IconChecks
                              size={20}
                              stroke={1.8}
                              className="text-primary"
                            />

                            <strong className="text-lg text-text-primary">
                              {solution.title}
                            </strong>
                          </div>

                          <p className="mt-1 text-text-secondary">
                            {solution.description}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}