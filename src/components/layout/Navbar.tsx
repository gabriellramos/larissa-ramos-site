import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold font-sans text-primary hover:text-cta transition-colors">
          Dra. Larissa Ramos
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-surface-text-variant hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="group relative">
              <button className="flex items-center gap-1.5 text-sm font-semibold text-surface-text-variant hover:text-primary transition-colors cursor-pointer p-2">
                <Globe className="w-4 h-4" />
                {i18n.language.split('-')[0].toUpperCase()}
              </button>
              <div className="absolute right-0 mt-2 w-32 rounded-xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-outline/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-right transform scale-95 group-hover:scale-100">
                <button onClick={() => changeLanguage('pt-BR')} className="block w-full text-left px-4 py-3 text-sm hover:bg-surface-container rounded-t-xl transition-colors cursor-pointer font-medium">PT-BR</button>
                <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-3 text-sm hover:bg-surface-container transition-colors cursor-pointer font-medium">EN</button>
                <button onClick={() => changeLanguage('es')} className="block w-full text-left px-4 py-3 text-sm hover:bg-surface-container rounded-b-xl transition-colors cursor-pointer font-medium">ES</button>
              </div>
            </div>
            
            <Button variant="primary" size="sm" onClick={() => window.open('https://wa.me/5500000000000', '_blank')}>
              {t('nav.book')}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-surface-text-variant hover:text-primary transition-colors focus:outline-none cursor-pointer p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg border-t border-outline/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-surface-text-variant hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 py-4 border-t border-outline/10">
            <button onClick={() => changeLanguage('pt-BR')} className={`text-sm font-bold ${i18n.language === 'pt-BR' ? 'text-primary' : 'text-surface-text-variant'}`}>PT-BR</button>
            <button onClick={() => changeLanguage('en')} className={`text-sm font-bold ${i18n.language === 'en' ? 'text-primary' : 'text-surface-text-variant'}`}>EN</button>
            <button onClick={() => changeLanguage('es')} className={`text-sm font-bold ${i18n.language === 'es' ? 'text-primary' : 'text-surface-text-variant'}`}>ES</button>
          </div>
          <Button variant="primary" className="w-full mt-2" onClick={() => window.open('https://wa.me/5500000000000', '_blank')}>
            {t('nav.book')}
          </Button>
        </div>
      )}
    </header>
  );
};
