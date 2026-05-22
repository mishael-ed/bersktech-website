import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const navRef = useRef(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Hide on scroll down, show on scroll up — direct style manipulation, no React state
  useEffect(() => {
    let prevY = window.scrollY

    function onScroll() {
      const currY = window.scrollY
      const nav = navRef.current
      if (!nav) return

      if (currY <= 10) {
        nav.style.transform = ''
      } else if (currY > prevY) {
        nav.style.transform = 'translateY(-100%)'
        setMobileOpen(false)
      } else if (currY < prevY) {
        nav.style.transform = ''
      }

      prevY = currY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function closeMenu() { setMobileOpen(false) }

  return (
    <nav ref={navRef} className="nav">
      <div className="container nav-inner">
        <NavLink to="/" onClick={closeMenu}>
          <img src="/logos/logo-v2.png" alt="Bersk" className="nav-logo" />
        </NavLink>

        {/* Desktop links */}
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Contact</NavLink>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="mobile-menu">
          <NavLink to="/" end className={({ isActive }) => 'mobile-link' + (isActive ? ' active' : '')} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => 'mobile-link' + (isActive ? ' active' : '')} onClick={closeMenu}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => 'mobile-link' + (isActive ? ' active' : '')} onClick={closeMenu}>Contact</NavLink>
        </div>
      )}
    </nav>
  )
}
