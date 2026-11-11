import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Short About snippet for the home page. The full story lives at /about.
export default function AboutTeaser() {
  return (
    <section className="section section-open about-teaser-section" id="about-us">
      <div className="container about-teaser">
        <div className="about-teaser-text">
          <div className="section-eyebrow">About Bersk Technologies</div>
          <h2 className="section-title">
            We build technology that <span className="gradient-text">moves businesses forward.</span>
          </h2>
          <p className="about-teaser-copy">
            At Bersk Technologies, we believe great software starts with understanding people,
            businesses, and the problems worth solving. Based in Lagos, Nigeria, we are a team of
            exceptional developers, engineers, and creative problem-solvers building technology that
            helps businesses operate smarter, move faster, and achieve more.
          </p>
          <NavLink to="/about" className="btn btn-primary btn-lg">
            More about us <ArrowRight size={16} />
          </NavLink>
        </div>

        <figure className="about-teaser-media">
          <img
            src="/about-team-1307.webp"
            srcSet="/about-team-800.webp 800w, /about-team-1307.webp 1307w"
            sizes="(max-width: 900px) 92vw, 540px"
            width="1307" height="735"
            alt="The Bersk Technologies team working together at their desks"
            loading="lazy" decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
