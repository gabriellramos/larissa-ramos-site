import { useTranslation } from 'react-i18next';
import { Container } from './Container';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-surface-text text-surface pt-20 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/alt-site.webp" 
              alt="Dra. Larissa Ramos" 
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert mb-6"
            />
            <p className="text-surface-container/80 max-w-sm mb-8 text-base leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/larissaramos.fisio" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-surface-text-variant flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t('footer.quick_links')}</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#home" className="text-surface-container/80 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 overflow-hidden group-hover:w-4 transition-all text-primary-container"><ArrowUpRight className="w-4 h-4"/></span>{t('nav.home')}</a></li>
              <li><a href="#about" className="text-surface-container/80 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 overflow-hidden group-hover:w-4 transition-all text-primary-container"><ArrowUpRight className="w-4 h-4"/></span>{t('nav.about')}</a></li>
              <li><a href="#services" className="text-surface-container/80 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 overflow-hidden group-hover:w-4 transition-all text-primary-container"><ArrowUpRight className="w-4 h-4"/></span>{t('nav.services')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t('footer.contact')}</h3>
            <ul className="flex flex-col gap-5 text-surface-container/80">
              <li className="flex items-start gap-4 hover:text-white transition-colors">
                <div className="bg-surface-text-variant p-2 rounded-lg text-primary-container shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('contact.address_val') }} />
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <div className="bg-surface-text-variant p-2 rounded-lg text-primary-container shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span>(48) 99103-3490</span>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <div className="bg-surface-text-variant p-2 rounded-lg text-primary-container shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contato@larissaramos.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-text-variant/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-surface-container/50 gap-4">
          <p>© {new Date().getFullYear()} Dra. Larissa Ramos. {t('footer.rights')}</p>
          <p>
            Desenvolvido por{' '}
            <a 
              href="https://wa.me/5592993728956?text=Oi%2C%20vi%20seu%20trabalho%20desenvolvendo%20sites%20de%20empresas%20e%20gostaria%20de%20conversar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary-container transition-colors opacity-70 hover:opacity-100"
            >
              Gabriel Nascimento
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
