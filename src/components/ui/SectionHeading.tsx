import type { ReactNode } from 'react'

type Props = { id?: string; title: string; action?: ReactNode }

/** Title format: "Themed name · Plain label". Followed by a double brass rule with a small diamond. */
export default function SectionHeading({ id, title, action }: Props) {
  const [themed, plain] = title.includes(' · ') ? title.split(' · ') : [title, '']
  return (
    <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 md:flex-nowrap">
      <h2 id={id} className="min-w-0 text-fg">
        <span className="font-display text-3xl md:text-4xl">{themed}</span>
        {plain && (
          <>
            <span aria-hidden="true" className="px-2 text-brass">
              ·
            </span>
            <span className="sr-only"> · </span>
            <span className="text-sm text-muted md:text-base">{plain}</span>
          </>
        )}
      </h2>
      <div aria-hidden="true" className="hidden min-w-4 flex-1 items-center gap-2 md:flex md:max-w-[40%]">
        <span className="h-1 flex-1 border-y border-brass/50" />
        <span className="h-2 w-2 shrink-0 rotate-45 border border-brass" />
      </div>
      {action && <div className="ml-auto shrink-0">{action}</div>}
    </div>
  )
}
