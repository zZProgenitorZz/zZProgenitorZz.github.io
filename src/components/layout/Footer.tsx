import { Mail } from 'lucide-react'
import Logo from '../decor/Logo'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { socials } from '../../content/socials'
import { useT } from '../../i18n/LanguageContext'
import { fill } from '../../lib/rich'

const icon = 'inline-flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-fg md:h-8 md:w-8'

export default function Footer() {
  const t = useT()
  return (
    <footer className="border-t border-line">
      <div className="container-page py-8 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-x-6">
              <Logo />
              <a href={`mailto:${socials.email}`} className="text-muted transition-colors hover:text-fg">
                {socials.email}
              </a>
            </div>
            <p className="mt-2">{t.footer.tagline}</p>
          </div>
          <div>
            <p className="text-2xl font-medium text-fg">{t.footer.media}</p>
            <ul className="mt-2 flex items-center gap-2">
              <li>
                <a href={socials.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className={icon}>
                  <GithubIcon />
                </a>
              </li>
              <li>
                <a href={socials.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className={icon}>
                  <LinkedinIcon />
                </a>
              </li>
              <li>
                <a href={`mailto:${socials.email}`} aria-label="Email" className={icon}>
                  <Mail aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-sm">{fill(t.footer.copyright, { name: t.name })}</p>
      </div>
    </footer>
  )
}
