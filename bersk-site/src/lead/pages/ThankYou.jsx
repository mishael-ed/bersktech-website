import { useEffect, useState } from 'react'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { LEAD_CONFIG as C } from '../config.js'
import { trackLead } from '../track.js'

export default function ThankYou() {
  const [name] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('lp_submitted') || 'null')?.name || '' } catch { return '' }
  })

  // The Meta Lead event fires here only, and only once per submission.
  useEffect(() => {
    try {
      if (sessionStorage.getItem('lp_submitted') && !sessionStorage.getItem('lp_lead_sent')) {
        trackLead()
        sessionStorage.setItem('lp_lead_sent', '1')
      }
    } catch { /* ignore */ }
  }, [])

  const wa = C.whatsappNumber
    ? `https://wa.me/${C.whatsappNumber}?text=${encodeURIComponent(C.whatsappMessage)}`
    : ''

  return (
    <section className="lp-block lp-thanks">
      <div className="lp-wrap lp-narrow">
        <CheckCircle2 size={44} className="lp-thanks-icon" />
        <h1 className="lp-h1 lp-h1-sm">{name ? `Thanks, ${name}.` : 'Thanks.'} Your details are in.</h1>
        <p className="lp-sub">
          Pick a time for your strategy call below, or message us on WhatsApp and we'll set it up with you.
        </p>

        {C.calendarUrl ? (
          <div className="lp-calendar">
            <iframe src={C.calendarUrl} title="Book your strategy call" loading="lazy" />
          </div>
        ) : (
          <div className="lp-calendar lp-calendar-empty">
            We'll message you on WhatsApp shortly to confirm a time.
          </div>
        )}

        {wa && (
          <a className="btn btn-primary btn-lg lp-wa-btn" href={wa} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} /> Message Bersk on WhatsApp
          </a>
        )}
      </div>
    </section>
  )
}
