import { Slice, createSlice } from "@reduxjs/toolkit";
import { Filter } from "../../@types/types";

const FilterSlice: Slice<Filter> = createSlice({
  name: "basket",
  initialState: {
    sort: "",
    category: "",
  },
  reducers: {
    change_sort: (state, action) => {
      state.sort = action.payload;
    },
    change_category: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { change_category, change_sort } = FilterSlice.actions;
export default FilterSlice.reducer;
