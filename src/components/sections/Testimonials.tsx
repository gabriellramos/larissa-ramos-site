import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Badge } from '../ui/Badge';
export const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <Section id="testimonials" className="bg-surface-text text-surface">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <Badge variant="glass" className="border-white/20">{t('testimonials.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-sans text-white">
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="w-full mt-8">
          <div className="elfsight-app-13d1fe27-5b03-4f52-bf1f-834670ff0503" data-elfsight-app-lazy></div>
        </div>
      </Container>
    </Section>
  );
};
