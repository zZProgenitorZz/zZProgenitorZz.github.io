import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { socials } from '../../content/socials'
import { useT } from '../../i18n/LanguageContext'

const link = 'inline-flex p-1 text-muted transition-colors hover:text-fg'

export default function SocialRail() {
  const t = useT()
  return (
    <aside aria-label={t.nav.social} className="fixed left-1 top-0 z-30 hidden flex-col items-center lg:flex">
      <div aria-hidden="true" className="h-[190px] w-px bg-muted" />
      <ul className="flex flex-col items-center gap-2 pt-2">
        <li>
          <a href={socials.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className={link}>
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href={socials.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className={link}>
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href={`mailto:${socials.email}`} aria-label="Email" className={link}>
            <Mail aria-hidden="true" className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </aside>
  )
}
