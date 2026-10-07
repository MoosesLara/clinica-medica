import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-400 text-xs pt-16 pb-12 border-t border-white/10" data-purpose="site-footer" id="contacto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-sky flex items-center justify-center text-white font-bold">
                <i className="fa-solid fa-staff-snake"></i>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Aura<span className="text-brand-sky">Surgical</span></span>
            </div>
            <p className="leading-relaxed text-slate-400">
              Práctica quirúrgica privada del Dr. Alejandro Morales. Máxima cualificación médica, tecnología hospitalaria certificada y trato personalizado.
            </p>
            <div className="text-slate-500 text-[11px]">
              Colegiado Ilustre Colegio Oficial de Médicos de Madrid Nº 2804911.
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Clínica Metropolitana (Norte)</h4>
            <p className="mb-2">Paseo de la Castellana 182, Planta 4, 28046 Madrid</p>
            <p className="mb-1"><strong className="text-slate-300">Citas:</strong> +34 910 882 101</p>
            <p><strong className="text-slate-300">Días:</strong> Lunes, Miércoles y Jueves</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Clínica San Gabriel (Sur)</h4>
            <p className="mb-2">Av. de Europa 45, Edificio A, 28224 Pozuelo</p>
            <p className="mb-1"><strong className="text-slate-300">Citas:</strong> +34 910 882 102</p>
            <p><strong className="text-slate-300">Días:</strong> Martes y Viernes</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Canales Directos</h4>
            <ul className="space-y-2">
              <li><a className="hover:text-brand-sky transition" href="#cita">Solicitud de Consulta Online</a></li>
              <li><a className="hover:text-brand-sky transition" href="#sedes">Quirófanos y Hospitalización</a></li>
              <li><a className="hover:text-brand-sky transition" href="#especialidades">Catálogo de Procedimientos</a></li>
              <li><a className="hover:text-white text-emerald-400 font-bold transition" href="tel:+34910882100">Urgencias Quirúrgicas 24h</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Aura Surgical · Dr. Alejandro Morales. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6">
            <a className="hover:text-slate-300 transition" href="#">Aviso Legal</a>
            <a className="hover:text-slate-300 transition" href="#">Política de Privacidad</a>
            <a className="hover:text-slate-300 transition" href="#">Código Deontológico</a>
            <a className="hover:text-slate-300 transition" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
