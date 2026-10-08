import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Lazy3D from '../components/Lazy3D'

const loadHeroScene = () => import('../three/HeroScene')

function Hero() {
  const root = useRef(null)

  // One orchestrated entrance, then the page stays still.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-in', {
        y: 28,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.15,
      })
      gsap.from('.hero .lens', { scale: 0.7, opacity: 0, duration: 1.4, ease: 'power3.out', delay: 0.3 })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" ref={root} className="hero">
      <Lazy3D loader={loadHeroScene} className="hero__canvas" />
      <div className="lens" aria-hidden="true" />

      <div className="wrap hero__inner">
        <p className="chip hero__status hero-in">
          <span className="dot" aria-hidden="true" />
          Open for new projects
        </p>
        <h1 className="hero__title hero-in">Brands and websites that bring in clients.</h1>
        <p className="hero__intro hero-in">
          I'm <strong>Adewalexy</strong>, a brand and web designer. I help small businesses and startups look
          professional online, from the first logo sketch to a launched website.
        </p>
        <div className="hero__cta hero-in">
          <a href="#work" className="btn btn--solid">
            See my work
          </a>
          <a href="#contact" className="btn btn--glass">
            Get a quote
          </a>
        </div>
      </div>

      <div className="glass hero__strip hero-in">
        <div>
          <b>Brand identity</b>
          Logos, colour and type systems
        </div>
        <div>
          <b>Custom websites</b>
          With an admin panel you control
        </div>
        <div>
          <b>Remote, worldwide</b>
          Available for freelance projects
        </div>
      </div>
    </section>
  )
}

export default Hero
