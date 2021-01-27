import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//TODO: Check token for part. users
export const getVehicleDataByRef = createAsyncThunk(
  "vehicle/getVehicleDataByRef",
  async (refData) => {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IndXaVZ2aFlIbk5KREJvek1iUHl0R2c9PSIsInZhbHVlIjoidnJwSEpXZGRQdEMzRkZwNG4xZ1wvQ0k5VEtCeWE5UnozakRTR3FEZXp4dmZtYVNcLzZPOHN4ZEN0MGsrYUt5dXNQIiwibWFjIjoiMjUwNDBkZTBjMGZhMmNkZWRhNjRiNzMwNzUwYmNiZTRlMjBiMTdlM2E1MWQ1N2Q1ZTEyNmU2YmRhMzYwOTcyYyJ9; agentemotor_session=eyJpdiI6ImU2QjJuTzNkOGJlN2FjMFdGakxzOHc9PSIsInZhbHVlIjoiK3VMS3V6SWhHMWZudDRoUW1COWNVMXR2eFBVY0pvY1Z5Y1UzdW03XC9oRmJRT2d0UFBDM1JzSWlVUVc2dkxYOW8iLCJtYWMiOiIyZTI5YjM1Y2I1YmI3NTA1MjM5OGY5NjM5NjY0YjdjODgyYjMwMGRiYjkzZjE4ODkyZDliMjk3MmFiMmYwYzhhIn0%3D"
    );

    var raw = JSON.stringify({
      name: "event-insurable-object-by-ref",
      data: {
        vehicle: {
          line: refData.line,
          brand: refData.brand,
          model: parseInt(refData.model),
        },
      },
      timestamp: "30072020",
      origin: "postman",
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
  selVehicleData: {},
  vehicleByRef: {
    status: "",
    data: {},
  },
};

const referenceDataSlice = createSlice({
  name: "referenceData",
  initialState,
  reducers: {
    resetVehicleDataState: (state) => {
      state.vehicleByRef = initialState.vehicleByRef;
    },
    saveVehicleData: (state, action) => {
      state.selVehicleData = action.payload;
    },
  },
  //Handling API response
  extraReducers: {
    [getVehicleDataByRef.pending]: (state, action) => {
      state.vehicleByRef.status = "loading";
    },
    [getVehicleDataByRef.fulfilled]: (state, action) => {
      state.vehicleByRef.data = action.payload;
      state.vehicleByRef.status = "success";
    },
    [getVehicleDataByRef.rejected]: (state, action) => {
      state.vehicleByRef.status = "failed";
    },
  },
});

export const {
  saveVehicleData,
  resetVehicleDataState,
} = referenceDataSlice.actions;

//API response data state val
export const selectRefResponse = (state) => state.referenceData.vehicleByRef;
export const selectVehicleData = (state) => state.referenceData.selVehicleData;

export default referenceDataSlice.reducer;
