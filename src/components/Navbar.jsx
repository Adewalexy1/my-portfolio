import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const NAV_LINKS = [
  { id: 'top', label: 'Home', href: '#top' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Work', href: '#projects' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

function Navbar({ activeSection = 'top' }) {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md bg-bg/70 border-b border-accent/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="nav-link text-xl font-bold tracking-tight"
          data-section="top"
        >
          <span className="text-accent">/</span>Adewalexy
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.filter((l) => l.id !== 'top').map((link) => {
            const isActive = activeSection === link.id
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  data-section={link.id}
                  className={`nav-link hover:text-accent transition-colors duration-300 ${
                    isActive ? 'is-active' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
        <a
          href="#contact"
          className="px-4 py-2 text-sm font-semibold bg-accent text-bg rounded-full hover:scale-105 transition-transform duration-300"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  )
}

export default Navbar
