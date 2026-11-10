import './App.css'
import {
  Globe, CheckCircle2, TrendingUp, Code2, Bot, Clock, Cpu, Cloud, Layers,
  Star, ArrowUpRight, ChevronRight, Mail, Zap, Shield, BarChart3, Users,
  UserX, MessageSquareOff, Wallet, Compass,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const services = [
  {
    icon: <Globe size={26} />,
    title: 'Websites & Web Apps',
    desc: 'Fast, modern websites, portals and web apps built around your brand and designed to turn visitors into customers.',
  },
  {
    icon: <Code2 size={26} />,
    title: 'Custom Software Systems',
    desc: 'Dashboards, CRMs, booking and internal tools tailored to how your business actually runs, not off-the-shelf compromises.',
  },
  {
    icon: <Bot size={26} />,
    title: 'AI & Automation',
    desc: 'AI agents, appointment setters, chatbots and automated workflows that handle the repetitive work around the clock.',
  },
]

const problems = [
  {
    icon: <UserX size={26} />,
    title: "Can't find a developer you trust",
    desc: 'Good developers are hard to find, and harder to know are reliable. Many people end up hiring and firing one after another.',
  },
  {
    icon: <MessageSquareOff size={26} />,
    title: "Hard to get them to see your vision",
    desc: "You know exactly what you want, but it gets lost in translation between your idea and what's actually built.",
  },
  {
    icon: <Wallet size={26} />,
    title: 'Scared to risk your whole budget',
    desc: "Putting everything into an app without knowing if it will succeed is a real fear, and a fair one.",
  },
  {
    icon: <Compass size={26} />,
    title: 'No proven system to follow',
    desc: 'Without a clear process for planning, designing and developing, time and money get wasted on features nobody needs.',
  },
]

const differentiators = [
  'AI-powered speed with human expertise guiding every step',
  'We plan, design and build, so you never have to hunt for a developer',
  'Your vision is captured clearly before a line of code is written',
  'Launch on time and under budget, with no wasted features',
  'One team for your website, software and automation',
  "Transparent process: you always know what's happening",
]

const steps = [
  {
    step: '01', title: 'Discovery & Vision',
    desc: 'We dig into your idea and goals until we truly see your vision, and test whether it can succeed before you commit your budget.',
    items: null,
  },
  {
    step: '02', title: 'Plan & Design',
    desc: 'We map out a clear plan and scope:',
    items: ['Feature prioritization, no useless features', 'UI/UX and architecture', 'Clear timeline and fixed pricing'],
  },
  {
    step: '03', title: 'Build & Launch',
    desc: 'AI-accelerated, human-led development:',
    items: ['Development & integrations', 'Testing and deployment', 'Training and handover', 'Ongoing support & iteration'],
  },
]

const industries = [
  'Individuals & Creators', 'Founders & Startups', 'Small Businesses', 'Agencies',
  'Real Estate', 'Healthcare', 'E-commerce', 'Finance', 'Education', 'Enterprise Teams',
]

const stack = ['Web & Mobile', 'AI & Automation', 'Cloud & DevOps', 'Data & Analytics']

const results = [
  { icon: <Clock size={22} />,      text: 'Hours saved through automation' },
  { icon: <TrendingUp size={22} />, text: 'Faster growth with scalable systems' },
  { icon: <BarChart3 size={22} />,  text: 'Clearer data and better decisions' },
  { icon: <Star size={22} />,       text: 'A stronger, more professional brand' },
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
            Bersk Technologies
            <span className="hero-label-divider" />
            Tech Solutions for Everyone
          </div>
          <h1 className="hero-headline">
            Your Ideas, Built With Tech.<br />
            <span className="gradient-text">Brought to Life.</span>
          </h1>
          <p className="hero-sub">
            Have an idea but can't code? Bersk Technologies turns it into real software, websites and
            AI automation through a proven, AI-powered, human-led process, so you launch on time,
            on budget, and get it right the first time.
          </p>
          <div className="hero-ctas">
            <NavLink to="/contact" className="btn btn-primary btn-lg">Book a Strategy Call</NavLink>
            <a href="#how" className="btn btn-ghost btn-lg">See How It Works <ChevronRight size={15} /></a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-track">
          {[...Array(2)].flatMap((_, rep) => [
            { icon: <Globe size={14} />, text: 'Websites' },
            { icon: <Code2 size={14} />, text: 'Custom Software' },
            { icon: <Bot size={14} />, text: 'AI Automation' },
            { icon: <Cloud size={14} />, text: 'Cloud & Integrations' },
            { icon: <Zap size={14} />, text: 'Fast Delivery' },
            { icon: <Shield size={14} />, text: 'Secure & Reliable' },
            { icon: <Layers size={14} />, text: 'Scalable Architecture' },
          ].map((item, i) => (
            <span key={`${rep}-${i}`} className="trust-item" aria-hidden={rep === 1}>
              <span className="trust-icon">{item.icon}</span>
              {item.text}
            </span>
          )))}
        </div>
      </div>

      {/* ── THE PROBLEM ── */}
      <section className="section section-solid problem-section">
        <div className="container">
          <div className="section-eyebrow">Sound Familiar?</div>
          <h2 className="section-title">
            Got an idea for an app or software,{' '}
            <span className="gradient-text">but you don't know how to code?</span>
          </h2>
          <p className="section-body">
            You're not alone. Most great ideas never launch, not because they're bad, but because
            building them without a proven system is risky, slow and expensive.
          </p>
          <div className="services-grid problem-grid">
            {problems.map((p) => (
              <div key={p.title} className="glass-card service-card">
                <div className="service-icon">{p.icon}</div>
                <h3 className="service-title">{p.title}</h3>
                <p className="service-desc">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="problem-note">
            The result? Wasted time, wasted money and an idea that never takes off.
            It doesn't have to go that way.
          </p>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="section section-open" id="services">
        <div className="container">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title">
            Everything your business needs to{' '}
            <span className="gradient-text">run on tech.</span>
          </h2>
          <p className="section-body">
            From your first website to fully automated operations, we build the digital
            foundation that helps businesses and individuals turn ideas into working products.
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
            Most developers just write code.{' '}
            <span className="gradient-text">We give you a proven system.</span>
          </h2>
          <p className="section-body">
            Our AI-powered, human-led development process takes your idea from plan to launch, so you validate before you overspend and build the right thing, the right way, the first time.
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
          <h2 className="section-title">
            Our AI-Powered, <span className="gradient-text">Human-Led</span> Process
          </h2>
          <p className="section-body">
            AI makes us faster. Experienced people make the decisions. The result is software built the right way, the first time.
          </p>
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
              <h2 className="section-title">Built for businesses and individuals with big ideas</h2>
              <p className="section-body">
                Whether you're a company upgrading operations or an individual with an idea, we can build it.
              </p>
              <NavLink to="/contact" className="btn btn-primary btn-lg">Book a Demo</NavLink>
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

      {/* ── CAPABILITIES ── */}
      <section className="section section-open local-section">
        <div className="container">
          <div className="section-eyebrow">Capabilities</div>
          <h2 className="section-title">Our tech toolkit spans:</h2>
          <div className="cities-grid">
            {stack.map((c, i) => {
              const Icon = [Layers, Cpu, Cloud, BarChart3][i]
              return (
                <div key={c} className="glass-card city-card">
                  <Icon size={18} className="city-icon" />
                  <span className="city-name">{c}</span>
                </div>
              )
            })}
          </div>
          <p className="local-cta-note">
            If it runs on technology, we can design it, build it and automate it.
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
          <p className="results-note">Project case studies added as they become available.</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="audit">
        <div className="cta-glow" aria-hidden="true" />
        <div className="container cta-inner">
          <div className="section-eyebrow">Let's Build</div>
          <h2 className="cta-title">
            Got an idea you want<br />to bring to life?
          </h2>
          <p className="cta-sub">
            See our AI-powered, human-led process and let us help you launch on time and under budget, the right way, the first time.
          </p>
          <NavLink to="/contact" className="btn btn-primary btn-xl">
            <Mail size={18} /> Book a Strategy Call
          </NavLink>
        </div>
      </section>
    </>
  )
}
