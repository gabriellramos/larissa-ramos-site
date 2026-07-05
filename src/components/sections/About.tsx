
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Badge } from '../ui/Badge';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../ui/ScrollReveal';

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" className="bg-surface-container/50 overflow-clip relative">
      <Container>
        <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative w-full max-w-sm mx-auto h-auto pt-8">
            {/* Ambient glowing backdrops - Static for top-tier GPU performance */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-20" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cta/15 rounded-full blur-3xl -z-20" />
            
            {/* Tall elegant glass shield behind the portrait */}
            <div className="absolute inset-0 w-full h-full rounded-[3.5rem] bg-gradient-to-b from-surface-container/30 to-surface/40 backdrop-blur-xl border border-outline/10 shadow-[0_30px_60px_rgba(0,0,0,0.06)] -z-10" />
            
            {/* Image Wrapper (clips the bottom to match the shield's border radius) */}
            <div className="relative w-full flex items-end justify-center rounded-b-[3.5rem] overflow-hidden">
              <img 
                src="/profile.webp" 
                alt="Dra. Larissa Ramos" 
                className="w-full h-auto object-contain object-bottom relative z-10 select-none transform hover:scale-[1.03] transition-transform duration-500 origin-bottom will-change-transform"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Floating Glass Tag 1: CREFITO Registration with hardware-acceleration */}
            <div className="absolute top-12 left-2 sm:left-6 z-20 bg-surface/75 backdrop-blur-md border border-outline/15 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 will-change-transform">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-surface-text uppercase font-sans">
                CREFITO 10/279910-F
              </span>
            </div>

            {/* Floating Glass Card 2: Years of Experience with hardware-acceleration */}
            <div className="absolute bottom-8 right-2 sm:right-6 z-20 bg-surface/80 backdrop-blur-lg border border-outline/15 p-4 rounded-3xl shadow-xl flex items-center gap-3 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 max-w-[190px] will-change-transform">
              <div className="text-4xl font-extrabold text-primary font-sans leading-none tracking-tight">
                +8
              </div>
              <div className="text-[10px] leading-tight font-bold text-surface-text-variant uppercase tracking-wider font-sans">
                {t('about.years_specialization')}
              </div>
            </div>
          </div>

          {/* Right Column: Balanced Premium Copy & Highlights Grid */}
          <div className="flex flex-col items-start gap-6">
            <Badge variant="outline">{t('about.badge')}</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-sans text-surface-text leading-tight">
              {t('about.title')}
            </h2>
            <div className="text-lg text-surface-text-variant leading-relaxed space-y-4">
              <p>{t('about.intro', { years: new Date().getFullYear() - 2018 })}</p>
              <p>{t('about.mission')}</p>
              <p className="font-semibold text-primary">{t('about.conclusion')}</p>
            </div>
            
            {/* Elegant 2-Column Highlight Cards Grid instead of simple bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full">
              {[0, 1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 p-4 rounded-2xl bg-surface-container border border-outline/5 hover:border-primary/20 hover:bg-surface-container/80 transition-all duration-300 group shadow-sm will-change-transform"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-125 transition-transform duration-300 will-change-transform" />
                  <span className="text-sm font-semibold text-surface-text leading-tight">
                    {t(`about.bullets.${i}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};
