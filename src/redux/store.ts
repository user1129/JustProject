import { configureStore } from "@reduxjs/toolkit";
import PizzaSlice from "./slices/PizzaSlice";
import FilterSlice from "./slices/FilterSlice";

export const store = configureStore({
  reducer: {
    filter: FilterSlice,
    pizza: PizzaSlice,
  },
});
