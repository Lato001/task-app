import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
      <h1 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        Tasks App
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </button>
    </header>
  )
}
