import { FormEvent, useEffect, useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";
import { DownloadIcon, PlusIcon, TrashBinIcon } from "../../icons";
import {
  api,
  toFormData,
  type Article,
  type JournalUpload,
  type UploadDocumentType,
  type Volume,
} from "../../services/api";
import EmptyState from "./EmptyState";

interface UploadForm {
  title: string;
  document_type: UploadDocumentType;
  description: string;
  volume: string;
  article: string;
  file?: File;
}

const emptyUpload: UploadForm = {
  title: "",
  document_type: "pdf",
  description: "",
  volume: "",
  article: "",
};

export default function UploadJournals() {
  const [uploads, setUploads] = useState<JournalUpload[]>([]);
  const [volumes, setVolumes] = useState<Volume[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [form, setForm] = useState<UploadForm>(emptyUpload);
  const [error, setError] = useState("");

  const load = () => {
    Promise.all([api.listUploads(), api.listVolumes(), api.listArticles()])
      .then(([nextUploads, nextVolumes, nextArticles]) => {
        setUploads(nextUploads);
        setVolumes(nextVolumes);
        setArticles(nextArticles);
      })
      .catch((err: Error) => setError(err.message));
  };

  useEffect(load, []);

  const updateForm = (field: keyof UploadForm, value: string | File | undefined) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (!form.file) {
      setError("Choose a journal file before uploading.");
      return;
    }
    try {
      await api.createUpload(toFormData(form));
      setForm(emptyUpload);
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to upload journal file");
    }
  };

  const deleteUpload = async (id: number) => {
    await api.deleteUpload(id);
    load();
  };

  return (
    <>
      <PageMeta title="Upload Journals | NJAS" description="Upload NJAS journal documents" />
      <PageBreadcrumb pageTitle="Upload Journals" />
      <div className="grid gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
        <form onSubmit={submit} className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Upload Journal File</h2>
          {error && <p className="mb-4 rounded-lg bg-error-50 p-3 text-sm text-error-600">{error}</p>}
          <div className="space-y-4">
            <input className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Upload title" value={form.title} onChange={(event) => updateForm("title", event.target.value)} required />
            <select className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.document_type} onChange={(event) => updateForm("document_type", event.target.value)}>
              <option value="pdf">Journal PDF</option>
              <option value="cover">Cover Image</option>
              <option value="supplement">Supplementary File</option>
            </select>
            <select className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.volume} onChange={(event) => updateForm("volume", event.target.value)}>
              <option value="">Link to volume</option>
              {volumes.map((volume) => (
                <option key={volume.id} value={volume.id}>
                  Volume {volume.volume_number} ({volume.year})
                </option>
              ))}
            </select>
            <select className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" value={form.article} onChange={(event) => updateForm("article", event.target.value)}>
              <option value="">Link to article</option>
              {articles.map((article) => (
                <option key={article.id} value={article.id}>{article.title}</option>
              ))}
            </select>
            <textarea className="min-h-28 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm dark:border-gray-700 dark:text-white" placeholder="Metadata or notes" value={form.description} onChange={(event) => updateForm("description", event.target.value)} />
            <input className="h-11 w-full rounded-lg border border-gray-300 bg-transparent text-sm file:mr-4 file:h-full file:border-0 file:bg-gray-100 file:px-4 dark:border-gray-700 dark:text-white" type="file" onChange={(event) => updateForm("file", event.target.files?.[0])} />
            <Button startIcon={<PlusIcon className="h-4 w-4" />}>Upload File</Button>
          </div>
        </form>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Journal Files</h2>
          {uploads.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="border-b border-gray-100 dark:border-gray-800">
                  <TableRow>
                    <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Title</TableCell>
                    <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Type</TableCell>
                    <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Linked To</TableCell>
                    <TableCell isHeader className="px-4 py-3 text-right text-xs font-medium text-gray-500">Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {uploads.map((upload) => (
                    <TableRow key={upload.id} className="border-b border-gray-100 dark:border-gray-800">
                      <TableCell className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">{upload.title}</TableCell>
                      <TableCell className="px-4 py-4 text-sm text-gray-500">{upload.document_type}</TableCell>
                      <TableCell className="px-4 py-4 text-sm text-gray-500">{upload.article_title || upload.volume_label || "-"}</TableCell>
                      <TableCell className="px-4 py-4">
                        <div className="flex justify-end gap-2">
                          <a className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-brand-500" href={upload.file_url} target="_blank" rel="noreferrer" aria-label="Open file">
                            <DownloadIcon className="h-4 w-4" />
                          </a>
                          <button className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-error-500" onClick={() => void deleteUpload(upload.id)} aria-label="Delete upload">
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
            <EmptyState message="Upload PDFs, covers, and supplementary journal files here." />
          )}
        </div>
      </div>
    </>
  );
}
