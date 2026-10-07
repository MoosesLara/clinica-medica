import React from 'react';
import { testimonialsData } from '../../data/content';
import { motion } from 'framer-motion';

export const PatientTestimonials: React.FC = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 20 } }
  };

  return (
    <section className="py-20 bg-slate-50 overflow-hidden" data-purpose="patient-reviews" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <span className="inline-block text-[10px] sm:text-xs uppercase font-extrabold tracking-wider sm:tracking-widest text-brand-emerald bg-emerald-50 px-3 py-1 rounded-2xl border border-emerald-100">Historias Reales</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mt-4 tracking-tight">La voz de nuestros pacientes</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">Seguimiento continuo desde el diagnóstico preliminar hasta el alta médica definitiva.</p>
        </motion.div>
        
        <div className="relative overflow-hidden w-full py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {/* Edge fades for seamless effect */}
          <div className="absolute top-0 left-0 w-12 sm:w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-12 sm:w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>
          
          <div className="flex w-max gap-6 sm:gap-8 animate-marquee">
            {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
              <article 
                key={`${testimonial.id}-${index}`} 
                className="bg-white p-6 rounded-3xl border border-slate-200/70 shadow-soft flex flex-col justify-between hover:shadow-elevated transition-all duration-300 w-[280px] sm:w-[360px] shrink-0 hover:-translate-y-1"
              >
                <div>
                  <div className="flex text-amber-400 text-xs gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm italic leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-5 mt-5 border-t border-slate-100">
                  <img alt={testimonial.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100" src={testimonial.avatar}/>
                  <div>
                    <h4 className="text-xs font-bold text-brand-navy">{testimonial.name}</h4>
                    <p className="text-[11px] text-slate-400">{testimonial.treatment}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
