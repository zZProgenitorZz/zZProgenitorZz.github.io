import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import CornerBrackets from '../decor/CornerBrackets'
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
        <div className="relative mx-auto w-full max-w-[280px] border border-line bg-surface p-3">
          <img src="/images/portrait.webp" alt={a.imageAlt} width={400} height={480} loading="lazy" className="block h-auto w-full" />
          <CornerBrackets always size={14} />
        </div>
      </div>
    </Section>
  )
}
