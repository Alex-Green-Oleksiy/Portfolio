import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { EASE } from '@/motion/config'
import ThemeToggle from './ThemeToggle'
import styles from './Header.module.scss'

export default function Header() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'expertise', label: t.nav.expertise },
    { id: 'work', label: t.nav.work },
    { id: 'process', label: t.nav.process },
    { id: 'contact', label: t.nav.contact },
  ]

  const HeaderTag = reduce ? 'header' : motion.header
  const headerProps = reduce
    ? { className: `${styles.header} ${scrolled ? styles.scrolled : ''}` }
    : {
        className: `${styles.header} ${scrolled ? styles.scrolled : ''}`,
        initial: { y: -24, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.7, ease: EASE, delay: 0.1 },
      }

  return (
    <HeaderTag {...headerProps}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoMark}>O</span>
          <span className={styles.logoText}>Olga</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main">
          <ul>
            {navItems.map((item, i) =>
              reduce ? (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ) : (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.4, ease: EASE }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={styles.navLink}
                  >
                    {item.label}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <motion.button
            type="button"
            className={styles.lang}
            onClick={toggle}
            aria-label={lang === 'uk' ? 'Switch to English' : 'Перемкнути на українську'}
            whileTap={reduce ? undefined : { scale: 0.94 }}
          >
            {lang === 'uk' ? 'EN' : 'UA'}
          </motion.button>
          <a href="#contact" className={styles.cta} onClick={() => setMenuOpen(false)}>
            {t.nav.contact}
          </a>
          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && !reduce && (
          <motion.div
            className={styles.menuBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </HeaderTag>
  )
}
