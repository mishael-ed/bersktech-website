import { Globe, ShoppingCart, ArrowUpRight, CheckCircle2, ExternalLink, Truck, Wallet, MessageCircle } from 'lucide-react'
import { NavLink } from 'react-router-dom'

// NOTE: `featured` is a real project. Add more entries here as projects complete.
const featured = {
  name: 'Galuxe',
  url: 'https://buygaluxe.com',
  tag: 'E-commerce · Featured',
  title: 'Galuxe: a consumer-tech store built for Nigerian shoppers',
  summary:
    'Galuxe is a Lagos-based online retailer selling smartwatches, wireless mics, power banks, phones and accessories under the tagline "Technology at its peak." We designed and built the full storefront at buygaluxe.com.',
  challenge:
    'Shoppers in Nigeria want to see the product, trust the seller and pay on their terms. The store needed to feel credible, sell fast on mobile and remove the fear of paying before receiving.',
  solution:
    'A clean, product-focused storefront with promotional banners, clear discounts, ratings and reviews, customer video testimonials and a simple path from browsing to buying, backed by nationwide pay-on-delivery and order tracking.',
  features: [
    { icon: <ShoppingCart size={18} />, text: 'Product catalogue with discounts, star ratings and free-gift offers' },
    { icon: <Wallet size={18} />, text: 'Pay on delivery nationwide: delivery fee at checkout, balance on arrival' },
    { icon: <Truck size={18} />, text: 'Same-day Lagos delivery, nationwide delivery and order tracking' },
    { icon: <MessageCircle size={18} />, text: 'WhatsApp chat link and FAQ for quick buyer questions' },
    { icon: <Globe size={18} />, text: 'Rotating promo banners, video testimonials and a mobile-friendly menu' },
    { icon: <CheckCircle2 size={18} />, text: 'Clear delivery, returns, warranty and 7-day replacement policy pages' },
  ],
}

export default function CaseStudies() {
  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <div className="section-eyebrow">Case Studies</div>
          <h1 className="section-title">
            Ideas We've Turned Into<br />
            <span className="gradient-text">Working Technology</span>
          </h1>
          <p className="section-body">
            Real work and the kinds of projects we build for businesses and individuals, from first idea to launch.
          </p>
        </div>
      </div>

      <section className="section section-open">
        <div className="container">
          <div className="glass-card cs-featured">
            <div className="cs-featured-main">
              <span className="cs-tag">{featured.tag}</span>
              <h2 className="cs-featured-title">{featured.title}</h2>
              <p className="service-desc">{featured.summary}</p>
              <div className="cs-label" style={{ marginTop: 20 }}>The challenge</div>
              <p className="service-desc">{featured.challenge}</p>
              <div className="cs-label" style={{ marginTop: 16 }}>What we built</div>
              <p className="service-desc">{featured.solution}</p>
              <a href={featured.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg cs-visit">
                Visit buygaluxe.com <ExternalLink size={16} />
              </a>
            </div>
            <ul className="includes-list cs-featured-list">
              {featured.features.map((f) => (
                <li key={f.text}>
                  <span className="includes-icon">{f.icon}</span>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <div className="cta-glow" aria-hidden="true" />
        <div className="container cta-inner">
          <div className="section-eyebrow">Your Project Next</div>
          <h2 className="cta-title">
            Got an idea you want<br />to bring to life?
          </h2>
          <p className="cta-sub">
            Business or individual, big or small. Tell us what you have in mind.
          </p>
          <NavLink to="/contact" className="btn btn-primary btn-xl">
            Start Your Project <ArrowUpRight size={18} />
          </NavLink>
        </div>
      </div>
    </div>
  )
}
