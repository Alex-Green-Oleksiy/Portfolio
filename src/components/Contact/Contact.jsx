import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { SITE } from '@/config/site'
import { getSocialLinks } from '@/utils/socialLinks'
import Section from '@/components/Section/Section'
import { Stagger, StaggerItem } from '@/motion/Stagger'
import { EASE } from '@/motion/config'
import styles from './Contact.module.scss'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)
  const reduce = useReducedMotion()
  const socialLinks = getSocialLinks()

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio — ${form.name || 'Contact'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section
      id="contact"
      label={t.contact.label}
      title={t.contact.title}
      subtitle={t.contact.subtitle}
    >
      <Stagger className={styles.grid}>
        <StaggerItem className={styles.info}>
          <div className={styles.block}>
            <h3>{t.contact.email}</h3>
            <motion.a
              href={`mailto:${SITE.email}`}
              className={styles.email}
              whileHover={reduce ? undefined : { x: 4 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              {SITE.email}
            </motion.a>
          </div>
          <div className={styles.block}>
            <a href={SITE.cvUrl} className={styles.cvLink} download>
              {t.contact.downloadCv}
            </a>
          </div>
          {socialLinks.length > 0 && (
            <div className={styles.block}>
              <h3>{t.contact.social}</h3>
              <ul className={styles.social}>
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </StaggerItem>

        <StaggerItem>
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            whileHover={reduce ? undefined : { y: -2 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {[
              { key: 'name', type: 'text', label: t.contact.form.name, required: false },
              { key: 'email', type: 'email', label: t.contact.form.email, required: true },
            ].map(({ key, type, label, required }) => (
              <label key={key} className={focused === key ? styles.labelFocused : ''}>
                <span>{label}</span>
                <input
                  type={type}
                  required={required}
                  value={form[key]}
                  onFocus={() => setFocused(key)}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  autoComplete={key}
                />
              </label>
            ))}
            <label className={focused === 'message' ? styles.labelFocused : ''}>
              <span>{t.contact.form.message}</span>
              <textarea
                rows={4}
                required
                value={form.message}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <motion.button
              type="submit"
              className={styles.submit}
              whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              {t.contact.form.send}
            </motion.button>
            <p className={styles.note}>{t.contact.form.note}</p>
          </motion.form>
        </StaggerItem>
      </Stagger>
    </Section>
  )
}
