
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Badge } from '../ui/Badge';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  
  return (
    <Section id="about" className="bg-surface-container/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Dra. Larissa Ramos" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-full -z-10 blur-2xl opacity-20" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-cta rounded-full -z-10 blur-2xl opacity-20" />
          </div>
          
          <div className="flex flex-col items-start gap-6">
            <Badge variant="outline">{t('about.badge')}</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-sans text-surface-text">
              {t('about.title')}
            </h2>
            <div className="text-lg text-surface-text-variant leading-relaxed space-y-4">
              <p>{t('about.intro', { years: new Date().getFullYear() - 2018 })}</p>
              <p>{t('about.mission')}</p>
              <p>{t('about.pilates')}</p>
              <p className="font-semibold text-primary">{t('about.conclusion')}</p>
            </div>
            <ul className="flex flex-col gap-4 mt-4 w-full">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-3 text-surface-text-variant font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {t(`about.bullets.${i}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};
