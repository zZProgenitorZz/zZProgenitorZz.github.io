import ProjectCard from './ProjectCard'
import type { Project } from '../../content/projects'

/** Same spell file without an image, as a .ts tab. */
export default function SmallProjectCard({ project }: { project: Project }) {
  return <ProjectCard project={{ ...project, image: undefined }} ext=".ts" />
}
