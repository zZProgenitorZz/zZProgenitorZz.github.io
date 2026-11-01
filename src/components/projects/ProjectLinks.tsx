import Button from '../ui/Button'
import { useT } from '../../i18n/LanguageContext'
import type { Project } from '../../content/projects'

/** Live and source buttons; renders nothing when the project has neither. `className` sets the top margin. */
export default function ProjectLinks({ project, className }: { project: Project; className: string }) {
  const t = useT()
  if (!project.live && !project.repo) return null
  return (
    <div className={`${className} flex flex-wrap gap-2`}>
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
