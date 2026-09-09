import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Activity, ShieldPlus, Dumbbell, Brain, Hand, Home, ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { trackWhatsAppClick } from '../../utils/analytics';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'spine_orthopedics',
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: t('services.items.spine_orthopedics.title'),
      desc: t('services.items.spine_orthopedics.desc')
    },
    {
      id: 'surgery_rehab',
      icon: <ShieldPlus className="w-8 h-8 text-primary" />,
      title: t('services.items.surgery_rehab.title'),
      desc: t('services.items.surgery_rehab.desc')
    },
    {
      id: 'home_care',
      icon: <Home className="w-8 h-8 text-primary" />,
      title: t('services.items.home_care.title'),
      desc: t('services.items.home_care.desc'),
      highlight: true,
      badge: t('services.items.home_care.badge')
    },
    {
      id: 'sports',
      icon: <Dumbbell className="w-8 h-8 text-primary" />,
      title: t('services.items.sports.title'),
      desc: t('services.items.sports.desc')
    },
    {
      id: 'rca_mulligan',
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: t('services.items.rca_mulligan.title'),
      desc: t('services.items.rca_mulligan.desc')
    },
    {
      id: 'manual_therapy',
      icon: <Hand className="w-8 h-8 text-primary" />,
      title: t('services.items.manual_therapy.title'),
      desc: t('services.items.manual_therapy.desc')
    }
  ];

  return (
    <Section id="services" className="relative">
      <Container>
        <ScrollReveal>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <Badge variant="primary">{t('services.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-sans text-surface-text">
            {t('services.title')}
          </h2>
          <p className="text-lg text-surface-text-variant">
            {t('services.subtitle')}
          </p>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card 
              key={service.id || i} 
              hoverLift 
              className={`p-8 group cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                service.highlight 
                  ? 'border-primary/40 bg-gradient-to-b from-primary-container/20 via-surface to-surface shadow-lg shadow-primary/5 hover:border-primary/60 ring-1 ring-primary/20' 
                  : 'border-transparent hover:border-primary/20'
              }`}
              onClick={() => {
                if (service.highlight) {
                  trackWhatsAppClick('service_card_homecare');
                  window.open('https://wa.me/5548991033490?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20fisioterap%C3%AAutico%20domiciliar.', '_blank');
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                    service.highlight 
                      ? 'bg-primary text-white shadow-md shadow-primary/20' 
                      : 'bg-primary-container/50 group-hover:bg-primary text-primary group-hover:text-white'
                  }`}>
                    {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { 
                      className: `w-8 h-8 transition-colors ${
                        service.highlight ? 'text-white' : 'text-primary group-hover:text-white'
                      }` 
                    })}
                  </div>
                  {service.highlight && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                      <Sparkles className="w-3.5 h-3.5" />
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className={`text-2xl font-bold font-sans mb-3 transition-colors ${
                  service.highlight ? 'text-primary' : 'text-surface-text group-hover:text-primary'
                }`}>
                  {service.title}
                </h3>
                <p className="text-surface-text-variant leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {service.highlight && (
                <div className="mt-6 pt-4 border-t border-primary/15 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>{t('contact.homecare_card.cta')}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Card>
          ))}
        </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};
