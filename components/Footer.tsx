
import React from 'react';
import { Youtube, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tighter">FalcoHN</h2>
            <p className="max-w-sm text-lg leading-relaxed">
              Elevando el estándar del ecosistema digital en Honduras a través de consultoría ética, IA y contenido de valor.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Youtube size={20} />, href: 'https://youtube.com/@FalcoHN' },
                { icon: <Linkedin size={20} />, href: '#' },
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Mail size={20} />, href: 'mailto:saul@falcohn.com' }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Pilares</h3>
            <ul className="space-y-4 font-medium">
              <li><a href="#servicios" className="hover:text-blue-500 transition-colors">Consultoría</a></li>
              <li><a href="#youtube" className="hover:text-blue-500 transition-colors">YouTube Historia</a></li>
              <li><a href="#blog" className="hover:text-blue-500 transition-colors">Tech Insights</a></li>
              <li><a href="#contacto" className="hover:text-blue-500 transition-colors">Auditoría Digital</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">La Fábrica</h3>
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 space-y-4">
              <p className="text-sm font-semibold text-slate-300">¿Necesitas hosting o desarrollo web estándar?</p>
              <a 
                href="https://paginaswebhonduras.com" 
                target="_blank"
                className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors"
              >
                Páginas Web Honduras <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Saúl Milla (FalcoHN). Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
