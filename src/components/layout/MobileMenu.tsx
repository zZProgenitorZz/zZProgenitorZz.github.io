import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import Logo from '../decor/Logo'
import SocialLinks from '../ui/SocialLinks'
import { useT } from '../../i18n/LanguageContext'
import LanguageSelect from './LanguageSelect'
import type { NavItem } from './navItems'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function MobileMenu({ items }: { items: NavItem[] }) {
  const t = useT()
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const wasOpen = useRef(false)

  const close = useCallback(() => setOpen(false), [])

  // `inert` is not in React 18 types: toggle the attribute directly.
  useEffect(() => {
    panel.current?.toggleAttribute('inert', !open)
  }, [open])

  // Scroll lock, focus handling, Escape, focus trap.
  useEffect(() => {
    if (open) {
      wasOpen.current = true
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      closeButton.current?.focus()

      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          close()
          return
        }
        if (e.key !== 'Tab' || !panel.current) return
        const nodes = [...panel.current.querySelectorAll<HTMLElement>(FOCUSABLE)]
        if (nodes.length === 0) return
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
      const mq = window.matchMedia('(min-width: 768px)')
      const onResize = () => mq.matches && close()
      document.addEventListener('keydown', onKey)
      mq.addEventListener('change', onResize)
      return () => {
        document.body.style.overflow = prev
        document.removeEventListener('keydown', onKey)
        mq.removeEventListener('change', onResize)
      }
    }
    if (wasOpen.current) {
      wasOpen.current = false
      menuButton.current?.focus()
    }
  }, [open, close])

  // Clicking empty panel space (not a link/button) closes it.
  const onPanelClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLElement).closest('a, button, ul')) close()
  }

  return (
    <div className="md:hidden">
      <button
        ref={menuButton}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={t.nav.menuOpen}
        onClick={() => setOpen(true)}
        className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-muted hover:text-fg"
      >
        <svg aria-hidden="true" focusable="false" width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0 1H24M0 11H24" />
        </svg>
      </button>

      <div
        id="mobile-menu"
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.mainNav}
        aria-hidden={!open}
        onClick={onPanelClick}
        className={`fixed inset-0 z-50 flex flex-col bg-bg transition-[transform,visibility] duration-200 ${
          open ? 'visible translate-x-0' : 'invisible translate-x-full'
        }`}
      >
        <div className="container-page flex items-center justify-between py-3">
          <Logo onClick={close} />
          <button
            ref={closeButton}
            type="button"
            aria-label={t.nav.menuClose}
            onClick={close}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-muted hover:text-fg"
          >
            <X aria-hidden="true" className="h-7 w-7" />
          </button>
        </div>

        <nav aria-label={t.nav.mainNav} className="container-page flex-1 overflow-y-auto pt-8">
          <ul className="flex flex-col gap-4 text-[32px]">
            {items.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.to}
                  onClick={close}
                  aria-current={item.active ? 'page' : undefined}
                  className={`inline-block min-h-11 transition-colors hover:text-fg ${item.active ? 'font-medium text-fg' : 'text-muted'}`}
                >
                  {item.active && <span aria-hidden="true" className="mr-3 inline-block h-3 w-3 bg-accent-2" />}
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSelect className="text-[32px]" />
            </li>
          </ul>
        </nav>

        <SocialLinks
          ariaLabel={t.nav.social}
          className="flex items-center justify-center gap-6 py-8"
          linkClass="inline-flex h-11 w-11 items-center justify-center text-muted hover:text-fg"
          iconClass="h-7 w-7"
        />
      </div>
    </div>
  )
}
