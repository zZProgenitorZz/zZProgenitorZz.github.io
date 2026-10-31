import type { ReactNode } from 'react'

type Props = { title: string; children: ReactNode; className?: string; bodyClassName?: string }

/** Window chrome: title bar with three square dots, bordered body. */
export default function TerminalWindow({ title, children, className = '', bodyClassName = 'p-4 md:p-6' }: Props) {
  return (
    <div className={`border border-line bg-surface ${className}`}>
      <div className="flex items-center gap-3 border-b border-line px-3 py-2">
        <span aria-hidden="true" className="flex shrink-0 gap-1.5">
          <i className="h-2.5 w-2.5 bg-accent-2" />
          <i className="h-2.5 w-2.5 bg-accent" />
          <i className="h-2.5 w-2.5 bg-ok" />
        </span>
        <span className="min-w-0 truncate text-xs text-muted">{title}</span>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  )
}
