import { RESTAURANT_INFO, WHATSAPP_MESSAGES } from '@constants/index';

export const getWhatsAppLink = (message?: string): string => {
  const text = message || WHATSAPP_MESSAGES.default;
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
};

export const getWhatsAppLinkForDish = (dishName: string): string => {
  return getWhatsAppLink(WHATSAPP_MESSAGES.dish(dishName));
};

export const openWhatsApp = (message?: string): void => {
  const link = getWhatsAppLink(message);
  window.open(link, '_blank');
};
