const EMAIL = 'adewalexy6@gmail.com'

const TIERS = [
  {
    id: 'brand',
    title: 'Brand identity',
    description: 'A logo and brand system that makes your business look established from day one.',
    features: [
      'Logo design with usable file formats',
      'Colour palette and typography',
      'Packaging and stationery mockups',
      'Social media templates',
    ],
  },
  {
    id: 'starter',
    title: 'Starter site',
    description: 'A clean, mobile-first website that loads fast and looks professional.',
    features: [
      '3–5 custom-designed pages',
      'Fully mobile-responsive',
      'Contact form and WhatsApp or social links',
      'SEO fundamentals',
    ],
  },
  {
    id: 'business',
    title: 'Business site',
    description: 'A dynamic site with a real backend that you manage yourself.',
    features: [
      'Custom admin dashboard',
      'Product catalogue or listings',
      'Inquiry inbox',
      'Custom layout and typography system',
    ],
  },
  {
    id: 'premium',
    title: '3D experience site',
    description: 'An interactive, animated site for brands that need to stand out.',
    features: [
      'Interactive 3D scenes and motion',
      'Fully custom design, no templates',
      'Built for portfolios, launches and personal brands',
    ],
    flagship: true,
  },
]

const quoteHref = (title) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Quote request: ${title}`)}`

function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="section__head">
          <h2 className="h2">What I can build for you</h2>
          <p className="lede">
            Every project is custom. Tell me what you need and I'll send a quote based on the scope, with no
            template pricing.
          </p>
        </div>
        <div className="grid grid--services">
          {TIERS.map((t) => (
            <div key={t.id} className={`glass tier ${t.flagship ? 'tier--flag' : ''}`}>
              <h3>{t.title}</h3>
              <p className="tier__desc">{t.description}</p>
              <ul>
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href={quoteHref(t.title)} className={`btn ${t.flagship ? 'btn--solid' : 'btn--glass'}`}>
                Request a quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
