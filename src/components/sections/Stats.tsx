import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';

export const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '5+', label: t('stats.experience') },
    { value: '5k+', label: t('stats.sessions') },
    { value: '98%', label: t('stats.satisfaction') },
    { value: '4', label: t('stats.specialties') },
  ];

  return (
    <section className="py-12 bg-primary text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold font-sans mb-2">{stat.value}</span>
              <span className="text-sm md:text-base text-primary-container">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
