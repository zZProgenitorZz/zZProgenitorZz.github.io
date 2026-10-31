import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import FormationFragment from '../decor/FormationFragment'
import { useT } from '../../i18n/LanguageContext'

export default function AboutPreview() {
  const t = useT()
  const a = t.aboutPreview
  return (
    <Section labelledBy="about-preview-heading">
      <SectionHeading id="about-preview-heading" title={a.heading} />
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-4">
          {a.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <Button href="/about" className="mt-4">
            {a.cta}
          </Button>
        </div>
        <div className="relative mx-auto w-full max-w-[320px]">
          <FormationFragment variant="a" size={120} className="-right-6 bottom-4 hidden md:block" />
          <img src="/images/portrait.png" alt={a.imageAlt} width={400} height={480} loading="lazy" className="relative block h-auto w-full" />
        </div>
      </div>
    </Section>
  )
}
