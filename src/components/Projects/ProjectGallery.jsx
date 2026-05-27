import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { LGRAND_GALLERY } from '@/config/projects'
import styles from './ProjectGallery.module.scss'

function GalleryImage({ base, alt, className }) {
  return (
    <img
      src={`${base}.png`}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      width={1400}
      height={788}
    />
  )
}

export default function ProjectGallery() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const labels = t.work.gallery

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        {LGRAND_GALLERY.map((item, i) => (
          <div
            key={item.src}
            className={i === active ? styles.slideActive : styles.slide}
            hidden={i !== active}
          >
            <GalleryImage
              base={item.src}
              alt={`L-Grand — ${labels[item.labelKey]}`}
              className={styles.mainImg}
            />
          </div>
        ))}
        <p className={styles.caption}>{labels[LGRAND_GALLERY[active].labelKey]}</p>
      </div>
      <ul className={styles.thumbs} role="tablist" aria-label={t.work.galleryLabel}>
        {LGRAND_GALLERY.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              role="tab"
              aria-selected={i === active}
              className={i === active ? styles.thumbActive : ''}
              onClick={() => setActive(i)}
            >
              <GalleryImage
                base={item.src}
                alt=""
                className={styles.thumbImg}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
