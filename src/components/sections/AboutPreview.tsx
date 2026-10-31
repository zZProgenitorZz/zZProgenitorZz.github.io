import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import DotGrid from '../decor/DotGrid'
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
          <img src="/images/portrait.png" alt={a.imageAlt} width={400} height={480} loading="lazy" className="block h-auto w-full" />
          <DotGrid rows={5} cols={5} className="-right-4 bottom-4 hidden md:block" />
        </div>
      </div>
    </Section>
  )
}
