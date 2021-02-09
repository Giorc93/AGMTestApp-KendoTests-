import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formOrigin: "plate",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.formOrigin = action.payload;
    },
    resetGlobalsState: (state) => initialState,
  },
});

//Exp. actions
export const { setOrigin, resetDocumentDataState } = globalSlice.actions;
//Exp. selectors
export const selectFormOrigin = (state) => state.formOrigin;

export default globalSlice.reducer;
