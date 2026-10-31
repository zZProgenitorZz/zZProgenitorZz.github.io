import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { socials } from '../../content/socials'
import { useT } from '../../i18n/LanguageContext'

const row = 'flex min-h-11 items-center gap-2 break-all transition-colors hover:text-fg'

export default function ContactLinks() {
  const t = useT()
  return (
    <div className="border border-line p-4">
      <h3 className="font-medium text-fg">{t.contact.boxTitle}</h3>
      <ul className="mt-2 space-y-1">
        <li>
          <a href={`mailto:${socials.email}`} className={row}>
            <Mail aria-hidden="true" className="h-5 w-5 shrink-0" />
            {socials.email}
          </a>
        </li>
        <li>
          <a href={socials.github} target="_blank" rel="noreferrer noopener" className={row}>
            <GithubIcon className="h-5 w-5 shrink-0" />
            GitHub
          </a>
        </li>
        <li>
          <a href={socials.linkedin} target="_blank" rel="noreferrer noopener" className={row}>
            <LinkedinIcon className="h-5 w-5 shrink-0" />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}
