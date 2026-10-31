import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLang, useT, type Lang } from '../../i18n/LanguageContext'

const options: Lang[] = ['en', 'nl']

type Props = { className?: string }

export default function LanguageSelect({ className = '' }: Props) {
  const { lang, setLang } = useLang()
  const t = useT()
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        setOpen(false)
        button.current?.focus()
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const choose = (l: Lang) => {
    setLang(l)
    setOpen(false)
    button.current?.focus()
  }

  return (
    <div ref={root} className={`relative inline-block ${className}`}>
      <button
        ref={button}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.nav.language}: ${lang.toUpperCase()}`}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex min-h-11 items-center gap-1 text-muted transition-colors hover:text-fg md:min-h-0"
      >
        {lang.toUpperCase()}
        <ChevronDown aria-hidden="true" className="h-4 w-4" />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t.nav.language}
          className="absolute left-0 top-full z-50 mt-2 min-w-[72px] border border-line bg-surface"
        >
          {options.map((o) => (
            <li key={o} role="option" aria-selected={o === lang}>
              <button
                type="button"
                onClick={() => choose(o)}
                className={`block min-h-11 w-full px-3 py-2 text-left transition-colors hover:text-fg md:min-h-0 ${
                  o === lang ? 'text-fg' : 'text-muted'
                }`}
              >
                {o.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
