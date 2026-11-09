import { Globe, Code2, Bot, Workflow, CheckCircle2, ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const serviceBlocks = [
  {
    icon: <Globe size={28} />,
    eyebrow: 'Service 01',
    title: 'Websites & Web Applications',
    desc: 'Your website is your digital storefront. We design and build fast, secure, beautifully crafted websites and web apps, from sleek company sites to e-commerce stores and customer portals.',
    examples: ['Company & portfolio websites', 'E-commerce stores', 'Customer portals & web apps'],
    includes: [
      'Custom UI/UX design (no cookie-cutter templates)',
      'Responsive, mobile-first development',
      'Blazing-fast performance',
      'SEO-ready structure',
      'CMS and admin dashboards',
      'Hosting, security and maintenance',
    ],
    goal: 'A website that represents your brand and actually drives business.',
  },
  {
    icon: <Code2 size={28} />,
    eyebrow: 'Service 02',
    title: 'Custom Software Systems',
    desc: 'When off-the-shelf tools do not fit, we build software that does. Internal systems, CRMs, booking platforms, dashboards and SaaS products designed around your exact workflow.',
    examples: null,
    includes: [
      'CRM, ERP and internal management tools',
      'Booking, scheduling and payment systems',
      'Analytics dashboards and reporting',
      'API development and third-party integrations',
      'Mobile apps (iOS and Android)',
      'Scalable cloud architecture',
    ],
    goal: 'Software that fits your business instead of forcing you to fit it.',
  },
  {
    icon: <Bot size={28} />,
    eyebrow: 'Service 03',
    title: 'AI Systems & Chatbots',
    desc: 'We put AI to work for your business: intelligent assistants that answer customers, qualify leads, book appointments and support your team, available 24/7.',
    examples: null,
    includes: [
      'AI appointment setters and voice agents',
      'Customer support and website chatbots',
      'Lead qualification and follow-up',
      'Custom AI tools trained on your data',
      'Document and data processing',
      'LLM integration into your existing systems',
    ],
    goal: 'Give your business an always-on team member that never misses a lead.',
  },
  {
    icon: <Workflow size={28} />,
    eyebrow: 'Service 04',
    title: 'Business Process Automation',
    desc: 'Stop wasting hours on repetitive tasks. We connect your tools and automate the busywork, from invoicing and onboarding to reporting and customer communication.',
    examples: null,
    includes: [
      'Workflow mapping and automation design',
      'CRM, email and messaging automations',
      'Automated reporting and notifications',
      'Data syncing across your tools',
      'Onboarding and document workflows',
      'Monitoring and ongoing optimization',
    ],
    goal: 'Free your team to focus on work that matters while systems handle the rest.',
  },
]

const approachSteps = [
  { num: '01', title: 'Discover', desc: 'We understand your business, goals and the problems worth solving.' },
  { num: '02', title: 'Design', desc: 'We plan the solution, scope and timeline so there are no surprises.' },
  { num: '03', title: 'Build', desc: 'We develop, integrate and test with regular updates along the way.' },
  { num: '04', title: 'Launch & Support', desc: 'We deploy, train your team and keep improving after go-live.' },
]

const industries = [
  'Individuals & creators', 'Founders & startups', 'Small businesses', 'Agencies',
  'Real estate', 'Healthcare', 'E-commerce', 'Finance', 'Education', 'Enterprise teams',
]

export default function Services() {
  return (
    <div className="services-page">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div className="section-eyebrow">Services</div>
          <h1 className="section-title">
            Websites, Software Systems<br />&amp;{' '}
            <span className="gradient-text">AI Automation</span>
          </h1>
          <p className="section-body">
            Bersk Technologies builds the technology businesses and individuals need to bring ideas
            to life, operate smarter and scale with confidence.
          </p>
        </div>
      </div>

      {/* Service blocks */}
      <section className="section section-open">
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
                      <div key={ex} style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 4, paddingLeft: 12, borderLeft: '2px solid var(--border-blue)' }}>
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
      </section>

      {/* Our approach */}
      <section className="section section-solid">
        <div className="container">
          <div className="section-eyebrow">Our Approach</div>
          <h2 className="section-title">Simple. Focused. Effective.</h2>
          <p className="section-body">
            Our AI-powered, human-led process means no guesswork, no wasted features and no bloated timelines. We build the right thing, on time and on budget, the first time.
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
      </section>

      {/* Who we work with */}
      <section className="section section-open">
        <div className="container">
          <div className="section-eyebrow">Who We Work With</div>
          <h2 className="section-title">Businesses and individuals with ideas</h2>
          <p className="section-body">
            From a solo founder with a first idea to an established company modernizing operations, we adapt to what you need.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 32 }}>
            {industries.map((ind) => (
              <div key={ind} className="glass-card industry-chip" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px' }}>
                <ChevronRight size={14} style={{ color: 'var(--blue-light)' }} />
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-glow" aria-hidden="true" />
        <div className="container cta-inner">
          <div className="section-eyebrow">Ready to Build?</div>
          <h2 className="cta-title">
            Have an idea, a problem<br />or a process to automate?
          </h2>
          <p className="cta-sub">
            Tell us what you're working on and we'll show you the smartest way to build it.
          </p>
          <NavLink to="/contact" className="btn btn-primary btn-xl">
            Book a Free Consultation
          </NavLink>
        </div>
      </div>
    </div>
  )
}
