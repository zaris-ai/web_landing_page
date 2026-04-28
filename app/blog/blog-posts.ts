export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    category: string;
    publishedAt: string;
    readTime: string;
    author: {
        name: string;
        role: string;
    };
    seoTitle?: string;
    seoDescription?: string;
    content: string[];
};

export const blogPosts: BlogPost[] = [
    {
        slug: 'shopify-customer-segments-that-actually-matter',
        title: 'Shopify Customer Segments That Actually Matter',
        excerpt:
            'A practical guide to identifying the customer groups that are worth tracking and why broad segments usually fail.',
        coverImage:
            'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80',
        category: 'Customer Analytics',
        publishedAt: '2026-04-20',
        readTime: '6 min read',
        author: {
            name: 'Arka Team',
            role: 'Product Insights',
        },
        seoTitle: 'Shopify Customer Segments That Actually Matter | Arka Blog',
        seoDescription:
            'Learn how to define useful Shopify customer segments for retention, repeat purchase behavior, and better store decisions.',
        content: [
            'Most stores have customer data, but very few have useful customer segmentation. The problem is usually not missing reports. The problem is weak segmentation logic that groups buyers in ways that do not lead to better decisions.',
            'A good segment should explain something operationally useful. It should help you understand repeat purchase behavior, identify valuable customers, or show where retention is weakening.',
            'Start with behavior instead of demographics. For most Shopify stores, purchase frequency, recency, average order value, and product-category preference are stronger signals than broad customer labels.',
            'You should also separate first-time buyers from repeat buyers early. If those two groups are mixed together in one performance view, retention problems stay hidden.',
            'The practical rule is simple: if a segment does not change how you market, retain, or analyze performance, it is probably noise.',
        ],
    },
    {
        slug: 'how-to-read-product-performance-without-guessing',
        title: 'How to Read Product Performance Without Guessing',
        excerpt:
            'Revenue alone is not enough. Here is how to evaluate product performance with better context across trend, conversion, and abandonment signals.',
        coverImage:
            'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
        category: 'Product Analytics',
        publishedAt: '2026-04-16',
        readTime: '5 min read',
        author: {
            name: 'Arka Team',
            role: 'Analytics',
        },
        seoTitle: 'How to Read Product Performance Without Guessing | Arka Blog',
        seoDescription:
            'A practical framework for analyzing Shopify product performance beyond top-line sales.',
        content: [
            'A product can look strong in one metric and weak in another. That is why single-metric evaluation leads to bad decisions. Revenue alone is not enough.',
            'A better product view combines trend, conversion, average order impact, and abandonment signals. This helps distinguish truly strong products from products that only look good because of traffic spikes or discount timing.',
            'You should look for consistency first. Is the product repeatedly contributing, or did it only perform during one campaign window?',
            'The second question is contribution quality. Is it pulling bundles, improving order value, or helping repeat purchase behavior? A product that supports broader store performance is more valuable than a short-term spike item.',
            'The main goal is to move from reaction to diagnosis. Instead of asking whether a product sold, ask why it performed and whether the pattern is sustainable.',
        ],
    },
    {
        slug: 'retention-signals-every-shopify-store-should-watch',
        title: 'Retention Signals Every Shopify Store Should Watch',
        excerpt:
            'Retention usually weakens before teams notice. These are the signals that deserve attention before repeat purchase performance drops further.',
        coverImage:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
        category: 'Retention',
        publishedAt: '2026-04-10',
        readTime: '7 min read',
        author: {
            name: 'Arka Team',
            role: 'Growth Analysis',
        },
        seoTitle: 'Retention Signals Every Shopify Store Should Watch | Arka Blog',
        seoDescription:
            'Track the leading indicators that help Shopify merchants catch retention issues earlier.',
        content: [
            'Retention problems rarely appear suddenly. In most stores, the warning signs are visible earlier in repeat purchase timing, order intervals, and cohort behavior.',
            'One of the most useful signals is recency drift. If repeat customers are taking longer to place the next order, that is often an early sign of weakening engagement.',
            'Another useful signal is cohort decay. If newer customer groups are returning at a lower rate than earlier cohorts, the acquisition pipeline may be pulling lower-quality demand.',
            'You should also compare retention by product mix. Some products naturally support repeat behavior better than others, and that difference matters when analyzing growth quality.',
            'The operational advantage comes from noticing these changes early. Once repeat purchase rate drops materially, recovery usually becomes more expensive.',
        ],
    },
    {
        slug: 'what-a-good-sales-dashboard-should-show',
        title: 'What a Good Sales Dashboard Should Actually Show',
        excerpt:
            'Dashboards fail when they are overloaded. Here is the minimum sales view that helps teams notice meaningful change quickly.',
        coverImage:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
        category: 'Sales Trends',
        publishedAt: '2026-04-04',
        readTime: '4 min read',
        author: {
            name: 'Arka Team',
            role: 'Store Analytics',
        },
        seoTitle: 'What a Good Sales Dashboard Should Actually Show | Arka Blog',
        seoDescription:
            'A better way to think about Shopify sales dashboards, KPIs, and trend visibility.',
        content: [
            'Most dashboards contain too much information and still fail to answer the most important question: what changed, and why should the team care?',
            'A good sales dashboard should show trend direction clearly before it tries to show everything else. The first layer should answer whether sales are stable, improving, or weakening.',
            'After that, the dashboard should connect trend movement to useful supporting views such as conversion movement, product concentration, and customer contribution.',
            'This creates a simple hierarchy: summary first, diagnosis second, detail last. Without that order, dashboards turn into noise.',
            'The objective is not more charts. The objective is faster recognition of meaningful change.',
        ],
    },
];

export function getAllPosts() {
    return [...blogPosts].sort(
        (a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug);
}