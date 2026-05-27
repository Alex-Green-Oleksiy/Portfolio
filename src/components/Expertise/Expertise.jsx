import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Section from '@/components/Section/Section'
import { Stagger, StaggerItem } from '@/motion/Stagger'
import { EASE } from '@/motion/config'
import styles from './Expertise.module.scss'

export default function Expertise() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <Section
      id="expertise"
      label={t.expertise.label}
      title={t.expertise.title}
      alt
    >
      <Stagger className={styles.grid}>
        {t.expertise.groups.map((group) => (
          <StaggerItem key={group.title}>
            <motion.article
              className={styles.card}
              whileHover={
                reduce
                  ? undefined
                  : { y: -6, transition: { duration: 0.3, ease: EASE } }
              }
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
