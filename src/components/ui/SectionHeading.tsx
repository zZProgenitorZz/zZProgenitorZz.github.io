import type { ReactNode } from 'react'
import Seal from '../decor/Seal'

type Props = { id?: string; title: string; action?: ReactNode }

/** Title format: "Themed name · Plain label". The seal shows the first letter of the plain label. */
export default function SectionHeading({ id, title, action }: Props) {
  const [themed, plain] = title.includes(' · ') ? title.split(' · ') : [title, '']
  const seal = (plain || themed).trim()[0]?.toUpperCase()
  return (
    <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 md:flex-nowrap md:gap-4">
      <Seal char={seal} size={40} />
      <h2 id={id} className="min-w-0 text-fg">
        <span className="font-display text-2xl font-semibold md:text-4xl">{themed}</span>
        {plain && (
          <>
            <span aria-hidden="true" className="px-2 text-gold">
              ·
            </span>
            <span className="sr-only"> · </span>
            <span className="text-sm text-muted md:text-base">{plain}</span>
          </>
        )}
      </h2>
      <div aria-hidden="true" className="hidden h-px min-w-4 flex-1 bg-line md:block md:max-w-[40%]" />
      {action && <div className="ml-auto shrink-0">{action}</div>}
    </div>
  )
}
