import { statusColor } from './status'
import { useT } from '../../i18n/LanguageContext'
import type { ProjectStatus } from '../../content/projects'

/** Every status of a project, each in its own colour, separated by a space (e.g. [school] [wip]). */
export default function StatusLabels({ status }: { status: ProjectStatus[] }) {
  const t = useT()
  return (
    <>
      {status.map((s, i) => (
        <span key={s}>
          {i > 0 && ' '}
          <span className={statusColor[s]}>{t.projects.status[s]}</span>
        </span>
      ))}
    </>
  )
}
