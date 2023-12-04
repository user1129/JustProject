import { createSlice } from "@reduxjs/toolkit";
import { PizzaState } from "../../@types/types";

const initialState: PizzaState = {
  pizzas: [],
};

const PizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    set_pizza: (state, action) => {
      state.pizzas = action.payload;
    },
  },
});

export const { set_pizza } = PizzaSlice.actions;
export default PizzaSlice.reducer;
