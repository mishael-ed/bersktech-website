import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Background from './Background.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Reveal from './Reveal.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import AppRoutes from './AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="site">
        <Background />
        <ScrollToTop />
        <Nav />
        <AppRoutes />
        <Footer />
        <Reveal />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
