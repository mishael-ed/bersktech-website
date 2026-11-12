import { NavLink } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import { SOCIAL } from './social.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <NavLink to="/">
              <img src="/logos/logo-white.webp" alt="Bersk Technologies" className="footer-logo" width="140" height="48" loading="lazy" decoding="async" />
            </NavLink>
            <p className="footer-desc">
              A software development company in Lagos, Nigeria. Websites, software systems and AI automation for businesses and individuals, built to bring your ideas to life.
            </p>
            <div className="footer-social">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer me" aria-label="Bersk Technologies on Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer me" aria-label="Bersk Technologies on Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Services</div>
            <ul>
              <li><NavLink to="/services">Websites &amp; Web Apps</NavLink></li>
              <li><NavLink to="/services">Custom Software</NavLink></li>
              <li><NavLink to="/services">AI &amp; Automation</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Company</div>
            <ul>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/case-studies">Case Studies</NavLink></li>
              <li><NavLink to="/#how">How It Works</NavLink></li>
              <li><NavLink to="/contact">Book a Strategy Call</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Contact</div>
            <ul>
              <li><a href="mailto:hello@bersk.tech"><Mail size={13} /> hello@bersk.tech</a></li>
              <li><span><MapPin size={13} /> Lagos, Nigeria · Serving clients worldwide</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bersk. All rights reserved.</span>
          <span>Technology solutions for modern business</span>
        </div>
      </div>
    </footer>
  )
}
