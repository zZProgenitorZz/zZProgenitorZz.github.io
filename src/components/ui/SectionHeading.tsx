import type { ReactNode } from 'react'

type Props = { id?: string; title: string; num?: string; action?: ReactNode }

/** "01 ~/projects" followed by a dashed line. */
export default function SectionHeading({ id, title, num, action }: Props) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 md:flex-nowrap md:gap-4">
      <h2 id={id} className="text-xl font-bold text-fg md:text-2xl">
        {num && (
          <span aria-hidden="true" className="mr-3 text-accent-2">
            {num}
          </span>
        )}
        {title}
      </h2>
      <div aria-hidden="true" className="hidden h-px min-w-4 flex-1 border-t border-dashed border-line-strong md:block md:max-w-[50%]" />
      {action && <div className="ml-auto shrink-0">{action}</div>}
    </div>
  )
}
