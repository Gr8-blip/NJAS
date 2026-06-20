const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "https://jsppharm.com/api/api";

export type ArticleStatus = "draft" | "review" | "published" | "archived";
export type PageStatus = "draft" | "published";
export type UploadDocumentType = "pdf" | "cover" | "supplement";

export interface Volume {
  id: number;
  volume_number: number;
  year: number;
  title: string;
  description: string;
  publication_cycle: string;
  is_published: boolean;
  cover_image?: string;
  cover_url: string;
  published_at: string | null;
  article_count: number;
  upload_count: number;
  created_at: string;
}

export interface Article {
  id: number;
  title: string;
  citation: string;
  abstract: string;
  manuscript_file?: string;
  manuscript_url: string;
  pages: string;
  keywords: string;
  date_approved: string | null;
  authors: string;
  author_affiliations: string;
  status: ArticleStatus;
  volume: number | null;
  volume_label: string;
  created_at: string;
  updated_at: string;
}

export interface StaticPage {
  id: number;
  title: string;
  slug: string;
  body: string;
  status: PageStatus;
  updated_at: string;
}

export interface JournalUpload {
  id: number;
  title: string;
  document_type: UploadDocumentType;
  file?: string;
  file_url: string;
  description: string;
  volume: number | null;
  volume_label: string;
  article: number | null;
  article_title: string;
  uploaded_at: string;
}

export interface DashboardSummary {
  stats: {
    pages: number;
    articles: number;
    published_articles: number;
    volumes: number;
    published_volumes: number;
    uploads: number;
    submissions: number;
  };
  recent_articles: Article[];
  recent_uploads: JournalUpload[];
}

type FormValue = string | number | boolean | File | null | undefined;

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  console.log("API_BASE_URL =", API_BASE_URL);
  console.log("path =", path);
  console.log("final =", `${API_BASE_URL}${path}`);

  const response = await fetch(`${API_BASE_URL}${path}`, init);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with ${response.status}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

function jsonInit(method: string, payload?: unknown): RequestInit {
  return {
    method,
    headers: { "Content-Type": "application/json" },
    body: payload ? JSON.stringify(payload) : undefined,
  };
}

export function toFormData<T extends object>(payload: T): FormData {
  const data = new FormData();
  Object.entries(payload as Record<string, FormValue>).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      return;
    }
    data.append(key, value instanceof File ? value : String(value));
  });
  return data;
}

export const api = {
  dashboard: () => request<DashboardSummary>("dashboard/"),

  listArticles: () => request<Article[]>("articles/"),
  createArticle: (payload: FormData) =>
    request<Article>("articles/", { method: "POST", body: payload }),
  updateArticle: (id: number, payload: FormData) =>
    request<Article>(`articles/${id}/`, { method: "PATCH", body: payload }),
  deleteArticle: (id: number) =>
    request<void>(`articles/${id}/`, { method: "DELETE" }),

  listVolumes: () => request<Volume[]>("volumes/"),
  createVolume: (payload: FormData) =>
    request<Volume>("volumes/", { method: "POST", body: payload }),
  updateVolume: (id: number, payload: FormData) =>
    request<Volume>(`volumes/${id}/`, { method: "PATCH", body: payload }),
  deleteVolume: (id: number) =>
    request<void>(`volumes/${id}/`, { method: "DELETE" }),

  listPages: () => request<StaticPage[]>("pages/"),
  createPage: (payload: Omit<StaticPage, "id" | "updated_at">) =>
    request<StaticPage>("pages/", jsonInit("POST", payload)),
  updatePage: (id: number, payload: Partial<Omit<StaticPage, "id" | "updated_at">>) =>
    request<StaticPage>(`pages/${id}/`, jsonInit("PATCH", payload)),
  deletePage: (id: number) =>
    request<void>(`pages/${id}/`, { method: "DELETE" }),

  listUploads: () => request<JournalUpload[]>("uploads/"),
  createUpload: (payload: FormData) =>
    request<JournalUpload>("uploads/", { method: "POST", body: payload }),
  updateUpload: (id: number, payload: FormData) =>
    request<JournalUpload>(`uploads/${id}/`, { method: "PATCH", body: payload }),
  deleteUpload: (id: number) =>
    request<void>(`uploads/${id}/`, { method: "DELETE" }),
};
