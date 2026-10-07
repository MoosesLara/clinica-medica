import React from 'react';
import { motion } from 'framer-motion';

export const AboutAndCredentials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/80 border-y border-slate-200/70 overflow-hidden" data-purpose="surgeon-biography" id="trayectoria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', damping: 25 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <img alt="Dr. Alejandro Morales en Quirofano" className="w-full h-[460px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg60DOjTLPRHTymMEDHdL9zp16_7osn-Nvo12t5eg15Sa5ChGfWJ0TwCl52wLhyTOx7pRVvEpvN9OZN8te1spMxbTFn8vlIN533SDm2W3goDPIOMmUBljqFY7lYa5Xc_Wo8d9KgyK7kNAiYMKSKvInmim5FABNqC5RNE8ErgUJaHwC0R9PO-gj9sIRksSr-t5-yqtq2STK7eNpr7DQNOoTsVSpPS1IwXegxaTBMoQq"/>
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', damping: 15 }}
              className="absolute -bottom-6 -right-4 bg-brand-navy text-white p-5 rounded-2xl shadow-xl max-w-xs border border-white/10 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-award text-3xl text-brand-sky"></i>
                <div>
                  <div className="font-bold text-sm">Acreditación Europea EBSQ</div>
                  <div className="text-[11px] text-slate-300">European Board of Surgery Qualification</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', damping: 25 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <span className="inline-block text-[10px] sm:text-xs uppercase font-extrabold tracking-wider sm:tracking-widest text-brand-sky bg-sky-50 px-3 py-1 rounded-2xl">Experiencia y Compromiso</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">Dr. Alejandro Morales</h2>
            <h4 className="text-lg font-semibold text-slate-600 -mt-3">Cirujano General y del Aparato Digestivo</h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Formado en el Hospital Universitario La Paz de Madrid y con estancias formativas en el Memorial Sloan Kettering Cancer Center (Nueva York) y el IRCAD (Estrasburgo). Su vocación se asienta en dos pilares innegociables: rigor técnico milimétrico y empatía constante con el paciente y su familia.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-3">
                <i className="fa-solid fa-graduation-cap text-brand-sky text-xl"></i>
                <span className="text-xs font-semibold text-slate-700">Doctor en Cirugía (Cum Laude por UAM)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-3">
                <i className="fa-solid fa-certificate text-brand-emerald text-xl"></i>
                <span className="text-xs font-semibold text-slate-700">Miembro Asociación Española de Cirujanos</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-3">
                <i className="fa-solid fa-globe text-brand-sky text-xl"></i>
                <span className="text-xs font-semibold text-slate-700">Fellow de la International Hepato-Biliary Ass.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-3">
                <i className="fa-solid fa-book-medical text-brand-emerald text-xl"></i>
                <span className="text-xs font-semibold text-slate-700">+45 Artículos indexados en PubMed</span>
              </div>
            </div>
            <blockquote className="p-4 rounded-xl border-l-4 border-brand-sky bg-sky-50/50 text-slate-700 text-xs sm:text-sm italic">
              "El éxito de una cirugía no se mide únicamente en el quirófano, sino en cómo el paciente recupera su bienestar, su tranquilidad y su autonomía con el menor impacto físico y emocional posible."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
