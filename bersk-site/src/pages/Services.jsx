import { Search, MapPin, Globe, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const serviceBlocks = [
  {
    icon: <Search size={28} />,
    eyebrow: 'Service 01',
    title: 'Local SEO',
    desc: 'Local SEO is how your business shows up when people search things like "plumber near me", "carpet cleaning Las Cruces", or "roof repair El Paso". We improve your rankings so your business shows up higher in Google search results and the local map pack.',
    examples: ['"plumber near me"', '"carpet cleaning Las Cruces"', '"roof repair El Paso"'],
    includes: [
      'Keyword optimization for your services',
      'On-page SEO improvements',
      'Location targeting for local searches',
      'Internal linking structure setup',
      'Technical SEO cleanup (speed, indexing, structure)',
      'Local content optimization',
    ],
    goal: 'Get your business showing up when people are ready to buy — not just browsing.',
  },
  {
    icon: <MapPin size={28} />,
    eyebrow: 'Service 02',
    title: 'Google Business Profile (Google Maps Ranking)',
    desc: 'Most local businesses lose customers here. We optimize and manage your Google Business Profile so you appear in the Google Maps "3-pack" — which is where most calls come from.',
    examples: null,
    includes: [
      'Full Google Business Profile optimization',
      'Category and service setup',
      'Keyword alignment for map rankings',
      'Review strategy setup and guidance',
      'Photo and post optimization',
      'Local citation building (directory listings)',
    ],
    goal: 'Turn your Google Maps listing into a consistent lead generator.',
  },
  {
    icon: <Globe size={28} />,
    eyebrow: 'Service 03',
    title: 'Website Design (Built to Rank + Convert)',
    desc: 'Most websites look fine but don\'t generate leads. We build fast, simple, and high-performing websites designed specifically to rank on Google, convert visitors into calls, and work on mobile first.',
    examples: null,
    includes: [
      'Custom website design (no cookie-cutter templates)',
      'Mobile-first optimization',
      'Fast loading performance',
      'SEO-ready structure',
      'Clear call-to-action placement',
      'Lead-focused layout (built for calls, not just views)',
    ],
    goal: 'A website that actually brings in business instead of just existing online.',
  },
  {
    icon: <TrendingUp size={28} />,
    eyebrow: 'Service 04',
    title: 'Local Lead Generation System',
    desc: 'This is the combination of everything we do. Instead of just "doing SEO," we build a full system that helps your business consistently get discovered online.',
    examples: null,
    includes: [
      'Local SEO setup',
      'Google Maps optimization',
      'Website optimization',
      'Review growth strategy',
      'Local authority building',
    ],
    goal: 'Turn your online presence into a predictable source of leads.',
  },
]

const approachSteps = [
  { num: '01', title: 'Audit', desc: 'We review your current website, rankings, and Google presence.' },
  { num: '02', title: 'Fix Foundations', desc: 'We optimize your website and Google Business Profile.' },
  { num: '03', title: 'Build Visibility', desc: 'We improve rankings, build local authority, and increase visibility.' },
  { num: '04', title: 'Generate Leads', desc: 'We focus on turning visibility into actual calls and customers.' },
]

const industries = [
  'Carpet cleaners', 'HVAC companies', 'Plumbers', 'Roofers',
  'Landscapers', 'Contractors', 'Home service providers',
]

export default function Services() {
  return (
    <div className="services-page">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div className="section-eyebrow">Services</div>
          <h1 className="section-title">
            Local SEO, Google Maps Ranking<br />&amp;{' '}
            <span className="gradient-text">High-Converting Websites</span>
          </h1>
          <p className="section-body">
            Bersk helps local service businesses get more calls, more leads, and more customers
            by improving how they show up on Google — in Las Cruces, NM and surrounding areas.
          </p>
        </div>
      </div>

      {/* Service blocks */}
      <div className="container">
        {serviceBlocks.map((s) => (
          <div key={s.title} className="service-block">
            <div className="service-block-inner">
              <div className="service-block-left">
                <div className="service-block-label">
                  <span className="service-block-icon">{s.icon}</span>
                  <span className="section-eyebrow" style={{ marginBottom: 0 }}>{s.eyebrow}</span>
                </div>
                <h2 className="service-block-title">{s.title}</h2>
                <p className="service-block-desc">{s.desc}</p>
                {s.examples && (
                  <div style={{ marginBottom: 20 }}>
                    {s.examples.map((ex) => (
                      <div key={ex} style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 4, paddingLeft: 12, borderLeft: '2px solid var(--border-purple)' }}>
                        {ex}
                      </div>
                    ))}
                  </div>
                )}
                <div className="service-block-goal">
                  The goal: {s.goal}
                </div>
              </div>
              <div className="service-block-right">
                <ul className="includes-list">
                  {s.includes.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={15} className="includes-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Our approach */}
      <div className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-eyebrow">Our Approach</div>
          <h2 className="section-title">Simple. Focused. Effective.</h2>
          <p className="section-body">
            Most agencies focus on design or jargon-heavy SEO reports. We focus on one thing: getting you more customers from Google. No confusion. No fluff.
          </p>
          <div className="approach-grid">
            {approachSteps.map((a) => (
              <div key={a.num} className="glass-card approach-card">
                <div className="approach-num">{a.num}</div>
                <div className="approach-title">{a.title}</div>
                <div className="approach-desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who we work with */}
      <div className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-eyebrow">Who We Work With</div>
          <h2 className="section-title">We work best with local service businesses</h2>
          <p className="section-body">
            If your customers are local and find you through Google, we can help you grow.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 32 }}>
            {industries.map((ind) => (
              <div key={ind} className="glass-card industry-chip" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px' }}>
                <ChevronRight size={14} style={{ color: 'var(--purple-light)' }} />
                {ind}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-glow" aria-hidden="true" />
        <div className="container cta-inner">
          <div className="section-eyebrow">Ready to Grow?</div>
          <h2 className="cta-title">
            Want more visibility on Google<br />and more customers calling?
          </h2>
          <p className="cta-sub">
            We'll review your website and Google presence and show you exactly what's holding you back.
          </p>
          <NavLink to="/contact" className="btn btn-primary btn-xl">
            Request a Free SEO Audit
          </NavLink>
        </div>
      </div>
    </div>
  )
}
