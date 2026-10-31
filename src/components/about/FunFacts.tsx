import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import CornerBrackets from '../decor/CornerBrackets'
import Crosshair from '../decor/Crosshair'
import { facts } from '../../content/facts'
import { useLang, useT } from '../../i18n/LanguageContext'
import { rich } from '../../lib/rich'

/** Fun facts as a /** ... *\/ comment block. */
export default function FunFacts() {
  const t = useT()
  const { lang } = useLang()
  return (
    <Section labelledBy="facts-heading">
      <SectionHeading id="facts-heading" num="02" title={t.about.factsHeading} />
      <div className="relative border border-line bg-surface p-4 md:p-6 lg:max-w-[75%]">
        <p aria-hidden="true" className="text-line-strong">
          {'/**'}
        </p>
        <ul>
          {facts.map((f, i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden="true" className="text-line-strong">
                *
              </span>
              <span className="min-w-0">{rich(f[lang], 'font-bold text-fg')}</span>
            </li>
          ))}
        </ul>
        <p aria-hidden="true" className="text-line-strong">
          {' */'}
        </p>
        <CornerBrackets always />
      </div>
      <Crosshair className="right-16 top-16 hidden lg:block" />
    </Section>
  )
}
