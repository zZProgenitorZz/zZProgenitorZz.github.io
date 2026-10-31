import { roman } from '../../lib/roman'

type Props = { title: string; items: string[]; index: number; className?: string }

/** Grimoire page: brass double border, Roman numeral index, skills as a list. */
export default function SkillCard({ title, items, index, className = '' }: Props) {
  return (
    <article className={`border border-brass/60 bg-surface p-1 transition-colors hover:border-brass ${className}`}>
      <div className="h-full border border-brass/30">
        <h3 className="flex items-baseline gap-2 border-b border-brass/30 p-2 font-display text-xl text-fg">
          <span aria-hidden="true" className="text-brass">
            {roman(index)}.
          </span>
          {title}
        </h3>
        <ul className="space-y-1 p-4">
          {items.map((s) => (
            <li key={s} className="before:mr-2 before:text-brass before:content-['◇']">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
