import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SELECTOR = [
  '.section-eyebrow', '.section-title', '.section-body',
  '.glass-card', '.check-item', '.service-block', '.includes-list li',
  '.contact-step', '.contact-who', '.contact-response-note',
  '.cta-title', '.cta-sub', '.cta-inner > .btn', '.local-cta-note', '.problem-note',
].join(',')

// Adds a staggered fade-up reveal to common elements as they scroll into view.
export default function Reveal() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const els = Array.from(document.querySelectorAll(SELECTOR))
    const counters = new Map()
    const timers = []

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          el.classList.add('in')
          io.unobserve(el)
          timers.push(setTimeout(() => el.style.setProperty('--d', '0ms'), 1400))
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    els.forEach((el) => {
      const parent = el.parentElement
      const n = counters.get(parent) || 0
      counters.set(parent, n + 1)
      el.style.setProperty('--d', `${Math.min(n, 5) * 80}ms`)
      el.classList.add('reveal')
      io.observe(el)
    })

    return () => {
      io.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [pathname])

  return null
}
