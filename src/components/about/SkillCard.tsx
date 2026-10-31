import Card from '../ui/Card'
import { useT } from '../../i18n/LanguageContext'
import type { Skill } from '../../content/skills'

type Props = { title: string; items: Skill[]; className?: string }

/** Skill list with a 5-segment realm meter; the realm name shows on hover or keyboard focus. */
export default function SkillCard({ title, items, className = '' }: Props) {
  const t = useT()
  const realms = t.skills.realms
  return (
    <Card as="article" className={className}>
      <h3 className="border-b border-line p-2 font-display text-xl font-semibold text-fg">{title}</h3>
      <ul className="space-y-1 p-4">
        {items.map((s) => {
          const realm = realms[s.level - 1]
          return (
            <li
              key={s.name}
              tabIndex={0}
              aria-label={`${s.name}, ${t.skills.legend} ${s.level}: ${realm}`}
              className="group relative flex min-h-8 items-center justify-between gap-3"
            >
              <span className="min-w-0">{s.name}</span>
              <span aria-hidden="true" className="flex shrink-0 gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className={`h-2 w-3 border ${
                      i <= s.level ? (s.level === 5 ? 'border-gold bg-gold' : 'border-accent bg-accent') : 'border-line'
                    }`}
                  />
                ))}
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-5 right-0 z-10 hidden whitespace-nowrap border border-gold bg-bg px-2 py-0.5 text-xs text-gold group-hover:block group-focus-visible:block"
              >
                {s.level} · {realm}
              </span>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
