import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Gear from '../decor/Gear'
import { sequences } from '../../content/sequences'
import { useLang, useT } from '../../i18n/LanguageContext'

const DASHED = 'repeating-linear-gradient(to bottom, currentColor 0 4px, transparent 4px 8px)'

/**
 * Full growth ladder: Sequence 0 at the top, Sequence 9 at the bottom.
 * Future steps are fogged (the fog is removed for prefers-reduced-transparency / prefers-contrast: more).
 */
export default function SequenceLadder({ num = '01' }: { num?: string }) {
  const t = useT()
  const { lang } = useLang()
  const s = t.sequence
  const currentSeq = sequences.find((x) => x.current)?.seq ?? 9
  const rungs = [...sequences].sort((a, b) => a.seq - b.seq) // 0 first = top
  const currentIdx = rungs.findIndex((x) => x.seq === currentSeq)

  return (
    <Section labelledBy="sequence-heading">
      <SectionHeading id="sequence-heading" num={num} title={s.heading} />
      <p className="mb-4 text-sm">
        <span aria-hidden="true" className="mr-2 text-ok">
          $
        </span>
        <span className="text-fg">{s.command}</span>
      </p>
      <ol className="max-w-[620px]">
        {rungs.map((r, i) => {
          const state = r.current ? 'current' : r.seq > currentSeq ? 'reached' : 'future'
          const last = i === rungs.length - 1
          const node =
            state === 'current'
              ? 'border-accent-2 bg-accent-2/15 text-fg'
              : state === 'reached'
                ? 'border-accent text-accent'
                : 'border-line text-muted'
          return (
            <li key={r.seq} className="flex gap-4" aria-current={r.current ? 'step' : undefined}>
              <div aria-hidden="true" className="flex flex-col items-center">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center border ${node}`}>{r.seq}</span>
                {!last &&
                  (i < currentIdx ? (
                    <span className="min-h-4 w-px flex-1 text-line-strong/50" style={{ backgroundImage: DASHED }} />
                  ) : (
                    <span className="min-h-4 w-px flex-1 bg-line-strong/50" />
                  ))}
              </div>
              <div className={`min-w-0 pb-6 ${state === 'future' ? 'fogged' : ''} ${r.seq === 0 ? 'fogged-deep' : ''}`}>
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <span className={state === 'future' ? 'text-fg' : ''}>
                    {s.label} {r.seq}
                  </span>
                  {state !== 'future' && r.year && <span className="text-accent">{r.year}</span>}
                  {r.current && <span className="text-accent-2">{s.current}</span>}
                  {r.seq === 0 && <span className="sr-only">{s.locked}</span>}
                </p>
                <h3 className="text-lg font-bold text-fg">{r.title[lang]}</h3>
                {state !== 'future' && r.text && <p className="mt-1 max-w-[56ch] text-sm">{r.text[lang]}</p>}
              </div>
            </li>
          )
        })}
      </ol>
      <Gear size={150} className="right-10 top-24 hidden lg:block" />
    </Section>
  )
}
