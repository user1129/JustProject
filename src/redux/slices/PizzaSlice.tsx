import { createSlice } from "@reduxjs/toolkit";

const PizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzas: [],
  },
  reducers: {
    set_pizza: (state, action) => {
      state.pizzas = action.payload;
    },
  },
});

export const { set_pizza } = PizzaSlice.actions;
export default PizzaSlice.reducer;
