import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Section from '@/components/Section/Section'
import { Stagger, StaggerItem } from '@/motion/Stagger'
import { EASE } from '@/motion/config'
import styles from './Process.module.scss'

export default function Process() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <Section
      id="process"
      label={t.process.label}
      title={t.process.title}
      alt
    >
      <Stagger className={styles.steps} as="ol">
        {t.process.steps.map((step) => (
          <StaggerItem key={step.num} as="li">
            <motion.div
              className={styles.stepInner}
              whileHover={
                reduce ? undefined : { y: -3, transition: { duration: 0.25, ease: EASE } }
              }
            >
              <span className={styles.num}>{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
