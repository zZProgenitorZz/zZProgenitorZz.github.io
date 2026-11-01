import type { ReactNode } from 'react'

/** Editor-tab bar: the file name on the left, `children` (status, flip button) on the right. */
export default function FileTab({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="flex items-stretch justify-between border-b border-line text-xs">
      <span className="min-w-0 truncate border-r border-t-2 border-r-line border-t-accent-2 bg-bg px-3 py-2 text-fg">{name}</span>
      {children}
    </div>
  )
}
