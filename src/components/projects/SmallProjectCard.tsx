import Button from '../ui/Button'
import Tag from '../ui/Tag'
import CornerBrackets from '../decor/CornerBrackets'
import { statusColor } from './status'
import { useLang, useT } from '../../i18n/LanguageContext'
import type { Project } from '../../content/projects'

/** Flat "spell file" card for small projects (no image, no flip): editor tab, status, import line. */
export default function SmallProjectCard({ project }: { project: Project }) {
  const t = useT()
  const { lang } = useLang()
  return (
    <article className="group relative flex flex-col border border-line bg-surface transition-[border-color,transform] focus-within:border-accent hover:-translate-y-0.5 hover:border-accent">
      <div className="flex items-stretch justify-between border-b border-line text-xs">
        <span className="min-w-0 truncate border-r border-t-2 border-r-line border-t-accent-2 bg-bg px-3 py-2 text-fg">
          {project.id}.ts
        </span>
        <span className={`shrink-0 px-3 py-2 ${statusColor[project.status]}`}>{t.projects.status[project.status]}</span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-fg">{project.title}</h3>
        <p className="mt-2 break-words text-sm">
          <span className="text-accent-2">import</span> <span className="text-fg">{`{ ${project.tech.join(', ')} }`}</span>{' '}
          <span className="text-accent-2">from</span> <span className="text-ok">'stack'</span>
        </p>
        <ul className="sr-only">
          {project.tech.map((x) => (
            <Tag key={x}>{x}</Tag>
          ))}
        </ul>
        <p className="mt-3 flex-1">{project.description[lang]}</p>
        {(project.live || project.repo) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.live && (
              <Button size="sm" variant="primary" href={project.live}>
                {t.projects.live}
              </Button>
            )}
            {project.repo && (
              <Button size="sm" variant="ghost" href={project.repo}>
                {t.projects.repo}
              </Button>
            )}
          </div>
        )}
      </div>
      <CornerBrackets />
    </article>
  )
}
