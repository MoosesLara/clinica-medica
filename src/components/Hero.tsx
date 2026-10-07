import { useCountUp, useParallax } from '../hooks.ts'

const TITLE = ['Atención', 'médica', 'integral', 'y', 'compasiva.']

const STATS = [
  { n: 15, suffix: '+', label: 'años de experiencia' },
  { n: 98, suffix: '%', label: 'pacientes satisfechos' },
  { n: 3000, suffix: '+', label: 'consultas al año', format: true },
  { n: 24, suffix: ' h', label: 'respuesta en telemedicina' },
]

function Stat({ n, suffix, label, format }: (typeof STATS)[number]) {
  const { ref, value } = useCountUp(n)
  return (
    <div>
      <dt>{label}</dt>
      <dd>
        <span ref={ref}>{format ? value.toLocaleString('es-GT') : value}</span>
        {suffix}
      </dd>
    </div>
  )
}

export function Hero() {
  const photo = useParallax<HTMLImageElement>(0.1)
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__photo">
        <img
          ref={photo}
          src="/images/doctor-1100.webp"
          srcSet="/images/doctor-640.webp 640w, /images/doctor-1100.webp 1100w, /images/doctor-1920.webp 1920w"
          sizes="100vw"
          width="1920"
          height="1080"
          alt="Doctor de medicina familiar sonriendo con los brazos cruzados en su consultorio"
          fetchPriority="high"
        />
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title">
            {TITLE.map((w, i) => (
              <span className="word" key={w} style={{ '--i': i } as React.CSSProperties}>
                <span className={w === 'integral' ? 'accent' : undefined}>{w}</span>
              </span>
            ))}
          </h1>
          <p className="hero__lead">
            Un médico que te conoce por tu nombre: prevención, seguimiento de enfermedades crónicas y consultas por
            videollamada, con tiempo para escucharte.
          </p>
          <div className="hero__actions">
            <a className="btn btn--coral" href="#contacto">
              Agendar cita
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn btn--ghost" href="#consulta">
              <span className="play" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor" /></svg>
              </span>
              Cómo es tu primera consulta
            </a>
          </div>
        </div>

        <div className="pill" role="group" aria-label="Familias en seguimiento">
          <span className="pill__faces" aria-hidden="true">
            <img src="/images/avatar-1.webp" alt="" width="40" height="40" />
            <img src="/images/avatar-2.webp" alt="" width="40" height="40" />
            <i>+</i>
          </span>
          <span>
            <strong>1,500+</strong>
            <small>familias en seguimiento</small>
          </span>
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="11" fill="var(--blue)" />
            <path d="m7 12.5 3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="wrap">
        <dl className="stats">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </dl>
      </div>
    </section>
  )
}
