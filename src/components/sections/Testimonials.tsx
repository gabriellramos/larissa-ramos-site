import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Badge } from '../ui/Badge';

export const Testimonials = () => {
  const { t } = useTranslation();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 5;
    
    const checkAndReloadWidget = () => {
      if (!widgetRef.current) return;
      
      // Se o widget tiver filhos, significa que foi carregado com sucesso
      if (widgetRef.current.childElementCount > 0) {
        return; 
      }
      
      attempts++;
      
      if (attempts <= maxAttempts) {
        // Remove o script antigo se existir
        const existingScript = document.querySelector('script[src*="elfsightcdn.com/platform.js"]');
        if (existingScript) {
          existingScript.remove();
        }
        
        // Injeta novamente para forçar a inicialização
        const script = document.createElement('script');
        script.src = 'https://elfsightcdn.com/platform.js';
        script.async = true;
        document.head.appendChild(script);
        
        setTimeout(checkAndReloadWidget, 3000);
      }
    };

    // Primeira checagem após 3 segundos para dar tempo de carregar normalmente
    const timer = setTimeout(checkAndReloadWidget, 3000);

    return () => clearTimeout(timer);
  }, []);

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
          <div ref={widgetRef} className="elfsight-app-13d1fe27-5b03-4f52-bf1f-834670ff0503" data-elfsight-app-lazy></div>
        </div>
      </Container>
    </Section>
  );
};
