import type { ReactNode } from 'react'

type Props = { id?: string; labelledBy: string; className?: string; children: ReactNode }

export default function Section({ id, labelledBy, className = '', children }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative py-12 md:py-16 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  )
}
