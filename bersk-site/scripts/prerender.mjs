// Runs after the build. Turns each page into a real HTML file with its content and
// search/share tags already in it, so search engines and link previews see everything
// without running JavaScript. Also writes sitemap.xml and the 404 page.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

// the plain, empty app shell is still needed for client-only pages (/booking)
fs.writeFileSync(path.join(dist, 'shell.html'), template)

const server = await import(pathToFileURL(path.resolve('dist-server/entry-server.js')).href)
const { render, headTags, canonicalFor, ALL_ROUTES, lastmodFor, POSTS } = server

function build(url, { notFound = false } = {}) {
  return render(url).then((body) => {
    let html = template
      .replace(/<title>[\s\S]*?<\/title>\s*/, '')
      .replace(/<meta name="description"[^>]*>\s*/, '')
    html = html.replace('</head>', `    ${headTags(notFound ? '/__404__' : url)}\n  </head>`)
    if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found in index.html')
    return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  })
}

const routes = ALL_ROUTES
for (const route of routes) {
  const html = await build(route)
  const out = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
  console.log('prerendered', route, `(${(html.length / 1024).toFixed(1)} KB)`)
}

// 404 page (served by Vercel for any unknown address)
fs.writeFileSync(path.join(dist, '404.html'), await build('/__404__', { notFound: true }))
console.log('prerendered 404')

// sitemap
const urls = routes
  .map((r) => `  <url>\n    <loc>${canonicalFor(r)}</loc>\n    <lastmod>${lastmodFor(r)}</lastmod>\n  </url>`)
  .join('\n')
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log('wrote sitemap.xml with', routes.length, 'pages')

// add the guides to llms.txt so AI assistants can find them
const llmsPath = path.join(dist, 'llms.txt')
if (fs.existsSync(llmsPath)) {
  const guides = POSTS.map((p) => `- [${p.title}](${canonicalFor('/blog/' + p.slug)}): ${p.description}`).join('\n')
  fs.appendFileSync(llmsPath, `\n## Guides\n- [Blog](${canonicalFor('/blog')}): all guides\n${guides}\n`)
}

fs.rmSync(path.resolve('dist-server'), { recursive: true, force: true })
