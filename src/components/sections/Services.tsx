import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Activity, ShieldPlus, Dumbbell, Brain, Hand, PersonStanding } from 'lucide-react';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: t('services.items.spine_orthopedics.title'),
      desc: t('services.items.spine_orthopedics.desc')
    },
    {
      icon: <ShieldPlus className="w-8 h-8 text-primary" />,
      title: t('services.items.surgery_rehab.title'),
      desc: t('services.items.surgery_rehab.desc')
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-primary" />,
      title: t('services.items.sports.title'),
      desc: t('services.items.sports.desc')
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: t('services.items.rca_mulligan.title'),
      desc: t('services.items.rca_mulligan.desc')
    },
    {
      icon: <Hand className="w-8 h-8 text-primary" />,
      title: t('services.items.manual_therapy.title'),
      desc: t('services.items.manual_therapy.desc')
    },
    {
      icon: <PersonStanding className="w-8 h-8 text-primary" />,
      title: t('services.items.pilates.title'),
      desc: t('services.items.pilates.desc')
    }
  ];

  return (
    <Section id="services" className="relative">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <Badge variant="primary">{t('services.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-sans text-surface-text">
            {t('services.title')}
          </h2>
          <p className="text-lg text-surface-text-variant">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card key={i} hoverLift className="p-8 group cursor-pointer border-transparent hover:border-primary/20">
              <div className="w-16 h-16 rounded-2xl bg-primary-container/50 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8 text-primary group-hover:text-white transition-colors' })}
              </div>
              <h3 className="text-2xl font-bold font-sans mb-3 text-surface-text group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-surface-text-variant leading-relaxed">
                {service.desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
