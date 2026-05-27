import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT } from '@/motion/config'
import styles from './Section.module.scss'

export default function Section({ id, label, title, subtitle, children, alt }) {
  const reduce = useReducedMotion()

  const header = (
    <>
      {label && <p className={styles.label}>{label}</p>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </>
  )

  return (
    <section
      id={id}
      className={`${styles.section} ${alt ? styles.alt : ''}`}
    >
      {reduce ? (
        <div className={styles.inner}>
          {header}
          <div className={styles.body}>{children}</div>
        </div>
      ) : (
        <motion.div
          className={styles.inner}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {label && (
            <motion.p className={styles.label} variants={fadeUp}>
              {label}
            </motion.p>
          )}
          {title && (
            <motion.h2 className={styles.title} variants={fadeUp}>
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p className={styles.subtitle} variants={fadeUp}>
              {subtitle}
            </motion.p>
          )}
          <motion.div className={styles.body} variants={fadeUp}>
            {children}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
