import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";
import { api, type PageStatus } from "../../services/api";

interface PageForm {
  title: string;
  slug: string;
  body: string;
  status: PageStatus;
}

const emptyForm: PageForm = {
  title: "",
  slug: "",
  body: "",
  status: "draft",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function UploadPage() {
  const [form, setForm] = useState<PageForm>(emptyForm);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const editingId = Number(searchParams.get("id")) || null;

  useEffect(() => {
    if (!editingId) {
      return;
    }

    api.listPages()
      .then((pages) => pages.find((page) => page.id === editingId))
      .then((page) => {
        if (page) {
          setForm({ title: page.title, slug: page.slug, body: page.body, status: page.status });
        }
      })
      .catch((err: Error) => setError(err.message));
  }, [editingId]);

  const updateForm = (field: keyof PageForm, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
      ...(field === "title" && !editingId ? { slug: slugify(value) } : {}),
    }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      if (editingId) {
        await api.updatePage(editingId, form);
      } else {
        await api.createPage(form);
      }
      navigate("/pages");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save page");
    }
  };

  return (
    <>
      <PageMeta title="Upload Page | NJAS" description="Create or edit NJAS website pages" />
      <PageBreadcrumb pageTitle={editingId ? "Edit Page" : "Upload Page"} />
      <form onSubmit={submit} className="max-w-3xl rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{editingId ? "Edit Page" : "Upload Page"}</h2>
        {error && <p className="mb-4 rounded-lg bg-error-50 p-3 text-sm text-error-600">{error}</p>}
        <div className="space-y-4">
          <input className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Title" value={form.title} onChange={(event) => updateForm("title", event.target.value)} required />
          <input className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Slug" value={form.slug} onChange={(event) => updateForm("slug", event.target.value)} required />
          <select className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.status} onChange={(event) => updateForm("status", event.target.value)}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
          <textarea className="min-h-48 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm dark:border-gray-700 dark:text-white" placeholder="Body" value={form.body} onChange={(event) => updateForm("body", event.target.value)} />
          <Button startIcon={<PlusIcon className="h-4 w-4" />}>{editingId ? "Save Page" : "Upload Page"}</Button>
        </div>
      </form>
    </>
  );
}
