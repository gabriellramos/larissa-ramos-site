import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Badge } from '../ui/Badge';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  'https://static.wixstatic.com/media/dc99cff9-930d-450b-b61f-cebda8d6dfe5.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/foto.jpg',
  'https://static.wixstatic.com/media/751d5b72-61c8-4f54-b295-7a9a4f42d89a_edi.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/foto.jpg',
  'https://static.wixstatic.com/media/d37641_f96cddea1c614df6b70f8fe8a3a04d58~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/foto.jpg',
  'https://static.wixstatic.com/media/d37641_2b7d3caa72764f6f8f4236bbe65db24d~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/foto.jpg',
  'https://static.wixstatic.com/media/dc99cff9-930d-450b-b61f-cebda8d6dfe5.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/foto.jpg',
  'https://static.wixstatic.com/media/751d5b72-61c8-4f54-b295-7a9a4f42d89a_edi.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/foto.jpg'
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
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
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex gap-4"
          >
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
          </motion.div>
        </div>
      </Container>

      {/* Embla Carousel Viewport */}
      <div className="w-full pl-4 md:pl-[max(1.5rem,calc((100vw-1200px)/2))]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
        </motion.div>
      </div>
    </Section>
  );
};
