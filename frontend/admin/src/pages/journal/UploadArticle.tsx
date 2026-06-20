import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";
import { api, toFormData, type ArticleStatus, type Volume } from "../../services/api";

interface ArticleForm {
  title: string;
  abstract: string;
  keywords: string;
  authors: string;
  author_affiliations: string;
  status: ArticleStatus;
  volume: string;
  manuscript_file?: File;
}

const emptyArticle: ArticleForm = {
  title: "",
  abstract: "",
  keywords: "",
  authors: "",
  author_affiliations: "",
  status: "draft",
  volume: "",
};

export default function UploadArticle() {
  const [volumes, setVolumes] = useState<Volume[]>([]);
  const [form, setForm] = useState<ArticleForm>(emptyArticle);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const editingId = Number(searchParams.get("id")) || null;

  useEffect(() => {
    Promise.all([api.listVolumes(), api.listArticles()])
      .then(([nextVolumes, articles]) => {
        setVolumes(nextVolumes);
        const article = editingId ? articles.find((item) => item.id === editingId) : null;
        if (article) {
          setForm({
            title: article.title,
            abstract: article.abstract,
            keywords: article.keywords,
            authors: article.authors,
            author_affiliations: article.author_affiliations,
            status: article.status,
            volume: article.volume ? String(article.volume) : "",
          });
        }
      })
      .catch((err: Error) => setError(err.message));
  }, [editingId]);

  const updateForm = (field: keyof ArticleForm, value: string | File | undefined) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      const payload = toFormData(form);
      if (editingId) {
        await api.updateArticle(editingId, payload);
      } else {
        await api.createArticle(payload);
      }
      navigate("/articles");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save article");
    }
  };

  return (
    <>
      <PageMeta title="Upload Article | NJAS" description="Upload NJAS article details" />
      <PageBreadcrumb pageTitle={editingId ? "Edit Article" : "Upload Article"} />
      <form onSubmit={submit} className="max-w-4xl rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{editingId ? "Edit Article" : "Upload Article"}</h2>
        {error && <p className="mb-4 rounded-lg bg-error-50 p-3 text-sm text-error-600">{error}</p>}
        <div className="grid gap-4">
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Title" value={form.title} onChange={(event) => updateForm("title", event.target.value)} required />
          <select className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.volume} onChange={(event) => updateForm("volume", event.target.value)}>
            <option value="">Volume</option>
            {volumes.map((volume) => (
              <option key={volume.id} value={volume.id}>
                {volume.title} - Vol. {volume.volume_number}, Issue {volume.issue_number}
              </option>
            ))}
          </select>
          <textarea className="min-h-32 rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm dark:border-gray-700 dark:text-white" placeholder="Abstract" value={form.abstract} onChange={(event) => updateForm("abstract", event.target.value)} />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Authors" value={form.authors} onChange={(event) => updateForm("authors", event.target.value)} />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Authors affiliation" value={form.author_affiliations} onChange={(event) => updateForm("author_affiliations", event.target.value)} />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Keywords" value={form.keywords} onChange={(event) => updateForm("keywords", event.target.value)} />
          <select className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.status} onChange={(event) => updateForm("status", event.target.value)}>
            <option value="draft">Draft</option>
            <option value="review">Under Review</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent text-sm file:mr-4 file:h-full file:border-0 file:bg-gray-100 file:px-4 dark:border-gray-700 dark:text-white" type="file" onChange={(event) => updateForm("manuscript_file", event.target.files?.[0])} />
          <Button startIcon={<PlusIcon className="h-4 w-4" />}>{editingId ? "Save Article" : "Upload Article"}</Button>
        </div>
      </form>
    </>
  );
}
