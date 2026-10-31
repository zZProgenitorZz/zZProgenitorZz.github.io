import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ClockHands from '../decor/ClockHands'
import { facts } from '../../content/facts'
import { useLang, useT } from '../../i18n/LanguageContext'
import { rich } from '../../lib/rich'

const TORN = 'polygon(0 0,100% 0,100% 90%,94% 100%,86% 92%,78% 100%,69% 91%,60% 100%,50% 92%,41% 100%,31% 91%,22% 100%,12% 92%,5% 100%,0 93%)'

/** Secrets written on small torn notes. */
export default function FunFacts() {
  const t = useT()
  const { lang } = useLang()
  return (
    <Section labelledBy="facts-heading">
      <SectionHeading id="facts-heading" title={t.about.factsHeading} />
      <ul className="flex flex-wrap gap-4 lg:max-w-[75%]">
        {facts.map((f, i) => (
          <li
            key={i}
            style={{ clipPath: TORN }}
            className={`relative inline-block border-t border-brass/60 bg-surface px-3 pb-5 pt-3 text-muted ${
              i % 2 ? 'rotate-1' : '-rotate-1'
            }`}
          >
            <span aria-hidden="true" className="absolute left-2 top-1.5 h-1.5 w-1.5 bg-crimson" />
            <span className="pl-3">{rich(f[lang], 'text-fg')}</span>
          </li>
        ))}
      </ul>
      <ClockHands size={110} className="right-12 top-16 hidden lg:block" />
    </Section>
  )
}
