import Lazy3D from '../components/Lazy3D'

const loadContactScene = () => import('../three/ContactScene')

const EMAIL = 'adewalexy6@gmail.com'
// Add your number in international format without "+" or spaces (e.g. '2348012345678').
// The WhatsApp button only appears once this is filled in.
const WHATSAPP = ''

function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingBottom: 40 }}>
      <div className="wrap">
        <div className="glass contact">
          <Lazy3D loader={loadContactScene} className="contact__canvas" />
          <div className="contact__body">
            <h2 className="h2">Have a project in mind?</h2>
            <p className="lede">
              Tell me about your business and what you need. I'll reply by email with the next steps.
            </p>
            <div className="contact__cta">
              <a className="btn btn--solid" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              {WHATSAPP && (
                <a className="btn btn--glass" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              )}
              <a className="btn btn--glass" href="/Adewalexy_Portfolio.pdf" target="_blank" rel="noopener noreferrer">
                Download portfolio PDF
              </a>
            </div>
            <div className="contact__links">
              <a href="https://www.instagram.com/adewalexy3" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/abdulrahmon-abdullahi-989a952a8"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="wrap">
          <p>© {new Date().getFullYear()} Adewalexy</p>
          <p>Brand and web design · Available for freelance and remote projects worldwide</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact
