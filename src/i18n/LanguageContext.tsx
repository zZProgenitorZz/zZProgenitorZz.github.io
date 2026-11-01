/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en, type Content } from '../content/en'
import { nl } from '../content/nl'

export type Lang = 'en' | 'nl'
export const LANGS: Lang[] = ['en', 'nl']

const STORAGE_KEY = 'lang'
const dictionaries: Record<Lang, Content> = { en, nl }

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Content }

const LanguageContext = createContext<Ctx | null>(null)

function readStoredLang(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'nl' ? 'nl' : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* storage unavailable: ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang, setLang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

function useCtx(): Ctx {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('LanguageProvider missing')
  return ctx
}

export const useT = (): Content => useCtx().t

export const useLang = () => {
  const { lang, setLang } = useCtx()
  return { lang, setLang }
}
