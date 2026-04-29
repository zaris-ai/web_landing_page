import type { Metadata } from 'next';

import Reveal from '@/components/Reveal';
import { getAiBlogs } from '@/services/aiBlogs';

import BlogHero from './BlogHero';
import ApiBlogCard from './ApiBlogCard';

export const metadata: Metadata = {
  title: 'Shopify Analytics Blog | Arka: Smart Analyzer',
  description:
    'Read Shopify analytics articles about product performance, customer segments, retention, funnel analysis, sales trends, and store KPI reporting.',
  alternates: {
    canonical: '/blog',
  },
};

export const dynamic = 'force-dynamic';

function getPostDate(post: {
  publishedAt?: string | null;
  generatedAt?: string | null;
  createdAt?: string | null;
}) {
  return new Date(
    post.publishedAt || post.generatedAt || post.createdAt || 0
  ).getTime();
}

export default async function BlogPage() {
  const posts = await getAiBlogs(50);

  const sortedPosts = [...posts].sort((a, b) => getPostDate(b) - getPostDate(a));
  const latestPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  return (
    <main className="min-h-screen bg-[#FCF5EE] text-slate-900">
      <BlogHero />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal>
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#850E35] md:text-4xl">
              Latest Shopify analytics posts
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Read articles for merchants who want clearer visibility into sales
              performance, product movement, customer segments, abandoned
              checkout signals, and data-driven store decisions.
            </p>

            {sortedPosts.length > 0 ? (
              <p className="mt-4 inline-flex rounded-full border border-[#EE6983]/30 bg-[#EE6983]/10 px-4 py-1 text-sm font-medium text-[#850E35]">
                {sortedPosts.length} post{sortedPosts.length > 1 ? 's' : ''}
              </p>
            ) : null}
          </div>
        </Reveal>

        {latestPost ? (
          <>
            <Reveal delay={0.08}>
              <div className="mb-8 max-w-3xl">
                <h3 className="text-2xl font-bold tracking-tight text-[#850E35] md:text-3xl">
                  Latest post
                </h3>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ApiBlogCard post={latestPost} />
            </Reveal>
          </>
        ) : (
          <div className="rounded-2xl border border-[#FFC4C4] bg-white p-8">
            <h2 className="text-2xl font-bold text-[#850E35]">
              No blog posts found
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Blog articles will appear here after they are available from the
              AI blogs API.
            </p>
          </div>
        )}
      </section>

      {otherPosts.length > 0 ? (
        <section className="border-t border-[#FFC4C4] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
            <Reveal>
              <div className="mb-10 max-w-3xl">
                <h3 className="text-3xl font-bold tracking-tight text-[#850E35] md:text-4xl">
                  More Shopify analytics posts
                </h3>

                <p className="mt-4 leading-8 text-slate-700">
                  Explore more articles about sales performance, customer
                  segments, retention signals, funnel analysis, product
                  movement, and smarter store decisions.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {otherPosts.map((post, index) => (
                <Reveal
                  key={post._id || post.slug || index}
                  delay={index * 0.08}
                >
                  <ApiBlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}