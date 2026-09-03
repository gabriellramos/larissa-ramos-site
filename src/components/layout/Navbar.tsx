import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { trackWhatsAppClick } from '../../utils/analytics';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-4 left-4 right-4 md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-3rem)] md:max-w-6xl z-40 transition-all duration-300 rounded-[2rem] border ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-outline/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-3'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center transition-transform hover:scale-[1.02] duration-300">
          <img 
            src="/logo-1.webp" 
            alt="Dra. Larissa Ramos" 
            className={`h-9 md:h-12 w-auto object-contain transition-all duration-300 ease-in-out ${
              isScrolled ? 'brightness-100' : 'brightness-0 invert'
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-surface-text-variant hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="group relative">
              <button className={`flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer p-2 ${
                isScrolled ? 'text-surface-text-variant hover:text-primary' : 'text-white/80 hover:text-white'
              }`}>
                <Globe className="w-4 h-4" />
                {i18n.language.split('-')[0].toUpperCase()}
              </button>
              <div className={`absolute right-0 mt-2 w-32 rounded-xl backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-right transform scale-95 group-hover:scale-100 ${
                isScrolled ? 'bg-white border-outline/10' : 'bg-white/10 border-white/20'
              }`}>
                <button onClick={() => changeLanguage('pt-BR')} className={`block w-full text-left px-4 py-3 text-sm rounded-t-xl transition-colors cursor-pointer font-medium ${isScrolled ? 'text-surface-text hover:bg-surface-container' : 'text-white hover:bg-white/20'}`}>PT-BR</button>
                <button onClick={() => changeLanguage('en')} className={`block w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer font-medium ${isScrolled ? 'text-surface-text hover:bg-surface-container' : 'text-white hover:bg-white/20'}`}>EN</button>
                <button onClick={() => changeLanguage('es')} className={`block w-full text-left px-4 py-3 text-sm rounded-b-xl transition-colors cursor-pointer font-medium ${isScrolled ? 'text-surface-text hover:bg-surface-container' : 'text-white hover:bg-white/20'}`}>ES</button>
              </div>
            </div>
            
            <Button 
              variant={isScrolled ? 'primary' : 'glass'} 
              size="sm" 
              className={isScrolled ? '' : 'bg-white/20 hover:bg-white/30 text-white border-white/30'}
              onClick={() => {
                trackWhatsAppClick('navbar_cta_desktop');
                window.open('https://wa.me/5548991033490?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.', '_blank');
              }}
            >
              {t('nav.book')}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors focus:outline-none cursor-pointer p-2 ${isScrolled ? 'text-surface-text hover:text-primary' : 'text-white hover:text-white/80'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#0A1A18]/95 backdrop-blur-xl shadow-lg border border-white/10 rounded-2xl p-6 flex flex-col gap-4 mx-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 py-4 border-t border-white/10">
            <button onClick={() => changeLanguage('pt-BR')} className={`text-sm font-bold ${i18n.language === 'pt-BR' ? 'text-primary-container' : 'text-white/60'}`}>PT-BR</button>
            <button onClick={() => changeLanguage('en')} className={`text-sm font-bold ${i18n.language === 'en' ? 'text-primary-container' : 'text-white/60'}`}>EN</button>
            <button onClick={() => changeLanguage('es')} className={`text-sm font-bold ${i18n.language === 'es' ? 'text-primary-container' : 'text-white/60'}`}>ES</button>
          </div>
          <Button 
            variant="primary" 
            className="w-full mt-2" 
            onClick={() => {
              trackWhatsAppClick('navbar_cta_mobile');
              window.open('https://wa.me/5548991033490?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.', '_blank');
            }}
          >
            {t('nav.book')}
          </Button>
        </div>
      )}
    </header>
  );
};
