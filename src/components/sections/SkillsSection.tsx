import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Grimoire from '../about/Grimoire'
import Crosshair from '../decor/Crosshair'
import { useT } from '../../i18n/LanguageContext'

export default function SkillsSection() {
  const t = useT()
  return (
    <Section labelledBy="skills-heading">
      <SectionHeading id="skills-heading" num="02" title={t.skills.heading} />
      <Grimoire />
      <Crosshair className="right-10 top-10 hidden lg:block" />
    </Section>
  )
}
