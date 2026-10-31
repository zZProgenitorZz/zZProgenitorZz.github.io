import { useT } from '../../i18n/LanguageContext'
import type { Project } from '../../content/projects'
import { emptyFilters, type Filters } from './filters'

const toggle = <T,>(arr: T[], v: T): T[] => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])

type Props = { projects: Project[]; value: Filters; onChange: (f: Filters) => void }

/** Filters shown as command-line flags, e.g. --filter=web. */
export default function ProjectFilters({ projects, value, onChange }: Props) {
  const t = useT()
  const tags = [...new Set(projects.flatMap((p) => p.tags))].sort()
  const statuses = [...new Set(projects.map((p) => p.status))]
  const years = [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a)
  const active = value.tags.length + value.status.length + value.years.length > 0

  const btn = (pressed: boolean) =>
    `inline-flex min-h-11 items-center border px-2 py-1 text-xs transition-colors md:min-h-0 ${
      pressed ? 'border-accent-2 bg-accent-2/10 text-fg' : 'border-line text-muted hover:border-accent hover:text-fg'
    }`

  return (
    <div role="group" aria-label={t.projects.filterTitle} className="container-page mt-8 flex flex-wrap gap-2">
      {tags.map((x) => (
        <button key={x} type="button" aria-pressed={value.tags.includes(x)} className={btn(value.tags.includes(x))} onClick={() => onChange({ ...value, tags: toggle(value.tags, x) })}>
          {t.projects.filterTags}
          {x}
        </button>
      ))}
      {statuses.map((x) => (
        <button key={x} type="button" aria-pressed={value.status.includes(x)} className={btn(value.status.includes(x))} onClick={() => onChange({ ...value, status: toggle(value.status, x) })}>
          {t.projects.filterStatus}
          {x}
        </button>
      ))}
      {years.map((x) => (
        <button key={x} type="button" aria-pressed={value.years.includes(x)} className={btn(value.years.includes(x))} onClick={() => onChange({ ...value, years: toggle(value.years, x) })}>
          {t.projects.filterYear}
          {x}
        </button>
      ))}
      {active && (
        <button type="button" className={btn(false)} onClick={() => onChange(emptyFilters)}>
          {t.projects.reset}
        </button>
      )}
    </div>
  )
}
