import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { POSTS, postPath, readMinutes, formatDate } from '../blog/posts.js'

export default function Blog() {
  return (
    <div className="blog-page">
      <div className="page-header">
        <div className="container">
          <div className="section-eyebrow">Blog</div>
          <h1 className="section-title">
            Guides for people <span className="gradient-text">building with software</span>
          </h1>
          <p className="section-body">
            Plain-words advice from our Lagos team on choosing a developer, budgeting for an app,
            and deciding what to build first.
          </p>
        </div>
      </div>

      <section className="section section-open">
        <div className="container">
          <div className="blog-grid">
            {POSTS.map((post) => (
              <article key={post.slug} className="glass-card blog-card">
                <div className="blog-card-cat">{post.category}</div>
                <h2 className="blog-card-title">
                  <NavLink to={postPath(post)}>{post.title}</NavLink>
                </h2>
                <p className="blog-card-desc">{post.description}</p>
                <div className="blog-card-foot">
                  <span>{formatDate(post.date)} · {readMinutes(post)} min read</span>
                  <NavLink to={postPath(post)} className="blog-card-link" aria-label={`Read: ${post.title}`}>
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
