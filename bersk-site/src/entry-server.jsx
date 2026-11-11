/* eslint-disable react-refresh/only-export-components -- server-only build entry, not hot-reloaded */
import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router'
import Site from './Site.jsx'

export { headTags, PAGES, SITE, canonicalFor } from './seo.js'

// Used at build time by scripts/prerender.mjs to turn each page into real HTML.
export async function render(url) {
  const { prelude } = await prerender(
    <StaticRouter location={url}>
      <Site />
    </StaticRouter>,
  )
  return await new Response(prelude).text()
}
