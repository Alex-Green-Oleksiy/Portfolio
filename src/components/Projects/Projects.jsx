import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { PROJECT_LINKS } from '@/config/projects'
import Section from '@/components/Section/Section'
import { Stagger, StaggerItem } from '@/motion/Stagger'
import { EASE, tabSwitch } from '@/motion/config'
import ProjectPreview from './ProjectPreview'
import ProjectGallery from './ProjectGallery'
import styles from './Projects.module.scss'

export default function Projects() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const project = t.work.projects[active]
  const liveUrl = PROJECT_LINKS[project.id]
  const reduce = useReducedMotion()

  return (
    <Section
      id="work"
      label={t.work.label}
      title={t.work.title}
      subtitle={t.work.subtitle}
    >
      <div className={styles.layout}>
        <Stagger className={styles.tabs} stagger={0.08} role="tablist">
          {t.work.projects.map((p, i) => (
            <StaggerItem key={p.id}>
              <motion.button
                type="button"
                role="tab"
                aria-selected={active === i}
                className={active === i ? styles.tabActive : ''}
                onClick={() => setActive(i)}
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.2, ease: EASE }}
                layout
              >
                <span className={styles.tabTag}>{p.tag}</span>
                <span className={styles.tabTitle}>{p.title}</span>
                {active === i && !reduce && (
                  <motion.span
                    className={styles.tabIndicator}
                    layoutId="project-tab"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </motion.button>
            </StaggerItem>
          ))}
        </Stagger>

        <AnimatePresence mode="wait">
          <motion.article
            key={project.id}
            className={styles.detail}
            role="tabpanel"
            variants={reduce ? undefined : tabSwitch}
            initial={reduce ? false : 'initial'}
            animate={reduce ? false : 'animate'}
            exit={reduce ? undefined : 'exit'}
          >
            <header>
              <span className={styles.tag}>{project.tag}</span>
              <div className={styles.titleRow}>
                <h3>{project.title}</h3>
                {liveUrl && (
                  <motion.a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveLink}
                    whileHover={reduce ? undefined : { y: -2, scale: 1.03 }}
                    whileTap={reduce ? undefined : { scale: 0.97 }}
                  >
                    {t.work.liveDemo}
                    <span className={styles.arrow} aria-hidden="true">↗</span>
                  </motion.a>
                )}
              </div>
              <p className={styles.desc}>{project.description}</p>
            </header>

            <div className={styles.meta}>
              <div>
                <h4>Stack</h4>
                <ul className={styles.stack}>
                  {project.stack.map((tech, i) => (
                    <motion.li
                      key={tech}
                      initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.35, ease: EASE }}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>{t.work.viewDetails}</h4>
                <ul className={styles.features}>
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            {project.id === 'shop' ? (
              <div className={styles.shopShowcase}>
                <ProjectGallery />
              </div>
            ) : liveUrl ? (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.previewLink}
                data-project={project.id}
                whileHover={reduce ? undefined : { scale: 1.01 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <div className={styles.visual}>
                  <ProjectPreview
                    projectId={project.id}
                    title={project.title}
                    liveUrl={liveUrl}
                  />
                </div>
                <span className={styles.previewCta}>
                  {t.work.liveDemo}
                  <span aria-hidden="true">↗</span>
                </span>
              </motion.a>
            ) : null}
          </motion.article>
        </AnimatePresence>
      </div>
    </Section>
  )
}
