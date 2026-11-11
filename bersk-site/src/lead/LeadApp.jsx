import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './lead.css'
import Landing from './pages/Landing.jsx'
import ThankYou from './pages/ThankYou.jsx'
import { Privacy, Terms } from './pages/Legal.jsx'
import { initPixel, pageView, captureUtm } from './track.js'

// The landing page lives at bersk.tech/booking (with its own header and footer, no site menu).
export default function LeadApp() {
  const { pathname } = useLocation()

  useEffect(() => {
    captureUtm()
    initPixel()
    // keep this ad page out of search results
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    const prevTitle = document.title
    document.title = 'Book a Strategy Call | Bersk Technologies'
    return () => {
      meta.remove()
      document.title = prevTitle
    }
  }, [])

  useEffect(() => {
    pageView()
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="lp">
      <header className="lp-header">
        <div className="lp-wrap">
          <Link to="/booking" aria-label="Bersk Technologies">
            <img src="/logos/logo-dark.webp" alt="Bersk" width="92" height="30" decoding="async" />
          </Link>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/booking" element={<Landing />} />
          <Route path="/booking/thank-you" element={<ThankYou />} />
          <Route path="/booking/privacy" element={<Privacy />} />
          <Route path="/booking/terms" element={<Terms />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </main>

      <footer className="lp-footer">
        <div className="lp-wrap">
          <nav className="lp-footer-links">
            <Link to="/booking/privacy">Privacy Policy</Link>
            <Link to="/booking/terms">Terms</Link>
          </nav>
          <p className="lp-consent">
            By sharing your details you agree that Bersk Technologies may contact you about your
            enquiry and may use your details for advertising, including sharing them with Meta
            (Facebook and Instagram) to show you relevant ads.
          </p>
          <p className="lp-copy">© {new Date().getFullYear()} Bersk Technologies</p>
        </div>
      </footer>
    </div>
  )
}
