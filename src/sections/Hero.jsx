import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import HeroBackground3D from '../three/HeroBackground3D'

function Hero() {
  const nameRef = useRef(null)
  const tagRef = useRef(null)
  const descRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(nameRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
    })
      .from(
        tagRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 1,
        },
        '-=0.8'
      )
      .from(
        descRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 1,
        },
        '-=0.7'
      )
  }, [])

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        data-lenis-prevent
        aria-hidden="true"
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          className="decorative-canvas h-full w-full"
        >
          <ambientLight intensity={0.55} />
          <directionalLight position={[6, 8, 5]} intensity={1.1} />
          <directionalLight
            position={[-8, -5, -6]}
            intensity={0.5}
            color="#EFAEE3"
          />
          <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.9}>
            <HeroBackground3D />
          </Float>
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-transparent to-bg pointer-events-none" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p
          ref={tagRef}
          className="text-accent text-sm uppercase tracking-[0.3em] mb-6 font-medium"
        >
          Welcome to my portfolio
        </p>
        <h1
          ref={nameRef}
          className="text-5xl sm:text-7xl md:text-8xl font-bold leading-none mb-10 tracking-tight"
        >
          ADEWALEXY
        </h1>
        <p className="text-accent text-xl md:text-2xl font-semibold mb-12 block">
          Brand &amp; Web Designer
        </p>
        <p
          ref={descRef}
          className="text-lg md:text-xl text-text font-normal max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          I help small businesses and startups build clean, modern brands and
          websites that attract customers and look professional online. Scroll
          to explore my work.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-bg font-semibold rounded-full hover:scale-105 transition-transform duration-300"
          >
            View Work
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-text/20 rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
          >
            About Me
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-text/40 text-xs uppercase tracking-widest">
        ↓ Scroll
      </div>
    </section>
  )
}

export default Hero
