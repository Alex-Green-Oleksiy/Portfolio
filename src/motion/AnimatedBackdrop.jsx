import styles from './AnimatedBackdrop.module.scss'

export default function AnimatedBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <span className={styles.orb} data-orb="1" />
      <span className={styles.orb} data-orb="2" />
      <span className={styles.orb} data-orb="3" />
      <span className={styles.grid} />
    </div>
  )
}
