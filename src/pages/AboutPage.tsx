import PageTitle from '../components/ui/PageTitle'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import Grimoire from '../components/about/Grimoire'
import FunFacts from '../components/about/FunFacts'
import Journey from '../components/sections/Journey'
import CornerBrackets from '../components/decor/CornerBrackets'
import PageEdgeDecor from '../components/decor/PageEdgeDecor'
import Button from '../components/ui/Button'
import { socials } from '../content/socials'
import { useLang, useT } from '../i18n/LanguageContext'

export default function AboutPage() {
  const t = useT()
  const { lang } = useLang()
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
            {socials.cv && (
              <Button href={socials.cv[lang]} download variant="ghost">
                {t.hero.downloadCv}
              </Button>
            )}
          </div>
          <div className="relative mx-auto w-full max-w-[280px] border border-line bg-surface p-3">
            <img src="/images/portrait.webp" alt={a.imageAlt} width={400} height={480} className="block h-auto w-full" />
            <CornerBrackets always size={14} />
          </div>
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
