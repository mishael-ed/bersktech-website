import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from './testimonials.js'

function initials(name) {
  return name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
}

export default function Testimonials() {
  const track = useRef(null)

  function scrollBy(dir) {
    const el = track.current
    if (!el) return
    const card = el.querySelector('.tm-card')
    const step = card ? card.getBoundingClientRect().width + 20 : 340
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className={`section section-open tm-section${TESTIMONIALS.length <= 2 ? ' tm-few' : ''}`} id="testimonials">
      <div className="container">
        <div className="tm-head">
          <div>
            <div className="section-eyebrow"><Quote size={14} className="tm-eyebrow-icon" /> Client Stories</div>
            <h2 className="section-title">
              Hear it from the people <span className="gradient-text">we've built for.</span>
            </h2>
          </div>
          <div className="tm-arrows">
            <button type="button" className="tm-arrow" onClick={() => scrollBy(-1)} aria-label="Previous testimonials">
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="tm-arrow" onClick={() => scrollBy(1)} aria-label="Next testimonials">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="tm-track" ref={track}>
        {TESTIMONIALS.map((t, i) => (
          <figure className="tm-card" key={i}>
            <Quote size={34} className="tm-mark" aria-hidden="true" />
            <div className="tm-logo">
              {t.logo ? <img src={t.logo} alt={t.company} loading="lazy" decoding="async" /> : <span>{t.company}</span>}
            </div>
            <div className="tm-label">Client testimonial</div>
            <blockquote className="tm-quote">
              “{t.quote.map((p, j) => (p.h ? <mark key={j}>{p.t}</mark> : <span key={j}>{p.t}</span>))}”
            </blockquote>
            <figcaption className="tm-author">
              {t.photo ? (
                <img className="tm-photo" src={t.photo} alt={t.name} loading="lazy" width="44" height="44" />
              ) : (
                <span className="tm-photo tm-initials" aria-hidden="true">{initials(t.name)}</span>
              )}
              <span>
                <span className="tm-name">{t.name}</span>
                <span className="tm-role">{t.role}</span>
                <span className="tm-role">{t.company}{t.location ? `, ${t.location}` : ''}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
