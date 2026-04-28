import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Reveal from '@/components/Reveal';
import { getAllPosts, getPostBySlug } from '@/app/blog/blog-posts';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Arka Blog',
    };
  }

  return {
    title: post.seoTitle || `${post.title} | Arka Blog`,
    description: post.seoDescription || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#FCF5EE] text-slate-900">
      <section className="border-b border-[#FFC4C4] bg-gradient-to-b from-[#FCF5EE] to-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-[#850E35] transition-colors duration-200 hover:text-[#EE6983] hover:underline"
            >
              ← Back to blog
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-[#EE6983]/10 px-3 py-1 font-medium text-[#850E35]">
                {post.category}
              </span>

              <span className="text-slate-500">{post.publishedAt}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">{post.readTime}</span>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#850E35] md:text-6xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
              {post.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#850E35] text-lg font-bold text-white">
                {post.author.name.charAt(0)}
              </div>

              <div>
                <p className="font-semibold text-slate-900">{post.author.name}</p>
                <p className="text-sm text-slate-500">{post.author.role}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-[#FFC4C4] bg-white shadow-sm">
            <div className="aspect-[16/8] overflow-hidden bg-[#FCF5EE]">
              <img
                src={post.coverImage}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            <article className="prose prose-lg max-w-none px-6 py-10 md:px-10">
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-6 leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </article>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-[#FFC4C4] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <Reveal>
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-[#850E35]">
                Related articles
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost, index) => (
              <Reveal key={relatedPost.slug} delay={index * 0.08}>
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="block h-full rounded-2xl border border-[#FFC4C4] bg-[#FCF5EE] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="text-sm font-medium text-[#850E35]">
                    {relatedPost.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {relatedPost.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 leading-7 text-slate-700">
                    {relatedPost.excerpt}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-[#850E35]">
                    Read more →
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}