import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    reset: (state, action) => {
      state.count = 0;
    },
    counterAmount:(state,action) => {
        state.count = action.payload
    }
  }
});

export const { increment, decrement, reset,counterAmount } = countSlice?.actions;

export default countSlice.reducer;
