import { useTranslation } from 'react-i18next';

import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, Star, Activity } from 'lucide-react';
import { trackWhatsAppClick } from '../../utils/analytics';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section id="home" className="relative min-h-[100dvh] lg:min-h-[110vh] flex items-center pt-32 pb-40 overflow-clip bg-gradient-to-br from-[#0a1514] via-[#102422] to-[#0a1514]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.webp" 
          alt="Fisioterapia Background" 
          className="w-full h-full object-cover object-right lg:object-center opacity-50"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a1514] via-[#0a1514]/80 lg:via-[#0a1514]/50 to-transparent" />
      </div>

      {/* Decorative background blur / Glowing orbs */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#3B9B88]/20 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#225A4E]/30 rounded-full blur-[100px] z-0 pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="flex flex-col items-start gap-6 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <Badge variant="glass" className="mb-2 bg-white/5 border-white/10 text-white/90 backdrop-blur-md">
              <Star className="w-3 h-3 mr-2 text-[#6BE5C8] fill-[#6BE5C8]" />
              {t('hero.badge')}
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0F5EE] to-[#88D0BB] leading-[1.1] pb-2 drop-shadow-sm">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto whitespace-nowrap text-lg bg-gradient-to-r from-[#2B6D5E] to-[#1E4D42] text-white border border-[#439C86]/50 shadow-[0_0_30px_rgba(43,109,94,0.4)] hover:shadow-[0_0_40px_rgba(43,109,94,0.6)] hover:-translate-y-1 transition-all duration-300 rounded-full" 
                onClick={() => {
                  trackWhatsAppClick('hero_cta');
                  window.open('https://wa.me/5548991033490?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.', '_blank');
                }}
              >
                {t('hero.cta_primary')}
                <ArrowRight className="ml-2 shrink-0 w-5 h-5" />
              </Button>
              <Button 
                variant="glass" 
                size="lg" 
                className="w-full sm:w-auto whitespace-nowrap text-lg text-white border-white/20 hover:bg-white/10 rounded-full" 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta_secondary')}
              </Button>
            </div>

            {/* Mobile HUD */}
            <div className="lg:hidden mt-8 w-full bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-xl animate-[fadeInUp_1s_ease-out_forwards]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2B6D5E]/50 flex items-center justify-center text-[#6BE5C8]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold font-sans text-white text-lg">{t('hero.hud_title')}</p>
                  <p className="text-sm text-white/70">{t('hero.hud_subtitle')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex relative h-[600px] flex-col items-end justify-end pb-12 animate-[fadeInUp_1.2s_ease-out_forwards]">
            {/* Desktop HUD */}
            <div className="bg-[#0A1A18]/60 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2B6D5E]/50 flex items-center justify-center text-[#6BE5C8]">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold font-sans text-white text-lg">{t('hero.hud_title')}</p>
                  <p className="text-sm text-white/70">{t('hero.hud_subtitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
