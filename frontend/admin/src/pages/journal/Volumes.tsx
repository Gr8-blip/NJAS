import { useEffect, useState } from "react";
import { Link } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";
import { PencilIcon, PlusIcon, TrashBinIcon } from "../../icons";
import { api, toFormData, type Volume } from "../../services/api";
import EmptyState from "./EmptyState";
import StatusBadge from "./StatusBadge";

export default function Volumes() {
  const [volumes, setVolumes] = useState<Volume[]>([]);
  const [error, setError] = useState("");

  const load = () => {
    api.listVolumes().then(setVolumes).catch((err: Error) => setError(err.message));
  };

  useEffect(load, []);

  const publishVolume = async (volume: Volume) => {
    const thisMonth = new Date().toISOString().slice(0, 7);
    await api.updateVolume(volume.id, toFormData({ is_published: true, published_at: volume.published_at || thisMonth }));
    load();
  };

  const deleteVolume = async (id: number) => {
    await api.deleteVolume(id);
    load();
  };

  return (
    <>
      <PageMeta title="Volumes | NJAS" description="Manage NJAS journal volumes" />
      <PageBreadcrumb pageTitle="Volumes" />
      <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Journal Editions and Issues</h2>
          <Link to="/upload-volume">
            <Button size="sm" startIcon={<PlusIcon className="h-4 w-4" />}>New Volume</Button>
          </Link>
        </div>
        {error && <p className="mb-4 rounded-lg bg-error-50 p-3 text-sm text-error-600">{error}</p>}
        {volumes.length > 0 ? (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-gray-800">
                <TableRow>
                  <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Volume</TableCell>
                  <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Issue</TableCell>
                  <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Published</TableCell>
                  <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Articles</TableCell>
                  <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Files</TableCell>
                  <TableCell isHeader className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</TableCell>
                  <TableCell isHeader className="px-4 py-3 text-right text-xs font-medium text-gray-500">Actions</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {volumes.map((volume) => (
                  <TableRow key={volume.id} className="border-b border-gray-100 dark:border-gray-800">
                    <TableCell className="px-4 py-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Volume {volume.volume_number} ({volume.year})
                      </p>
                      <p className="text-sm text-gray-500">{volume.title || "Untitled issue"}</p>
                    </TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-500">Issue {volume.issue_number}</TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-500">{volume.published_at || "-"}</TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-500">{volume.article_count}</TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-500">{volume.upload_count}</TableCell>
                    <TableCell className="px-4 py-4"><StatusBadge status={volume.is_published} /></TableCell>
                    <TableCell className="px-4 py-4">
                      <div className="flex justify-end gap-2">
                        <Link className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-brand-500" to={`/upload-volume?id=${volume.id}`} aria-label="Edit volume">
                          <PencilIcon className="h-4 w-4" />
                        </Link>
                        <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-600 hover:text-success-600" onClick={() => void publishVolume(volume)}>
                          Publish
                        </button>
                        <button className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-error-500" onClick={() => void deleteVolume(volume.id)} aria-label="Delete volume">
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
          <EmptyState message="Create a volume to group articles by volume number, issue number, and publication month." />
        )}
      </div>
    </>
  );
}
