import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, VIEWPORT } from '@/motion/config'
import styles from './Footer.module.scss'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  const reduce = useReducedMotion()

  const content = (
    <>
      <p>
        © {year} Olga. {t.footer.rights}
      </p>
      <p className={styles.tagline}>{t.footer.tagline}</p>
    </>
  )

  if (reduce) {
    return (
      <footer className={styles.footer}>
        <div className={styles.inner}>{content}</div>
      </footer>
    )
  }

  return (
    <motion.footer
      className={styles.footer}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <div className={styles.inner}>{content}</div>
    </motion.footer>
  )
}
