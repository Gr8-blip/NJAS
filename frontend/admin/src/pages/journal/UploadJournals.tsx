import { FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";
import { api, toFormData, type Article, type Volume } from "../../services/api";

interface UploadForm {
  title: string;
  volume: string;
  article: string;
  abstract: string;
  authors: string;
  author_affiliations: string;
  keywords: string;
  file?: File;
}

const emptyUpload: UploadForm = {
  title: "",
  volume: "",
  article: "",
  abstract: "",
  authors: "",
  author_affiliations: "",
  keywords: "",
};

export default function UploadJournals() {
  const [volumes, setVolumes] = useState<Volume[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [form, setForm] = useState<UploadForm>(emptyUpload);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.listVolumes().then(setVolumes).catch((err: Error) => setError(err.message));
  }, []);

  useEffect(() => {
    if (!form.volume) {
      setArticles([]);
      setForm((current) => ({ ...current, article: "" }));
      return;
    }

    api.listArticles(form.volume)
      .then((nextArticles) => {
        setArticles(nextArticles);
        setForm((current) => ({ ...current, article: "" }));
      })
      .catch((err: Error) => setError(err.message));
  }, [form.volume]);

  const selectedArticle = useMemo(
    () => articles.find((article) => String(article.id) === form.article),
    [articles, form.article],
  );

  useEffect(() => {
    if (!selectedArticle) {
      return;
    }

    setForm((current) => ({
      ...current,
      title: current.title || selectedArticle.title,
      abstract: current.abstract || selectedArticle.abstract,
      authors: current.authors || selectedArticle.authors,
      author_affiliations: current.author_affiliations || selectedArticle.author_affiliations,
      keywords: current.keywords || selectedArticle.keywords,
    }));
  }, [selectedArticle]);

  const updateForm = (field: keyof UploadForm, value: string | File | undefined) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (!form.file) {
      setError("Choose a document before uploading.");
      return;
    }

    try {
      await api.createUpload(toFormData(form));
      navigate("/articles");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to upload journal");
    }
  };

  return (
    <>
      <PageMeta title="Upload Journal | NJAS" description="Upload NJAS journal document" />
      <PageBreadcrumb pageTitle="Upload Journal" />
      <form onSubmit={submit} className="max-w-4xl rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Upload Journal</h2>
        {error && <p className="mb-4 rounded-lg bg-error-50 p-3 text-sm text-error-600">{error}</p>}
        <div className="grid gap-4">
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Title" value={form.title} onChange={(event) => updateForm("title", event.target.value)} required />
          <select className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.volume} onChange={(event) => updateForm("volume", event.target.value)} required>
            <option value="">Volume</option>
            {volumes.map((volume) => (
              <option key={volume.id} value={volume.id}>
                Vol. {volume.volume_number}, Issue {volume.issue_number}
              </option>
            ))}
          </select>
          <select className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.article} onChange={(event) => updateForm("article", event.target.value)}>
            <option value="">Articles</option>
            {articles.map((article) => (
              <option key={article.id} value={article.id}>{article.title}</option>
            ))}
          </select>
          <textarea className="min-h-32 rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm dark:border-gray-700 dark:text-white" placeholder="Abstract" value={form.abstract} onChange={(event) => updateForm("abstract", event.target.value)} />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Authors" value={form.authors} onChange={(event) => updateForm("authors", event.target.value)} />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Authors affiliation" value={form.author_affiliations} onChange={(event) => updateForm("author_affiliations", event.target.value)} />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Keywords" value={form.keywords} onChange={(event) => updateForm("keywords", event.target.value)} />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent text-sm file:mr-4 file:h-full file:border-0 file:bg-gray-100 file:px-4 dark:border-gray-700 dark:text-white" type="file" onChange={(event) => updateForm("file", event.target.files?.[0])} required />
          <Button startIcon={<PlusIcon className="h-4 w-4" />}>Upload Journal</Button>
        </div>
      </form>
    </>
  );
}
