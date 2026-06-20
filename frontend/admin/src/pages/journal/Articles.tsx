import { useEffect, useState } from "react";
import { Link } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";
import { DownloadIcon, PencilIcon, PlusIcon, TrashBinIcon } from "../../icons";
import { api, toFormData, type Article } from "../../services/api";
import EmptyState from "./EmptyState";
import StatusBadge from "./StatusBadge";

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState("");

  const load = () => {
    api.listArticles().then(setArticles).catch((err: Error) => setError(err.message));
  };

  useEffect(load, []);

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
      <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Research Articles</h2>
          <Link to="/upload-article">
            <Button size="sm" startIcon={<PlusIcon className="h-4 w-4" />}>Upload Article</Button>
          </Link>
        </div>
        {error && <p className="mb-4 rounded-lg bg-error-50 p-3 text-sm text-error-600">{error}</p>}
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
                        <Link className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-brand-500" to={`/upload-article?id=${article.id}`} aria-label="Edit article">
                          <PencilIcon className="h-4 w-4" />
                        </Link>
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
    </>
  );
}
