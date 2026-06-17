import { FormEvent, useEffect, useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";
import { PencilIcon, PlusIcon, TrashBinIcon } from "../../icons";
import { api, type PageStatus, type StaticPage } from "../../services/api";
import EmptyState from "./EmptyState";
import StatusBadge from "./StatusBadge";

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

export default function Pages() {
  const [pages, setPages] = useState<StaticPage[]>([]);
  const [form, setForm] = useState<PageForm>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState("");

  const loadPages = () => {
    api.listPages().then(setPages).catch((err: Error) => setError(err.message));
  };

  useEffect(loadPages, []);

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
      setForm(emptyForm);
      setEditingId(null);
      loadPages();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save page");
    }
  };

  const editPage = (page: StaticPage) => {
    setEditingId(page.id);
    setForm({ title: page.title, slug: page.slug, body: page.body, status: page.status });
  };

  const deletePage = async (id: number) => {
    await api.deletePage(id);
    loadPages();
  };

  return (
    <>
      <PageMeta title="Manage Pages | NJAS" description="Manage NJAS website pages" />
      <PageBreadcrumb pageTitle="Pages" />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Website Pages</h2>
          {pages.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="border-b border-gray-100 dark:border-gray-800">
                  <TableRow>
                    <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Title</TableCell>
                    <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Slug</TableCell>
                    <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</TableCell>
                    <TableCell isHeader className="px-4 py-3 text-right text-xs font-medium text-gray-500">Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pages.map((page) => (
                    <TableRow key={page.id} className="border-b border-gray-100 dark:border-gray-800">
                      <TableCell className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">{page.title}</TableCell>
                      <TableCell className="px-4 py-4 text-sm text-gray-500">/{page.slug}</TableCell>
                      <TableCell className="px-4 py-4"><StatusBadge status={page.status} /></TableCell>
                      <TableCell className="px-4 py-4">
                        <div className="flex justify-end gap-2">
                          <button className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-brand-500" onClick={() => editPage(page)} aria-label="Edit page">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-error-500" onClick={() => void deletePage(page.id)} aria-label="Delete page">
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
            <EmptyState message="Create the Home, About, Contact, and Submission Guidelines pages here." />
          )}
        </div>

        <form onSubmit={submit} className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            {editingId ? "Edit Page" : "Create Page"}
          </h2>
          {error && <p className="mb-4 rounded-lg bg-error-50 p-3 text-sm text-error-600">{error}</p>}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Title
              <input className="mt-1 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.title} onChange={(event) => updateForm("title", event.target.value)} required />
            </label>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Slug
              <input className="mt-1 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.slug} onChange={(event) => updateForm("slug", event.target.value)} required />
            </label>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Status
              <select className="mt-1 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.status} onChange={(event) => updateForm("status", event.target.value)}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Body
              <textarea className="mt-1 min-h-48 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm dark:border-gray-700 dark:text-white" value={form.body} onChange={(event) => updateForm("body", event.target.value)} />
            </label>
            <div className="flex gap-3">
              <Button startIcon={<PlusIcon className="h-4 w-4" />}>{editingId ? "Save Page" : "Create Page"}</Button>
              {editingId && (
                <button type="button" className="rounded-lg border border-gray-300 px-5 py-3 text-sm text-gray-700 dark:text-gray-300" onClick={() => { setEditingId(null); setForm(emptyForm); }}>
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
