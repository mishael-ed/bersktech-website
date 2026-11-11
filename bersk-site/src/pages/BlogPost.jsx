import { Fragment } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { POSTS, findPost, postPath, readMinutes, formatDate } from '../blog/posts.js'
import NotFound from './NotFound.jsx'

// turns **bold** and [text](link) in the post text into real bold text and links
function inline(text) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/)
    if (bold) return <strong key={i}>{bold[1]}</strong>
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const [, label, href] = link
      return href.startsWith('/')
        ? <NavLink key={i} to={href}>{label}</NavLink>
        : <a key={i} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

function Block({ b }) {
  if (b.t === 'h2') return <h2>{b.c}</h2>
  if (b.t === 'p') return <p>{inline(b.c)}</p>
  if (b.t === 'ul') return <ul>{b.c.map((li, i) => <li key={i}>{inline(li)}</li>)}</ul>
  if (b.t === 'ol') return <ol>{b.c.map((li, i) => <li key={i}>{inline(li)}</li>)}</ol>
  if (b.t === 'note') return <p className="blog-note">{inline(b.c)}</p>
  return null
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = findPost(slug)
  if (!post) return <NotFound />

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <div className="blog-page">
      <article>
        <header className="blog-hero">
          <div className="container blog-narrow">
            <nav className="blog-crumbs" aria-label="Breadcrumb">
              <NavLink to="/">Home</NavLink>
              <ChevronRight size={13} />
              <NavLink to="/blog">Blog</NavLink>
            </nav>
            <div className="section-eyebrow">{post.category}</div>
            <h1 className="blog-h1">{post.title}</h1>
            <p className="blog-meta">
              By Bersk Technologies · {formatDate(post.date)} · {readMinutes(post)} min read
            </p>
          </div>
        </header>

        <div className="container blog-narrow">
          <div className="blog-body">
            {post.blocks.map((b, i) => <Block key={i} b={b} />)}
          </div>

          <div className="blog-cta">
            <h2>Have an idea you want to build?</h2>
            <p>Tell us what you have in mind. We will listen, agree what to build first, and give you a clear scope, timeline and price.</p>
            <NavLink to="/contact" className="btn btn-primary btn-lg">
              Book a Strategy Call <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </article>

      <section className="section section-open blog-related">
        <div className="container">
          <div className="section-eyebrow">Keep reading</div>
          <div className="blog-grid blog-grid-2">
            {related.map((p) => (
              <article key={p.slug} className="glass-card blog-card">
                <div className="blog-card-cat">{p.category}</div>
                <h3 className="blog-card-title">
                  <NavLink to={postPath(p)}>{p.title}</NavLink>
                </h3>
                <p className="blog-card-desc">{p.description}</p>
                <div className="blog-card-foot">
                  <span>{readMinutes(p)} min read</span>
                  <NavLink to={postPath(p)} className="blog-card-link" aria-label={`Read: ${p.title}`}>
                    Read guide <ArrowRight size={15} />
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
