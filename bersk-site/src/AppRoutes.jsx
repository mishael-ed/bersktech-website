import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './App.jsx'

// Home loads with the main bundle; other pages load on demand (and are
// prefetched when the browser is idle, see below).
const importServices = () => import('./pages/Services.jsx')
const importCaseStudies = () => import('./pages/CaseStudies.jsx')
const importContact = () => import('./pages/Contact.jsx')
const Services = lazy(importServices)
const CaseStudies = lazy(importCaseStudies)
const Contact = lazy(importContact)
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500))
idle(() => {
  importServices()
  importCaseStudies()
  importContact()
})

export default function AppRoutes() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
