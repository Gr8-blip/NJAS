import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";
import { api, toFormData } from "../../services/api";

interface VolumeForm {
  volume_number: string;
  year: string;
  title: string;
  description: string;
  publication_cycle: string;
  is_published: boolean;
  published_at: string;
  cover_image?: File;
}

const emptyVolume: VolumeForm = {
  volume_number: "",
  year: String(new Date().getFullYear()),
  title: "",
  description: "",
  publication_cycle: "",
  is_published: false,
  published_at: "",
};

export default function UploadVolume() {
  const [form, setForm] = useState<VolumeForm>(emptyVolume);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const editingId = Number(searchParams.get("id")) || null;

  useEffect(() => {
    if (!editingId) {
      return;
    }
    api.listVolumes()
      .then((volumes) => volumes.find((volume) => volume.id === editingId))
      .then((volume) => {
        if (!volume) {
          return;
        }
        setForm({
          volume_number: String(volume.volume_number),
          year: String(volume.year),
          title: volume.title,
          description: volume.description,
          publication_cycle: volume.publication_cycle,
          is_published: volume.is_published,
          published_at: volume.published_at ?? "",
        });
      })
      .catch((err: Error) => setError(err.message));
  }, [editingId]);

  const updateForm = (field: keyof VolumeForm, value: string | boolean | File | undefined) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      const payload = toFormData(form);
      if (editingId) {
        await api.updateVolume(editingId, payload);
      } else {
        await api.createVolume(payload);
      }
      navigate("/volumes");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save volume");
    }
  };

  return (
    <>
      <PageMeta title="Upload Volume | NJAS" description="Create and publish NJAS journal volumes" />
      <PageBreadcrumb pageTitle={editingId ? "Edit Volume" : "Upload Volume"} />
      <form onSubmit={submit} className="max-w-4xl rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          {editingId ? "Edit Volume Details" : "Create New Volume"}
        </h2>
        {error && <p className="mb-4 rounded-lg bg-error-50 p-3 text-sm text-error-600">{error}</p>}
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" type="number" placeholder="Volume number" value={form.volume_number} onChange={(event) => updateForm("volume_number", event.target.value)} required />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" type="number" placeholder="Year" value={form.year} onChange={(event) => updateForm("year", event.target.value)} required />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white sm:col-span-2" placeholder="Volume title" value={form.title} onChange={(event) => updateForm("title", event.target.value)} />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" placeholder="Publication cycle" value={form.publication_cycle} onChange={(event) => updateForm("publication_cycle", event.target.value)} />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" type="date" value={form.published_at} onChange={(event) => updateForm("published_at", event.target.value)} />
          <textarea className="min-h-36 rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm dark:border-gray-700 dark:text-white sm:col-span-2" placeholder="Description" value={form.description} onChange={(event) => updateForm("description", event.target.value)} />
          <label className="flex items-center gap-3 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
            <input type="checkbox" checked={form.is_published} onChange={(event) => updateForm("is_published", event.target.checked)} />
            Publish this volume
          </label>
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent text-sm file:mr-4 file:h-full file:border-0 file:bg-gray-100 file:px-4 dark:border-gray-700 dark:text-white" type="file" accept="image/*" onChange={(event) => updateForm("cover_image", event.target.files?.[0])} />
        </div>
        <div className="mt-5">
          <Button startIcon={<PlusIcon className="h-4 w-4" />}>{editingId ? "Save Volume" : "Create Volume"}</Button>
        </div>
      </form>
    </>
  );
}
