// Lazy loaders for each page. Kept in their own file so the current page's code can be
// loaded BEFORE React attaches to the pre-built HTML (otherwise hydration mismatches).
export const importServices = () => import('./pages/Services.jsx')
export const importCaseStudies = () => import('./pages/CaseStudies.jsx')
export const importBlog = () => import('./pages/Blog.jsx')
export const importBlogPost = () => import('./pages/BlogPost.jsx')
export const importAbout = () => import('./pages/About.jsx')
export const importContact = () => import('./pages/Contact.jsx')
export const importNotFound = () => import('./pages/NotFound.jsx')

export function preloadFor(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  if (clean === '/') return Promise.resolve()
  if (clean === '/services') return importServices()
  if (clean === '/case-studies') return importCaseStudies()
  if (clean === '/about') return importAbout()
  if (clean === '/blog') return importBlog()
  if (clean.startsWith('/blog/')) return importBlogPost()
  if (clean === '/contact') return importContact()
  if (clean === '/booking' || clean.startsWith('/booking/')) return Promise.resolve()
  return importNotFound()
}
