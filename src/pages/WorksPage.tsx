import { useState } from 'react'
import PageTitle from '../components/ui/PageTitle'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectGrid from '../components/projects/ProjectGrid'
import ProjectFilters from '../components/projects/ProjectFilters'
import { emptyFilters, filterProjects, type Filters } from '../components/projects/filters'
import PageEdgeDecor from '../components/decor/PageEdgeDecor'
import Gear from '../components/decor/Gear'
import { projects } from '../content/projects'
import { useT } from '../i18n/LanguageContext'

export default function WorksPage() {
  const t = useT()
  const [filters, setFilters] = useState<Filters>(emptyFilters)
  const shown = filterProjects(projects, filters)
  const large = shown.filter((p) => p.size === 'large')
  const small = shown.filter((p) => p.size === 'small')

  return (
    <div className="relative">
      <PageEdgeDecor
        items={[
          { top: '12%', side: 'right' },
          { top: '30%', side: 'left' },
        ]}
      />
      <Gear size={90} className="right-24 top-8 hidden lg:block" />
      <PageTitle id="works-title" title={t.works.title} subtitle={t.works.subtitle} />
      <ProjectFilters projects={projects} value={filters} onChange={setFilters} />
      {shown.length === 0 && (
        <p role="status" className="container-page py-12">
          {t.projects.noMatch}
        </p>
      )}
      {large.length > 0 && (
        <Section labelledBy="apps-heading">
          <SectionHeading id="apps-heading" num="01" title={t.works.completeApps} />
          <ProjectGrid projects={large} />
        </Section>
      )}
      {small.length > 0 && (
        <Section labelledBy="small-heading">
          <SectionHeading id="small-heading" num="02" title={t.works.smallProjects} />
          <ProjectGrid projects={small} variant="small" />
        </Section>
      )}
    </div>
  )
}
