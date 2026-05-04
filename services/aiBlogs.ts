import { api } from '@/lib/api';
import type { AiBlog, AiBlogsResponse, AiBlogResponse } from '@/types/ai-blog';

export async function getAiBlogs(limit = 50): Promise<AiBlog[]> {
    try {
        const response = await api.get<AiBlogsResponse>('/ai-blogs', {
            params: { limit },
        });

        if (!response.data.ok) return [];

        return response.data.data.items.filter(
            (blog) => blog.status === 'published'
        );
    } catch (error) {
        console.error('Failed to fetch AI blogs:', error);
        return [];
    }
}

export async function getAiBlogByIdentifier(
    identifier: string
): Promise<AiBlog | null> {
    try {
        const response = await api.get<AiBlogResponse>(`/ai-blogs/${identifier}`);

        if (!response.data.ok || response.data.data.status !== 'published') {
            return null;
        }
        return response.data.data;
    } catch {
        const blogs = await getAiBlogs(100);

        return (
            blogs.find(
                (blog) => blog._id === identifier || blog.slug === identifier
            ) || null
        );
    }
}