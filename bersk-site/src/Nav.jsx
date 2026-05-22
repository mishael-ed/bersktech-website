import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  const navRef = useRef(null)

  useEffect(() => {
    let lastY = window.scrollY

    function onScroll() {
      const y = window.scrollY
      const nav = navRef.current
      if (!nav) return

      if (y < 10) {
        nav.classList.remove('nav--hidden')
      } else if (y > lastY && y > 60) {
        nav.classList.add('nav--hidden')
      } else if (y < lastY) {
        nav.classList.remove('nav--hidden')
      }

      lastY = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav ref={navRef} className="nav">
      <div className="container nav-inner">
        <NavLink to="/">
          <img src="/logos/logo-v2.png" alt="Bersk" className="nav-logo" />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
