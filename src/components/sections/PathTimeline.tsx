import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { timeline } from '../../content/timeline'
import { useLang, useT } from '../../i18n/LanguageContext'

/** Vertical path with jade "breakthrough" nodes. */
export default function PathTimeline() {
  const t = useT()
  const { lang } = useLang()
  return (
    <Section labelledBy="path-heading">
      <SectionHeading id="path-heading" title={t.path.heading} />
      <ol className="ml-2 space-y-10 border-l border-line pl-8">
        {timeline.map((m, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[41px] top-1 h-4 w-4 rotate-45 border border-jade bg-bg shadow-[0_0_12px_2px_rgba(95,201,160,0.45)]"
            />
            <p className="text-sm text-gold">{m.year}</p>
            <h3 className="font-display text-2xl font-semibold text-fg">{m.title[lang]}</h3>
            <p className="mt-1 max-w-[60ch]">{m.text[lang]}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
