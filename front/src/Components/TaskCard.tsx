import type { ReactNode } from "react";

interface TaskCardProps {
  title: string;
  description?: string;
  status: "pending" | "attended" | "completed";
  children?: ReactNode;
}
const statusStyles: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  attended: "bg-blue-100 text-blue-700",
  completed: "bg-emerald-100 text-emerald-700",
};

export default function TaskCard({
  title,
  description,
  status,
  children,
}: TaskCardProps) {
  return (
    <div className="min-w-[220px] p-4 rounded-xl border border-border bg-surface shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-medium text-slate-900">{title}</h3>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
      {description && <p className="text-sm text-slate-500">{description}</p>}

      {children}
    </div>
  );
}
