import PageTitle from '../components/ui/PageTitle'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import SkillCard from '../components/about/SkillCard'
import FunFacts from '../components/about/FunFacts'
import BrassFrame from '../components/decor/BrassFrame'
import Gear from '../components/decor/Gear'
import PageEdgeDecor from '../components/decor/PageEdgeDecor'
import FogBand from '../components/decor/FogBand'
import { skills, type SkillCategory } from '../content/skills'
import { useT } from '../i18n/LanguageContext'

const order: SkillCategory[] = ['languages', 'frameworks', 'databases', 'tools', 'other']

export default function AboutPage() {
  const t = useT()
  const a = t.about
  return (
    <div className="relative">
      <PageEdgeDecor
        items={[
          { top: '30%', side: 'left' },
          { top: '72%', side: 'right' },
        ]}
      />
      <PageTitle id="about-title" title={a.title} subtitle={a.subtitle} />

      <Section labelledBy="about-title">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-4">
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="relative mx-auto w-full max-w-[300px]">
            <Gear size={110} className="-left-16 -top-8 hidden md:block" />
            <BrassFrame>
              <img src="/images/portrait.png" alt={a.imageAlt} width={400} height={480} className="block h-auto w-full" />
            </BrassFrame>
          </div>
        </div>
      </Section>

      <FogBand />
      <Section labelledBy="about-skills-heading">
        <SectionHeading id="about-skills-heading" title={a.skillsHeading} />
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr))]">
          {order.map((key, i) => (
            <SkillCard key={key} title={t.skills[key]} items={skills[key]} index={i + 1} />
          ))}
        </div>
      </Section>

      <FogBand />
      <FunFacts />
    </div>
  )
}
