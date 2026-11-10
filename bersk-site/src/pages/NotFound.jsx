import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-header notfound">
      <div className="container">
        <div className="section-eyebrow">Error 404</div>
        <h1 className="section-title">This page doesn't exist.</h1>
        <p className="section-body">The link may be broken or the page may have moved.</p>
        <NavLink to="/" className="btn btn-primary btn-lg">Back to home</NavLink>
      </div>
    </div>
  )
}
