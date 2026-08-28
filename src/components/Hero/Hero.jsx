import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import MacBookCode from '@/components/MacBookCode/MacBookCode'
import { EASE, fadeUp, heroStagger } from '@/motion/config'
import styles from './Hero.module.scss'

function HeroContent({ t, reduce, motionProps = {} }) {
  const Tag = reduce ? 'div' : motion.div

  return (
    <Tag className={styles.content} {...motionProps}>
      {reduce ? (
        <>
          <p className={styles.label}>{t.hero.label}</p>
          <h1 className={styles.title}>
            {t.hero.title}
            <br />
            <em>{t.hero.titleAccent}</em>
          </h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>
          <p className={styles.availability}>{t.hero.availability}</p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primary}>
              {t.hero.ctaPrimary}
            </a>
            <a href="#work" className={styles.secondary}>
              {t.hero.ctaSecondary}
            </a>
          </div>
        </>
      ) : (
        <>
          <motion.p className={styles.label} variants={fadeUp}>
            {t.hero.label}
          </motion.p>
          <motion.h1 className={styles.title} variants={fadeUp}>
            {t.hero.title}
            <br />
            <em>{t.hero.titleAccent}</em>
          </motion.h1>
          <motion.p className={styles.subtitle} variants={fadeUp}>
            {t.hero.subtitle}
          </motion.p>
          <motion.p className={styles.availability} variants={fadeUp}>
            {t.hero.availability}
          </motion.p>
          <motion.div className={styles.actions} variants={fadeUp}>
            <motion.a
              href="#contact"
              className={styles.primary}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              {t.hero.ctaPrimary}
            </motion.a>
            <motion.a
              href="#work"
              className={styles.secondary}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              {t.hero.ctaSecondary}
            </motion.a>
          </motion.div>
        </>
      )}
    </Tag>
  )
}

function HeroStats({ t, reduce }) {
  if (reduce) {
    return (
      <ul className={styles.stats}>
        {t.hero.stats.map((stat) => (
          <li key={stat.label}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <motion.ul
      className={styles.stats}
      variants={heroStagger}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: 0.55 }}
    >
      {t.hero.stats.map((stat, i) => (
        <motion.li
          key={stat.label}
          variants={fadeUp}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          <motion.span
            className={styles.statValue}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.5, ease: EASE }}
          >
            {stat.value}
          </motion.span>
          <span className={styles.statLabel}>{stat.label}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <section className={styles.hero} id="top">
        <div className={styles.inner}>
          <div className={styles.heroGrid}>
            <HeroContent t={t} reduce />
            <MacBookCode />
          </div>
          <HeroStats t={t} reduce />
        </div>
      </section>
    )
  }

  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <div className={styles.heroGrid}>
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className={styles.heroMain}
          >
            <HeroContent t={t} reduce={false} />
          </motion.div>
          <MacBookCode />
        </div>

        <HeroStats t={t} reduce={false} />
      </div>

      <motion.a
        href="#about"
        className={styles.scrollHint}
        aria-label="Scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className={styles.scrollLine} />
      </motion.a>
    </section>
  )
}
