export interface Product {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  price: number;
  collection: 'bracelets' | 'outerwear' | 'tailored';
  image: string;
  images: string[];
  description: string;
  descriptionAr: string;
  status: 'available' | 'coming-soon' | 'sold-out';
  specs: {
    material: string;
    materialAr: string;
    coating: string;
    coatingAr: string;
    resistance: string;
    resistanceAr: string;
    size: string;
    sizeAr: string;
    color: string;
    colorAr: string;
    unisex: boolean;
  };
}

export interface Collection {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  description: string;
  descriptionAr: string;
  status: 'available' | 'coming-soon' | 'sold-out';
  image: string;
  images?: string[];
  productCount: number;
  featured?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  selectedVariant?: string;
}
