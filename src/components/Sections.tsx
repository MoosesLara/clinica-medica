import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../hooks.ts'

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  )
}

const Icon = ({ d }: { d: string }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
    <path d={d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SERVICES = [
  { t: 'Medicina preventiva', d: 'M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6zM9 12l2 2 4-4' },
  { t: 'Enfermedades crónicas', d: 'M3 12h4l2-6 4 12 2-6h6' },
  { t: 'Telemedicina', d: 'M3 7h13v10H3zM16 10l5-3v10l-5-3' },
  { t: 'Urgencias menores', d: 'M12 5v14M5 12h14M4 4h16v16H4z' },
  { t: 'Laboratorios y estudios', d: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3' },
  { t: 'Salud infantil y familiar', d: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.6-6 8-6s8 2 8 6' },
]

export function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="wrap">
        <Reveal className="center">
          <p className="eyebrow">Nuestros servicios</p>
          <h2>Para el cuidado de tu salud</h2>
        </Reveal>
        <ul className="services__grid">
          {SERVICES.map((s, i) => (
            <li key={s.t}>
              <Reveal delay={i * 70}>
                <a className="scard" href="#contacto">
                  <span className="scard__icon"><Icon d={s.d} /></span>
                  <span className="scard__t">{s.t}</span>
                  <span className="scard__go" aria-hidden="true">→</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="doctor" className="about">
      <div className="blob" aria-hidden="true" />
      <div className="wrap about__grid">
        <Reveal>
          <p className="eyebrow">Sobre el doctor</p>
          <h2>Un médico de familia al que le importa escucharte</h2>
          <p className="about__text">
            Creo que la buena medicina empieza escuchando: tu historia, tus dudas y tu ritmo de vida importan tanto
            como un examen. Acompaño a cada familia con prevención, seguimiento y trato cercano.
          </p>
          <blockquote>“Tratar a la persona completa, no solo el síntoma.”</blockquote>
          <ul className="about__facts">
            <li><strong>15+</strong><span>años de ejercicio</span></li>
            <li><strong>40 min</strong><span>por consulta</span></li>
            <li><strong>1 médico</strong><span>que conoce tu historia</span></li>
          </ul>
        </Reveal>
        <Reveal delay={120} className="about__photo">
          <img
            src="/images/consulta.webp"
            width="1000"
            height="563"
            loading="lazy"
            alt="El doctor explica con calma el diagnóstico a una madre y su hijo durante la consulta"
          />
        </Reveal>
      </div>
    </section>
  )
}

const STEPS = [
  { n: '01', t: 'Nos escribes', p: 'Por el formulario o WhatsApp. Te confirmamos horario en menos de 24 horas.' },
  { n: '02', t: 'Conversamos', p: 'Revisamos tu historia, tus síntomas y lo que te preocupa, sin prisas.' },
  { n: '03', t: 'Plan claro', p: 'Sales con indicaciones por escrito, y con un siguiente paso definido.' },
  { n: '04', t: 'Seguimiento', p: 'Control presencial o por videollamada, según lo que necesites.' },
]

export function Consultation() {
  return (
    <section id="consulta" className="section consult">
      <div className="wrap">
        <Reveal className="center">
          <p className="eyebrow">Tu primera consulta</p>
          <h2>Así de simple, así de claro</h2>
        </Reveal>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 90}>
                <span className="steps__n">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Team() {
  return (
    <section className="team" aria-labelledby="team-title">
      <img src="/images/equipo.webp" width="1400" height="959" loading="lazy" alt="" />
      <div className="team__shade" aria-hidden="true" />
      <div className="wrap team__inner">
        <Reveal>
          <p className="eyebrow eyebrow--light">Equipo de apoyo</p>
          <h2 id="team-title">Un equipo completo detrás de tu consulta</h2>
          <p>Enfermería, laboratorio aliado y coordinación de citas trabajan juntos para que tu atención sea ágil.</p>
          <a className="btn btn--coral" href="#contacto">Agendar cita</a>
        </Reveal>
      </div>
    </section>
  )
}

const QUOTES = [
  { q: 'Por primera vez siento que un médico me escucha de verdad.', a: 'Paciente · Zona 10' },
  { q: 'Controló mi presión con un plan claro y sin complicaciones.', a: 'Paciente · Mixco' },
  { q: 'La videoconsulta me ahorró horas de tráfico. Excelente trato.', a: 'Paciente · Zona 15' },
]

export function Testimonials() {
  return (
    <section className="section" aria-labelledby="t-title">
      <div className="wrap">
        <Reveal className="center">
          <p className="eyebrow">Lo que dicen los pacientes</p>
          <h2 id="t-title">Personas reales. Historias reales.</h2>
        </Reveal>
        <ul className="quotes">
          {QUOTES.map((x, i) => (
            <li key={x.a}>
              <Reveal delay={i * 90} className="quote">
                <p>“{x.q}”</p>
                <footer>{x.a}</footer>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="note">Testimonios de ejemplo: sustituir por reseñas reales con consentimiento escrito.</p>
      </div>
    </section>
  )
}

const FAQ = [
  { q: '¿Cómo agendo mi primera cita?', a: 'Escríbenos por el formulario o por WhatsApp y te confirmamos horario en menos de 24 horas.' },
  { q: '¿Qué debo llevar a la consulta?', a: 'Tu DPI, resultados de exámenes recientes y la lista de medicamentos que tomas.' },
  { q: '¿La telemedicina reemplaza la consulta presencial?', a: 'Sirve para seguimientos y dudas puntuales. Si hace falta examen físico, te lo indicamos.' },
]

export function Resources() {
  return (
    <section id="recursos" className="section section--tint">
      <div className="wrap resources">
        <Reveal>
          <p className="eyebrow">Recursos para pacientes</p>
          <h2>Todo lo que necesitas antes de tu visita</h2>
          <ul className="downloads">
            <li><a href="#recursos">Formulario de ingreso (PDF)</a></li>
            <li><a href="#recursos">Políticas de facturación (PDF)</a></li>
          </ul>
        </Reveal>
        <div className="faq">
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="wrap contact">
        <Reveal>
          <p className="eyebrow">Contacto</p>
          <h2>Agenda tu cita</h2>
          <p>Lunes a viernes, 8:00–17:00. Ciudad de Guatemala. Para urgencias vitales llama al 128 (Bomberos Voluntarios).</p>
        </Reveal>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Nombre completo
            <input name="nombre" autoComplete="name" required />
          </label>
          <label>
            Teléfono
            <input name="telefono" type="tel" autoComplete="tel" required />
          </label>
          <label>
            Motivo de consulta
            <textarea name="motivo" rows={3} />
          </label>
          <p className="form__hint">
            No incluyas diagnósticos ni datos clínicos detallados en este formulario. Consulta nuestra{' '}
            <a href="#/privacidad">Política de privacidad</a>.
          </p>
          <label className="check">
            <input type="checkbox" required /> Acepto el tratamiento de mis datos según la política de privacidad.
          </label>
          <button className="btn btn--coral" type="submit">Solicitar cita</button>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <strong>Dr. Morales · Medicina familiar</strong>
          <p>Ciudad de Guatemala</p>
        </div>
        <nav aria-label="Legal">
          <a href="#/privacidad">Política de privacidad</a>
          <a href="#/terminos">Términos de uso</a>
        </nav>
      </div>
      <p className="wrap footer__copy">© 2026 Dr. Morales. Todos los derechos reservados.</p>
    </footer>
  )
}
