import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './App.jsx'

// Home loads with the main bundle; other pages load on demand (and are
// prefetched when the browser is idle, see below).
import {
  importServices, importCaseStudies, importAbout, importBlog, importBlogPost, importContact, importNotFound,
} from './route-loaders.js'

const Services = lazy(importServices)
const CaseStudies = lazy(importCaseStudies)
const About = lazy(importAbout)
const Blog = lazy(importBlog)
const BlogPost = lazy(importBlogPost)
const Contact = lazy(importContact)
const NotFound = lazy(importNotFound)

// warm the other pages while the browser is idle so navigation feels instant
if (typeof window !== 'undefined') {
  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500))
  idle(() => {
    importServices()
    importCaseStudies()
    importAbout()
    importBlog()
    importContact()
  })
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
