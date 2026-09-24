import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play reverse play reverse',
        },
      })

      gsap.from(leftRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play reverse play reverse',
        },
      })

      gsap.from(rightRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play reverse play reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-16"
        >
          <span className="text-accent">01.</span> About
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div ref={leftRef}>
            <p className="text-lg text-text/90 leading-relaxed mb-6">
              I'm a Brand &amp; Web Designer helping small businesses and
              startups build clean, modern brands and websites that attract
              customers and look professional online. I specialise in
              minimalist logo design, brand identity systems, and
              conversion-focused website design.
            </p>
            <p className="text-lg text-text/85 leading-relaxed">
              When I'm not designing, you'll find me exploring new creative
              tools, experimenting with layout and color systems, or sketching
              brand ideas.
            </p>
          </div>
          <div ref={rightRef} className="space-y-6">
            <div>
              <p className="text-accent text-sm uppercase tracking-widest mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {['Photoshop', 'Illustrator', 'Figma', 'Canva'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm border border-text/15 rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-accent text-sm uppercase tracking-widest mb-3">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {['Logo Design', 'Brand & Packaging', 'Social Media Design', 'Web Design'].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 text-sm border border-text/15 rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
