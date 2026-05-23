import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Star, Quote, Loader2 } from 'lucide-react';

export const Testimonials = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock initial reviews until Places API is fully hooked up
  useEffect(() => {
    setTimeout(() => {
      setReviews([
        { author_name: 'Maria Silva', text: 'Profissional excelente! Cheguei com muita dor na lombar e em poucas sessões já estava me sentindo ótima. Recomendo muito!', rating: 5 },
        { author_name: 'João Pedro', text: 'Atendimento impecável. A Dra. Larissa é muito atenciosa e explica tudo com clareza. O estúdio de Pilates é super equipado.', rating: 5 },
        { author_name: 'Ana Carolina', text: 'Melhor fisioterapeuta que já fui. Recuperação do meu joelho foi muito mais rápida do que o esperado graças ao tratamento.', rating: 5 },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Section id="testimonials" className="bg-surface-text text-surface">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <Badge variant="glass" className="border-white/20">{t('nav.testimonials')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-sans text-white">
            O que dizem nossos pacientes
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-3xl font-bold text-white">5.0</span>
            <div className="flex text-yellow-500">
              {[1,2,3,4,5].map(i => <Star key={i} className="fill-current w-6 h-6" />)}
            </div>
            <span className="text-surface-container/60 ml-2">Baseado em +50 avaliações no Google</span>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary-container animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <Card key={i} hoverLift className="p-8 bg-white/5 border-white/10 text-white relative flex flex-col h-full">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
                <div className="flex items-center text-yellow-500 mb-6">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="fill-current w-4 h-4" />
                  ))}
                </div>
                <p className="text-surface-container/80 leading-relaxed mb-6 italic relative z-10 flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center font-bold text-primary-container">
                    {review.author_name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold font-sans">{review.author_name}</h4>
                    <span className="text-xs text-surface-container/50">Google Review</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};
