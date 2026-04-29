export type AiBlogCoverImage = {
    url: string;
    sourcePage?: string;
    query?: string;
    alt?: string;
  };
  
  export type AiBlogEditorData = {
    type: 'html' | 'markdown';
    content: string;
  };
  
  export type AiBlog = {
    _id: string;
    title: string;
    normalizedTitle?: string;
    slug: string;
    topic?: string;
    audience?: string;
    appName?: string;
    sourceLinks?: string[];
    suggestedKeywords?: string[];
    metaDescription?: string;
    excerpt?: string;
    coverImage?: AiBlogCoverImage;
    contentHtml?: string;
    contentMarkdown?: string;
    editorData?: AiBlogEditorData;
    status?: 'draft' | 'published' | string;
    publishedAt?: string | null;
    generatedAt?: string;
    createdAt?: string;
    updatedAt?: string;
  };
  
  export type AiBlogsResponse = {
    ok: boolean;
    message: string;
    data: {
      items: AiBlog[];
      pagination: {
        total: number;
        page: number;
        limit: number;
        pages: number;
      };
    };
  };
  
  export type AiBlogResponse = {
    ok: boolean;
    message: string;
    data: AiBlog;
  };