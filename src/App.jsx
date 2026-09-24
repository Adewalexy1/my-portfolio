import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'
import Scene from './three/Scene'

gsap.registerPlugin(ScrollTrigger)

const NAV_HEIGHT = 76
const SECTION_ORDER = ['top', 'about', 'projects', 'services', 'contact']

function App() {
  const lenisRef = useRef(null)
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const tickerCallback = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCallback)

    gsap.ticker.lagSmoothing(0)

    // Section positions (images, fonts, the 3D canvas) can shift after
    // first paint, which throws off ScrollTrigger's start/end math and is
    // the main cause of fade-ins inconsistently not firing. Refresh once
    // everything has actually loaded, and once more shortly after as a
    // safety net for late-loading assets.
    const handleLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', handleLoad)
    const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 500)

    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const href = link.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, {
        offset: -NAV_HEIGHT,
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    }

    document.addEventListener('click', handleAnchorClick, false)

    const sectionStarts = SECTION_ORDER.map((id) => {
      const el = document.getElementById(id)
      return el
        ? { id, start: () => ScrollTrigger.create({ trigger: el }).start }
        : null
    }).filter(Boolean)

    const updateActive = () => {
      const scrollY = window.scrollY + NAV_HEIGHT + 40
      let current = SECTION_ORDER[0]
      for (const { id } of sectionStarts) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= scrollY) current = id
      }
      setActiveSection(current)
    }

    const onScroll = () => updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    updateActive()

    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: () => updateActive(),
    })

    return () => {
      document.removeEventListener('click', handleAnchorClick, false)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('load', handleLoad)
      clearTimeout(refreshTimeout)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
      gsap.ticker.remove(tickerCallback)
    }
  }, [])

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Pricing />
        <section
          id="scene-showcase"
          className="relative h-screen w-full"
          aria-label="Decorative 3D scene"
        >
          <div
            className="pointer-events-none absolute inset-0"
            data-lenis-prevent
            aria-hidden="true"
          >
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              gl={{ antialias: true, alpha: true }}
              dpr={[1, 2]}
              className="decorative-canvas h-full w-full"
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Scene />
              </Float>
            </Canvas>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  )
}

export default App
