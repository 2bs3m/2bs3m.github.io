export interface Product {
  id: string;
  name_fr: string;
  description_fr: string;
  price: number;
  imageUrl: string;
  category_fr?: string;
}

export interface Service {
  id: string;
  title_fr: string;
  description_fr: string;
  imageUrl: string; // URL for the service icon/image
  category_fr?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FAQItem {
  id: string;
  question_fr: string;
  answer_fr: string;
}

export interface NavLinkItem {
  label: string;
  path: string;
}
