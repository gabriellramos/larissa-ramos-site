
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, Star } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section id="home" className="relative min-h-[100dvh] lg:min-h-[90vh] flex items-center pt-32 pb-20 overflow-clip">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary-container/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-6"
          >
            <Badge variant="glass" className="mb-2">
              <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
              {t('hero.badge')}
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans text-surface-text leading-[1.1]">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-surface-text-variant max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-lg" onClick={() => window.open('https://wa.me/5500000000000', '_blank')}>
                {t('hero.cta_primary')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="ghost" size="lg" className="w-full sm:w-auto text-lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('hero.cta_secondary')}
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-outline/10 w-full">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-surface-container overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Paciente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-surface-text-variant">Mais de 500+ pacientes</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-surface-container">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                alt="Fisioterapia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-text/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <p className="font-bold font-sans text-primary mb-1">Metodologia Exclusiva</p>
                <p className="text-sm text-surface-text-variant">Resultados visíveis nas primeiras sessões.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
