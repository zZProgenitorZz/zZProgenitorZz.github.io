import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import PromptLine from '../ui/PromptLine'
import Gear from '../decor/Gear'
import ClockHands from '../decor/ClockHands'
import { sequences } from '../../content/sequences'
import { useLang, useT } from '../../i18n/LanguageContext'

const DASHED = 'repeating-linear-gradient(to bottom, currentColor 0 4px, transparent 4px 8px)'

const hash = (n: number) => (Math.imul(n + 7, 2654435761) >>> 0).toString(16).padStart(8, '0').slice(0, 7)

type Props = { num: string; decor?: 'clock' | 'gear' }

/**
 * Growth path as `git log --graph --oneline`, drawn as a ladder: Sequence 0 at the top, 9 at the bottom.
 * Future steps are fogged (the fog is removed for prefers-reduced-transparency / prefers-contrast: more).
 * Used on Home and About; only the section number and the decor differ.
 */
export default function Journey({ num, decor }: Props) {
  const t = useT()
  const { lang } = useLang()
  const j = t.journey
  const currentSeq = sequences.find((x) => x.current)?.seq ?? 9
  const rungs = [...sequences].sort((a, b) => a.seq - b.seq) // 0 first = top
  const currentIdx = rungs.findIndex((x) => x.seq === currentSeq)

  return (
    <Section labelledBy="journey-heading">
      <SectionHeading id="journey-heading" num={num} title={j.heading} />
      <PromptLine command={j.command} className="mb-4" />
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
            <li key={r.seq} className="flex gap-3" aria-current={r.current ? 'step' : undefined}>
              <div aria-hidden="true" className="flex shrink-0 flex-col items-center">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center border text-xs ${node}`}>{r.seq}</span>
                {!last &&
                  (i < currentIdx ? (
                    <span className="min-h-3 w-px flex-1 text-line-strong/50" style={{ backgroundImage: DASHED }} />
                  ) : (
                    <span className="min-h-3 w-px flex-1 bg-line-strong/50" />
                  ))}
              </div>
              <div className={`min-w-0 pb-4 ${state === 'future' ? 'fogged' : ''} ${r.seq <= 2 ? 'fogged-deep' : ''}`}>
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
                  <span className={state === 'future' ? 'text-fg' : 'text-accent'}>{state === 'future' ? '???????' : hash(r.seq)}</span>
                  {r.current && (
                    <>
                      <span className="border border-accent-2 px-1 text-xs text-accent-2">({j.head})</span>
                      <span className="sr-only">{j.current}</span>
                    </>
                  )}
                  {state === 'future' && <span className="text-xs text-fg">({j.planned})</span>}
                  {state !== 'future' && r.year && <span className="text-xs text-accent">{r.year}</span>}
                  {r.seq <= 2 && <span className="sr-only">{j.locked}</span>}
                </p>
                <h3 className="text-base font-bold text-fg">
                  {j.label} {r.seq} — {r.title[lang]}
                </h3>
                {state !== 'future' && r.text && <p className="mt-1 max-w-[56ch] text-sm">{r.text[lang]}</p>}
              </div>
            </li>
          )
        })}
      </ol>
      {decor === 'clock' && <ClockHands size={110} className="right-8 top-24 hidden lg:block" />}
      {decor === 'gear' && <Gear size={130} className="right-10 top-24 hidden lg:block" />}
    </Section>
  )
}
