import { useLanguage } from '@/context/LanguageContext'
import styles from './SkipLink.module.scss'

export default function SkipLink() {
  const { t } = useLanguage()

  return (
    <a href="#main" className={styles.skip}>
      {t.a11y.skipToContent}
    </a>
  )
}
