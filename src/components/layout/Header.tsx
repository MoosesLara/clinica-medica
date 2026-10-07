import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w20/es.png' },
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/w20/us.png' },
  { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { t, i18n } = useTranslation();
  
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const currentLang = LANGUAGES.find(l => i18n.language?.startsWith(l.code)) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy Logic
      const sections = ['hero', 'sedes', 'especialidades', 'trayectoria', 'testimonios', 'contacto'];
      const scrollPosition = window.scrollY + 200; // offset
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <aside className="bg-brand-navy text-slate-300 text-xs py-2 px-6 border-b border-white/10 hidden md:block" data-purpose="utility-header">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 lg:gap-6">
            <span className="hidden lg:flex items-center gap-2 truncate">
              <i className="fa-solid fa-hospital text-brand-sky"></i>
              <span className="truncate">Atención Hospitalaria Quirúrgica Centralizada</span>
            </span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="flex items-center gap-2">
              <i className="fa-regular fa-clock text-brand-emerald"></i>
              <span>{t('header.emergency')}</span>
            </span>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <a className="hover:text-white flex items-center gap-1.5 transition" href="tel:+34910000000">
              <i className="fa-solid fa-phone-volume text-brand-sky"></i>
              <span className="font-semibold text-slate-200 hidden sm:inline">{t('header.direct_attention')}: +34 910 882 100</span>
              <span className="font-semibold text-slate-200 sm:hidden">+34 910 882 100</span>
            </a>
            <div className="relative flex items-center pl-4 border-l border-slate-700" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-slate-600 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800 transition text-[11px] font-bold text-slate-200"
              >
                <img src={currentLang.flag} alt={currentLang.code} className="w-3.5 h-auto rounded-[2px]" />
                <span className="uppercase">{currentLang.code}</span>
                <i className={`fa-solid fa-chevron-down text-[9px] transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}></i>
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-16 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-[9999]"
                  >
                    <div className="flex flex-col py-1">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            setIsLangMenuOpen(false);
                          }}
                          className={`flex items-center justify-between px-3 py-2 transition text-[13px] w-full text-left ${currentLang.code === lang.code ? 'bg-sky-50 text-brand-sky font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-navy font-semibold'}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <img src={lang.flag} alt={lang.code} className="w-4 h-auto shadow-sm rounded-[2px]" />
                            <span>{lang.label}</span>
                          </div>
                          {currentLang.code === lang.code && (
                            <i className="fa-solid fa-check text-brand-sky text-xs"></i>
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-3 pl-3 ml-3 border-l border-slate-700">
                <a className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-sky hover:text-white transition" href="#"><i className="fa-brands fa-linkedin-in text-[10px]"></i></a>
                <a className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-sky hover:text-white transition" href="#"><i className="fa-brands fa-instagram text-[10px]"></i></a>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect border-b border-slate-200/80 shadow-soft' : 'bg-white border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a className="flex items-center gap-3.5 group" href="#">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-navy to-brand-sky flex items-center justify-center text-white shadow-md shadow-brand-sky/20 group-hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-staff-snake text-xl"></i>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-brand-navy block leading-none">Aura<span className="text-brand-sky">Surgical</span></span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mt-1">Dr. Alejandro Morales</span>
            </div>
          </a>
          
          <nav className="hidden lg:flex items-center gap-3 lg:gap-4 xl:gap-8 text-[13px] xl:text-sm font-semibold text-slate-600">
            <a className={`whitespace-nowrap transition ${activeSection === 'hero' ? 'text-brand-sky font-bold' : 'hover:text-brand-navy'}`} href="#hero" onClick={() => setActiveSection('hero')}>{t('header.nav_home')}</a>
            <a className={`whitespace-nowrap transition ${activeSection === 'sedes' ? 'text-brand-sky font-bold' : 'hover:text-brand-navy'}`} href="#sedes" onClick={() => setActiveSection('sedes')}>{t('header.nav_clinics')}</a>
            <a className={`whitespace-nowrap transition ${activeSection === 'especialidades' ? 'text-brand-sky font-bold' : 'hover:text-brand-navy'}`} href="#especialidades" onClick={() => setActiveSection('especialidades')}>{t('header.nav_specialties')}</a>
            <a className={`whitespace-nowrap transition ${activeSection === 'trayectoria' ? 'text-brand-sky font-bold' : 'hover:text-brand-navy'}`} href="#trayectoria" onClick={() => setActiveSection('trayectoria')}>{t('header.nav_team')}</a>
            <a className={`whitespace-nowrap transition ${activeSection === 'testimonios' ? 'text-brand-sky font-bold' : 'hover:text-brand-navy'}`} href="#testimonios" onClick={() => setActiveSection('testimonios')}>{t('header.nav_testimonials')}</a>
            <a className={`whitespace-nowrap transition ${activeSection === 'contacto' ? 'text-brand-sky font-bold' : 'hover:text-brand-navy'}`} href="#contacto" onClick={() => setActiveSection('contacto')}>{t('header.nav_contact')}</a>
          </nav>
          
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex flex-col items-end justify-center gap-1.5">
              <div className="hidden sm:block shrink-0">
                <Button asAnchor href="#cita" variant="primary" icon="fa-calendar-check" className="whitespace-nowrap shadow-md">
                  {t('header.btn_book')}
                </Button>
              </div>
              <div className="hidden xl:flex items-center bg-slate-100 rounded-md p-0.5 text-[10px] font-semibold text-slate-600 border border-slate-200">
                <button className="px-2 py-0.5 rounded bg-white text-brand-navy shadow-sm whitespace-nowrap">{t('header.north_tower')}</button>
                <button className="px-2 py-0.5 text-slate-500 hover:text-slate-800 transition whitespace-nowrap">{t('header.south_hospital')}</button>
              </div>
            </div>
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-brand-navy hover:bg-slate-200 transition shrink-0"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menú de navegación"
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-[9998] lg:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[9999] shadow-2xl flex flex-col lg:hidden"
            >
              <div className="p-6 flex items-center justify-between border-b border-slate-100">
                <span className="text-xl font-extrabold tracking-tight text-brand-navy">Aura<span className="text-brand-sky">Surgical</span></span>
                <button 
                  onClick={closeMenu}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-red-500 hover:bg-red-50 transition"
                  aria-label="Cerrar menú"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <nav className="flex flex-col p-6 space-y-4 text-base font-semibold text-slate-700 overflow-y-auto flex-1">
                <a className={`flex items-center gap-3 p-3 rounded-xl transition ${activeSection === 'hero' ? 'text-brand-sky bg-sky-50' : 'hover:text-brand-sky hover:bg-slate-50'}`} href="#hero" onClick={() => { setActiveSection('hero'); closeMenu(); }}>
                  <i className="fa-solid fa-house w-5 text-center"></i> {t('header.nav_home')}
                </a>
                <a className={`flex items-center gap-3 p-3 rounded-xl transition ${activeSection === 'sedes' ? 'text-brand-sky bg-sky-50' : 'hover:text-brand-sky hover:bg-slate-50'}`} href="#sedes" onClick={() => { setActiveSection('sedes'); closeMenu(); }}>
                  <i className="fa-solid fa-hospital w-5 text-center"></i> {t('header.nav_clinics')}
                </a>
                <a className={`flex items-center gap-3 p-3 rounded-xl transition ${activeSection === 'especialidades' ? 'text-brand-sky bg-sky-50' : 'hover:text-brand-sky hover:bg-slate-50'}`} href="#especialidades" onClick={() => { setActiveSection('especialidades'); closeMenu(); }}>
                  <i className="fa-solid fa-microscope w-5 text-center"></i> {t('header.nav_specialties')}
                </a>
                <a className={`flex items-center gap-3 p-3 rounded-xl transition ${activeSection === 'trayectoria' ? 'text-brand-sky bg-sky-50' : 'hover:text-brand-sky hover:bg-slate-50'}`} href="#trayectoria" onClick={() => { setActiveSection('trayectoria'); closeMenu(); }}>
                  <i className="fa-solid fa-user-doctor w-5 text-center"></i> {t('header.nav_team')}
                </a>
                <a className={`flex items-center gap-3 p-3 rounded-xl transition ${activeSection === 'testimonios' ? 'text-brand-sky bg-sky-50' : 'hover:text-brand-sky hover:bg-slate-50'}`} href="#testimonios" onClick={() => { setActiveSection('testimonios'); closeMenu(); }}>
                  <i className="fa-solid fa-star w-5 text-center"></i> {t('header.nav_testimonials')}
                </a>
                <a className={`flex items-center gap-3 p-3 rounded-xl transition ${activeSection === 'contacto' ? 'text-brand-sky bg-sky-50' : 'hover:text-brand-sky hover:bg-slate-50'}`} href="#contacto" onClick={() => { setActiveSection('contacto'); closeMenu(); }}>
                  <i className="fa-solid fa-phone w-5 text-center"></i> {t('header.nav_contact')}
                </a>
                
                <div className="pt-4 mt-2 border-t border-slate-100">
                  <span className="text-sm text-slate-500 font-bold block mb-3">Idioma / Language</span>
                  <div className="flex bg-slate-100 p-1 rounded-lg gap-1">
                    <button onClick={() => i18n.changeLanguage('es')} className={`flex-1 text-xs font-bold py-2 rounded-md transition ${i18n.language?.startsWith('es') ? 'bg-white text-brand-sky shadow-sm' : 'text-slate-500 hover:text-brand-navy'}`}>ES</button>
                    <button onClick={() => i18n.changeLanguage('en')} className={`flex-1 text-xs font-bold py-2 rounded-md transition ${i18n.language?.startsWith('en') ? 'bg-white text-brand-sky shadow-sm' : 'text-slate-500 hover:text-brand-navy'}`}>EN</button>
                    <button onClick={() => i18n.changeLanguage('fr')} className={`flex-1 text-xs font-bold py-2 rounded-md transition ${i18n.language?.startsWith('fr') ? 'bg-white text-brand-sky shadow-sm' : 'text-slate-500 hover:text-brand-navy'}`}>FR</button>
                  </div>
                </div>
              </nav>
              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <Button asAnchor href="#cita" variant="primary" className="w-full" icon="fa-calendar-check" onClick={closeMenu}>
                  {t('header.btn_book')}
                </Button>
                <div className="mt-4 flex items-center justify-center gap-4 text-slate-400">
                  <a href="tel:+34910000000" className="flex items-center gap-2 text-xs font-bold hover:text-brand-sky">
                    <i className="fa-solid fa-phone-volume"></i> {t('header.emergency')}: +34 910 882 100
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
