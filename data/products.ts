import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'prod1',
    name_fr: 'Smartphone Modèle X',
    description_fr: 'Un smartphone dernier cri avec des fonctionnalités avancées et un appareil photo haute résolution.',
    price: 350000, // FCFA
    imageUrl: 'https://picsum.photos/seed/product1/400/300',
    category_fr: 'Électronique',
  },
  {
    id: 'prod2',
    name_fr: 'Ordinateur Portable Pro',
    description_fr: 'Performant et léger, idéal pour les professionnels et les étudiants.',
    price: 750000, // FCFA
    imageUrl: 'https://picsum.photos/seed/product2/400/300',
    category_fr: 'Informatique',
  },
  {
    id: 'prod3',
    name_fr: 'Casque Audio Bluetooth',
    description_fr: 'Profitez d\'un son immersif avec ce casque sans fil confortable.',
    price: 45000, // FCFA
    imageUrl: 'https://picsum.photos/seed/product3/400/300',
    category_fr: 'Accessoires',
  },
  {
    id: 'prod4',
    name_fr: 'Montre Connectée Sport',
    description_fr: 'Suivez vos activités physiques et restez connecté avec style.',
    price: 85000, // FCFA
    imageUrl: 'https://picsum.photos/seed/product4/400/300',
    category_fr: 'Gadgets',
  },
  {
    id: 'prod5',
    name_fr: 'T-shirt Logo 2BS 3M',
    description_fr: 'Affichez votre soutien avec ce T-shirt confortable et stylé.',
    price: 15000, // FCFA
    imageUrl: 'https://picsum.photos/seed/product5/400/300',
    category_fr: 'Vêtements',
  },
  {
    id: 'prod6',
    name_fr: 'Mug Isotherme',
    description_fr: 'Gardez vos boissons chaudes ou froides plus longtemps.',
    price: 12000, // FCFA
    imageUrl: 'https://picsum.photos/seed/product6/400/300',
    category_fr: 'Maison',
  },
];
