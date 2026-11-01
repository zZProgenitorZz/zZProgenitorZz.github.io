import SocialLinks from '../ui/SocialLinks'
import { useT } from '../../i18n/LanguageContext'

export default function SocialRail() {
  const t = useT()
  return (
    <aside aria-label={t.nav.social} className="fixed left-1 top-0 z-30 hidden flex-col items-center lg:flex">
      <div aria-hidden="true" className="h-[190px] w-px bg-muted" />
      <SocialLinks
        className="flex flex-col items-center gap-2 pt-2"
        linkClass="inline-flex p-1 text-muted transition-colors hover:text-fg"
        iconClass="h-5 w-5"
      />
    </aside>
  )
}
