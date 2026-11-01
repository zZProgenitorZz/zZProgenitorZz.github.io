import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Portrait from '../about/Portrait'
import { useT } from '../../i18n/LanguageContext'

export default function AboutPreview() {
  const t = useT()
  const a = t.aboutPreview
  return (
    <Section labelledBy="about-preview-heading">
      <SectionHeading id="about-preview-heading" num="04" title={a.heading} />
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-4">
          {a.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <Button href="/about" className="mt-4">
            {a.cta}
          </Button>
        </div>
        <Portrait alt={a.imageAlt} lazy />
      </div>
    </Section>
  )
}
