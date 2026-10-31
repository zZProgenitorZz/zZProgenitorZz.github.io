import { useT } from '../../i18n/LanguageContext'

export default function CurrentlyCard() {
  const t = useT()
  return (
    <div className="relative mx-auto flex max-w-[380px] items-center gap-3 border border-line bg-bg p-3">
      <span aria-hidden="true" className="h-4 w-4 shrink-0 bg-accent" />
      <p>
        {t.hero.currentlyLabel} <span className="text-fg">{t.hero.currentProject}</span>
      </p>
    </div>
  )
}
