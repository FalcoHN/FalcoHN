
import React from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-slate-900 overflow-hidden relative scroll-mt-24">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute top-0 right-0 translate-y-[-20%] translate-x-[20%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm">Hablemos de tu Futuro</h2>
            <p className="text-5xl font-black text-white leading-tight">¿Listo para subir <br /> de nivel?</p>
            <p className="text-xl text-slate-400 leading-relaxed max-w-md">
              Si buscas una consultoría que entienda el mercado hondureño y domine las herramientas globales, estás en el lugar correcto.
            </p>
            
            <ul className="space-y-6">
              {[
                'Análisis personalizado de tu presencia actual.',
                'Estrategia de crecimiento orgánico y ético.',
                'Integración de IA para optimizar procesos.',
                'Experiencia comprobada de más de 15 años.'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                  <CheckCircle className="text-blue-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Nombre Completo</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="Ej. Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Empresa / Proyecto</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="Ej. Mi Negocio S.A." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Correo Electrónico</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="juan@ejemplo.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">¿En qué puedo ayudarte?</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none">
                  <option>Consultoría 1-a-1</option>
                  <option>Auditoría de Sitio Web</option>
                  <option>Implementación de IA</option>
                  <option>Otro / Consulta General</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Mensaje</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="Cuéntame sobre tu visión..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-black py-5 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 active:scale-95">
                Enviar Mensaje <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
