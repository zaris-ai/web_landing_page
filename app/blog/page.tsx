import type { Metadata } from 'next';
import { getAllPosts } from '@/app/data/blog-posts';
import Reveal from '@/components/Reveal';

import BlogHero from './BlogHero';
import BlogCard from './BlogCard';

export const metadata: Metadata = {
  title: 'Blog | Arka: Smart Analyzer',
  description:
    'Read articles about Shopify analytics, customer segments, retention, product performance, and sales visibility.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-[#FCF5EE] text-slate-900">
      <BlogHero />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal>
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#850E35] md:text-4xl">
              Featured article
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <BlogCard post={featuredPost} />
        </Reveal>
      </section>

      <section className="border-t border-[#FFC4C4] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <Reveal>
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-[#850E35] md:text-4xl">
                Latest posts
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {otherPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.08}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}