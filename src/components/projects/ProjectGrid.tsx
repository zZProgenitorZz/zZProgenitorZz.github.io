import ProjectCard from './ProjectCard'
import SmallProjectCard from './SmallProjectCard'
import type { Project } from '../../content/projects'

type Props = { projects: Project[]; variant?: 'large' | 'small' }

export default function ProjectGrid({ projects, variant = 'large' }: Props) {
  if (variant === 'small') {
    return (
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <li key={p.id} className="flex flex-col [&>article]:flex-1">
            <SmallProjectCard project={p} />
          </li>
        ))}
      </ul>
    )
  }
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <li key={p.id} className="mx-auto w-full max-w-[320px] sm:max-w-none">
          <ProjectCard project={p} />
        </li>
      ))}
    </ul>
  )
}
