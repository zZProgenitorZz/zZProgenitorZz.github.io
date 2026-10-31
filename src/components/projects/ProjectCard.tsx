import Button from '../ui/Button'
import Card from '../ui/Card'
import Tag from '../ui/Tag'
import Seal from '../decor/Seal'
import { useLang, useT } from '../../i18n/LanguageContext'
import { fill } from '../../lib/rich'
import type { Project } from '../../content/projects'

export function ProjectLinks({ project }: { project: Project }) {
  const t = useT()
  if (!project.live && !project.repo) return null
  return (
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
  )
}

/** Talisman-style card: gold bars top and bottom, seal + grade badge, optional image. */
export default function ProjectCard({ project }: { project: Project }) {
  const t = useT()
  const { lang } = useLang()
  return (
    <Card as="article" lift className="flex flex-col">
      <div aria-hidden="true" className="h-1 bg-gold" />
      <div className="flex items-center justify-between border-b border-line p-2">
        <Seal size={24} />
        <span className="border border-gold px-2 py-0.5 text-xs text-gold">{t.projects.grades[project.size]}</span>
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
        <h3 className="font-display text-2xl font-semibold text-fg">{project.title}</h3>
        <ul className="mt-1 flex flex-wrap gap-x-2 text-xs">
          {project.tech.map((x) => (
            <Tag key={x}>{x}</Tag>
          ))}
        </ul>
        <p className="mt-3 flex-1">{project.description[lang]}</p>
        <ProjectLinks project={project} />
      </div>
      <div aria-hidden="true" className="h-1 bg-gold" />
    </Card>
  )
}
