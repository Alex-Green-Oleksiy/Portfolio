import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '@/i18n/translations'
import { SITE } from '@/config/site'

const LanguageContext = createContext(null)

function setMeta(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'uk'
    return localStorage.getItem('portfolio-lang') || 'uk'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang === 'uk' ? 'uk' : 'en'
    const t = translations[lang].meta
    document.title = t.title

    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t.description)

    setMeta('og:title', t.title)
    setMeta('og:description', t.description)
    setMeta('og:type', 'website')
    setMeta('og:image', `${SITE.siteUrl}/og/og-image.png`)
    setMeta('og:locale', lang === 'uk' ? 'uk_UA' : 'en_US')

    const theme =
      document.documentElement.getAttribute('data-theme') === 'light'
        ? '#f7f5f0'
        : '#08080a'
    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) themeColor.setAttribute('content', theme)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
      toggle: () => setLang((l) => (l === 'uk' ? 'en' : 'uk')),
    }),
    [lang]
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
