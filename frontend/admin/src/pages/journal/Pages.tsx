import { useEffect, useState } from "react";
import { Link } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";
import { PencilIcon, PlusIcon, TrashBinIcon } from "../../icons";
import { api, type StaticPage } from "../../services/api";
import EmptyState from "./EmptyState";
import StatusBadge from "./StatusBadge";

export default function Pages() {
  const [pages, setPages] = useState<StaticPage[]>([]);
  const [error, setError] = useState("");

  const loadPages = () => {
    api.listPages().then(setPages).catch((err: Error) => setError(err.message));
  };

  useEffect(loadPages, []);

  const deletePage = async (id: number) => {
    await api.deletePage(id);
    loadPages();
  };

  return (
    <>
      <PageMeta title="Manage Pages | NJAS" description="Manage NJAS website pages" />
      <PageBreadcrumb pageTitle="Pages" />
      <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Website Pages</h2>
          <Link to="/upload-page">
            <Button size="sm" startIcon={<PlusIcon className="h-4 w-4" />}>Upload Page</Button>
          </Link>
        </div>
        {error && <p className="mb-4 rounded-lg bg-error-50 p-3 text-sm text-error-600">{error}</p>}
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
                        <Link className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-brand-500" to={`/upload-page?id=${page.id}`} aria-label="Edit page">
                          <PencilIcon className="h-4 w-4" />
                        </Link>
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
    </>
  );
}
