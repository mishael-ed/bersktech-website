import { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { submitLead } from '../lib/leads.js'

const next = [
  { title: 'We read your brief.', desc: 'Your idea, your goals and the problem to solve.' },
  { title: 'We talk it through.', desc: 'A short call to understand it and see if we fit.' },
  { title: 'We define the next step.', desc: 'A clear scope, timeline and price.' },
]

const projectTypes = [
  'Website or web app', 'Custom software', 'Mobile app',
  'AI agent or chatbot', 'Automation', 'Not sure yet',
]

export default function Contact() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    first: '', last: '', email: '', company: '', phone: '',
    type: '', timeline: '', message: '',
  })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (step === 1) { setStep(2); return }
    setSending(true)
    setError('')
    try {
      await submitLead(
        {
          name: `${form.first} ${form.last}`,
          email: form.email,
          company: form.company,
          phone: form.phone,
          wants_built: form.type,
          start: form.timeline,
          message: form.message,
          source: 'Main site contact form',
        },
        { subject: `New Bersk enquiry from ${form.first} ${form.last}` },
      )
      setSubmitted(true)
    } catch {
      setError('Something went wrong sending that. Please try again in a moment.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="container contact-shell">
        {/* Left */}
        <div className="contact-left">
          <div className="contact-hero-card">
            <div className="contact-hero-top">Bersk Technologies</div>
            <h1 className="contact-hero-title">Great ideas start with a conversation.</h1>
            <img src="/logos/mark-white.webp" alt="" className="contact-hero-mark" width="47" height="64" decoding="async" />
          </div>

          <h2 className="contact-next-title">What happens next</h2>
          <ol className="contact-next">
            {next.map((n, i) => (
              <li key={n.title}>
                <span className="contact-next-num">0{i + 1}</span>
                <div>
                  <div className="contact-next-head">{n.title}</div>
                  <div className="contact-next-desc">{n.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right */}
        <div className="contact-right">
          {submitted ? (
            <div className="contact-form-card contact-done">
              <CheckCircle2 size={44} className="contact-done-icon" />
              <h2 className="contact-form-title">Thanks, we got it.</h2>
              <p className="contact-form-sub">We'll reply within 24–48 hours to set up your strategy call.</p>
            </div>
          ) : (
            <form className="contact-form-card" onSubmit={handleSubmit}>
              <div className="contact-form-eyebrow">Start a conversation</div>
              <h2 className="contact-form-title">Let's talk about your project.</h2>
              <p className="contact-form-sub">Book a strategy call and tell us what you have in mind.</p>

              <div className="contact-steps-nav">
                <span className={`csn${step === 1 ? ' active' : ' done'}`}><i>1</i> Your details</span>
                <span className={`csn${step === 2 ? ' active' : ''}`}><i>2</i> Your project</span>
              </div>

              {step === 1 ? (
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="first">First name</label>
                    <input id="first" name="first" className="form-input" value={form.first} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="last">Last name</label>
                    <input id="last" name="last" className="form-input" value={form.last} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" className="form-input" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company <span className="opt">(optional)</span></label>
                    <input id="company" name="company" className="form-input" value={form.company} onChange={handleChange} />
                  </div>
                  <div className="form-group full">
                    <label className="form-label" htmlFor="phone">Phone / WhatsApp <span className="opt">(optional)</span></label>
                    <input id="phone" name="phone" className="form-input" placeholder="+1 (555) 123-4567" value={form.phone} onChange={handleChange} />
                  </div>
                </div>
              ) : (
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="type">What do you need?</label>
                    <select id="type" name="type" className="form-input" value={form.type} onChange={handleChange} required>
                      <option value="">Select one</option>
                      {projectTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="timeline">Timeline</label>
                    <select id="timeline" name="timeline" className="form-input" value={form.timeline} onChange={handleChange}>
                      <option value="">Select one</option>
                      <option>As soon as possible</option>
                      <option>1–3 months</option>
                      <option>3+ months</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                  <div className="form-group full">
                    <label className="form-label" htmlFor="message">Tell us about your idea</label>
                    <textarea id="message" name="message" className="form-textarea" value={form.message} onChange={handleChange} required />
                  </div>
                </div>
              )}

              <div className="contact-form-actions">
                {step === 2 ? (
                  <button type="button" className="btn btn-ghost btn-lg" onClick={() => setStep(1)}>
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : <span />}
                <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                  {step === 1 ? 'Continue' : sending ? 'Sending...' : 'Book my strategy call'} <ArrowRight size={16} />
                </button>
              </div>
              {error && <p className="form-error" role="alert">{error}</p>}
              <p className="form-note">No spam. We only use your details to reply to you.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
