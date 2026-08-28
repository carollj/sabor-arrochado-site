export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: MenuCategory;
  featured?: boolean;
  image?: string;
}

export type MenuCategory = 
  | 'porcoes'
  | 'pratos-principais'
  | 'pratos-individuais'
  | 'massas'
  | 'frutos-do-mar'
  | 'saladas';

export interface FeaturedDish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  highlights: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  featured?: boolean;
}

export interface RestaurantInfo {
  name: string;
  fullName: string;
  address: string;
  reference: string;
  phone: string;
  whatsappNumber: string;
  instagram: string;
  instagramUrl: string;
  hours: {
    open: string;
    close: string;
    days: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}
