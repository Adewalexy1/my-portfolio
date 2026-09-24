import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const projects = [
  {
    id: "beanbox-cafe",
    title: "BeanBox Café",
    category: "Logo & Branding",
    tagline: "Brand identity concept for an independent café brand",
    image: "/assets/projects/beanbox.jpg",
    brief:
      "A fictional independent café needed a warm, modern identity that felt handmade — not corporate — and worked equally well on a coffee cup and a takeout bag.",
    approach:
      "Designed a simple cup-and-steam mark paired with a rounded serif wordmark, built around a warm cream-and-espresso-brown palette for a cozy, artisanal feel.",
    result:
      "A clean, flexible identity system applied consistently across cups, packaging, and signage — instantly recognisable at a glance.",
  },
  {
    id: "fitzone",
    title: "FitZone",
    category: "Logo & Brand Identity",
    tagline: "High-performance brand identity for a modern gym",
    image: "/assets/projects/fitzone.jpg",
    brief:
      "A modern gym brand wanted a logo that felt energetic and bold — something that could stand alone as an icon on apparel and equipment.",
    approach:
      "Built a dynamic 'FZ' monogram in motion-inspired blue and green, paired with a strong geometric wordmark for maximum impact at any size.",
    result:
      "A punchy, versatile mark that reads clearly on a business card or a gym wall — reinforcing raw strength and energy.",
  },
  {
    id: "axis-performance",
    title: "Axis Performance",
    category: "Brand Identity & Environment",
    tagline: "Full brand rollout across apparel, merchandise, and interior space",
    image: "/assets/projects/axis.jpg",
    brief:
      "A performance gym brand needed a mark strong enough to carry across a full space — walls, apparel, and merchandise — not just a logo on paper.",
    approach:
      "Created a bold, minimal arrow-mark in monochrome, designed to scale from a water bottle to a full accent wall without losing impact.",
    result:
      "A cohesive brand environment where every touchpoint — shirt, wall, and cup — reinforces the same premium, focused identity.",
  },
  {
    id: "aura",
    title: "Aura",
    category: "Brand & Packaging Design",
    tagline: "Packaging identity concept for a beauty brand",
    image: "/assets/projects/aura.jpg",
    brief:
      "A beauty brand concept needed packaging that felt premium and soft, appealing to a modern, self-care-focused customer.",
    approach:
      "Used a soft blush palette with a minimal serif logotype, keeping every product in the line visually unified on the shelf.",
    result:
      "A cohesive, shelf-ready packaging suite that reads as premium without feeling cold or overly clinical.",
  },
  {
    id: "nordic-film-festival",
    title: "Nordic Film Festival",
    category: "Print & Identity Design",
    tagline: "Poster and stationery concept for a cultural event",
    image: "/assets/projects/nordic-film.jpg",
    brief:
      "A film festival concept needed a poster and identity system that felt cinematic and distinctly Nordic — moody, but inviting.",
    approach:
      "Illustrated a layered mountain-and-ship scene in a muted navy palette, carried through onto business cards and stationery.",
    result:
      "A striking, story-driven poster design that works as a standalone piece of art as much as an event promotion.",
  },
  {
    id: "business-marketing-pack",
    title: "Business Marketing Pack",
    category: "Social Media & Marketing Design",
    tagline: "A cohesive visual system for social media graphics",
    image: "/assets/projects/marketing-pack.jpg",
    brief:
      "Several small business clients needed social media graphics that felt consistent and professional across their channels.",
    approach:
      "Built a reusable template system — logos, post templates, and packaging mockups — sharing a consistent grid and type system.",
    result:
      "A cohesive visual system for social media graphics designed to improve engagement and brand recognition.",
  },
  {
    id: "verdant",
    title: "Verdant",
    category: "Brand & Packaging Design",
    tagline: "Natural skincare brand identity concept",
    image: "/assets/projects/verdant.jpg",
    brief:
      "A fictional natural skincare brand needed a minimalist identity that felt organic and trustworthy — something that could live on a bottle, a box, and Instagram equally well.",
    approach:
      "Designed a single leaf mark paired with a serif wordmark, built around a sage green, cream, and terracotta palette for a calm, editorial feel.",
    result:
      "A cohesive brand system — logo, packaging, business card, and social templates — all sharing one consistent mark and color language.",
  },
]

function Projects() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

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

      gsap.utils.toArray('.project-item').forEach((item, i) => {
        gsap.from(item, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: i * 0.15,
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-16"
        >
          <span className="text-accent">02.</span> Selected Work
        </h2>
        <div className="space-y-24">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="project-item group border-b border-text/10 pb-20 last:border-b-0"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start mb-10">
                <div className="md:col-span-2 text-accent text-sm font-mono pt-2">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="md:col-span-7">
                  <p className="text-accent text-sm uppercase tracking-widest mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-lg md:text-xl text-text/80 leading-relaxed max-w-2xl">
                    {project.tagline}
                  </p>
                </div>
                <div className="md:col-span-3 text-sm text-text/60 space-y-2 pt-2 md:text-right">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-300"
                  >
                    View Case Study →
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="md:col-span-2 hidden md:block" />
                <div className="md:col-span-10 space-y-8">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-text/10 bg-text/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 md:gap-10">
                    <div className="p-6 rounded-xl border border-text/10 bg-text/[0.02]">
                      <p className="text-accent text-xs uppercase tracking-widest mb-3 font-semibold">
                        Brief
                      </p>
                      <p className="text-sm leading-relaxed text-text/80">
                        {project.brief}
                      </p>
                    </div>
                    <div className="p-6 rounded-xl border border-text/10 bg-text/[0.02]">
                      <p className="text-accent text-xs uppercase tracking-widest mb-3 font-semibold">
                        Approach
                      </p>
                      <p className="text-sm leading-relaxed text-text/80">
                        {project.approach}
                      </p>
                    </div>
                    <div className="p-6 rounded-xl border border-accent/20 bg-accent/5">
                      <p className="text-accent text-xs uppercase tracking-widest mb-3 font-semibold">
                        Result
                      </p>
                      <p className="text-sm leading-relaxed text-text/85">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
