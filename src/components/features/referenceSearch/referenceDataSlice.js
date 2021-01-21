import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//TODO: Check token for part. users
export const getVehicleDataByRef = createAsyncThunk(
  "vehicle/getVehicleDataByRef",
  async (refData) => {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6InE2V0xlb0N4YXhCb2lhTTM1bm1tSVE9PSIsInZhbHVlIjoiYlo5YXZvYXNQZjlNckl4Y0lIdTI3VFdXRjVVWnZJWlpTeEpCbk5rcVZJKzNYNWFReHhSNXFvU3RGK21rcld1SyIsIm1hYyI6ImUyMDMwNjU2YTNiYWQyZjhmNTFjOTQzYWQyYTc2MzRhZTQ1YmUyMGMzOTgwOTJiY2MyMjFiZGVmOTYxZDc4NWYifQ%3D%3D; agentemotor_session=eyJpdiI6IlB5U29rVFp0NFwvXC9UeXpoQWN1RDhBUT09IiwidmFsdWUiOiJpaG5jRnpsaTM2UFdlV1NKTXF1cGs5bnducytHeEZxXC9SMCt1dERxWWZ3dlhEeXBYQUFla2tYb1NiTHBFWFlwbCIsIm1hYyI6ImU1ODFiMzVhZDAyODZjYjcyNDI4M2EzMDE1ZGQ0OTkyNWQwY2QxZWZlOTg2ZGY0M2NkZTJlZGM5ZjAyMWMzZTcifQ%3D%3D"
    );

    var raw = JSON.stringify({
      name: "event-insurable-object-by-ref",
      data: { vehicle: { line: refData.line, code: "0" } },
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

const referenceDataSlice = createSlice({
  name: "referenceData",
  initialState: {
    vehicleByRef: {
      status: "",
      data: {},
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

//API response data state val
export const selectRefResponse = (state) => state.referenceData.vehicleByRef;

export default referenceDataSlice.reducer;
