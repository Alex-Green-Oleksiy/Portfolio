import { motion, useReducedMotion } from 'framer-motion'
import { useMacBookCycle } from './useMacBookCycle'
import { highlightCode } from './highlightCode'
import { CODE_SNIPPETS } from './codeSnippets'
import { previewHost } from '@/config/projects'
import { EASE, fadeUp } from '@/motion/config'
import styles from './MacBookCode.module.scss'

export default function MacBookCode() {
  const reduce = useReducedMotion()
  const cycle = useMacBookCycle(!reduce)

  const Wrapper = reduce ? 'div' : motion.div
  const wrapperProps = reduce
    ? { className: styles.wrap }
    : {
        className: styles.wrap,
        variants: fadeUp,
        initial: 'hidden',
        animate: 'visible',
        transition: { delay: 0.35, duration: 0.8, ease: EASE },
      }

  const staticSnippet = CODE_SNIPPETS[0]

  return (
    <Wrapper {...wrapperProps}>
      {reduce ? (
        <div className={styles.macbook}>
          <MacBookShell
            file={staticSnippet.file}
            text={staticSnippet.code}
            slide="editor"
            preview={{
              image: staticSnippet.previewImage,
              host: previewHost(staticSnippet.previewUrl),
              title: staticSnippet.previewTitle,
            }}
            deskIndex={0}
            animate={false}
          />
        </div>
      ) : (
        <motion.div
          className={styles.macbook}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <MacBookShell {...cycle} animate />
        </motion.div>
      )}
    </Wrapper>
  )
}

function MacBookShell({
  file,
  text,
  slide,
  preview,
  deskIndex,
  animate: motionEnabled,
}) {
  const isBrowser = slide === 'browser'

  return (
    <>
      <div className={styles.lid}>
        <div className={styles.bezel}>
          <div className={styles.notch} aria-hidden="true" />
          <div className={styles.screen}>
            <div className={styles.spaceIndicator} aria-hidden="true">
              <span className={deskIndex === 0 ? styles.spaceActive : ''} />
              <span className={deskIndex === 1 ? styles.spaceActive : ''} />
            </div>

            <div className={styles.desktopViewport}>
              <motion.div
                className={styles.desktopTrack}
                animate={{ x: isBrowser ? '-50%' : '0%' }}
                transition={
                  motionEnabled
                    ? { duration: 0.7, ease: EASE }
                    : { duration: 0 }
                }
              >
                <div className={styles.desktop}>
                  <EditorChrome file={file} />
                  <pre className={styles.editor}>
                    <code>{highlightCode(text)}</code>
                    <span className={styles.caret} aria-hidden="true" />
                  </pre>
                </div>

                <div className={styles.desktop}>
                  <BrowserChrome host={preview.host} title={preview.title} />
                  <div className={styles.browserBody}>
                    <img
                      src={preview.image}
                      alt={preview.title}
                      className={styles.previewImg}
                      width={1400}
                      height={788}
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hinge} aria-hidden="true" />
      <div className={styles.base}>
        <div className={styles.trackpad} aria-hidden="true" />
      </div>
    </>
  )
}

function EditorChrome({ file }) {
  return (
    <div className={`${styles.titleBar} ${styles.titleBarEditor}`}>
      <div className={styles.traffic} aria-hidden="true">
        <span data-c="r" />
        <span data-c="y" />
        <span data-c="g" />
      </div>
      <span className={styles.fileName}>{file}</span>
      <span className={styles.dots} aria-hidden="true">
        •••
      </span>
    </div>
  )
}

function BrowserChrome({ host, title }) {
  return (
    <div className={`${styles.titleBar} ${styles.titleBarBrowser}`}>
      <div className={styles.traffic} aria-hidden="true">
        <span data-c="r" />
        <span data-c="y" />
        <span data-c="g" />
      </div>
      <div className={styles.urlBar}>
        <span className={styles.lock} aria-hidden="true" />
        <span className={styles.url}>{host}</span>
      </div>
      <span className={styles.browserTab} title={title}>
        {title}
      </span>
    </div>
  )
}
