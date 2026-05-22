import { NavLink } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <NavLink to="/">
              <img src="/logos/logo-v2.png" alt="Bersk" className="footer-logo" />
            </NavLink>
            <p className="footer-desc">
              Local SEO &amp; Web Design for service businesses in Las Cruces, NM and surrounding areas.
            </p>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Services</div>
            <ul>
              <li><NavLink to="/services">Local SEO</NavLink></li>
              <li><NavLink to="/services">Google Maps Optimization</NavLink></li>
              <li><NavLink to="/services">Website Design</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Company</div>
            <ul>
              <li><NavLink to="/#how">How It Works</NavLink></li>
              <li><NavLink to="/contact">Free SEO Audit</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Contact</div>
            <ul>
              <li><a href="mailto:hello@bersk.com"><Mail size={13} /> hello@bersk.com</a></li>
              <li><span><MapPin size={13} /> Las Cruces, NM</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bersk. All rights reserved.</span>
          <span>Las Cruces, New Mexico</span>
        </div>
      </div>
    </footer>
  )
}
