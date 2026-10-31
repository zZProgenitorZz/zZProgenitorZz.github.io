import ProjectCard from './ProjectCard'
import SmallProjectCard from './SmallProjectCard'
import type { Project } from '../../content/projects'

type Props = { projects: Project[]; variant?: 'large' | 'small' }

export default function ProjectGrid({ projects, variant = 'large' }: Props) {
  const cols = variant === 'small' ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3'
  return (
    <ul className={`mx-auto grid max-w-[360px] gap-4 sm:max-w-none ${cols}`}>
      {projects.map((p) => (
        <li key={p.id}>{variant === 'small' ? <SmallProjectCard project={p} /> : <ProjectCard project={p} />}</li>
      ))}
    </ul>
  )
}
