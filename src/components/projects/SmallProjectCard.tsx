import Card from '../ui/Card'
import { ProjectLinks, TechTags } from './ProjectCard'
import { useLang } from '../../i18n/LanguageContext'
import type { Project } from '../../content/projects'

export default function SmallProjectCard({ project }: { project: Project }) {
  const { lang } = useLang()
  return (
    <Card as="article" lift className="flex flex-col">
      <TechTags tech={project.tech} />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-2xl font-medium text-fg">{project.title}</h3>
        <p className="mt-2 flex-1">{project.description[lang]}</p>
        <ProjectLinks project={project} />
      </div>
    </Card>
  )
}
