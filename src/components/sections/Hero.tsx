import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, Star, Activity } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section id="home" className="relative min-h-[100dvh] lg:min-h-[110vh] flex items-center pt-32 pb-40 overflow-clip bg-gradient-to-br from-[#0a1514] via-[#102422] to-[#0a1514]">
      {/* Mobile background image */}
      <div className="absolute inset-0 lg:hidden -z-20">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
          alt="Fisioterapia Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1514] via-[#0a1514]/80 to-[#0a1514]/20" />
      </div>

      {/* Decorative background blur / Glowing orbs */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#3B9B88]/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#225A4E]/30 rounded-full blur-[100px] -z-10" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-6"
          >
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
                onClick={() => window.open('https://wa.me/5548991033490', '_blank')}
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
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:hidden mt-8 w-full bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2B6D5E]/50 flex items-center justify-center text-[#6BE5C8]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold font-sans text-white text-lg">{t('hero.hud_title')}</p>
                  <p className="text-sm text-white/70">{t('hero.hud_subtitle')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: '1000px' }}
            className="hidden lg:flex relative h-[700px] items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/10 bg-[#0A1A18]">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                alt="Fisioterapia" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050D0C] via-transparent to-transparent opacity-90" />
              
              {/* HUD / Tech overlay decoration */}
              <div className="absolute top-1/4 right-8 w-2 h-2 rounded-full bg-[#6BE5C8] shadow-[0_0_15px_#6BE5C8] animate-pulse" />
              <div className="absolute bottom-1/3 left-12 w-2 h-2 rounded-full bg-[#6BE5C8] shadow-[0_0_15px_#6BE5C8] animate-pulse delay-300" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-2">
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
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
