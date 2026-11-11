import { LEAD_CONFIG } from './config.js'

// ── Meta Pixel (only loads when a Pixel ID is set in config.js) ──
export function initPixel() {
  const id = LEAD_CONFIG.pixelId
  if (!id || window.fbq) return
  const run = () => {
    const n = function () {
      if (n.callMethod) n.callMethod.apply(n, arguments)
      else n.queue.push(arguments)
    }
    window.fbq = n
    if (!window._fbq) window._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    const s = document.createElement('script')
    s.async = true
    s.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(s)
    window.fbq('init', id)
    window.fbq('track', 'PageView')
  }
  // keep the pixel off the critical path
  if ('requestIdleCallback' in window) window.requestIdleCallback(run)
  else setTimeout(run, 800)
}

function fb(...args) {
  if (typeof window.fbq === 'function') window.fbq(...args)
}

let firstView = true
export function pageView() {
  // the first PageView is sent on init; later route changes send their own
  if (firstView) { firstView = false; return }
  fb('track', 'PageView')
}

export function trackLead() { fb('track', 'Lead') }
export function trackCustom(name, data) { fb('trackCustom', name, data) }

// ── UTM tags: remember them for the whole visit so the lead shows which ad brought it ──
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid']

export function captureUtm() {
  try {
    const params = new URLSearchParams(window.location.search)
    const found = {}
    UTM_KEYS.forEach((k) => { if (params.get(k)) found[k] = params.get(k) })
    const v = params.get('v')
    if (v) found.headline_variant = v
    if (Object.keys(found).length) {
      const old = JSON.parse(sessionStorage.getItem('lp_utm') || '{}')
      sessionStorage.setItem('lp_utm', JSON.stringify({ ...old, ...found }))
    }
  } catch { /* storage can be blocked, that's fine */ }
}

export function getUtm() {
  try { return JSON.parse(sessionStorage.getItem('lp_utm') || '{}') } catch { return {} }
}
