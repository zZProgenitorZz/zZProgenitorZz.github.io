import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import BrassFrame from '../decor/BrassFrame'
import Sigil from '../decor/Sigil'
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
        <div className="relative mx-auto w-full max-w-[300px]">
          <Sigil variant="a" size={90} className="-right-12 -top-8 hidden md:block" />
          <BrassFrame>
            <img src="/images/portrait.png" alt={a.imageAlt} width={400} height={480} loading="lazy" className="block h-auto w-full" />
          </BrassFrame>
        </div>
      </div>
    </Section>
  )
}
