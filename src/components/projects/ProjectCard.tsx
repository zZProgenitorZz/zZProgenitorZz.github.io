import Button from '../ui/Button'
import Tag from '../ui/Tag'
import CornerBrackets from '../decor/CornerBrackets'
import { useLang, useT } from '../../i18n/LanguageContext'
import { fill } from '../../lib/rich'
import type { Project, ProjectStatus } from '../../content/projects'

const statusColor: Record<ProjectStatus, string> = {
  shipped: 'text-ok',
  wip: 'text-accent-2',
  school: 'text-muted',
}

type Props = { project: Project; ext?: string }

/** A "spell file": editor-tab header, status badge, stack as an import line, corner brackets on hover. */
export default function ProjectCard({ project, ext = '.tsx' }: Props) {
  const t = useT()
  const { lang } = useLang()
  return (
    <article className="group relative flex flex-col border border-line bg-surface transition-[border-color,transform] focus-within:border-accent hover:-translate-y-0.5 hover:border-accent">
      <div className="flex items-stretch justify-between border-b border-line text-xs">
        <span className="min-w-0 truncate border-r border-t-2 border-r-line border-t-accent-2 bg-bg px-3 py-2 text-fg">
          {project.id}
          {ext}
        </span>
        <span className={`shrink-0 px-3 py-2 ${statusColor[project.status]}`}>{t.projects.status[project.status]}</span>
      </div>
      {project.image && (
        <img
          src={project.image}
          alt={fill(t.projects.thumbnailAlt, { title: project.title })}
          loading="lazy"
          className="aspect-[16/10] w-full border-b border-line object-cover"
        />
      )}
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
