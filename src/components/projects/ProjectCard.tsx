import Button from '../ui/Button'
import Card from '../ui/Card'
import Tag from '../ui/Tag'
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

export function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-2 border-b border-line p-2 text-xs">
      {tech.map((x) => (
        <Tag key={x}>{x}</Tag>
      ))}
    </ul>
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  const t = useT()
  const { lang } = useLang()
  return (
    <Card as="article" lift className="flex flex-col">
      {project.image && (
        <img
          src={project.image}
          alt={fill(t.projects.thumbnailAlt, { title: project.title })}
          loading="lazy"
          className="aspect-[16/10] w-full border-b border-line object-cover"
        />
      )}
      <TechTags tech={project.tech} />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-2xl font-medium text-fg">{project.title}</h3>
        <p className="mt-2 flex-1">{project.description[lang]}</p>
        <ProjectLinks project={project} />
      </div>
    </Card>
  )
}
