export const PROJECT_LINKS = {
  shop: 'https://humble-communication-production.up.railway.app/',
  dashboard: 'https://dashboard.mailys.app/dashboard',
  mailysLanding: 'https://mailys-production.up.railway.app/',
  emr: 'https://emr-production-9543.up.railway.app/patients',
  meridian: 'https://meridian-production-14b9.up.railway.app/',
}

export const PROJECT_PREVIEWS = {
  shop: '/projects/lgrand/home.png',
  dashboard: '/projects/mailys.png',
  mailysLanding: '/projects/mailys-landing.png',
  emr: '/projects/emr.png',
  meridian: '/projects/meridian.png',
}

export const LGRAND_GALLERY = [
  { src: '/projects/lgrand/home', labelKey: 'home' },
  { src: '/projects/lgrand/product-page', labelKey: 'product' },
  { src: '/projects/lgrand/store-favorites', labelKey: 'favorites' },
  { src: '/projects/lgrand/admin-orders', labelKey: 'orders' },
  { src: '/projects/lgrand/admin-chat', labelKey: 'chat' },
  { src: '/projects/lgrand/admin-analytics', labelKey: 'analytics' },
  { src: '/projects/lgrand/admin-banners', labelKey: 'banners' },
]

export function previewHost(url) {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}
