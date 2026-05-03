
export type Category = 'Starters' | 'Main Course' | 'Drinks' | 'Desserts';

export interface Dish {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  secondaryImage?: string;
  category: Category;
  tags?: string[];
  isVeg: boolean;
  spiceLevel?: 'Mild' | 'Medium' | 'Spicy';
}

export interface CartItem extends Dish {
  quantity: number;
  selectedOptions?: {
    spiceLevel?: string;
    addons?: string[];
  };
}

export interface ReservationData {
  date: string;
  time: string;
  guests: number;
  name: string;
  phone: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'Confirmed' | 'Preparing' | 'Out for Delivery' | 'Delivered';
  type: 'Delivery' | 'Takeaway' | 'Dine-in';
  createdAt: string;
}
