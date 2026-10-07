import React from 'react';
import { clinicsData } from '../../data/content';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const ClinicsDualSection: React.FC = () => {
  return (
    <section className="pt-28 pb-20 bg-slate-50 overflow-hidden" data-purpose="clinics-selector" id="sedes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block text-[10px] sm:text-xs uppercase font-extrabold tracking-wider sm:tracking-widest text-brand-sky bg-sky-50 px-3.5 py-1.5 rounded-2xl border border-sky-100">Presencia Hospitalaria de Primer Nivel</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mt-4 tracking-tight">Elija su Sede de Atención de Preferencia</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">El Dr. Morales opera y pasa consulta exclusivamente en instalaciones con certificación Joint Commission International (JCI) y quirófanos inteligentes.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {clinicsData.map((clinic, index) => (
            <motion.div 
              key={clinic.id} 
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, type: 'spring', damping: 20 }}
              className={`bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-soft transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                clinic.theme === 'sky' 
                  ? 'hover:border-brand-sky/40 hover:shadow-xl hover:shadow-brand-sky/10' 
                  : 'hover:border-brand-emerald/40 hover:shadow-xl hover:shadow-brand-emerald/10'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                clinic.theme === 'sky' ? 'to-brand-sky/5' : 'to-brand-emerald/5'
              }`}></div>
              
              <div className={`absolute top-0 right-0 text-white text-[9px] sm:text-[11px] font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-bl-xl uppercase tracking-wider transition-colors duration-300 z-10 shadow-sm max-w-[65%] text-right ${clinic.theme === 'sky' ? 'bg-brand-sky group-hover:bg-sky-600' : 'bg-brand-navy group-hover:bg-slate-800'}`}>
                {clinic.badge}
              </div>
              <div className="pt-4 sm:pt-0">
                <div className="flex items-center gap-3 sm:gap-4 mb-5">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0 transition ${
                    clinic.theme === 'sky' 
                      ? 'bg-sky-50 text-brand-sky group-hover:bg-brand-sky group-hover:text-white' 
                      : 'bg-emerald-50 text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white'
                  }`}>
                    <i className={`fa-solid ${clinic.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy">{clinic.name}</h3>
                    <p className="text-xs font-semibold text-slate-500">{clinic.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-3.5 text-sm text-slate-600 border-t border-b border-slate-100 py-5 my-2">
                  <div className="flex items-start gap-3">
                    <i className={`fa-solid fa-location-pin mt-1 text-brand-${clinic.theme}`}></i>
                    <span>{clinic.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className={`fa-regular fa-clock text-brand-${clinic.theme}`}></i>
                    <span>{clinic.schedule}</span>
                  </div>
                  {clinic.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <i className={`fa-solid ${clinic.featuresIcons[idx]} text-brand-${clinic.theme}`}></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 flex flex-col sm:flex-row items-center gap-3">
                <Button 
                  asAnchor 
                  href="#cita" 
                  variant={clinic.theme === 'sky' ? 'primary' : 'secondary'} 
                  className="w-full sm:w-auto flex-1"
                >
                  {clinic.buttonText}
                </Button>
                <Button 
                  asAnchor 
                  href="#" 
                  variant="outline" 
                  className="w-full sm:w-auto"
                >
                  Ver en Mapa
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
