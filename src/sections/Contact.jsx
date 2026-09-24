import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Contact() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const emailRef = useRef(null)

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
          toggleActions: 'play none none none',
        },
      })

      gsap.from(emailRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent text-sm uppercase tracking-[0.3em] mb-6 font-medium">
          <span ref={titleRef}>Get in touch</span>
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
          Have an idea?
          <br />
          <span className="text-accent italic">Let's build it.</span>
        </h2>
        <a
          ref={emailRef}
          href="mailto:adewalexy6@gmail.com"
          className="inline-block text-2xl md:text-3xl font-semibold border-b-2 border-accent pb-2 hover:text-accent transition-colors duration-300"
        >
          adewalexy6@gmail.com
        </a>
        <div className="flex items-center justify-center gap-8 mt-16 text-sm text-text/60">
          <a
            href="https://www.instagram.com/adewalexy3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/abdulrahmon-abdullahi-989a952a8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <footer className="max-w-7xl mx-auto mt-32 pt-8 border-t border-text/10 flex flex-col sm:flex-row items-center justify-between text-xs text-text/40 gap-2">
        <p>© {new Date().getFullYear()} Adewalexy. Designed with care.</p>
        <p>Brand &amp; Web Design · Available for new projects</p>
      </footer>
    </section>
  )
}

export default Contact
