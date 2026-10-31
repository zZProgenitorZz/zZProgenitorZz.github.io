import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import DotGrid from '../decor/DotGrid'
import OutlineSquare from '../decor/OutlineSquare'
import { facts } from '../../content/facts'
import { useLang, useT } from '../../i18n/LanguageContext'
import { rich } from '../../lib/rich'

export default function FunFacts() {
  const t = useT()
  const { lang } = useLang()
  return (
    <Section labelledBy="facts-heading">
      <SectionHeading id="facts-heading" title={t.about.factsHeading} />
      <ul className="flex flex-wrap gap-4 lg:max-w-[75%]">
        {facts.map((f, i) => (
          <li key={i} className="inline-block border border-line px-2 py-1 text-muted">
            {rich(f[lang], 'text-fg')}
          </li>
        ))}
      </ul>
      <DotGrid rows={5} cols={5} className="right-16 top-12 hidden lg:block" />
      <OutlineSquare size={80} color="line" className="bottom-4 right-40 hidden lg:block" />
    </Section>
  )
}
