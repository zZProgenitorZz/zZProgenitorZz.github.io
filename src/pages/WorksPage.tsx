import PageTitle from '../components/ui/PageTitle'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectGrid from '../components/projects/ProjectGrid'
import PageEdgeDecor from '../components/decor/PageEdgeDecor'
import { projects } from '../content/projects'
import { useT } from '../i18n/LanguageContext'

export default function WorksPage() {
  const t = useT()
  return (
    <div className="relative">
      <PageEdgeDecor
        items={[
          { top: '12%', side: 'right' },
          { top: '30%', side: 'left' },
        ]}
      />
      <PageTitle id="works-title" title={t.works.title} subtitle={t.works.subtitle} />
      <Section labelledBy="apps-heading">
        <SectionHeading id="apps-heading" title={t.works.completeApps} />
        <ProjectGrid projects={projects.filter((p) => p.size === 'large')} />
      </Section>
      <Section labelledBy="small-heading">
        <SectionHeading id="small-heading" title={t.works.smallProjects} />
        <ProjectGrid projects={projects.filter((p) => p.size === 'small')} variant="small" />
      </Section>
    </div>
  )
}
