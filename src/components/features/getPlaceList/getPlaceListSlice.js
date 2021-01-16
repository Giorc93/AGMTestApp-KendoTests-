import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPlaceListByString = createAsyncThunk(
  "place/getPlaceListByString",
  async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IjNPaWRDSUZVeDdpSzJIVzdhVDR1N2c9PSIsInZhbHVlIjoiSmNyUHNKWUJvZWEyN1hsRWhUQWZYTTcxbmtSVVVMbXdyYXg1Ulp1bG9NaW8rS2xkMkpOTHhHVmRVVnBxaVdrWiIsIm1hYyI6IjZjMDU5YmM4ZWM3ODgwYjg0MTZmZmY2NTExNjhhY2IwMTg0M2I1OTEyMDU2Nzg4NTliNDAyZGEwZWZlMDgxZGEifQ%3D%3D; agentemotor_session=eyJpdiI6ImZcL0MwVkxDK3kxOUtxTWZxdU1iWENnPT0iLCJ2YWx1ZSI6IlBJWGpwYVdzUXYrTER0RG1PbkN3VEk1XC9cLzJ1SFJnUWQrS2t0T3pcL0FhZjBzNTd3NUh0RDJlZ3lLa0o1K284VGkiLCJtYWMiOiJkOWNlMjQzY2UzYWFlOGM0ZTkyZjAzYjk2MjgwOTZkMjIzZWVhZjI5NmU0YThiM2M4NTdlZjU2ZjRjYTQ2MzhhIn0%3D"
    );

    var raw = JSON.stringify({
      name: "event-ubication-get-list-place",
      timestamp: "dog",
      origin: "api.consume",
      data: { city_name: "alls" },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    return await fetch(
      "http://api.app.agentemotor.com/insurances/ubication/actions/get",
      requestOptions
    ).then((response) => response.json());
  }
);

const getPlaceListSlice = createSlice({
  name: "getPlaceList",
  initialState: {
    placeResponseData: {
      data: [],
      status: "",
    },
  },
  extraReducers: {
    [getPlaceListByString.pending]: (state, action) => {
      state.placeResponseData.status = "loading";
    },
    [getPlaceListByString.fulfilled]: (state, action) => {
      state.placeResponseData.data = action.payload;
      state.placeResponseData.status = "success";
    },
    [getPlaceListByString.rejected]: (state, action) => {
      state.placeResponseData.status = "failed";
    },
  },
});

export const selectPlaceResponse = (state) => state.placeData.placeResponseData;

export default getPlaceListSlice.reducer;
