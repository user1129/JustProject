export interface PizzaType {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
  category: number;
}

export interface CartItemType {}

export interface HeaderType {
  is?: number;
}

export interface Filter {
  sort: string;
  category: string;
}

export interface PizzaSliceType {
  pizza: PizzaType[];
}
