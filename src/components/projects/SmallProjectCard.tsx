import ProjectCard from './ProjectCard'
import type { Project } from '../../content/projects'

/** Same tarot card; without an image the arch shows a sigil. */
export default function SmallProjectCard({ project }: { project: Project }) {
  return <ProjectCard project={{ ...project, image: undefined }} />
}
