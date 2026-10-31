import { useT } from '../../i18n/LanguageContext'

/** Victorian calling card with the current project. */
export default function CurrentlyCard() {
  const t = useT()
  return (
    <div className="relative mx-auto mt-6 max-w-[380px] border border-brass bg-surface p-1">
      <div className="border border-brass/50 px-4 py-3 text-center">
        <p className="text-xs uppercase tracking-widest text-muted">{t.hero.currentlyLabel}</p>
        <p className="mt-1 font-display text-xl italic text-fg">{t.hero.currentProject}</p>
      </div>
    </div>
  )
}
