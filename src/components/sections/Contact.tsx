import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Badge } from '../ui/Badge';
import { Input, Textarea } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ScrollReveal } from '../ui/ScrollReveal';
import { trackFormSubmit } from '../../utils/analytics';

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
    const text = `Olá! Vim pelo site e gostaria de falar com a clínica.\n\n*Nome:* ${data.name}\n*Telefone:* ${data.phone}\n\n*Mensagem:*\n${data.message}`;
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
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold font-sans mb-8 text-surface-text">{t('contact.info_title')}</h3>
              <ul className="flex flex-col gap-8">
                <li className="flex items-start gap-4">
                  <div className="bg-primary-container p-4 rounded-xl text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-surface-text mb-1">{t('contact.address')}</h4>
                    <p className="text-surface-text-variant leading-relaxed" dangerouslySetInnerHTML={{ __html: t('contact.address_val') }} />
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary-container p-4 rounded-xl text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-surface-text mb-1">{t('contact.phone')}</h4>
                    <p className="text-surface-text-variant">(48) 99103-3490</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary-container p-4 rounded-xl text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-surface-text mb-1">{t('contact.email')}</h4>
                    <p className="text-surface-text-variant">contato@larissaramos.com.br</p>
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

              {/* Google Maps Embed */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-sm h-48 w-full border border-primary/10">
                <iframe 
                  src="https://maps.google.com/maps?q=Rod.%20Tertuliano%20Brito%20Xavier,%20210%20-%20Canasvieiras,%20Florian%C3%B3polis%20-%20SC,%2088054-000&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                />
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
