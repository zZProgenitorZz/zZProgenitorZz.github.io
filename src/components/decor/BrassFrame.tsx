import type { ReactNode } from 'react'

function Corner({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="#B08D57"
      strokeWidth="1"
      className={`pointer-events-none absolute ${className}`}
    >
      <path d="M2 26V10C2 5.6 5.6 2 10 2H26" />
      <path d="M8 26V14C8 10.7 10.7 8 14 8H26" strokeOpacity="0.6" />
      <circle cx="14" cy="14" r="2" fill="#B08D57" stroke="none" />
    </svg>
  )
}

/** Ornate brass picture frame: double line plus corner flourishes. */
export default function BrassFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative border border-brass bg-surface p-3 ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-1 border border-brass/50" />
      <Corner className="-left-px -top-px" />
      <Corner className="-right-px -top-px rotate-90" />
      <Corner className="-bottom-px -right-px rotate-180" />
      <Corner className="-bottom-px -left-px -rotate-90" />
      <div className="relative">{children}</div>
    </div>
  )
}
