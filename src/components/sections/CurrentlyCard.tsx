import { useT } from '../../i18n/LanguageContext'

/** Status scroll: gold end caps, thin top and bottom lines. */
export default function CurrentlyCard() {
  const t = useT()
  return (
    <div className="relative mx-auto mt-4 flex max-w-[380px] items-stretch">
      <span aria-hidden="true" className="w-2 shrink-0 border border-gold bg-gold/20" />
      <p className="flex-1 border-y border-gold/60 bg-surface px-3 py-2">
        <span className="text-muted">{t.hero.currentlyLabel}</span> <span className="text-fg">{t.hero.currentProject}</span>
      </p>
      <span aria-hidden="true" className="w-2 shrink-0 border border-gold bg-gold/20" />
    </div>
  )
}
