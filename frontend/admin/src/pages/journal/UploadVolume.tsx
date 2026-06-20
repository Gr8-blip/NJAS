import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";
import { api, toFormData } from "../../services/api";

interface VolumeForm {
  title: string;
  volume_number: string;
  issue_number: string;
  published_at: string;
}

const emptyVolume: VolumeForm = {
  title: "",
  volume_number: "",
  issue_number: "",
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
          title: volume.title,
          volume_number: String(volume.volume_number),
          issue_number: String(volume.issue_number),
          published_at: volume.published_at ?? "",
        });
      })
      .catch((err: Error) => setError(err.message));
  }, [editingId]);

  const updateForm = (field: keyof VolumeForm, value: string) => {
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
      <form onSubmit={submit} className="max-w-3xl rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          {editingId ? "Edit Volume Details" : "Create New Volume"}
        </h2>
        {error && <p className="mb-4 rounded-lg bg-error-50 p-3 text-sm text-error-600">{error}</p>}
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white sm:col-span-2" placeholder="Volume" value={form.title} onChange={(event) => updateForm("title", event.target.value)} required />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" type="number" placeholder="Volume no" value={form.volume_number} onChange={(event) => updateForm("volume_number", event.target.value)} required />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" type="number" placeholder="Issue no" value={form.issue_number} onChange={(event) => updateForm("issue_number", event.target.value)} required />
          <input className="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white sm:col-span-2" type="month" value={form.published_at} onChange={(event) => updateForm("published_at", event.target.value)} required />
        </div>
        <div className="mt-5">
          <Button startIcon={<PlusIcon className="h-4 w-4" />}>{editingId ? "Save Volume" : "Create Volume"}</Button>
        </div>
      </form>
    </>
  );
}
