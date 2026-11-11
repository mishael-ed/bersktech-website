import { Suspense, lazy } from 'react'
import { useLocation } from 'react-router-dom'
import Background from './Background.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Reveal from './Reveal.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import AppRoutes from './AppRoutes.jsx'
import SeoHead from './SeoHead.jsx'

// The /booking pages are a separate, stripped-down funnel (no site menu or footer).
const LeadApp = lazy(() => import('./lead/LeadApp.jsx'))

export default function Site() {
  const { pathname } = useLocation()

  if (pathname === '/booking' || pathname.startsWith('/booking/')) {
    return (
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <LeadApp />
      </Suspense>
    )
  }

  return (
    <div className="site">
      <Background />
      <SeoHead />
      <ScrollToTop />
      <Nav />
      <main id="main">
        <AppRoutes />
      </main>
      <Footer />
      <Reveal />
    </div>
  )
}
