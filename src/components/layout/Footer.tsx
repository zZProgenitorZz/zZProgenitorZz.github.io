import { useEffect, useState } from 'react'
import { GitBranch, Mail } from 'lucide-react'
import Logo from '../decor/Logo'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { socials } from '../../content/socials'
import { useLang, useT, type Lang } from '../../i18n/LanguageContext'
import { fill } from '../../lib/rich'

const icon = 'inline-flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-fg md:h-7 md:w-7'
const langs: Lang[] = ['en', 'nl']

const formatTime = () =>
  new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Amsterdam' }).format(new Date())

/** Footer styled as an editor status bar. */
export default function Footer() {
  const t = useT()
  const { lang, setLang } = useLang()
  const [time, setTime] = useState(formatTime)

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime()), 15000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <footer className="border-t border-line">
      <div className="container-page py-8 md:py-10">
        <div className="flex flex-wrap items-center gap-x-6">
          <Logo />
          <a href={`mailto:${socials.email}`} className="text-muted transition-colors hover:text-fg">
            {socials.email}
          </a>
        </div>
        <p className="mt-2">{t.footer.tagline}</p>
        <p className="mt-6 text-sm">
          <span aria-hidden="true">{'// '}</span>
          {fill(t.footer.copyright, { name: t.name })}
        </p>
      </div>

      <div className="border-t border-line bg-surface text-xs">
        <div className="container-page flex flex-wrap items-center gap-x-5 gap-y-0">
          <span className="inline-flex min-h-8 items-center gap-1.5 text-fg">
            <GitBranch aria-hidden="true" className="h-3.5 w-3.5" />
            {t.footer.branch}
          </span>
          <span className="inline-flex min-h-8 items-center gap-1.5">
            <span aria-hidden="true" className="h-2 w-2 bg-ok" />
            {t.footer.errors}
          </span>
          <span className="inline-flex items-center" role="group" aria-label={t.nav.language}>
            {langs.map((l, i) => (
              <span key={l} className="inline-flex items-center">
                {i > 0 && (
                  <span aria-hidden="true" className="px-1">
                    |
                  </span>
                )}
                <button
                  type="button"
                  aria-pressed={lang === l}
                  onClick={() => setLang(l)}
                  className={`inline-flex min-h-11 items-center px-1 transition-colors hover:text-fg md:min-h-8 ${
                    lang === l ? 'font-bold text-fg' : ''
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </span>
          <span>{t.footer.encoding}</span>
          <span>
            {time} {t.footer.timeLabel}
          </span>
          <ul className="ml-auto flex items-center">
            <li>
              <a href={socials.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className={icon}>
                <GithubIcon className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a href={socials.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className={icon}>
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a href={`mailto:${socials.email}`} aria-label="Email" className={icon}>
                <Mail aria-hidden="true" className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
