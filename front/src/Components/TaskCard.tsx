interface TaskCardProps {
  title: string;
  description?: string;
  status: "pending" | "attended" | "completed";
}
const statusStyles: Record<string, string> = {
  pending:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  attended: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  completed:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
};

export default function TaskCard({
  title,
  description,
  status,
}: TaskCardProps) {
  return (
    <div className="min-w-[220px] p-4 rounded-xl border border-border bg-surface shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-medium text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
      {description && (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
