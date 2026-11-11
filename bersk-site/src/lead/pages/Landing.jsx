import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Play, ArrowRight, ArrowLeft, MessageCircle, CheckCircle2, Truck, Wallet, Smartphone } from 'lucide-react'
import { LEAD_CONFIG as C } from '../config.js'
import { trackCustom } from '../track.js'
import { submitLead } from '../../lib/leads.js'

// Headline options from the PRD. Test one, run another as the variant with ?v=2 or ?v=3
const HEADLINES = {
  1: { lead: 'Idea in your head, no coding skills?', hl: 'Read this before you hire anyone.' },
  2: { lead: 'We build your app, website or online store,', hl: 'and you approve every stage.' },
  3: { lead: 'Got an app idea?', hl: "See exactly what you'd get before we write any code." },
}

const BLUEPRINT = [
  { n: '1', title: 'Strategy call', desc: 'We listen to your idea and agree what to build first.' },
  { n: '2', title: 'See it', desc: 'You see how it will look and work, and you approve it before we build.' },
  { n: '3', title: 'Ship it', desc: 'We build, test and launch it, and you approve every stage.' },
]

const BUILD_OPTIONS = ['A mobile app', 'A website', 'An online store', 'Something else']
const START_OPTIONS = ['This month', 'In 1 to 3 months', 'Just exploring']

function waLink() {
  if (!C.whatsappNumber) return ''
  return `https://wa.me/${C.whatsappNumber}?text=${encodeURIComponent(C.whatsappMessage)}`
}

// ── Step 1: video (lazy: nothing downloads until the visitor presses play) ──
function VideoBlock() {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  const halfSent = useRef(false)

  if (!C.videoSrc) {
    return (
      <div className="lp-video lp-video-empty" role="img" aria-label="Video coming soon">
        <span className="lp-play"><Play size={28} fill="currentColor" /></span>
        <span className="lp-video-note">Video coming soon</span>
      </div>
    )
  }

  function start() {
    setPlaying(true)
    trackCustom('VideoPlay')
    // wait for the element to mount, then play (needs a user tap, which we have)
    requestAnimationFrame(() => ref.current && ref.current.play().catch(() => {}))
  }

  function onTime() {
    const v = ref.current
    if (!v || halfSent.current || !v.duration) return
    if (v.currentTime / v.duration >= 0.5) {
      halfSent.current = true
      trackCustom('Video50Watched')
    }
  }

  return (
    <div className="lp-video">
      {playing ? (
        <video ref={ref} controls playsInline preload="metadata" onTimeUpdate={onTime} poster={C.videoPoster || undefined}>
          <source src={C.videoSrc} type="video/mp4" />
          {C.videoCaptions && <track kind="captions" src={C.videoCaptions} srcLang="en" label="English" default />}
        </video>
      ) : (
        <button type="button" className="lp-video-btn" onClick={start} aria-label="Play the video">
          {C.videoPoster && <img src={C.videoPoster} alt="" loading="lazy" decoding="async" />}
          <span className="lp-play"><Play size={28} fill="currentColor" /></span>
          <span className="lp-video-note">Tap to play (sound on)</span>
        </button>
      )}
    </div>
  )
}

// ── Step 2: short multi-step form ──
function LeadForm() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', whatsapp: '', email: '', build: '', budget: '', start: '' })
  const wa = waLink()

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    if (step < 3) { setStep(step + 1); return }
    setSending(true)
    setError('')
    try {
      await submitLead(
        {
          name: form.name,
          whatsapp: form.whatsapp,
          email: form.email,
          wants_built: form.build,
          budget: form.budget,
          start: form.start,
          source: 'Lead landing page',
        },
        { subject: `New Bersk LEAD: ${form.name}` },
      )
      try { sessionStorage.setItem('lp_submitted', JSON.stringify({ name: form.name.split(' ')[0] })) } catch { /* ignore */ }
      navigate('/booking/thank-you')
    } catch {
      setError('Something went wrong sending that. Please try again in a moment.')
      setSending(false)
    }
  }

  const label = step === 2 ? 'Continue' : sending ? 'Sending...' : 'Book My Strategy Call'

  return (
    <form className="lp-form" onSubmit={submit} id="book">
      <div className="lp-progress" aria-label={`Step ${step} of 3`}>
        {[1, 2, 3].map((n) => <span key={n} className={n <= step ? 'on' : ''} />)}
      </div>

      {step === 1 && (
        <div className="lp-field">
          <label htmlFor="lp-name">What's your name?</label>
          <input id="lp-name" name="name" autoComplete="name" value={form.name} onChange={set} required autoFocus={false} />
        </div>
      )}

      {step === 2 && (
        <>
          <div className="lp-field">
            <label htmlFor="lp-wa">WhatsApp number</label>
            <input id="lp-wa" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="0801 234 5678" value={form.whatsapp} onChange={set} required />
          </div>
          <div className="lp-field">
            <label htmlFor="lp-email">Email</label>
            <input id="lp-email" name="email" type="email" autoComplete="email" placeholder="you@email.com" value={form.email} onChange={set} required />
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="lp-field">
            <label htmlFor="lp-build">What do you want built?</label>
            <select id="lp-build" name="build" value={form.build} onChange={set} required>
              <option value="">Choose one</option>
              {BUILD_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="lp-field">
            <label htmlFor="lp-budget">Rough budget</label>
            <select id="lp-budget" name="budget" value={form.budget} onChange={set} required>
              <option value="">Choose one</option>
              {C.budgetBands.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="lp-field">
            <label htmlFor="lp-start">When do you want to start?</label>
            <select id="lp-start" name="start" value={form.start} onChange={set} required>
              <option value="">Choose one</option>
              {START_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </>
      )}

      <div className="lp-actions">
        {step > 1 && (
          <button type="button" className="btn btn-ghost lp-back" onClick={() => setStep(step - 1)} aria-label="Back">
            <ArrowLeft size={16} />
          </button>
        )}
        <button type="submit" className="btn btn-primary lp-cta" disabled={sending}>
          {label} <ArrowRight size={16} />
        </button>
      </div>

      {error && <p className="lp-error" role="alert">{error}</p>}

      <p className="lp-fineprint">
        By continuing you agree that Bersk may contact you and use your details for advertising.
      </p>

      {wa && (
        <a className="lp-wa" href={wa} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={16} /> Prefer chat? Message us on WhatsApp
        </a>
      )}
    </form>
  )
}

export default function Landing() {
  const v = new URLSearchParams(window.location.search).get('v')
  const h = HEADLINES[v] || HEADLINES[1]
  const g = C.galuxe
  const hasResult = g.result && g.timeframe

  function toBook() {
    const el = document.getElementById('book')
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    const input = el.querySelector('input, select')
    if (input) setTimeout(() => input.focus({ preventScroll: true }), 500)
  }

  return (
    <>
      {/* Headline */}
      <section className="lp-hero">
        <div className="lp-wrap">
          <h1 className="lp-h1">
            {h.lead} <span className="lp-hl">{h.hl}</span>
          </h1>
          <p className="lp-sub">
            Watch the short video, then book a strategy call with the Bersk team.
          </p>
        </div>
      </section>

      {/* Step 1 */}
      <section className="lp-block">
        <div className="lp-wrap">
          <div className="lp-step">Step 1: Watch this short video</div>
          <VideoBlock />
        </div>
      </section>

      {/* Step 2 */}
      <section className="lp-block lp-block-form">
        <div className="lp-wrap lp-narrow">
          <div className="lp-step">Step 2: Book your strategy call</div>
          <LeadForm />
        </div>
      </section>

      {/* Proof */}
      <section className="lp-proof">
        <div className="lp-wrap">
          <div className="lp-eyebrow">Work we've built</div>
          <div className="lp-proof-card">
            <div className="lp-proof-head">
              <strong>Galuxe</strong>
              <span>An online store for Nigerian shoppers</span>
            </div>
            {hasResult && (
              <div className="lp-proof-result">
                <b>{g.result}</b> <span>{g.timeframe}</span>
              </div>
            )}
            <ul className="lp-proof-list">
              <li><Wallet size={16} /> Pay on delivery nationwide</li>
              <li><Truck size={16} /> Same-day delivery in Lagos and order tracking</li>
              <li><Smartphone size={16} /> Built to sell on a phone</li>
            </ul>
            {g.quote && (
              <blockquote className="lp-quote">
                “{g.quote}”{g.quoteBy && <cite> — {g.quoteBy}</cite>}
              </blockquote>
            )}
          </div>
        </div>
      </section>

      {/* Blueprint */}
      <section className="lp-blueprint">
        <div className="lp-wrap">
          <div className="lp-eyebrow lp-eyebrow-light">The Bersk Blueprint</div>
          <h2 className="lp-h2">A clear process, one step at a time</h2>
          <ol className="lp-bp-list">
            {BLUEPRINT.map((b) => (
              <li key={b.n}>
                <span className="lp-bp-n">{b.n}</span>
                <div>
                  <div className="lp-bp-title">{b.title}</div>
                  <div className="lp-bp-desc">{b.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Repeat CTA */}
      <section className="lp-repeat">
        <div className="lp-wrap">
          <h2 className="lp-h2 lp-h2-dark">Ready to see how your idea could work?</h2>
          <button type="button" className="btn btn-primary btn-xl" onClick={toBook}>
            Book My Strategy Call <CheckCircle2 size={18} />
          </button>
        </div>
      </section>
    </>
  )
}
