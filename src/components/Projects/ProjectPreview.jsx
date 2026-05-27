import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECT_PREVIEWS, previewHost } from '@/config/projects'
import { EASE } from '@/motion/config'
import styles from './ProjectPreview.module.scss'

export default function ProjectPreview({ projectId, title, liveUrl }) {
  const [loaded, setLoaded] = useState(false)
  const src = PROJECT_PREVIEWS[projectId]
  const host = previewHost(liveUrl)

  if (!src) return null

  return (
    <div className={styles.frame}>
      <div className={styles.chrome}>
        <span className={styles.dots} aria-hidden="true">
          <i /><i /><i />
        </span>
        <span className={styles.url}>{host}</span>
      </div>
      <div className={styles.viewport}>
        {!loaded && <div className={styles.skeleton} aria-hidden="true" />}
        <AnimatePresence mode="wait">
          <motion.div
            key={src}
            className={styles.shotWrap}
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <img
              src={src}
              alt={title}
              className={styles.shot}
              loading="lazy"
              decoding="async"
              width={1400}
              height={788}
              onLoad={() => setLoaded(true)}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
