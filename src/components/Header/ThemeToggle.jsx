import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { EASE } from '@/motion/config'
import styles from './ThemeToggle.module.scss'

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const isLight = theme === 'light'

  return (
    <motion.button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={isLight ? t.theme.toDark : t.theme.toLight}
      title={isLight ? t.theme.toDark : t.theme.toLight}
      whileTap={reduce ? undefined : { scale: 0.94 }}
      transition={{ duration: 0.2, ease: EASE }}
    >
      <motion.span
        className={styles.icon}
        key={theme}
        initial={reduce ? false : { rotate: -30, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        {isLight ? <MoonIcon /> : <SunIcon />}
      </motion.span>
    </motion.button>
  )
}
