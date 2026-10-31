import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ScrollPanel from '../ui/ScrollPanel'
import FormationFragment from '../decor/FormationFragment'
import { facts } from '../../content/facts'
import { useLang, useT } from '../../i18n/LanguageContext'
import { rich } from '../../lib/rich'

export default function FunFacts() {
  const t = useT()
  const { lang } = useLang()
  return (
    <Section labelledBy="facts-heading">
      <SectionHeading id="facts-heading" title={t.about.factsHeading} />
      <ScrollPanel className="lg:max-w-[75%]">
        <ul className="flex flex-wrap gap-4">
          {facts.map((f, i) => (
            <li key={i} className="inline-block border border-line bg-bg px-2 py-1 text-muted">
              {rich(f[lang], 'text-fg')}
            </li>
          ))}
        </ul>
      </ScrollPanel>
      <FormationFragment variant="c" size={110} className="right-12 top-16 hidden lg:block" />
    </Section>
  )
}
