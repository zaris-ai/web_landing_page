import type { MetadataRoute } from "next";

const siteUrl = (
  process.env.SITE_URL || "https://web.arkaanalyzer.com"
).replace(/\/$/, "");

const apiBaseUrl = (
  process.env.API_BASE_URL || "https://api.smart.arkaanalyzer.com/api"
).replace(/\/$/, "");

const blogsApiUrl = `${apiBaseUrl}/ai-blogs`;

type ApiBlog = {
  slug?: string;
  updatedAt?: string;
  createdAt?: string;
  publishedAt?: string;
  date?: string;
  status?: string;
  draft?: boolean;
  deleted?: boolean;
  isDeleted?: boolean;
  noIndex?: boolean;
};

type BlogsApiResponse = {
  ok?: boolean;
  success?: boolean;
  data?:
    | ApiBlog[]
    | {
        blogs?: ApiBlog[];
        posts?: ApiBlog[];
        items?: ApiBlog[];
      };
  blogs?: ApiBlog[];
  posts?: ApiBlog[];
  items?: ApiBlog[];
};

function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

function extractBlogs(json: BlogsApiResponse): ApiBlog[] {
  if (Array.isArray(json.data)) return json.data;

  if (json.data && !Array.isArray(json.data)) {
    if (Array.isArray(json.data.blogs)) return json.data.blogs;
    if (Array.isArray(json.data.posts)) return json.data.posts;
    if (Array.isArray(json.data.items)) return json.data.items;
  }

  if (Array.isArray(json.blogs)) return json.blogs;
  if (Array.isArray(json.posts)) return json.posts;
  if (Array.isArray(json.items)) return json.items;

  return [];
}

function isActiveBlog(blog: ApiBlog): blog is ApiBlog & { slug: string } {
  if (!blog.slug) return false;

  if (blog.deleted) return false;
  if (blog.isDeleted) return false;
  if (blog.draft) return false;
  if (blog.noIndex) return false;

  const status = blog.status?.toLowerCase();

  if (
    status === "deleted" ||
    status === "draft" ||
    status === "archived" ||
    status === "unpublished"
  ) {
    return false;
  }

  return true;
}

function safeDate(value: string | undefined, fallback: Date) {
  if (!value) return fallback;

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? fallback : date;
}

async function getBlogs(): Promise<ApiBlog[]> {
  try {
    const res = await fetch(blogsApiUrl, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) return [];

    const json = (await res.json()) as BlogsApiResponse;

    return extractBlogs(json).filter(isActiveBlog);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
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

  const blogs = await getBlogs();

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: absoluteUrl(`/blog/${blog.slug}`),
    lastModified: safeDate(
      blog.updatedAt || blog.publishedAt || blog.date || blog.createdAt,
      now
    ),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const uniqueRoutes = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const route of [...staticRoutes, ...blogRoutes]) {
    uniqueRoutes.set(route.url, route);
  }

  return Array.from(uniqueRoutes.values());
}