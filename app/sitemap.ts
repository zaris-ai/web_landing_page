import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blog-posts";

const siteUrl = (
  process.env.SITE_URL || "https://web.arkaanalyzer.com"
).replace(/\/$/, "");

function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/arka-smart-analyzer"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const blogPost = post as {
      slug: string;
      date?: string;
      updatedAt?: string;
    };

    return {
      url: absoluteUrl(`/blog/${blogPost.slug}`),
      lastModified: blogPost.updatedAt
        ? new Date(blogPost.updatedAt)
        : blogPost.date
          ? new Date(blogPost.date)
          : now,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}