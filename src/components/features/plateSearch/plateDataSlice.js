import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getVehicleDataByPlate = createAsyncThunk(
  "vehicle/getVehicleDataByPlate",
  async (plateNumber) => {
    const headers = new Headers();

    headers.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: "event-insurable-object-by-plate",
      data: {
        vehicle: {
          plate: plateNumber,
        },
      },
    });

    var requestOptions = {
      method: "POST",
      headers,
      body: raw,
      redirect: "follow",
    };
    return await fetch(
      "http://api.app.agentemotor.com/insurances/insuranceobject/actions/get",
      requestOptions
    ).then((response) => response.json());
  }
);

const initialState = {
  plateData: {
    plateNumber: "",
  },
  plateResponse: {
    status: "",
    data: {},
  },
};

const plateDataSlice = createSlice({
  name: "plateData",
  initialState,
  reducers: {
    savePlateNumber: (state, action) => {
      state.plateData = {
        plateNumber: action.payload.plateNumber,
      };
    },
    resetState: (state) => initialState,
  },
  //Handling API response
  extraReducers: {
    [getVehicleDataByPlate.pending]: (state, action) => {
      state.plateResponse.status = "loading";
    },
    [getVehicleDataByPlate.fulfilled]: (state, action) => {
      state.plateResponse.data = action.payload;
      state.plateResponse.status = "success";
    },
    [getVehicleDataByPlate.rejected]: (state, action) => {
      state.plateResponse.status = "failed";
    },
  },
});

//Exp. actions
export const { savePlateNumber, resetState } = plateDataSlice.actions;

//PlateData state val
export const selectPlateData = (state) => state.plateData.plateData;
//API response data state val
export const selectPlateResponse = (state) => state.plateData.plateResponse;

export default plateDataSlice.reducer;
