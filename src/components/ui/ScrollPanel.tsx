import type { ReactNode } from 'react'

/** Paper-scroll panel: dark surface, gold side borders, outlined gold rollers top and bottom. */
export default function ScrollPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <div aria-hidden="true" className="-mx-2 h-2 border border-gold bg-gold/20" />
      <div className="border-x border-gold/60 bg-surface p-4 md:p-6">{children}</div>
      <div aria-hidden="true" className="-mx-2 h-2 border border-gold bg-gold/20" />
    </div>
  )
}
