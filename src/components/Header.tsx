import { useState } from 'react'
import { useScrolled } from '../hooks.ts'

const LINKS = [
  { href: '#/', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#doctor', label: 'El doctor' },
  { href: '#recursos', label: 'Recursos' },
  { href: '#contacto', label: 'Contacto' },
]

export function Logo() {
  return (
    <a className="logo" href="#/">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill="var(--coral)" />
        <path d="M16 8v16M8 16h16" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span>
        Dr. Morales
        <small>Medicina familiar</small>
      </span>
    </a>
  )
}

export function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="site-header__bar">
        <Logo />
        <nav id="menu" className="nav" data-open={open} aria-label="Principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="nav__portal" href="#portal" onClick={() => setOpen(false)}>
            Portal del paciente
          </a>
        </nav>
        <a className="btn btn--coral btn--sm header-cta" href="#contacto">
          Agendar cita
        </a>
        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
