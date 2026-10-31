import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Gear from '../decor/Gear'
import { sequences } from '../../content/sequences'
import { useLang, useT } from '../../i18n/LanguageContext'

/** Vertical ladder: Sequence 0 at the top, Sequence 9 at the bottom. Future steps are fogged. */
export default function SequenceLadder() {
  const t = useT()
  const { lang } = useLang()
  const currentSeq = sequences.find((s) => s.current)?.seq ?? 9
  const rungs = [...sequences].sort((a, b) => a.seq - b.seq) // 0 first = top

  return (
    <Section labelledBy="sequence-heading">
      <SectionHeading id="sequence-heading" title={t.sequence.heading} />
      <ol className="max-w-[620px]">
        {rungs.map((s, i) => {
          const state = s.current ? 'current' : s.seq > currentSeq ? 'past' : 'future'
          const last = i === rungs.length - 1
          const node =
            state === 'current'
              ? 'border-crimson bg-crimson text-fg'
              : state === 'past'
                ? 'border-brass text-brass'
                : 'border-line text-muted'
          return (
            <li key={s.seq} className="flex gap-4" aria-current={s.current ? 'step' : undefined}>
              <div aria-hidden="true" className="flex flex-col items-center">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center border font-display text-lg ${node}`}>{s.seq}</span>
                {!last && <span className="min-h-4 w-px flex-1 bg-brass/40" />}
              </div>
              <div
                className={`min-w-0 pb-6 ${state === 'future' ? 'select-none opacity-60 blur-[1.5px]' : ''} ${
                  s.seq === 0 ? 'blur-[3px]' : ''
                }`}
              >
                <p className="flex flex-wrap items-center gap-2 text-xs">
                  <span>
                    {t.sequence.label} {s.seq}
                  </span>
                  {s.year && <span className="text-brass">{s.year}</span>}
                  {s.current && <span className="bg-crimson px-2 py-0.5 text-fg">{t.sequence.current}</span>}
                  {s.seq === 0 && <span className="sr-only">{t.sequence.locked}</span>}
                </p>
                <h3 className="font-display text-2xl text-fg">{s.title[lang]}</h3>
                {s.text && <p className="mt-1 max-w-[56ch]">{s.text[lang]}</p>}
              </div>
            </li>
          )
        })}
      </ol>
      <Gear size={150} className="right-16 top-24 hidden lg:block" />
    </Section>
  )
}
