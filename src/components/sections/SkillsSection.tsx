import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import SkillCard from '../about/SkillCard'
import FormationFragment from '../decor/FormationFragment'
import { skills } from '../../content/skills'
import { useT } from '../../i18n/LanguageContext'

export default function SkillsSection() {
  const t = useT()
  const card = (key: keyof typeof skills) => <SkillCard title={t.skills[key]} items={skills[key]} />

  return (
    <Section labelledBy="skills-heading">
      <SectionHeading id="skills-heading" title={t.skills.heading} />
      <p className="-mt-4 mb-6 text-xs">
        {t.skills.legend}: {t.skills.realms.map((r, i) => `${i + 1} ${r}`).join(' · ')}
      </p>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        {/* Decorative cluster (desktop only) */}
        <div aria-hidden="true" className="relative hidden min-h-[320px] lg:block">
          <FormationFragment variant="a" size={150} className="left-10 top-4" />
          <FormationFragment variant="c" size={96} className="left-40 top-36" />
          <FormationFragment variant="b" size={110} className="left-6 top-52" />
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
