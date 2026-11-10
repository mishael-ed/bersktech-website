import { NavLink } from 'react-router-dom'
import { MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <NavLink to="/">
              <img src="/logos/logo-white.webp" alt="Bersk" className="footer-logo" width="140" height="48" loading="lazy" decoding="async" />
            </NavLink>
            <p className="footer-desc">
              Websites, software systems and AI automation for businesses and individuals, built to bring your ideas to life.
            </p>
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
              <li><NavLink to="/case-studies">Case Studies</NavLink></li>
              <li><NavLink to="/#how">How It Works</NavLink></li>
              <li><NavLink to="/contact">Book a Strategy Call</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Contact</div>
            <ul>
              <li><span><MapPin size={13} /> Remote-first, worldwide</span></li>
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
