
import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Mis Servicios</h2>
          <p className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Estrategias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Siguiente Nivel</span></p>
          <p className="text-lg text-slate-600">Consultoría de alta gama diseñada para líderes que buscan autoridad, no solo presencia.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s) => {
            const Icon = (Icons as any)[s.icon];
            return (
              <div key={s.id} className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {Icon && <Icon size={28} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">{s.description}</p>
                <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-blue-600 transition-all duration-700 ease-in-out"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
