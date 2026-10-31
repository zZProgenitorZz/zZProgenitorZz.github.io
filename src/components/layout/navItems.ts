import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useT } from '../../i18n/LanguageContext'

export type NavItem = { key: string; label: string; to: string; active: boolean }

/** Home sections that the nav highlights while scrolling. */
const SECTION_IDS = ['home', 'contacts'] as const

function useActiveSection(enabled: boolean): string {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    if (!enabled) return
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id)
          else visible.delete(e.target.id)
        }
        // Later sections win when both are on screen.
        const current = [...SECTION_IDS].reverse().find((id) => visible.has(id))
        if (current) setActive(current)
      },
      { rootMargin: '-35% 0px -35% 0px' },
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [enabled])

  return active
}

export function useNavItems(): NavItem[] {
  const t = useT()
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const section = useActiveSection(onHome)

  return [
    { key: 'home', label: t.nav.home, to: '/#home', active: onHome && section === 'home' },
    { key: 'works', label: t.nav.works, to: '/works', active: pathname.startsWith('/works') },
    { key: 'about', label: t.nav.about, to: '/about', active: pathname.startsWith('/about') },
    { key: 'contacts', label: t.nav.contacts, to: '/#contacts', active: onHome && section === 'contacts' },
  ]
}
