import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const navRef = useRef(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    let prev = window.scrollY

    const onScroll = () => {
      const curr = window.scrollY
      if (curr < 80 || curr < prev) {
        nav.classList.remove('nav--hidden')
      } else {
        nav.classList.add('nav--hidden')
      }
      prev = curr
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function close() { setMobileOpen(false) }

  return (
    <>
      <nav ref={navRef} className="nav">
        <div className="container nav-inner">
          <NavLink to="/" onClick={close}>
            <img src="/logos/logo-v2.png" alt="Bersk" className="nav-logo" />
          </NavLink>

          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Services</NavLink>
            <NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Contact</NavLink>
          </div>

          <button className="nav-hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-overlay-links">
          <NavLink to="/" end className={({ isActive }) => 'mobile-link' + (isActive ? ' active' : '')} onClick={close}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => 'mobile-link' + (isActive ? ' active' : '')} onClick={close}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => 'mobile-link' + (isActive ? ' active' : '')} onClick={close}>Contact</NavLink>
        </div>
      </div>
    </>
  )
}
