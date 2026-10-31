import type { ReactNode } from 'react'

type Props = { id?: string; title: string; prefix?: string; action?: ReactNode }

export default function SectionHeading({ id, title, prefix = '#', action }: Props) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 id={id} className="shrink-0 text-2xl font-medium text-fg md:text-[32px]">
        <span className="text-accent">{prefix}</span>
        {title}
      </h2>
      <div aria-hidden="true" className="h-px min-w-4 flex-1 bg-accent md:max-w-[50%]" />
      {action && <div className="ml-auto shrink-0">{action}</div>}
    </div>
  )
}
