import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './App.css'
import Site from './Site.jsx'
import { preloadFor } from './route-loaders.js'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  </StrictMode>
)

// Pages are pre-built with their content already in the HTML: attach to it.
// (The /booking pages and the dev server start empty and render normally.)
if (root.hasChildNodes()) {
  // load this page's code first so React can attach to the existing HTML cleanly
  preloadFor(window.location.pathname)
    .catch(() => {})
    .then(() => hydrateRoot(root, app))
} else {
  createRoot(root).render(app)
}
