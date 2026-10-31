import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import SkillCard from '../about/SkillCard'
import DotGrid from '../decor/DotGrid'
import OutlineSquare from '../decor/OutlineSquare'
import { skills } from '../../content/skills'
import { useT } from '../../i18n/LanguageContext'

export default function SkillsSection() {
  const t = useT()
  const card = (key: keyof typeof skills) => <SkillCard title={t.skills[key]} items={skills[key]} />

  return (
    <Section labelledBy="skills-heading">
      <SectionHeading id="skills-heading" title={t.skills.heading} />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Decorative cluster (desktop only) */}
        <div aria-hidden="true" className="relative hidden min-h-[320px] lg:block">
          <DotGrid rows={5} cols={5} className="left-8 top-0" />
          <OutlineSquare size={88} color="accent" className="left-32 top-24" />
          <OutlineSquare size={88} color="accent" className="left-44 top-36" />
          <OutlineSquare size={32} color="line" className="left-6 top-56" />
          <OutlineSquare size={24} color="line" className="left-72 top-6" />
          <DotGrid rows={3} cols={3} className="bottom-4 left-48" />
        </div>

        {/* Staggered masonry: three columns from lg, flat grid below */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
          <div className="contents lg:flex lg:flex-col lg:gap-4">
            {card('languages')}
            {card('databases')}
          </div>
          <div className="contents lg:mt-12 lg:flex lg:flex-col lg:gap-4">
            {card('tools')}
            {card('other')}
          </div>
          <div className="contents lg:mt-6 lg:flex lg:flex-col lg:gap-4">{card('frameworks')}</div>
        </div>
      </div>
    </Section>
  )
}
