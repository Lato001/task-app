import { type ReactNode } from "react";

export interface HeaderProps {
  title: string;
  children?: ReactNode;
}

export default function Header({ title, children }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
      <h1 className="text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h1>
      {children}
    </header>
  );
}
