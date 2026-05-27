import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Section from '@/components/Section/Section'
import { Stagger, StaggerItem } from '@/motion/Stagger'
import { EASE } from '@/motion/config'
import styles from './About.module.scss'

export default function About() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <Section id="about" label={t.about.label} title={t.about.title}>
      <Stagger className={styles.grid}>
        <StaggerItem className={styles.text}>
          <p className={styles.lead}>{t.about.lead}</p>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </StaggerItem>
        <StaggerItem>
          <motion.ul
            className={styles.highlights}
            whileHover={reduce ? undefined : { scale: 1.01 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {t.about.highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={reduce ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.45, ease: EASE }}
              >
                <span className={styles.dot} aria-hidden="true" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </StaggerItem>
      </Stagger>
    </Section>
  )
}
