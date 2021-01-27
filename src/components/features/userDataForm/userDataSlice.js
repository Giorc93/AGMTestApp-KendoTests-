import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    placeData: "",
  },
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.userData = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthDate: action.payload.birthDate,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        placeData: state.userData.placeData,
        idType: action.payload.idType,
        idNumber: action.payload.idNumber || action.payload.nitNumber,
        gender: action.payload.gender,
      };
    },
    savePlaceData: (state, action) => {
      state.userData = {
        placeData: action.payload,
      };
    },
    resetUserDataState: (state) => initialState,
  },
});

//Exp. actions
export const {
  saveUserData,
  savePlaceData,
  resetUserDataState,
} = userDataSlice.actions;
//Exp. selectors
export const selectUserData = (state) => state.userData;

export default userDataSlice.reducer;
