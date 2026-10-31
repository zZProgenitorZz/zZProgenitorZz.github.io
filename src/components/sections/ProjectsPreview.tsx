import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ProjectGrid from '../projects/ProjectGrid'
import { projects } from '../../content/projects'
import { useT } from '../../i18n/LanguageContext'

const featured = projects.filter((p) => p.featured).slice(0, 3)

export default function ProjectsPreview() {
  const t = useT()
  return (
    <Section labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        title={t.projects.heading}
        action={
          <Link to="/works" className="transition-colors hover:text-fg">
            {t.projects.viewAll}
          </Link>
        }
      />
      <ProjectGrid projects={featured} />
    </Section>
  )
}
