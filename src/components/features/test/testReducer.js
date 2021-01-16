import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    value: 1,
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
  },
});

export const { add } = testSlice.actions;

export const selectTest = (state) => state.test.value;

export default testSlice.reducer;
