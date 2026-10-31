import { useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { LanguageProvider, useT } from './i18n/LanguageContext'
import Navbar from './components/layout/Navbar'
import SocialRail from './components/layout/SocialRail'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import WorksPage from './pages/WorksPage'
import AboutPage from './pages/AboutPage'

/** Scroll to the #hash target on navigation, otherwise to the top. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait a tick so the target page has rendered.
      const id = window.setTimeout(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView()
        else window.scrollTo(0, 0)
      }, 0)
      return () => window.clearTimeout(id)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function NotFound() {
  const t = useT()
  return (
    <div className="container-page py-24">
      <h1 className="text-[32px] font-medium text-fg">404</h1>
      <p className="mt-2">{t.notFound.text}</p>
      <Link to="/" className="mt-4 inline-block text-fg hover:text-accent">
        {t.notFound.back}
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollManager />
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Navbar />
          <SocialRail />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/works" element={<WorksPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
