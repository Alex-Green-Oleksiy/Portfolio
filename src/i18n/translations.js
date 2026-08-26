export const translations = {
  uk: {
    meta: {
      title: 'Ольга — Frontend & Fullstack Developer',
      description:
        'Продуктові інтерфейси, e-commerce та аналітичні дашборди. React, Node.js, архітектура, що масштабується.',
    },
    nav: {
      about: 'Про мене',
      expertise: 'Експертиза',
      work: 'Проєкти',
      process: 'Підхід',
      contact: 'Контакт',
    },
    theme: {
      toLight: 'Увімкнути світлу тему',
      toDark: 'Увімкнути темну тему',
    },
    a11y: {
      skipToContent: 'Перейти до контенту',
    },
    hero: {
      label: 'Frontend · Fullstack',
      title: 'Будую інтерфейси, які',
      titleAccent: 'продають і масштабуються',
      subtitle:
        'Від преміум e-commerce до SaaS-дашбордів з реальною аналітикою. Чітка архітектура, продуманий UX, код, готовий до production.',
      availability: 'Відкрита до full-time / contract · Remote',
      ctaPrimary: 'Обговорити проєкт',
      ctaSecondary: 'Переглянути роботи',
      downloadCv: 'Завантажити CV',
      stats: [
        { value: '6+', label: 'production-проєктів' },
        { value: 'SaaS', label: 'CRM · e-commerce · analytics' },
        { value: 'Full', label: 'stack: UI + API + mobile' },
      ],
    },
    about: {
      label: 'Про мене',
      title: 'Ольга',
      lead: 'Frontend-розробниця з fullstack-практикою. Фокус — продуктові веб-додатки, де важливі швидкість, надійність і бізнес-результат.',
      p1: 'Проєктую та реалізую інтерфейси від landing до складних адмін-панелей. Працюю з React-екосистемою, інтегрую API, real-time та аналітику без компромісів щодо якості коду.',
      p2: 'У портфоліо — Chaslo CRM для салонів, e-commerce, SaaS-аналітика, EMR, Kanban і продуктові лендінги. Усі з живими демо та production-деплоєм.',
      highlights: [
        'React 18, Vite, модульна архітектура (FSD)',
        'Node.js, Express, MongoDB, JWT, Socket.IO',
        'Chart.js, drag-and-drop, PDF/XLSX експорт',
        'Vitest, Playwright, Docker',
      ],
    },
    expertise: {
      label: 'Експертиза',
      title: 'Що приношу в команду',
      groups: [
        {
          title: 'Frontend',
          items: [
            'React, Vite, React Router',
            'SCSS / CSS Modules, адаптив',
            'Framer Motion, GSAP, Three.js',
            'Форми: React Hook Form + Zod',
          ],
        },
        {
          title: 'Fullstack & Data',
          items: [
            'Node.js, Express REST API',
            'MongoDB, автентифікація JWT',
            'Socket.IO — real-time чат',
            'Інтеграція зовнішніх API (Klaviyo)',
          ],
        },
        {
          title: 'Якість & Delivery',
          items: [
            'Feature-Sliced Design',
            'Unit (Vitest) та E2E (Playwright)',
            'Docker, CI-ready збірки',
            'Документація та runbook для команди',
          ],
        },
      ],
    },
    work: {
      label: 'Проєкти',
      title: 'Реальні продукти',
      subtitle:
        'Шість production-проєктів — від CRM для салонів і e-commerce до SaaS-дашбордів, EMR та Kanban.',
      liveDemo: 'Живе демо',
      galleryLabel: 'Скріни L-Grand',
      gallery: {
        home: 'Головна',
        product: 'Сторінка товару',
        favorites: 'Улюблені',
        orders: 'Адмін · замовлення',
        chat: 'Адмін · чат підтримки',
        analytics: 'Адмін · аналітика',
        banners: 'Адмін · банери',
      },
      projects: [
        {
          id: 'chaslo',
          tag: 'SaaS · CRM · Beauty',
          title: 'Chaslo',
          description:
            'Production CRM для салонів краси та барбершопів (chaslo.app): онлайн-запис 24/7, календар, клієнти, нагадування Telegram/SMS/email, аналітика, маркетплейс і білінг Monobank. Monorepo: Next.js + backend API + Expo mobile.',
          stack: ['Next.js 16', 'Prisma', 'PostgreSQL', 'Redis', 'Expo'],
          features: [
            'Онлайн-запис, календар drag-and-drop, RBAC',
            'Нагадування Telegram · SMS · email',
            'Маркетплейс салонів · підписки Monobank (UAH)',
            'Expo mobile · Vitest · Playwright E2E',
          ],
        },
        {
          id: 'shop',
          tag: 'E-commerce · Fullstack',
          title: 'L-Grand',
          description:
            'Повноцінний інтернет-магазин у production (Railway): вітрина, checkout, профіль, адмінка з аналітикою. Real-time чат підтримки, замовлення, банери, відгуки, 3D-превʼю товарів.',
          stack: ['React', 'Vite', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT'],
          features: [
            'Production на Railway · Docker Compose',
            'Checkout, кошик, улюблені, темна/світла тема',
            'Адмін: товари, замовлення, чат, аналітика, банери',
            'Socket.IO · JWT · React Three Fiber',
          ],
        },
        {
          id: 'dashboard',
          tag: 'SaaS · Analytics',
          title: 'Mailys Dashboard',
          description:
            'Production-дашборд email/SMS-аналітики (Klaviyo): Master Report, кампанії, flows, list growth. Мультитенантність, ролі, підписки та адмін-білінг.',
          stack: ['React', 'Chart.js', 'FSD', 'Vitest', 'Playwright'],
          features: [
            'KPI, 15+ типів графіків, MoM/YoY порівняння',
            'Drag-and-drop сітка віджетів',
            'Експорт PDF та Excel',
            'Сувора політика real data — без mock у prod',
          ],
        },
        {
          id: 'mailysLanding',
          tag: 'SaaS · Landing',
          title: 'Mailys',
          description:
            'Преміальний маркетинговий лендінг для email-аналітики Klaviyo: hero, features, pricing, demo. FSD-архітектура, TypeScript, анімації та деплой на Railway через Docker.',
          stack: ['React', 'TypeScript', 'Vite', 'FSD', 'SCSS Modules'],
          features: [
            'Feature-Sliced Design — чіткі шари імпортів',
            'Дизайн-токени, SCSS modules, без Tailwind',
            'Секції: hero, features, pricing, CTA',
            'Production на Railway · статичний SPA',
          ],
        },
        {
          id: 'emr',
          tag: 'Fullstack · Healthcare',
          title: 'EMR Клініка',
          description:
            'Електронна медична система: пацієнти, лікарі, записи на прийом. Next.js fullstack з RTK Query, CRUD, валідацією, темною/світлою темою та E2E-тестами Playwright.',
          stack: ['Next.js 15', 'React 19', 'RTK Query', 'Playwright'],
          features: [
            'CRUD пацієнтів, лікарів, appointments',
            'REST API через Route Handlers',
            'i18n UK/EN · light/dark theme',
            'Production на Railway · healthcheck',
          ],
        },
        {
          id: 'meridian',
          tag: 'Productivity · Kanban',
          title: 'Meridian',
          description:
            'Executive task planner: Kanban з drag-and-drop, календар дедлайнів, архів і пошук. Next.js App Router, Redux Toolkit, @dnd-kit та преміум UI.',
          stack: ['Next.js 15', 'React 19', 'Redux Toolkit', '@dnd-kit'],
          features: [
            'Kanban · drag-and-drop reorder API',
            'Календар, архів, фільтри пріоритетів',
            'Модалки задач, activity feed',
            'i18n UK/EN · темна тема',
          ],
        },
      ],
      viewDetails: 'Деталі',
    },
    process: {
      label: 'Підхід',
      title: 'Як працюю',
      steps: [
        {
          num: '01',
          title: 'Зрозуміти бізнес-ціль',
          text: 'Уточнюю метрики успіху, аудиторію та обмеження до написання коду.',
        },
        {
          num: '02',
          title: 'Архітектура та UI',
          text: 'Структура папок, компоненти, стан — так, щоб фіча не ламала сусідні модулі.',
        },
        {
          num: '03',
          title: 'Ітеративна поставка',
          text: 'MVP → тестування → полірування. Прозорі PR, зрозумілі коміти.',
        },
        {
          num: '04',
          title: 'Передача та підтримка',
          text: 'Документація, README, runbook — щоб команда могла підхопити без мене.',
        },
      ],
    },
    contact: {
      label: 'Контакт',
      title: 'Готова до нового проєкту',
      subtitle:
        'Шукаю роль frontend / fullstack або співпрацю над продуктом. Напишіть — відповім протягом доби.',
      phone: 'Телефон',
      telegram: 'Telegram',
    },
    footer: {
      rights: 'Усі права захищені.',
      tagline: 'Frontend · Fullstack',
    },
  },
  en: {
    meta: {
      title: 'Olga — Frontend & Fullstack Developer',
      description:
        'Product interfaces, e-commerce, and analytics dashboards. React, Node.js, architecture built to scale.',
    },
    nav: {
      about: 'About',
      expertise: 'Expertise',
      work: 'Work',
      process: 'Process',
      contact: 'Contact',
    },
    theme: {
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
    a11y: {
      skipToContent: 'Skip to content',
    },
    hero: {
      label: 'Frontend · Fullstack',
      title: 'I build interfaces that',
      titleAccent: 'sell and scale',
      subtitle:
        'From premium e-commerce to SaaS dashboards with real analytics. Clear architecture, thoughtful UX, production-ready code.',
      availability: 'Open to full-time / contract · Remote',
      ctaPrimary: 'Discuss a project',
      ctaSecondary: 'View work',
      downloadCv: 'Download CV',
      stats: [
        { value: '6+', label: 'production projects' },
        { value: 'SaaS', label: 'CRM · e-commerce · analytics' },
        { value: 'Full', label: 'stack: UI + API + mobile' },
      ],
    },
    about: {
      label: 'About',
      title: 'Olga',
      lead: 'Frontend developer with fullstack practice. Focus: product web apps where speed, reliability, and business outcomes matter.',
      p1: 'I design and ship interfaces from landing pages to complex admin panels. React ecosystem, API integration, real-time features, and analytics — without compromising code quality.',
      p2: 'Portfolio spans Chaslo salon CRM, e-commerce, SaaS analytics, EMR, Kanban, and product landings — all with live demos and production deploys.',
      highlights: [
        'React 18, Vite, modular architecture (FSD)',
        'Node.js, Express, MongoDB, JWT, Socket.IO',
        'Chart.js, drag-and-drop, PDF/XLSX export',
        'Vitest, Playwright, Docker',
      ],
    },
    expertise: {
      label: 'Expertise',
      title: 'What I bring to the team',
      groups: [
        {
          title: 'Frontend',
          items: [
            'React, Vite, React Router',
            'SCSS / CSS Modules, responsive UI',
            'Framer Motion, GSAP, Three.js',
            'Forms: React Hook Form + Zod',
          ],
        },
        {
          title: 'Fullstack & Data',
          items: [
            'Node.js, Express REST API',
            'MongoDB, JWT authentication',
            'Socket.IO — real-time chat',
            'External API integration (Klaviyo)',
          ],
        },
        {
          title: 'Quality & Delivery',
          items: [
            'Feature-Sliced Design',
            'Unit (Vitest) and E2E (Playwright)',
            'Docker, CI-ready builds',
            'Documentation and runbooks for teams',
          ],
        },
      ],
    },
    work: {
      label: 'Work',
      title: 'Real products',
      subtitle:
        'Six production projects — from salon CRM and e-commerce to SaaS dashboards, EMR, and Kanban.',
      liveDemo: 'Live demo',
      galleryLabel: 'L-Grand screens',
      gallery: {
        home: 'Homepage',
        product: 'Product page',
        favorites: 'Favorites',
        orders: 'Admin · orders',
        chat: 'Admin · support chat',
        analytics: 'Admin · analytics',
        banners: 'Admin · banners',
      },
      projects: [
        {
          id: 'chaslo',
          tag: 'SaaS · CRM · Beauty',
          title: 'Chaslo',
          description:
            'Production CRM for beauty salons and barbershops (chaslo.app): 24/7 online booking, calendar, clients, Telegram/SMS/email reminders, analytics, marketplace, and Monobank billing. Monorepo: Next.js + backend API + Expo mobile.',
          stack: ['Next.js 16', 'Prisma', 'PostgreSQL', 'Redis', 'Expo'],
          features: [
            'Online booking, drag-and-drop calendar, RBAC',
            'Telegram · SMS · email reminders',
            'Salon marketplace · Monobank subscriptions (UAH)',
            'Expo mobile · Vitest · Playwright E2E',
          ],
        },
        {
          id: 'shop',
          tag: 'E-commerce · Fullstack',
          title: 'L-Grand',
          description:
            'Full e-commerce platform in production (Railway): storefront, checkout, profile, admin with analytics. Real-time support chat, orders, banners, reviews, 3D product preview.',
          stack: ['React', 'Vite', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT'],
          features: [
            'Production on Railway · Docker Compose',
            'Checkout, cart, favorites, dark/light theme',
            'Admin: products, orders, chat, analytics, banners',
            'Socket.IO · JWT · React Three Fiber',
          ],
        },
        {
          id: 'dashboard',
          tag: 'SaaS · Analytics',
          title: 'Mailys Dashboard',
          description:
            'Production email/SMS analytics (Klaviyo): Master Report, campaigns, flows, list growth. Multi-tenancy, roles, subscriptions, and admin billing.',
          stack: ['React', 'Chart.js', 'FSD', 'Vitest', 'Playwright'],
          features: [
            'KPIs, 15+ chart types, MoM/YoY comparison',
            'Drag-and-drop widget grid',
            'PDF and Excel export',
            'Strict real-data policy — no mocks in prod',
          ],
        },
        {
          id: 'mailysLanding',
          tag: 'SaaS · Landing',
          title: 'Mailys',
          description:
            'Premium marketing landing for Klaviyo email analytics: hero, features, pricing, demo. FSD architecture, TypeScript, animations, Railway deploy via Docker.',
          stack: ['React', 'TypeScript', 'Vite', 'FSD', 'SCSS Modules'],
          features: [
            'Feature-Sliced Design — strict import layers',
            'Design tokens, SCSS modules, no Tailwind',
            'Sections: hero, features, pricing, CTA',
            'Production on Railway · static SPA',
          ],
        },
        {
          id: 'emr',
          tag: 'Fullstack · Healthcare',
          title: 'EMR Clinic',
          description:
            'Electronic medical records: patients, doctors, appointments. Next.js fullstack with RTK Query, CRUD, validation, light/dark theme, and Playwright E2E tests.',
          stack: ['Next.js 15', 'React 19', 'RTK Query', 'Playwright'],
          features: [
            'CRUD for patients, doctors, appointments',
            'REST API via Route Handlers',
            'i18n UK/EN · light/dark theme',
            'Production on Railway · healthcheck',
          ],
        },
        {
          id: 'meridian',
          tag: 'Productivity · Kanban',
          title: 'Meridian',
          description:
            'Executive task planner: Kanban with drag-and-drop, deadline calendar, archive, and search. Next.js App Router, Redux Toolkit, @dnd-kit, premium UI.',
          stack: ['Next.js 15', 'React 19', 'Redux Toolkit', '@dnd-kit'],
          features: [
            'Kanban · drag-and-drop reorder API',
            'Calendar, archive, priority filters',
            'Task modals, activity feed',
            'i18n UK/EN · dark theme',
          ],
        },
      ],
      viewDetails: 'Details',
    },
    process: {
      label: 'Process',
      title: 'How I work',
      steps: [
        {
          num: '01',
          title: 'Understand the business goal',
          text: 'Clarify success metrics, audience, and constraints before writing code.',
        },
        {
          num: '02',
          title: 'Architecture & UI',
          text: 'Folder structure, components, state — so a feature does not break neighboring modules.',
        },
        {
          num: '03',
          title: 'Iterative delivery',
          text: 'MVP → testing → polish. Transparent PRs, clear commits.',
        },
        {
          num: '04',
          title: 'Handoff & support',
          text: 'Documentation, README, runbooks — so the team can continue without me.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Open to new projects',
      subtitle:
        'Looking for a frontend / fullstack role or product collaboration. Message me — I reply within a day.',
      phone: 'Phone',
      telegram: 'Telegram',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Frontend · Fullstack',
    },
  },
}
