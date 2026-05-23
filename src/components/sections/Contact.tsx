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

const contactSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter no mínimo 3 caracteres' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  message: z.string().min(10, { message: 'Mensagem deve ter no mínimo 10 caracteres' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitting(false);
    setSuccessMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    reset();
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <Section id="contact" className="relative bg-surface-container/30">
      <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <Badge variant="outline">{t('contact.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-sans text-surface-text">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-surface-text-variant">
            {t('contact.subtitle')}
          </p>
        </div>

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
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 lg:p-10 bg-white shadow-xl shadow-primary/5">
            <h3 className="text-2xl font-bold font-sans mb-6 text-surface-text">{t('contact.form_title')}</h3>
            
            {successMessage && (
              <div className="mb-6 p-4 bg-primary-container/50 border border-primary/20 text-primary font-semibold rounded-xl text-sm">
                {t('contact.form_success')}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <Input
                label={t('contact.form_name')}
                placeholder=""
                {...register('name')}
                error={errors.name?.message}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  label={t('contact.form_email')}
                  type="email"
                  placeholder=""
                  {...register('email')}
                  error={errors.email?.message}
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
      </Container>
    </Section>
  );
};
