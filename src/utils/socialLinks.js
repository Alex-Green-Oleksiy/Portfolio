import { SITE } from '@/config/site'

const PLACEHOLDER_HOSTS = new Set([
  'github.com',
  'www.github.com',
  'linkedin.com',
  'www.linkedin.com',
  't.me',
])

function isPlaceholder(href) {
  try {
    const host = new URL(href).hostname.replace(/^www\./, '')
    const path = new URL(href).pathname
    return PLACEHOLDER_HOSTS.has(host) && (path === '' || path === '/')
  } catch {
    return true
  }
}

export function getSocialLinks() {
  return [
    { label: 'GitHub', href: SITE.github },
    { label: 'LinkedIn', href: SITE.linkedin },
    { label: 'Telegram', href: SITE.telegram },
  ].filter((link) => !isPlaceholder(link.href))
}
