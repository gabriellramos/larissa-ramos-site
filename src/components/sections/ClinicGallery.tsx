import { useTranslation } from 'react-i18next';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Badge } from '../ui/Badge';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  '/carrosel/791A011D-072B-4B65-B723-3624C541C2EB.webp',
  '/carrosel/1069BAD9-44EB-4613-BFE1-5921F0BF8DC1.webp',
  '/carrosel/0CDF7255-9C71-4C80-AA2E-B62CF3D99A4F.webp',
  '/carrosel/3B7DF408-D8D3-4294-AB6E-7D68DFBA25BB.webp',
  '/carrosel/E4BFD5B5-D817-4CFB-AD9B-D058E90F164F.webp'
];

export const ClinicGallery = () => {
  const { t } = useTranslation();
  
  // Initialize Embla with loop enabled and Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Section id="gallery" className="bg-surface-container py-24 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <Badge className="mb-4">
              <Camera className="w-3 h-3 mr-2" />
              {t('gallery.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-surface-text mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-lg text-surface-text-variant">
              {t('gallery.subtitle')}
            </p>
          </div>
          
          <div className="hidden md:flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-outline flex items-center justify-center text-surface-text hover:bg-surface hover:border-primary transition-all group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:text-primary transition-colors" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-outline flex items-center justify-center text-surface-text hover:bg-surface hover:border-primary transition-all group"
            >
              <ChevronRight className="w-6 h-6 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </Container>

      {/* Embla Carousel Viewport */}
      <div className="w-full pl-4 md:pl-[max(1.5rem,calc((100vw-1200px)/2))]">
        <div>
          <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-8" ref={emblaRef}>
            <div className="flex touch-pan-y ml-[-1rem]">
              {IMAGES.map((src, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 pl-4"
                >
                  <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-outline/10 bg-surface">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                    <img 
                      src={src} 
                      alt={`Galeria Dra Larissa Ramos ${index + 1}`} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
