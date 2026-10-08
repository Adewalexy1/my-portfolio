const SKILLS = [
  {
    title: 'Brand identity',
    text: 'Logos, colour and type systems, packaging and social media templates that stay consistent everywhere.',
  },
  {
    title: 'Websites',
    text: 'Custom-designed, mobile-first sites with contact forms and an admin panel, so you can update content yourself.',
  },
  {
    title: 'Graphic design',
    text: 'Posters, stationery, illustration and social graphics that carry the brand beyond the website.',
  },
]

const TOOLS = ['Photoshop', 'Illustrator', 'Figma', 'Canva', 'React', 'Tailwind CSS', 'PHP & MySQL', 'GSAP', 'Three.js']

function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about">
        <div>
          <div className="section__head" style={{ marginBottom: 28 }}>
            <h2 className="h2">One designer for the logo and the website.</h2>
          </div>
          <div className="about__copy">
            <p>
              I started with logos and brand identities, and now build the websites that carry them. Working with
              one person from the first sketch to launch means your brand and your site actually look like they
              belong together.
            </p>
            <p>
              I specialise in minimalist logo design, brand identity systems, and conversion-focused websites. When
              I'm not designing, I'm exploring new creative tools, experimenting with layout and colour systems, or
              sketching brand ideas.
            </p>
          </div>
          <div className="tools">
            <h3>Tools I work with</h3>
            <ul className="tags" style={{ marginTop: 0 }}>
              {TOOLS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="skills">
          <figure className="glass mood">
            <img
              src="/assets/about-mood.jpg"
              alt="Moody portrait of a person in a cap and headphones standing in the rain"
              loading="lazy"
              decoding="async"
              width="1200"
              height="800"
            />
            <figcaption>The dark, cinematic mood I like to work in. AI-generated image.</figcaption>
          </figure>
          {SKILLS.map((s) => (
            <div key={s.title} className="glass skill">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
