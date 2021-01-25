import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getQuotation = createAsyncThunk(
  "quotation/getQuotation",
  async (quoteData) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "token",
      "6haubsz6iSyw2UsuvjRUVKYLDjarr_mgJnB5D2raug--Mos-XX6P3znAGItzz6CRFS7rDT2P-GmeidgS5pse1xszqcpCWRBmRRnNP_wLuhsFiin0EMVR8QIGlVHbMVmzvDxgFE4H9ug14FNRpYFfnjSDepBsp7z5lkgf5qYk1ZQtbfZ0auDbMo8N6ISni5wI7JWMg-AGD3_zarHh4um6Le1DFWPl39ZihEZTfogPL2av4nCf_Jat9VWzh4bQqVSouMZc_D9hNzHoMnrDR3w5R0lQ7PkQlQWyBzICLMiIvbEPzfg8oaI7If3tvgYe2ynhlPM-Go96HiO4scuey8jzuw.."
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(quoteData);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return await fetch(
      "http://api.app.agentemotor.com/insurances/process/create",
      requestOptions
    ).then((response) => response.json());
  }
);

const initialState = {
  quotationData: {
    data: [],
    status: "",
  },
};

const getQuotationSlice = createSlice({
  name: "getQuotation",
  initialState,
  reducers: {
    resetState: (state) => initialState,
  },
  extraReducers: {
    [getQuotation.pending]: (state, action) => {
      state.quotationData.status = "loading";
    },
    [getQuotation.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.quotationData.data = action.payload;
      state.quotationData.status = "success";
    },
    [getQuotation.rejected]: (state, action) => {
      state.quotationData.status = "failed";
    },
  },
});

export const { resetState } = getQuotationSlice.actions;

//Exp. state value (useSelector)
export const selectQuotation = (state) => state.quotationData.quotationData;

export default getQuotationSlice.reducer;
