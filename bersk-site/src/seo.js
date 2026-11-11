import { FAQS } from './faqs.js'
import { SOCIAL } from './social.js'

// ─────────────────────────────────────────────────────────────
// One place for every page's search-engine and social-share details.
// Used at build time (to bake tags into each page's HTML) and in the browser
// (to keep the title and tags right when you click between pages).
// ─────────────────────────────────────────────────────────────
export const SITE = {
  url: 'https://www.bersk.tech', // canonical address (no trailing slash)
  name: 'Bersk Technologies',
  short: 'Bersk',
  image: '/og-image.jpg',
  imageAlt: 'Bersk billboard: Tech solutions tailored for you.',
  locale: 'en_US',
  themeColor: '#ffffff',
}

const SERVICES = [
  { name: 'Websites & Web Applications', desc: 'Fast, secure, custom-designed websites, online stores and web apps.' },
  { name: 'Custom Software Systems', desc: 'Dashboards, booking systems, internal tools and mobile apps built around how your business works.' },
  { name: 'AI Systems & Chatbots', desc: 'AI assistants and appointment setters that answer customers and qualify leads around the clock.' },
  { name: 'Business Process Automation', desc: 'Automations that connect your tools and remove repetitive work.' },
]

export const PAGES = {
  '/': {
    title: 'Bersk Technologies | Websites, Apps & AI Automation',
    description:
      'Turn your idea into a real website, app or online store. Bersk Technologies builds custom software and AI automation for businesses and individuals.',
    crumb: 'Home',
  },
  '/services': {
    title: 'Web, Software & AI Automation Services | Bersk',
    description:
      'Custom websites, web apps, mobile apps, AI chatbots and business automation, built around your idea and approved by you at every stage.',
    crumb: 'Services',
  },
  '/case-studies': {
    title: 'Case Studies: Galuxe Online Store | Bersk Technologies',
    description:
      'See what Bersk Technologies has built, including Galuxe, an online store for Nigerian shoppers with pay on delivery and order tracking.',
    crumb: 'Case Studies',
  },
  '/about': {
    title: 'About Bersk Technologies | Software Team in Lagos',
    description:
      'Meet Bersk Technologies, a Lagos-based team of developers and engineers building custom software, web apps and digital platforms around your business.',
    crumb: 'About',
  },
  '/contact': {
    title: 'Book a Strategy Call | Bersk Technologies',
    description:
      "Tell us your idea and book a strategy call with Bersk Technologies. We'll agree what to build first, with a clear scope, timeline and price.",
    crumb: 'Contact',
  },
}

export const NOT_FOUND = {
  title: 'Page not found | Bersk Technologies',
  description: "This page doesn't exist. Head back to the Bersk Technologies home page.",
  noindex: true,
}

export function pageFor(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return PAGES[clean] ? { ...PAGES[clean], path: clean } : { ...NOT_FOUND, path: clean }
}

export const canonicalFor = (path) => (path === '/' ? `${SITE.url}/` : `${SITE.url}${path}`)

// ── structured data (JSON-LD) ──
const orgId = `${SITE.url}/#organization`

const organization = () => ({
  '@type': ['Organization', 'ProfessionalService'],
  '@id': orgId,
  name: SITE.name,
  alternateName: SITE.short,
  url: `${SITE.url}/`,
  logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.png`, width: 512, height: 512 },
  image: `${SITE.url}${SITE.image}`,
  description: PAGES['/'].description,
  slogan: 'Tech solutions tailored for you.',
  sameAs: [SOCIAL.instagram, SOCIAL.facebook],
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  founder: { '@type': 'Person', name: 'Ed Mishael', jobTitle: 'CEO and Founder' },
  areaServed: ['Nigeria', 'United States', 'Worldwide'],
  knowsAbout: [
    'Website development', 'Custom software development', 'Mobile app development',
    'E-commerce development', 'AI chatbots', 'Business process automation',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Bersk Technologies services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, description: s.desc, provider: { '@id': orgId } },
    })),
  },
})

const website = () => ({
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: SITE.name,
  inLanguage: 'en',
  publisher: { '@id': orgId },
})

const breadcrumb = (path) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
    { '@type': 'ListItem', position: 2, name: PAGES[path].crumb, item: canonicalFor(path) },
  ],
})

export function jsonLdFor(path) {
  const page = PAGES[path]
  if (!page) return null
  const graph = [organization(), website()]
  const webPage = (type) => ({
    '@type': type,
    '@id': `${canonicalFor(path)}#webpage`,
    url: canonicalFor(path),
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': orgId },
    inLanguage: 'en',
  })

  if (path === '/') {
    graph.push(webPage('WebPage'))
  } else {
    graph.push(webPage(path === '/contact' ? 'ContactPage' : path === '/about' ? 'AboutPage' : path === '/case-studies' ? 'CollectionPage' : 'WebPage'))
    graph.push(breadcrumb(path))
  }

  if (path === '/services') {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
    graph.push({
      '@type': 'ItemList',
      name: 'Bersk Technologies services',
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@type': 'Service', name: s.name, description: s.desc, provider: { '@id': orgId } },
      })),
    })
  }

  if (path === '/case-studies') {
    graph.push({
      '@type': 'CreativeWork',
      name: 'Galuxe online store',
      description:
        'An online consumer-tech store for Nigerian shoppers with pay on delivery, order tracking and nationwide delivery, built by Bersk Technologies.',
      url: 'https://buygaluxe.com',
      creator: { '@id': orgId },
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

// ── the <head> tags for a page, as a string (used when pre-building the HTML) ──
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

export function headTags(pathname) {
  const p = pageFor(pathname)
  const url = canonicalFor(p.path)
  const img = `${SITE.url}${SITE.image}`
  const tags = [
    `<title>${esc(p.title)}</title>`,
    `<meta name="description" content="${esc(p.description)}" />`,
    `<meta name="robots" content="${p.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}" />`,
  ]
  if (!p.noindex) {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<link rel="alternate" hreflang="en" href="${url}" />`,
      `<link rel="alternate" hreflang="x-default" href="${url}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
      `<meta property="og:locale" content="${SITE.locale}" />`,
      `<meta property="og:title" content="${esc(p.title)}" />`,
      `<meta property="og:description" content="${esc(p.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${img}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta property="og:image:alt" content="${esc(SITE.imageAlt)}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${esc(p.title)}" />`,
      `<meta name="twitter:description" content="${esc(p.description)}" />`,
      `<meta name="twitter:image" content="${img}" />`,
      `<meta name="twitter:image:alt" content="${esc(SITE.imageAlt)}" />`,
    )
    const ld = jsonLdFor(p.path)
    if (ld) tags.push(`<script type="application/ld+json" id="ld-json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`)
  }
  return tags.join('\n    ')
}
