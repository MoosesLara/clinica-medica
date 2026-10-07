import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input, Select } from '../ui/FormControls';
import { Modal } from '../ui/Modal';
import { motion } from 'framer-motion';

export const QuickAppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    clinic: 'metropolitana',
    reason: 'hernia',
    payment: 'privado',
    time: 'manana',
    notes: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending data:', formData);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-white" data-purpose="appointment-booking-module" id="cita">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-brand-navy via-brand-navyLight to-slate-900 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 space-y-4"
              >
                <span className="inline-block text-[10px] sm:text-xs uppercase font-extrabold tracking-wider sm:tracking-widest text-brand-sky bg-white/10 px-3 py-1 rounded-2xl">Sin Esperas Innecesarias</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">Solicite su Primera Consulta o Segunda Opinión</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Seleccione la sede de su conveniencia. Nuestro equipo de coordinación clínica se comunicará con usted en menos de 2 horas para confirmar la cita y recopilar informes previos si los tuviera.
                </p>
                <div className="pt-4 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-brand-emerald"></i>
                    <span>Atención directa con el cirujano titular (sin intermediarios)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-brand-emerald"></i>
                    <span>Aceptamos principales aseguradoras de salud y privados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-brand-emerald"></i>
                    <span>Opción de videoconsulta previa para pacientes internacionales</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-7 bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl" data-purpose="appointment-form"
              >
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input 
                      label="Nombre y Apellidos *" 
                      name="name"
                      placeholder="Ej. Carlos Mendoza" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <Input 
                      label="Teléfono Móvil *" 
                      name="phone"
                      type="tel"
                      placeholder="+34 600 000 000" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Select 
                      label="Sede Hospitalaria *" 
                      name="clinic"
                      value={formData.clinic}
                      onChange={handleChange}
                      options={[
                        { value: 'metropolitana', label: 'Clínica Metropolitana (Torre Norte)' },
                        { value: 'sangabriel', label: 'Clínica San Gabriel (Sede Sur)' },
                        { value: 'indiferente', label: 'Cualquiera / Primera fecha libre' },
                        { value: 'online', label: 'Videoconsulta Telemática' },
                      ]}
                    />
                    <Select 
                      label="Motivo Quirúrgico" 
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      options={[
                        { value: 'hernia', label: 'Hernia inguinal / abdominal' },
                        { value: 'vesicula', label: 'Vesícula biliar / Cólico' },
                        { value: 'segunda_opinion', label: 'Segunda opinión diagnóstica' },
                        { value: 'oncologia', label: 'Cirugía Oncológica digestiva' },
                        { value: 'proctologia', label: 'Patología anal / Proctología' },
                        { value: 'otro', label: 'Otra patología quirúrgica' },
                      ]}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Select 
                      label="Modalidad de Pago / Seguro" 
                      name="payment"
                      value={formData.payment}
                      onChange={handleChange}
                      options={[
                        { value: 'privado', label: 'Privado / Sin Seguro' },
                        { value: 'sanitas', label: 'Sanitas' },
                        { value: 'adeslas', label: 'SegurCaixa Adeslas' },
                        { value: 'asisa', label: 'Asisa' },
                        { value: 'mapfre', label: 'Mapfre' },
                        { value: 'otro', label: 'Otras aseguradoras de reembolso' },
                      ]}
                    />
                    <Select 
                      label="Preferencia Horaria" 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      options={[
                        { value: 'manana', label: 'Mañanas (09:00 - 14:00)' },
                        { value: 'tarde', label: 'Tardes (15:00 - 20:30)' },
                        { value: 'urgente', label: 'Lo antes posible' },
                      ]}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Observaciones breves o síntomas</label>
                    <textarea 
                      name="notes"
                      className="w-full text-sm rounded-xl border-slate-200 focus:border-brand-sky focus:ring-brand-sky px-3 py-2" 
                      placeholder="Describa brevemente si cuenta con ecografías, TACs o diagnósticos previos..." 
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" variant="primary" icon="fa-paper-plane" className="w-full">
                    Confirmar Solicitud de Consulta
                  </Button>
                  <p className="text-[11px] text-center text-slate-400">
                    Cumplimiento RGPD médico y secreto profesional garantizado.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Solicitud Confirmada"
      >
        <div className="text-center py-4">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15, delay: 0.2 }}
            className="w-20 h-20 bg-emerald-100 text-brand-emerald rounded-full flex items-center justify-center text-4xl mx-auto mb-6"
          >
            <i className="fa-solid fa-check"></i>
          </motion.div>
          <h4 className="text-xl font-extrabold text-brand-navy mb-2">¡Gracias por confiar en AuraSurgical!</h4>
          <p className="text-sm text-slate-600 mb-6 px-4">
            Hemos recibido los datos de <strong>{formData.name || 'su solicitud'}</strong> de forma segura. Nuestro equipo de atención al paciente se pondrá en contacto al teléfono proporcionado en breve para concretar la hora exacta de su cita.
          </p>
          <Button variant="primary" onClick={() => setIsModalOpen(false)} className="w-full">
            Entendido, volver al inicio
          </Button>
        </div>
      </Modal>
    </>
  );
};
