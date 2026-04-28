import Link from 'next/link';
import type { BlogPost } from '@/app/data/blog-posts';

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#FFC4C4] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/9] overflow-hidden bg-[#FCF5EE]">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-[#EE6983]/10 px-3 py-1 font-medium text-[#850E35]">
            {post.category}
          </span>
          <span className="text-slate-500">{post.publishedAt}</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500">{post.readTime}</span>
        </div>

        <h2 className="mt-4 text-2xl font-bold leading-tight text-[#850E35]">
          <Link href={`/blog/${post.slug}`} className="hover:opacity-90">
            {post.title}
          </Link>
        </h2>

        <p className="mt-4 line-clamp-3 leading-7 text-slate-700">
          {post.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {post.author.name}
            </p>
            <p className="text-sm text-slate-500">{post.author.role}</p>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center rounded-xl bg-[#850E35] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Read article
          </Link>
        </div>
      </div>
    </article>
  );
}