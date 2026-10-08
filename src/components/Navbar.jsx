import { useState } from 'react'

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ active = 'top' }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="nav" aria-label="Main">
      <div className="glass glass--bar nav__bar">
        <a href="#top" className="nav__logo" onClick={close}>
          <i aria-hidden="true" />
          adewalexy
        </a>
        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? 'is-active' : ''}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav__right">
          <a href="#contact" className="btn btn--solid btn--sm nav__cta">
            Get a quote
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-sheet"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </div>
      <div id="nav-sheet" className={`glass nav__sheet ${open ? 'is-open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'is-active' : ''} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={close} style={{ color: 'var(--orchid)' }}>
          Get a quote
        </a>
      </div>
    </nav>
  )
}

export default Navbar
