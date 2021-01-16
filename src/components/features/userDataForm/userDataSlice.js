import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    userData: {
      firstName: "",
      lastName: "",
      birthDate: "",
      email: "",
      phoneNumber: "",
      placeData: "",
    },
  },
  reducers: {
    saveUserData: (state, action) => {
      state.userData = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthDate: action.payload.birthDate,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        placeData: state.userData.placeData,
      };
    },
    savePlaceData: (state, action) => {
      console.log(action.payload);
      state.userData = {
        placeData: action.payload,
      };
    },
  },
});

export const { saveUserData, savePlaceData } = userDataSlice.actions;

export const selectUserData = (state) => state.userData;

export default userDataSlice.reducer;
