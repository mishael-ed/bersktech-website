const HERO_ALT = 'The Bersk Technologies team working together at their desks'

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        <figure className="about-hero">
          <img src="/about-team-1307.webp"
            srcSet="/about-team-800.webp 800w, /about-team-1307.webp 1307w"
            sizes="(max-width: 1200px) 92vw, 1090px" width="1307" height="735" alt={HERO_ALT} decoding="async" fetchpriority="high" />
        </figure>
      </div>

      <section className="section section-open about-section" id="about">
        <div className="container about-grid">
          <div className="about-left">
            <div className="section-eyebrow">About Bersk Technologies</div>
            <h1 className="section-title">
              We build technology that <span className="gradient-text">moves businesses forward.</span>
            </h1>
          </div>

          <div className="about-body">
            <p className="about-lead">
              At Bersk Technologies, we believe great software starts with understanding people,
              businesses, and the problems worth solving.
            </p>
            <p>
              Based in Lagos, Nigeria, we are a team of exceptional developers, engineers, and creative
              problem-solvers building technology that helps businesses operate smarter, move faster,
              and achieve more.
            </p>
            <p>
              We bring together some of the best development talent to design, build, and deliver digital
              products and software solutions tailored to the way businesses actually work. From custom
              software and web applications to intelligent systems and digital platforms, we turn complex
              ideas into reliable, scalable solutions.
            </p>
            <p className="about-turn">But we believe building great technology takes more than writing code.</p>
            <p>
              <strong>It starts with listening.</strong> We take the time to understand your business,
              identify the challenges holding you back, and determine what needs to be built to move you
              closer to your goals. We believe in thoughtful engineering, clear communication, and building
              with purpose.
            </p>
            <p>
              Our approach is collaborative and hands-on. You work directly with the people building your
              product. No unnecessary layers, no confusing processes, and no solutions designed simply for
              the sake of complexity.
            </p>
            <p>
              From the first conversation to development, testing, deployment, and beyond, we remain
              invested in the outcome. We build with quality in mind, document what we deliver, and create
              solutions designed to grow alongside your business.
            </p>

            <div className="about-close">
              <p className="about-close-quote">
                We&rsquo;re not just here to build software. We&rsquo;re here to build what comes next.
              </p>
              <p className="about-close-tag">Bersk Technologies. Technology built around your business.</p>
            </div>

            <p className="about-signoff">
              <strong>Ed Mishael</strong>
              <span>CEO &amp; Founder</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
