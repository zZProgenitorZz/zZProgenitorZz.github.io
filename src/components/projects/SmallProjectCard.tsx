import ProjectCard from './ProjectCard'
import type { Project } from '../../content/projects'

/** Same talisman card without an image. */
export default function SmallProjectCard({ project }: { project: Project }) {
  return <ProjectCard project={{ ...project, image: undefined }} />
}
