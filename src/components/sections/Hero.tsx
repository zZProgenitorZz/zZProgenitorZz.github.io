import Button from '../ui/Button'
import TerminalWindow from '../ui/TerminalWindow'
import RuneCircle from '../decor/RuneCircle'
import CornerBrackets from '../decor/CornerBrackets'
import { sequences } from '../../content/sequences'
import { useLang, useT } from '../../i18n/LanguageContext'
import { fill } from '../../lib/rich'
import type { ReactNode } from 'react'

export default function Hero() {
  const t = useT()
  const { lang } = useLang()
  const h = t.hero
  const slug = t.name.toLowerCase().trim().replace(/\s+/g, '-')
  const current = sequences.find((s) => s.current)
  const level = current ? `${h.levelLabel} ${current.seq} — ${current.title[lang]}` : ''

  const rows: [string, ReactNode][] = [
    [
      h.keys.name,
      <h1 key="n" id="hero-title" className="text-2xl font-bold leading-tight text-fg md:text-4xl">
        {t.name}
      </h1>,
    ],
    [h.keys.role, <span className="text-fg">{t.role}</span>],
    [h.keys.stack, h.stack],
    [h.keys.level, level],
    [
      h.keys.status,
      <span className="inline-flex items-center gap-2">
        <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-ok" />
        <span className="text-fg">{h.currentProject}</span>
      </span>,
    ],
    [h.keys.bio, h.bio],
  ]

  return (
    <section id="home" aria-labelledby="hero-title" className="relative py-12 md:py-16">
      <div aria-hidden="true" className="bg-blueprint pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
      <div className="container-page relative">
        <RuneCircle className="-right-20 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 md:block" />
        <div className="relative z-10 md:w-[85%]">
          <TerminalWindow title={fill(h.windowTitle, { name: slug })} className="relative">
            <p className="text-sm">
              <span aria-hidden="true" className="mr-2 text-ok">
                $
              </span>
              <span className="text-fg">{h.command}</span>
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <img
                src="/images/portrait.png"
                alt={h.portraitAlt}
                width={400}
                height={480}
                className="h-16 w-14 shrink-0 border border-line bg-bg object-cover object-top"
              />
              <dl className="min-w-0 flex-1 space-y-1.5">
                {rows.map(([k, v]) => (
                  <div key={k} className="flex gap-3">
                    <dt className="w-16 shrink-0 text-muted">{k}:</dt>
                    <dd className="min-w-0 flex-1">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-4 text-sm" aria-hidden="true">
              <span className="mr-2 text-ok">$</span>
              <span className="inline-block h-[1.1em] w-[0.6em] translate-y-[0.2em] bg-accent-2 motion-safe:animate-blink" />
            </p>
            <CornerBrackets always />
          </TerminalWindow>
          <Button href="/#contacts" className="mt-8">
            {h.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
