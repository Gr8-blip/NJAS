import { FormEvent, useEffect, useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";
import { DownloadIcon, PencilIcon, PlusIcon, TrashBinIcon } from "../../icons";
import { api, toFormData, type Article, type ArticleStatus, type Volume } from "../../services/api";
import EmptyState from "./EmptyState";
import StatusBadge from "./StatusBadge";

interface ArticleForm {
  title: string;
  citation: string;
  abstract: string;
  pages: string;
  keywords: string;
  date_approved: string;
  authors: string;
  author_affiliations: string;
  status: ArticleStatus;
  volume: string;
  manuscript_file?: File;
}

const emptyArticle: ArticleForm = {
  title: "",
  citation: "",
  abstract: "",
  pages: "",
  keywords: "",
  date_approved: "",
  authors: "",
  author_affiliations: "",
  status: "draft",
  volume: "",
};

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [volumes, setVolumes] = useState<Volume[]>([]);
  const [form, setForm] = useState<ArticleForm>(emptyArticle);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState("");

  const load = () => {
    Promise.all([api.listArticles(), api.listVolumes()])
      .then(([nextArticles, nextVolumes]) => {
        setArticles(nextArticles);
        setVolumes(nextVolumes);
      })
      .catch((err: Error) => setError(err.message));
  };

  useEffect(load, []);

  const updateForm = (field: keyof ArticleForm, value: string | File | undefined) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const payload = toFormData(form);
    try {
      if (editingId) {
        await api.updateArticle(editingId, payload);
      } else {
        await api.createArticle(payload);
      }
      setForm(emptyArticle);
      setEditingId(null);
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save article");
    }
  };

  const editArticle = (article: Article) => {
    setEditingId(article.id);
    setForm({
      title: article.title,
      citation: article.citation,
      abstract: article.abstract,
      pages: article.pages,
      keywords: article.keywords,
      date_approved: article.date_approved ?? "",
      authors: article.authors,
      author_affiliations: article.author_affiliations,
      status: article.status,
      volume: article.volume ? String(article.volume) : "",
    });
  };

  const publishArticle = async (article: Article) => {
    await api.updateArticle(article.id, toFormData({ status: "published" }));
    load();
  };

  const deleteArticle = async (id: number) => {
    await api.deleteArticle(id);
    load();
  };

  return (
    <>
      <PageMeta title="Articles | NJAS" description="Manage NJAS articles and journal papers" />
      <PageBreadcrumb pageTitle="Articles" />
      <div className="grid gap-6 2xl:grid-cols-[minmax(0,1fr)_480px]">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Research Articles</h2>
          {articles.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="border-b border-gray-100 dark:border-gray-800">
                  <TableRow>
                    <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Title</TableCell>
                    <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Authors</TableCell>
                    <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Volume</TableCell>
                    <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</TableCell>
                    <TableCell isHeader className="px-4 py-3 text-right text-xs font-medium text-gray-500">Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.map((article) => (
                    <TableRow key={article.id} className="border-b border-gray-100 dark:border-gray-800">
                      <TableCell className="min-w-72 px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">{article.title}</TableCell>
                      <TableCell className="px-4 py-4 text-sm text-gray-500">{article.authors || "-"}</TableCell>
                      <TableCell className="px-4 py-4 text-sm text-gray-500">{article.volume_label || "-"}</TableCell>
                      <TableCell className="px-4 py-4"><StatusBadge status={article.status} /></TableCell>
                      <TableCell className="px-4 py-4">
                        <div className="flex justify-end gap-2">
                          {article.manuscript_url && (
                            <a className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-brand-500" href={article.manuscript_url} target="_blank" rel="noreferrer" aria-label="Download manuscript">
                              <DownloadIcon className="h-4 w-4" />
                            </a>
                          )}
                          <button className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-brand-500" onClick={() => editArticle(article)} aria-label="Edit article">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-600 hover:text-success-600" onClick={() => void publishArticle(article)}>
                            Publish
                          </button>
                          <button className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-error-500" onClick={() => void deleteArticle(article.id)} aria-label="Delete article">
                            <TrashBinIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <EmptyState message="No research articles have been added yet." />
          )}
        </div>

        <form onSubmit={submit} className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{editingId ? "Edit Article" : "Create Article"}</h2>
          {error && <p className="mb-4 rounded-lg bg-error-50 p-3 text-sm text-error-600">{error}</p>}
          <div className="grid gap-4">
            <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Article title" value={form.title} onChange={(event) => updateForm("title", event.target.value)} required />
            <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Authors" value={form.authors} onChange={(event) => updateForm("authors", event.target.value)} />
            <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Author affiliations" value={form.author_affiliations} onChange={(event) => updateForm("author_affiliations", event.target.value)} />
            <textarea className="min-h-28 rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm dark:border-gray-700 dark:text-white" placeholder="Abstract" value={form.abstract} onChange={(event) => updateForm("abstract", event.target.value)} />
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Citation" value={form.citation} onChange={(event) => updateForm("citation", event.target.value)} />
              <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Pages" value={form.pages} onChange={(event) => updateForm("pages", event.target.value)} />
            </div>
            <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Keywords" value={form.keywords} onChange={(event) => updateForm("keywords", event.target.value)} />
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" type="date" value={form.date_approved} onChange={(event) => updateForm("date_approved", event.target.value)} />
              <select className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.status} onChange={(event) => updateForm("status", event.target.value)}>
                <option value="draft">Draft</option>
                <option value="review">Under Review</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <select className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.volume} onChange={(event) => updateForm("volume", event.target.value)}>
              <option value="">No volume selected</option>
              {volumes.map((volume) => (
                <option key={volume.id} value={volume.id}>
                  Volume {volume.volume_number} ({volume.year}) {volume.title}
                </option>
              ))}
            </select>
            <input className="h-11 rounded-lg border border-gray-300 bg-transparent text-sm file:mr-4 file:h-full file:border-0 file:bg-gray-100 file:px-4 dark:border-gray-700 dark:text-white" type="file" onChange={(event) => updateForm("manuscript_file", event.target.files?.[0])} />
            <div className="flex gap-3">
              <Button startIcon={<PlusIcon className="h-4 w-4" />}>{editingId ? "Save Article" : "Create Article"}</Button>
              {editingId && (
                <button type="button" className="rounded-lg border border-gray-300 px-5 py-3 text-sm text-gray-700 dark:text-gray-300" onClick={() => { setEditingId(null); setForm(emptyArticle); }}>
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
