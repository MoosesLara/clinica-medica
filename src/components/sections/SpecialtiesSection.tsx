import React from 'react';
import { specialtiesData } from '../../data/content';
import { motion } from 'framer-motion';

export const SpecialtiesSection: React.FC = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 300 } }
  };

  return (
    <section className="py-20 bg-slate-50/50" data-purpose="surgical-departments" id="especialidades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] sm:text-xs uppercase font-extrabold tracking-wider sm:tracking-widest text-brand-sky bg-sky-50 px-3 py-1 rounded-2xl">Cartera Quirúrgica</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mt-4 tracking-tight">Procedimientos y Especialidades</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">Tecnología de última generación enfocada en reducir el dolor postquirúrgico y acelerar el retorno a su vida cotidiana.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a className="inline-flex items-center gap-2 text-sm font-bold text-brand-sky hover:text-sky-700" href="#cita">
              <span>Consultar caso particular</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {specialtiesData.map((specialty) => (
            <motion.article 
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              key={specialty.id} 
              className={`p-5 sm:p-7 rounded-3xl border transition-all duration-300 group relative overflow-hidden flex flex-col ${
                specialty.highlighted 
                  ? 'border-brand-sky bg-gradient-to-br from-brand-sky to-sky-700 text-white shadow-lg shadow-brand-sky/20 hover:shadow-xl hover:shadow-brand-sky/40 hover:border-sky-400' 
                  : 'border-slate-200/80 bg-white hover:shadow-xl hover:shadow-brand-sky/10 hover:border-brand-sky/40'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                specialty.highlighted ? 'to-white/10' : 'to-brand-sky/5'
              }`}></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm ${
                  specialty.highlighted ? 'bg-white/20 text-white' : 'bg-sky-50 text-brand-sky group-hover:bg-brand-sky group-hover:text-white'
                }`}>
                <i className={`fa-solid ${specialty.icon}`}></i>
              </div>
                <h3 className={`text-lg font-bold ${specialty.highlighted ? 'text-white' : 'text-brand-navy group-hover:text-brand-sky transition-colors'}`}>
                  {specialty.title}
                </h3>
                <p className={`text-xs sm:text-sm mt-3 leading-relaxed flex-1 ${specialty.highlighted ? 'text-sky-100' : 'text-slate-600'}`}>
                  {specialty.description}
                </p>
                <div className={`mt-5 pt-4 border-t flex items-center text-xs font-semibold transition-colors duration-300 ${specialty.highlighted ? 'border-white/20 text-sky-50 group-hover:border-white/40' : 'border-slate-100 text-slate-500 group-hover:border-brand-sky/20 group-hover:text-brand-sky'}`}>
                  <span className={`${specialty.highlighted ? 'text-white' : 'text-brand-emerald group-hover:text-brand-sky'} mr-2 transition-colors`}>
                    <i className="fa-solid fa-check"></i>
                  </span> 
                  {specialty.feature}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
