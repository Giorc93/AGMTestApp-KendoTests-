import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicleData: {},
};

export const vehicleDataSlice = createSlice({
  name: "vehicleData",
  initialState,
  reducers: {
    saveVehicleData: (state, action) => {
      state.vehicleData = {};
    },
    savePlaceData: (state, action) => {
      state.vehicleData = {
        placeData: action.payload,
      };
    },
    resetUserDataState: (state) => initialState,
  },
});

//Exp. actions
export const {
  saveVehicleData,
  savePlaceData,
  resetUserDataState,
} = vehicleDataSlice.actions;
//Exp. selectors
export const selectUserData = (state) => state.userData;

export default vehicleDataSlice.reducer;
