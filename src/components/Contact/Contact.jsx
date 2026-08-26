import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { SITE } from '@/config/site'
import Section from '@/components/Section/Section'
import { Stagger, StaggerItem } from '@/motion/Stagger'
import { EASE } from '@/motion/config'
import styles from './Contact.module.scss'

export default function Contact() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <Section
      id="contact"
      label={t.contact.label}
      title={t.contact.title}
      subtitle={t.contact.subtitle}
    >
      <Stagger className={styles.info}>
        <StaggerItem className={styles.block}>
          <h3>{t.contact.phone}</h3>
          <motion.a
            href={`tel:${SITE.phone}`}
            className={styles.link}
            whileHover={reduce ? undefined : { x: 4 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            {SITE.phoneDisplay}
          </motion.a>
        </StaggerItem>
        <StaggerItem className={styles.block}>
          <h3>{t.contact.telegram}</h3>
          <motion.a
            href={SITE.telegram}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? undefined : { x: 4 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            {SITE.telegramHandle}
          </motion.a>
        </StaggerItem>
      </Stagger>
    </Section>
  )
}
