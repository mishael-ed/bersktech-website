import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE, pageFor, canonicalFor, jsonLdFor } from './seo.js'

function upsert(selector, create, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(create)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
  return el
}

// Keeps the title and search/share tags correct when moving between pages without a reload.
// (The first page load already has them baked into the HTML.)
export default function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const p = pageFor(pathname)
    const url = canonicalFor(p.path)
    const img = `${SITE.url}${SITE.image}`

    document.title = p.title
    upsert('meta[name="description"]', 'meta', { name: 'description', content: p.description })
    upsert('meta[name="robots"]', 'meta', {
      name: 'robots',
      content: p.noindex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    })

    const canonical = document.head.querySelector('link[rel="canonical"]')
    if (p.noindex) {
      if (canonical) canonical.remove()
    } else {
      upsert('link[rel="canonical"]', 'link', { rel: 'canonical', href: url })
      upsert('meta[property="og:type"]', 'meta', { property: 'og:type', content: p.post ? 'article' : 'website' })
      upsert('meta[property="og:site_name"]', 'meta', { property: 'og:site_name', content: SITE.name })
      upsert('meta[property="og:title"]', 'meta', { property: 'og:title', content: p.title })
      upsert('meta[property="og:description"]', 'meta', { property: 'og:description', content: p.description })
      upsert('meta[property="og:url"]', 'meta', { property: 'og:url', content: url })
      upsert('meta[property="og:image"]', 'meta', { property: 'og:image', content: img })
      upsert('meta[name="twitter:card"]', 'meta', { name: 'twitter:card', content: 'summary_large_image' })
      upsert('meta[name="twitter:title"]', 'meta', { name: 'twitter:title', content: p.title })
      upsert('meta[name="twitter:description"]', 'meta', { name: 'twitter:description', content: p.description })
      upsert('meta[name="twitter:image"]', 'meta', { name: 'twitter:image', content: img })
    }

    const ld = p.noindex ? null : jsonLdFor(p.path)
    const old = document.getElementById('ld-json')
    if (ld) {
      const el = old || Object.assign(document.createElement('script'), { id: 'ld-json', type: 'application/ld+json' })
      el.textContent = JSON.stringify(ld)
      if (!old) document.head.appendChild(el)
    } else if (old) {
      old.remove()
    }
  }, [pathname])

  return null
}
