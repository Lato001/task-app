import type { ReactNode } from "react";

interface TaskColumnProps {
  title: string;
  count: number;
  children: ReactNode;
}

export default function TaskColumn({
  title,
  count,
  children,
}: TaskColumnProps) {
  return (
    <div className="flex-1 p-4 rounded-xl border border-border bg-surface">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        <h2 className="text-base font-semibold text-slate-900">
          {title}
        </h2>
        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
          {count}
        </span>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
