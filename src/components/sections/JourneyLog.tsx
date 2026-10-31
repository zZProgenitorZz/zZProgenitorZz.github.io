import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ClockHands from '../decor/ClockHands'
import { sequences } from '../../content/sequences'
import { useLang, useT } from '../../i18n/LanguageContext'

const hash = (n: number) => (Math.imul(n + 7, 2654435761) >>> 0).toString(16).padStart(8, '0').slice(0, 7)

/** Growth path rendered as `git log --graph --oneline`. Planned sequences sit above HEAD. */
export default function JourneyLog() {
  const t = useT()
  const { lang } = useLang()
  const currentSeq = sequences.find((s) => s.current)?.seq ?? 9
  const rungs = [...sequences].sort((a, b) => a.seq - b.seq)

  return (
    <Section labelledBy="journey-heading">
      <SectionHeading id="journey-heading" num="03" title={t.journey.heading} />
      <p className="mb-4 text-sm">
        <span aria-hidden="true" className="mr-2 text-ok">
          $
        </span>
        <span className="text-fg">{t.journey.command}</span>
      </p>
      <ol className="max-w-[680px]">
        {rungs.map((s, i) => {
          const planned = s.seq < currentSeq
          const last = i === rungs.length - 1
          return (
            <li key={s.seq} className="flex gap-3" aria-current={s.current ? 'step' : undefined}>
              <div aria-hidden="true" className="flex flex-col items-center pt-1.5">
                <span className={`h-2.5 w-2.5 shrink-0 ${s.current ? 'bg-accent-2' : planned ? 'border border-line-strong' : 'bg-accent'}`} />
                {!last && <span className={`min-h-4 flex-1 border-l ${planned ? 'border-dashed border-line-strong' : 'border-line-strong'}`} />}
              </div>
              <div className={`min-w-0 pb-4 ${planned ? 'opacity-70' : ''}`}>
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-accent">{planned ? '???????' : hash(s.seq)}</span>
                  {s.current && <span className="border border-accent-2 px-1 text-xs text-accent-2">({t.journey.head})</span>}
                  {planned && <span className="text-xs">({t.journey.planned})</span>}
                  <span className="text-fg">
                    {t.journey.label} {s.seq} — {s.title[lang]}
                  </span>
                  {s.year && <span className="text-xs">{s.year}</span>}
                </p>
                {s.text && <p className="mt-1 max-w-[60ch] text-sm">{s.text[lang]}</p>}
              </div>
            </li>
          )
        })}
      </ol>
      <ClockHands size={110} className="right-8 top-24 hidden lg:block" />
    </Section>
  )
}
