// Informações do Restaurante
export const RESTAURANT_INFO = {
  name: 'Sabor Arrochado',
  fullName: 'Sabor Arrochado Restaurante',
  address: 'Av. João Maurício, 1801 - Manaíra, João Pessoa - PB',
  reference: 'Ao lado do Mag Shopping',
  phone: '(83) 99932-8932',
  whatsappNumber: '5583999328932',
  instagram: '@restaurantesabor_arrochado',
  instagramUrl: 'https://instagram.com/restaurantesabor_arrochado',
  hours: {
    open: '11:00',
    close: '15:30',
    days: 'Domingo a domingo',
  },
  coordinates: {
    lat: -7.1329,
    lng: -34.8377,
  },
} as const;

// Cores da Marca
export const COLORS = {
  primary: '#D4D836', // Verde-limão
  secondary: '#2D5016', // Verde escuro
  offWhite: '#F5F3ED',
  white: '#FFFFFF',
  black: '#1A1A1A',
  gray: '#3A3A3A',
} as const;

// Mensagens WhatsApp pré-preenchidas
export const WHATSAPP_MESSAGES = {
  default: 'Olá! Vim pelo site do Sabor Arrochado e gostaria de saber mais sobre o cardápio.',
  dish: (dishName: string) => `Olá! Vim pelo site do Sabor Arrochado e tenho interesse no ${dishName}.`,
  reservation: 'Olá! Gostaria de fazer uma reserva no Sabor Arrochado.',
} as const;

// Links de Navegação
export const NAV_LINKS = [
  { label: 'Início', href: '#home' },
  { label: 'O Restaurante', href: '#about' },
  { label: 'Cardápio', href: '#menu' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Localização', href: '#location' },
] as const;

// Meta Tags
export const SEO = {
  title: 'Sabor Arrochado | Restaurante em Manaíra, João Pessoa',
  description: 'Sabor Arrochado Restaurante em Manaíra, João Pessoa. Sabores nordestinos, pratos generosos e uma experiência arrochada ao lado do Mag Shopping.',
  keywords: 'restaurante, João Pessoa, Manaíra, comida nordestina, frutos do mar',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://sabor-arrochado.com',
  canonical: 'https://sabor-arrochado.com',
} as const;

// Schema.org Estruturado
export const SCHEMA_ORG = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: RESTAURANT_INFO.fullName,
  image: '/images/hero.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: RESTAURANT_INFO.address,
    addressLocality: 'João Pessoa',
    addressRegion: 'PB',
    addressCountry: 'BR',
  },
  telephone: RESTAURANT_INFO.phone,
  url: 'https://sabor-arrochado.com',
  priceRange: '$$',
  cuisineType: 'Brazilian',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: RESTAURANT_INFO.hours.open,
    closes: RESTAURANT_INFO.hours.close,
  },
} as const;
