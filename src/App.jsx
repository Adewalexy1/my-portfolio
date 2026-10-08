import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'

const SECTIONS = ['top', 'work', 'about', 'services', 'contact']

function App() {
  const [active, setActive] = useState('top')

  // Track which section is in view for the navbar.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Pointer-follow light: a soft glow behind everything, and a specular
  // highlight inside whichever glass panel the pointer is over.
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const glow = document.querySelector('.cursor-glow')
    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (glow) {
          glow.style.setProperty('--cx', `${e.clientX}px`)
          glow.style.setProperty('--cy', `${e.clientY}px`)
        }
        const panel = e.target.closest?.('.glass')
        if (panel) {
          const r = panel.getBoundingClientRect()
          panel.style.setProperty('--px', `${e.clientX - r.left}px`)
          panel.style.setProperty('--py', `${e.clientY - r.top}px`)
        }
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Refraction filter used by the hero lens (Chromium only) */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <defs>
          <filter id="liquid" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.011" numOctaves="2" seed="7" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
            <feDisplacementMap in="SourceGraphic" in2="soft" scale="46" xChannelSelector="R" yChannelSelector="B" />
          </filter>
        </defs>
      </svg>

      <div className="aurora" aria-hidden="true">
        <div className="orb orb--a" />
        <div className="orb orb--b" />
        <div className="orb orb--c" />
        <div className="gridlines" />
      </div>
      <div className="cursor-glow" aria-hidden="true" />

      <Navbar active={active} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  )
}

export default App
