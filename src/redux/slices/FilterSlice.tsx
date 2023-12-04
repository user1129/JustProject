import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Filter } from "../../@types/types";

const initialState: Filter = {
  sort: 0,
  category: 0,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    change_sort: (state, action: PayloadAction<number>) => {
      state.sort = Number(action.payload);
    },
    change_category: (state, action: PayloadAction<number>) => {
      state.category = Number(action.payload);
    },
  },
});

export const { change_category, change_sort } = FilterSlice.actions;
export default FilterSlice.reducer;
