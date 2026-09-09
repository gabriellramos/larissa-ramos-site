import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Badge } from '../ui/Badge';
import { Input, Textarea } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { MapPin, Phone, Mail, Clock, Home, Sparkles, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ScrollReveal } from '../ui/ScrollReveal';
import { trackFormSubmit, trackWhatsAppClick } from '../../utils/analytics';

const contactSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter no mínimo 3 caracteres' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  message: z.string().min(10, { message: 'Mensagem deve ter no mínimo 10 caracteres' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Disparo da conversão do Google Ads e evento no GA4
    trackFormSubmit({ name: data.name });

    const phoneNumber = "5548991033490";
    const text = `Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Larissa Ramos.\n\n*Nome:* ${data.name}\n*Telefone:* ${data.phone}\n\n*Mensagem:*\n${data.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    reset();
  };

  return (
    <Section id="contact" className="relative bg-surface-container/30">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <Badge variant="outline">{t('contact.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-sans text-surface-text">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-surface-text-variant">
            {t('contact.subtitle')}
          </p>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <Card className="p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-sans mb-8 text-surface-text">{t('contact.info_title')}</h3>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary-container p-4 rounded-xl text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-surface-text mb-1">{t('contact.address')}</h4>
                      <div className="text-surface-text-variant leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: t('contact.address_val') }} />
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary-container p-4 rounded-xl text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-surface-text mb-1">{t('contact.phone')}</h4>
                      <a href="tel:5548991033490" className="text-surface-text-variant hover:text-primary transition-colors font-medium">
                        (48) 99103-3490
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary-container p-4 rounded-xl text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-surface-text mb-1">{t('contact.email')}</h4>
                      <a href="mailto:contato@larissaramos.com.br" className="text-surface-text-variant hover:text-primary transition-colors">
                        contato@larissaramos.com.br
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary-container p-4 rounded-xl text-primary shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-surface-text mb-1">{t('contact.hours')}</h4>
                      <p className="text-surface-text-variant leading-relaxed">{t('contact.hours_val')}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Home Care & New Location Spotlight Box (Substitui o mapa da antiga sala física) */}
              <div className="mt-8 rounded-2xl p-6 bg-gradient-to-br from-primary-container/40 via-surface-container/60 to-primary-container/20 border border-primary/20 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">
                    <Sparkles className="w-3.5 h-3.5" />
                    {t('contact.homecare_card.badge')}
                  </span>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Home className="w-5 h-5 text-primary shrink-0" />
                    <h4 className="font-bold text-surface-text text-lg">
                      {t('contact.homecare_card.title')}
                    </h4>
                  </div>
                  <p className="text-surface-text-variant text-sm leading-relaxed">
                    {t('contact.homecare_card.desc')}
                  </p>
                </div>

                <div className="pt-2 border-t border-primary/10 flex flex-col gap-3">
                  <a
                    href="https://wa.me/5548991033490?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20domiciliar%20e%20regi%C3%B5es%20atendidas."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('contact_homecare_box')}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow group"
                  >
                    <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span>{t('contact.homecare_card.cta')}</span>
                  </a>
                  <p className="text-[12px] text-surface-text-variant/80 text-center">
                    {t('contact.homecare_card.note')}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 lg:p-10 bg-white shadow-xl shadow-primary/5 h-fit">
            <h3 className="text-2xl font-bold font-sans mb-6 text-surface-text">{t('contact.form_title')}</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  label={t('contact.form_name')}
                  placeholder=""
                  {...register('name')}
                  error={errors.name?.message}
                />
                <Input
                  label={t('contact.form_phone')}
                  placeholder=""
                  {...register('phone')}
                  error={errors.phone?.message}
                />
              </div>

              <Textarea
                label={t('contact.form_message')}
                placeholder=""
                {...register('message')}
                error={errors.message?.message}
              />

              <Button type="submit" size="lg" className="w-full mt-2" isLoading={isSubmitting}>
                {isSubmitting ? t('contact.form_submitting') : t('contact.form_submit')}
              </Button>
            </form>
          </Card>
        </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};
