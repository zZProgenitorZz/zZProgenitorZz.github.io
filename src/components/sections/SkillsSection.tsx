import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import SkillCard from '../about/SkillCard'
import Gear from '../decor/Gear'
import ClockHands from '../decor/ClockHands'
import Sigil from '../decor/Sigil'
import { skills, type SkillCategory } from '../../content/skills'
import { useT } from '../../i18n/LanguageContext'

const order: SkillCategory[] = ['languages', 'frameworks', 'databases', 'tools', 'other']

export default function SkillsSection() {
  const t = useT()
  const card = (key: SkillCategory) => <SkillCard title={t.skills[key]} items={skills[key]} index={order.indexOf(key) + 1} />

  return (
    <Section labelledBy="skills-heading">
      <SectionHeading id="skills-heading" title={t.skills.heading} />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        {/* Decorative cluster (desktop only) */}
        <div aria-hidden="true" className="relative hidden min-h-[320px] lg:block">
          <Gear size={150} className="left-8 top-2" />
          <ClockHands size={100} className="left-40 top-40" />
          <Sigil variant="b" size={70} className="left-6 top-56" />
        </div>

        {/* Staggered masonry: three columns from lg, flat grid below */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))] lg:items-start">
          <div className="contents lg:flex lg:min-w-0 lg:flex-col lg:gap-4">
            {card('languages')}
            {card('databases')}
          </div>
          <div className="contents lg:mt-12 lg:flex lg:min-w-0 lg:flex-col lg:gap-4">
            {card('tools')}
            {card('other')}
          </div>
          <div className="contents lg:mt-6 lg:flex lg:min-w-0 lg:flex-col lg:gap-4">{card('frameworks')}</div>
        </div>
      </div>
    </Section>
  )
}
