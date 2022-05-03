import { createSlice } from "@reduxjs/toolkit";
import { getList } from "./thunks";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    loading: false,
    data: [],
    error: false,
  },
  extraReducers: {
    [getList.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.data = state.data;
    },

    [getList.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.data = state.data;
    },
    [getList.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
  },
});

export default todoListSlice.reducer;
