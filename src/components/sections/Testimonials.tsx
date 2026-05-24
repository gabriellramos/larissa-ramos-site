import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';

export const Testimonials = () => {
  const { t } = useTranslation();
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const injectScript = () => {
    const existingScript = document.querySelector('script[src*="elfsightcdn.com/platform.js"]');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.head.appendChild(script);
  };

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 6; // 12 seconds max timeout
    let timer: ReturnType<typeof setTimeout>;
    
    const checkStatus = () => {
      if (!widgetRef.current) return;
      
      // Elfsight widgets expand in height when they successfully load reviews.
      // An empty/failed widget or just the watermark is usually very short.
      if (widgetRef.current.clientHeight > 100) {
        setIsLoading(false);
        setHasError(false);
        return; 
      }
      
      attempts++;
      
      if (attempts <= maxAttempts) {
        if (attempts % 3 === 0) {
           injectScript(); // Force script reinjection periodically if stuck
        }
        timer = setTimeout(checkStatus, 2000);
      } else {
        setIsLoading(false);
        setHasError(true);
      }
    };

    timer = setTimeout(checkStatus, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    injectScript();
    
    // Polling again for retry
    let retryAttempts = 0;
    const retryCheck = () => {
      if (!widgetRef.current) return;
      if (widgetRef.current.clientHeight > 100) {
        setIsLoading(false);
      } else if (retryAttempts < 4) {
        retryAttempts++;
        setTimeout(retryCheck, 2000);
      } else {
        setIsLoading(false);
        setHasError(true);
      }
    };
    setTimeout(retryCheck, 2000);
  };

  return (
    <Section id="testimonials" className="bg-surface-text text-surface">
      <Container>
        <ScrollReveal>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <Badge variant="glass" className="border-white/20">{t('testimonials.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-sans text-white">
            {t('testimonials.title')}
          </h2>
        </div>
        </ScrollReveal>

        {/* Loading & Error States */}
        <ScrollReveal delay={200}>
        <div className="w-full mt-8 relative min-h-[200px]">
          
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 animate-in fade-in duration-500">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
              <p className="text-surface-text-variant font-medium text-sm">{t('testimonials.loading')}</p>
            </div>
          )}

          {hasError && !isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 bg-surface-text/50 backdrop-blur-sm rounded-3xl border border-white/10 p-6 animate-in fade-in duration-500">
              <AlertCircle className="w-12 h-12 text-red-400" />
              <p className="text-white text-center max-w-md font-medium">
                {t('testimonials.error_message')}
              </p>
              <Button onClick={handleRetry} variant="primary" className="mt-2 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                {t('testimonials.retry_button')}
              </Button>
            </div>
          )}

          <div 
            ref={widgetRef} 
            className={`elfsight-app-13d1fe27-5b03-4f52-bf1f-834670ff0503 transition-opacity duration-700 ${isLoading || hasError ? 'opacity-0' : 'opacity-100'}`} 
            data-elfsight-app-lazy
          ></div>
        </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};
