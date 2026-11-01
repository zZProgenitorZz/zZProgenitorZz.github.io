import PageTitle from '../components/ui/PageTitle'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import Grimoire from '../components/about/Grimoire'
import FunFacts from '../components/about/FunFacts'
import Journey from '../components/sections/Journey'
import Portrait from '../components/about/Portrait'
import PageEdgeDecor from '../components/decor/PageEdgeDecor'
import CvButton from '../components/ui/CvButton'
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
            <CvButton />
          </div>
          <Portrait alt={a.imageAlt} />
        </div>
      </Section>

      <Journey num="01" decor="gear" />

      <Section labelledBy="about-skills-heading">
        <SectionHeading id="about-skills-heading" num="02" title={a.skillsHeading} />
        <Grimoire />
      </Section>

      <FunFacts />
    </div>
  )
}
