import { createAction } from "@reduxjs/toolkit";

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

export interface PizzaState {
  pizzas: PizzaType[];
}

export interface RootState {
  pizza: PizzaState;
  filter: Filter;
}

export interface CartItemType {}

export interface HeaderType {
  is?: number;
}

export interface Filter {
  sort: number;
  category: number;
}

export interface PizzaSliceType {
  pizza: PizzaType[];
}

export interface HomeProp {
  load: boolean;
}

export interface FetchPizzaAction {
  sortParam: string;
  categoryParam: string;
}

export const DATA_FETCHER = createAction<FetchPizzaAction>("fetchPizza");
