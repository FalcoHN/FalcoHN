
import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/#' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'YouTube', href: '/#youtube' },
    { name: 'Blog', href: '#/blog' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    // If it's a hash link on the same page, we might need to scroll manually if the browser doesn't
    if (href.startsWith('/#') && window.location.hash.startsWith('#/blog')) {
      window.location.href = href;
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="/#" className="text-2xl font-black tracking-tighter text-blue-600">FalcoHN</a>
            <span className="hidden sm:block text-xs font-medium text-slate-500 uppercase tracking-widest border-l border-slate-300 pl-2">Consultoría Digital</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://paginaswebhonduras.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-bold bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all shadow-md"
            >
              Agencia <ExternalLink size={14} />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
                onClick={() => handleLinkClick(link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://paginaswebhonduras.com"
              className="block px-3 py-4 text-base font-bold text-blue-600 border-t border-slate-100"
            >
              Páginas Web Honduras (Agencia)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
