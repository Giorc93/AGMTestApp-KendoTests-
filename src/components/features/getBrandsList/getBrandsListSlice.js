import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//API Req. using test token
export const getBrandsList = createAsyncThunk(
  "place/getBrandsList",
  async () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Cookie",
      //TODO: Test using consultant account.
      //Test token
      "XSRF-TOKEN=eyJpdiI6IjNPaWRDSUZVeDdpSzJIVzdhVDR1N2c9PSIsInZhbHVlIjoiSmNyUHNKWUJvZWEyN1hsRWhUQWZYTTcxbmtSVVVMbXdyYXg1Ulp1bG9NaW8rS2xkMkpOTHhHVmRVVnBxaVdrWiIsIm1hYyI6IjZjMDU5YmM4ZWM3ODgwYjg0MTZmZmY2NTExNjhhY2IwMTg0M2I1OTEyMDU2Nzg4NTliNDAyZGEwZWZlMDgxZGEifQ%3D%3D; agentemotor_session=eyJpdiI6ImZcL0MwVkxDK3kxOUtxTWZxdU1iWENnPT0iLCJ2YWx1ZSI6IlBJWGpwYVdzUXYrTER0RG1PbkN3VEk1XC9cLzJ1SFJnUWQrS2t0T3pcL0FhZjBzNTd3NUh0RDJlZ3lLa0o1K284VGkiLCJtYWMiOiJkOWNlMjQzY2UzYWFlOGM0ZTkyZjAzYjk2MjgwOTZkMjIzZWVhZjI5NmU0YThiM2M4NTdlZjU2ZjRjYTQ2MzhhIn0%3D"
    );

    var raw = JSON.stringify({
      name: "event-insurable-get-list-brands",
      data: { vehicle: { code: "0" } },
      timestamp: "30072020",
      origin: "api.consume",
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
  brandsResponseData: {
    data: [],
    status: "",
  },
};

const getBrandsListSlice = createSlice({
  name: "getBrandsList",
  initialState,
  reducers: {
    resetBrandsDataState: (state) => initialState,
  },
  extraReducers: {
    [getBrandsList.pending]: (state, action) => {
      state.brandsResponseData.status = "loading";
    },
    [getBrandsList.fulfilled]: (state, action) => {
      state.brandsResponseData.data = action.payload;
      state.brandsResponseData.status = "success";
    },
    [getBrandsList.rejected]: (state, action) => {
      state.brandsResponseData.status = "failed";
    },
  },
});

export const { resetBrandsDataState } = getBrandsListSlice.actions;

//Exp. state value (useSelector)
export const selectBrandsResponse = (state) =>
  state.brandsData.brandsResponseData;

export default getBrandsListSlice.reducer;
