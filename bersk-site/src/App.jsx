import './App.css'
import {
  MapPin, Phone, Globe, CheckCircle2, TrendingUp,
  Search, Star, ArrowUpRight, ChevronRight, Mail,
  Zap, Shield, BarChart3, Users,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const services = [
  {
    icon: <Search size={26} />,
    title: 'Local SEO',
    desc: 'Rank higher in Google search so customers in your area can actually find you — not your competitors.',
  },
  {
    icon: <MapPin size={26} />,
    title: 'Google Maps Optimization',
    desc: 'Dominate the Map Pack. We optimize your Google Business Profile for high-intent local searches.',
  },
  {
    icon: <Globe size={26} />,
    title: 'Website Design That Converts',
    desc: 'Fast, mobile-first websites built to turn visitors into phone calls and real customers.',
  },
]

const differentiators = [
  'Built specifically for local service businesses',
  'Rankings that produce calls, not vanity metrics',
  'Strategies that work in competitive local markets',
  'Optimized for Las Cruces and surrounding regions',
  "Transparent process — you always know what's happening",
]

const steps = [
  {
    step: '01', title: 'Free SEO Audit',
    desc: "We review your website and Google presence to find exactly what's holding you back.",
    items: null,
  },
  {
    step: '02', title: 'Optimization Plan',
    desc: 'We fix the highest-impact issues first:',
    items: ['Google Business Profile setup', 'On-page SEO improvements', 'Website structure & speed'],
  },
  {
    step: '03', title: 'Growth System',
    desc: 'We build long-term visibility:',
    items: ['Local authority signals', 'Citations & backlinks', 'Review strategy', 'Ongoing optimization'],
  },
]

const industries = [
  'Contractors', 'Cleaning Companies', 'HVAC Services', 'Plumbers',
  'Roofers', 'Landscaping', 'Home Services', 'Restaurants', 'Realtors', 'Salons',
]

const cities = ['Las Cruces, NM', 'Mesilla', 'Sunland Park', 'El Paso Region']

const results = [
  { icon: <TrendingUp size={22} />, text: 'Higher Google Maps visibility' },
  { icon: <Phone size={22} />,     text: 'More calls from local searches' },
  { icon: <BarChart3 size={22} />, text: 'Better website conversion rates' },
  { icon: <Star size={22} />,      text: 'Stronger online reputation' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80&auto=format)' }}
          aria-hidden="true"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-label">
            <span className="hero-label-dot" />
            Las Cruces, NM
            <span className="hero-label-divider" />
            Local SEO Experts
          </div>
          <h1 className="hero-headline">
            Grow Your Business With<br />
            <span className="gradient-text">Better Rankings &amp; More Calls.</span>
          </h1>
          <p className="hero-sub">
            Bersk helps service businesses in Las Cruces show up higher on Google,
            get found in the Map Pack, and turn searches into real customers.
          </p>
          <div className="hero-ctas">
            <NavLink to="/contact" className="btn btn-primary btn-lg">Get a Free SEO Audit</NavLink>
            <a href="#how" className="btn btn-ghost btn-lg">See How It Works <ChevronRight size={15} /></a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="container trust-inner">
          {[
            { icon: <Search size={14} />, text: 'Local SEO' },
            { icon: <MapPin size={14} />, text: 'Map Pack Optimization' },
            { icon: <Globe size={14} />, text: 'Web Design' },
            { icon: <Zap size={14} />, text: 'Mobile-First Performance' },
            { icon: <Star size={14} />, text: 'Review Strategy' },
            { icon: <Shield size={14} />, text: 'Transparent Reporting' },
          ].map((item, i) => (
            <span key={i} className="trust-item">
              <span className="trust-icon">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* ── WHAT WE DO ── */}
      <section className="section section-open" id="services">
        <div className="container">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title">
            We get you found where it matters most —{' '}
            <span className="gradient-text">Google.</span>
          </h2>
          <p className="section-body">
            Most customers don't scroll. They click the top results on Google Maps or the first few
            websites they see. If you're not there, you're losing calls every single day.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="glass-card service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BERSK ── */}
      <section className="section section-solid why-section">
        <div className="container">
          <div className="section-eyebrow">Why Bersk</div>
          <h2 className="section-title">
            Most agencies chase traffic.{' '}
            <span className="gradient-text">We chase customers.</span>
          </h2>
          <p className="section-body">
            We don't just build websites or "do SEO." We build systems that generate real leads for local businesses.
          </p>
          <ul className="check-list">
            {differentiators.map((d) => (
              <li key={d} className="check-item">
                <CheckCircle2 size={16} className="check-icon" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section section-open" id="how">
        <div className="container">
          <div className="section-eyebrow">Our Process</div>
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            {steps.map((s) => (
              <div key={s.step} className="glass-card step-card">
                <div className="step-num">{s.step}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
                {s.items && (
                  <ul className="step-list">
                    {s.items.map((item) => (
                      <li key={item}><ChevronRight size={13} className="step-li-icon" />{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section section-solid who-section">
        <div className="container">
          <div className="who-grid">
            <div className="who-left">
              <div className="section-eyebrow">Who We Serve</div>
              <h2 className="section-title">Built for local service businesses</h2>
              <p className="section-body">
                If your customers search Google before calling, we can help you grow.
              </p>
              <NavLink to="/contact" className="btn btn-primary btn-lg">Start Growing</NavLink>
            </div>
            <div className="who-right">
              <div className="industries-grid">
                {industries.map((ind) => (
                  <div key={ind} className="glass-card industry-chip">
                    <Users size={14} className="ind-icon" />
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL FOCUS ── */}
      <section className="section section-open local-section">
        <div className="container">
          <div className="section-eyebrow">Local Focus</div>
          <h2 className="section-title">We help businesses rank in:</h2>
          <div className="cities-grid">
            {cities.map((c) => (
              <div key={c} className="glass-card city-card">
                <MapPin size={18} className="city-icon" />
                <span className="city-name">{c}</span>
              </div>
            ))}
          </div>
          <p className="local-cta-note">
            If your competitors are showing up above you on Google, we fix that.
          </p>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="section section-solid results-section">
        <div className="container">
          <div className="section-eyebrow">Results</div>
          <h2 className="section-title">What our systems aim for</h2>
          <div className="results-grid">
            {results.map((r) => (
              <div key={r.text} className="glass-card result-card">
                <div className="result-icon">{r.icon}</div>
                <p className="result-text">{r.text}</p>
                <ArrowUpRight size={18} className="result-arrow" />
              </div>
            ))}
          </div>
          <p className="results-note">Real case studies added as they become available.</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="audit">
        <div className="cta-glow" aria-hidden="true" />
        <div className="container cta-inner">
          <div className="section-eyebrow">Free Audit</div>
          <h2 className="cta-title">
            Want more customers finding<br />your business on Google?
          </h2>
          <p className="cta-sub">
            Get a free SEO audit and see exactly what's holding your business back.
          </p>
          <NavLink to="/contact" className="btn btn-primary btn-xl">
            <Mail size={18} /> Get My Free SEO Audit
          </NavLink>
        </div>
      </section>
    </>
  )
}
