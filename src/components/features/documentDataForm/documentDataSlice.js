import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  documentData: {
    idType: "",
    idNumber: "",
  },
};

export const documentDataSlice = createSlice({
  name: "documentData",
  initialState,
  reducers: {
    saveDocumentData: (state, action) => {
      state.documentData = {
        idType: action.payload.idType.value,
        idNumber: action.payload.idNumber,
      };
    },
    resetDocumentDataState: (state) => initialState,
  },
});

//Exp. actions
export const {
  saveDocumentData,
  resetDocumentDataState,
} = documentDataSlice.actions;
//Exp. selectors
export const selectDocumentData = (state) => state.documentData;

export default documentDataSlice.reducer;
