import PageTitle from '../components/ui/PageTitle'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import Grimoire from '../components/about/Grimoire'
import FunFacts from '../components/about/FunFacts'
import CornerBrackets from '../components/decor/CornerBrackets'
import PageEdgeDecor from '../components/decor/PageEdgeDecor'
import { useT } from '../i18n/LanguageContext'

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
          <div className="relative mx-auto w-full max-w-[280px] border border-line bg-surface p-3">
            <img src="/images/portrait.png" alt={a.imageAlt} width={400} height={480} className="block h-auto w-full" />
            <CornerBrackets always size={14} />
          </div>
        </div>
      </Section>

      <Section labelledBy="about-skills-heading">
        <SectionHeading id="about-skills-heading" num="01" title={a.skillsHeading} />
        <Grimoire />
      </Section>

      <FunFacts />
    </div>
  )
}
