import { useState } from 'react'

export const projects = [
  {
    id: 'azmojies',
    kind: 'website',
    title: 'A. Z. & Mojies Venture',
    category: 'Website design and development',
    tagline: 'Trading and advisory website with a product catalogue and admin panel.',
    image: '/assets/projects/azmojies-logo.jpg',
    fit: 'contain',
    plate: '#f8f7f1',
    badge: 'Client work',
    url: 'https://azmojiesventure.org',
    stack: ['PHP', 'MySQL', 'GSAP', 'Admin dashboard'],
    brief:
      'A trading and consultancy firm with three lines of business (merchandise, import and export, investment advisory) needed one credible website that turns visitors into quote requests.',
    approach:
      'Built the site around the three services, using a navy and gold palette taken from the client logo. Added a filterable product catalogue, a gallery with lightbox, and forms that submit without leaving the page.',
    result:
      'A live, mobile-first website where the client manages products, categories, gallery items and incoming inquiries from their own secure admin panel.',
  },
  {
    id: 'omoniyi-aj',
    kind: 'website',
    title: 'Omoniyi AJ & Associate',
    category: 'Website design and development',
    tagline: 'Real estate website with property listings, agents and branches.',
    image: '/assets/projects/omoniyi-logo.jpg',
    fit: 'contain',
    plate: '#ffffff',
    badge: 'Client work',
    stack: ['PHP', 'MySQL', 'Admin dashboard'],
    brief:
      'A real estate company with branches across Nigeria needed one place to show properties for sale and rent, introduce its agents, and turn visitors into inquiries.',
    approach:
      'Designed a clean layout in deep green and gold from the client logo. Built filterable listings, detailed property pages with image and video galleries, and a custom admin dashboard.',
    result:
      'The team can add properties, agents, branches, gallery media and testimonials themselves, and every inquiry lands in one inbox.',
  },
  {
    id: 'beanbox-cafe',
    title: 'BeanBox Café',
    category: 'Logo and branding',
    badge: 'Concept',
    tagline: 'Brand identity for an independent café.',
    image: '/assets/projects/beanbox.jpg',
    brief:
      'An independent café needed a warm, modern identity that felt handmade, not corporate, and worked on both a coffee cup and a takeout bag.',
    approach:
      'A simple cup-and-steam mark with a rounded serif wordmark, built on a cream and espresso-brown palette.',
    result:
      'A clean, flexible identity system applied across cups, packaging and signage.',
  },
  {
    id: 'fitzone',
    title: 'FitZone',
    category: 'Logo and brand identity',
    tagline: 'High-performance brand identity for a modern gym.',
    image: '/assets/projects/fitzone.jpg',
    brief:
      'A modern gym brand wanted an energetic, bold logo that could stand alone as an icon on apparel and equipment.',
    approach:
      'A dynamic "FZ" monogram in motion-inspired blue and green, paired with a strong geometric wordmark.',
    result: 'A versatile mark that reads clearly on a business card or a gym wall.',
  },
  {
    id: 'axis-performance',
    title: 'Axis Performance',
    category: 'Brand identity and environment',
    tagline: 'Brand rollout across apparel, merchandise and interior space.',
    image: '/assets/projects/axis.jpg',
    brief:
      'A performance gym brand needed a mark strong enough to carry across walls, apparel and merchandise, not just a logo on paper.',
    approach:
      'A bold, minimal arrow-mark in monochrome, designed to scale from a water bottle to a full accent wall.',
    result: 'Every touchpoint (shirt, wall and cup) reinforces the same premium, focused identity.',
  },
  {
    id: 'aura',
    title: 'Aura',
    category: 'Brand and packaging design',
    badge: 'Concept',
    tagline: 'Packaging identity for a beauty brand.',
    image: '/assets/projects/aura.jpg',
    brief:
      'A beauty brand needed packaging that felt premium and soft, for a modern, self-care-focused customer.',
    approach:
      'A soft blush palette with a minimal serif logotype, keeping every product in the line visually unified.',
    result: 'A cohesive, shelf-ready packaging suite that feels premium without feeling clinical.',
  },
  {
    id: 'nordic-film-festival',
    title: 'Nordic Film Festival',
    category: 'Print and identity design',
    badge: 'Concept',
    tagline: 'Poster and stationery for a cultural event.',
    image: '/assets/projects/nordic-film.jpg',
    brief:
      'A film festival needed a poster and identity system that felt cinematic and distinctly Nordic: moody, but inviting.',
    approach:
      'A layered mountain-and-ship illustration in a muted navy palette, carried onto business cards and stationery.',
    result: 'A story-driven poster that works as a piece of art as much as an event promotion.',
  },
  {
    id: 'verdant',
    title: 'Verdant',
    category: 'Brand and packaging design',
    badge: 'Concept',
    tagline: 'Natural skincare brand identity.',
    image: '/assets/projects/verdant.jpg',
    brief:
      'A natural skincare brand needed a minimalist identity that felt organic and trustworthy, on a bottle, a box and Instagram alike.',
    approach:
      'A single leaf mark with a serif wordmark, in sage green, cream and terracotta.',
    result: 'One consistent mark and colour language across logo, packaging, business card and social templates.',
  },
  {
    id: 'business-marketing-pack',
    title: 'Business Marketing Pack',
    category: 'Social media and marketing design',
    tagline: 'A visual system for social media graphics.',
    image: '/assets/projects/marketing-pack.jpg',
    brief:
      'Small business clients needed social media graphics that felt consistent and professional across their channels.',
    approach:
      'A reusable template system (logos, post templates and packaging mockups) sharing one grid and type system.',
    result: 'A cohesive visual system designed to improve engagement and brand recognition.',
  },
]

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false)
  const panelId = `${p.id}-details`

  return (
    <article className="glass proj">
      <div
        className={`proj__media ${p.fit === 'contain' ? 'is-plate' : ''}`}
        style={p.plate ? { background: p.plate } : undefined}
      >
        <img
          src={p.image}
          alt={`${p.title}: ${p.category}`}
          loading="lazy"
          decoding="async"
          width="1280"
          height="800"
        />
        {p.badge && <span className="chip chip--float">{p.badge}</span>}
      </div>
      <div className="proj__body">
        <p className="proj__cat">{p.category}</p>
        <h4 className="proj__title">{p.title}</h4>
        <p className="proj__tag">{p.tagline}</p>
        {p.stack && (
          <ul className="tags" aria-label="Built with">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}
        <div className="proj__actions">
          <button
            type="button"
            className="link-btn"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Hide case study' : 'Read case study'}
          </button>
          {p.url && (
            <a className="link-btn" href={p.url} target="_blank" rel="noopener noreferrer">
              Visit live site
            </a>
          )}
        </div>
        <div id={panelId} className={`more ${open ? 'is-open' : ''}`}>
          <div className="more__inner">
            <dl>
              <div>
                <dt>The brief</dt>
                <dd>{p.brief}</dd>
              </div>
              <div>
                <dt>The approach</dt>
                <dd>{p.approach}</dd>
              </div>
              <div>
                <dt>The result</dt>
                <dd>{p.result}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const sites = projects.filter((p) => p.kind === 'website')
  const brand = projects.filter((p) => p.kind !== 'website')

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="section__head">
          <h2 className="h2">Selected work</h2>
          <p className="lede">
            Websites I've built for real businesses, and brand identities from logo to packaging.
          </p>
        </div>

        <h3 className="sub-h">Websites</h3>
        <div className="grid grid--web">
          {sites.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        <h3 className="sub-h">Brand and graphic design</h3>
        <div className="grid grid--brand">
          {brand.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
