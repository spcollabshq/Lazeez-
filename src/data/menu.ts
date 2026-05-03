
import { Dish } from '../types';

export const dishes: Dish[] = [
  {
    id: 1,
    name: 'Kolkata Special Biryani',
    price: 450,
    description: 'Aromatic basmati rice cooked with succulent mutton, traditional spices, and the iconic Kolkata potato.',
    image: '/images/regenerated_image_1777723301514.jpg',
    category: 'Main Course',
    tags: ['Popular', 'Chef’s Choice'],
    isVeg: false,
    spiceLevel: 'Medium'
  },
  {
    id: 2,
    name: 'Tangra Style Chilli Chicken',
    price: 380,
    description: 'A Kolkata Chinatown classic—crispy chicken tossed in a spicy, garlicky, and umami-rich sauce.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600',
    category: 'Starters',
    tags: ['Spicy', 'Popular'],
    isVeg: false,
    spiceLevel: 'Spicy'
  },
  {
    id: 3,
    name: 'Kosha Mangsho',
    price: 520,
    description: 'Slow-cooked, velvety mutton curry with rich spices.',
    image: '/images/regenerated_image_1777731810182.webp',
    category: 'Main Course',
    tags: ['Must Try', 'Chef’s Choice'],
    isVeg: false,
    spiceLevel: 'Medium'
  },
  {
    id: 4,
    name: 'Mishti Doi Cheesecake',
    price: 280,
    description: 'The soul of Bengal meets French patisserie. A decadent fusion of date palm jaggery and yogurt.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600',
    category: 'Desserts',
    tags: ['Popular'],
    isVeg: true
  },
  {
    id: 5,
    name: 'Mochar Chop',
    price: 220,
    description: 'Traditional banana flower croquettes, crumb-fried to perfection.',
    image: '/images/regenerated_image_1777731814281.jpg',
    category: 'Starters',
    isVeg: true,
    spiceLevel: 'Mild'
  },
  {
    id: 6,
    name: 'Gondhoraj Lime Soda',
    price: 150,
    description: 'Refreshing soda with the aromatic zest of Bengal’s king of limes.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    category: 'Drinks',
    isVeg: true
  }
];
