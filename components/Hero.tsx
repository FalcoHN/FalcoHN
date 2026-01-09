
import React from 'react';
import { ArrowRight, PlayCircle, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-blue-50/50 rounded-l-[100px] hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              15+ Años de Experiencia
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Construyendo <br />
              <span className="text-blue-600">Autoridad Digital</span> <br />
              en Honduras.
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Soy Saúl Milla (FalcoHN). Ayudo a empresas y profesionales a navegar la era digital con estrategias basadas en integridad, IA y resultados reales.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contacto" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Agenda una Consultoría <ArrowRight size={20} />
              </a>
              <a href="https://www.youtube.com/@FalcoHN" target="_blank" className="px-8 py-4 bg-white text-slate-900 font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                <PlayCircle size={20} className="text-red-500" /> Ver en YouTube
              </a>
            </div>

            <div className="pt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/seed/face${i}/100/100`} alt="Testimonial" />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500">
                <span className="text-slate-900 font-bold underline decoration-blue-500 underline-offset-4">+150 clientes</span> satisfechos en Centroamérica
              </p>
            </div>
          </div>

          <div className="relative group animate-in fade-in zoom-in duration-1000">
            <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
            <div className="relative aspect-[4/5] bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/saulmilla/800/1000" 
                alt="Saúl Milla - FalcoHN" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border border-white/50 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Saúl Milla</h3>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Tecnólogo • Estratega • Historiador</p>
                  </div>
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                    <Briefcase size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
