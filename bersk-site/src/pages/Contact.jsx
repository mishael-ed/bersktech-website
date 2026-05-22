import { useState } from 'react'
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'We review your online presence',
    desc: 'We check your website, Google Business Profile, and local rankings.',
  },
  {
    title: 'We identify what\'s costing you leads',
    desc: 'Slow website, bad SEO structure, weak Maps ranking, missing backlinks — we find it all.',
  },
  {
    title: 'We send you a clear action plan',
    desc: 'No fluff. Just what needs to change to start getting more calls.',
  },
]

const whoWeHelp = [
  'Contractors', 'Cleaning companies', 'HVAC & plumbing',
  'Roofing & construction', 'Local service providers',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', business: '', website: '', contact: '', message: '',
  })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div className="section-eyebrow">Contact Us</div>
          <h1 className="section-title">
            Get a Free SEO Audit<br />&amp;{' '}
            <span className="gradient-text">Growth Plan</span>
          </h1>
          <p className="section-body">
            If your business isn't showing up on Google, you're losing calls every single day.
            We'll show you exactly what's holding you back and what to fix.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-grid">
          {/* Left: info */}
          <div>
            <h2 className="section-title" style={{ fontSize: '22px' }}>What Happens When You Contact Us</h2>
            <div className="contact-steps">
              {steps.map((s, i) => (
                <div key={i} className="contact-step">
                  <div className="contact-step-num">{i + 1}</div>
                  <div>
                    <div className="contact-step-title">{s.title}</div>
                    <div className="contact-step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-who">
              <div className="contact-who-title">Who We Help</div>
              <ul className="contact-who-list">
                {whoWeHelp.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 14 }}>
                If customers search for your service on Google — we can help you get in front of them.
              </p>
            </div>

            <div className="contact-response-note">
              <strong style={{ color: 'var(--white)' }}>Response Time:</strong> We usually respond within 24–48 hours.
              If your request is urgent, mention it in the form.
            </div>

            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:hello@bersk.com" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-muted)', fontSize: 15 }}>
                <Mail size={16} style={{ color: 'var(--purple-light)' }} /> hello@bersk.com
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-muted)', fontSize: 15 }}>
                <MapPin size={16} style={{ color: 'var(--purple-light)' }} /> Las Cruces, New Mexico
              </span>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="glass-card" style={{ padding: '48px 36px', textAlign: 'center' }}>
                <CheckCircle2 size={48} style={{ color: 'var(--purple-light)', margin: '0 auto 20px' }} />
                <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--white)', marginBottom: 12 }}>
                  We got your request!
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  We'll review your website and Google presence and get back to you within 24–48 hours with a clear action plan.
                </p>
              </div>
            ) : (
              <div className="glass-card contact-form-card">
                <div className="form-title">Request Your Free Audit</div>
                <div className="form-sub">Fill out the form and we'll get back to you within 24–48 hours.</div>
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Name</label>
                      <input
                        id="name" name="name" className="form-input"
                        placeholder="Your name" value={form.name}
                        onChange={handleChange} required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="business">Business Name</label>
                      <input
                        id="business" name="business" className="form-input"
                        placeholder="Your business" value={form.business}
                        onChange={handleChange} required
                      />
                    </div>
                    <div className="form-group full">
                      <label className="form-label" htmlFor="website">Website or Google Listing</label>
                      <input
                        id="website" name="website" className="form-input"
                        placeholder="https://yourbusiness.com" value={form.website}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group full">
                      <label className="form-label" htmlFor="contact">Phone or Email</label>
                      <input
                        id="contact" name="contact" className="form-input"
                        placeholder="Best way to reach you" value={form.contact}
                        onChange={handleChange} required
                      />
                    </div>
                    <div className="form-group full">
                      <label className="form-label" htmlFor="message">What are you looking for help with?</label>
                      <textarea
                        id="message" name="message" className="form-textarea"
                        placeholder={'Examples:\n"I need more calls from Google"\n"My website isn\'t ranking"\n"I want to show up in Google Maps"'}
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg form-submit" style={{ marginTop: 20 }}>
                    Get My Free SEO Audit
                  </button>
                  <p className="form-note">No spam. No commitments. Just a clear plan.</p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
