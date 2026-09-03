// Utilitário central de métricas e conversões (Google Ads + Google Analytics)

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID =
  (import.meta.env.VITE_GOOGLE_ADS_ID as string) || 'AW-11211091548';

export const GOOGLE_ADS_CONVERSION_SEND_TO =
  (import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID as string) ||
  'AW-11211091548/kqgNCMzumvMYENzc7uEp';

export const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || '';

/**
 * Inicializa medições adicionais (como GA4) se configuradas via ambiente.
 */
export const initAnalytics = (): void => {
  if (typeof window === 'undefined') return;

  if (GA_MEASUREMENT_ID && typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
};

/**
 * Envia o evento de conversão específico do Google Ads.
 */
export const trackGoogleAdsConversion = (
  sendTo: string = GOOGLE_ADS_CONVERSION_SEND_TO,
  additionalParams?: Record<string, unknown>
): void => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    console.debug('[Analytics] gtag not available for conversion');
    return;
  }

  try {
    window.gtag('event', 'conversion', {
      send_to: sendTo,
      ...additionalParams,
    });
  } catch (error) {
    console.error('[Analytics] Error tracking Google Ads conversion:', error);
  }
};

/**
 * Rastreia cliques nos botões de contato via WhatsApp.
 * Dispara evento tanto no GA4 (`generate_lead` e `whatsapp_click`) quanto no Google Ads.
 */
export const trackWhatsAppClick = (source: string): void => {
  if (typeof window === 'undefined') return;

  // Disparo de evento GA4
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: source,
    });

    window.gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: source,
      lead_type: 'whatsapp',
    });
  }

  // Disparo da conversão do Google Ads
  trackGoogleAdsConversion();
};

/**
 * Rastreia o envio bem-sucedido do formulário de contato.
 * Dispara evento tanto no GA4 (`contact_form_submit`) quanto no Google Ads.
 */
export const trackFormSubmit = (details?: { name?: string }): void => {
  if (typeof window === 'undefined') return;

  // Disparo de evento GA4
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'contact_form_submit', {
      event_category: 'lead',
      event_label: details?.name ? 'named_lead' : 'anonymous_lead',
    });

    window.gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: 'contact_form',
      lead_type: 'form',
    });
  }

  // Disparo da conversão do Google Ads
  trackGoogleAdsConversion();
};
