import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import Reveal from '@/components/Reveal';
import { getAiBlogByIdentifier, getAiBlogs } from '@/services/aiBlogs';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(date?: string | null) {
  if (!date) return 'Published article';

  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

function stripFirstH1(html?: string) {
  if (!html) return '';

  return html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '').trim();
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getAiBlogByIdentifier(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Arka Blog',
      alternates: {
        canonical: '/blog',
      },
    };
  }

  const canonicalPath = `/blog/${post.slug || post._id}`;
  const description = post.metaDescription || post.excerpt || post.title;
  const imageUrl = post.coverImage?.url;

  return {
    title: `${post.title} | Arka Blog`,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      url: canonicalPath,
      publishedTime: post.publishedAt || undefined,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: post.coverImage?.alt || post.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getAiBlogByIdentifier(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = (await getAiBlogs(50))
    .filter((item) => item._id !== post._id)
    .slice(0, 3);

  const contentHtml = stripFirstH1(
    post.contentHtml || post.editorData?.content
  );

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
              {post.topic ? (
                <span className="rounded-full bg-[#EE6983]/10 px-3 py-1 font-medium text-[#850E35]">
                  {post.topic}
                </span>
              ) : null}

              <span className="text-slate-500">
                {formatDate(post.publishedAt)}
              </span>

              {post.appName ? (
                <>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{post.appName}</span>
                </>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#850E35] md:text-6xl">
              {post.title}
            </h1>
          </Reveal>

          {post.excerpt ? (
            <Reveal delay={0.24}>
              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
                {post.excerpt}
              </p>
            </Reveal>
          ) : null}

          {post.suggestedKeywords?.length ? (
            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-2">
                {post.suggestedKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-[#EE6983]/30 bg-white px-3 py-1 text-sm font-medium text-[#850E35]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-[#FFC4C4] bg-white shadow-sm">
            {post.coverImage?.url ? (
              <div className="relative aspect-[16/8] overflow-hidden bg-[#FCF5EE]">
                <Image
                  src={post.coverImage.url}
                  alt={post.coverImage.alt || post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            ) : null}

            <article
              className="prose prose-lg max-w-none px-6 py-10 prose-headings:text-[#850E35] prose-a:text-[#850E35] prose-a:font-semibold md:px-10"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </Reveal>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="border-t border-[#FFC4C4] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
            <Reveal>
              <div className="mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-[#850E35]">
                  Related Shopify analytics articles
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost, index) => (
                <Reveal key={relatedPost._id} delay={index * 0.08}>
                  <Link
                    href={`/blog/${relatedPost.slug || relatedPost._id}`}
                    className="block h-full rounded-2xl border border-[#FFC4C4] bg-[#FCF5EE] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    {relatedPost.topic ? (
                      <span className="text-sm font-medium text-[#850E35]">
                        {relatedPost.topic}
                      </span>
                    ) : null}

                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {relatedPost.title}
                    </h3>

                    {relatedPost.excerpt ? (
                      <p className="mt-3 line-clamp-3 leading-7 text-slate-700">
                        {relatedPost.excerpt}
                      </p>
                    ) : null}

                    <div className="mt-5 text-sm font-semibold text-[#850E35]">
                      Read more →
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}