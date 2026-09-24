import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import PricingIcosahedron from '../three/PricingIcosahedron'

const tiers = [
  {
    id: 'starter',
    title: 'Starter Site',
    description:
      'A clean, mobile-first site that loads fast and looks professional.',
    features: [
      '3–5 custom-designed pages',
      'Fully mobile-responsive',
      'Contact form + WhatsApp/social integration',
      'Light scroll animations & hover interactions',
      'SEO fundamentals',
    ],
    cta: 'Start with Starter',
  },
  {
    id: 'business',
    title: 'Business Pro',
    description:
      'A dynamic site with a real backend and stronger design polish.',
    features: [
      'Custom admin dashboard',
      'Product catalog or booking system',
      'Custom layouts & typography system',
      'Smooth scroll-based animations throughout',
    ],
    cta: 'Go Business Pro',
  },
  {
    id: 'premium',
    title: 'Premium 3D Experience',
    description:
      'An interactive, animated site built for brands that need to be unforgettable.',
    features: [
      'Interactive 3D scenes & scroll-triggered storytelling',
      'Fully custom design — zero templates',
      'Cinematic transitions and motion design',
      'Built for portfolios, launches, and standout personal brands',
    ],
    cta: 'Book the Premium Tier',
    highlighted: true,
  },
]

function Pricing() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play reverse play reverse',
        },
      })

      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: i * 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-5 font-medium">
            Pricing
          </p>
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto"
          >
            <span className="text-accent">03.</span> Simple, transparent tiers
          </h2>
          <p className="mt-8 text-lg md:text-xl text-text/85 max-w-2xl mx-auto leading-relaxed">
            Pick the tier that matches where your business is today. Every
            project is custom-built — no templates, no shortcuts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch md:items-end">
          {tiers.map((tier) => {
            const isPremium = tier.highlighted
            return (
              <div
                key={tier.id}
                ref={(el) => (cardsRef.current[tier.id] = el)}
                className={`relative flex flex-col rounded-3xl border transition-transform duration-500 hover:-translate-y-1 ${
                  isPremium
                    ? 'md:-mt-8 md:mb-8 border-accent/40 bg-bg md:shadow-[0_0_0_1px_var(--color-accent),0_30px_80px_-20px_rgba(239,174,227,0.25)] scale-[1.02] z-10'
                    : 'border-text/10 bg-text/[0.02]'
                }`}
              >
                {isPremium && (
                  <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent text-bg text-xs font-semibold px-4 py-1.5 tracking-wide uppercase shadow-lg">
                      ✦ Most Popular
                    </span>
                  </div>
                )}

                {isPremium && (
                  <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden" data-lenis-prevent aria-hidden="true">
                    <Canvas
                      camera={{ position: [0, 0, 5], fov: 38 }}
                      gl={{ antialias: true, alpha: true }}
                      dpr={[1, 2]}
                      className="decorative-canvas"
                    >
                      <ambientLight intensity={0.45} />
                      <directionalLight position={[5, 8, 5]} intensity={1.2} />
                      <directionalLight
                        position={[-6, -4, -5]}
                        intensity={0.4}
                        color="#EFAEE3"
                      />
                      <Float
                        speed={2.2}
                        rotationIntensity={0.4}
                        floatIntensity={1.2}
                      >
                        <group position={[2.1, 1.1, 0]} scale={0.75}>
                          <PricingIcosahedron />
                        </group>
                      </Float>
                    </Canvas>
                  </div>
                )}

                <div
                  className={`relative z-10 flex flex-col flex-1 p-7 md:p-9 ${
                    isPremium ? '' : ''
                  }`}
                >
                  <p
                    className={`text-xs uppercase tracking-widest mb-4 font-semibold ${
                      isPremium ? 'text-accent' : 'text-text/60'
                    }`}
                  >
                    Tier {tiers.indexOf(tier) + 1}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {tier.title}
                  </h3>
                  <p className="text-text/85 leading-relaxed mb-8">
                    {tier.description}
                  </p>

                  <ul className="space-y-4 mb-10 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            isPremium
                              ? 'border-accent bg-accent/15'
                              : 'border-text/20 bg-text/[0.04]'
                          }`}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={isPremium ? '#EFAEE3' : '#F6F1EA'}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-text/90 leading-relaxed text-[15px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      isPremium
                        ? 'bg-accent text-bg hover:scale-[1.02] shadow-lg shadow-accent/20'
                        : 'border border-text/20 hover:border-accent hover:text-accent'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing
