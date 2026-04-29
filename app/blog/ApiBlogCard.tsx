import Link from 'next/link';
import Image from 'next/image';

import type { AiBlog } from '@/types/ai-blog';

type ApiBlogCardProps = {
    post: AiBlog;
};

export default function ApiBlogCard({ post }: ApiBlogCardProps) {
    const imageUrl = post.coverImage?.url;
    const imageAlt = post.coverImage?.alt || post.title;

    return (
        <Link
            href={`/blog/${post.slug || post._id}`}
            className="group block h-full overflow-hidden rounded-2xl border border-[#FFC4C4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
            {imageUrl ? (
                <div className="relative aspect-[16/9] overflow-hidden bg-[#FCF5EE]">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                </div>
            ) : null}

            <div className="p-6">
                {post.topic ? (
                    <p className="text-sm font-medium text-[#850E35]">{post.topic}</p>
                ) : null}

                <h3 className="mt-3 text-xl font-bold leading-7 text-slate-900">
                    {post.title}
                </h3>

                {post.excerpt ? (
                    <p className="mt-3 line-clamp-3 leading-7 text-slate-700">
                        {post.excerpt}
                    </p>
                ) : null}

                {post.suggestedKeywords?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                        {post.suggestedKeywords.slice(0, 3).map((keyword) => (
                            <span
                                key={keyword}
                                className="rounded-full bg-[#EE6983]/10 px-3 py-1 text-xs font-medium text-[#850E35]"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                ) : null}

                <div className="mt-6 text-sm font-semibold text-[#850E35]">
                    Read article →
                </div>
            </div>
        </Link>
    );
}