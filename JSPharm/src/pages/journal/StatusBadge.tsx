import Badge from "../../components/ui/badge/Badge";
import type { ArticleStatus, PageStatus } from "../../services/api";

interface StatusBadgeProps {
  status: ArticleStatus | PageStatus | boolean;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  if (typeof status === "boolean") {
    return (
      <Badge color={status ? "success" : "warning"} size="sm">
        {status ? "Published" : "Draft"}
      </Badge>
    );
  }

  const color = status === "published" ? "success" : status === "review" ? "info" : "warning";
  const label = status === "review" ? "Under Review" : status[0].toUpperCase() + status.slice(1);

  return (
    <Badge color={color} size="sm">
      {label}
    </Badge>
  );
}
