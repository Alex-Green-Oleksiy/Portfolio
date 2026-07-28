# Портфоліо — Ольга

Преміум односторінкове портфоліо (React + Vite). Українська та англійська мови.

## Запуск

```bash
npm install
npm run dev
```

Відкрийте http://localhost:5173

## Посилання на проєкти

`src/config/projects.js`:

| Проєкт | URL |
|--------|-----|
| Chaslo | https://chaslo.app/ |
| L-Grand | https://humble-communication-production.up.railway.app/ |
| Mailys Dashboard | https://dashboard.mailys.app/dashboard |
| Mailys (лендінг) | https://mailys-production.up.railway.app/ |
| EMR Клініка | https://emr-production-9543.up.railway.app/patients |
| Meridian | https://meridian-production-14b9.up.railway.app/ |

Превʼю — скріншоти в `public/projects/`. Оновити знімок:

```bash
npx playwright install chromium
npx playwright screenshot --viewport-size=1400,788 --wait-for-timeout=5000 \
  "https://URL" public/projects/імʼя.png
```

## Перед публікацією

1. `src/config/site.js` — email, GitHub, LinkedIn, Telegram, `siteUrl` (для OG)
2. `public/cv.pdf` — покладіть свій CV (кнопки «Завантажити CV»)
3. Скріни L-Grand: `public/projects/lgrand/` (7 PNG)
4. Опційно: `npx cwebp` для `.webp` — швидше завантаження

## Збірка

```bash
npm run build
npm run preview
```

Файли збірки — у папці `dist/`.
