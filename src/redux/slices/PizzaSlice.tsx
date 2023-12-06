import { createSlice } from "@reduxjs/toolkit";
import { FetchPizzaAction, PizzaState, PizzaType } from "../../@types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk<
  PizzaType[],
  { sortParam: string; categoryParam: string }
>("/pizzas", async (params: FetchPizzaAction) => {
  try {
    const { sortParam, categoryParam } = params;
    const response = await axios.get(
      "https://654cf22b77200d6ba859c12f.mockapi.io/pizzas" +
        sortParam +
        categoryParam
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.pizzas = action.payload;
    });
    builder.addCase(fetchPizza.pending, (state) => {
      state.pizzas = [];
    });
    builder.addCase(fetchPizza.rejected, (state) => {
      state.pizzas = [];
    });
  },
});

export const { set_pizza } = PizzaSlice.actions;
export default PizzaSlice.reducer;
