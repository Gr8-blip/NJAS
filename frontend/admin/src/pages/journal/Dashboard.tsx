import { useEffect, useState } from "react";
import { Link } from "react-router";
import PageMeta from "../../components/common/PageMeta";
import Badge from "../../components/ui/badge/Badge";
import Button from "../../components/ui/button/Button";
import { ArrowRightIcon, FileIcon, PageIcon, PlusIcon, TableIcon } from "../../icons";
import { api, type DashboardSummary } from "../../services/api";
import EmptyState from "./EmptyState";
import StatusBadge from "./StatusBadge";

const statLabels = [
  ["Pages", "pages"],
  ["Articles", "articles"],
  ["Published Articles", "published_articles"],
  ["Volumes", "volumes"],
  ["Published Volumes", "published_volumes"],
  ["Journal Uploads", "uploads"],
  ["Submissions", "submissions"],
] as const;

export default function Dashboard() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.dashboard().then(setSummary).catch((err: Error) => setError(err.message));
  }, []);

  return (
    <>
      <PageMeta
        title="JSPP Pharm Dashboard"
        description="Journal of Science and Practice of Pharmacy management dashboard"
      />
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-brand-500">Journal of Science and Practice of Pharmacy</p>
            <h1 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
              Editorial Control Center
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/upload-article">
              <Button size="sm" startIcon={<PlusIcon className="h-4 w-4" />}>
                Article
              </Button>
            </Link>
            <Link to="/upload-volume">
              <Button size="sm" variant="outline" startIcon={<TableIcon className="h-4 w-4" />}>
                Volume
              </Button>
            </Link>
          </div>
        </div>

        {error && (
          <div className="rounded-lg border border-error-200 bg-error-50 p-4 text-sm text-error-600">
            Backend connection failed: {error}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statLabels.map(([label, key]) => (
            <div
              key={key}
              className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
              <p className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">
                {summary?.stats[key] ?? 0}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] xl:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Articles</h2>
              <Link className="text-sm font-medium text-brand-500" to="/articles">
                Manage
              </Link>
            </div>
            {summary && summary.recent_articles.length > 0 ? (
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {summary.recent_articles.map((article) => (
                  <div key={article.id} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{article.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{article.authors || "No authors listed"}</p>
                    </div>
                    <StatusBadge status={article.status} />
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState message="No articles have been added yet." />
            )}
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h2>
            <div className="space-y-3">
              {[
                ["/pages", "Manage Pages", <PageIcon className="h-5 w-5" />],
                ["/upload-journals", "Upload Journals", <FileIcon className="h-5 w-5" />],
                ["/volumes", "Review Volumes", <TableIcon className="h-5 w-5" />],
              ].map(([path, label, icon]) => (
                <Link
                  key={String(path)}
                  to={String(path)}
                  className="flex items-center justify-between rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-500 dark:border-gray-800 dark:text-gray-300"
                >
                  <span className="flex items-center gap-3">
                    {icon}
                    {label}
                  </span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Uploads</h2>
            <Link className="text-sm font-medium text-brand-500" to="/upload-journals">
              Upload
            </Link>
          </div>
          {summary && summary.recent_uploads.length > 0 ? (
            <div className="grid gap-3 md:grid-cols-2">
              {summary.recent_uploads.map((upload) => (
                <a
                  key={upload.id}
                  href={upload.file_url}
                  className="rounded-lg border border-gray-200 p-4 text-sm hover:border-brand-300 dark:border-gray-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="font-medium text-gray-900 dark:text-white">{upload.title}</p>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">{upload.article_title || upload.volume_label || "Journal document"}</p>
                </a>
              ))}
            </div>
          ) : (
            <EmptyState message="No journal files have been uploaded yet." />
          )}
        </div>
      </div>
    </>
  );
}
